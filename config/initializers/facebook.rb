if Rails.root.to_s.include? "Clients"
  App_ID = "323844507626299"
  App_Secret = "4078f284308cc41bfafa7e96bbfea2c0"
  REDIRECT_URI = "http://localhost:3000/"
else
  App_ID = "252885474771201"
  App_Secret = "09015aa47e0b1125df13b2233b8c275c"
  REDIRECT_URI = "http://studentsangel.com/"
end

SCOPE = 'offline_access,email,user_about_me,user_photos,manage_pages,publish_stream,read_friendlists,user_location, user_likes, user_interests, user_birthday, friends_likes, friends_interests'