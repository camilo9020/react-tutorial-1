class CommentsController < ApplicationController
  def index
    comments = Comment.all
    render json: comments
  end

  def new
    comment = Comment.new
  end

  def create
    comment = Comment.create(comment_params)
    render json: comment, status: :created
  end

  private
    def comment_params
      params.require(:comment).permit(:author, :text)
    end
end
