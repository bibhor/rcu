class Section < AccessRockClimbing
	self.table_name = 'section'
	has_many :route
	belongs_to :area, foreign_key:"area_id"

	def self.getAll(area_id)
		@sections = self.where(area_id:area_id);
		@ret = [];
		@sections.each{ |section|
			temp = {};
			temp['section_name'] = section.section_name;
			temp['routes'] = Route.getAll(section.id);
			temp['id'] = section.id;
			@ret.push(temp);
		}
		return @ret;
	end
end