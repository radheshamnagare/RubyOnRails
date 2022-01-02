class ProfilesController < ApplicationController
  before_action :set_profile, only: %i[ show edit update destroy ]
  before_action :authenticate_user!,except: [:index]

  def delete_image_attachment
      @prof =Profile.find(params[:id])
      @prof.profile_photo.purge
      redirect_to profile_path(@prof)
  end  
  # GET /profiles or /profiles.json
  def index
    @profiles = Profile.all
    @from_post=false
  end

  # GET /profiles/1 or /profiles/1.json
  def show
  end

  # GET /profiles/new
  def new
    @profile = Profile.new
  end

  # GET /profiles/1/edit
  def edit
  end

  # POST /profiles or /profiles.json
  def create
    @profile = Profile.new(profile_params)
    if Profile.where(:contact => @profile.contact).exists?
        redirect_to new_profile_path
         flash[:notice] = "phone alredy exist"
    else  
    respond_to do |format|
      if @profile.save
        format.html { redirect_to @profile, notice: "Profile was successfully created." }
        format.json { render :show, status: :created, location: @profile }
      else
          format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @profile.errors, status: :unprocessable_entity }  
      end
    end
   end
  end

  # PATCH/PUT /profiles/1 or /profiles/1.json
  def update
      @profil = Profile.new(profile_params)
    if  current_user.profile.contact == @profil.contact
          respond_to do |format|
      if @profile.update(profile_params)
        format.html { redirect_to @profile, notice: "Profile was successfully updated." }
        format.json { render :show, status: :ok, location: @profile }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @profile.errors, status: :unprocessable_entity }
      end
    end
    else 

     if Profile.where(contact: @profil.contact).exists?
       flash[:notice] = "phone alredy exist"
       redirect_to edit_profile_path(@profile)
      else
     respond_to do |format|
      if @profile.update(profile_params)
        format.html { redirect_to @profile, notice: "Profile was successfully updated." }
        format.json { render :show, status: :ok, location: @profile }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @profile.errors, status: :unprocessable_entity }
      end
    end
    end 
     
    



   end

  end

  # DELETE /profiles/1 or /profiles/1.json
  def destroy
    @profile.destroy
    respond_to do |format|
      format.html { redirect_to profiles_url, notice: "Profile was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_profile
      @profile = Profile.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def profile_params
      params.require(:profile).permit(:first_name, :last_name,:profile_photo,:contact,:about_profile,:user_id)
    end
end
