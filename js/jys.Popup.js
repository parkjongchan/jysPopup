$(function(){

	 comPopup = {
		speed : 300, // duration
		popDimde :'pop_dimde', // dimde class
		dimParent : 'body', // wrap or boby setting
		open : function(arg) {
			/*common*/
			if(!$(this.dimParent).hasClass('pop_active')){
				$(this.dimParent).addClass('pop_active');
			    $(this.dimParent).append($('<div/>', {
			        'class': this.popDimde
			    }));
			}
			if(!$(arg).children().hasClass('active')){
				$(arg).children().addClass('active');
				$(arg).children().append("<span class='cancle'><a href='javascript:void(0)' title='취소' class='btn' onclick=comPopup.close(" + "'" + arg + "'" +")></a></span>");
			}
			this.handlers(arg);
			/*action*/
			$('.'+this.popDimde).fadeIn(this.speed,function(){
				$(arg).fadeIn(this.speed);
			});
			$(this.dimParent).addClass('pop_overflow');

		},
		close : function(arg) {
			var objThis = this;
			/*action*/
			$(arg).fadeOut(this.speed,function(){
				$('.'+objThis.popDimde).slideUp({duration: this.speed, queue: false});
				$('.'+objThis.popDimde).fadeOut({duration: this.speed, queue: false});
			});
			$(this.dimParent).removeClass('pop_overflow');
		},
		handlers : function(arg) {
			objThis = this;
			$('.'+this.popDimde).on('click',function(e){
				objThis.close(arg);
				$(this).unbind(e);
			});
		}
	};
});
