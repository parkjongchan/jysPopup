$(function(){
	 comPopup = {
		speed : 300,
		popDimde :'.pop_dimde',
		dimParent : 'body',
		open : function(arg) {
			/*common*/
			if(!$(this.dimParent).hasClass('pop_active')){
				$(this.dimParent).addClass('pop_active');
			    $(this.dimParent).append($('<div/>', {
			        'class': 'pop_dimde'
			    }));
			}
			if(!$(arg).children().hasClass('active')){
				$(arg).children().addClass('active');
				$(arg).children().append("<span class='cancle'><a href='javascript:void(0)' title='취소' class='btn' onclick=comPopup.close(" + "'" + arg + "'" +")></a></span>");
			}
			/*action*/
			$(this.popDimde).fadeIn(this.speed,function(){
				$(arg).fadeIn(this.speed);
			});
			$(this.dimParent).addClass('pop_overflow');

		},
		close : function(arg) {
			var objThis = this;
			/*action*/
			$(arg).fadeOut(this.speed,function(){
				$(objThis.popDimde).slideUp(this.speed);
			});
			$(this.dimParent).removeClass('pop_overflow');
		}
	}	
})
