// Garden Gnome Software - Skin
// Pano2VR 6.1.14/18105
// Filename: a.ggsk
// Generated 2023-09-16T15:27:39

function pano2vrSkin(player,base) {
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('vis_auto_hide_controller', 2, true);
	player.addVariable('isHome', 2, true);
	player.addVariable('sound', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggDx=649;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 9px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_mute.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_mute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywxLjJsLTI1LjMtMTcuNmgtMTQuNGMtMC44LDAtMS41LTAuNy0xLjUtMS41di0xNS44YzAtMC44LDAuNy0xLjUsMS41LTEuNWgxNC40bDI1LjMtMTcuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMy0wLjksMi4zLTAuMywyLjMsMS4yQy0xNzIuMywzNzEuMS0x'+
			'NzIuMyw0MjIuOS0xNzIuMyw0MjIuOXogTS0xNTUsMzk3YzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjQsMC0yLjJjMi4yLTIuNywzLjItNiwzLjItOS4yaDBjMC0zLjMtMS4xLTYuNS0zLjItOS4yYy0wLjYtMC43LTAuNi0xLjYsMC0yLjJsMS43LTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjYsMS42LTAuNiwyLjIsMEMtMTU2LjYsMzg3LjctMTU1LDM5Mi4zLTE1NSwzOTdMLTE1NSwzOTd6IE0tMTQwLjksMzk3YzAsOC4zLTMsMTYuNS04LjksMjNjLTAuNiwwLjYtMS42LD'+
			'AuNi0yLjEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNi45LTIuNC0xMy44LTcuMy0xOS4yYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMS43LTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjYsMS41LTAuNiwyLjEsMEMtMTQzLjksMzgwLjUtMTQwLjksMzg4LjctMTQwLjksMzk3TC0xNDAuOSwzOTd6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNiwzNjkuOWwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwx'+
			'LjV2MTUuOGMwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTQuNGwyNS4zLDE3LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjMsMC45LDIuMywwLjMsMi4zLTEuMnYtNTEuOEMtMTcyLjMsMzY5LjYtMTczLjMsMzY5LTE3NC42LDM2OS45eiIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0OS45LDM3NGMtMC42LTAuNi0xLjYtMC42LTIuMSwwbC0xLjcsMS43Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjJjNC45LDUuNCw3LjMsMTIuMyw3LjMsMTkuMmgwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDYuOS0yLjQsMTMuOC03LjMsMTkuMmMtMC42LDAuNi0wLjYsMS42LDAsMi4ybDEuNy'+
			'wxLjdjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNDAuOSwzODguNy0xNDMuOSwzODAuNS0xNDkuOSwzNzR6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYyLDM4NGwtMS43LDEuN2MtMC42LDAuNi0wLjYsMS40LDAsMi4yYzIuMiwyLjcsMy4yLDYsMy4yLDkuMmgwYzAsMy4zLTEuMSw2LjUtMy4yLDkuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43YzAuNiwwLjYsMS42LDAuNiwyLjIsMGMzLjItMy43LDQuOC04LjQsNC44LTEzLjFoMGMw'+
			'LTQuNy0xLjYtOS4zLTQuOC0xMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTYwLjQsMzgzLjQtMTYxLjQsMzgzLjQtMTYyLDM4NHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._unmute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._unmute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3Miw0MjUuOGMwLDEuNy0xLjEsMi4zLTIuNiwxLjNsLTI4LjEtMTkuNmgtMTZjLTAuOSwwLTEuNy0wLjgtMS43LTEuN3YtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gxNmwyOC4xLTE5LjZjMS40LTEsMi42LTAuNCwyLjYsMS4zQy0xNzIsMzY4LjItMTcy'+
			'LDQyNS44LTE3Miw0MjUuOHogTS0xNTIuNywzOTdjMCw1LjItMS44LDEwLjQtNS4zLDE0LjVjLTAuNywwLjYtMS44LDAuNi0yLjQsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjYsMC0yLjRjMi40LTMsMy42LTYuNiwzLjYtMTAuM2gwYzAtMy42LTEuMi03LjMtMy42LTEwLjNjLTAuNy0wLjgtMC43LTEuNywwLTIuNGwxLjgtMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuNiwxLjgtMC42LDIuNCwwQy0xNTQuNSwzODYuNi0xNTIuNywzOTEuOC0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjYmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtMC43LDAuNi0xLjcsMC42LTIuNCwwbC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRjNS40LTYsOC4yLTEzLjcsOC4yLTIxLjNoMGMwLTcuNi0yLjctMTUuMy04LjItMjEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMS44LTEuOGMwLjctMC43LDEuNy0wLjcsMi40LDBDLTE0MC41LDM3OC42LTEzNy4xLDM4Ny44LTEzNy4xLDM5N0wtMTM3LjEsMzk3eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjUsMzY2LjlsLTI4LjEsMTkuNmgtMTZjLTAuOSwwLTEuNywwLjgt'+
			'MS43LDEuN3YxNy42YzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNmwyOC4xLDE5LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjQsMSwyLjYsMC40LDIuNi0xLjN2LTU3LjVDLTE3MiwzNjYuNS0xNzMuMSwzNjUuOS0xNzQuNSwzNjYuOXoiLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDcuMSwzNzEuNGMtMC43LTAuNi0xLjctMC42LTIuNCwwbC0xLjgsMS44Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRjNS40LDYsOC4yLDEzLjcsOC4yLDIxLjNoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw3LjYtMi43LDE1LjMtOC4yLDIxLjNjLTAuNywwLjctMC43LDEuNywwLDIuNGwxLj'+
			'gsMS44YzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzcuMSwzODcuOC0xNDAuNSwzNzguNi0xNDcuMSwzNzEuNHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuNSwzODIuNWwtMS44LDEuOGMtMC43LDAuNy0wLjcsMS42LDAsMi40YzIuNCwzLDMuNiw2LjYsMy42LDEwLjNoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LDAuOC0wLjcsMS43LDAsMi40bDEuOCwxLjhjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1'+
			'LjMtMTQuNWgwYzAtNS4yLTEuOC0xMC40LTUuMy0xNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTU4LjcsMzgxLjktMTU5LjksMzgxLjktMTYwLjUsMzgyLjV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._unmute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="unmute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.onclick=function (e) {
			player.setVolume("_main",1);
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			me._mute.style[domTransition]='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
		}
		me._unmute.onmouseover=function (e) {
			me._unmute__img.style.visibility='hidden';
			me._unmute__imgo.style.visibility='inherit';
		}
		me._unmute.onmouseout=function (e) {
			me._unmute__img.style.visibility='inherit';
			me._unmute__imgo.style.visibility='hidden';
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTIxNS44LDQwNC45di0xNS44YzAtMC44LDAuNy0xLjUsMS41LTEuNWgxNC40bDI1LjMtMTcuNmMxLjMtMC45LDIuMy0wLjMsMi4zLDEuMlYzODhsLTIyLjIsMjIuMmwtNS40LTMuN2gtMTQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0yMTUuMSw0MDYuNC0yMTUuOCw0MDUuOC0yMTUuOCw0MDQuOXogTS0xNzIu'+
			'Myw0MjIuOWMwLDEuNS0xLDIuMS0yLjMsMS4ybC0xMi40LTguN2wxNC43LTE0LjdWNDIyLjl6IE0tMTU1LDM5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7bDQtNEMtMTU2LDM4OS42LTE1NSwzOTMuMy0xNTUsMzk3TC0xNTUsMzk3eiBNLTE0MC45LDM5N2MwLDguMy0zLDE2LjUtOC45LDIzYy0wLjYsMC42LTEuNiwwLjYtMi4xLDBsLTEuNy0xLjcmI3'+
			'hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuNi0wLjYtMS42LDAtMi4yYzQuOS01LjQsNy4zLTEyLjMsNy4zLTE5LjJoMGMwLTUuOS0xLjgtMTEuOC01LjQtMTYuOGwzLjgtMy44Qy0xNDMuMiwzODIuNC0xNDAuOSwzODkuNy0xNDAuOSwzOTcmI3hkOyYjeGE7JiN4OTsmI3g5O0wtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcs'+
			'MS43Qy0xMzkuNSwzNjQuNC0xMzkuNSwzNjUuNC0xNDAuMSwzNjZ6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQwLjEsMzYzLjhsLTEuNy0xLjdjLTAuMy0wLjMtMC43LTAuNC0xLjEtMC40Yy0wLjQsMC0wLjgsMC4xLTEuMSwwLjRsLTY2LDY2Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDEuNywxLjdjMC4zLDAuMywwLjcsMC40LDEuMSwwLjRjMC40LDAsMC44LTAuMSwxLjEtMC40bDY2LTY2Qy0xMzkuNSwzNjUuNC0xMzkuNSwzNjQuNC0xNDAuMSwzNjMuOHoiLz4KICAgPHBhdGggZm'+
			'lsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNiw0MjQuMWMxLjMsMC45LDIuMywwLjMsMi4zLTEuMnYtMjIuMmwtMTQuNywxNC43TC0xNzQuNiw0MjQuMXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTQuNSw0MTAuMmwyMi4yLTIyLjJ2LTE2LjljMC0xLjUtMS0yLjEtMi4zLTEuMmwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTUuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwwLjgsMC43LDEuNSwxLjUsMS41aDE0LjRMLTE5NC41LDQxMC4yeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS45LDM5MC40YzEsMi4xLDEuNiw0LjMsMS42'+
			'LDYuNmgwYzAsMy4zLTEuMSw2LjUtMy4yLDkuMmMtMC42LDAuNy0wLjYsMS42LDAsMi4ybDEuNywxLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNiwwLjYsMS42LDAuNiwyLjIsMGMzLjItMy43LDQuOC04LjQsNC44LTEzLjFoMGMwLTMuNy0xLTcuNC0zLTEwLjZMLTE2MS45LDM5MC40eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1MS43LDM4MC4yYzMuNiw1LDUuNCwxMC45LDUuNCwxNi44aDBjMCw2LjktMi40LDEzLjgtNy4zLDE5LjJjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxLjcsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjYsMC42LDEuNSwwLjYsMi4xLD'+
			'BjNS45LTYuNSw4LjktMTQuOCw4LjktMjNoMGMwLTcuMy0yLjMtMTQuNi03LTIwLjdMLTE1MS43LDM4MC4yeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._mute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTIyMC4zLDQwNS44di0xNy42YzAtMC45LDAuOC0xLjcsMS43LTEuN2gxNmwyOC4xLTE5LjZjMS40LTEsMi42LTAuNCwyLjYsMS4zVjM4N2wtMjQuNywyNC43bC02LTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7aC0xNkMtMjE5LjUsNDA3LjUtMjIwLjMsNDA2LjctMjIwLjMsNDA1Ljh6IE0tMTcyLDQy'+
			'NS44YzAsMS43LTEuMiwyLjMtMi42LDEuM2wtMTMuOC05LjZsMTYuMy0xNi4zVjQyNS44eiBNLTE1Mi43LDM5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDQuNC00LjRDLTE1My45LDM4OC44LTE1Mi43LDM5Mi45LTE1Mi43LDM5N0wtMTUyLjcsMzk3eiBNLTEzNy4xLDM5N2MwLDkuMi0zLjMsMTguNC05LjksMjUuNmMtMC43LDAuNi0xLjcsMC42LT'+
			'IuNCwwbC0xLjgtMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNy0wLjctMC43LTEuNywwLTIuNGM1LjQtNiw4LjItMTMuNyw4LjItMjEuM2gwYzAtNi42LTItMTMuMS02LTE4LjdsNC4zLTQuM0MtMTM5LjcsMzgwLjgtMTM3LjEsMzg4LjktMTM3LjEsMzk3TC0xMzcuMSwzOTd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVj'+
			'MC40LDAsMC45LDAuMiwxLjIsMC41bDEuOCwxLjhDLTEzNS42LDM2MC44LTEzNS42LDM2MS45LTEzNi4yLDM2Mi42eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzNi4yLDM2MC4ybC0xLjgtMS44Yy0wLjMtMC4zLTAuOC0wLjUtMS4yLTAuNXMtMC45LDAuMi0xLjIsMC41bC03My4zLDczLjNjLTAuNywwLjctMC43LDEuNywwLDIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOGMwLjMsMC4zLDAuOCwwLjUsMS4yLDAuNWMwLjQsMCwwLjktMC4yLDEuMi0wLjVsNzMuMy03My4zQy0xMzUuNiwzNjEuOS0xMzUuNiwzNj'+
			'AuOC0xMzYuMiwzNjAuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNSw0MjcuMWMxLjQsMSwyLjYsMC40LDIuNi0xLjN2LTI0LjZsLTE2LjMsMTYuM0wtMTc0LjUsNDI3LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTk2LjYsNDExLjdMLTE3MiwzODd2LTE4LjhjMC0xLjctMS4yLTIuMy0yLjYtMS4zbC0yOC4xLDE5LjZoLTE2Yy0wLjksMC0xLjcsMC44LTEuNywxLjd2MTcuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwwLjksMC44LDEuNywxLjcsMS43aDE2TC0xOTYuNiw0MTEuN3oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAu'+
			'NSwzODkuNmMxLjIsMi4zLDEuNyw0LjgsMS43LDcuNGgwYzAsMy42LTEuMiw3LjMtMy42LDEwLjNjLTAuNywwLjgtMC43LDEuNywwLDIuNGwxLjgsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjYsMC42LDEuOCwwLjYsMi40LDBjMy42LTQuMiw1LjMtOS4zLDUuMy0xNC41aDBjMC00LjEtMS4xLTguMi0zLjMtMTEuOEwtMTYwLjUsMzg5LjZ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ5LjEsMzc4LjNjNCw1LjYsNiwxMi4xLDYsMTguN2gwYzAsNy42LTIuNywxNS4zLTguMiwyMS4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTtjMC43LDAuNywxLjcsMC43LDIuNCwwYzYuNi03LjIsOS45LTE2LjQsOS45LTI1LjZoMGMwLTguMS0yLjYtMTYuMi03LjctMjNMLTE0OS4xLDM3OC4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._mute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
			player.setVolume("_main",0);
			me._mute.style[domTransition]='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
		}
		me._mute.onmouseover=function (e) {
			me._mute__img.style.visibility='hidden';
			me._mute__imgo.style.visibility='inherit';
		}
		me._mute.onmouseout=function (e) {
			me._mute__img.style.visibility='inherit';
			me._mute__imgo.style.visibility='hidden';
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._mute);
		me.divSkin.appendChild(me._button_mute);
		el=me._media_controls=document.createElement('div');
		el.ggId="media_controls";
		el.ggDx=604;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 9px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media_controls.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._media_controls.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._media_play=document.createElement('div');
		els=me._media_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNTAuNSwzOTguNmwtMzguMSwyNi42Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMlYzNzBjMC0xLjUsMS0yLjEsMi4zLTEuMmwzOC4yLDI2LjYmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTQ5LjMsMzk2LjMtMTQ5LjMsMzk3LjctMTUwLjUsMzk4LjZ6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJf'+
			'MiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTEsMzcwYzAtMS41LDEtMi4xLDIuMy0xLjJsMzguMiwyNi42YzEuMywwLjksMS4zLDIuMywwLDMuMmwtMzguMiwyNi42Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMlYzNzB6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._media_play__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._media_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0Ny44LDM5OC44bC00Mi40LDI5LjZjLTEuNCwxLTIuNiwwLjQtMi42LTEuM1YzNjdjMC0xLjcsMS4yLTIuMywyLjYtMS4zbDQyLjQsMjkuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNDYuNCwzOTYuMi0xNDYuNCwzOTcuOC0xNDcuOCwzOTguOHoiLz4KIDwvZz4KIDxnIGlk'+
			'PSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi44LDM2N2MwLTEuNywxLjItMi4zLDIuNi0xLjNsNDIuNCwyOS42YzEuNCwxLDEuNCwyLjYsMCwzLjZsLTQyLjQsMjkuNmMtMS40LDEtMi42LDAuNC0yLjYtMS4zVjM2N3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._media_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="media_play";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_play.onclick=function (e) {
				player.playSound("_background","1");
			me._media_play.style[domTransition]='none';
			me._media_play.style.visibility='hidden';
			me._media_play.ggVisible=false;
			me._media_pause.style[domTransition]='none';
			me._media_pause.style.visibility=(Number(me._media_pause.style.opacity)>0||!me._media_pause.style.opacity)?'inherit':'hidden';
			me._media_pause.ggVisible=true;
			player.setVariableValue('sound', true);
		}
		me._media_play.onmouseover=function (e) {
			me._media_play__img.style.visibility='hidden';
			me._media_play__imgo.style.visibility='inherit';
		}
		me._media_play.onmouseout=function (e) {
			me._media_play__img.style.visibility='inherit';
			me._media_play__imgo.style.visibility='hidden';
		}
		me._media_play.ggUpdatePosition=function (useTransition) {
		}
		me._media_controls.appendChild(me._media_play);
		el=me._media_pause=document.createElement('div');
		els=me._media_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNzcuNyw0MTYuM2MwLDEuMy0xLDIuMy0yLjMsMi4zaC0xNC4zYy0xLjMsMC0yLjMtMS0yLjMtMi4zdi0zOC42YzAtMS4zLDEtMi4zLDIuMy0yLjNoMTQuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMywwLDIuMywxLDIuMywyLjNDLTE3Ny43LDM3Ny43LTE3Ny43LDQxNi4zLTE3Ny43LDQx'+
			'Ni4zeiBNLTE1My40LDQxNi4zYzAsMS4zLTEsMi4zLTIuMywyLjNILTE3MGMtMS4zLDAtMi4zLTEtMi4zLTIuM3YtMzguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS4zLDEtMi4zLDIuMy0yLjNoMTQuM2MxLjMsMCwyLjMsMSwyLjMsMi4zQy0xNTMuNCwzNzcuNy0xNTMuNCw0MTYuMy0xNTMuNCw0MTYuM3oiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xODAsMzc1LjRoLTE0LjNjLTEuMywwLTIuMywxLTIuMywyLjN2MzguNmMwLDEuMywxLDIuMywyLjMsMi4zaDE0LjNjMS4zLDAsMi4zLTEsMi4zLTIuM3YtMzguNiYjeGQ7JiN4YT'+
			'smI3g5OyYjeDk7JiN4OTtDLTE3Ny43LDM3Ni40LTE3OC43LDM3NS40LTE4MCwzNzUuNHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTUuNywzNzUuNEgtMTcwYy0xLjMsMC0yLjMsMS0yLjMsMi4zdjM4LjZjMCwxLjMsMSwyLjMsMi4zLDIuM2gxNC4zYzEuMywwLDIuMy0xLDIuMy0yLjN2LTM4LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTMuNCwzNzYuNC0xNTQuNCwzNzUuNC0xNTUuNywzNzUuNHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._media_pause__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._media_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OCw0MTguNGMwLDEuNC0xLjEsMi42LTIuNiwyLjZoLTE1LjljLTEuNCwwLTIuNi0xLjEtMi42LTIuNnYtNDIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS40LDEuMS0yLjYsMi42LTIuNmgxNS45YzEuNCwwLDIuNiwxLjEsMi42LDIuNkMtMTc4LDM3NS41LTE3OCw0MTgu'+
			'NC0xNzgsNDE4LjR6IE0tMTUxLDQxOC40YzAsMS40LTEuMSwyLjYtMi42LDIuNmgtMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTQyLjljMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0xNTEsMzc1LjUtMTUxLDQxOC40LTE1MSw0MTguNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xODAuNSwzNzNoLTE1LjljLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY0Mi45YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxNS45YzEuNCwwLDIuNi0xLjEsMi42LTIuNn'+
			'YtNDIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE3OCwzNzQuMS0xNzkuMSwzNzMtMTgwLjUsMzczeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My41LDM3M2gtMTUuOWMtMS40LDAtMi42LDEuMS0yLjYsMi42djQyLjljMCwxLjQsMS4xLDIuNiwyLjYsMi42aDE1LjljMS40LDAsMi42LTEuMSwyLjYtMi42di00Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTUxLDM3NC4xLTE1Mi4xLDM3My0xNTMuNSwzNzN6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._media_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="media_pause";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_pause.onclick=function (e) {
				player.pauseSound("_background");
			me._media_pause.style[domTransition]='none';
			me._media_pause.style.visibility='hidden';
			me._media_pause.ggVisible=false;
			me._media_play.style[domTransition]='none';
			me._media_play.style.visibility=(Number(me._media_play.style.opacity)>0||!me._media_play.style.opacity)?'inherit':'hidden';
			me._media_play.ggVisible=true;
			player.setVariableValue('sound', false);
		}
		me._media_pause.onmouseover=function (e) {
			me._media_pause__img.style.visibility='hidden';
			me._media_pause__imgo.style.visibility='inherit';
		}
		me._media_pause.onmouseout=function (e) {
			me._media_pause__img.style.visibility='inherit';
			me._media_pause__imgo.style.visibility='hidden';
		}
		me._media_pause.ggMediaEnded=function () {
			me._media_pause.style[domTransition]='none';
			me._media_pause.style.visibility='hidden';
			me._media_pause.ggVisible=false;
		}
		me._media_pause.ggUpdatePosition=function (useTransition) {
		}
		me._media_controls.appendChild(me._media_pause);
		el=me._media_stop=document.createElement('div');
		els=me._media_stop__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE1My40LDQxNi4zYzAsMS4zLTEsMi4zLTIuMywyLjNoLTM4LjZjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTM4LjZjMC0xLjMsMS0yLjMsMi4zLTIuM2gzOC42YzEuMywwLDIuMywxLDIuMywyLjNWNDE2LjN6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0x'+
			'NTMuNCw0MTYuM2MwLDEuMy0xLDIuMy0yLjMsMi4zaC0zOC42Yy0xLjMsMC0yLjMtMS0yLjMtMi4zdi0zOC42YzAtMS4zLDEtMi4zLDIuMy0yLjNoMzguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMywwLDIuMywxLDIuMywyLjNWNDE2LjN6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._media_stop__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._media_stop__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE1MSw0MTguNGMwLDEuNC0xLjEsMi42LTIuNiwyLjZoLTQyLjljLTEuNCwwLTIuNi0xLjEtMi42LTIuNnYtNDIuOWMwLTEuNCwxLjEtMi42LDIuNi0yLjZoNDIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNCwwLDIuNiwxLjEsMi42LDIuNlY0MTguNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8y'+
			'Ij4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1MSw0MTguNGMwLDEuNC0xLjEsMi42LTIuNiwyLjZoLTQyLjljLTEuNCwwLTIuNi0xLjEtMi42LTIuNnYtNDIuOWMwLTEuNCwxLjEtMi42LDIuNi0yLjZoNDIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNCwwLDIuNiwxLjEsMi42LDIuNlY0MTguNHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._media_stop__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="media_stop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media_stop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_stop.onclick=function (e) {
				player.stopSound("_background");
			me._media_pause.style[domTransition]='none';
			me._media_pause.style.visibility='hidden';
			me._media_pause.ggVisible=false;
			me._media_play.style[domTransition]='none';
			me._media_play.style.visibility=(Number(me._media_play.style.opacity)>0||!me._media_play.style.opacity)?'inherit':'hidden';
			me._media_play.ggVisible=true;
		}
		me._media_stop.onmouseover=function (e) {
			me._media_stop__img.style.visibility='hidden';
			me._media_stop__imgo.style.visibility='inherit';
		}
		me._media_stop.onmouseout=function (e) {
			me._media_stop__img.style.visibility='inherit';
			me._media_stop__imgo.style.visibility='hidden';
		}
		me._media_stop.ggUpdatePosition=function (useTransition) {
		}
		me._media_controls.appendChild(me._media_stop);
		me.divSkin.appendChild(me._media_controls);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggDx=557;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 7px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IGhlaWdodD0iMjIuMiIgeD0iLTIwNi4yIiB5PSIzOTciIHdpZHRoPSIzMi4xIiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE2OC42LDQyMC4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtMzQuNWMtMi4zLDAtNC4yLTEuOS00LjItNC4ydi0yNC41YzAtMi4z'+
			'LDEuOS00LjIsNC4yLTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoMzQuNWMyLjMsMCw0LjIsMS45LDQuMiw0LjJMLTE2OC42LDQyMC4zTC0xNjguNiw0MjAuM3ogTS0xMzYuOCwzNzIuNmwtMTcuNSwxMi42Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsMC43LDAuOWwzLjMsNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIsMC4zLDAuMiwwLjUsMC4xLDAuOWMtMC4yLDAuNC0wLjUsMC41LTAuOCwwLjVsLTE2LjIsMC4xYy0wLjQsMC0wLjYtMC4xLTAuOC0wLjRjLTAuMi0wLjItMC4yLTAuNS0wLjEtMC44bDUuMi0xNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjEtMC4zLDAuNC'+
			'0wLjYsMC44LTAuNmMwLjQsMCwwLjcsMC4xLDAuOSwwLjNsMy4zLDQuNmwwLjYsMC44YzAsMCwwLjEtMC4xLDAuMS0wLjFsMTcuNS0xMi42YzAuNy0wLjUsMS42LTAuMywyLjEsMC40bDEuNCwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzUuOSwzNzEuMi0xMzYuMSwzNzIuMS0xMzYuOCwzNzIuNnoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2LjQsMzcwLjVsLTEuNC0xLjljLTAuNS0wLjctMS41LTAuOC0yLjEtMC40bC0xNy41LDEyLjZjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMWwtMC42LTAuOGwtMy4z'+
			'LTQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC40LTAuNC0wLjktMC4zYy0wLjQsMC0wLjcsMC4zLTAuOCwwLjZsLTUuMiwxNS40Yy0wLjEsMC4zLTAuMSwwLjYsMC4xLDAuOGMwLjIsMC4zLDAuNCwwLjQsMC44LDAuNGwxNi4yLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC43LTAuMSwwLjgtMC41YzAuMi0wLjQsMC4yLTAuNi0wLjEtMC45bC0zLjMtNC43bC0wLjctMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxNy41LTEyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzYuMSwzNzIuMS0xMzUuOSwzNzEuMi0xMzYuNCwzNzAuNXoiLz4KICAgPH'+
			'BhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzIuOCwzOTEuNmgtMzQuNWMtMi4zLDAtNC4yLDEuOS00LjIsNC4ydjI0LjVjMCwyLjMsMS45LDQuMiw0LjIsNC4yaDM0LjVjMi4zLDAsNC4yLTEuOSw0LjItNC4ydi0yNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTY4LjYsMzkzLjUtMTcwLjUsMzkxLjYtMTcyLjgsMzkxLjZ6IE0tMTc0LDQxOS4yaC0zMi4xVjM5N2gzMi4xVjQxOS4yeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IGhlaWdodD0iMjQuNiIgeD0iLTIwOS42IiB5PSIzOTciIHdpZHRoPSIzNS43IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNjcuOSw0MjIuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTM4LjNjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3Yt'+
			'MjcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0yLjYsMi4xLTQuNyw0LjctNC43aDM4LjNjMi42LDAsNC43LDIuMSw0LjcsNC43TC0xNjcuOSw0MjIuOUwtMTY3LjksNDIyLjl6IE0tMTMyLjUsMzY5LjlsLTE5LjUsMTRjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMC43LDFsMy43LDUuMmMwLjIsMC4zLDAuMiwwLjYsMC4xLDFjLTAuMiwwLjQtMC41LDAuNi0wLjksMC42bC0xOCwwLjFjLTAuNCwwLTAuNy0wLjEtMC45LTAuNGMtMC4yLTAuMy0wLjItMC41LTAuMS0wLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDUuOC0xNy4xYzAuMS0wLjQsMC'+
			'40LTAuNywwLjgtMC43YzAuNSwwLDAuNywwLjEsMSwwLjRsMy42LDUuMWwwLjcsMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxOS41LTE0YzAuOC0wLjUsMS44LTAuNCwyLjQsMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjUsMi4xQy0xMzEuNiwzNjguMy0xMzEuOCwzNjkuNC0xMzIuNSwzNjkuOXoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMyLjEsMzY3LjVsLTEuNS0yLjFjLTAuNS0wLjgtMS42LTAuOS0yLjQtMC40bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsLTAuNy0wLjlsLTMuNi01'+
			'LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuNS0wLjQtMS0wLjRjLTAuNSwwLTAuNywwLjMtMC44LDAuN2wtNS44LDE3LjFjLTAuMSwwLjQtMC4xLDAuNywwLjEsMC45YzAuMiwwLjMsMC41LDAuNCwwLjksMC40bDE4LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMiwwLjktMC42YzAuMi0wLjQsMC4yLTAuNy0wLjEtMWwtMy43LTUuMmwtMC43LTFjMC4xLDAsMC4xLTAuMSwwLjItMC4xbDE5LjUtMTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzEuOCwzNjkuNC0xMzEuNiwzNjguMy0xMzIuMSwzNjcuNXoiLz4KICAgPHBhdGggZmlsbD0iI0'+
			'ZGRkZGRiIgZD0iTS0xNzIuNiwzOTFoLTM4LjNjLTIuNiwwLTQuNywyLjEtNC43LDQuN3YyNy4yYzAsMi42LDIuMSw0LjcsNC43LDQuN2gzOC4zYzIuNiwwLDQuNy0yLjEsNC43LTQuN3YtMjcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2Ny45LDM5My4xLTE3MCwzOTEtMTcyLjYsMzkxeiBNLTE3My45LDQyMS42aC0zNS43VjM5N2gzNS43VjQyMS42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjA2LjIsNDE5LjJoNjIuM3YtNDQuM2gtNjIuM1Y0MTkuMnogTS0xNzguOSwzOTcuM2MwLDAsMTcuNy0xMi43LDE3LjctMTIuN2wtNC01LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuMi0wLjUtMC4xLTAuOWMwLjItMC40LDAuNS0wLjUsMC44LTAuNWwxNi4yLTAuMWMwLjQsMCwwLjYsMC4xLDAuOCwwLjRjMC4yLDAuMiwwLjIsMC41LDAuMSwwLjhsLTUuMiwxNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAuMy0wLjQsMC42LTAuOCwwLjZjLTAuNCwwLTAuNy0wLjEtMC45LTAu'+
			'M2wtMy45LTUuNGMwLDAtMTcuNywxMi43LTE3LjcsMTIuN2MtMC43LDAuNS0xLjYsMC4zLTIuMS0wLjRsLTEuNC0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzkuNywzOTguOC0xNzkuNSwzOTcuOC0xNzguOSwzOTcuM3oiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtTLTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTM4LjQsNDIwLjNjMCwyLjMtMS45LDQuMi00LjIsNC4yaC02NC43Yy0yLj'+
			'MsMC00LjItMS45LTQuMi00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuMywwLDQuMiwxLjksNC4yLDQuMlY0MjAuM3oiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDcuNCwzNzcuOWMtMC4yLTAuMy0wLjQtMC40LTAuOC0wLjRsLTE2LjIsMC4xYy0wLjQsMC0wLjcsMC4xLTAuOCwwLjVjLTAuMiwwLjQtMC4yLDAuNiwwLjEsMC45bDQsNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLTE3LjcsMTIuNy0xNy43LDEyLjdjLTAuNywwLjUtMC44LDEuNS0wLjQs'+
			'Mi4xbDEuNCwxLjljMC41LDAuNywxLjUsMC44LDIuMSwwLjRjMCwwLDE3LjYtMTIuNywxNy43LTEyLjdsMy45LDUuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC40LDAuNCwwLjksMC4zYzAuNCwwLDAuNy0wLjMsMC44LTAuNmw1LjItMTUuNEMtMTQ3LjIsMzc4LjQtMTQ3LjIsMzc4LjEtMTQ3LjQsMzc3Ljl6Ii8+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDIuNyw0MjQuNmgtNjQuN2MtMi4zLDAtNC4yLTEuOS00LjItNC4ydi00Ni43YzAtMi4zLDEuOS00LjIsNC4yLTQuMmg2NC43YzIuMywwLDQuMiwxLjksNC4yLDQuMnY0Ni43JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEzOC'+
			'40LDQyMi43LTE0MC4zLDQyNC42LTE0Mi43LDQyNC42eiBNLTIwNi4yLDQxOS4yaDYyLjN2LTQ0LjNoLTYyLjNWNDE5LjJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnogTS0xNzkuMywzOTcuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWwtNC41LTYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC4yLTAuNi0wLjEtMWMwLjItMC40LDAuNS0wLjYsMC45LTAuNmwxOC0wLjFjMC40LDAsMC43LDAuMSwwLjksMC40YzAuMiwwLjMsMC4yLDAuNSwwLjEsMC45bC01LjgsMTcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMSwwLjQtMC40LDAuNy0wLjgsMC43Yy0wLjUsMC0wLjctMC4xLTEtMC40bC00'+
			'LjMtNmMtMC4xLDAuMS0xOS43LDE0LjEtMTkuNywxNC4xYy0wLjgsMC41LTEuOCwwLjQtMi40LTAuNGwtMS41LTIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4MC4yLDM5OS0xODAsMzk3LjktMTc5LjMsMzk3LjR6Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNC40LDQyMi45YzAsMi42LTIuMSw0LjctNC43LDQuN2gtNzEuOGMtMi'+
			'42LDAtNC43LTIuMS00LjctNC43di01MS44YzAtMi42LDIuMS00LjcsNC43LTQuN2g3MS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjYsMCw0LjcsMi4xLDQuNyw0LjdWNDIyLjl6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ0LjMsMzc1LjhjLTAuMi0wLjMtMC41LTAuNC0wLjktMC40bC0xOCwwLjFjLTAuNCwwLTAuOCwwLjItMC45LDAuNmMtMC4yLDAuNC0wLjIsMC43LDAuMSwxbDQuNSw2LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xLDAtMTkuNywxNC4xLTE5LjcsMTQuMWMtMC44LDAuNS0wLjksMS42LTAuNCwy'+
			'LjRsMS41LDIuMWMwLjUsMC44LDEuNiwwLjksMi40LDAuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWw0LjMsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC41LDAuNCwxLDAuNGMwLjUsMCwwLjctMC4zLDAuOC0wLjdsNS44LTE3LjFDLTE0NC4xLDM3Ni4zLTE0NC4xLDM3Ni0xNDQuMywzNzUuOHoiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzOS4xLDQyNy42aC03MS44Yy0yLjYsMC00LjctMi4xLTQuNy00Ljd2LTUxLjhjMC0yLjYsMi4xLTQuNyw0LjctNC43aDcxLjhjMi42LDAsNC43LDIuMSw0LjcsNC43djUxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTM0LjQsNDI1Lj'+
			'UtMTM2LjUsNDI3LjYtMTM5LjEsNDI3LjZ6IE0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._dropdown_menu=document.createElement('div');
		el.ggId="Dropdown Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_background=document.createElement('div');
		el.ggId="Dropdown Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(68,68,68,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 119px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_scrollarea=document.createElement('div');
		els=me._dropdown_scrollarea__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 170px;';
		hs+="";
		els.setAttribute('style',hs);
		me._dropdown_scrollarea.ggScrollByX = function(diffX) {
			if(!me._dropdown_scrollarea.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea.ggHPercentVisible >= 1.0) return;
			me._dropdown_scrollarea.ggScrollPosX = (me._dropdown_scrollarea__horScrollFg.offsetLeft + diffX);
			me._dropdown_scrollarea.ggScrollPosX = Math.max(me._dropdown_scrollarea.ggScrollPosX, 0);
			me._dropdown_scrollarea.ggScrollPosX = Math.min(me._dropdown_scrollarea.ggScrollPosX, me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
			me._dropdown_scrollarea__horScrollFg.style.left = me._dropdown_scrollarea.ggScrollPosX + 'px';
			let percentScrolled = me._dropdown_scrollarea.ggScrollPosX / (me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
			me._dropdown_scrollarea__content.style.left = -(Math.round((me._dropdown_scrollarea.ggContentWidth * (1.0 - me._dropdown_scrollarea.ggHPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosXPercent = (me._dropdown_scrollarea__horScrollFg.offsetLeft / me._dropdown_scrollarea__horScrollBg.offsetWidth);
		}
		me._dropdown_scrollarea.ggScrollByXSmooth = function(diffX) {
			if(!me._dropdown_scrollarea.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._dropdown_scrollarea.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._dropdown_scrollarea.ggScrollPosX >= me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth)) {
					me._dropdown_scrollarea.ggScrollPosX = Math.min(me._dropdown_scrollarea.ggScrollPosX, me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._dropdown_scrollarea.ggScrollPosX <= 0)) {
					me._dropdown_scrollarea.ggScrollPosX = Math.max(me._dropdown_scrollarea.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea__horScrollFg.style.left = me._dropdown_scrollarea.ggScrollPosX + 'px';
			let percentScrolled = me._dropdown_scrollarea.ggScrollPosX / (me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
			me._dropdown_scrollarea__content.style.left = -(Math.round((me._dropdown_scrollarea.ggContentWidth * (1.0 - me._dropdown_scrollarea.ggHPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosXPercent = (me._dropdown_scrollarea__horScrollFg.offsetLeft / me._dropdown_scrollarea__horScrollBg.offsetWidth);
			}, 10);
		}
		me._dropdown_scrollarea.ggScrollByY = function(diffY) {
			if(!me._dropdown_scrollarea.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea.ggVPercentVisible >= 1.0) return;
			me._dropdown_scrollarea.ggScrollPosY = (me._dropdown_scrollarea__vertScrollFg.offsetTop + diffY);
			me._dropdown_scrollarea.ggScrollPosY = Math.max(me._dropdown_scrollarea.ggScrollPosY, 0);
			me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
			let percentScrolled = me._dropdown_scrollarea.ggScrollPosY / (me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea__content.style.top = -(Math.round((me._dropdown_scrollarea.ggContentHeight * (1.0 - me._dropdown_scrollarea.ggVPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosYPercent = (me._dropdown_scrollarea__vertScrollFg.offsetTop / me._dropdown_scrollarea__vertScrollBg.offsetHeight);
		}
		me._dropdown_scrollarea.ggScrollByYSmooth = function(diffY) {
			if(!me._dropdown_scrollarea.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._dropdown_scrollarea.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._dropdown_scrollarea.ggScrollPosY >= me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight)) {
					me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._dropdown_scrollarea.ggScrollPosY <= 0)) {
					me._dropdown_scrollarea.ggScrollPosY = Math.max(me._dropdown_scrollarea.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
			let percentScrolled = me._dropdown_scrollarea.ggScrollPosY / (me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea__content.style.top = -(Math.round((me._dropdown_scrollarea.ggContentHeight * (1.0 - me._dropdown_scrollarea.ggVPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosYPercent = (me._dropdown_scrollarea__vertScrollFg.offsetTop / me._dropdown_scrollarea__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._dropdown_scrollarea.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._dropdown_scrollarea.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._dropdown_scrollarea.ggHPercentVisible);
					me._dropdown_scrollarea.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._dropdown_scrollarea.clientWidth - (me._dropdown_scrollarea.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._dropdown_scrollarea.clientWidth - (me._dropdown_scrollarea.ggVertScrollVisible ? 15 : 0))) * me._dropdown_scrollarea.ggHPercentVisible);
					me._dropdown_scrollarea.ggScrollByXSmooth(diffX);
				}
			}
			if (me._dropdown_scrollarea.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._dropdown_scrollarea.clientHeight - (me._dropdown_scrollarea.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._dropdown_scrollarea.clientHeight - (me._dropdown_scrollarea.ggHorScrollVisible ? 15 : 0))) * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._dropdown_scrollarea.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._dropdown_scrollarea__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaX *= 0.65;
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByX(me._dropdown_scrollarea.ggDragInertiaX);
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaX) < 1.0 && Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._dropdown_scrollarea__content.ontouchend = null;
				me._dropdown_scrollarea__content.ontouchmove = null;
				me._dropdown_scrollarea__content.onpointerup = null;
				me._dropdown_scrollarea__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._dropdown_scrollarea__content.onpointerup = me._dropdown_scrollarea__content.ontouchend;
		}
			me._dropdown_scrollarea__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._dropdown_scrollarea.ggDragLastX) * me._dropdown_scrollarea.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._dropdown_scrollarea.ggDragLastY) * me._dropdown_scrollarea.ggVPercentVisible;
				me._dropdown_scrollarea.ggDragInertiaX = -diffX;
				me._dropdown_scrollarea.ggDragInertiaY = -diffY;
				me._dropdown_scrollarea.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._dropdown_scrollarea.ggScrollByX(-diffX);
				me._dropdown_scrollarea.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._dropdown_scrollarea__content.onpointermove = me._dropdown_scrollarea__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._dropdown_scrollarea__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 115px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._dropdown_scrollarea__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 115px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._dropdown_scrollarea.ggScrollPosY = 0;
		me._dropdown_scrollarea.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._dropdown_scrollarea.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragInertiaY = diffY;
				me._dropdown_scrollarea.ggDragLastY = e.clientY;
				me._dropdown_scrollarea.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragInertiaY = diffY;
				me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._dropdown_scrollarea.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._dropdown_scrollarea.ggScrollHeight;
			if (e.offsetY < me._dropdown_scrollarea.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._dropdown_scrollarea__vertScrollBg.getBoundingClientRect();
			var diffY = me._dropdown_scrollarea.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._dropdown_scrollarea.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._dropdown_scrollarea.ggScrollByYSmooth(30 * me._dropdown_scrollarea.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._dropdown_scrollarea__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Dropdown Scrollarea";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 187px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_scrollarea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_scrollarea.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._dropdown_scrollarea.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._dropdown_scrollarea.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._dropdown_scrollarea__vertScrollBg.style.visibility = 'inherit';
					me._dropdown_scrollarea__vertScrollFg.style.visibility = 'inherit';
					me._dropdown_scrollarea.ggVertScrollVisible = true;
				} else {
					me._dropdown_scrollarea__vertScrollBg.style.visibility = 'hidden';
					me._dropdown_scrollarea__vertScrollFg.style.visibility = 'hidden';
					me._dropdown_scrollarea.ggVertScrollVisible = false;
				}
				if(me._dropdown_scrollarea.ggVertScrollVisible) {
					me._dropdown_scrollarea.ggAvailableWidth = me._dropdown_scrollarea.clientWidth - 15;
					if (me._dropdown_scrollarea.ggHorScrollVisible) {
						me._dropdown_scrollarea.ggAvailableHeight = me._dropdown_scrollarea.clientHeight - 15;
						me._dropdown_scrollarea.ggAvailableHeightWithScale = me._dropdown_scrollarea.getBoundingClientRect().height - me._dropdown_scrollarea__vertScrollBg.getBoundingClientRect().width;
						me._dropdown_scrollarea__cornerBg.style.visibility = 'inherit';
					} else {
						me._dropdown_scrollarea.ggAvailableHeight = me._dropdown_scrollarea.clientHeight;
						me._dropdown_scrollarea.ggAvailableHeightWithScale = me._dropdown_scrollarea.getBoundingClientRect().height;
						me._dropdown_scrollarea__cornerBg.style.visibility = 'hidden';
					}
					me._dropdown_scrollarea__vertScrollBg.style.height = me._dropdown_scrollarea.ggAvailableHeight + 'px';
					me._dropdown_scrollarea.ggVPercentVisible = contentHeight != 0 ? me._dropdown_scrollarea.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._dropdown_scrollarea.ggVPercentVisible > 1.0) me._dropdown_scrollarea.ggVPercentVisible = 1.0;
					me._dropdown_scrollarea.ggScrollHeight =  Math.round(me._dropdown_scrollarea__vertScrollBg.offsetHeight * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea__vertScrollFg.style.height = me._dropdown_scrollarea.ggScrollHeight + 'px';
					me._dropdown_scrollarea.ggScrollPosY = me._dropdown_scrollarea.ggScrollPosYPercent * me._dropdown_scrollarea.ggAvailableHeight;
					me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
					me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
					if (me._dropdown_scrollarea.ggVPercentVisible < 1.0) {
						let percentScrolled = me._dropdown_scrollarea.ggScrollPosY / (me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
						me._dropdown_scrollarea__content.style.top = -(Math.round((me._dropdown_scrollarea.ggContentHeight * (1.0 - me._dropdown_scrollarea.ggVPercentVisible)) * percentScrolled)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
					}
				} else {
					me._dropdown_scrollarea.ggAvailableWidth = me._dropdown_scrollarea.clientWidth;
					me._dropdown_scrollarea.ggScrollPosY = 0;
					me._dropdown_scrollarea.ggScrollPosYPercent = 0.0;
					me._dropdown_scrollarea__content.style.top = this.ggContentTopOffset + 'px';
					me._dropdown_scrollarea__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._dropdown_scrollarea.ggHorScrollVisible || vertScrollWasVisible != me._dropdown_scrollarea.ggVertScrollVisible) {
					me.updateSize(me._dropdown_scrollarea);
					me._dropdown_scrollarea.ggUpdatePosition();
				}
			}
		}
		el=me._dropdown_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 169;
		el.ggHeight = 24;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._dropdown_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._dropdown_menu_text && me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor) {
						me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._dropdown_cloner.callChildLogicBlocks_active = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._dropdown_menu_text && me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor) {
						me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor();
					}
					if (me._dropdown_cloner.ggInstances[i]._dropdown_checkmark && me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha) {
						me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha();
					}
				}
			}
		}
		me._dropdown_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._dropdown_checkmark && me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha) {
						me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._dropdown_cloner.ggUpdating == true) return;
			me._dropdown_cloner.ggUpdating = true;
			var el=me._dropdown_cloner;
			var curNumCols = 0;
			curNumCols = me._dropdown_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._dropdown_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._dropdown_cloner.ggHeight) + 'px';
				parameter.left=(column * me._dropdown_cloner.ggWidth) + 'px';
				parameter.width=me._dropdown_cloner.ggWidth + 'px';
				parameter.height=me._dropdown_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_dropdown_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._dropdown_cloner.callChildLogicBlocks_mouseover();
			me._dropdown_cloner.callChildLogicBlocks_active();
			me._dropdown_cloner.callChildLogicBlocks_changevisitednodes();
			me._dropdown_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._dropdown_cloner.parentNode.classList.contains('ggskin_subelement') && me._dropdown_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._dropdown_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Dropdown Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 169px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner.childNodes.length; i++) {
				var child=me._dropdown_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dropdown_cloner.ggUpdatePosition=function (useTransition) {
				me._dropdown_cloner.ggUpdate();
		}
		me._dropdown_cloner.ggNodeChange=function () {
			me._dropdown_cloner.ggUpdateConditionNodeChange();
		}
		me._dropdown_scrollarea__content.appendChild(me._dropdown_cloner);
		me._dropdown_background.appendChild(me._dropdown_scrollarea);
		me._dropdown_menu.appendChild(me._dropdown_background);
		el=me._dropdown_menu_title_background=document.createElement('div');
		el.ggId="Dropdown Menu Title Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title_background.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_title_background'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(68,68,68,1)";
				}
				else {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._dropdown_menu_title_background.onclick=function (e) {
			me._dropdown_background.ggVisible = !me._dropdown_background.ggVisible;
			var flag=me._dropdown_background.ggVisible;
			me._dropdown_background.style[domTransition]='none';
			me._dropdown_background.style.visibility=((flag)&&(Number(me._dropdown_background.style.opacity)>0||!me._dropdown_background.style.opacity))?'inherit':'hidden';
			me._dropdown_open.ggVisible = !me._dropdown_open.ggVisible;
			var flag=me._dropdown_open.ggVisible;
			me._dropdown_open.style[domTransition]='none';
			me._dropdown_open.style.visibility=((flag)&&(Number(me._dropdown_open.style.opacity)>0||!me._dropdown_open.style.opacity))?'inherit':'hidden';
			me._dropdown_close.ggVisible = !me._dropdown_close.ggVisible;
			var flag=me._dropdown_close.ggVisible;
			me._dropdown_close.style[domTransition]='none';
			me._dropdown_close.style.visibility=((flag)&&(Number(me._dropdown_close.style.opacity)>0||!me._dropdown_close.style.opacity))?'inherit':'hidden';
		}
		me._dropdown_menu_title_background.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=true;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_title=document.createElement('div');
		els=me._dropdown_menu_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 166px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_menu_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_menu_title.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_menu_title);
		el=me._dropdown_open=document.createElement('div');
		els=me._dropdown_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgaGVpZ2h0PSIyMHB4IiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeG'+
			'1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjBweCIgdmVyc2lvbj0iMS4xIj4KIDxwb2x5Z29uIHBvaW50cz0iMCwwIDEwLDIwIDIwLDAgIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+Cg==';
		me._dropdown_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_open.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_open);
		el=me._dropdown_close=document.createElement('div');
		els=me._dropdown_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgaGVpZ2h0PSIyMHB4IiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeG'+
			'1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjBweCIgdmVyc2lvbj0iMS4xIj4KIDxwb2x5Z29uIHBvaW50cz0iMjAsMjAgMTAsMCAwLDIwICIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+Cjwvc3ZnPgo=';
		me._dropdown_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_close.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_close);
		me._dropdown_menu.appendChild(me._dropdown_menu_title_background);
		me.divSkin.appendChild(me._dropdown_menu);
		el=me._button_silhouette_next_previous=document.createElement('div');
		el.ggId="button_silhouette_next_previous";
		el.ggDx=31;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 9px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_silhouette_next_previous.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_silhouette_next_previous.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._pano_prev=document.createElement('div');
		els=me._pano_prev__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xODIuMiw0MTcuMmMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yOC40LTE5LjhjLTEuMy0wLjktMS4zLTIuMywwLTMuMmwyOC40LTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjMtMC45LDIuMy0wLjMsMi4zLDEuMkwtMTgyLjIsNDE3LjJMLTE4Mi4yLDQxNy4yeiBNLTE0OC4yLDQxNy4yYzAs'+
			'MS41LTEsMi4xLTIuMywxLjJsLTI4LjQtMTkuOGMtMS4zLTAuOS0xLjMtMi4zLDAtMy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMjguNC0xOS44YzEuMy0wLjksMi4zLTAuMywyLjMsMS4yVjQxNy4yeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE4Mi4yLDQxNy4yYzAsMS41LTEsMi4xLTIuMywxLjJsLTI4LjQtMTkuOGMtMS4zLTAuOS0xLjMtMi4zLDAtMy4ybDI4LjQtMTkuOGMxLjMtMC45LDIuMy0wLjMsMi4zLDEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE4Mi4yLDQxNy4yTC0xODIuMiw0MTcuMnoiLz4KICAgPHBhdG'+
			'ggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDguMiw0MTcuMmMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yOC40LTE5LjhjLTEuMy0wLjktMS4zLTIuMywwLTMuMmwyOC40LTE5LjhjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7VjQxNy4yeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._pano_prev__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_prev__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE4Myw0MTkuNGMwLDEuNy0xLjIsMi4zLTIuNiwxLjNsLTMxLjUtMjJjLTEuNC0xLTEuNC0yLjYsMC0zLjZsMzEuNS0yMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNC0xLDIuNi0wLjQsMi42LDEuM0wtMTgzLDQxOS40TC0xODMsNDE5LjR6IE0tMTQ1LjIsNDE5LjRjMCwxLjct'+
			'MS4yLDIuMy0yLjYsMS4zbC0zMS41LTIyYy0xLjQtMS0xLjQtMi42LDAtMy42bDMxLjUtMjImI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjQtMSwyLjYtMC40LDIuNiwxLjNWNDE5LjR6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTgzLDQxOS40YzAsMS43LTEuMiwyLjMtMi42LDEuM2wtMzEuNS0yMmMtMS40LTEtMS40LTIuNiwwLTMuNmwzMS41LTIyYzEuNC0xLDIuNi0wLjQsMi42LDEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE4Myw0MTkuNEwtMTgzLDQxOS40eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLT'+
			'E0NS4yLDQxOS40YzAsMS43LTEuMiwyLjMtMi42LDEuM2wtMzEuNS0yMmMtMS40LTEtMS40LTIuNiwwLTMuNmwzMS41LTIyYzEuNC0xLDIuNi0wLjQsMi42LDEuM1Y0MTkuNHomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_prev__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Prev";
		el.ggDy=-290;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -660px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_prev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_prev.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","$(bwd)");
			if (
				(
					((player.getCurrentNode() == "node1")) || 
					((player.getCurrentNode() == "node5"))
				)
			) {
				me._pano_prev.style[domTransition]='none';
				me._pano_prev.style.visibility='hidden';
				me._pano_prev.ggVisible=false;
			}
			if (
				(
					((player.getCurrentNode() != "node1")) && 
					((player.getCurrentNode() != "node5"))
				)
			) {
				me._pano_next.style[domTransition]='none';
				me._pano_next.style.visibility=(Number(me._pano_next.style.opacity)>0||!me._pano_next.style.opacity)?'inherit':'hidden';
				me._pano_next.ggVisible=true;
			}
		}
		me._pano_prev.onmouseover=function (e) {
			me._pano_prev__img.style.visibility='hidden';
			me._pano_prev__imgo.style.visibility='inherit';
		}
		me._pano_prev.onmouseout=function (e) {
			me._pano_prev__img.style.visibility='inherit';
			me._pano_prev__imgo.style.visibility='hidden';
		}
		me._pano_prev.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._button_silhouette_next_previous.appendChild(me._pano_prev);
		el=me._pano_next=document.createElement('div');
		els=me._pano_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNzEuMiwzOTguNmwtMjguNCwxOS44Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMnYtNDAuNGMwLTEuNSwxLTIuMSwyLjMtMS4ybDI4LjQsMTkuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNjkuOSwzOTYuMy0xNjkuOSwzOTcuNy0xNzEuMiwzOTguNnogTS0xMzcuMSwzOTguNmwtMjguNCwx'+
			'OS44Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMnYtNDAuNGMwLTEuNSwxLTIuMSwyLjMtMS4ybDI4LjQsMTkuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzUuOCwzOTYuMy0xMzUuOCwzOTcuNy0xMzcuMSwzOTguNnoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjcuOCwzNzYuOGMwLTEuNSwxLTIuMSwyLjMtMS4ybDI4LjQsMTkuOGMxLjMsMC45LDEuMywyLjMsMCwzLjJsLTI4LjQsMTkuOGMtMS4zLDAuOS0yLjMsMC4zLTIuMy0xLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7VjM3Ni44eiIvPgogICA8cGF0aCBmaWxsPSIjRk'+
			'ZGRkZGIiBkPSJNLTIwMS44LDM3Ni44YzAtMS41LDEtMi4xLDIuMy0xLjJsMjguNCwxOS44YzEuMywwLjksMS4zLDIuMywwLDMuMmwtMjguNCwxOS44Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTIwMS44LDM3Ni44TC0yMDEuOCwzNzYuOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_next__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_next__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3MC44LDM5OC44bC0zMS41LDIyYy0xLjQsMS0yLjYsMC40LTIuNi0xLjN2LTQ0LjljMC0xLjcsMS4xLTIuMywyLjYtMS4zbDMxLjUsMjImI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTY5LjMsMzk2LjItMTY5LjMsMzk3LjgtMTcwLjgsMzk4Ljh6IE0tMTMyLjksMzk4LjhsLTMx'+
			'LjUsMjJjLTEuNCwxLTIuNiwwLjQtMi42LTEuM3YtNDQuOWMwLTEuNywxLjItMi4zLDIuNi0xLjNsMzEuNSwyMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzEuNSwzOTYuMi0xMzEuNSwzOTcuOC0xMzIuOSwzOTguOHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjcsMzc0LjVjMC0xLjcsMS4yLTIuMywyLjYtMS4zbDMxLjUsMjJjMS40LDEsMS40LDIuNiwwLDMuNmwtMzEuNSwyMmMtMS40LDEtMi42LDAuNC0yLjYtMS4zVjM3NC41eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIwNC44LDM3NC41YzAtMS43LDEuMi'+
			'0yLjMsMi42LTEuM2wzMS41LDIyYzEuNCwxLDEuNCwyLjYsMCwzLjZsLTMxLjUsMjJjLTEuNCwxLTIuNiwwLjQtMi42LTEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTIwNC44LDM3NC41TC0yMDQuOCwzNzQuNXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Next";
		el.ggDy=-290;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : -600px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_next.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
			if (
				(
					((player.getCurrentNode() == "node2")) || 
					((player.getCurrentNode() == "node7"))
				)
			) {
				me._pano_next.style[domTransition]='none';
				me._pano_next.style.visibility='hidden';
				me._pano_next.ggVisible=false;
			}
			if (
				(
					((player.getCurrentNode() != "node1")) && 
					((player.getCurrentNode() != "node5"))
				)
			) {
				me._pano_prev.style[domTransition]='none';
				me._pano_prev.style.visibility=(Number(me._pano_prev.style.opacity)>0||!me._pano_prev.style.opacity)?'inherit':'hidden';
				me._pano_prev.ggVisible=true;
			}
		}
		me._pano_next.onmouseover=function (e) {
			me._pano_next__img.style.visibility='hidden';
			me._pano_next__imgo.style.visibility='inherit';
		}
		me._pano_next.onmouseout=function (e) {
			me._pano_next__img.style.visibility='inherit';
			me._pano_next__imgo.style.visibility='hidden';
		}
		me._pano_next.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._button_silhouette_next_previous.appendChild(me._pano_next);
		me.divSkin.appendChild(me._button_silhouette_next_previous);
		el=me._button_home=document.createElement('div');
		els=me._button_home__img=document.createElement('img');
		els.className='ggskin ggskin_button_home';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAANiklEQVR4nO3dWYwlZRnG8f8wEyPMiEoc1ARRoyRARC8UTDSixhhMMKJRXHCJQVDAKzVeKHKhQVziciG4oJi4xCUuuBAVcR/EhQsXFBHGDRFEIgjMMCTqtBfVR5u2vz7bV/V+X33/X/JekAD1VqWfp6pPnz4NkiRJkiRJkiRJkiRpLLZEL6AQO4H7A4es/vOtwG3ALWEbKYQFMF7bgeOAxwFHAo9YncOm/Hc3ALuB3wHXAFeuzl29bSopi6OA84BfAiuZ5+fAucAjBzsbSVPtAF4H/IL8oU/NlcCZwIEDnJ+kDRwGvBu4neGCv37+TvdUsLPnc5W0aidwAfBP4oK/fvYBbwcO7vG8peadA+wlPvCbPRGc1dvZS416GN2LcNEBn3W+Bzyoh+sgNefZwJ'+
			'3Eh3re+Rvw5B6uh9SMNxMf5GXm38Cp2a+KsvGNQOW6EDg9eolMzgPOjl5iiicCJwAPBg6l+xHnLXRPMr8CPgvsCdtOTfkC8Xfv3POJrFcoj/vRvbD6J2Y7h0/SvbNS6s0Ywz+ZT2W8Tss4iO79C3ew2Hl8DXjU4Ftr1LYBlxAf0r7nc8DWTNdsEQ+le6Rf9jzuBl4w8O4asS8RH86h5pOZrtm8Hgv8Y8YdZ523DHoGGp1W7vwblcABGa7frHYCN/ZwHivAKQOeh0ZmzN/zT5uPZ7h+s9rV43nsA44Z7lQ0Bq3e+dfPEE8Cpw1wHrt6PgeNiOEfrgTuDdw80Hk8s6dz0MhcTHzoSpuPLXVF084Y8Bwu7+kcNBLe+TefPp4ELhtw//3AAzLvr5Ew/LOXQK63qB8M/Gvg/U/LtLtGxPDPNxeRpwSOD9j9wgx7D2bIn8O2'+
			'ahvdm3xOjF6kIqcCH2H5Eoj4qLKHBBxzYRZAvwz/4nKUwKGZdpnH4QHHXJgF0B/Dv7xlSyDiU4sPmf6vlMMC6IfhzyfXtwPagAWQn+HPzxLoybboBUbG8Pdn8tFirwjdYmR8AsjH8PfvVOD90UuMiU8A+XyOOsL/GeBbwG/pPhgDut9kOxJ4OnBy0F6zOpPu5+2vnuHfXel5l43sDzimgtXw3v6rgaNnOJfjgOsL2HfaXDDDubwmYK+/zLCXRqSG8P8AuM8c53Rf4IoC9p425085DwtAvanl7b0/ZLGfh+8AflrA/tNms9cEXhuwz03TL61qN/bwT9ReAhaAsmsl/BM1l4AFoKxaC/9ELSXw3nV7WwDKptXwT9RYAhaAsmg9/BO1lYAFoKUZ/nuqqQQifgx44+KXViWq5ef82/u6ABvYQR3vE9gdcEzfBzAS3vk3V8'+
			'uTwNDjtwAjYPhnYwlYAKNj+OdjCVgAo2H4F2MJWADVM/zLsQQsgGoZ/jwsAQugOoY/r9ZLwAKoiOHvR8slYAFUwvD3q9USsAAqYPiH0WIJWACFM/zDaq0ELICCGf4YLZWABVAowx+rlRKwAApk+MvQQglYAIUx/GUZewlYAAUx/GUacwlYAIUw/GUbawlYAAUw/GmHAucBlwG3AjcDlwJvBXYOvMsYS8ACCGb4004C9m6y023ACQPvNLYSsAACGf60F8+x3ykD7zamErAAghj+tBfS/dnqWXfcv/rfDGksJWABBDD8afOG3xKwAKpi+NMWDb8lYAFUwfCnLRt+S8ACKJrhT8sVfkvAAiiS4U/LHX5LwAIoiuFP6yv8loAFUATDn9Z3+C0BCyBcDX+o83KG/UOdMFz4o0vgxxl273tu6esCtMw7f9rQ4Y8ugRqeBD4N'+
			'bOnpGjTH8KdFhd8SsAQGYfjTosNvCcxWAlt7ugajZ/jTSgm/JWAJ9MLwp5UWfktg+nwRS2Bmhj+t1PBbApZAFoY/rfTwWwKWwFIMf1ot4bcELIGFGP602sJvCVgCczH8abWG3xKwBGZi+NNqD78lYAlsyvCnjSX8k7EE0tNkCRj+tLGFfzKWQHqaKgHDnzbW8E/GEkhPEyVg+NPGHv7JWALpGXUJGP60VsI/GUsgPaMsAcOf1lr4J2MJpGdUJWD401oN/2QsgfSMogQMf1rr4Z+MJZCeqkvA8KcZ/nuOJZCeKkvA8Ke9DMO/0VgC6amqBAx/muHffCyB9FRRAoY/zfDPNpZAeoouAcOfZvjnG0sgPUWWgOFPM/yLjSWQnqJKwPCnGf7lxhJITxElYPjTDH+esQTSE1oChj/N8OcdSyA9ISVg+NMMfz9jCaTni3SZHI'+
			'ThTzP8/Y4lkJ5LGKAEDH+a4R9mLIH09FoChj/N8A87lkB6eikBw59m+GNm/+q1H1KTJWD40wx/7FgC6clSAoY/zfCXMZZAepYqAcOfZvjLGksgPQuVgOFPM/xljiWQnrlKwPCnGf6yxxJIz8wlcHEBy06b72P4nY0nqgR+mGH3vucL007kXQUsOW288zvTxhJIz9tSJ/CyApabNruAg1In0BPDX+dElMB24PIMu/c9L1i/+MHA7QUsttl453fmnYgSOJDynwT+TldW//WOApbabAy/s+hYAhvPOZNltwP7ClgoNd/Hx35nuYn6dmBXht37mtsmi55UwDKp8c7v5BqfBP5/ngLw4QIW2WgMv5N7LIF7zjsBrixgkfVj+J2+xhL433wH4I8FLLJ2DL/T91gC3VwHsLeARSbjz/mdocb3CXQv/nNnAYus4J3fGX5afxK4'+
			'A+DaAhYx/E7UtFwCVwN8N3gJH/ud6Gn124FvAJwbuIB3fqeUafFJ4GyAJwQd3PA7pU1rJfCYyRI3DXzgiN/nPx3D70yfqBIY+m3Dv1u7wBkDHjjizn96pt2dNqaFJ4FT1h58K/D7AQ5q+J1aZswlcNVGBz8WuLvHgxp+p7YZYwncBRydOvjJPR3U8Du1zphKYD/wrGkHPyvzQb/O8D/nN/xOzol6n8ClGXZfO6+c9eAnkedDQi4EDljk7Jdg+J0+JqIEtgIXZdh9L3DCvAd/FN3HCC9ywN2se5VxIIbf6XMiSoDVY/5hgX1X6DKc/J5/FscA7wdumHKgO4AvAS9a5mBLMPzOEBNVAgAvBb4K7Jmy4/XA+cwQ/C1zLnA0cATwQOABdL9JePPqAX885/8rp9Ppvt2QhrACvBz4eOAOTwQOo8viDuAWuixeQ/cLfs3wzu'+
			'9ETOSTgFYZfidyLIFAht8pYSyBAIbfKWksgQEZfqfEsQQGYPidkqe6EtgavcAc/FGfSrcFeDbdm3Z+EbzLTGopAMOvWlRVAjUUgOFXbaopgdILwPCrVlWUQMkFYPhVu+JLoNQCeBXwoeglpAy2AM8B/gz8LHiX/zPvLwMN4Rl0HyIijc3TWP2LvKUosQB2A4+IXkLqwVXAo6OXWGvoT+uZ5vEYfo3XMcBR0UusVVoBPCF6AalnRX2Nl1YAD4xeQOrZ4dELrFVaAZS2j5TbvaIXWMvASQ2zAKSGWQBSwywAqWEWgNQwC0BqmAUgNcwCkBpmAUgNswCkhlkAUsMsAKlhFoDUMAtAapgFIDXMApAaZgFIDbMApIZZAFLDLACpYRaA1LBt0QussxK9QIF+CuyLXmJBBwHHRi9RmP3RC6xVWgGU+KfKor0EuC56iQUdBVwd'+
			'vURhinrqLmoZScOyAKSGWQBSwywAqWEWgNQwC0BqmAUgNcwCkBpmAUgNswCkhlkAUsMsAKlhFoDUMAtAapgFIDXMApAaZgFIDbMApIZZAFLDLACpYRaA1DALQGqYBSA1zAKQGmYBSA2zAKSGWQBSwywAqWEWgNQwC0BqmAUgNcwCkBpmAUgNswCkhlkAUsMsAKlhFoDUsNIKYCV6gQLVfE1q3r0v+6MXWKu0Arg7eoECbYleYAk1796Xor7GSyuAPdELSD27M3qBtUorgNujFyhQzY/RNe/el9uiF1irtALYHb1AgWp+jK55975cG73AWqUVwDXRC0g9+2X0AmuVVgA3An+NXkLqybXA3ugl1iqtAAC+Fb2A1JNvRy+wXokFcFn0AoWp+YW0mnfvw6XRC6xXYgFcDPwzeomC1PxCWs2757YH+Fr0EuuVWAB3ApdELy'+
			'Fl9lkKvLGVWAAA50cvIGW0ArwneomNlFoA3wGuiF5CyuTLwNXRS2yk1AIAeEP0AoWo+YW0mnfP6U3RC6SUXAA/AD4fvUQBan4hrebdc3kf8OvoJVJKLgCA1+IvCNV8F6159xxuBM6OXmIzpRfAn4GXRC8RrOa7aM27L+tfwPMo7Lf/1iu9AKB7AeW90UsEqvkuWvPuy3o98KPoJcbiAOCbdF9Qrc0RGa5flKOIv34R89EcF28INTwBQPcxSs8BroxeJEDNd9Gad1/UV4BTo5eYVS0FAN1vUT0V2BW9yMBq/j665t0X8RngudFLzKOmAoCuBI4HPhi9yIBqvovWvPu8zgFeRPfinwbwfLqPV4r+fq/veWSuCxbgSOKvX9/zJ+BJuS6Y5nMI8AG61o3+QuhrfBGwzNlDd9e/d7arpYU9lO5HhbcT/4VhAfzPGAvgBuCN'+
			'dDcfFWY7cAbd565Ff6FYAOMpgP10n1T1XGBb1isUbMyv0h4DnAg8je4J4cHAjtCNFnME9X5a8pHAb6KXWMCtwE3AdcA36D6f4i+hG/VkzAWQ8nDgUODA6EVm9BNgX/QSCzoIOC56iRndRfeBtNdHLyJJkiRJkiRJkiRJkrSI/wCrwjDSGJTxtgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button home";
		el.ggDx=513;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_home.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_home.onclick=function (e) {
			player.openNext("{node4}",player.hotspot.target);
			me._media_pause.style[domTransition]='none';
			me._media_pause.style.visibility='hidden';
			me._media_pause.ggVisible=false;
			me._pano_next.style[domTransition]='none';
			me._pano_next.style.visibility='hidden';
			me._pano_next.ggVisible=false;
			me._pano_prev.style[domTransition]='none';
			me._pano_prev.style.visibility='hidden';
			me._pano_prev.ggVisible=false;
			me._mute.onclick.call(me._mute);
			player.setVariableValue('isHome', true);
			if (
				(
					((player.getVariableValue('sound') == true))
				)
			) {
				me._media_pause.style[domTransition]='none';
				me._media_pause.style.visibility=(Number(me._media_pause.style.opacity)>0||!me._media_pause.style.opacity)?'inherit':'hidden';
				me._media_pause.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('sound') == true))
				)
			) {
				me._media_play.style[domTransition]='none';
				me._media_play.style.visibility='hidden';
				me._media_play.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('sound') == false))
				)
			) {
				me._media_pause.style[domTransition]='none';
				me._media_pause.style.visibility='hidden';
				me._media_pause.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('sound') == false))
				)
			) {
				me._media_play.style[domTransition]='none';
				me._media_play.style.visibility=(Number(me._media_play.style.opacity)>0||!me._media_play.style.opacity)?'inherit':'hidden';
				me._media_play.ggVisible=true;
			}
		}
		me._button_home.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_home);
		el=me._button_zoom=document.createElement('div');
		el.ggId="button_zoom";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 9px;';
		hs+='height : 25px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_zoom.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_zoom.ggUpdatePosition=function (useTransition) {
		}
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8cGF0aCBmaW'+
			'xsPSIjRkZGRkZGIiBkPSJNLTE0My4yLDM4Ny41YzEuMSwwLDEuNiwwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjUmI3hkOyYjeGE7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjVjMC0xLjMsMC41LTEuOCwxLjYtMS44SC0xNDMuMnoiLz4KIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eiYj'+
			'eGQ7JiN4YTsmI3g5OyBNLTE0MS42LDQwNC43YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjVjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjUmI3hkOyYjeGE7JiN4OTtjMC0xLjMsMC41LTEuOCwxLjYtMS44aDYzLjVjMS4xLDAsMS42LDAuNSwxLjYsMS44VjQwNC43eiIvPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8cGF0aCBmaW'+
			'xsPSIjRkZGRkZGIiBkPSJNLTEzOS43LDM4Ni40YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtNzAuNiYjeGQ7JiN4YTsmI3g5O2MtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMkgtMTM5Ljd6Ii8+CiA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsm'+
			'I3hhOyYjeDk7IE0tMTM3LjksNDA1LjZjMCwwLjYtMC4yLDEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMiwwLjZoLTcwLjZjLTAuNCwwLTAuOC0wLjItMS4yLTAuNnMtMC42LTAuOC0wLjYtMS40di0xNy4yJiN4ZDsmI3hhOyYjeDk7YzAtMS40LDAuNi0yLDEuOC0yaDcwLjZjMS4yLDAsMS44LDAuNiwxLjgsMlY0MDUuNnoiLz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._button_zoom.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNDEuNiw0MDQuN2MwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC0yMi4zdjIyLjFjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41'+
			'LTAuNy0wLjUtMS4zdi0yMi4xaC0yMi4zYy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0xNS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjMsMC41LTEuOCwxLjYtMS44aDIyLjN2LTIyLjFjMC0xLjMsMC41LTEuOCwxLjYtMS44aDE1LjdjMS4xLDAsMS42LDAuNSwxLjYsMS44djIyLjFoMjIuM2MxLjEsMCwxLjYsMC41LDEuNiwxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTQxLjYsMzg5LjMtMTQxLjYsNDA0LjctMTQxLjYsNDA0Ljd6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjUuNSwzODcuNW'+
			'gyMi4zYzEuMSwwLDEuNiwwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTIyLjN2MjIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTE1LjdjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTIyLjFoLTIyLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMTUuNWMwLTEuMywwLjUtMS44LDEuNi0xLjhoMjIuM3YtMjIuMWMwLTEuMyww'+
			'LjUtMS44LDEuNi0xLjhoMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMSwwLDEuNiwwLjUsMS42LDEuOFYzODcuNXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTM3LjksNDA1LjZjMCwwLjYtMC4yLDEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMiwwLjZoLTI0Ljh2MjQuNmMwLDAuNi0wLjIsMS0wLjYsMS40cy0wLjgsMC42LTEuMiwwLjZoLTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42'+
			'LTEuNHYtMjQuNmgtMjQuOGMtMC40LDAtMC44LTAuMi0xLjItMC42cy0wLjYtMC44LTAuNi0xLjR2LTE3LjJjMC0xLjQsMC42LTIsMS44LTImI3hkOyYjeGE7JiN4OTsmI3g5O2gyNC44di0yNC42YzAtMS40LDAuNi0yLDEuOC0yaDE3LjRjMS4yLDAsMS44LDAuNiwxLjgsMnYyNC42aDI0LjhjMS4yLDAsMS44LDAuNiwxLjgsMkMtMTM3LjksMzg4LjQtMTM3LjksNDA1LjYtMTM3LjksNDA1LjZ6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjQuNSwzODYuNGgyNC44YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS'+
			'40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtMjQuOHYyNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjYtMC4yLDEtMC42LDEuNHMtMC44LDAuNi0xLjIsMC42aC0xNy40Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAuNC0wLjQtMC42LTAuOC0wLjYtMS40di0yNC42aC0yNC44Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC42LTAuOC0wLjYtMS40di0xNy4yYzAtMS40LDAuNi0yLDEuOC0yaDI0Ljh2LTI0LjZjMC0xLjQsMC42LTIsMS44LTJoMTcuNGMxLjIsMCwxLjgsMC42LDEuOCwyVjM4Ni40eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._button_zoom.appendChild(me._zoomin);
		me.divSkin.appendChild(me._button_zoom);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 9px;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTYuMSwzNzAuNGM1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40YzcuNywwLDE0LjksMi42LDIwLjYsN2wtNi40LDYuNGMtNC0yLjgtOC45LTQuNC0xNC4yLTQuNGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNiwwLjUtMS40LDAuNC0yLTAuMmMtMC41LTAuNS0zLjEtMy41LTQt'+
			'NC40Qy0xOTYuOSwzNzItMTk2LjgsMzcxLTE5Ni4xLDM3MC40eiBNLTIxNy4yLDM5N2MtMC41LDAtMC44LTAuMi0xLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjUtMC4yLTEsMC4xLTEuM2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC42YzAsNS4yLDEuNywxMC4xLDQuNSwxNC4xbC02LjQsNi40Yy00LjQtNS43LTctMTIuOC03LjEtMjAuNWgtMC41SC0yMTcuMnogTS0yMDcuMi'+
			'w0MzIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NmMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDLTIwNi40LDQzMi4yLTIwNi44LDQzMi4zLTIwNy4yLDQzMi4zeiBNLTE1My45LDQyMy4zYy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTcuNywwLTE0LjgtMi42LTIwLjUtNi45bDYuNC02LjRjNCwyLjcsOC44LDQuMywxNCw0LjNj'+
			'NS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUzLjEsNDIxLjgtMTUzLjIsNDIyLjgtMTUzLjksNDIzLjN6IE0tMTQ0LjUsNDE2LjljLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuN2MwLTUuMy0xLjYtMTAuMS00LjQtMTQuMmw2LjQtNi40YzQuNCw1LjcsNywxMi45LDcsMjAuNmgwLjVoNy43JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTtjMC41LDAsMC44LDAuMiwxLjEsMC43YzAuMywwLjUsMC4yLDEtMC4xLDEuM0wtMTQ0LjUsNDE2Ljl6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDIuOCwzNjEuN2MwLjQsMCwwLjgsMC4xLDEuMSwwLjRsMS43LDEuN2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2Yy0wLjMsMC4zLTAuNywwLjQtMS4xLDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NkMtMTQzLjYsMzYxLjgtMTQzLjIsMzYxLjctMTQyLjgs'+
			'MzYxLjciLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTIuMywzNzcuMWMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zYzUuMywwLDEwLjEsMS42LDE0LjIsNC40bDYuNC02LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy01LjctNC40LTEyLjktNy0yMC42LTdjLTgsMC0xNS4zLDIuOC0yMS4xLDcuNGMtMC43LDAuNS0wLjgsMS42LTAuMSwyLjNDLTE5NS40LDM3My43LTE5Mi44LDM3Ni42LTE5Mi4zLDM3Ny4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzMS43LDM5Ny43Yy0wLjMtMC41LTAuNi0wLjctMS4xLTAuN2'+
			'gtNy43aC0wLjVjMC03LjctMi42LTE0LjktNy0yMC42bC02LjQsNi40YzIuOCw0LDQuNCw4LjksNC40LDE0LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aC0wLjdoLTcuNmMtMC41LDAtMC44LDAuMi0xLjEsMC43Yy0wLjMsMC41LTAuMiwxLDAuMSwxLjNsMTIuOCwxNy44YzAuMywwLjQsMC42LDAuNiwxLDAuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjZsMTIuNy0xNy44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjYtMTMxLjQsMzk4LjItMTMxLjcsMzk3Ljd6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIwOSwzOTdjMC4xLDcuNywyLjcs'+
			'MTQuOCw3LjEsMjAuNWw2LjQtNi40Yy0yLjgtNC00LjUtOC44LTQuNS0xNC4xaDAuNmg3LjZjMC41LDAsMC44LTAuMiwxLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMtMC41LDAuMi0xLTAuMS0xLjNsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjUsMC42LDAuNywxLjEsMC43aDcuN0gtMjA5eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1Ny43LDQxNi42Yy0wLjYtMC42LTEuNC0wLjYtMi'+
			'0wLjJjLTQuMiwzLjMtOS41LDUuMy0xNS4zLDUuM2MtNS4yLDAtMTAtMS42LTE0LTQuM2wtNi40LDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNS43LDQuMywxMi44LDYuOSwyMC41LDYuOWM4LDAsMTUuMy0yLjgsMjEuMS03LjRjMC43LTAuNSwwLjgtMS42LDAuMS0yLjNDLTE1NC42LDQyMC4xLTE1Ny4yLDQxNy4xLTE1Ny43LDQxNi42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._stop_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTk4LjUsMzY3LjVjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmM4LjYsMCwxNi41LDIuOSwyMi45LDcuOGwtNy4yLDcuMmMtNC41LTMuMS05LjktNC45LTE1LjctNC45Yy02LjQsMC0xMi4zLDIuMi0xNyw1LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYt'+
			'My41LTMuOC00LjQtNC45Qy0xOTkuMywzNjkuMi0xOTkuMywzNjguMS0xOTguNSwzNjcuNXogTS0yMjEuOSwzOTdjLTAuNSwwLTAuOS0wLjItMS4yLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC41LTAuMi0xLjEsMC4xLTEuNWwxNC4xLTE5LjhjMC4zLTAuNCwwLjYtMC42LDEuMi0wLjZjMC40LDAsMC43LDAuMiwxLjEsMC42bDE0LjIsMTkuOGMwLjMsMC40LDAuNCwxLDAuMSwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMiwwLjdoLTguNWgtMC43YzAuMSw1LjgsMS45LDExLjIsNSwxNS42bC03LjEsNy4xYy00LjktNi4zLTcuOC0xNC4yLTcuOS0yMi44aC'+
			'0wLjZILTIyMS45eiBNLTIxMC43LDQzNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zQy0yMDkuOSw0MzYuMS0yMTAuMyw0MzYuMy0yMTAuNyw0MzYuM3ogTS0xNTEuNSw0MjYuM2MtNi40LDUuMS0xNC42LDguMi0yMy41LDguMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy04LjUsMC0xNi40LTIuOS0yMi44LTcuN2w3'+
			'LjItNy4yYzQuNCwzLDkuOCw0LjgsMTUuNiw0LjhjNi40LDAsMTIuMy0yLjIsMTctNS45YzAuNy0wLjUsMS42LTAuNCwyLjIsMC4yYzAuNiwwLjYsMy41LDMuOCw0LjQsNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE1MC43LDQyNC41LTE1MC43LDQyNS43LTE1MS41LDQyNi4zeiBNLTE0MS4xLDQxOS4xYy0wLjMsMC40LTAuNiwwLjYtMS4yLDAuNmMtMC40LDAtMC43LTAuMi0xLjEtMC42bC0xNC4yLTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMS0wLjEtMS41YzAuMy0wLjUsMC42LTAuNywxLjItMC43aDguNGgwLjdjMC01LjgtMS44LTExLjMtNC45LTE1LjdsNy4yLTcuMm'+
			'M0LjksNi40LDcuOCwxNC4zLDcuOCwyMi45aDAuNmg4LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM5LjMsMzU3LjdjMC40LDAsMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40'+
			'bDczLjMtNzMuM0MtMTQwLjEsMzU3LjktMTM5LjcsMzU3LjctMTM5LjMsMzU3LjciLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTQuMiwzNzQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWM1LjgsMCwxMS4zLDEuOCwxNS43LDQuOWw3LjItNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNi40LTQuOS0xNC4zLTcuOC0yMi45LTcuOGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yYy0wLjgsMC42LTAuOCwxLjgtMC4yLDIuNkMtMTk3LjcsMzcxLjEtMTk0LjgsMzc0LjQtMTk0LjIsMzc0Ljl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRk'+
			'ZGRkYiIGQ9Ik0tMTI2LjksMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTguNi0yLjktMTYuNS03LjgtMjIuOWwtNy4yLDcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMy4xLDQuNSw0LjksOS45LDQuOSwxNS43aC0wLjdoLTguNGMtMC41LDAtMC45LDAuMi0xLjIsMC43Yy0wLjMsMC41LTAuMiwxLjEsMC4xLDEuNWwxNC4yLDE5LjhjMC4zLDAuNCwwLjYsMC42LDEuMSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNSwwLDAuOS0wLjIsMS4yLTAuNmwxNC4xLTE5LjhDLTEyNi43LDM5OC44LTEyNi42LDM5OC4zLTEyNi45LDM5Ny43eiIvPgogIDwvZz4K'+
			'ICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0yMTIuNywzOTdjMC4xLDguNiwzLDE2LjUsNy45LDIyLjhsNy4xLTcuMWMtMy4xLTQuNC01LTkuOC01LTE1LjZoMC43aDguNWMwLjUsMCwwLjktMC4yLDEuMi0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMy0wLjUsMC4yLTEuMS0wLjEtMS41bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC42LTAuNi0xLjEtMC42Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMC41LDAuNiwwLjcsMS4yLDAuN2g4LjZILTIxMi43eiIvPgogIC'+
			'A8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1NS44LDQxOC44Yy0wLjYtMC42LTEuNS0wLjctMi4yLTAuMmMtNC43LDMuNy0xMC42LDUuOS0xNyw1LjljLTUuOCwwLTExLjEtMS44LTE1LjYtNC44bC03LjIsNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjMsNC44LDE0LjIsNy43LDIyLjgsNy43YzguOSwwLDE3LTMuMSwyMy41LTguMmMwLjgtMC42LDAuOC0xLjgsMC4yLTIuNkMtMTUyLjMsNDIyLjYtMTU1LjIsNDE5LjQtMTU1LjgsNDE4Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stop_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style[domTransition]='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.onmouseover=function (e) {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
		}
		me._stop_rotate_image.onmouseout=function (e) {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE1My45LDQyMy42Yy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40aDBjLTE4LjcsMC0zNC0xNS4yLTM0LTM0aC0wLjVoLTcuN2MtMC41LDAtMC44LTAuMi0xLjEtMC43Yy0wLjMtMC41LTAuMi0xLDAuMS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZj'+
			'MC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjNjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE3OSwzOTdjMC0yLjIsMS44LTQsNC00YzIuMiwwLDQsMS44LDQsNGMwLDIuMi0xLjgsNC00LDRDLTE3Ny4yLDQwMS0xNzksMzk5LjItMTc5LD'+
			'M5N3ogTS0xNDQuNSw0MTYuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC40LTAuNiwwLjYtMS4xLDAuNmMtMC40LDAtMC43LTAuMi0xLTAuNmwtMTIuOC0xNy44Yy0wLjMtMC40LTAuNC0wLjktMC4xLTEuM2MwLjMtMC41LDAuNi0wLjcsMS4xLTAuN2g3LjZoMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40aDBj'+
			'MTguNywwLDM0LDE1LjIsMzQsMzRoMC41aDcuN2MwLjUsMCwwLjgsMC4yLDEuMSwwLjdjMC4zLDAuNSwwLjIsMS0wLjEsMS4zTC0xNDQuNSw0MTYuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My43LDQyMS4zYy0wLjgtMC45LTMuNS0zLjktNC00LjRjLTAuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zaDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMTMuOCwwLTI1LTExLjItMjUtMjVoMC43aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjdjMC4zLTAuNSwwLjItMS0wLjEtMS4zbC0xMi44LTE3LjhjLTAuMy'+
			'0wLjQtMC42LTAuNi0xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjNjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43aDAuNWMwLDE4LjcsMTUuMiwzNCwzNCwzNGgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjOCwwLDE1LjMtMi44LDIxLjEtNy40Qy0xNTMuMiw0MjMuMS0xNTMuMSw0MjItMTUzLjcsNDIxLjN6Ii8+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzEuNywzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMS0wLjdoLTcuN2gtMC41YzAtMTguNy0xNS4yLTM0LTM0LTM0aDBjLTgsMC0x'+
			'NS4zLDIuOC0yMS4xLDcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM2MwLjgsMC45LDMuNSwzLjksNCw0LjRjMC42LDAuNiwxLjQsMC42LDIsMC4yYzQuMi0zLjMsOS41LTUuMywxNS4zLTUuM2gwYzEzLjgsMCwyNSwxMS4yLDI1LDI1aC0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjctMTMxLjQsMzk4Lj'+
			'ItMTMxLjcsMzk3Ljd6Ii8+CiAgPGNpcmNsZSByPSI0IiBjeT0iMzk3IiBmaWxsPSIjRkZGRkZGIiBjeD0iLTE3NSIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTE1MS41LDQyNi42Yy02LjQsNS4xLTE0LjYsOC4yLTIzLjUsOC4yaDBjLTIwLjgsMC0zNy43LTE2LjktMzcuNy0zNy43aC0wLjZoLTguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4yLTEuMi0wLjdjLTAuMy0wLjUtMC4yLTEuMSwwLjEtMS41bDE0LjEtMTkuOGMwLjMtMC40LDAu'+
			'Ni0wLjYsMS4yLTAuNmMwLjQsMCwwLjcsMC4yLDEuMSwwLjZsMTQuMiwxOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC40aC0wLjdjMCwxNS4zLDEyLjQsMjcuNywyNy43LDI3LjdoMGM2LjQsMCwxMi4zLTIuMiwxNy01LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOUMtMTUwLjcsNDI0LjgtMTUwLjcsNDI2LTE1MS41LDQyNi42eiBNLTE3OS40LDM5N2MwLTIuNCwyLTQuNCw0LjQtNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi40LDAsNC'+
			'40LDIsNC40LDQuNGMwLDIuNC0yLDQuNC00LjQsNC40Qy0xNzcuNCw0MDEuNC0xNzkuNCwzOTkuNS0xNzkuNCwzOTd6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTE1LjMtMTIuNC0yNy43LTI3LjctMjcuN2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuNCwwLTEyLjMsMi4yLTE3LDUuOWMtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYtMy41LTMuOC00LjQtNC45'+
			'Yy0wLjctMC44LTAuNi0yLDAuMi0yLjZjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMjAuOCwwLDM3LjcsMTYuOSwzNy43LDM3LjdoMC42aDguNmMwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLjQsNDI0Yy0wLjktMS0zLjktNC4zLTQuNC00LjljLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTE1LjMsMC0yNy'+
			'43LTEyLjQtMjcuNy0yNy43aDAuN2g4LjRjMC41LDAsMC45LTAuMiwxLjItMC43czAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41YzAuMywwLjUsMC42LDAuNywxLjIsMC43aDguNmgwLjZjMCwyMC44LDE2LjksMzcuNywzNy43LDM3LjdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzguOSwwLDE3LTMuMSwyMy41LTguMkMtMTUwLjcsNDI2LTE1MC43LDQyNC44LTE1MS40LDQyNHoiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZG'+
			'IiBkPSJNLTEyNi45LDM5Ny44Yy0wLjMtMC41LTAuNi0wLjctMS4yLTAuN2gtOC42aC0wLjZjMC0yMC44LTE2LjktMzcuNy0zNy43LTM3LjdoMGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOG'+
			'MwLjMsMC40LDAuNiwwLjYsMS4xLDAuNmMwLjUsMCwwLjktMC4yLDEuMi0wLjZsMTQuMS0xOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEyNi43LDM5OC45LTEyNi42LDM5OC4zLTEyNi45LDM5Ny44eiIvPgogIDxjaXJjbGUgcj0iNC40IiBjeT0iMzk3IiBmaWxsPSIjRkZGRkZGIiBjeD0iLTE3NSIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style[domTransition]='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.onmouseover=function (e) {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
		}
		me._start_rotate_image.onmouseout=function (e) {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		me.divSkin.appendChild(me._button_auto_rotate);
		el=me._ishome=document.createElement('div');
		el.ggId="isHome?";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 276px;';
		hs+='position : absolute;';
		hs+='top : 384px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ishome.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ishome.onclick=function (e) {
			player.setVariableValue('isHome', false);
			me._unmute.onclick.call(me._unmute);
		}
		me._ishome.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._ishome);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._dropdown_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._dropdown_scrollarea.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			if (
				(
					((player.getCurrentNode() != "node4")) && 
					((player.getCurrentNode() != "node1")) && 
					((player.getCurrentNode() != "node5"))
				)
			) {
				skin._pano_prev.style[domTransition]='none';
				skin._pano_prev.style.visibility=(Number(skin._pano_prev.style.opacity)>0||!skin._pano_prev.style.opacity)?'inherit':'hidden';
				skin._pano_prev.ggVisible=true;
			}
			if (
				(
					((player.getCurrentNode() != "node4")) && 
					((player.getCurrentNode() != "node2")) && 
					((player.getCurrentNode() != "node7"))
				)
			) {
				skin._pano_next.style[domTransition]='none';
				skin._pano_next.style.visibility=(Number(skin._pano_next.style.opacity)>0||!skin._pano_next.style.opacity)?'inherit':'hidden';
				skin._pano_next.ggVisible=true;
			}
			if (
				(
					((player.getCurrentNode() == "node1")) || 
					((player.getCurrentNode() == "node5"))
				)
			) {
				skin._pano_prev.style[domTransition]='none';
				skin._pano_prev.style.visibility='hidden';
				skin._pano_prev.ggVisible=false;
			}
			if (
				(
					((player.getCurrentNode() == "node2")) || 
					((player.getCurrentNode() == "node7"))
				)
			) {
				skin._pano_next.style[domTransition]='none';
				skin._pano_next.style.visibility='hidden';
				skin._pano_next.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('isHome') == true))
				)
			) {
				skin._ishome.onclick.call(skin._ishome);
			}
			if (
				(
					((player.getVariableValue('sound') == false))
				)
			) {
				skin._media_play.style[domTransition]='none';
				skin._media_play.style.visibility=(Number(skin._media_play.style.opacity)>0||!skin._media_play.style.opacity)?'inherit':'hidden';
				skin._media_play.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('sound') == false))
				)
			) {
				skin._media_pause.style[domTransition]='none';
				skin._media_pause.style.visibility='hidden';
				skin._media_pause.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('sound') == true))
				)
			) {
				skin._media_play.style[domTransition]='none';
				skin._media_play.style.visibility='hidden';
				skin._media_play.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('sound') == true))
				)
			) {
				skin._media_pause.style[domTransition]='none';
				skin._media_pause.style.visibility=(Number(skin._media_pause.style.opacity)>0||!skin._media_pause.style.opacity)?'inherit':'hidden';
				skin._media_pause.ggVisible=true;
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdm'+
			'Vyc2lvbj0iMS4wIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdm'+
			'Vyc2lvbj0iMS4wIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcmI3hhOyYjeDk7JiN4OTtjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdm'+
			'Vyc2lvbj0iMS4wIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style[domTransition]='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._hs_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style[domTransition]='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((me.hotspot.title != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((142-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_dropdown_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 169px; height: 24px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._dropdown_menu_text=document.createElement('div');
		els=me._dropdown_menu_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='background: #444444;';
		hs+='background: rgba(68,68,68,0.784314);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._dropdown_menu_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_text.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_text'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((me._dropdown_menu_text.ggIsActive() == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_text__text.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 1) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(68,68,68,0.784314)";
				}
			}
		}
		me._dropdown_menu_text.onclick=function (e) {
			if (
				(
					((me._dropdown_menu_text.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
			skin._dropdown_menu_title_background.onclick.call(skin._dropdown_menu_title_background);
			if (
				(
					((player.getCurrentNode() == "node4")) || 
					((player.getCurrentNode() == "node2")) || 
					((player.getCurrentNode() == "node7"))
				)
			) {
				skin._pano_next.style[domTransition]='none';
				skin._pano_next.style.visibility='hidden';
				skin._pano_next.ggVisible=false;
			}
			if (
				(
					((player.getCurrentNode() == "node4")) || 
					((player.getCurrentNode() == "node1")) || 
					((player.getCurrentNode() == "node5"))
				)
			) {
				skin._pano_prev.style[domTransition]='none';
				skin._pano_prev.style.visibility='hidden';
				skin._pano_prev.ggVisible=false;
			}
			if (
				(
					((player.getCurrentNode() != "node4")) && 
					((player.getCurrentNode() != "node1")) && 
					((player.getCurrentNode() != "node5"))
				)
			) {
				skin._pano_prev.style[domTransition]='none';
				skin._pano_prev.style.visibility=(Number(skin._pano_prev.style.opacity)>0||!skin._pano_prev.style.opacity)?'inherit':'hidden';
				skin._pano_prev.ggVisible=true;
			}
			if (
				(
					((player.getCurrentNode() != "node4")) && 
					((player.getCurrentNode() != "node2")) && 
					((player.getCurrentNode() != "node7"))
				)
			) {
				skin._pano_next.style[domTransition]='none';
				skin._pano_next.style.visibility=(Number(skin._pano_next.style.opacity)>0||!skin._pano_next.style.opacity)?'inherit':'hidden';
				skin._pano_next.ggVisible=true;
			}
		}
		me._dropdown_menu_text.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_text']=true;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._dropdown_menu_text__text)
					return;
				}
			}
			me.elementMouseOver['dropdown_menu_text']=false;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_text']=false;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_menu_text);
		el=me._dropdown_checkmark=document.createElement('div');
		els=me._dropdown_checkmark__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._dropdown_checkmark__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Checkmark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_checkmark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_checkmark.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.nodeVisited(me._dropdown_checkmark.ggElementNodeId()) == true)) || 
				((me._dropdown_checkmark.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dropdown_checkmark.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dropdown_checkmark.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dropdown_checkmark.style[domTransition]='opacity 0s';
				if (me._dropdown_checkmark.ggCurrentLogicStateAlpha == 0) {
					me._dropdown_checkmark.style.visibility=me._dropdown_checkmark.ggVisible?'inherit':'hidden';
					me._dropdown_checkmark.style.opacity=1;
				}
				else {
					me._dropdown_checkmark.style.visibility="hidden";
					me._dropdown_checkmark.style.opacity=0;
				}
			}
		}
		me._dropdown_checkmark.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_checkmark);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._stop_rotate_image.logicBlock_visible();
	me._start_rotate_image.logicBlock_visible();
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('autorotatechanged', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('mouseover', function(args) { me._dropdown_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._dropdown_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._dropdown_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged(); });
	player.addListener('varchanged_opt_3d_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};