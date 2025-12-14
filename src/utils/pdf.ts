const escapePdfText = (text: string) => text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

const buildPdfString = (title: string, lines: string[]) => {
  const header = '%PDF-1.4\n'
  const textEncoder = new TextEncoder()
  const textInstructions = ['BT', '/F1 16 Tf', '72 760 Td', `(${escapePdfText(title)}) Tj`, '/F1 12 Tf']

  if (lines.length === 0) {
    textInstructions.push('T*', '( ) Tj')
  } else {
    lines.forEach((line) => {
      textInstructions.push('T*', `(${escapePdfText(line)}) Tj`)
    })
  }

  textInstructions.push('ET')
  const streamContent = `${textInstructions.join('\n')}\n`
  const streamLength = textEncoder.encode(streamContent).length

  const objects = [
    `1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
`,
    `2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
`,
    `3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
`,
    `4 0 obj
<< /Length ${streamLength} >>
stream
${streamContent}endstream
endobj
`,
    `5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
`,
    `6 0 obj
<< /Producer (Portfolio BTS SIO Generator) >>
endobj
`,
  ]

  const offsets: number[] = [0]
  let body = ''
  let currentOffset = header.length
  for (const object of objects) {
    offsets.push(currentOffset)
    body += object
    currentOffset += object.length
  }

  const formatOffset = (value: number, isFree: boolean) =>
    `${value.toString().padStart(10, '0')} ${isFree ? '65535 f ' : '00000 n '} \n`

  const xrefEntries = offsets
    .map((offset, index) => formatOffset(offset, index === 0))
    .join('')

  const xrefStart = header.length + body.length
  const xref = `xref
0 ${offsets.length}
${xrefEntries}`

  const trailer = `trailer
<< /Size ${offsets.length} /Root 1 0 R /Info 6 0 R >>
startxref
${xrefStart}
%%EOF`

  return `${header}${body}${xref}${trailer}`
}

export const downloadSimplePdf = (filename: string, title: string, lines: string[]) => {
  const pdfString = buildPdfString(title, lines)
  const blob = new Blob([pdfString], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

