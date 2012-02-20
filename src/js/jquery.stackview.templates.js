(function(undefined) {
	StackView.templates = {
		scaffold: '\
			<div class="ribbon"><%= ribbon %></div>\
			<div class="scroll-mask">\
				<ul class="stack-items" />\
			</div>',
		
		navigation: '\
			<div class="navigation">\
				<div class="upstream" />\
				<div class="num-found" />\
					<span></span><br />items\
				</div>\
				<div class="downstream" />\
			</div>',
		
		book: '\
			<li class="stack-item stack-book heat<%= heat %>" style="width:<%= book_height %>; height:<%= book_thickness %>;">\
				<a href="<%= link %>" target="_newtab">\
					<span class="spine-text">\
						<span class="spine-title"><%= title %></span>\
						<span class="spine-author"><%= author %></span>\
					</span>\
					<span class="spine-year"><%= year %></span>\
					<span class="stack-pages" />\
					<span class="stack-cover" />\
				</a>\
			</li>',
		
		placeholder: '<li class="stackview-placeholder"></li>'
	}
})();