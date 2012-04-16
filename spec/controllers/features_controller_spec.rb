require 'spec_helper'

describe FeaturesController do
  context "#index" do
    it "should provide an index method that returns all features to the view" do
      @features = Array.new(3) { Factory(:feature) }
      Feature.stub!(:find).and_return(@features)
      get :index
      assigns[:features].should == @features
    end
    it "should provide an index method that returns an empty array if there are no features" do
      get :index
      assigns[:features].empty?.should be(true)
    end
    it "should render the index template" do
      get :index
      response.should render_template(:index)
    end
  end
  
  context "GET new" do
    def do_get
      get :new
    end
    
    it "assigns a new feature as @feature" do
      mock_feature = mock("Feature")
      Feature.stub(:new).and_return(mock_feature)
      do_get
      assigns[:feature].should == mock_feature
    end
    
    it "should render the new template" do
      do_get
      response.should render_template(:new)
    end    
  end
  
  describe "GET show" do
    it "it should exist a feature with an ID" do
      feature = mock_model(Feature)
      Feature.stub(:find).with("1").and_return(feature)
      get :show, :id => "1"
      assigns[:feature].should equal(feature)
      response.should render_template(:show)
    end
  end
  
  
  describe "POST create" do
    it "save success" do 
      feature_att = {"title" => "feature title"}
      scenario_att = {"title" => "scenario title", "given_block" => "111", "when_block" => "222", "then_block" => "333"}      
      post :create, :feature => feature_att, :scenario => scenario_att
      flash[:notice].should == "Feature was successfully created."
      response.should redirect_to(features_path)
    end
    it "save not success" do 
      feature = nil
      scenario = nil      
      post :create, :feature => feature, :scenario => scenario
      flash[:notice].should == nil
      response.should render_template("new")
    end    
  end  
end