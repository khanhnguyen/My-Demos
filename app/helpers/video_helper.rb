module VideoHelper
  def load_friend
    friend_list = fbsession.friends_get.uid_list
    list_friend = fbsession.users_getInfo(:uids => friend_list, :fields => ["uid","name","last_name","pic_square"]).user_list
    str =""
    str +="<div class='clearfix'>"  
    str +="<table><tr><td>&nbsp;</td><td>"
    str +="<b><i>Choose friend</i></b></td></tr>"    
    str +="<tr>" 
    str +="<td><img src ='#{@url_small}' style='width:170px;height:140px;'/></td>"
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
    str +="<input type='submit' id='dialog_button1' value='Send' class='inputsubmit'/><input type='button' onclick=\"hideMe('theLayer');return false\" id='dialog_button2' value='Cancel' class='inputsubmit inputaux'/>"
    str +="</div>"    
    str
  end
end
