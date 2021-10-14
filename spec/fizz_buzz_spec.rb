require_relative '../src/fizz_buzz.rb'

describe FizzBuzz do
  before do
    @game = FizzBuzz.new
  end

  it.only 'is expected to return 1 if given 1' do
    expect(@game.play(1)).to eq 1
  end

  it 'is expected to return 2 if given 2' do
    expect(@game.play(2)).to eq 2
  end

  it 'is expected to return "fizz" if given 3' do
    expect(@game.play(3)).to eq 'fizz'
  end
end