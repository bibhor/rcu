class Area < AccessRockClimbing
	self.table_name = 'area'
	has_many :section
	belongs_to :city, foreign_key:"city_id"

	def self.getAll(city_id)
		@areas = self.where(city_id:city_id);
		@ret = [];
		@areas.each{ |area|
			temp = {};
			temp['area_name'] = area.area_name;
			temp['sections'] = Section.getAll(area.id);
			temp['id'] = area.id;
			temp['lat_long'] = area.lat_long;
			@ret.push(temp);
		}
		return @ret;
	end
end