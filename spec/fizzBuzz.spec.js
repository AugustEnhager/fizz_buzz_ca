const { expect } = require("chai")
const FizzBuzz = require('../src/fizzBuzz.js')

describe('FizzBuzz', () => {
  let game

  before(() => {
    game = new FizzBuzz()
  });

  it('is expected to return 1 if given 1', () => {
    expect(game.play(1)).to.eq(1)
  });

  it('is expected to return "fizz" if given 3', () => {
    expect(game.play(3)).to.eq('fizz')
  });

  it('is expected to return "buzz" if given 5', () => {
    expect(game.play(5)).to.eq('buzz')
  });

  it('is expected to return "fizz-buzz" if given 15', () => {
    expect(game.play(15)).to.eq('fizz-buzz')
  });
})
