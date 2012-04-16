require 'spec_helper'

describe ScenariosController do
  
  def mock_scenario(stubs={})
    @mock_scenario ||= mock_model(Scenario, stubs)
  end
  
  describe 'GET NEW' do
    it "render new template page" do
      feature = mock_model(Feature)
      Feature.should_receive(:find).with("1").and_return(feature)
      Scenario.should_receive(:new).and_return(mock_scenario)
      get :new , :id => 1
      assigns[:feature].should == feature
      assigns[:scenario].should == mock_scenario
    end
    
  end
  
  describe 'POST CREATE' do
    it 'save success' do
      scenario_att = {"title" => "scenario title","given_block" => "1","when_block" => "2","then_block" => "3"}
      feature_att = {:id => 1,:title => "feature title"}
      scenario = mock_model(Scenario)
      feature = mock_model(Feature)
      Scenario.should_receive(:new).with(scenario_att).and_return(scenario)      
      Feature.should_receive(:update).with(1, :title => "feature title").and_return(feature)
      scenarios = mock("list")
      feature.should_receive(:scenarios).and_return(scenarios)
      scenarios.should_receive(:<<).with(scenario).and_return scenarios
      feature.should_receive(:save).and_return(true)
      post :create, :scenario => scenario_att, :feature => feature_att
      flash[:notice].should == "Scenario was successfully created."      
    end
    
    it "save not success" do
      #title is empty -> can't save 
      scenario_att = {"title" => "","given_block" => "1","when_block" => "2","then_block" => "3"}
      feature_att = {:id => 1,:title => "feature title"}
      scenario = mock_model(Scenario)
      feature = mock_model(Feature)
      Scenario.should_receive(:new).with(scenario_att).and_return(scenario)      
      Feature.should_receive(:update).with(1, :title => "feature title").and_return(feature)
      scenarios = mock("list")
      feature.should_receive(:scenarios).and_return(scenarios)
      scenarios.should_receive(:<<).with(scenario).and_return scenarios
      feature.should_receive(:save).and_return(false)
      post :create, :scenario => scenario_att, :feature => feature_att
      flash[:notice].should == nil
      response.should render_template("new")
    end
  end
  
end