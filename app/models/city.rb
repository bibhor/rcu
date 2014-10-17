class City < AccessRockClimbing
	self.table_name = 'city'
	has_many :area

	def self.getAll
		@cities = self.find(:all);
		@ret = [];
		@cities.each{ |city|
			temp = {};
			temp['city_name'] = city.city_name;
			temp['areas'] = Area.getAll(city.id);
			temp['id'] = city.id;
			@ret.push(temp);
		}
		return @ret;
	end

end