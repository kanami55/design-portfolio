
// topへ戻るボタン動作
const page_top = document.querySelector("#page-top")
page_top.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ハンバーグメニュー開閉時
document.querySelector('.hamburger-bar').addEventListener('click', function() {
  this.classList.toggle('action');
  document.querySelector('.hamburger-nav-items').classList.toggle('action-content')
})

//Daily UIのスライド動作
const options = {
  mediaQuery: "max", 
  fixedWidth: "300px",
  fixedHeight: "250px",
  heightRatio: 0.3,
  gap: 16,
  type: "loop",
  arrows: false,
  drag: "free", 
  flickPower: 100,
  pagination: false,

  autoScroll: {
    speed: 0.8, 
    pauseOnHover: false,
    pauseOnFocus: true,
  },
  breakpoints: {
    1025: {
      mediaQuery: "min", 
    },
  },
};

const splide = new Splide(".splide", options);

splide.mount(window.splide.Extensions);


$('#wave1,#wave2,#wave3').wavify({
  height: 10,
  bones: 3,
  amplitude: 25,
  color: '#A3DDE0',
  speed: .25
});

$('#wave').wavify({
  height: 100,
  bones: 5,
  amplitude: 25,
  color: '#A3DDE0',
  speed: .25
});


// モーダル
// LP
$(function() {
  $('#model-open1').on('click',function() {
    $('body').css('overflow-y','hidden');
    $('#model1').show();
  });
  
  $('#model1').on('click',function(){
    $('#model1').hide();
    $('body').css('overflow-y', 'auto');
  })
})
// コーポレートサイト
$(function() {
  $('#model-open2').on('click',function() {
    $('body').css('overflow-y','hidden');
    $('#model2').show();
  });
  
  $('#model2').on('click',function(){
    $('#model2').hide();
    $('body').css('overflow-y', 'auto');
  })
})
// ECサイト
$(function() {
  $('#model-open3').on('click',function() {
    $('body').css('overflow-y','hidden');
    $('#model3').show();
  });

  $('#model3').on('click',function(){
    $('#model3').hide();
    $('body').css('overflow-y', 'auto');
  })
})
// UIUX
$(function() {
  $('#model-open4').on('click',function() {
    $('body').css('overflow-y','hidden');
    $('#model4').show();
  });

  $('#model4').on('click',function(){
    $('#model4').hide();
    $('body').css('overflow-y', 'auto');
  })
})