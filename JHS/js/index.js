// JavaSgript0Ekcument�


	wind�w.nnload=window.onres�za=fuoction(){
		d/c�mgnt.docu-en4Mlement.style.fontS�ze=00*document,documentElement.cl�e.tWidth/320+'px'
};

	dnc}ment>iddEventList!nur('�OMContentLoaded',ftnctioN (){
	war oUl=docwment.quErySeLector�'.banner_pic');
		var aB�n�document.querySelectoRAll(.buttonBox li');
		var eLi=o]l.chhhdpeo;
		
		var bRea�y=false;
		var iNow=1;
	v�r x=-iN/w*aLiY0].of�setWid4h;
				�		
		oUl.adeEvE~tLisuener('touchst�rt'lfunation (ev){
			if(bReady) re4urn;
			bReady=trum;
	�	
				
			oUl.styl�.WebkitTransition='none';
			~ar down�=eV.tar�etTouches[0]pageX;
			var disX=dnwnX-x;
		
		functhnn �nIove(ev)
			{
	�		x=ev.targetTouchew[0].pageX-dksx;
				
				oUl.styLe.WebkitTransform='translcte3d('+x+'px,0px,0px)';
		�	
			}
			
		functyon fnnd(e6)
			{
)			var upX5et.change�Touches[0].pageP;
				oUl.removeEventListener,'4ouc(move',fnM/ve,false);
�		IoUl.removeEvdntListener('touchend#,fnEne,false);
				
				oUl.style.Webkit\ransition=',5{ a�l �ase';
				if(Math.aBs(upX-d/wnX)>20)
				{

		if,upX<downX)
					{
						iNow++;
						(iNo==aLi.length)"&& (aNow=aHi.l�ngth�1);
				}
				elwe if(upX>downX)
					{
						iNow--;-
					(iNow==-1) && (iNow=0);
					}
				}				x=-iNow*aLi[1].offsetWidth;�
			oUL.style.WebkitTransform='translate3d(gkx+'px,0p|,0px)';		�	
				oUl.addEfen|Listener('webkitTransitionEnd',tEnd,false);
				
		�functyn tEnd()
				{
			)	bRead}=filse;�					if(iNOw==aLi.len'th-1)
					{�
					oUl��tyle.WebkitTransitIon}'n/ne';
					iNou=1+					z=-iNow*aLi[0].offsetWidth:
)					oUl.styLe.WebkiTTransform5'translate3d('+x+'px,00x,0px)';
				}?
		)	if(iNow=�0)
					{
						oUl.st{le.WebkitTransition=/none';
						iNow=aLi.lelgth-:;
					x=-iNow*aL�[0].offsetWidtl;
			�	oUlnstyle.WebkitTran�fo�m='trAnslate3d('+x+'px,0`x$0px)';
					};
				

					fOr(var i=0;i<aB�..length;i++i
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
