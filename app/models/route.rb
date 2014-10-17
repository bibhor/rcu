class Route < AccessRockClimbing
	self.table_name = 'route'
	belongs_to :section, foreign_key:"section_id"

	def self.getAll(section_id)
		@routes = self.where(section_id:section_id);
		@ret = [];
		@routes.each{ |route|
			temp = {};
			temp['route_name'] = route.route_name;
			temp['difficulty'] = route.difficulty;
			temp['id'] = route.id;
			@ret.push(temp);
		}
		return @ret;
	end
end
