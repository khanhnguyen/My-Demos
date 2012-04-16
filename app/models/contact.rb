class Contact < ActiveRecord::Base
  def password
    @password
  end

  def password=(password)
    @password=password
  end

  def self.get_contacts(contact)
    name, provider_domain = contact[:email].split("@")
    provider, domain = provider_domain.split(".")
    Contacts.new(provider, contact[:email], contact[:password]).contacts
  end
end
