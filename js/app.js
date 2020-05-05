/**
 * @author Killian Monnier
 * @see https://github.com/paraceltus/me
 * @copyright GNU General Public License v3.0
 * @description Script fullPage.js pour le website AllSafe
 */

var myFullpage = new fullpage('#fullpage', {
	licenseKey: 'my_licence_key',
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors: ['home', 'about', 'projects', 'contact'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['Accueil', 'À propos', 'Projets', 'Contact'],
	showActiveTooltip: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
	verticalCentered: true,

	sectionsColor : ['rgb(135, 206, 235)', 'rgb(135, 206, 235)', 'rgb(250, 128, 114)', '#43302f'],

	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function(origin, destination, direction){
		//Scrolling Effect and fp-nav color
		console.log(origin, destination, direction)
		
		if (destination.anchor == "home"){
			$('body > nav').css('background', 'transparent');
			//$('#fp-nav span').css('background', 'black'); //Cela ne fonctionne pas pour le moment **
		} else {
			$('body > nav').css('background', 'rgba(0, 0, 0, 0.5)');
		}
		
		//Burger navigation
		if (nav.classList.contains('is-open')){
			nav.classList.remove('is-open');
			burger.classList.remove('active');
		}

		//Skills Bars
		if (destination.index == 1){
			$('.skill-percent').each(function(){
				$(this).animate({
					width:$(this).attr('data-percent')},"fast");
			});
		}
	},

	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}

});