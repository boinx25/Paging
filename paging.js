$(document).ready(function(){



		function switchPage(page){

			// var x = 1;
			// console.log("the value is"+ x + ".");
			console.log(page);
		$("ul").removeClass("current");
		$("ul:nth-child(" +page+ ")").addClass("current");

		}		

		$("#navigator a").click(function(){

			switchPage($(this).data("chosen"));


		});


	
});