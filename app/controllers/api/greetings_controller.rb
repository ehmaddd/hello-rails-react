class Api::GreetingsController < ApplicationController
  def random_greeting
    greetings = Message.pluck(:content)
    random_greeting = greetings.sample

    render json: { greeting: random_greeting }
  end
end
