$(document).ready(function(){

		var currentPage = 1;
		var maxPage = ($("#navigator .number-paging").length);

		function switchPage(page){

		currentPage = page;
		
		$("ul").removeClass("current");
		$("ul:nth-child(" +page+ ")").addClass("current");
		}		


		$("#navigator a").click(function(){

			if($(this).hasClass("nav2")){
				if(currentPage < maxPage)
				currentPage++;
				switchPage(currentPage);
			}
			else if($(this).hasClass("nav")){
				if(currentPage >=2)
					currentPage--;
				switchPage(currentPage);
			}
			else	
			switchPage($(this).data("chosen"));


		});
});