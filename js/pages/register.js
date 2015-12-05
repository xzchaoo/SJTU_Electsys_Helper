$(function(){
	$("#navbar-li-register").addClass("active");
	
	$(".select").each(function(index,ds){
		
		var $wrapper=$("<div>").addClass("btn-group");
		var $button=$("<button>").attr("type","button").attr("data-toggle","dropdown").addClass("btn btn-default dropdown-toggle");
		var $ul=$("<ul>").addClass("dropdown-menu");
		
		var $this=$(ds);
		var $select=$this.find("select");
		var $hidden=$("<input>").attr("type","hidden").attr("name",$select.attr("name"));
		
		$hidden.appendTo($this);
		$wrapper.appendTo($this);
		$button.appendTo($wrapper);
		$ul.appendTo($wrapper);

		var first=true;
		$select.find("option").each(function(index,o){
			var $text=$(o).text();
			var $value=$(o).val();
			
			if(first){
				first=false;
				$button.html($text+'<span class="caret"></span>');
			}
			$li=$("<li>").appendTo($ul).on("click",function(){
				$hidden.val($value);
				$button.html($text+'<span class="caret"></span>');
			});
			$a=$("<a href='#'>").text($text).appendTo($li);
		});
		$select.remove();
	});
	$(".calendar").each(function(index,dc){
		$(this).find("input").datepicker({"dateFormat":"yy-mm-dd","dayNamesMin": [ "日", "一", "二", "三", "四", "五", "六" ]});
	});
	$("form").validate({
		rules:{
			name:{
				required:true,
				minlength:3,
				maxlength:16
			},
			password1:{
				required:true,
				minlength:6,
				maxlength:16
			},
			password2:{
				required:true,
				minlength:6,
				maxlength:16,
				equalTo:"#password1"
			},
			email:{
				required:true,
				email:true
			},
			date:{
				required:true,
				date:true
			}
		},
		messages:{
			name:"请输入合法的账号",
			password1:"请输入合法的密码",
			password2:{
				required:"请输入确认密码",
				equalTo:"确认密码与密码不一致"
			},
			email:"邮箱格式不正确",
			date:"日期格式不正确"
		}
	});
	//$(".select").each(function(index,ds){




		//$this.find("select").appendTo($wrapper).find("li").on("click",function(){
		//	$button.html($(this).text()+"<span class='caret'></span>");
		//});
		//$button.dropdown();
		//$this.find("ul").detch().appendTo($wrapper);
		//$wrapper.appendTo($this);
		//$wrapper.dropdown();
	//});
});