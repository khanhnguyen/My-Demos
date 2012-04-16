# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
#  helper :all # include all helpers, all the time
  
  # See ActionController::RequestForgeryProtection for details
  # Uncomment the :secret if you're not using the cookie session store
  #protect_from_forgery # :secret => '843f5e3c20033792f3cb713152de793b' 
#  after_filter OutputCompressionFilter
  before_filter :start_request_log
  after_filter :end_request_log
  def start_request_log()
    @request_start_time  =Time.now();
  end
  
  def end_request_log()
    request_end_time=Time.now();
    response_time=((request_end_time.to_f-@request_start_time.to_f)*1000).round    
    hit=Hit.new()
    hit.action=params["action"];
    hit.controller=params["controller"];
    hit.response_time=response_time
    hit.remote_ip=request.remote_ip;
    hit.time=@request_start_time
    hit.save();    
  end
end
