 /*
     *
     * @param id  传入元素的id
     * @returns {HTMLElement | null}  返回标签对象，方便获取元素
     */
    function my1$(od) {
      return document.getElementById(od);
  }

  //获取各元素，方便操作
  var box2=my1$("xia");
  var inner2=box2.children[0];
  var ulobj2=inner2.children[0];
  var list2=ulobj2.children;
  var ol0bj2=inner2.children[1];
  var arr2=my1$("arr2");
  var imgWidth2=inner2.offsetWidth;
  var right2=my1$("next_ho2");
  var pic2=0;
  //根据li个数，创建小按钮
  for(var a=0;a<list2.length;a++){
    var liObj2=document.createElement("li");

    ol0bj2.appendChild(liObj2);
    liObj2.setAttribute("index",a);

    //为按钮注册mouseover事件
    liObj2.onclick=function () {
        //先清除所有按钮的样式

        for (var b=0;b<ol0bj2.children.length;b++){
            ol0bj2.children[b].removeAttribute("class");
        }
        this.className="active";
        pic2=this.getAttribute("index");
        animate(ulobj2,-pic2*imgWidth2);
    }

}
  //设置ol中第一个li有背景颜色
  ol0bj2.children[0].className = "active";
  //克隆一个ul中第一个li,加入到ul中的最后=====克隆
  ulobj2.appendChild(ulobj2.children[0].cloneNode(true));

  var timeId2=setInterval(onmouseclickHandle2,2000);
  //左右焦点实现点击切换图片功能
  box2.onmouseover=function () {
      arr2.style.display="block";
      clearInterval(timeId2);
  };
  box2.onmouseout=function () {
      arr2.style.display="none";
      timeId2=setInterval(onmouseclickHandle2,2000);
  };

  right2.onclick=onmouseclickHandle2;
  function onmouseclickHandle2() {
      //如果pic2的值是5,恰巧是ul中li的个数-1的值,此时页面显示第六个图片,而用户会认为这是第一个图,
      //所以,如果用户再次点击按钮,用户应该看到第二个图片
      if (pic2 == list2.length - 1) {
          //如何从第6个图,跳转到第一个图
          pic2 = 0;//先设置pic2=0
          ulobj2.style.left = 0 + "px";//把ul的位置还原成开始的默认位置
      }
      pic2++;//立刻设置pic2加1,那么此时用户就会看到第二个图片了
      animate2(ulobj2, -pic2 * imgWidth2);//pic2从0的值加1之后,pic2的值是1,然后ul移动出去一个图片
      //如果pic2==5说明,此时显示第6个图(内容是第一张图片),第一个小按钮有颜色,
      if (pic2 == list2.length - 1) {
          //第五个按钮颜色干掉
          ol0bj2.children[ol0bj2.children.length - 1].className = "";
          //第一个按钮颜色设置上
          ol0bj2.children[0].className = "active";
      } else {
          //干掉所有的小按钮的背景颜色
          for (var i = 0; i < ol0bj2.children.length; i++) {
              ol0bj2.children[i].removeAttribute("class");
          }
          ol0bj2.children[pic2].className = "active";
      }
  }
  prev_ho2.onclick=function () {
      if (pic2==0){
          pic2=list2.length-1;
          ulobj2.style.left=-pic2*imgWidth2+"px";
      }
      pic2--;
      animate2(ulobj2,-pic2*imgWidth2);
      for (var i = 0; i < ol0bj2.children.length; i++) {
          ol0bj2.children[i].removeAttribute("class");
      }
      //当前的pic2索引对应的按钮设置颜色
      ol0bj2.children[pic2].className = "active";
  };

  //设置任意的一个元素,移动到指定的目标位置
  function animate2(element2, target2) {
      clearInterval(element2.timeId2);
      //定时器的id值存储到对象的一个属性中
      element2.timeId2 = setInterval(function () {
          //获取元素的当前的位置,数字类型
          var current = element2.offsetLeft;
          //每次移动的距离
          var step = 10;
          step = current < target2 ? step : -step;
          //当前移动到位置
          current += step;
          if (Math.abs(current - target2) > Math.abs(step)) {
              element2.style.left = current + "px";
          } else {
              //清理定时器
              clearInterval(element2.timeId2);
              //直接到达目标
              element2.style.left = target2 + "px";
          }
      }, 10);
  }