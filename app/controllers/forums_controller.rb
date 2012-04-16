class ForumsController < ApplicationController
  layout "homes"
  
  def index    
#    @forums = Forum.find :all
    @locations = Location.find(:all)
    render :layout=>false
  end
  
  def frame_forum
    @locations = Location.find(:all)
    render :layout=>"homes"
  end
  
  def back_index
    title = params[:forum][:title]
    content = params[:forum][:content]
    location_id = params[:location_id]
    forum = Forum.new
    forum.title = title
    forum.content = content
    forum.user_name = fbsession.users_getInfo(:uids => [fbsession.session_user_id], :fields => ["name"]).name
    forum.location_id = location_id
    forum.create_date = Time.now
    if forum.save!
      @forums = Forum.find :all
      render :action=>"index",:layout=>false
    end    
  end
  
  def search_forum
    location_id=params[:location_id]
    @forums = Forum.find (:all, "conditions=>'location_id = #{location_id}'")
  end
  
  def new_topic
    render :layout =>false 
  end
end
