//배경 효과


let inner = $('.main .inner');
let loading_inner = $('.loading_inner');

setInterval(()=>{
    let temp1 = line.clone();
    let temp2 = line.clone(); 
    inner.append(temp1);
    loading_inner.append(temp2);
    temp1.css({
        left:Math.random()*inner.width(),
        top:Math.random()*inner.height(),
        width:Math.random()*50+100,
        opacity:Math.random()*1, 
    });

    temp1.animate({left:Math.random()*inner.width(), opacity:0},1000,function(){
        $(this).remove();
    });

    temp2.css({
        left:Math.random()*loading_inner.width(),
        top:Math.random()*loading_inner.height(),
        width:Math.random()*50+100,
        opacity:Math.random()*1, 
    });

    temp2.animate({left:Math.random()*loading_inner.width(), opacity:0},1000,function(){
        $(this).remove();
    });

},1000);

//메뉴펼침관련
const header_menu = document.querySelector('.header_menu');
const menu_gnb = document.querySelector('.menu_gnb');
const menu_gnb_lists = document.querySelectorAll('.menu_gnb li');
const icon = document.querySelector('.icon');
header_menu.addEventListener('click',(e)=>{
    menu_gnb.classList.toggle('act');
    icon.classList.toggle('act');
    icon.classList.toggle('act_close');
});

menu_gnb_lists.forEach((list)=>{
    list.addEventListener('click',(e)=>{
        menu_gnb.classList.toggle('act');
        icon.classList.toggle('act');
        icon.classList.toggle('act_close');
    })
})

//사운드바
const sound_off = document.querySelector('.sound_off'); 
const sound_on = document.querySelector('.sound_on'); 
const soundbar_in = document.querySelector('.soundbar_in'); 
const audio = document.getElementById('audio');

sound_off.style.color ="white"
sound_on.style.color ="#B8B8B8"

sound_off.addEventListener('click',()=>{
    soundbar_in.style.left='50%';
    soundbar_in.classList.remove('check');
    sound_off.style.color ="white"
    sound_on.style.color ="#B8B8B8"
    audio.pause();
})
sound_on.addEventListener('click',()=>{
    soundbar_in.style.left='0%';
    soundbar_in.classList.add('check');
    sound_on.style.color ="white"
    sound_off.style.color ="#B8B8B8"
    audio.play();
    audio.onended = function() {
        audio.play();
    };
})


//버튼클릭 배경이밴트
let main_bg1 = $(".main_bg1");
let main_bg3 = $(".main_bg3");
let line = $("#line");
let i=1;

function motion(target,num){
    let tar = target;
	if ( i<=num ){
            let temp = line.clone(); 
            tar.append(temp);
            temp.css({
                left:Math.random()*tar.width(),
                top:Math.random()*tar.height(),
                width:Math.random()*50+20,
                opacity:Math.random()*1, 
            });
        
            temp.animate({left:Math.random()*tar.width(), opacity:0},1000,function(){
                $(this).remove();
            });
	} 
	i++; 
}

function mainBG() {
    $(".main_bg0").fadeIn(700,"easeOutExpo").fadeOut(800,"easeOutExpo");
}

////




//버튼페이지이동
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        const home = document.querySelector('#home');
        let page_width = $(window).width();
        let page_index = 0;
        $(".main_bg0").hide();

        $(window).resize(function() {
            page_width = $(window).width();
            $("#loading,#home,#work1,#work2,#work3,#skill1,#about,#contact").css({ width: page_width });
            $('html,body').stop().animate({ scrollLeft: page_width * page_index }, 200);
        });



        $(".next").click(function() {
            setInterval(motion,100,main_bg3,20);
            mainBG();
            $(this).animate({marginBottom:5},500,function(){ $(this).animate({margin:0})})
            i=0;
            page_index++;
        if (page_index > 7) {
            page_index = 7;
        };
        if (page_index === 7) {
            $(this).fadeOut();
        };
        $(".prev").fadeIn();
        $('html, body').stop().animate({scrollLeft: page_width * page_index}, 200); 
        return false;
        });

        $(".prev").click(function() {
            setInterval(motion,100,main_bg1,20);
            mainBG();
            $(this).animate({marginBottom:5},500,function(){ $(this).animate({margin:0})})
            i=0;
            page_index--;
        if (page_index < 0) {
            page_index = 0
        };
        if (page_index === 0) {
            $(this).fadeOut();
        };
        $(".next").fadeIn();
            $('html, body').stop().animate({scrollLeft: page_width * page_index}, 200);
            return false;
        });


        //연속휠방지
        $(document).ready(function() {
            let handleMouseWheel = _.debounce(function(e) {
                let delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                if (delta < 0) { 
                    $(".next").click();
                } else {
                    $(".prev").click();
                }
            }, 400); 
        
            $('body').on('mousewheel DOMMouseScroll', handleMouseWheel);
        });


        //스킬 버튼이밴트
        const skills_des_btn = document.querySelectorAll('.skills_des button');
        const skill_note = document.querySelector('.content_wrap .skill_note');

        function skill_note_opa(){
            $(".skill_note").animate({ opacity: 0 },400);
            $(".skill_note_click").animate({ opacity: 0 },400);
        }

        function skill_note_arronw(){
            setTimeout(function(){
                let icon = "<div class='skill_note_click'><span class='material-symbols-outlined'>keyboard_double_arrow_up</span><span>CLICK</span></div>";
                skill_note.innerHTML=icon;
            },800);
        } 


        skills_des_btn.forEach((item,i)=>{
            console.log(item);
            item.addEventListener('click',function(){
                if(i==0){
                    skill_note_opa();
                    $(".skill_note").animate({ opacity: 1 },400);
                    setTimeout(function() {
                        $(".skill_note").text("웹 페이지의 구조와 내용을 명확히 전달하기 위해 의미 있는 태그를 사용하여 마크업 작성하고 최신 HTML5 표준을 준수하여 웹 페이지를 작성하고, W3C의 웹 표준 가이드라인을 따라 크로스 브라우저 호환성 고려하여 코딩합니다.");
                    }, 400);
                }else if(i==1) {
                    skill_note_opa();
                    $(".skill_note").animate({ opacity: 1 },400);
                    setTimeout(function() {
                        $(".skill_note").text("반응형 웹 페이지를 고려하여 CSS를 구성할 줄 알며 여러 애니메이션과 트랜지션 효과로 페이지를 다채롭게 꾸밀 수 있습니다. 또한 복잡한 레이아웃을 효율적으로 구성하고 정렬할수 있습니다.");
                    }, 400);
                }else if(i==2) {
                    skill_note_opa();
                    $(".skill_note").animate({ opacity: 1 },400);
                    setTimeout(function() {
                        $(".skill_note").text("기본적인 문법과 기능을 이해하고 DOM을 조작하여 속성 변경 및 이벤트 핸들링이 가능합니다. 또한 다양한 사용자 이벤트에 대응하여 인터랙티브한 사용자 경험 제공할수 있습니다.")}, 400);
                }else if(i==3) {
                    skill_note_opa();
                    $(".skill_note").animate({ opacity: 1 },400);
                    setTimeout(function() {
                        $(".skill_note").text("제이쿼리를 이용하여 DOM조작과 이벤트 처리 그리고 다양한 애니메이션 효과를 기능을 이용한 동적인 기능 구현이 가능합니다.")}, 400);

                }else if(i==4) {
                    skill_note_opa();
                    $(".skill_note").animate({ opacity: 1 },400);
                    setTimeout(function() {
                        $(".skill_note").text("저는 React의 기본 개념을 이해하고 있으며, 컴포넌트를 활용하여 재사용 가능한 UI를 구성할 수 있습니다. 또한, useState를 사용하여 상태 관리를 효율적으로 수행하고, props를 통해 컴포넌트 간에 데이터를 전달할 수 있습니다. 더불어, React Router를 이용해 SPA(Single Page Application)에서 여러 페이지를 구현할 수 있습니다.");}, 400);

                }

            })
        })


        //섹션별 문구/페이지 위치
        const obser_node = document.querySelectorAll('.panel');
        const sec_wrap = document.querySelectorAll('.sec_wrap');
        const sec_title = document.querySelectorAll('.sec_title');
        const main_bg2_line_in = document.querySelector('.main_bg2_line_in');
        const footer_page = document.querySelector('#footer span');
        const contact_des = document.querySelector('.contact_des');
        const content_wrap = document.querySelectorAll('.content_wrap');

        function secOpacity(a){
            $(`.sec_wrap`).animate({ 
                opacity: 0,
                left:"4%"
            }, 200);

        }

        function contentOpacity(a){
            main_bg2_line_in.style.width = 100/7*(a+1) +"%";
            $(`.sec_wrap:eq(${a})`).animate({ 
                opacity: 1,
                left: "5.5%"
            }, 500);
            footer_page.innerHTML="page "+(a+1)+"/7";
            contact_des.style.visibility="hidden";
        }

        const ob = new IntersectionObserver((e)=>{
            let index=0;
            e.forEach(function(i){
                if(i.isIntersecting){
                    if(i.target.id == "home"){
                        index=0;
                        secOpacity();
                        contentOpacity(index);
                        skill_note_arronw()
                    }else if(i.target.id == "work1") {
                        index=1;
                        secOpacity();
                        contentOpacity(index);
                        skill_note_arronw()
                    }else if(i.target.id == "work2") {
                        index=2;
                        secOpacity();
                        contentOpacity(index);
                        skill_note_arronw()
                    }else if(i.target.id == "work3") {
                        index=3;
                        secOpacity();
                        contentOpacity(index);
                        skill_note_arronw()
                    }else if(i.target.id == "skill1") {
                        index=4;
                        secOpacity();
                        contentOpacity(index);
                        $(".skill_note_click").animate({ opacity: 1 },400);
                    }else if(i.target.id == "about") {
                        index=5;
                        secOpacity();
                        contentOpacity(index);
                        skill_note_arronw()
                    }else if(i.target.id == "contact") {
                        index=6;
                        secOpacity();
                        contentOpacity(index);
                        skill_note_arronw()
                        contact_des.style.visibility="visible";
                    }else if(i.target.id == "loading"){
                        footer_page.innerHTML="page 0/7";

                    }
                }
            })
        },{threshold : 0.8});

        obser_node.forEach((item)=>{
            ob.observe(item);
        });


