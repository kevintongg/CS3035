// const people = require('./people');

const restaurants = [
  {
    name: 'Maestro\'s Ocean Club',
    price: '$$$$',
  },
  {
    name: 'Denny\'s',
    price: '$',
  },
];

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
  this.text = text.toString().split('\n');
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
  return this.inner.draw(width, height - 1).concat([repeat('-', width)]);
};

function RTextCell(text) {
  TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);

RTextCell.prototype.draw = function (width, height) {
  const result = [];
  for (let i = 0; i < height; i++) {
    const line = this.text[i] || '';
    result.push(repeat(' ', width - line.length) + line);
  }
  return result;
};

function CenteredTextCell(text) {
  TextCell.call(this, text);
}

CenteredTextCell.prototype = Object.create(TextCell.prototype);

CenteredTextCell.prototype.draw = function (width, height) {
  const result = [];
  for (let i = 0; i < height; i++) {
    const line = this.text[i] === '[object Object]' ? '' : this.text[i];
    result.push(repeat(' ', Math.floor((width - line.length) / 2)) + line + repeat(' ', Math.floor((width - line.length) / 2)));
  }
  return result;
};

function BorderedCell(inner) {
  this.inner = inner;
}

BorderedCell.prototype.minWidth = function () {
  return this.inner.minWidth();
};

BorderedCell.prototype.minHeight = function () {
  return this.inner.minHeight() + 1;
};

BorderedCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height - 1).concat(repeat('-', width).concat(repeat('|', height)));
};

function centeredTable(data) {
  const keys = Object.keys(data[0]);
  const headers = keys.map(name => new CenteredTextCell(new TextCell(name)));
  const body = data.map(row => keys.map((name) => {
    const value = row[name];
    if (typeof value === 'string') {
      return new CenteredTextCell(String(value));
    }
    return new TextCell(String(value));
  }));
  return [headers].concat(body);
}

function borderedTable(data) {
  const keys = Object.keys(data[0]);
  const headers = keys.map(name => new BorderedCell(new TextCell(name)));
  const body = data.map(row => keys.map((name) => {
    const value = row[name];
    if (typeof value === 'number') {
      return new RTextCell(String(value));
    }
    return new TextCell(String(value));
  }));
  return [headers].concat(body);
}

// function dataTable(data) {
//   const keys = Object.keys(data[0]);
//   const headers = keys.map(name => new UnderlinedCell(new TextCell(name)));
//   const body = data.map(row => keys.map((name) => {
//     const value = row[name];
//     if (typeof value === 'number') {
//       return new RTextCell(String(value));
//     }
//     return new TextCell(String(value));
//   }));
//   return [headers].concat(body);
// }

console.log('Problem 1:');
console.log(drawTable(centeredTable(restaurants)));
console.log('\nProblem 2:');
console.log(drawTable(borderedTable(restaurants)));
// console.log('\n' + drawTable(dataTable(people)));
