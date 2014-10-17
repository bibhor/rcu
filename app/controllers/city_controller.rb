class CityController < ApplicationController
	def index
		@all_data = City.getAll();
		Rails.logger.debug @all_data
		
		respond_to do |format|
			format.json { render :json => @all_data}
		end
	end
end
