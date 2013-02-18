class VenuesController < ApplicationController
  before_filter :authenticate_user!

  def index

  end

  def show

  end
  
  def update

  end
    
  def destroy
  end

  def create

    @venue = Venue.new(params[:venue])
    @venue.save

    respond_to do |format|
      if @venue.save
          format.json  { render :json => @venue,
                        :status => :created, :location => @venue }
      else
          format.json  { render :json => @venue.errors,
                        :status => :unprocessable_entity }
      end
    end
  end

end