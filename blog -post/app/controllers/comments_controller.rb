
class CommentsController < ApplicationController
     before_action :authenticate_user!
    def create
      @comment = current_user.comments.new(comments_params)

       if !@comment.save
        flash[:notice] = @comments.errors.full_messages.to_sentence
       end
       
       @post = Post.find(params[:post_id])
       redirect_to posts_path(@post)
    end

    def destroy
      @post = Post.find(params[:post_id])
      @comment = @post.comments.find(params[:id])
      @comment.destroy
      redirect_to posts_path(@post)
    end

    private

    def comments_params
        params.require(:comment).permit(:content).merge(post_id: params[:post_id])
    end    
end
