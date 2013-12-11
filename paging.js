$(document).ready(function(){



		function switchPage(page){

		console.log(page);
		$("ul").removeClass("current");
		$("ul:nth-child(" +page+ ")").addClass("current");

		}		

		$("#navigator a").click(function(){

			switchPage($(this).data("chosen"));


		});


	
});