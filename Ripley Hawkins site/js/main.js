$(document).ready(
			function() 
			{
				getMainFooter();
				$('nav').load('./navInclude.html');
				$(window).resize(
					function() 
					{
						if ($(window).width() <= 800) 
							{
								$('body').removeClass("horizontalMenu");
								$('body').addClass("verticalMenu");
							}
						if ($(window).width() >  800)
						{
							$('body').removeClass("verticalMenu");
							$('body').addClass("horizontalMenu");
						}
					}
				);
				var random1 = Math.floor( Math.random() * 5 + 1); 
				var random2 = Math.floor( Math.random() * 5 + 1); 
				var filenameLeft = 'url("../images/faction' + random1 + '.png")'
				var filenameRight = 'url("../images/faction' + random2 + '.png")'
				$('#headleft').css('background-image', filenameLeft);
				$('#headright').css('background-image', filenameRight);
				$('#headmiddle').css('background-image', 'url("../images/blitzBanner.png")');
				
			}
		);

function getMainFooter() {
 document.getElementById("mainFooter").innerHTML = '<a href="mailto:j.w.ripley@eagle.clarion.edu?Subject=To%20Jess" target="_top">Give us a shout out!</a> Copyright &copy; 2015';
 }