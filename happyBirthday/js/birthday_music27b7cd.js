(function(){
function x()
{
return window.Audio&&!_oTop.gbIsIE;
}
function m()
{
var I=getTop();
if(I.gbIsIE&&I.gnIEVer<=7)
{
return '\u7531\u4E8E\u4F60\u7684\u6D4F\u89C8\u5668\u7248\u672C\u592A\u4F4E\uFF0C\u6682\u65F6\u65E0\u6CD5\u67E5\u770B\u8BE5\u90AE\u4EF6\u3002\u5EFA\u8BAE\u4F60\u5347\u7EA7<br/>\u6216\u4F7F\u7528\u9002\u914D\u66F4\u597D\u7684\u6D4F\u89C8\u5668\u3002';
}
else if(!I.qmFlash.isSupported()&&!x())
{
return '\u4F60\u8FD8\u6CA1\u6709\u5B89\u88C5flash\u64AD\u653E\u5668\uFF0C\u8BF7\u5B89\u88C5\u540E\u518D\u91CD\u8BD5\u3002';
}
return false;
}
function D(I)
{
r.innerHTML=I;
r.parentNode.style.display='block';
}
var q=m();
var r=S('birthday_errorTip_text');
if(q)
{
D(q);
return;
}
function c(I)
{
this._moContainer=I.oContainer;
this._mnTimeout=I.nTimeout||500;
this._mnTotalFrames=I.nTotalFrames;
this._mbAutoPlay=I.bAutoPlay||true;
this._msDirection=I.sDirection||'horizonal';
this._mbPlayBack=I.bPlayBack;
this._mbPlayingBack=false;
this._mbPause=false;
if(I.sBgUrl)
{
this._msOriginBackground=this._moContainer.style.background;
console.log('original background:',this._moContainer.style.background);
this._moContainer.style.backgroundImage=this._msAnimationBackground='url("'+I.sBgUrl+'")';
}
I.nWidth&&(this._moContainer.style.width=this._mnWidth=I.nWidth+'px');
I.nHeight&&(this._moContainer.style.height=this._mnHeight=I.nHeight+'px');
this._mbAutoPlay&&this.play(I);
}
c.prototype={play:function(I){
I=I||{};
if(this._mbPlaying)
{
return;
}
var J=this;
!this._mbPause&&(this._mnCurrentFrame=-1);
this._playNext(I.beginFrame,I.playingBack);
this._mbPause=false;
this._mbPlaying=true;
this._msAnimationBackground&&(this._moContainer.style.backgroundImage=this._msAnimationBackground);
this._mnTimerId=setInterval(function(){
if(J._mbPause)
{
clearInterval(J._mnTimerId);
return;
}
J._playNext();
},this._mnTimeout);
},pause:function(){
this._mbPause=true;
this._mbPlaying=false;
clearInterval(this._mnTimerId);
},stop:function(){
this._msOriginBackground&&(this._moContainer.style.background=this._msOriginBackground);
clearInterval(this._mnTimerId);
this._mbPlaying=false;
},isPlaying:function(){
return this._mbPlaying;
},getCurFrameState:function(){
return {currentFrame:this._mnCurrentFrame,playingBack:this._mbPlayingBack};
},_playNext:function(I,J){
if(I)
{
this._mnCurrentFrame=I;
this._mbPlayBack&&(J!==undefined)&&(this._mbPlayingBack=J);
}
else if(this._mbPlayBack)
{
if(this._mbPlayingBack)
{
this._mnCurrentFrame--;
if(this._mnCurrentFrame<=0)
{
this._mbPlayingBack=false;
}
}
else{
this._mnCurrentFrame++;
if(this._mnCurrentFrame>=this._mnTotalFrames-1)
{
this._mbPlayingBack=true;
}
}
}
else{
this._mnCurrentFrame=(this._mnCurrentFrame+1)%this._mnTotalFrames;
}
if(this._msDirection=='vertical')
{
this._moContainer.style.backgroundPositionY=(-this._moContainer.offsetHeight*this._mnCurrentFrame)+'px';
}
else{
this._moContainer.style.backgroundPositionX=(-this._moContainer.offsetWidth*this._mnCurrentFrame)+'px';
}
}};
function B(J,I)
{
var N=0;
var M=0;
var L=0;
var O=J.length;
function K(R)
{
var Q=new Image();
Q.onload=function(){
M++;
I(M,L,O,R);
};
Q.onerror=function(){
L++;
I(M,L,O,R);
};
Q.src=R;
}
for(var P=0;P<O;++P)
{
K(J[P]);
}
}
var p,i;
var a=40;
var e=30;
var b=3;
var d=400;
var k=[{startMouth:17,endMouth:83},{startMouth:10,endMouth:70}];
var z=[['JianJianM','DaXiongM','TingBoM','YWM','JJM','AngelaM'],['JianJianK','DaXiongK','TingBoK','YWK','JJK','AngelaK']];
var y=['BGM','BGK'];
var o=0;
var w=false;
var h=getSid();
var H='/cgi-bin/avread?sid='+h;
var g=CN('birthday_singerItem_cnt');
var f=[];
var n;
function u()
{
var I=o;
do{
o=parseInt(Math.random()*k.length)%k.length;
}
while(o==I);
}
function v()
{
var I=[];
for(var K=0,L=g.length;K<L;++K)
{
if(hasClass(g[K],'birthday_singerItem_cnt_Active')&&!hasClass(g[K],'js_leaving'))
{
I.push(z[o][attr(g[K],'singer')]);
}
}
var J=[y[o]].concat(I.sort()).join('_');
return getMusicPath(J);
}
waitFor(function(){
if(testImgTimeUse!=-1)
{
return true;
}
else if(+new Date()-beforeLoadImg>400)
{
testImgTimeUse=401;
return true;
}
else{
return false;
}
},function(){
if(150<testImgTimeUse&&testImgTimeUse<400)
{
gBitRate=64;
LogKV({sValue:'2015|birthday|bitrate|64'});
}
else if(testImgTimeUse>400)
{
gBitRate=32;
LogKV({sValue:'2015|birthday|bitrate|32'});
}
else{
LogKV({sValue:'2015|birthday|bitrate|128'});
}
});
p=QMPlayer.initKernel({sId:'birthdayMusicPlayer1',oContainer:S('player_kernel_container1'),bUseHTML5:true});
i=QMPlayer.initKernel({sId:'birthdayMusicPlayer2',oContainer:S('player_kernel_container2'),bUseHTML5:true});
S('welcome_begin').onclick=function(){
LogKV({sValue:'2015|birthday|start|web'});
function J(L,K,M,N)
{
if(K)
{
D('\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7<a href="javascript:;">\u91CD\u8BD5</a>');
finds('a',r)[0].onclick=function(){
r.parentNode.style.display='none';
S('processLoading').style.width=S('processPercent').innerHTML='0%';
B(resList,J);
};
}
else{
var O=parseInt(L/M*100);
if(L==M)
{
C();
setTimeout(function(){
S('processLoading').style.width=O+'%';
S('processPercent').innerHTML=O+'<span class="birthday_loading_current_text_percent">%</span><span class="birthday_loading_current_text_arrow"></span>';
E();
show(S('birthdayLoading'),false);
A();
p.setInfo({url:v()});
p.operate('play');
},(+new Date()-I<500)?0:2000);
}
else{
S('processLoading').style.width=O+'%';
S('processPercent').innerHTML=O+'<span class="birthday_loading_current_text_percent">%</span><span class="birthday_loading_current_text_arrow"></span>';
}
}
}
show(S('welcome'),false);
S('birthdayLoading').style.display='block';
var I=+new Date();
B(resList,J);
};
function C()
{
insertHTML(S('control-container'),'beforeEnd',S('mainTemplate').innerHTML);
removeSelf(S('mainTemplate'));
g=CN('birthday_singerItem_cnt');
}
function A()
{
p.isProgressed=true;
j();
G();
F();
}
function j()
{
var K=S('pause-btn');
var L=S('sound-btn');
K.onclick=function(){
LogKV({sValue:'2015|birthday|pause|web'});
if(hasClass(K,'birthday_stage_pauseBtn_Play'))
{
rmClass(K,'birthday_stage_pauseBtn_Play');
p.operate('play');
for(var M=0;M<g.length;++M)
{
if(hasClass(g[M],'birthday_singerItem_cnt_Active'))
{
rmClass(g[M],'birthday_singerItem_cnt_Pause');
f[M]&&f[M].play();
}
}
}
else{
addClass(K,'birthday_stage_pauseBtn_Play');
p.operate('pause');
for(var M=0;M<g.length;++M)
{
if(hasClass(g[M],'birthday_singerItem_cnt_Active'))
{
addClass(g[M],'birthday_singerItem_cnt_Pause');
f[M]&&f[M].stop();
}
}
}
};
L.onclick=function(){
LogKV({sValue:'2015|birthday|muted|web'});
if(hasClass(L,'birthday_stage_soundBtn_Close'))
{
p.operate('volume',100);
rmClass(L,'birthday_stage_soundBtn_Close');
}
else{
p.operate('volume',0);
addClass(L,'birthday_stage_soundBtn_Close');
}
};
for(var I=0,J=g.length;I<J;++I)
{
(function(P){
g[P].onmouseover=function(){
addClass(g[P],'birthday_singerItem_cnt_Light');
};
g[P].onmouseout=function(Q){
var Q=Q||window.event;
if(g[P].contains(Q.toElement||Q.relatedTarget))
{
return;
}
rmClass(g[P],'birthday_singerItem_cnt_Light');
if(M.originHTML&&M.innerHTML!=M.originHTML)
{
M.style.display='';
M.innerHTML=M.originHTML;
}
};
var M=finds('.birthday_singerItem_introTip',g[P])[0];
var N=finds('.birthday_singerItem_mic',g[P])[0];
var O=finds('.birthday_singerItem_operationBtn',g[P])[0];
M.originHTML=attr(M,'originhtml');
g[P].onclick=function(){
if(hasClass(g[P],'js_entering')||hasClass(g[P],'js_leaving'))
{
return;
}
if(hasClass(g[P],'birthday_singerItem_cnt_Active'))
{
addClass(g[P],'js_leaving');
M.innerHTML='\u522B\uFF0C\u542C\u6211\u5531\u5B8C......';
M.style.display='block';
}
else{
var Q=t();
M.innerHTML='\u8981\u5F00\u59CB\u5531\u54AF';
M.style.display='block';
addClass(g[P],'js_entering');
addClass(g[P],'birthday_singerItem_cnt_Active');
if(f[P])
{
f[P].play({beginFrame:Q.beginFrame||0,playingBack:Q.playingBack||false});
}
else{
f[P]=s({oContainer:g[P],beginFrame:Q.beginFrame,playingBack:Q.playingBack});
}
}
l(v(),function(){
var W=p.getCurrentKernel();
var X=W.getPlayPos();
setTimeout(function(){
var Y=CN('birthday_singerItem_introTip');
for(var Z=0;Z<Y.length;++Z)
{
Y[Z].style.display='';
Y[Z].originHTML&&(Y[Z].innerHTML=Y[Z].originHTML);
}
},1000);
for(var T=0,U=g.length;T<U;++T)
{
if(hasClass(g[T],'js_entering'))
{
var V=finds('.birthday_singerItem_characterStage_mouth',g[T])[0];
rmClass(g[T],'js_entering');
if(X>=k[o].startMouth&&X<=k[o].endMouth)
{
addClass(V,'birthday_singerItem_characterStage_mouth_Open');
}
else{
rmClass(V,'birthday_singerItem_characterStage_mouth_Open');
}
}
else if(hasClass(g[T],'js_leaving'))
{
var R=finds('.birthday_singerItem_operationBtn_mask_Cancel',g[T])[0];
rmClass(g[T],'js_leaving');
rmClass(g[T],'birthday_singerItem_cnt_Active');
R.innerHTML='\u9000\u4E0B';
f[P]&&f[P].stop();
}
}
});
};
})(I);
}
}
function G()
{
var I=S('light1');
var J=S('light2');
setInterval(function(){
if(I.style.display=='none')
{
I.style.display='block';
J.style.display='none';
}
else{
I.style.display='none';
J.style.display='block';
}
},610);
setInterval(function(){
var Q=p.getCurrentKernel();
var R=Q.getPlayPos();
if(R>=k[o].startMouth&&R<=k[o].endMouth&&w==false)
{
w=true;
for(var M=0;M<g.length;++M)
{
var P=finds('.birthday_singerItem_characterStage_mouth',g[M])[0];
if(hasClass(g[M],'birthday_singerItem_cnt_Active'))
{
addClass(P,'birthday_singerItem_characterStage_mouth_Open');
}
else{
rmClass(P,'birthday_singerItem_characterStage_mouth_Open');
}
}
}
else if((R<k[o].startMouth||R>k[o].endMouth)&&w==true)
{
w=false;
for(var M=0;M<g.length;++M)
{
var P=finds('.birthday_singerItem_characterStage_mouth',g[M])[0];
rmClass(P,'birthday_singerItem_characterStage_mouth_Open');
}
}
if(R>=97)
{
var K=['file='+y[o]];
for(var N=0,O=g.length;N<O;++N)
{
if(hasClass(g[N],'birthday_singerItem_cnt_Active'))
{
K.push('file='+z[o][N]);
}
}
var L=p.operate('volume');
p.operate('seek',0);
p.operate('volume',L);
}
},100);
}
function F()
{
for(var I=0;I<g.length;++I)
{
if(hasClass(g[I],'birthday_singerItem_cnt_Active'))
{
f[I]=s({oContainer:g[I]});
}
}
}
function E()
{
function I()
{
if(J.style.opacity<=0)
{
J.style.display='none';
clearInterval(K);
return;
}
else{
J.style.opacity-=0.01;
}
}
var J=S('sound-tip');
var K;
J.style.display="block";
J.style.opacity=1;
setTimeout(function(){
K=setInterval(I,20);
},1000);
}
function t(I)
{
var J,M;
for(var L=0;L<g.length;++L)
{
if(L!=I&&f[L]&&f[L].characterAnimation.isPlaying())
{
var K=f[L].characterAnimation.getCurFrameState();
J=K['currentFrame'];
M=K['playingBack'];
break;
}
}
return {beginFrame:J,playingBack:M};
}
function l(K,I)
{
function J()
{
var M=p.getCurrentKernel().getPlayPos();
var L=i.getCurrentKernel().getBuffer();
i.operate('volume',0);
if(!i.isProgressed&&(L==100||L>M+5))
{
i.isProgressed=true;
var N=p;
p=i;
i=N;
setTimeout(function(){
i.operate('volume',0);
i.operate('pause');
},100);
p.operate('seek',M);
p.operate('volume',i.operate('volume'));
I();
clearInterval(n);
n=undefined;
}
}
i.isProgressed=false;
i.setInfo({autoplay:true,url:K});
i.operate('play');
if(n!==undefined)
clearInterval(n);
n=setInterval(J,100);
}
function s(I)
{
return {play:function(J){
this.characterAnimation.play(J);
this.mouthAnimation.play(J);
},pause:function(){
this.characterAnimation.pause();
this.mouthAnimation.pause();
},stop:function(){
this.characterAnimation.stop();
this.mouthAnimation.stop();
},characterAnimation:new c({oContainer:finds('.birthday_singerItem_characterStage',I.oContainer)[0],nTimeout:a,nTotalFrames:e,bPlayBack:true,beginFrame:I.beginFrame||0,playingBack:I.playingBack||false}),mouthAnimation:new c({oContainer:finds('.birthday_singerItem_characterStage_mouth',I.oContainer)[0],nTimeout:a,nTotalFrames:e,bPlayBack:true,beginFrame:I.beginFrame||0,playingBack:I.playingBack||false})};
}
})();
