module HomesHelper
  def loadplace(locations,controller,action,id_update)
    result = ""
    for location in locations
      location_id = location[0]
      lng,lat,location_name = location[1].split(",")
      result +="<tr><td>"     
      if controller.eql?("video")
        result +=link_to_remote location_name,:html=>{:class=>"font_href"},:update=>id_update,:loading=>"$('video_update').hide();$('video_load').show();",:complete=>"$('video_load').hide();$('video_update').show();",:url => {:controller=>controller,:action =>action,:id=>location_id}
      else
        result +=link_to_remote location_name,:html=>{:class=>"font_href"},:update=>id_update,:loading=>"$('content_id').hide();$('img_homes').show();",:complete=>"$('img_homes').hide();$('content_id').show();",:url => {:controller=>controller,:action =>action,:id=>location_id}
      end      
      result +="</td></tr>"
    end    
    result 
  end
  
  def loadplacehtml(locations,controller,id_update)
    result = ""     
    for location in locations
      location_id = location[0]
      lng,lat,location_name,location_action = location[1].split(",")
      result +="<tr><td>"
      if controller.eql?("photos") || controller.eql?("homes")
        result +=link_to_remote location_name,:html=>{:class=>"font_href"},:update=>id_update,:loading=>"$('img_homes').show();$('content_id').hide()",:complete=>"$('img_homes').hide();$('content_id').show();",:url => {:controller=>:data,:action =>location_action,:id=>location_id}
      else
        result +=link_to_remote location_name,:html=>{:class=>"font_href"},:loading=>"$('img_homes').show();",:complete=>"$('img_homes').hide();",:update=>id_update,:url => {:controller=>:data,:action =>location_action,:name=>location_name}
      end      
      result +="</td></tr>"
    end
    result    
  end
  
  def load_friend
    friend_list = fbsession.friends_get.uid_list
    list_friend = fbsession.users_getInfo(:uids => friend_list, :fields => ["uid","name","last_name","pic_square"]).user_list
    str =""
    str +="<div class='clearfix'>"  
    str +="<table><tr><td>&nbsp;</td><td>"
    str +="<b><i>Choose friend</i></b></td></tr>"
    
    str +="<tr>" 
    str +="<td><img src ='#{@url_image}'/></td>"
    str +="<td><ul class='multiple_select'>" 
    for friend in list_friend
      id = friend.id
      name = friend.name
      str +="<li class='multiple_select_checkbox'>"
      str +="<input type='checkbox' value='#{id}' name='preference[id][]' id='preference_id_#{id}'/>"
      str +="<label for='preference_id_#{id}'>"
      str +="<img src='#{friend.pic_square}' width='25' height='25'/>&nbsp;&nbsp;"
      if name.size >16
        str +="#{name[0,15]}..."
      else
        str += name
      end      
      str +="</label>"
    end
    str +="</ul></td></tr>"   
    str +="</table>"
    str +="</div>"
    str +="<div id='dialog_buttons' class='dialog_buttons' style='padding-left:140px;'>"
    str +="<input type='submit' id='dialog_button1' value='Send' class='inputsubmit'/><input type='button' onClick=\"hideMe();\" id='dialog_button2' value='Cancel' class='inputsubmit inputaux'/>"
    str +="</div>"    
    str
  end
end