import { default as Module } from './../../src/Module'

describe('Module (example class)', function() {
  beforeEach(() => {
  });

  it('It should add two string separated by default delimiter', function() {
    const instance = new Module()
    expect(instance.get('Hello', 'World')).toEqual('Hello World')
  })

  it('It should add two string separated by passed delimiter', function() {
    const instance = new Module(', ')
    expect(instance.get('Hello', 'World')).toEqual('Hello, World')
  })
})
