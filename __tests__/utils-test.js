import { getOutput } from './../src/utils'

describe('Utils (example function)', function() {
  beforeEach(() => {
  });

  it('It should add two string separated by default delimiter', function() {
    expect(getOutput('Hello', 'World')).toEqual('Hello World')
  })

  it('It should add two string separated by passed delimiter', function() {
    expect(getOutput('Hello', 'World', ', ')).toEqual('Hello, World')
  })
})
