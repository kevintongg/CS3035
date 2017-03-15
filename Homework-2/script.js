function rowHeights(rows) {
  return rows.map(row => row.reduce((max, cell) => Math.max(max, cell.minHeight()), 0));
}

function colWidths(rows) {
  return rows[0].map((_, i) => rows.reduce((max, row) => Math.max(max, row[i].minWidth()), 0));
}

function drawTable(rows) {
  const heights = rowHeights(rows);
  const widths = colWidths(rows);
  
  function drawLine(blocks, lineNo) {
    return blocks.map(block => block[lineNo]).join(' ');
  }
  
  function drawRow(row, rowNum) {
    const blocks = row.map((cell, colNum) => cell.draw(widths[colNum], heights[rowNum]));
    return blocks[0].map((_, lineNo) => drawLine(blocks, lineNo)).join('\n');
  }
  
  return rows.map(drawRow).join('\n');
}

function repeat(string, times) {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

function TextCell(text) {
  this.text = text.split('\n');
}
TextCell.prototype.minWidth = function () {
  return this.text.reduce((width, line) => Math.max(width, line.length), 0);
};
TextCell.prototype.minHeight = function () {
  return this.text.length;
};
TextCell.prototype.draw = function (width, height) {
  const result = [];
  for (let i = 0; i < height; i++) {
    const line = this.text[i] || '';
    result.push(line + repeat(' ', width - line.length));
  }
  return result;
};

const rows = [];
for (let i = 0; i < 5; i++) {
  const row = [];
  for (let j = 0; j < 5; j++) {
    if ((j + i) % 2 === 0) {
      row.push(new TextCell('##'));
    } else {
      row.push(new TextCell('  '));
    }
  }
  rows.push(row);
}
console.log(drawTable(rows));

function UnderlinedCell(inner) {
  this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function () {
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function () {
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height - 1)
    .concat([repeat('-', width)]);
};

const ancestors = [
  {
    name: 'Emma de Milliano',
    sex: 'f',
    born: 1876,
    died: 1956,
    father: 'Petrus de Milliano',
    mother: 'Sophia van Damme',
  },
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    father: 'Carel Haverbeke',
    mother: 'Maria van Brussel',
  },
  {
    name: 'Cad Have',
    sex: 'm',
    born: 1900,
    died: 1905,
    father: 'Petrus de Milliano',
    mother: 'Emma De Milliano',
  },
  {
    name: 'Emma de Milliano',
    sex: 'f',
    born: 1876,
    died: 1956,
    father: 'Petrus de Milliano',
    mother: 'Sophia van Damme',
  },
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    father: 'Carel Haverbeke',
    mother: 'Maria van Brussel',
  },
  {
    name: 'Cad Have',
    sex: 'm',
    born: 1900,
    died: 1905,
    father: 'Petrus de Milliano',
    mother: 'Emma De Milliano',
  },
  {
    name: 'Emma de Milliano',
    sex: 'f',
    born: 1876,
    died: 1956,
    father: 'Petrus de Milliano',
    mother: 'Sophia van Damme',
  },
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    father: 'Carel Haverbeke',
    mother: 'Maria van Brussel',
  },
  {
    name: 'Cad Have',
    sex: 'm',
    born: 1900,
    died: 1905,
    father: 'Petrus de Milliano',
    mother: 'Emma De Milliano',
  },
];

function dataTable(data) {
  const keys = Object.keys(data[0]);
  const headers = keys.map(name => new UnderlinedCell(new TextCell(name)));
  const body = data.map(row => keys.map(name => new TextCell(String(row[name]))));
  return [headers].concat(body);
}

console.log(drawTable(dataTable(ancestors)));
