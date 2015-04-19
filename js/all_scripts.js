var CurrentPageIdentifier = {
	
	run: function() {
		CurrentPageIdentifier.removeLinkOfCurrentPage();
	},
	
	pageUrl: window.location.pathname.substring(1),
	removeLinkOfCurrentPage: function() {

		$('nav ul li a').each(function() {
		
			var link = $(this).attr('href');
			var pageNameToReplaceLinkName = $(this).text();
			
			if(CurrentPageIdentifier.pageUrl === link) {
				$(this).parent('li').attr('id', 'currentPage').text(pageNameToReplaceLinkName);
				$(this).remove();
			} 
		});
		
		if(CurrentPageIdentifier.pageUrl.length < 1) {
			$('nav ul li:first-child').attr('id', 'currentPage').text('HOME');
			$(this).find('a').remove();
		}
	}
};

$(document).ready(function() {
	CurrentPageIdentifier.run();
});









