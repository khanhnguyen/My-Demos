class EventsController < ApplicationController
  include SocialStream::Controllers::Objects

  belongs_to_subjects :optional => true

  before_filter :profile_subject!, :only => :index

  def index
    index! do |format|
      format.json {
        start_time = Time.at(params[:start].to_i)
        end_time   = Time.at(params[:end].to_i)
        @activities =
          collection.
           joins(:activity_objects => :event).
            merge(Event.between(start_time, end_time))

        render :json =>
          @activities.
            map(&:direct_object).
            map{ |e| e.to_json(:start => start_time, :end => end_time) }.flatten.to_json
      }
    end
  end

  def show
    show! do |format|
      format.html { redirect_to polymorphic_path([ @event.post_activity.receiver_subject, Event.new ], :at => @event.start_at.to_i) }
    end
  end

  private

  def collection
    @activities =
      profile_subject.wall(:profile,
                           :for => current_subject,
                           :object_type => :Event)
  end
end
