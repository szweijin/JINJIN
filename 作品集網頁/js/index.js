$(document).ready(function() {
    new fullpage('#fullpage', {
      sectionSelector: '.vertical-scrolling',
      menu: '#menu',
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      navigation: true,
      verticalCentered: true,
      credits: {
        enabled: false,
      },
      afterLoad: function(anchorLink, index) {
        $('#menu li').removeClass('active');
        $('#menu li').eq(index - 1).addClass('active');
      }
    });
  
    // Trigger a click on the first menu item to ensure the correct initial state
    $('#menu li a').first().click();
  });



$(document).ready(function(){
    $('#fullpage').fullpage({
        afterLoad: function(origin, destination, direction){
            var activeSectionIndex = destination.index;
            $('#menu li').removeClass('active'); // 移除所有导航项的 active 类
            $('#menu li').eq(activeSectionIndex).addClass('active'); // 为当前页面的导航项添加 active 类
        }
    });
});

$(function(){
    $("#typing").typing({
        sourceElement: $("#content")
    });
});
