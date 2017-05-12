const people = require('./people');
const restaurants = require('./restaurants');

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

function RTextCell(inner, text) {
  this.inner = inner;
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
    const line = this.text[i] || '';
    result.push(repeat(' ', Math.floor((width - line.length) / 2)) + line + repeat(' ', Math.floor((width - line.length) / 2)));
  }
  return result;
};

function BorderedCell(text) {
  TextCell.call(this, text);
}

BorderedCell.prototype = Object.create(TextCell.prototype);

BorderedCell.prototype.draw = function (width, height) {
  const result = [];
  for (let i = 0; i < height; i++) {
    const line = this.text[i] || '';
    result.push('| ' + line + repeat(' ', width - line.length) + ' |');
  }
  return ([repeat('-', width + 4)]).concat(result).concat([repeat('-', width + 4)]);
};

function BorderedCellMod(text) {
  TextCell.call(this, text);
}

BorderedCellMod.prototype = Object.create(TextCell.prototype);

BorderedCellMod.prototype.draw = function (width, height) {
  const result = [];
  for (let i = 0; i < height; i++) {
    const line = this.text[i] || '';
    result.push('| ' + line + repeat(' ', width - line.length) + ' |');
  }
  return result;
};

function centeredTable(data) {
  const keys = Object.keys(data[0]);
  return data.map(row => keys.map((name) => {
    const value = row[name];
    if (typeof value === 'string') {
      return new CenteredTextCell(String(value));
    }
    return new TextCell(String(value));
  }));
}

function borderedTable(data) {
  const keys = Object.keys(data[0]);
  return data.map(row => keys.map((name) => {
    const value = row[name];
    if (typeof value === 'string') {
      return new BorderedCell(String(value));
    }
    return new TextCell(String(value));
  }));
}

function BorderedTableMod(data) {
  const keys = Object.keys(data[0]);
  const body = data.map(row => keys.map((name) => {
    const value = row[name];
    if (typeof value === 'object') {
      return new BorderedCellMod(String(value));
    }
    return new TextCell(String(value));
  }));
  return body;
}

function objectToTextCells(data) {
  const keys = Object.keys(data[0]);
  return data.map(row => new BorderedCell(String(keys.map(name => (name + ': ' + row[name])).join('\n'))));
}

function arrayTransform(array, size) {
  const result = [];

  while (array.length > 0) {
    result.push(array.slice(0, size));
    array = array.slice(size);
  }

  return result;
}


function getColumn(array, rowNum) {
  const result = arrayTransform(objectToTextCells(array), 3);
  return result.map(value => value[rowNum]);
}

function getRow(array, row) {
  const initial = arrayTransform(objectToTextCells(array), 3);
  const result = [];
  for (let i = 0; i < initial.length; i++) {
    result.push(array[row][i]);
  }
  return result;
}

console.log('Problem 1:\n');
console.log(drawTable(centeredTable(restaurants)));
console.log('\nProblem 2:\n');
console.log(drawTable(borderedTable(restaurants)));
console.log('\nProblem 5:\n');
console.log(drawTable(arrayTransform(objectToTextCells(people), 3)));
console.log('\nProblem 6:\n');
console.log(drawTable(arrayTransform(objectToTextCells(people), 3)).toUpperCase());

// Testing
console.log('Testing');
console.log(objectToTextCells(getColumn(people, 2), 3));
