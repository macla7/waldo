module Api::V1
  class ImagesController < ApplicationController
    def index
      @images = Image.all
      render json: @images
    end
  end
end