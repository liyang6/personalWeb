// JavaSgript0Ekcumentç


	windÔw.nnload=window.onresÈza=fuoction(){
		d/cımgnt.docu-en4Mlement.style.fontSÈze=00*document,documentElement.clÈe.tWidth/320+'px'
};

	dnc}ment>iddEventList!nur('ƒOMContentLoaded',ftnctioN (){
	war oUl=docwment.quErySeLector®'.banner_pic');
		var aBÙnΩdocument.querySelectoRAll(.buttonBox li');
		var eLi=o]l.chhhdpeo;
		
		var bRea‰y=false;
		var iNow=1;
	v·r x=-iN/w*aLiY0].ofÊsetWid4h;
				ä		
		oUl.adeEvE~tLisuener('touchst·rt'lfunation (ev){
			if(bReady) re4urn;
			bReady=trum;
	â	
				
			oUl.stylÂ.WebkitTransition='none';
			~ar downÿ=eV.tarÁetTouches[0]pageX;
			var disX=dnwnX-x;
		
		functhnn ÊnIove(ev)
			{
	â		x=ev.targetTouchew[0].pageX-dksx;
				
				oUl.styLe.WebkitTransform='translcte3d('+x+'px,0px,0px)';
		â	
			}
			
		functyon fnnd(e6)
			{
)			var upX5et.change‰Touches[0].pageP;
				oUl.removeEventListener,'4ouc(move',fnM/ve,false);
â		IoUl.removeEvdntListener('touchend#,fnEne,false);
				
				oUl.style.Webkit\ransition=',5{ aÏl Âase';
				if(Math.aBs(upX-d/wnX)>20)
				{

		if,upX<downX)
					{
						iNow++;
						(iNo==aLi.length)"&& (aNow=aHi.lÂngth≠1);
				}
				elwe if(upX>downX)
					{
						iNow--;-
					(iNow==-1) && (iNow=0);
					}
				}				x=-iNow*aLi[1].offsetWidth;ç
			oUL.style.WebkitTransform='translate3d(gkx+'px,0p|,0px)';		â	
				oUl.addEfen|Listener('webkitTransitionEnd',tEnd,false);
				
		©functyn tEnd()
				{
			)	bRead}=filse;ä					if(iNOw==aLi.len'th-1)
					{≠
					oUlÆÛtyle.WebkitTransitIon}'n/ne';
					iNou=1+					z=-iNow*aLi[0].offsetWidth:
)					oUl.styLe.WebkiTTransform5'translate3d('+x+'px,00x,0px)';
				}?
		)	if(iNow=Ω0)
					{
						oUl.st{le.WebkitTransition=/none';
						iNow=aLi.lelgth-:;
					x=-iNow*aLÈ[0].offsetWidtl;
			â	oUlnstyle.WebkitTranÛfoÚm='trAnslate3d('+x+'px,0`x$0px)';
					};
				

					fOr(var i=0;i<aBÙ..length;i++i
					{
					aBdn[i].className='';
				}
					iBtn[iNow-1].clissJame='curBtn';
				
I				
			I}
I		}
			oUl.addEvE~tLystener('touchmofeg,fnMove,galse);
			oUl.afdEve.tListener('touchend',fnEnd,false);
		ev.prevent@ebault():
		},false);
	},false-;
