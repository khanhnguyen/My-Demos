class TripController < ApplicationController
  
  def create_trip    
    begin
      edit = params[:edit]      
      location_id = params[:location_id_basic]
      start_trip = params[:start_trip]
      end_trip = params[:end_trip]
      locat_name = params[:locat_name]
      user_id = fbsession.session_user_id
      if edit.eql?("true")
        trip = Trip.find(params[:trip_id])
        trip.location_id = location_id
        trip.start_trip = start_trip
        trip.end_trip = end_trip
        trip.user_id = user_id
        trip.locat_name = locat_name
        trip.save
      else      
        trip = Trip.new
        trip.location_id = location_id
        trip.start_trip = start_trip
        trip.end_trip = end_trip
        trip.user_id = user_id
        trip.locat_name = locat_name
        trip.save
      end
      @boolean = true
    rescue
    end
  end
end
