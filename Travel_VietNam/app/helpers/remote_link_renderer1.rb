class  RemoteLinkRenderer1 < WillPaginate::LinkRenderer
  def prepare(clollection,options,template)
    @remote = options.delete(:remote) || {}
    super
  end
  
  protected
  def page_link(page, text,control, attributes = {})  
    @template.link_to_remote(text,{:url => {:controller =>"video",:action => "page_new",:page => page},:before => "this.innerHTML='<img src =\"/images/ajax_loader_paginate.gif\" border=\"0\"/>'",:complete=>"",:method => :get}.merge(@remote))
  end
end