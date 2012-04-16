class ConversationsController < ApplicationController

  before_filter :authenticate_user!
  before_filter :get_mailbox, :get_box, :get_actor
  before_filter :check_current_subject_in_conversation, :only => [:show, :update, :destroy]
  def index
    if @box.eql?"inbox"
      @conversations = Kaminari.paginate_array(@mailbox.inbox).page(params[:page]).per(9)
    elsif @box.eql?"sentbox"
      @conversations = Kaminari.paginate_array(@mailbox.sentbox).page(params[:page]).per(9)
    else
      @conversations = Kaminari.paginate_array(@mailbox.trash).page(params[:page]).per(9)
    end
  end

  def show
    if @box.eql? 'trash'
      @receipts = @mailbox.receipts_for(@conversation).trash
    else
      @receipts = @mailbox.receipts_for(@conversation).not_trash
    end
    render :action => :show
    @receipts.mark_as_read
  end

  def new

  end

  def edit

  end

  def create

  end

  def update
    if params[:untrash].present?
    @conversation.untrash(@actor)
    end

    if params[:reply_all].present?
      last_receipt = @mailbox.receipts_for(@conversation).last
      @receipt = @actor.reply_to_all(last_receipt, params[:body])
    end

    if @box.eql? 'trash'
      @receipts = @mailbox.receipts_for(@conversation).trash
    else
      @receipts = @mailbox.receipts_for(@conversation).not_trash
    end
    redirect_to :action => :show
    @receipts.mark_as_read

  end

  def destroy

    @conversation.move_to_trash(@actor)

    if params[:location].present?
      case params[:location]
      when 'conversation'
        redirect_to conversations_path(:box => :trash)
        return
      else
      redirect_to conversations_path(:box => @box,:page => params[:page])
      return
      end
    end
    redirect_to conversations_path(:box => @box,:page => params[:page])
  end

  private

  def get_mailbox
    @mailbox = current_subject.mailbox
  end

  def get_actor
    @actor = Actor.normalize(current_subject)
  end

  def get_box
    if params[:box].blank? or !["inbox","sentbox","trash"].include?params[:box]
      @box = "inbox"
    return
    end
    @box = params[:box]
  end

  def check_current_subject_in_conversation
    @conversation = Conversation.find_by_id(params[:id])

    if @conversation.nil? or !@conversation.is_participant?(@actor)
      redirect_to conversations_path(:box => @box)
    return
    end
  end

end
