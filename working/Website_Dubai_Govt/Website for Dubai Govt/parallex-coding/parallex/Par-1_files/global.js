var Suli = Suli || {};

Suli.region = null;
Suli.page_data = {};

// Global Templates
Suli.loader = '<div class="loader"><div class="inner"></div></div>';

/*
  ======================================================
  Devices
  ======================================================
*/ 
Suli.device = {
  iPad : navigator.userAgent.match(/iPad/i) != null
};

/*
  ======================================================
  Templates
  ======================================================
*/
Suli.tmpl = {
  /*
    Page Loader
  */
  pageLoader : function () {
    var html = '';
    html += '<div id="pageLoader">';
      html += '<div class="status">loading requested content &hellip;</div>';
    html += '</div>';
    return html;
  },
  /*
    Nav Arrows
  */ 
  arrows : function () {
    var html = '';
    html += '<div id="grid_nav" class="arrows">';
      html += '<ul>'; 
        html += '<li class="prev"><a href="#">Previous</a></li>';
        html += '<li class="next"><a href="#">Next</a></li>';
      html += '</ul>';
    html += '</div>';
    return html;
  },
  
  closeBu : function () {
    return '<a href="#" class="close">Close</a>';;
  },
  
  /*
    Local Header
  */
  localHeader : function () {
    html = '';
    html += '<div class="local_header">';
      html += '<h2>Text</h2>';
      html += '<span class="title">text</span>';
      html += Suli.tmpl.arrows();
    html += '</div>';
    return html;
  }, 
  
  /*
    People Info Panel
  */
  peopleInfo : function () {
    var html = '';
    html += '<div id="peopleInfo" class="infoPanel">';
      html += Suli.tmpl.localHeader();
      html += '<div class="pageBody clear">';
        
        // Left Column
        html += '<div class="column left">';
           
           // Headshot
           html += '<div id="item_image" class="headshot"><div class="tick" /></div>';
           
           // Tweets
           html += '<div id="feeds">';
             html += '<div class="local_header">';
               html += '<ul> ';
                 html += '<li><a href="#tweets" class="current">twitter</a></li>';
                 html += '<li><a href="#blog_posts">blog</a></li>';
               html += '</ul>'; 
             html += '</div>';
             html += '<div id="tweets" class="body">';
               html += '<span class="loadstatus">loading ...</span>';
             html += '</div>';
             html += '<div id="blog_posts" class="body hide">';
                html += '<ul />';
              html += '</div>';
           html += '</div>';
        
        html += '</div>'; // end left column
        
        //  Right Column
        html += '<div class="column right">';
          html += '<div class="info">';
            
            // Basic Info
            html += '<div class="basicInfo" class="contentBlock">';
              html += '<h2>First Name Last Name</h2>';
              html += '<span class="title">job title</span>';
              /*
              html += '<h4>Joined Sullivan</h4>';
              html += '<p><span class="date">Date Here</span></p>';
              html += '<h4>Role</h4>';             
              html += '<p class="jobDesc"> </p>';*/
              
            html += '</div>';
            
            
            
            // Clients
            // html += '<div id="clients" class="contentBlock"><h4>Clients worked with:</h4><p /></div>';
            
            // Q/A
            html += '<div id="q_a" class="contentBlock"><ul></ul></div>';
            // Experience
            html += '<div id="experience" class="contentBlock"><h4>Experience:</h4><ul /></div>';
            // Awards
            html += '<div id="awards" class="contentBlock"><h4>Awards:</h4><ul /></div>';
            // Affiliations
            html += '<div id="affiliations" class="contentBlock"><h4>Affiliations:</h4><ul /></div>';
            // Education
            html += '<div id="education" class="contentBlock"><h4>Education:</h4><ul /></div>';
          
          html += '</div>';
        html += '</div>';// end right column 
      
      html += '</div>';
      html += Suli.tmpl.closeBu();
    html += '</div>';
    return html;
  },
  
  /*
    Career Info Panel
  */
  careerInfo : function () {
    var html = '';
    html += '<div id="jobInfo" class="infoPanel">';
      html += Suli.tmpl.localHeader();
      html += '<div class="pageBody clear">';
        html += '<div id="overview" class="contentBlock">';
        html += '</div>';
        html += '<div id="requirements" class="contentBlock">';
          html += '<h3>Ideal Candidate Profile</h3>';
          html += '<ul></ul>';
          html += '<div id="contactInfo" class="contentBlock"><p>please submit resume to:</p><a class="email" href="mailto:jobs@sullivannyc.com">jobs@sullivannyc.com</a></div>';
        html += '</div>';
      html += '</div>';
    html += '</div>';
    return html;
  },
  
  /*
    Issue Info Panel
  */
  issueInfo : function () {
    var html = '';
    
    html += '<div id="issueInfo" class="infoPanel">';
      
      // Main Content
      html += '<div id="main_content" class="clear">';
        html += '<div id="item_image" class="thumb" />';
        html += '<div class="info">';
          html += '<h2>Title Here</h2>';
          html += '<div class="text" />';
          html += '<div id="related_services"><h3>Services</h3><ul /></div>';
        html += '</div>';
      html += '</div>';
      
      // Related Contet
      html += '<div id="related_content" class="clear">';
        html += '<div id="related_case_studies">';
          html += '<div class="local_header">';
            html += '<h3>Case Studies</h3>'
          html += '</div>';
          html += '<ul class="clear" />';
        html += '</div>'; 
        html += '<div id="related_blog">';
          html += '<div class="local_header">';
            html += '<h3>blog</h3>';
            html += '<a href="/blog/" class="more">Visit Blog</a>';
          html += '</div>';
          html += '<ul />';
        html += '</div>';
      html += '</div>';
    html += '</div>';
    return html;
  },
  
  /*
    Career Info Panel
  */ 
  jobInfo : function (item) {
    var html = '';
    html += '<div id="jobInfo" class="infoPanel">';
      html += Suli.tmpl.localHeader();
      html += '<div class="pageBody clear">';
        html += '<div class="columm left">';
          html += '<div id="overview">';
            html += '<h3>Position Summary</h3>';
            html += '<div class="desc" />';        
          html += '</div>';
        html += '</div>';
        html += '<div class="columm right">';
          html += '<div id="responsibilities">';
            html += '<h3>Responsibilities</h3>';
            html += '<div class="list"><ul /></div>';      
          html += '</div>';
          html += '<div id="qualifications">';
            html += '<h3>Ideal Candidate Profile</h3>';
            html += '<div class="list"><ul /></div>';      
          html += '</div>';
          html += '<div class="contact"><p>Please Submit Resume to:<br /><a href="mailto:jobs@sullivannyc.com">jobs@sullivannyc.com</a></p></div>';
        html += '</div>';  
      html += '</div>';
      html += '<div id="relatedPeople">';
        html += '<div class="intro"><h4>People you will <br />be working with.</h4><a href="/people" class="more">See All</a></div>';
        html += '<div class="items"></div>';
      html += '</div>';
      html += Suli.tmpl.closeBu();
    html += '</div>'; 
    return html;
  },
  
  issueCarPage : function (item) {
    var html = '';
    html += '<div class="item">';
      html += '<img src="' + item.thumb + '" alt="Alt Content" height="130" width="130" />';
      html += '<h3><a href="' + item.permalink + '">' + item.title + '</a></h3>';
      html += '<a href="' + item.permalink + '" class="more">Read</a>';
    html += '</div>';
    return html;
  },
  
  peopleCarPage : function (item) {
    var html = '';
    html += '<div class="item">';
      html += '<a class="thumb" href="' + item.url + '"><img src="' + item.thumb + '" alt="' + item.title + '" height="210" width="160" /></a>';
      html += '<div class="info">';
        html += '<h4><a href="' + item.url + '" title="' + item.title + '">' + item.first_name + '</a></h4>';
      html += '</div>';
    html += '</div>';
    return html;
  },

  service : function (item, end) {
    if (end) {
      return '<li class="end">' + item.title + '</li>'; 
    } else {
      return '<li>' + item.title + '</li>'; 
    }
  },
  blogEntry : function (item, author) {
    var html = '';
    html += '<li>'; 
      html += '<span class="date">' + item.entry_date + '</span>';
      html += '<h4><a href="' + item.url + '">' + item.title + '</a></h4>';
    html += '</li>';
    return html; 
  },
  casestudy : function (item) {
    return '<li><a href="' + item.url + '" class="loading"><img src="' + item.thumb + '" height=175"" width="320" alt="" /></a></li>';
  },
  qualification : function (item) {
    return '<li>' + item.text + '</li>';
  },
  overlay : function (item) {
    var html = '';

    html += '<div id="slideOverlay">';
      html += '<div class="pasteboard">';
      html += '<div class="loader" />';
      html += '<div class="overlay_arrows"><ul><li class="prev"><a href="#">Previous</a></li><li class="next"><a href="#">Next</a></li></ul></div>';
      html += '<div class="slides">';
        html += '<img src="' + item.img.large.src + '" />';
      html += '</div>';
      html += '</div>';  
      html += '<div class="info">';
        html += '<div class="title">';
          html += '<h3>Loading ...</h3>'; 
          html += '<p></p>';
        html += '</div>';
        html += '<div class="controls">';
        html += '<ul>';
          // html += '<li><a href="#" class="zoom_in">Zoom In</a></li>';
          // html += '<li><a href="#" class="zoom_out">Zoom Out</a></li>';
          // html += '<li><a href="#" class="view_all">View All</a></li>';   
          html += '<li class="end"><a href="#" class="close">Close</a></li>';
        html += '</ul>';
        html += '</div>';
      html += '</div>';
    html += '</div>';
    return html;
  },
  
  slide : function (item) {
    var html = '';
    html += '<div class="slide"><img src="' + item.img.small.src + '" /></div>';
    return html;
  },
  
  person : function (item, end) {
    var html = '';
    html += (end) ? '<li class="end">' : '<li>';
      html += '<a href="'+ item.link + '" class="thumb"><img width="160" height="210" alt="' + item.title + '" src="/assets/img/placeholder/Profile_Blank_Small.png"></a>';
      html += '<div class="info">';
        html += '<h4><a href="'+ item.link + '" title="' + item.title + '">' + item.first_name + '</a></h4>';
        html += '<span class="title">' + item.job_title + '</span>';
      html += '</div>';
    html += '</li>';
    return html;
  }
}


/*
  ======================================================
  Twitter Feeds
  ======================================================
*/
Suli.twitter_user = null;
Suli.twitter_url = 'http://search.twitter.com/search.json';
Suli.Linkify = function (text) {
    text = text.replace(/(https?:\/\/\S+)/gi, function (s) {
        return '<a href="' + s + '">' + s + '</a>';
    });

    text = text.replace(/(^|)@(\w+)/gi, function (s) {
        return '<a class="user" href="http://twitter.com/' + s + '">' + s + '</a>';
    });

    text = text.replace(/(^|)#(\w+)/gi, function (s) {
        return '<a href="http://search.twitter.com/search?q=' + s.replace(/#/,'%23') + '">' + s + '</a>';
     });
    return text;
};
Suli.TwitterFeed = function (selector, username, len) {
  this.selector = selector;
  this.username = username;
  this.len = len;
  
  var self = this,
      $tweetContainer = $(self.selector),
      $statusIndicator = $('.loadstatus'),
      errorMessage = 'Sorry, but there seems to be a problem fetching our most recent tweets.',
      _requestTweets = function () {
        $.ajax({
          url: Suli.twitter_url + '?callback=?&rpp=' + self.len + '&q=from%3A' + self.username,
          dataType: 'json',
          error : function () {
            $statusIndicator.text(errorMessage);
          },
          success : function (data) {
            api.appendTweets(data.results);
          }
        });
      },
      api = {
        init  : function () {
          _requestTweets();
        },
        appendTweets : function (data) {
          var i, len, tweets = '';
          
          if (data.length) {
            $statusIndicator.replaceWith('<ul>');
            for (i = 0, len = data.length; i < len; i++) {
              var created_at = new Date(data[i].created_at),
                  date = (jQuery.PHPDate) ? $.PHPDate("h:iA M d, o", created_at) : data[i].created_at,
                  exp_url = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
                  text = Suli.Linkify(data[i].text);
                  html = '';

              html += (i%2 === 0) ? '<li>' : '<li class="even">';
              html += text;
              html += '<span class="date">' + date + '</span>';
              html += '</li>';

              tweets += html;
            }
            $tweetContainer.find('ul').append(tweets);
          } else {
            $statusIndicator.text(errorMessage);
          }
        }
      };
  return api.init();
};
/* 
  ======================================================
  Region Utils 
  ======================================================
*/ 
Suli.utils = {
  adjustHeader : function () {
    var headerY = Suli.jQ.regionalHeader.outerHeight(),
        navY    = Suli.jQ.regionalNav.height();
    Suli.jQ.regionalHeader.height((headerY + navY));
  },
  stopWheel : function (dur) {
    Suli.jQ.viewport.bind('mousewheel', function (e) {
      e.preventDefault();
    });
    setTimeout(function () {
      Suli.jQ.viewport.unbind('mousewheel');
    }, dur);
  },
  buildAjaxUrl : function (href) {
    return '/' + href.split('/').slice(3)[0] + '/#/' + href.split('/').slice(-1)[0];
  },
  setPageData : function (url, callback) {
    var _setData = function (data) {
      Suli.page_data = data;
      if (callback) {
        callback(data);
      }
    };
    $.ajax({
      url : url,
      dataType : "json",
      success : _setData
    });
  },
  reBind : function ($obj, e, fn, dur) {
    $obj.unbind(e, fn);
    if (e === 'click') { $obj.bind('click', function () { return false; })}
    setTimeout(function () {
      $obj.bind(e, fn);
    }, dur);
  },
  getPrev : function(cur, len) {
    var index = ((cur - 1) < 0) ? (len - 1) : (cur - 1);
    return index;
  },
  getNext : function (cur, len) {
    var index = ((cur + 1) === len) ? 0 : (cur + 1);
    return index;
  },
  addPageLoader : function () {
    Suli.jQ.page.append(Suli.tmpl.pageLoader());
    $('#pageLoader .status').animate({
      'marginTop' : 60
    }, 500); 
    Suli.jQ.viewport.bind('load', function () {
      Suli.utils.removePageLoader();
    });
  },
  removePageLoader : function () {
    $('#pageLoader .status').animate({
      'marginTop' : 0
    }, 250, function () {
      $(this).parent().fadeTo(400, 0, function () {
         $(this).remove();
      });
    });
  }
};
/*
  ======================================================
  Parallax Scroller
  ======================================================
*/

Suli.ParallaxScroller = function (selector, nav, center, imageHeight) {
  this.selector = selector;
  this.offsets = [];
  this.viewport = window;
  this.nav = nav || false;
  this.center = center || false;
  this.imageHeight = imageHeight || 0;
  this.curIndex = 0;
  
  var self = this,
      $self = $(self.selector),
      $viewport = Suli.jQ.viewport,
      $nav,
      $navItem,
      
      _setOffsets = function () {
        for (var i = 0, len = $self.length; i < len; i++) {
          var offset = $self.eq(i).offset().top;
          self.offsets.push(offset);
        }
      },
      
      _onScroll = function () {
        	
			var bgY = self.imageHeight,
            scrollTop = $viewport.scrollTop(),
            pageY = $self.height(),
            onCenter = Math.round(((pageY - bgY) + 1) / 2);

        for (var i = 0, len = $self.length; i < len; i++) {
          var $target = $self.eq(i),
              $inner = $target.find('.innerScroll'),
              offset = $target.offset().top,
              bgTop = (window.innerHeight-450)+Math.round(scrollTop* -0.1) ;//Math.round(scrollTop + offset),   
              bgLeft = '100%'//(self.center) ? '50%' : '0';                 

          // Background Position

          $target
          .css({
            'backgroundPosition' : bgLeft + ' ' + (Math.round(bgTop * -0.1) + onCenter) + 'px' 
			
			//'top' : (bgTop) + 'px'
			
          });
          $inner
          .css({
            'backgroundPosition' : bgLeft + ' ' + (bgTop) + 'px'
			//'top' : Math.round(bgTop/5)  + 'px'
          });
                   

          //  Navigation Highlight
          // (only runs if instance[nav] === true)
          if (self.nav && (scrollTop >= $target.offset().top - 5000)) {
            if ($navItem) {
              if ( ! $navItem.eq(i).hasClass('current')) {
                if(scrollTop > 0) {
                  _toggleNav(i); 
                }
              }
            }
          }
        }
        
        // Navigation Position 
        // (only runs if instance[nav] === true)
        if (self.nav && $navItem) {
          var bottom = $(self.selector).eq($self.length - 1).offset().top;
          if ((bottom > 0) && scrollTop >= bottom) {
            // If we are at the bottom,
            // of document, nav should scroll up
            $nav.css({
              'marginTop' : Math.round(api.getViewport().height * ($self.length - 1)),
              'position' : 'absolute'
            });
          } else {
            // In the middle, 
            // Nav is "fixed"
            $nav.css({
              'marginTop' : 1000,
              'position' : 'fixed'
            });
          }
        }
      },
      
      _sizeSection = function () {
        _onScroll();
        
        $self
        .height(api.getViewport().height)
          .find('.innerScroll')
          .height(api.getViewport().height)
        .end()
          .parent()
          .height(api.getViewport().height * $self.length)
        .end()
          .find('.contentWrapper2 .abstract').css({
            'marginTop' : (api.getViewport().height) - 145
		   });
		  
		  
      },
      
      _template = {
        nav : function () {
          var html = '';
          html += '<div id="cs_nav">';
          html += '<ul>';
          for (var i = 0, len = $self.length; i < len; i++) {
            var anchor = $('.innerScroll:eq('+ i +')').parent().attr('id');
            
            html += (i === 0) ? '<li class="case current">' : '<li class="case">';
            html += '<a href="#' + anchor +'">Case Study Title</a>';
            html += '</li>';
          }
          html += '</ul>';
          html += '</div>';
         // return html;
        }
      },
      
      _addNav = function () {
        
        $self.parent().before(_template.nav);
        $nav = $('#cs_nav'),
        $navItem = $nav.find('li');
        
        $navItem.bind('click', api.move);
      },
      
      _toggleNav = function (index) {
        if ($nav) {
          self.curIndex = index;
          $navItem.eq(index).addClass('current').siblings().removeClass('current');                                    
        }
      },
      
      api = { 
        init : function () {
          _onScroll();

          if ($self.length > 1) {
            _sizeSection();     
            _setOffsets();
            if (self.nav) {
              _addNav();
            }
            
            // for (var i = 0; i < $self.length; i++) {
            //   var zBase = ($self.length - i);
            //   $self.eq(i).css(($self.length - i));
            // }
            
            $viewport.bind('resize', _sizeSection);
          }
          
          $viewport.scroll(_onScroll);                          

          return this;  
        },
        
        getCurIndex : function () {
          return self.curIndex;
        },
        
        getLen : function () {
          return $self.length;
        },
        
        move : function (index) { 
          var dur = 800,
              next = (index.handleObj) ? $(this).index() : index,
              offset = $self.eq(next).offset().top;
          
          if (self.curIndex !== next) {
            self.curIndex = next;
            Suli.utils.stopWheel(dur);
            Suli.utils.reBind($navItem, 'click', api.move, dur);
            $('html, body').stop().animate({
               'scrollTop' : offset
            }, dur, 'easeOutExpo');
          }
          return false;
        },

        getViewport : function () {
          return {
            height : $viewport.height(),
            width : $viewport.width()
          };
        }
      };
      
  // Binds Controls, and exposes API
  return api.init();
};

/* 
  ======================================================
  Dynamic Width Header 
  ======================================================
*/
Suli.DynamicHeader = function (selector, scroll) {
  this.selector = selector;
  this.viewport = window;
  this.scroll = scroll;
  var self = this,
      $self = $(self.selector),
      $viewport = $(self.viewport),
      $page = Suli.jQ.page,
      _padTop = 60,
      _padBottom = 0,
      _left = function () {
        var left = ($viewport.width() - 960)  / 2;
        return Math.round(left);
      },
      _setPad = function () {
        $self.css('paddingLeft', _left());
      },
      _atBottom = function () {
        var pageY = $page.height(),
            selfY = $self.height(),
            threshold = (pageY - selfY - _padTop) - _padBottom,
            scrollTop = $viewport.scrollTop();
        if (threshold >= scrollTop) {
          $self.css({
            'top' : _padTop
          });
        } else {
          $self.css({
            'top' : _padTop - (scrollTop - threshold)
          }); 
        }
      };
  return (function () {
    _setPad();
    $viewport.bind('resize', _setPad);
    if (self.scroll) {
      $viewport.bind('scroll', _atBottom);          
    }
  } () );
};

/* 
  ======================================================
  Slideshows
  ======================================================
*/
Suli.SlideShow = function ($obj, data) {
  
  // Data
  this.slideStack = data.slides; 
  this.zoomStack = [];
  this.slideLen = this.slideStack.length;
  this.curSlideIndex = 0;
  this.curSlideType = null; 
  this.curOverlayIndex = 0; 
  this.overlayOpen = false;
  
  // Jquery Objects
  this.slideshow = $obj;
  this.prev = this.slideshow.find('.prev');
  this.next = this.slideshow.find('.next');
  this.info = this.slideshow.find('.info');
  this.slides = this.slideshow.find('.slides');
  this.zoom = this.slideshow.find('.zoom');
  this.overlay = null;
  this.viewport = Suli.jQ.viewport;
  
  // Measurements
  this.slideWidth = this.slides.width();
  this.slideHeight = this.slides.height();

  var self = this,
      
      // Private
      _updateInfo = function (index) {
        self.info.find('h3').html(self.slideStack[index].title);
        self.info.find('p').html(self.slideStack[index].text);
      },
      _setCurSlideIndex = function (index) {
        self.curSlideIndex = index;
      },
      _addZoom = function () {
        if (self.slideStack[0].img.large) {
          self.zoom.css('marginRight', 0);
        }
        for (var i = 0, len = self.slideStack.length; i < len; i++) {
          if (self.slideStack[i].img.large) {
            self.zoomStack.push(self.slideStack[i]);
          }
        }
      },

      // Public
      api = {
        init : function () {
          _addZoom();

          // Prev / Next
          self.prev.bind('click', api.prev);
          self.next.bind('click', api.next);

          // Overlay
          self.zoom.bind('click', api.openOverlay);

          // First Has Large 
          if (self.slideStack[0].img.large) {
            self.zoom.addClass('show');   
          }
          // Expose Instance to API
          return this;
        },
        getCurrent : function () {
          return {
            index : self.curSlideIndex
          };
        },
        getOverlayIndex : function () {
          var index;
          outer:for (var i = 0; i < self.slideLen; i++) {
            for (var j = 0; j < self.zoomStack.length; j++) {
              if (self.zoomStack[j].img.large === self.slideStack[self.curSlideIndex].img.large) {
                index = j;
                break outer;
              }
            }
          }
          return index;
        },
        openOverlay : function () {
          self.overlayOpen = true;
          self.curOverlayIndex = api.getOverlayIndex();
          
          $('body').append(Suli.tmpl.overlay(self.slideStack[self.curSlideIndex]));
          self.overlay = $('#slideOverlay');
          self.overlay.css('marginTop', -self.viewport.height());
          
          self.overlay.find('img').css('opacity', 0).bind('load', function () {
             api.sizeOverlay(self.overlay);
             self.overlay.animate({
               'marginTop' : 0
             }, 800, 'easeOutExpo', function () {
               self.viewport.bind('resize', api.sizeOverlay);
               self.overlay.find('.close').bind('click', api.closeOverlay);
               self.overlay.find('.prev').bind('click', api.prevOverlay);
               self.overlay.find('.next').bind('click', api.nextOverlay);
             });
             
             
             setTimeout(function () {
               self.overlay.find('.loader').animate({
                 'opacity' : 0
               }, 250, function () {
                 self.overlay.find('.info h3').text(self.slideStack[self.curSlideIndex].title);
                 self.overlay.find('.info p').html(self.slideStack[self.curSlideIndex].text);
                 self.overlay.find('img').animate({
                     'opacity' : 1
                 }, 800);
               });
               
             }, 1000);
             
          });
          
          
          
          
          return false;
        },
        moveOverlay : function (index) { 
          var $loader = $('.loader'),
              $slides = $('#slideOverlay .slides'),
              $title = $('#slideOverlay').find('.info h3');
              $text =  $('#slideOverlay').find('.info p');
          
          self.curOverlayIndex = index;
          
          self.overlay.find('.prev').unbind('click', api.prevOverlay).bind('click', function () { return false;});
          self.overlay.find('.next').unbind('click', api.nextOverlay).bind('click', function () { return false;});
          
          $loader.css('opacity', 0.5);
          $title.text('Loading ...');
          $text.text('');
          
          $slides.append('<img src="' + self.zoomStack[index].img.large.src + '"  />');
          
          var $curSlide = $slides.find('img:eq(0)'),
              $nextSlide = $slides.find('img:eq(1)'),
              dur = 800;

          $nextSlide.css('opacity', 0).bind('load', function () {
            
            api.sizeOverlay();
            
            $loader.animate({
              'opacity' : 0
            }, 250, function () {
              $title.text(self.zoomStack[index].title);
              $text.html(self.zoomStack[index].text);
              $curSlide.animate({
                'opacity' : 0
              }, dur);
              $nextSlide.animate({
                'opacity' : 1
              }, dur);
            });
            setTimeout(function () {
              $curSlide.remove();
              self.overlay.find('.prev').bind('click', api.prevOverlay);
              self.overlay.find('.next').bind('click', api.nextOverlay);
            }, dur);
          });
          
        },
        prevOverlay : function () {
          var index = Suli.utils.getPrev(self.curOverlayIndex, self.zoomStack.length);
          api.moveOverlay(index); 
          return false;
        },
        nextOverlay : function () {
          var index = Suli.utils.getNext(self.curOverlayIndex, self.zoomStack.length);
          api.moveOverlay(index);
          return false;
        },
        sizeOverlay : function ($obj) {
          var $overlay = (self.overlayOpen) ? self.overlay : $obj,
              $pasteboard = $overlay.find('.pasteboard'),
              $slides = $overlay.find('.slides'), 
              $nav = $overlay.find('.overlay_arrows'), 
              $loader = $overlay.find('.loader'),
              $slide = $slides.find('img:last'),
              slideDim = {
                width : $slide.width(),
                height : $slide.height()
              };

          $overlay.height(self.viewport.height());
          $overlay.width(self.viewport.width());
          
          $pasteboard.height(self.viewport.height() - 80);
          $pasteboard.width(self.viewport.width());
          
          $slides.height(self.viewport.height() - 80);
          $slides.width(self.viewport.width());
          
          if ($slide.height() >= $pasteboard.height()) {
            $slide.height($pasteboard.height() - 40);
            slideDim = {
              width : $slide.width(),
              height : $slide.height()
            }
          }
          
          $slide.css({
            'left' : (self.viewport.width() - slideDim.width) / 2,
            'top' : ((self.viewport.height() - slideDim.height  - 80 ) / 2)
          });
          
          $loader.css({
            'left' : (self.viewport.width() - 60) / 2,
            'top' : ((self.viewport.height() - 60  - 80 ) / 2)
          });
          $nav.css({
            'top' : ((self.viewport.height() - 70  - 80 ) / 2)
          });

          return false;
        },
        closeOverlay : function () {
          self.overlay.animate({
            'marginTop' : -self.viewport.height()
          }, 800, 'easeOutExpo', function () {
            self.overlay.remove();
            self.viewport.unbind('resize', api.sizeOverlay);
            self.overlayOpen = false;
            self.overlay = null;
            return false;
          }); 
          
          return false;
        },
        buildPlayer : function (index, $obj) {
          var file = self.slideStack[index].video;
          $obj.parent().parent().append('<div class="play" />');
          $obj.parent().parent().append('<div class="pause" />');
          var $play = $('.slideshow .play'),
              $pause = $('.slideshow .pause');
          
          $pause.hide();
          
          $play.css({
            'opacity' : 0,
            'left' : (self.slideStack[index].img.small.width - 110) / 2,
            'top' : (self.slideStack[index].img.small.height - 110) / 2
          });
          $obj.jPlayer({
          
              ready: function () {
                $(this).jPlayer("setMedia", {
                  m4v : file,
                  poster : self.slideStack[index].img.small.src
                });
                
                $play.animate({
                  'opacity' : 1
                }, 400).bind('click', function () {
                  $obj.jPlayer('play');
                  $play.animate({
                    'opacity' : 0
                  }, 400, function () {
                    $pause.show();
                  });
                  return false;  
                });
                $pause.bind('click', function (){
                  $obj.jPlayer('pause');
                  $pause.hide();
                  $play.animate({
                    'opacity' : 1
                  }, 400);
                });
              },
              ended: function (event) {
                $(this).jPlayer('stop');
              },
              swfPath : '/assets/swf',
              supplied : "m4v"
          });
        },
        destroyPlayer : function ($obj) {
          // $obj.jPlayer('destroy');
          $('.pause').hide();
          $('.play').animate({
            'opacity' : 0
          }, 400, function () {
            $(this).remove();
          });
        },
        move : function (index, dir, type) {

          // Unbind Clicks
          self.prev.unbind('click', api.prev).bind('click', function () { return false; });
          self.next.unbind('click', api.next).bind('click', function () { return false; });
          
          // Set Load Status
          self.info.find('h3').html('loading &hellip;');
          self.info.find('p').text(' ');
          
          // Set Current Index
          _setCurSlideIndex(index);

          // Add Slide
          self.slides.append(Suli.tmpl.slide(self.slideStack[index]));
          
          // Styles
          var $curSlide = self.slides.find('.slide:eq(0)'),
              $nextSlide = self.slides.find('.slide:eq(1)'),
              curAnim = {},
              nextStyle = {},
              nextAnim = {};
         
          curAnim[dir] = -300;
          curAnim.opacity = 0.5
          nextStyle[dir] = self.slideWidth;
          nextAnim[dir] = 0;
          
          // Pause Player
          if (self.curSlideType === 'video') {
            $curSlide.jPlayer('pause');
          }
          
          $nextSlide.css(nextStyle).find('img').bind('load', function () {
            if (self.curSlideType === 'video') {
              api.destroyPlayer($curSlide);
            }

            if (type === 'video') {
              $nextSlide.find('img').replaceWith('<div id="player_' + self.slideStack[index].id + '" />');
              var $player = $('#player_' + self.slideStack[index].id);

              $player.css({
                 'height' : self.slideStack[index].img.small.height,
                 'width' : self.slideStack[index].img.small.width,
                 'opacity' : 0
              });
              // Build It!
              api.buildPlayer(index, $player);
            }
            
            $curSlide.animate(curAnim, 800, 'easeOutExpo');
            $nextSlide.animate(nextAnim, 600, 'easeOutExpo', function () {
              
              if (type === 'video') {
                $player.animate({
                   'opacity' : 1
                }, 400);
              }

              // Show Zoom Button
              if (self.slideStack[index].img.large) {
                self.zoom.addClass('show');  
              } else {
                self.zoom.removeClass('show');
              }

              // Update Info
              _updateInfo(index);
              
              // Reset Style, Remove Current
              $nextSlide.removeAttr('style');
              $curSlide.remove();
              
              // Rebind Clicks
              self.prev.bind('click', api.prev);
              self.next.bind('click', api.next);
              
              self.curSlideType = type;

            });
          });
          
        },
        getType : function (index) {
          var type = (self.slideStack[index].video) ? 'video' : 'image';
          return type;
        },
        prev : function () {
          var index = Suli.utils.getPrev(api.getCurrent().index, self.slideLen);
          api.move(index, 'right', api.getType(index));
          return false; 
        },
        next : function () {
          var index = Suli.utils.getNext(api.getCurrent().index, self.slideLen);
          api.move(index, 'left', api.getType(index));
          return false;    
        }
      };
  
  // Binds Controls, and exposes API
  return api.init();   
};

/* 
  ======================================================
  Dynamic Filter 
  ======================================================
*/
Suli.Filter = function ($grid, $nav, data) {
  this.grid = $grid;
  this.nav = $nav;
  this.data = data;
  this.locationTitle = document.title;
  
  var self = this,
      _grid = self.grid, 
      _template = function (item, end) {
        var html = ''; 
        
        html += (end === true) ? '<li class="end">' : '<li>';
          html += (item.link) ? '<a href="' + item.link + '" class="thumb">' : '<span class="thumb">';
            html += '<img src="' + item.thumb + '" height="160" width="160" />';
          html += (item.link) ? '</a>'  : '</span>';
          html += '<h4>' + item.title + '</h4>';
          html += (item.link) ? '<a href="' + item.link + '" class="more">view case study</a>' : '';
        html += '</li>';
        return html;
      },
      api = {
        init : function () {
          var hashFrag = window.location.hash.split('/').slice(-1)[0],
              cat = (hashFrag.length) ? hashFrag : 'all'; 
          
          self.nav.bind('click', api.filter);
         
          if (hashFrag.length && hashFrag != 'all')  {
            self.grid.empty();
            $('a[rel=' + cat + ']').trigger('click');
          }
          
          return this;
        },
        filter : function () {
          var cat = $(this).attr('data-cat'),
              title = this.text,
              items = [];
          
          api.toggleNav(this);         
          api.setTitle(title);
          
          if (cat !== 'all') {
            for (var i = 0, len = self.data.length; i < len; i ++) {
              if (self.data[i]['category'] === cat) {
                items.push(self.data[i]);
              }
            }
          } else {
            items = self.data;
          }
          
          api.addItems(items);
          api.setHash(cat);
          return false;
        },
        setHash : function (hash) {
          window.location.hash = '/' + hash;
        },
        setDocTitle : function (title) {
          document.title = self.locationTitle + ' | ' + hash;
        },
        scrollUp : function () {
          $('html, body').animate({
            'scrollTop' : 0
          }, 0);
        },
        toggleNav : function (obj) {
          $(obj)
          .addClass('current')
            .parent()
              .siblings()
                .find('a.current')
                .removeClass('current');
        },
        setTitle : function (title) {
          $('.local_header h2').text(title);
        },
        addItems : function (data) {
         var items = '';
         
          api.scrollUp();    
          _grid.empty();
          
          for (var i = 0, len = data.length; i < len; i++) {
            var end = (i%4 === 3) ? true : false;
            items += _template(data[i], end);
          }
          _grid.append(items);
          
          if ( ! _grid.parent().hasClass('list')) {
            _grid
               .find('.more')
               .css({
                 'height' : 0
               });
           }
          
          _grid
            .find('img')
            .css('opacity', 0)
          .end()
            .find('img:last')
            .bind('load', function () {
            var x = 0,
                $item = _grid.find('img'),
                $more = $item.parent().parent().find('a.more')
                fadeIn = setInterval(function () {
                  $item.eq(x).animate({
                     'opacity' : 1
                  }, 400, function () {
                    if ( ! _grid.parent().hasClass('list')) {
                      if ($more.length) {
                        $more.animate({
                          'height' : 30
                        }, 150);
                      }
                    }
                  });
                  if (x === (data.length + 1)) {
                    clearInterval(fadeIn);
                  }
                  x++;
                }, 100);
            // Size Bg if Needed
            if ($('#pseudoBg').length) {
              $('#pseudoBg').height(Suli.jQ.page.outerHeight());
            }
          });
        }
      }
  
  return api.init();
};

/* 
  ======================================================
  List Toggle 
  ======================================================
*/ 
Suli.ListToggle = function ($list, $nav) {
  this.list = $list;
  this.nav = $nav;
  var self = this,
      api = {
        init : function () {
          self.nav.live('click', api.toggle);
        },
        toggle : function () {
          if ( ! $(this).parent().hasClass('current')) {
            self.list.toggleClass('list');
            $(this)
              .parent()   
              .addClass('current')  
                .siblings()
                .removeClass('current');
          }
          // Size Bg if Needed
          if ($('#pseudoBg').length) {
            $('#pseudoBg').height(Suli.jQ.page.outerHeight());
          }
          return false;
        }  
      };
  return api.init();
};

/* 
  ======================================================
  Grid Viewer
  ======================================================
*/
Suli.GridViewer = function (data, options, selectors) {

  this.data = data;
  this.selectors = selectors;

  // Set Options
  for (var opt in options) {
    this[opt] = options[opt];
  }

  this.viewport = Suli.jQ.viewport;

  this.infoOpen = false;
  this.curItemIndex = 0;
  this.scrollDur = 800;
  this.docTitle = document.title;
  this.returnPos = 0;

  var self = this,
      
      $panel    = null,
      $prev     = null,
      $next     = null,     
      $close    = null,     
      $grid     = $(selectors.grid),
      $trigger  = $grid.find(selectors.trigger),
      $viewAll  = $(selectors.viewAll),
      
      _jQ = {},
      
      _setHash = function (title) {
        window.location.hash = '/' + title;
      },
      _setTitle = function (title) { 
        document.title = self.docTitle + ' | ' + title;
      },
      _getIndexByValue = function (value) {
        var index;
        for (var i = 0; i < self.data.length; i++) {
          if (self.data[i].url_title === value) {
            index = i;
            break;
          }
        }
        return index;
      },
      _addJqObjects = function () {
        $panel = $(self.selectors.panel); 
        $prev = $(self.selectors.prev);
        $next = $(self.selectors.next);   
        $close = $('.infoPanel .close');   
        for (var selector in self.selectors) {
          self[selector] = $(self.selectors.panel + ' ' + self.selectors[selector]);
        }
      },
      
      _bindKeys = function (e) {
        if (e.keyCode === 39) { 
           if (self.infoOpen) {
              api.next();
           }
           return false;
        } else if (e.keyCode === 37)  {
           if (self.infoOpen) {
              api.prev();
           }
          return false;
        } else {
          return true;
        }
      },
      
      api = {
        init : function () {
          var gridY = $grid.height(),
              hashFrag = window.location.hash.split('/').slice(-1)[0];

          api.addTemplate();            
          
          Suli.jQ.page.css('overflow', 'hidden');

          $grid.css({'height' : gridY});
          $trigger.bind('click', api.openInfo);
          $viewAll.bind('click', api.closeInfo);
          self.viewport.bind('resize', function () {
            if ( ! self.infoOpen) {
              // Hide Template
              $panel.css({
                'right' : -self.viewport.width()
              });
            }
          });
          
          
          // Requesting a Single Person?
          if (hashFrag.length) {
            $trigger.eq(_getIndexByValue(hashFrag)).trigger('click');
          }

          return this;
        },
        addTemplate : function () {
          $grid.after(self.tmpl());
          
          // Register jQ Objects
          _addJqObjects(self.selectors);

          // Hide Template
          $panel.css({
            'right' : -self.viewport.width()
          });

          // Prev / Next
          $prev.bind('click', api.prev);
          $next.bind('click', api.next);
          // Arrow Keys
          $(document).bind('keydown', _bindKeys);
          
          // Close
          $close.bind('click', api.closeInfo);
        
        },
        loadItem : function (index) {
         self.curItemIndex = index;
         if ( ! self.infoOpen) {
           self.onLoad(self, index);
         }
         _setHash(self.data[index].url_title);
         _setTitle(self.data[index].title);
         return false;
        },
        unloadItem : function () {
          self.infoOpen = false;
          api.hideInfo();
          api.showGrid();
          return false;
        }, 
        openInfo : function () {
          var index = $(this).index(),
              winPos = self.viewport.scrollTop(),
              dur = (winPos > 0) ? 400 : 0;
          
          Suli.utils.stopWheel(dur);
          // Suli.utils.reBind($trigger, 'click', api.openInfo, self.scrollDur);
          
          self.returnPos = winPos;
          
          api.loadItem(index);

          $('html, body').animate({
            'scrollTop' : 0
          }, dur, function () {
            self.infoOpen = true;
            api.hideGrid();
            api.showInfo();
            if (self.onOpen) {
              self.onOpen(self);
            }
          });

          return false;
        },
        closeInfo : function () {
          if (self.infoOpen) {
            
            window.location.hash = "";  
            document.title = self.docTitle;  
            
            Suli.utils.stopWheel(self.scrollDur);
            Suli.utils.reBind($trigger, 'click', api.openInfo, self.scrollDur);    
            
            self.curItemIndex = 0;
            self.infoOpen = false;
            
            api.hideInfo();
            api.showGrid();

            if (self.onClose) {
              self.onClose(self); 
            }
          }
          return false;
        },

        hideGrid : function () {
          var width = self.viewport.width();
          $grid.stop().animate({
             'marginLeft' : -width
          }, self.scrollDur, 'easeOutExpo');
        },
        
        showGrid : function () {
          var dur = (self.returnPos > 0) ? 400 : 0;      
          
          Suli.utils.stopWheel(dur);
          
          $grid.stop().animate({
             'marginLeft' : 0
          }, (self.scrollDur / 3), 'easeOutExpo', function () {
            $('html, body').animate({
              'scrollTop' : self.returnPos
            }, dur, 'easeOutExpo');
          });
        },
        
        showInfo : function () {
          $panel.stop().animate({
             'right' : 0
          }, self.scrollDur, 'easeOutExpo');
        },
        
        hideInfo : function () {
          var width = self.viewport.width();
          $panel.stop().animate({
             'right' : -self.viewport.width()
          }, self.scrollDur, 'easeOutExpo');
        },
        
        move : function (index, dir, dur) {
          self.curItemIndex = index;
          api.loadItem(index);
          
          Suli.utils.reBind($prev, 'click', api.prev, dur);
          Suli.utils.reBind($next, 'click', api.next, dur);
          Suli.utils.reBind($(document), 'keydown', _bindKeys, dur);
          
          self.onPrevNext(self, index, dir, dur);
        },
        
        prev : function () {
          var index = Suli.utils.getPrev(self.curItemIndex, self.data.length);
          api.move(index, 'right', 800);
          return false; 
        },
        
        next : function () {
          var index = Suli.utils.getNext(self.curItemIndex, self.data.length);
          api.move(index, 'left', 800);
          return false;    
        }
      };
  return api.init();
};

/* 
  ======================================================
  Pseudo Background
  ======================================================
*/
Suli.PseudoBg = function(img, center, onCenter) {
  
  var _template = (center) ? '<div id="pseudoBg"><img src="' + img + '" /></div>' : '<div id="pseudoBg" class="left"><img src="' + img + '" /></div>',
      posTop = (center) ? 0 : '50%',
      posLeftStart = (center) ? '20%' : 0,
      posLeftEnd = (center) ? '50%' : 0; 

  
      $('body')
      .append(_template)
        .find('#pseudoBg')
        .css({
          'width' : 0, 
          'height' : Suli.jQ.page.outerHeight(), 
          'backgroundPosition' : (posLeftStart + ' ' + posTop)  
          })
          .find('img')
          .bind('load', function () {
             $(this).remove(); 
             $('#pseudoBg')
             .css('backgroundImage', 'url(' + img + ')')
             .animate({
               'width' : '100%'
             }, 700, 'easeOutExpo');

          });  
  
  return {
    sizeBg : function () {
      $('body')
        .find('#pseudoBg')
        .css({
          'height' : Suli.jQ.page.outerHeight() 
          });
    }
  }; 
};

/* 
  ======================================================
  Carousel
  ======================================================
*/
Suli.Carousel = function (data, pageLen, tmpl, selectors) {
  this.data = data;
  this.pageLen = pageLen;
  this.len = this.data.length;
  this.tmpl = tmpl;
  this.pages = [];
  this.curPageIndex = 0;
  
  for (var selector in selectors) {
    this[selector] = selectors[selector];
  }
  
  var self = this,
      $items = $(self.items),
      $item = $(self.item),
      $prev = $(self.prev),
      $next = $(self.next),
      _carX = $items.width(),
      _chunkData = function (arr, chunk) {
        var chunked = [],
            len = Math.ceil(arr.length / chunk);
        for (var i = 0; i < len; i++) {
          chunked.push(arr.splice(0, chunk));       
        }
        return chunked;  
      },
      api = {
        init : function () {
          self.pages = _chunkData(self.data, self.pageLen);
          $prev.bind('click', api.prev);
          $next.bind('click', api.next);
        },
        move : function (index, dir) {
          self.curPageIndex = index;
          var items = self.pages[index];
          
          $items.append('<div class="page" />');
          var $nextPage = $items.find('.page:eq(1)'),
              $prevPage = $items.find('.page:eq(0)'),
              curAnim = {},
              nextStyle = {},
              nextAnim = {},
              scrollDur = 500,
              html = '';
          
          Suli.utils.reBind($prev, 'click', api.prev, scrollDur);
          Suli.utils.reBind($next, 'click', api.next, scrollDur);   
          
          curAnim[dir] = -_carX;
          curAnim.opacity = 0.5
          
          nextStyle[dir] = _carX;
          nextAnim[dir] = 0; 
          
          $nextPage.css(nextStyle);
          
          for (var i = 0, len = items.length; i < len; i ++) {
            html += self.tmpl(items[i]);
          }
          $nextPage.append(html);    
          
          $nextPage.find('img:last').bind('load', function () {
            $prevPage.stop().animate(curAnim, scrollDur, 'easeOutExpo', function (){
              $prevPage.remove();    
            });
            $nextPage.stop().animate(nextAnim, scrollDur, 'easeOutExpo', function () {
              $(this).removeAttr('style');
            });
          });
        },
        prev : function () {
          var index = Suli.utils.getPrev(self.curPageIndex, self.pages.length);
          api.move(index, 'right');
          return false;
        },
        next : function () {
          var index = Suli.utils.getNext(self.curPageIndex, self.pages.length);
          api.move(index, 'left');
          return false;
        }
      };
  return api.init();
};

/* 
  ======================================================
  Scroll Pager
  ======================================================
*/ 
Suli.ScrollPager = function (data, selectors, options) {
  this.data = data;
  this.pages = [];
  this.curPage = 0;
  this.pageLen = 1;
  this.pageY = 0;
  this.winY = Suli.jQ.viewport.height();

  // Add Selectors
  for (var selector in selectors) {
    this[selector] = $(selectors[selector]);
  } 
  
  // Set options
  for (var opt in options) {
    this[opt] = options[opt];
  }

  var self = this;
      $viewport = Suli.jQ.viewport;
      _chunkData = function (arr, chunk) {
        var chunked = [],
            len = Math.ceil(arr.length / chunk);
        for (var i = 0; i < len; i++) {
          chunked.push(arr.splice(0, chunk));       
        }
        return chunked;  
      },
      _onScroll = function () {
        var scrollTop = $viewport.scrollTop();
        if ((scrollTop + self.winY) >= (self.pageY + self.container.offset().top)) {
          $viewport.unbind('scroll', _onScroll);
          api.loadPage()  
        }
      }
      api = {
        init : function () {
          // Chunk our data
          self.pages = _chunkData(self.data, 12);
          
          // Do we need to page ?
          if (self.pages.length > self.pageLen) {
            self.pageLen = self.pages.length;
            self.pageY = self.container.height();  
            $viewport.bind('scroll', _onScroll);  
          }

          return this;
        },
        loadPage : function () { 
          var page = self.pages[(self.curPage + 1)],
              html = '';
          if ((self.curPage + 1) < self.pageLen) {
            for (var i = 0; i < page.length; i++) {
              var end = (i%4 === 3) ? true : false;
              html += self.tmpl(page[i], end);     
            }
            self.container.append(html);
            self.pageY = self.container.height();
            if (self.onAdd) {
              self.onAdd(self);
            }
          }    
        }
      }
  return api.init();    
},

/* 
  ======================================================
  Init 
  ======================================================
*/
Suli.init = function (region) {
  
  // Set JSON url
  Suli.json_url = '/' + region + '/json/';
  
  // Global JQ objects
  Suli.jQ = {
    viewport : $(window),
    page : $('#page'),
    regionalHeader : $('header.regional'),
    regionalNav : $('nav.regional')
  };
  // Initial Region if specified in head
  if (Suli[region].init) {
    Suli[region].init();
  }
};

/*
  ======================================================
  Home
  ======================================================
*/
Suli.home = {};
Suli.home.showLatest = function () {
  var $latest = $('.latest'),
      $content = $('#secondary_content'),
      offset = $content.offset().top,
      scroll = $(this).scrollTop();
 if ((offset - 100) < scroll) {
   if ( ! $latest.hasClass('hidden')) {
     $latest.animate({ 'bottom' : -40 }, 400).addClass('hidden');  
   }
 } else {
   if ($latest.hasClass('hidden')) {
      $latest.animate({ 'bottom' : 0 }, 400).removeClass('hidden'); 
    }
 }
};
Suli.home.gotoLatest = function () {
   var target = $(this).attr('href'),
       offset = $('#secondary_content').offset().top - 45,
       dur = 1000;

    Suli.utils.stopWheel(dur);
    Suli.utils.reBind(Suli.jQ.viewport, 'scroll', Suli.home.showLatest, (dur + 200));
    
    $('html, body').stop().animate({
       'scrollTop' : offset
    }, dur, 'easeOutExpo');
    return false;
};
Suli.home.introAnim = function () {
  var $page    = $('#case_studies section'),
      $hiddenContent = $('#message, footer.global, #recent_content'),
      $message = $('#message'),
      $loader  = $('.loader'),
      $cs_nav  = $('#cs_nav li');
  

  $loader.animate({
    'opacity' : 0
  }, ((Suli.device.iPad) ? 0 : 250), function () {
    $loader.remove();
    $page.show().find('.contentWrapper').show();
    $hiddenContent.show();
    $page.animate({
      'width' :  "100%",
      'backgroundPosition' : '50% 100%'
    }, ((Suli.device.iPad) ? 0 : 500), 'easeOutExpo',  function () {
      var x = 0,
          fadeIn = setInterval(function () {
            $cs_nav.eq(x).fadeIn();
            if (x === ($cs_nav.length + 1)) {
              clearInterval(fadeIn);
            }
            x++; 
          }, 100); 
      
        $('.latest')
        .animate({ 'bottom' : 0 }, ((Suli.device.iPad) ? 0 : 400))
        .bind('click', Suli.home.gotoLatest);
        
        $message.animate({
           'marginTop' : 100
         }, ((Suli.device.iPad) ? 0 : 400), 'easeOutExpo'); 

    })
    .find('.innerScroll')
     .animate({
       'backgroundPosition' : '100% 100%'
     }, ((Suli.device.iPad) ? 0 : 800), 'easeOutExpo');
  });  
};

Suli.home.iPadHomePage = function (selector) {
  this.selector = selector;
  var self      = this,
      $selector = $(self.selector),
      $wrapper  = $(self.selector).parent(),
      $inner    = $selector.find('.innerScroll'),
      $abstract = $selector.find('.abstract'),
      _size = function () {
        var winX = (Suli.jQ.viewport.width() + 10),
            winY = (Suli.jQ.viewport.height() + 10);
        $wrapper.css({
          'height' : (winY * $selector.length)
        }); 
        $selector.css({
          'height' : winY,
          'width' : winX,
          'backgroundPosition' : '50% 50%',
          'backgroundAttachment' : 'scroll'
        });
        $inner.css({
          'height' : winY,
          'width' : winX,
          'backgroundPosition' : '50% 50%',
          'backgroundAttachment' : 'scroll'       
        });
        $abstract.css({
           'marginTop' : (winY / 2) + 100
        });
      },    
      api = {
        init : function () {
          _size();
          window.onorientationchange = function () {
            _size();        
          };
          return this;
        }
      }
  return api.init();
};

Suli.home.init = function () {
  
  var $page = $('#case_studies section'),
      $message = $('#message'),
      $body = $('body'),
      caseStudies;      

  // $page.css('backgroundImage', 'none'); 
  if ( ! Suli.device.iPad) {
    caseStudies = new Suli.ParallaxScroller('#case_studies>section', true, true, 1000); 
  } else {
    caseStudies = new Suli.home.iPadHomePage('#case_studies>section');
  }
  
  $message.css('marginTop', -180);
  $body
  .append(Suli.loader)
  .find('.loader')      
    .css({
      'top' : (Suli.jQ.viewport.height() - 60) / 2,
      'left' : (Suli.jQ.viewport.width() - 60) / 2 
     })
  .end()
    .append('<a href="#secondary_content" class="latest"></a>')
    .find('.latest')
    .css('bottom', -40);
    
   if (Suli.device.iPad) {
     $body.find('.latest').hide();                
   } 
       
   $page
   .hide()
   .css({
     'width' : 0, 
     'backgroundPosition' : '20% 50%'
    })
     .find('.innerScroll')
     .css({
       'backgroundPosition' : '500% 50%'
     });
      
  
  // Position Loader
  Suli.jQ.viewport.bind('resize', function () {
    $('.loader').css({
      'top' : (Suli.jQ.viewport.height() - 60) / 2,
      'left' : (Suli.jQ.viewport.width() - 60) / 2 
    });
  }); 
  
  // Hide loader/show content on window load
  Suli.jQ.viewport.bind('load', function () {
    Suli.home.introAnim();
  });
  
  Suli.utils.setPageData(Suli.json_url, function (data) {
    new Suli.TwitterFeed('#twitter_feed .body', 'sullivannyc', 3);
  }); 

  // Hide/Show Latest Button if needed
  Suli.jQ.viewport.bind('scroll', Suli.home.showLatest);
  
  // Icons
  $('#twitter_feed .local_header').prepend('<span class="ico" />');
  
  // Author Clicks 
  $('#news_feed .byline a').bind('click', function () {
     window.location = Suli.utils.buildAjaxUrl(this.href);
     return false;
  });
  
  
  
  // Bind Arrows for Case Study Scroller
  $(document).keydown(function (e) {
      var curIndex = caseStudies.getCurIndex(),
          len = caseStudies.getLen(),
          next = Suli.utils.getNext(curIndex, len);

      if (e.keyCode === 38) { // Previous
        caseStudies.move(Suli.utils.getPrev(curIndex, len)); 
        return false;
      } else if (e.keyCode === 40)  { // Next
        caseStudies.move(Suli.utils.getNext(curIndex, len));  
        return false;
      }
  });

};

/*
  ======================================================
  Issues
  ======================================================
*/
Suli.issues      = {};
Suli.issue       = {};
Suli.issues.init = function () {
  
  var hashFrag = window.location.hash;
  if (hashFrag) {
    Suli.utils.addPageLoader();
  }

  Suli.jQ.regionalHeader.append('<a href="/issues" class="return view_all">View All</a>');
  Suli.jQ.regionalHeader.find('.view_all').hide(); 
  Suli.jQ.regionalHeader.append(Suli.tmpl.arrows);
  
  Suli.utils.setPageData(Suli.json_url, function (data) {
/*
    if (hashFrag) {
      Suli.utils.removePageLoader();
    } */

    Suli.issues.bg   = new Suli.PseudoBg(data.background, false, 0);
    Suli.issues.grid = new Suli.GridViewer(data.items, {
      
      /*
        Options
      */
      tmpl : Suli.tmpl.issueInfo,
      scrollDur : 1800,
      onLoad : function (self, index) {
        var item = self.data[index],
            i;

        // Update Title
        self.title.html(item.title)
        self.text.html(item.text);
        
        // Load image
        if ( ! self.infoOpen) {
          if (self.img.length) {
            self.img.remove();
          }
          self.imgWrapper.append('<img src="' + item.large_image + '" height="500" width="480" />');
          self.imgWrapper.find('img').css('opacity', 0).bind('load', function () {
            var $img = $(this);
            setTimeout(function () {
             self.imgWrapper.removeClass('loading');
             $img.animate({
                'opacity' : 1
             }, 400);
            }, self.scollDur);     
          });
        }
        
        // Add Services
        if (item.services.length) {
          var html = '';
          self.relatedServices.empty().parent().show();
          for (var i = 0, len ; i < len; i++) {
            var end = ((i+1) === item.services.length) ? 'end' : null;
            html += Suli.tmpl.service(item.services[i], end);
          }
          self.relatedServices.append(html);      
        } else {
          self.relatedServices.empty().parent().hide(); 
        }
        
        
        // Add Case Studies 
        if (item.case_studies.length) {
          var html = '';
          self.relatedCasestudies.empty().parent().show();        
          for (var i = 0; i < item.case_studies.length; i++) {
            html += Suli.tmpl.casestudy(item.case_studies[i]);
          }
          self.relatedCasestudies.append(html);        
          self.relatedCasestudies.find('img').css('opacity', 0).bind('load', function () {
            var x = 0,
                 $item = self.relatedCasestudies.find('img'),
                 fadeIn = setInterval(function () {
                   $item.eq(x).animate({
                      'opacity' : 1
                    });
                   if (x === (item.case_studies.length + 1)) {
                     clearInterval(fadeIn); 
                   }
                   x++;
                 }, 50);
          });
        } else {
          self.relatedCasestudies.empty().parent().hide();
        }

        // Add Related Blog Posts
        if (item.blog_entries.length) {
          var html = '';
          self.relatedBlogEntries.empty().parent().show();
          for (var i = 0; i < item.blog_entries.length; i++) {
            var author = ( item.blog_entries[i].author) ? true : false;
            html +=  Suli.tmpl.blogEntry(item.blog_entries[i], author);
          }
          self.relatedBlogEntries.append(html);    
        } else {
          self.relatedBlogEntries.empty().parent().hide();
        }

      },
      onOpen : function (self) {
        $('#grid_nav').show();
        $('.view_all').show();
        $('header.regional p').hide(); 
      },
      onClose : function (self) {
        $('#grid_nav').hide();
        $('.view_all').hide();
        $('header.regional p').show();           
        
        // Reset Info Panel
        setTimeout(function () {
          self.title.text(' ');
          self.text.empty();
          self.imgWrapper.empty();
        }, self.scrollDur);
      }, 
      onPrevNext : function (self, index, dir, dur) {
        
        self.title.html('loading &hellip;');  
        self.text.html(' ');
        self.relatedServices.parent().hide();  
        
        // Add Slide
        self.imgWrapper.append('<img src="' + self.data[index].large_image + '" height="500" width="480" />');

        // Styles
        var $curSlide = self.imgWrapper.find('img:eq(0)'),
            $nextSlide = self.imgWrapper.find('img:eq(1)'),
            curAnim = {},
            nextStyle = {},
            nextAnim = {};

        curAnim[dir] = -480;
        curAnim.opacity = 0.5
        nextStyle[dir] = 500;
        nextAnim[dir] = 0;

        $nextSlide.css(nextStyle).bind('load', function () {
          var $this = $(this);
          $curSlide.animate(curAnim, 800, 'easeOutExpo');
          $this.animate(nextAnim, 600, 'easeOutExpo', function () {

            // Update Info
            self.onLoad(self, index);

            // Reset Style, Remove Current
            $this.removeAttr('style');
            $curSlide.remove();

          });
        });
      }
    }, 
    
    /*
      Selectors
    */
    
    {
      grid        : '#issuesList',
      panel       : '#issueInfo',
      trigger     : 'li',
      viewAll     : '.view_all',
      prev        : '#grid_nav .prev',
      next        : '#grid_nav .next',
      title       : 'h2', 
      text        : '.text',
      imgWrapper  : '#item_image',
      img         : 'img',
      relatedServices : '#related_services ul',
      relatedCasestudies : '#related_case_studies ul',
      relatedBlogEntries : '#related_blog ul'   
    });
  });
};
Suli.issue.init = function () {
  Suli.utils.setPageData(Suli.json_url, function (data) {
    Suli.issues.bg = new Suli.PseudoBg(data.background, false, 0);
  });
};

/*
  ======================================================
  Case Study
  ======================================================
*/ 
Suli.casestudy = {};
Suli.casestudy.slideshows = [];
Suli.casestudy.init = function () {
  var $slideshows = $('#media .slideshow'),
      slideshows = [];

  // Build Dynamic Size Header
  Suli.casestudy.dynamicMessage = new Suli.DynamicHeader('#case header #message');  

  Suli.utils.setPageData(Suli.json_url + Suli.casestudy_title, function (data) {
    Suli.casestudy.slideshows = data.slideshows;
    
    // Add Slidehosws
    for (var i = 0; i < $slideshows.length; i++) {
      var id = $slideshows.eq(i).attr('id'),
          slideStack = data.slideshows[i].slides,
          $slideshow = $('#' + id);
      
      if (data.slideshows[i].slides.length > 1) {
        $slideshow.find('.slides').append('<span class="tick" />');
        slideshows[i] = new Suli.SlideShow($slideshows.eq(i), Suli.casestudy.slideshows[i]);
      }
    }

    // Add Carousel
    if (data.white_papers.length > 2) {
      new Suli.Carousel(data.white_papers, 2, Suli.tmpl.issueCarPage, {
        items : '#white_papers .items',
        item  : '#white_papers .item',
        prev  : '#white_papers .prev',
        next  : '#white_papers .next' 
      });
    } else {
      $('#white_papers .nav').remove();
    }
    $('#white_papers .item a').live('click', function () {
      window.location = Suli.utils.buildAjaxUrl(this.href);
      return false;
    });
  });

};

/*
  ======================================================
  Services
  ======================================================
*/ 
Suli.services = {};
Suli.services.init = function () {
  Suli.services.header = new Suli.DynamicHeader(Suli.jQ.regionalHeader.selector, true); 
  Suli.utils.setPageData(Suli.json_url, function (data) {
    if ( ! Suli.device.iPad) {
      bg = new Suli.PseudoBg(data.background, true, 0); 
    }
  });
};
   
/*
  ======================================================
  Clients
  ======================================================
*/ 
Suli.clients = {};
Suli.clients.init = function () {
  var hashFrag = window.location.hash;
  if (hashFrag) {
    Suli.utils.addPageLoader();
  }
  Suli.utils.adjustHeader();
  
  Suli.clients.header  = new Suli.DynamicHeader(Suli.jQ.regionalHeader.selector, true);
  Suli.clients.nav     = new Suli.DynamicHeader(Suli.jQ.regionalNav.selector, false);
  Suli.clients.grid    = new Suli.ListToggle($('ul.grid'), $('.controls a')); 

  // Fetch Our Page Data for the dynamic filter
  Suli.utils.setPageData(Suli.json_url, function (data) {
    Suli.clients.filter  = new Suli.Filter($('#clientList ul.grid'), $('nav.regional a'), data.items);
    
    if ( ! Suli.device.iPad) {
      Suli.clients.bg      = new Suli.PseudoBg(data.background, false, 0);
    }
    if (hashFrag) {
      Suli.utils.removePageLoader();
    }
  });
  
};

/*
  ======================================================
  People / Person
  ======================================================
*/ 
Suli.people = {};
Suli.person = {};
Suli.people.init = function () {
  var hashFrag = window.location.hash;

  Suli.utils.addPageLoader();

  // Header
  Suli.people.header  = new Suli.DynamicHeader(Suli.jQ.regionalHeader.selector, true);

 // Fetch Our Page Data for the dynamic filter
  Suli.utils.setPageData(Suli.json_url, function (data) {
    // Background
    if ( ! Suli.device.iPad) {
      Suli.people.bg  = new Suli.PseudoBg(data.background, false, 0);
    } 
    
    // People Grid Hovers
    var $listItem = $('#peopleList li'),
        $title    = $listItem.find('.title'),
        hoverDur  = 150;
    
    $listItem.bind('click', function (e) { e.preventDefault(); });
    
    $listItem.hover(function () {
      $(this).find('.title').animate({
        'marginTop' : 0
      }, hoverDur + 200);
      $(this).find('.info').stop().animate({
        'height' : 80
      }, hoverDur);
    }, function () {
      $(this).find('.info').stop().animate({
        'height' : 18
      }, hoverDur, function () {
        $(this).find('.title').animate({
          'marginTop' : 200
        }, 0);
      });
    });  

    // Grid
    Suli.people.grid = new Suli.GridViewer(data.items, {
      
      /*
        Options
      */
      tpl : 'people',
      tmpl : Suli.tmpl.peopleInfo,
      
      // fires when an item is requested
      onLoad : function (self, index) {
        var item = self.data[index];

        self.title.text(item.first_name);
        self.jobTitle.text(item.job_title);
        self.feeds.find('.body').css({
          'backgroundPosition' : '38px 0'
        });
        self.tweets.removeClass('hide');      
        self.entries.addClass('hide');      

        if ( ! self.infoOpen) {
          if (self.img.length) {
            self.img.remove();
          }
          self.imgWrapper.append('<img src="' + item.image + '" height="420" width="320" />');
          self.imgWrapper.find('img').css('opacity', 0).bind('load', function () {
            var $img = $(this);
            setTimeout(function () {
             self.imgWrapper.removeClass('loading');
             $img.animate({
                'opacity' : 1
             }, 400);
            }, self.scollDur);     
          });
        }
        
        /*
        self.date.text(item.date_started);
        if (item.job_desc)  {
          self.jobDesc.show().html(item.job_desc);
        } else {
          self.jobDesc.hide().empty();     
        }*/

        
        // Email
        if (item.email) {
          self.contact.show().find('a.email').text(item.email).attr('href', 'mailto:' + item.email);
        } else {
          self.contact.hide();
        }
        
        // Experience
        if (item.experience) {
          var html = '';
          for (var i = 0, len = item.experience.length; i < len; i++) {
            html += '<li>' + item.experience[i].text + '</li>';
          }
          self.experience.show().find('ul').empty().append(html);          
        } else {
          self.experience.hide();
        }
        // Awards
        if (item.awards) {
          var html = '';
          for (var i = 0, len = item.awards.length; i < len; i++) {
            if(item.awards[i].link!="") {
              html += '<li><a href="' + item.awards[i].link + '">' + item.awards[i].text + '</a></li>';
            } else {
              html += '<li>' + item.awards[i].text + '</li>';
            }
          }
          self.awards.show().find('ul').empty().append(html);          
        } else {
          self.awards.hide();
        }
        
        // Affiliations
        if (item.affiliations) {
          var html = '';
          for (var i = 0, len = item.affiliations.length; i < len; i++) {
            html += '<li>' + item.affiliations[i].text + '</li>';
          }
          self.affiliations.show().find('ul').empty().append(html);          
        } else {
          self.affiliations.hide();
        }
        
        // Education
        if (item.education) {
          var html = '';
          for (var i = 0, len = item.education.length; i < len; i++) {
            html += '<li>' + item.education[i].text + '</li>';
          }
          self.education.show().find('ul').empty().append(html);          
        } else {
          self.education.hide();
        }

        // Clients
        /*
        if (item.clients) {
          var html = '';
          self.clients.show().find('ul').empty();
          for (var i = 0; i < item.clients.length; i++) {
            html += item.clients[i];
            html += (( i + 1) === item.clients.length) ? ' ' : ', '; 
          }
          self.clients.show().find('p').append(html);          
        } else {
          self.clients.hide();
        }*/
        
        // Questions
        if (item.questions) {
          var html = '';
          self.qA.show().find('ul').empty();
          for (var i = 0; i < item.questions.length; i++) {
             html += '<li><h4>' + item.questions[i].q + '</h4>' + item.questions[i].a + '</li>';
          }
          self.qA.find('ul').append(html);
        } else {
          self.qA.hide();
        }
        
        // Has Tweets or Blog Entries
        if (item.twitter_user || item.blog_entries.length) {
          self.feeds.show();

          // Tweets
          if (item.twitter_user) {
            self.tweets.show();
            self.feeds.find('a[href=#tweets]').show().addClass('current');
            var twitterFeed = new Suli.TwitterFeed(self.selectors.tweets, item.twitter_user, 2); 
          } else {
            self.tweets.hide();
            self.feeds.find('a[href=#tweets]').hide();   
          }
          
          // Blog Entries
          if (item.blog_entries.length) {
            var html = '';
            
            // Show The Tab
            self.feeds.find('a[href=#blog_posts]').show().removeClass('current');
            for (var i = 0; i < item.blog_entries.length; i++) {
              html += Suli.tmpl.blogEntry(item.blog_entries[i], true);
            }
            self.entries.find('ul').empty().append(html); 
            
            // Has Blog Entries But No Twitter
            if ( ! item.twitter_user) {
              self.entries.removeClass('hide');
              self.feeds.find('a[href=#blog_posts]').addClass('current');       
            } else {
              // Has Both Blog Entries and Twitter
              self.entries.addClass('hide');
              self.feeds.find('.local_header a').unbind('click').bind('click', function () {
                var $this = $(this),
                    positon = $this.position(),
                    offset = -(self.feeds.width() - (self.feeds.width() + positon.left)),
                    target = $this.attr('href');
                
                if ( ! $this.hasClass('current')) {
                  
                  self.feeds.find(target).removeClass('hide').siblings().filter('.body').addClass('hide');        
                  self.feeds.find('.body').animate({
                    'backgroundPosition' : (offset + 38) + 'px 0'
                  });
                  
                  $this
                  .addClass('current')
                    .parent()
                      .siblings()
                        .find('a')
                        .removeClass('current');
                }
                return false;
              });
            }               
          } else {
            self.feeds.find('a[href=#blog_posts]').hide();
            self.entries.find('ul').empty();
          }
          
        } else {
          if (twitterFeed instanceof Suli.TwitterFeed) {
            delete twitterFeed;  
          }
          self.feeds.hide();     
          self.tweets.find('ul').replaceWith('<span class="loadstatus">loading</span>');
          self.feeds.find('a[href=#tweets]').hide();
          self.feeds.find('a[href=#blog_entries]').hide();
        }
      },
      
      // Runs After panel has fully closed
      onClose : function (self) {
         setTimeout(function () {
            self.title.text('Name Here');
            self.jobTitle.text('Title Here');
            self.clients.find('p').empty();
            self.qA.find('ul').empty();
            self.imgWrapper.empty();
            self.tweets.find('ul').replaceWith('<span class="loadstatus">loading ...</span>'); 
          }, self.scrollDur);
      },
      
      // Runs when prev / Next is clicked
      onPrevNext : function (self, index, dir, dur) {

        // Set Load Status
        self.title.html('loading &hellip;');
        self.jobTitle.eq(0).text(' ');
        self.clients.hide().find('p').empty();
        self.qA.hide();
        self.tweets.find('ul').empty().replaceWith('<span class="loadstatus">loading ...</span>');
        self.entries.find('ul').empty();

        // Add Slide
        self.imgWrapper.append('<img src="' + self.data[index].image + '" height="420" width="320" />');

        // Styles
        var $curSlide = self.imgWrapper.find('img:eq(0)'),
            $nextSlide = self.imgWrapper.find('img:eq(1)'),
            curAnim = {},
            nextStyle = {},
            nextAnim = {};

        curAnim[dir] = -300;
        curAnim.opacity = 0.5
        nextStyle[dir] = 320;
        nextAnim[dir] = 0;

        $nextSlide.css(nextStyle).bind('load', function () {
          var $this = $(this);

          $curSlide.animate(curAnim, dur, 'easeOutExpo');
          $this.animate(nextAnim, (dur - 200), 'easeOutExpo', function () {

            // Update Info
            self.onLoad(self, index); 

            // Reset Style, Remove Current
            $this.removeAttr('style');
            $curSlide.remove();

          });
        });
      }
    
    /*
      Selectors
    */
    }, {          
      grid        : '#peopleList',
      panel       : '#peopleInfo',
      trigger     : 'li',
      viewAll     : '.view_all',
      prev        : '#grid_nav .prev',
      next        : '#grid_nav .next',
      title       : 'h2',
      jobTitle    : '.title',
      jobDesc     : '.jobDesc',
      imgWrapper  : '#item_image',
      img         : 'img',
      date        : '.date',
      contact     : '#contactInfo',
      experience  : '#experience',
      awards      : '#awards',
      affiliations: '#affiliations',
      education   : '#education',
      qA          : '#q_a',
      clients     : '#clients',
      feeds       : '#feeds',
      tweets      : '#tweets',
      entries     : '#blog_posts'
    });

  });

};
Suli.person.init = function () {
  Suli.utils.adjustHeader();
  
  Suli.person.header = new Suli.DynamicHeader(Suli.jQ.regionalHeader.selector, true);
  Suli.person.nav    = new Suli.DynamicHeader(Suli.jQ.regionalNav.selector, false);
  
  Suli.utils.setPageData(Suli.json_url, function (data) {
    if ( ! Suli.device.iPad) {
      Suli.person.bg  = new Suli.PseudoBg(data.background, false, 0);
    }
  });
};

/*
  ======================================================
  Careers
  ======================================================
*/ 
Suli.careers      = {};
Suli.careers.init = function () {
  var hashFrag = window.location.hash,
      $intro   = $('#intro'),
      $values  = $('#values'),
      $people  = $('#peopleCar');
  if (hashFrag) {
    Suli.utils.addPageLoader();
  }
  
  
  
  Suli.careers.header = new Suli.DynamicHeader(Suli.jQ.regionalHeader.selector, true); 
  Suli.utils.setPageData(Suli.json_url, function (data) {

    if ( ! Suli.device.iPad) {
      Suli.careers.bg = new Suli.PseudoBg(data.background, false, 0); 
    }
    
    new Suli.Carousel(data.people, 3, Suli.tmpl.peopleCarPage, {
      items : '#peopleCar .items',
      item  : '#peopleCar .item',
      prev  : '#peopleCar .prev',
      next  : '#peopleCar .next' 
    });
    
    Suli.careers.grid = new Suli.GridViewer(data.items, {
      /*
        Options
      */
      tpl : 'careers',
      tmpl : Suli.tmpl.jobInfo,
      
      // fires when an item is requested
      onLoad : function (self, index) {
        var item = self.data[index];
        
        // self.jobTitle.remove();
        
        $people.hide();
        $intro.animate({
          'opacity' : 0.25
        });
        $values.animate({
          'opacity' : 0.25
        });
        
        // Set Title and Description
        self.title.text(item.title);
        self.office.text(item.office);
        self.jobDesc.html(item.job_desc);
        self.quals.empty();
        
        // Resposibilities
        self.respons.parent().parent().hide(); 
/*
        if (item.responsibilities.length) {
          var html = '';
          self.respons.parent().parent().show();
          for (var i = 0; i < item.responsibilities.length; i++) {
            html += Suli.tmpl.qualification(item.responsibilities[i]);
          }
          self.respons.append(html);
        } else {
          self.respons.parent().parent().hide();
        }
          */

        // Qualifications
        if (item.qualifications.length) {
          var html = '';
          self.quals.parent().parent().show();
          for (var i = 0; i < item.qualifications.length; i++) {
            html += Suli.tmpl.qualification(item.qualifications[i]);
          }
          self.quals.append(html);
        } else {
          self.quals.parent().parent().hide();
        } 
        
        // Related People 
        if (item.related_people.length) {
          var html = '';
          
          self.people.show().find('.items').empty();
          for (var i = 0; i < item.related_people.length; i++) {
            html += Suli.tmpl.peopleCarPage(item.related_people[i]);
          }
          self.people.find('.items').append(html);
          
          self.people.find('.item').css('opacity', 0).find('img').bind('load', function () {
             var x = 0,
                 $item = self.people.find('.item'),
                 fadeIn = setInterval(function () {
                   $item.eq(x).animate({
                      'opacity' : 1
                    });
                   if (x === (item.related_people.length + 1)) {
                     clearInterval(fadeIn); 
                   }
                   x++;
                 }, 100);
             
          });
        } else {
          self.people.hide();
        }
        
      },
      
      // Runs After panel has fully closed
      onClose : function (self) { 
         $people.show(); 
          $intro.animate({
            'opacity' : 1
          });
          $values.animate({
            'opacity' : 1
          });
          setTimeout(function () {
              self.title.text('Name Here');
              self.office.text('Office Here');
              self.jobDesc.empty();
              self.quals.empty();
          }, self.scrollDur); 
      },
      
      // Runs when prev / Next is clicked
      onPrevNext : function (self, index, dir, dur) {
        self.onLoad(self, index);
      }
      

    /*
      Selectors
    */
    }, {
      grid        : '#jobList',
      panel       : '#jobInfo',
      jobTitle    : '.local_header .title',
      people      : '#relatedPeople',
      values      : '#values',
      quals       : '#qualifications .list ul',   
      respons     : '#responsibilities .list ul',   
      trigger     : 'li',
      viewAll     : '.view_all',
      prev        : '#grid_nav .prev',
      next        : '#grid_nav .next',
      title       : 'h2',
      office      : '.title',
      jobDesc     : '#overview .desc'          
    });

    // Author Clicks 
    $('#peopleCar .item a, #relatedPeople .item a').live('click', function () {
       window.location = Suli.utils.buildAjaxUrl(this.href);
       return false;
    });
    
  });
  
};

/*
  ======================================================
  Contact
  ======================================================
*/ 
Suli.contact            = {};
Suli.contact.map        = {}; 
Suli.contact.map.lat    = 40.741668; 
Suli.contact.map.lng    = -74.007825;
Suli.contact.map.ico    = 'http://assets.sullivannyc.com/img/css/mapIco.png';
Suli.contact.map.shadow = 'http://assets.sullivannyc.com/img/css/mapIcoShadow.png'; 
Suli.contact.map.init   = function (selector) {

 var map = {},
     marker = {},
     latlng = new google.maps.LatLng(Suli.contact.map.lat, Suli.contact.map.lng),
     opts = {
       zoom: 16,
       mapTypeControl : false,
       center: latlng,
       mapTypeId: google.maps.MapTypeId.ROADMAP,
       panControl: false,
       scaleControl: false,
       scrollwheel: false,
       zoomControl: true,
       zoomControlOptions: {
         position: google.maps.ControlPosition.LEFT_BOTTOM
       }  
     },
     size   = new google.maps.Size(60, 72),
     point  = new google.maps.Point(0, 0),
     icon   = new google.maps.MarkerImage(Suli.contact.map.ico, size, point),
     shadow = new google.maps.MarkerImage(Suli.contact.map.shadow,
              new google.maps.Size(85, 47),
              new google.maps.Point(0,0),
              new google.maps.Point(23, 47));

 // Build Map
 map = new google.maps.Map(document.getElementById(selector), opts);
 
 //  Add marker
 marker = new google.maps.Marker({
   position: latlng,
   map: map,
   icon: icon,
   shadow: shadow,
   navigationControl: false
 });

};
Suli.contact.init = function () {
  Suli.utils.adjustHeader(); 
  
  Suli.contact.header  = new Suli.DynamicHeader(Suli.jQ.regionalHeader.selector, true);
  Suli.contact.nav     = new Suli.DynamicHeader(Suli.jQ.regionalNav.selector, false);
  
  Suli.utils.setPageData(Suli.json_url, function (data) { 
    if ( ! Suli.device.iPad) {
      Suli.contact.bg = new Suli.PseudoBg(data.background, false, 0); 
    }
  });
  
  Suli.jQ.viewport.bind('load', function () {
    Suli.contact.map.init('map'); 
  });
};

/*
  ======================================================
  Blog
  ======================================================
*/ 
Suli.blog = {};
Suli.blog.init = function () {
  Suli.utils.adjustHeader(); 
  Suli.blog.header  = new Suli.DynamicHeader(Suli.jQ.regionalHeader.selector, true);
  Suli.blog.nav     = new Suli.DynamicHeader(Suli.jQ.regionalNav.selector, false); 
  
  Suli.utils.setPageData(Suli.json_url, function (data) {
    if ( ! Suli.device.iPad) {
      Suli.blog.bg = new Suli.PseudoBg(data.background, false, 0);
    } 
  });

  // Author Clicks 
  $('.byline a').bind('click', function () {
     window.location = Suli.utils.buildAjaxUrl(this.href);
     return false;
  });
};


/*
  ======================================================
  Work
  ======================================================
*/ 
Suli.work = {};
Suli.work.init = function () {
  Suli.utils.adjustHeader(); 
  Suli.work.header  = new Suli.DynamicHeader(Suli.jQ.regionalHeader.selector, false);
  Suli.work.nav     = new Suli.DynamicHeader(Suli.jQ.regionalNav.selector, false);
  
  Suli.utils.setPageData(Suli.json_url, function (data) {
    if ( ! Suli.device.iPad) {
      Suli.work.bg = new Suli.PseudoBg(data.background, false, 0);
    } 
  });
  
    
  // Work Grid Hovers
  var $listItem = $('#workList li.workItem'),
      hoverDur  = 200;

  $listItem.hover(function () {
    $(this).find('.blurbWrap').stop().animate({
      'marginTop' : -216
    }, hoverDur);
  }, function () {
    $(this).find('.blurbWrap').stop().animate({
      'marginTop' : 0
    }, hoverDur);
  });  

  Suli.work.grid    = new Suli.ListToggle($('ul.grid'), $('.controls a')); 

  
  
};

/*
  ======================================================
  Awards
  ======================================================
*/ 
Suli.awards = {};
Suli.awards.init = function () {
  Suli.utils.adjustHeader(); 
  Suli.awards.header  = new Suli.DynamicHeader(Suli.jQ.regionalHeader.selector, false);
};
