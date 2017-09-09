class Module {
  constructor(delimiter=' ') {
    this.delimiter = delimiter
  }

  get (str1, str2) {
    return str1 + this.delimiter + str2
  }
}

export default Module
