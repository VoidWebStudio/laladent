var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
});
var galleryTop2 = new Swiper('.gallery-top2', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs2
  }
});

var mySwiper1 = new Swiper('.slider1', {
  slidesPerView: 3,
  spaceBetween: 21,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var mySwiper2 = new Swiper('.slider2', {
  slidesPerView: 3,
  spaceBetween: 21,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
var mySwiper3 = new Swiper('.slider3', {
  spaceBetween: 10,
  width:155,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is <= 320px
    360: {
      width:155,
    },
    // when window width is <= 480px
    640: {
      width:155
    },
    // when window width is <= 640px
    768: {
      spaceBetween: 10,
      width:155
    }
  }
});
var mySwiper4 = new Swiper('.slider4-1', {
  spaceBetween: 7,
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper-button-next41',
    prevEl: '.swiper-button-prev41',
  }
});
var mySwiper5 = new Swiper('.slider4-2', {
  spaceBetween: 7,
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper-button-next42',
    prevEl: '.swiper-button-prev42',
  }
});
var mySwiper6 = new Swiper('.slider4-3', {
  spaceBetween: 7,
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper-button-next43',
    prevEl: '.swiper-button-prev43',
  }
});
var mySwiper7 = new Swiper('.slider5', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next5',
    prevEl: '.swiper-button-prev5',
  },
  pagination: {
    el: '.swiper-pagination5',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
var mySwiper7_1 = new Swiper('.slider5-1', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next51',
    prevEl: '.swiper-button-prev51',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
var mySwiper8 = new Swiper('.slider7', {
  spaceBetween: 16,
  slidesPerView: 6,
  navigation: {
    nextEl: '.swiper-button-next7',
    prevEl: '.swiper-button-prev7',
  },
  pagination: {
    el: '.swiper-pagination7',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
var mySwiper10 = new Swiper('.slider10', {
 slidesPerView: 1,
 spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
    });
var mySwiper11 = new Swiper('.slider11', {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next11',
    prevEl: '.swiper-button-prev11',
  },
  pagination: {
    el: '.swiper-pagination11',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});
var mySwiper12 = new Swiper('.slider12', {
  spaceBetween: 21,
  width:183,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
var mySwiper13 = new Swiper('.slider15', {
  spaceBetween: 20,
  width:793,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var links = document.querySelectorAll('.hos-nav-ul li');
var content = document.querySelectorAll('.tab-cont>div');
for(var i=0; i <links.length; i++) {
  (function(i) {
   var link = links[i];
   link.onclick = function() {
     for(var j=0; j <links.length; j++) {      
      links[j].classList.remove("active");
    }
    for(var k=0; k <content.length; k++) {      
      content[k].classList.remove("active");
    }
    this.classList.add("active");       
    for(var j=0; j <links.length; j++) {   
     if (links[j].classList.contains("active") ) {
       content[j].classList.add("active");
       break;
     }   
   }

 }
})(i);
}
var clicks = document.querySelectorAll('.price-block>div');
for(var i=0; i <clicks.length; i++) {
  (function(i) {
   var click = clicks[i].children[0];
   click.onclick = function() {
     var clc = this.parentElement;          
     if (clc.classList.contains("active")) {
       clc.classList.remove("active");
     }else{
      for(var i=0; i <clc.length; i++) {
        clc[i].classList.remove("active");
      }
      clc.classList.add("active");
    }
  }
})(i);
}


var header = document.getElementById("head-fix");
var scrbtn = document.getElementById("scr-btn");
var scrollTop1 = 0;
window.addEventListener('scroll', function() {
  var headh=header.offsetHeight;
  var scrollTopPrev = scrollTop1; 
  scrollTop1 = window.scrollY;  

  if (scrollTop1 > headh  && scrollTopPrev < scrollTop1) {
    header.classList.add('head-hidden');
  } else {
   header.classList.remove('head-hidden');
 }
 if (scrollTop1 > headh) {
  scrbtn.classList.add('btn-vis');
} else {
 scrbtn.classList.remove('btn-vis');
}


});
scrbtn.addEventListener('click', function(e) {
 e.preventDefault();
 window.scrollTo(0, 0);
});

var t_links = document.querySelectorAll('.doc-nav-ul');
var t_content = document.querySelectorAll('.doc-tab-conts>div');
for(var i=0; i <t_links.length; i++) {
  var t_links1=t_links[i].children;
  for(var m=0; m <t_links1.length; m++) {
    (function(m) {
     var t_link = t_links1[m];
     t_link.onclick = function() {
       var ghg=this.parentElement.children;
       var p1=this.parentElement;
       var p2=p1.parentElement;
       var p3=p2.parentElement;
       var p4=p3.parentElement;
       var p5=p4.children[2];
       var p6=p5.children[m];
       console.log(ghg);
       for(var i=0; i <ghg.length; i++) {
        p7=p5.children[i];
        ghg[i].classList.remove("t_active");
        p7.classList.remove("tt_active");
      }
      this.classList.add("t_active");
      p6.classList.add("tt_active");




    }

  })(m);
}
}


var show_btns = document.getElementsByClassName("doc-tab-item-show");
for(var i=0; i <show_btns.length; i++) {
  (function(i) {
   var show_btn = show_btns[i];
   show_btn.onclick = function() {
    this.classList.toggle("sh_btn");
    var parent=this.parentElement;
    parent.classList.toggle("sh_par");

  }
})(i);
}

var mark_block = document.querySelectorAll('.mark-blovk1 div');
for(var i=0; i <mark_block.length; i++) {
  var mark_block1=mark_block[i].children;
  for(var h=0; h <mark_block1.length; h++) {
    var t=h;
    (function(h) {
     var mark = mark_block1[h];
     mark.onclick = function() {
      if (mark.classList.contains("active_m")) {
       this.classList.remove("active_m");
     }else{
      var mark_p=this.parentElement.children;
      for(var i=0; i <mark_p.length; i++) {
        mark_p[i].classList.remove("active_m");
        mark_p[i].classList.remove("active_h");

      }
      this.classList.add("active_m");
      for(var l=0; l <mark_p.length; l++) {
       mark_p[l].classList.add("active_h");
       if (mark_p[l].classList.contains("active_m")) {
         break;
       }

     }
   }
 }
 mark.onmouseover = function() {
   var mark_p=this.parentElement.children;
   this.classList.add("mark_h");
   for(var l=0; l <mark_p.length; l++) {
     mark_p[l].classList.add("h_mark");
     if (mark_p[l].classList.contains("mark_h")) {
       break;
     }

   }

 }
 mark.onmouseout = function() {
   var mark_p=this.parentElement.children;
   for(var l=0; l <mark_p.length; l++) {
     mark_p[l].classList.remove("h_mark");
     mark_p[l].classList.remove("mark_h");

   }

 }

})(h);
}
}

var stm_btns = document.getElementsByClassName("stm-block-p");
for(var i=0; i <stm_btns.length; i++) {
  (function(i) {
   var show_btn = stm_btns[i];
   show_btn.onclick = function() {
    this.classList.toggle("active_stm");
    var parent=this.parentElement;
    var child=parent.children[1];
    child.classList.toggle("sh_par");

  }
})(i);
}
var loc_btns = document.getElementsByClassName("hospital-loc-block-mob-head");
for(var i=0; i <loc_btns.length; i++) {
  (function(i) {
   var show_btn = loc_btns[i];
   show_btn.onclick = function() {
    this.classList.toggle("active_loc");
    var parent=this.parentElement;
    var child=parent.children[1];
    child.classList.toggle("sh_loc");

  }
})(i);
}
var mob_btn_open = document.querySelectorAll(".mob-head-btn");
var menu_open = document.querySelectorAll(".mob-menu-win");
var menu_close = document.querySelectorAll(".mob-head-btn-close");
mob_btn_open[0].onclick = function() {
  menu_open[0].classList.add("active_mm");
}

menu_close[0].onclick = function() {
  menu_open[0].classList.remove("active_mm");
}

var mob_clicks = document.querySelectorAll('.mob-menu-btn>span');
var mob_items = document.querySelectorAll('.mob-menu-block-body');
for(var i=0; i <mob_clicks.length; i++) {
  (function(i) {
   var click = mob_clicks[i];
   click.onclick = function() {    
     var parent=this.parentElement;
     var parent1=parent.parentElement;
     var parent2=parent1.parentElement;
     var parent3=parent2.parentElement;
     var child=parent3.children[1];

     if (click.classList.contains("active_mob")) {
       this.classList.remove("active_mob");
       child.classList.remove("active_mob");
     }else{
      for(var i=0; i <mob_clicks.length; i++) {
        mob_clicks[i].classList.remove("active_mob");
      }
      for(var i=0; i <mob_items.length; i++) {
        mob_items[i].classList.remove("active_mob");
      }
      this.classList.add("active_mob");
      child.classList.add("active_mob");
    }
  }
})(i);
}
var mob_alls = document.getElementsByClassName("mob_all_btn");
for(var i=0; i <mob_alls.length; i++) {
  (function(i) {
   var show_btn = mob_alls[i];
   show_btn.onclick = function() {
     var parent=this.parentElement;
     if (this.classList.contains("active_all")) {
      this.classList.remove("active_all");
      parent.classList.remove("active_all");
    }else{
      this.classList.add("active_all");
      parent.classList.add("active_all");
    }

  }
})(i);
}

var mob_tree_links = document.getElementsByClassName("mob_tree_link_btn");
var mob_tree_links_block = document.getElementsByClassName("mob_tree_link_block");
for(var i=0; i <mob_tree_links.length; i++) {
  mob_tree_links[i].onclick = function() {
    if (this.classList.contains("actv")) {
     this.classList.remove("actv");
     mob_tree_links_block[0].classList.remove("actv");
   }
   else{
    this.classList.add("actv");
    mob_tree_links_block[0].classList.add("actv");
  }
}
}







var serv_btn = document.querySelectorAll('.serv_btn');
var serv_btn_all = document.querySelectorAll('.serv_btn_all');
var serv_content = document.querySelectorAll('.services-filter-block');
var serv_cont = document.querySelectorAll('.services-filter');
for(var i=0; i <serv_btn_all.length; i++) {
  serv_btn_all[i].onclick = function(e) {
    e.preventDefault();
    this.classList.add("btn_active");
    serv_cont[0].classList.add("btn_active");
    for(var i=0; i <serv_btn.length; i++) {
     serv_btn[i].classList.remove("btn_active");

   }
   for(var i=0; i <serv_content.length; i++) {
     serv_content[i].classList.add("btn_active");
   }
 }


}

for(var i=0; i <serv_btn.length; i++) {
  var serv_btn1=serv_btn[i];
  (function(i) {
   serv_btn1.onclick = function(e) {
     e.preventDefault();
     for(var i=0; i <serv_btn_all.length; i++) {
      serv_btn_all[i].classList.remove("btn_active");
    }
    serv_cont[0].classList.remove("btn_active");
    for(var j=0; j <serv_btn.length; j++) {      
      serv_btn[j].classList.remove("btn_active");
    }
    for(var k=0; k <serv_content.length; k++) {      
      serv_content[k].classList.remove("btn_active");
    }
    this.classList.add("btn_active");       
    for(var j=0; j <serv_btn.length; j++) {   
     if (serv_btn[j].classList.contains("btn_active") ) {
       serv_content[j].classList.add("btn_active");
       break;
     }   
   }




 }

})(i);

}
var cart_btn = document.getElementsByClassName("cart-body-promo");
var cart_input = document.getElementsByClassName("poromo-inp");
for(var i=0; i <cart_btn.length; i++) {
  cart_btn[i].onclick = function() {
   this.classList.add("actv");
   var par1=this.parentElement;
   var par2 =par1.children[1];     
   par2.classList.add("actv");
   
   
 }
}
var about_btn = document.querySelectorAll('.about-text-head');
var about_body = document.querySelectorAll('.about-text-body');
for(var i=0; i <about_btn.length; i++) {
  (function(i) {
   var click = about_btn[i];
   click.onclick = function() {    
     var parent=this.parentElement;
     var child=parent.children[1];

     if (this.classList.contains("actv")) {
       this.classList.remove("actv");
       child.classList.remove("actv");
     }else{
      this.classList.add("actv");
      child.classList.add("actv");
      
    }
  }
})(i);
}
    // scrollTopBtn.on('click', function () {
    //     $("html, body").stop().animate({scrollTop: 0}, 500, 'swing');
    // })



    var site_input = document.querySelectorAll('.site-input');

    for(var i=0; i <site_input.length; i++) {
      if (site_input[i].children[1].value!="") {
           site_input[i].children[0].classList.add("act");
           site_input[i].children[1].classList.add("act");
           
         }   
     (function(i) {
       var click = site_input[i].children[1];
       click.onfocus = function() {  

         var parent=this.parentElement;
         var child=parent.children[0];

          this.classList.add("act");
          child.classList.add("act");
        

      }
      click.onblur = function() {  
       if (this.value=="") {
           var parent=this.parentElement;
           var child=parent.children[0];
           this.classList.remove("act");
           child.classList.remove("act");
         }                

      }
    })(i);
  }



  var price_popup = document.querySelectorAll('.price_pop');
  
  for(var i=0; i <price_popup.length; i++) {

   var click = price_popup[i];
   click.onclick = function() {   
    var popup_cont = document.querySelectorAll(".appointment-popup");    
    popup_cont[0].classList.add("act");
  }
}
var next_pop = document.getElementById('popup-next');
next_pop.onclick = function() {   
  var popup_cont = document.querySelectorAll(".appointment-popup"); 
  var popup_cont2 = document.querySelectorAll(".appointment-popup2");
  popup_cont[0].classList.remove("act");

  popup_cont2[0].classList.add("act");
}
var next_pop2 = document.getElementById('popup-next2');
next_pop2.onclick = function() {   
  var popup_cont = document.querySelectorAll(".appointment-popup2"); 
  var popup_cont2 = document.querySelectorAll(".appointment-popup3");
  popup_cont[0].classList.remove("act");

  popup_cont2[0].classList.add("act");
  $('.datepicker-here').datepicker();
}

var gallery_popup = document.querySelectorAll('.gallery-pop');

for(var i=0; i <gallery_popup.length; i++) {

  var click = gallery_popup[i];
  click.onclick = function() {   
    var popup_cont = document.querySelectorAll(".slider-popup");    
    popup_cont[0].classList.add("act");
  }
}
var gallery_popup2 = document.querySelectorAll('.sertifikat-items');

for(var i=0; i <gallery_popup2.length; i++) {

  var click = gallery_popup2[i];
  click.onclick = function() {   
    var popup_cont = document.querySelectorAll(".slider-popup");    
    popup_cont[0].classList.add("act");
  }
}
var gallery_popup3 = document.querySelectorAll('.services-sub-gallery-block .slider-block');

for(var i=0; i <gallery_popup3.length; i++) {

  var click = gallery_popup3[i];
  click.onclick = function() {   
    var popup_cont = document.querySelectorAll(".slider-popup");    
    popup_cont[0].classList.add("act");
  }
}
var gallery_popup4 = document.querySelectorAll('.comment-slider .slider-block3');

for(var i=0; i <gallery_popup4.length; i++) {

  var click = gallery_popup4[i];
  click.onclick = function() {   
    var popup_cont = document.querySelectorAll(".slider-popup");    
    popup_cont[0].classList.add("act");
  }
}
var gallery_popup5 = document.querySelectorAll('.hospital-loc-slider .slider-block4');

for(var i=0; i <gallery_popup5.length; i++) {

  var click = gallery_popup5[i];
  click.onclick = function() {   
    var popup_cont = document.querySelectorAll(".slider-popup");    
    popup_cont[0].classList.add("act");
  }
}
function popup(param2){
  var popup_cont = document.querySelectorAll("."+param2+"");    
  popup_cont[0].classList.add("act");
}


var popup_close = document.querySelectorAll(".close-popup");
for(var i=0; i <popup_close.length; i++) {

  var click = popup_close[i];
  click.onclick = function() {   
   var par=this.parentElement;
   var par2=par.parentElement;
   par2.classList.remove("act");

 }
}

var popup_close_slider = document.querySelectorAll(".popup-slider-close");
for(var i=0; i <popup_close_slider.length; i++) {

  var click = popup_close_slider[i];
  click.onclick = function() {   
   var par=this.parentElement;
   par.classList.remove("act");

 }
}


window.addEventListener("DOMContentLoaded", function() {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }
  function setCursorPosition2(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
     
    }
  }

  function mask(event) {
    var matrix = "+7 (___) ___-__-__",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    
    this.value = matrix;
    
    i = matrix.lastIndexOf(val.substr(17));
    
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    
    setCursorPosition2(i, this)
    
  }
  function mask2(event) {
    var matrix = "__.__.____";
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }

  var input = document.querySelectorAll(".popup_valid_num");
  for(var i=0; i <input.length; i++) {
    input[i].addEventListener("input", mask, false)
  }
  var input2 = document.querySelectorAll(".popup_valid_date");
  for(var i=0; i <input2.length; i++) {
    input2[i].addEventListener("input", mask2, false)
  }
});




var click_tm = document.querySelectorAll('.appoin-active');
for(var i=0; i <click_tm.length; i++) {
  (function(i) {
   var click = click_tm[i];
   click.onclick = function(e) {  
     e.preventDefault();         
     if (click.classList.contains("act")) {
       this.classList.remove("act");
     }else{
      for(var i=0; i <click_tm.length; i++) {
        click_tm[i].classList.remove("act");

      }

      this.classList.add("act");
    }
  }
})(i);
}
var clicks_doc = document.querySelectorAll('.doc_item_active');
for(var i=0; i <clicks_doc.length; i++) {
  (function(i) {
   var click = clicks_doc[i];
   click.onclick = function(e) {  
     e.preventDefault();         
     if (click.classList.contains("act")) {
       this.classList.remove("act");
     }else{
      this.classList.add("act");
    }
  }
})(i);
}

var timeoutHandle;
function countdown(seconds) {
  function tick() {
    var counter = document.getElementById("popup-timer");
    counter.innerHTML =(seconds < 10 ? "0" : "") + String(seconds);
    seconds--;
    if (seconds >= 0) {
      timeoutHandle = setTimeout(tick, 1000);
    } 
  }
  tick();
}


countdown(30);