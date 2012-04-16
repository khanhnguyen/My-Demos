require 'spec_helper'

describe Scenario do
  before(:each) do
    @scenario = Scenario.new(
      :title => "Scenario Title",
      :given_block => "111",
      :when_block => "222",
      :then_block => "333",
      :feature_id => 1
    )
  end
  
  it "should not valid of title" do
    @scenario.title = nil    
    @scenario.should_not be_valid
  end
  
  it "should not valid of given_block" do
    @scenario.given_block = nil    
    @scenario.should_not be_valid
  end
  
  it "should not valid of when_block" do
    @scenario.when_block = nil    
    @scenario.should_not be_valid
  end
  
  it "should not valid of then_block" do
    @scenario.then_block = nil    
    @scenario.should_not be_valid
  end
  
  it "validate association" do
    association = Scenario.reflect_on_association(:feature) 
    association.macro.should == :belongs_to
    association.class_name.should == 'Feature' 
  end
  
end