class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contacts = Contact.get_contacts(params[:contact])    
    render :text => @contacts
    
  end
end
