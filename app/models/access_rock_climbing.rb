class AccessRockClimbing < ActiveRecord::Base
  establish_connection "routes_database_#{Rails.env}"
end
