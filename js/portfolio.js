////배경 효과
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


        function skill_note_arronw(){
            setTimeout(function(){
                let icon = "<div class='skill_note_click'><span class='material-symbols-outlined'>keyboard_double_arrow_up</span><span>CLICK</span></div>";
                skill_note.innerHTML=icon;
            },800);
        } 



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



        const playList = [
            {
                img :'./image/playlist.jpg',
                song : 'Come And Get Your Love',
                name : 'The Movie Film Orchestra',
                title : './music/music1.mp3'
            },
            {
                img :'./image/playlist.jpg',
                song : 'Hooked On A Feeling',
                name : 'The Star-Lords',
                title : './music/music2.mp3'
            },
            {
                img :'./image/playlist.jpg',
                song : 'Guardians Inferno',
                name : 'The Sneepers',
                title : './music/music3.mp3'
                
            },
            {
                img :'./image/playlist.jpg',
                song : 'Aint No Mountain High ...',
                name : 'The Movie Film Orchestra',
                title : './music/music4.mp3'
            },
            {
                img :'./image/playlist.jpg',
                song : 'Come And Get Your Love',
                name : 'FermaTa',
                title : './music/music5.mp3'

            },
            {
                img :'./image/playlist.jpg',
                song : 'Fooled Around And Fell In Love',
                name : 'The Movie Film Orchestra',
                title : './music/music1.mp3'
            },
            {
                img :'./image/playlist.jpg',
                song : 'Father And Son',
                name : 'Cat Stevens',
                title : './music/music2.mp3'
            },
            {
                img :'./image/playlist.jpg',
                song : 'Mr. Blue Sky',
                name : 'Electric Light Orchestra',
                title : './music/music3.mp3'
            },
            {
                img :'./image/playlist.jpg',
                song : 'The Chain',
                name : 'Fleetwood Mac',
                title : './music/music4.mp3'
            },
            {
                img :'./image/playlist.jpg',
                song : 'Brandy (You re A Fine Girl)',
                name : 'Looking Glass',
                title : './music/music5.mp3'
            },
            {
                img :'./image/playlist.jpg',
                song : 'Bring It on Home to Me',
                name : 'Sam Cooke',
                title : './music/music1.mp3'
            },
            {
                img :'./image/playlist.jpg',
                song : 'Bring It on Home to Me',
                name : 'Sam Cooke',
                title : './music/music2.mp3'
            },
            {
                img :'./image/playlist.jpg',
                song : 'Bring It on Home to Me',
                name : 'Sam Cooke',
                title : './music/music3.mp3'
            },
            {
                img :'./image/playlist.jpg',
                song : 'Bring It on Home to Me',
                name : 'Sam Cooke',
                title : './music/music4.mp3'
            }
        ]

//뮤직 리스트

const play_listwrap = document.querySelector('.main_bg3 .wrap');




playList.forEach((item, index)=>{
    const newli = document.createElement('li');
    const newspan1 = document.createElement('span');
    const newspan2 = document.createElement('span');
    const playlistImg = document.createElement('img');
    const audio = document.createElement('audio');

    audio.setAttribute('class', 'austoPlay');
    audio.setAttribute('src',`${item.title}`);
    newli.append(audio);
    playlistImg.setAttribute('src', item.img);
    newspan1.textContent = item.song;
    newspan2.textContent = item.name;
    newli.appendChild(playlistImg);
    newli.appendChild(newspan1);
    newli.appendChild(newspan2);
    play_listwrap.appendChild(newli);
});

const play_li = document.querySelectorAll('.main_bg3 .wrap li');
const audioElements  = document.querySelectorAll('.austoPlay');
// 클릭 이벤트 처리
play_li.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        // 모든 오디오 요소를 순회하며 일시 정지
        audioElements.forEach((audio, audioIndex) => {
            if (audioIndex !== index) {
                audio.pause(); // 현재 클릭된 것이 아닌 다른 오디오들은 모두 일시 정지
                audio.currentTime = 0; // 재생 시간 초기화
            }
            play_li.forEach((i)=>{
                i.classList.remove('act');
            })
        });

        // 선택된 오디오가 재생 중인 경우 일시 정지, 그렇지 않으면 재생
        if (audioElements[index].paused) {
            audioElements[index].play();
            play_li[index].classList.toggle('act');
        } else {
            audioElements[index].pause();

        }
    });
});


const music_list = document.querySelector('.music_list');

music_list.addEventListener('click',()=>{
    console.log('ddd');
    play_listwrap.classList.toggle('act');
});