class HomeController < ApplicationController
  #action for showing homepage
  def index
  end

  #action for input intepretation
  def create
    view = ""
    begin
	    input = params[:json_input].split("\n")
	    input.each do |data|
		    data = YAML.load data
		    if data.class == Hash
			    view += "<h#{data['heading_level']+1}> #{data['title']} </h#{data['heading_level']+1}>" if data.keys.include? "title" && "heading_level"
		    end	
	    end
    rescue Exception => e
    	view = "error"
    end
    render :json => {view: view}
  end
end
