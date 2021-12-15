class CommentsController < ApplicationController

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  def destroy
    @comments.destroy
  end
  # POST /comments
  def create
    @post = Post.find(params[:post_id])
    @comment = Comment.where(post_id: @post.id).new(comment_params)
    # @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end
  private

  def comment_params
    params.require(:comment).permit(:comment, :post_id)
  end

end
