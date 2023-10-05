// Garden Gnome Software - Skin
// Pano2VR 6.1.14/18105
// Filename: a.ggsk
// Generated 2023-10-05T13:55:04

function pano2vrSkin(player,base) {
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('vis_auto_hide_controller', 2, true);
	player.addVariable('isHome', 2, true);
	player.addVariable('sound', 2, true);
	player.addVariable('weather', 2, false);
	player.addVariable('filter_search', 2, false);
	player.addVariable('map', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('info_text_body', 0, "");
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, false);
	player.addVariable('vis_map', 2, false);
	player.addVariable('vis_map_close_desktop', 2, true);
	player.addVariable('vis_map_close_mobile', 2, true);
	player.addVariable('mapshow', 2, false);
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
		el=me._pano_next=document.createElement('div');
		els=me._pano_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3MC44LDM5OC44bC0zMS41LDIyYy0xLjQsMS0yLjYsMC40LTIuNi0xLjN2LTQ0LjljMC0xLjcsMS4xLTIuMywyLjYtMS4zbDMxLjUsMjImI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTY5LjMsMzk2LjItMTY5LjMsMzk3LjgtMTcwLjgsMzk4Ljh6IE0tMTMyLjksMzk4LjhsLTMx'+
			'LjUsMjJjLTEuNCwxLTIuNiwwLjQtMi42LTEuM3YtNDQuOWMwLTEuNywxLjItMi4zLDIuNi0xLjNsMzEuNSwyMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzEuNSwzOTYuMi0xMzEuNSwzOTcuOC0xMzIuOSwzOTguOHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjcsMzc0LjVjMC0xLjcsMS4yLTIuMywyLjYtMS4zbDMxLjUsMjJjMS40LDEsMS40LDIuNiwwLDMuNmwtMzEuNSwyMmMtMS40LDEtMi42LDAuNC0yLjYtMS4zVjM3NC41eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIwNC44LDM3NC41YzAtMS43LDEuMi'+
			'0yLjMsMi42LTEuM2wzMS41LDIyYzEuNCwxLDEuNCwyLjYsMCwzLjZsLTMxLjUsMjJjLTEuNCwxLTIuNiwwLjQtMi42LTEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTIwNC44LDM3NC41TC0yMDQuOCwzNzQuNXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Next";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_next.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pano_next.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
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
		me._pano_next.ggNodeChange=function () {
			if (
				(
					((player.getCurrentNode() == "node2")) || 
					((player.getCurrentNode() == "node7")) || 
					((player.getCurrentNode() == "node13")) || 
					((player.getCurrentNode() == "node18")) || 
					((player.getCurrentNode() == "node22")) || 
					((player.getCurrentNode() == "node25")) || 
					((player.getCurrentNode() == "node28")) || 
					((player.getCurrentNode() == "node30")) || 
					((player.getCurrentNode() == "node36")) || 
					((player.getCurrentNode() == "node4"))
				)
			) {
				me._pano_next.style[domTransition]='none';
				me._pano_next.style.visibility='hidden';
				me._pano_next.ggVisible=false;
			}
			if (
				(
					((player.getCurrentNode() != "node2")) && 
					((player.getCurrentNode() != "node7")) && 
					((player.getCurrentNode() != "node13")) && 
					((player.getCurrentNode() != "node18")) && 
					((player.getCurrentNode() != "node22")) && 
					((player.getCurrentNode() != "node25")) && 
					((player.getCurrentNode() != "node28")) && 
					((player.getCurrentNode() != "node30")) && 
					((player.getCurrentNode() != "node36")) && 
					((player.getCurrentNode() != "node4"))
				)
			) {
				me._pano_next.style[domTransition]='none';
				me._pano_next.style.visibility=(Number(me._pano_next.style.opacity)>0||!me._pano_next.style.opacity)?'inherit':'hidden';
				me._pano_next.ggVisible=true;
			}
		}
		me.divSkin.appendChild(me._pano_next);
		el=me._pano_prev=document.createElement('div');
		els=me._pano_prev__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE4Myw0MTkuNGMwLDEuNy0xLjIsMi4zLTIuNiwxLjNsLTMxLjUtMjJjLTEuNC0xLTEuNC0yLjYsMC0zLjZsMzEuNS0yMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNC0xLDIuNi0wLjQsMi42LDEuM0wtMTgzLDQxOS40TC0xODMsNDE5LjR6IE0tMTQ1LjIsNDE5LjRjMCwxLjct'+
			'MS4yLDIuMy0yLjYsMS4zbC0zMS41LTIyYy0xLjQtMS0xLjQtMi42LDAtMy42bDMxLjUtMjImI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjQtMSwyLjYtMC40LDIuNiwxLjNWNDE5LjR6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTgzLDQxOS40YzAsMS43LTEuMiwyLjMtMi42LDEuM2wtMzEuNS0yMmMtMS40LTEtMS40LTIuNiwwLTMuNmwzMS41LTIyYzEuNC0xLDIuNi0wLjQsMi42LDEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE4Myw0MTkuNEwtMTgzLDQxOS40eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLT'+
			'E0NS4yLDQxOS40YzAsMS43LTEuMiwyLjMtMi42LDEuM2wtMzEuNS0yMmMtMS40LTEtMS40LTIuNiwwLTMuNmwzMS41LTIyYzEuNC0xLDIuNi0wLjQsMi42LDEuM1Y0MTkuNHomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_prev__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Prev";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_prev.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pano_prev.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
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
		me._pano_prev.ggNodeChange=function () {
			if (
				(
					((player.getCurrentNode() == "node1")) || 
					((player.getCurrentNode() == "node5")) || 
					((player.getCurrentNode() == "node14")) || 
					((player.getCurrentNode() == "node19")) || 
					((player.getCurrentNode() == "node20")) || 
					((player.getCurrentNode() == "node26")) || 
					((player.getCurrentNode() == "node27")) || 
					((player.getCurrentNode() == "node31")) || 
					((player.getCurrentNode() == "node37")) || 
					((player.getCurrentNode() == "node4"))
				)
			) {
				me._pano_prev.style[domTransition]='none';
				me._pano_prev.style.visibility='hidden';
				me._pano_prev.ggVisible=false;
			}
			if (
				(
					((player.getCurrentNode() != "node1")) && 
					((player.getCurrentNode() != "node5")) && 
					((player.getCurrentNode() != "node14")) && 
					((player.getCurrentNode() != "node19")) && 
					((player.getCurrentNode() != "node20")) && 
					((player.getCurrentNode() != "node26")) && 
					((player.getCurrentNode() != "node27")) && 
					((player.getCurrentNode() != "node31")) && 
					((player.getCurrentNode() != "node37")) && 
					((player.getCurrentNode() != "node4"))
				)
			) {
				me._pano_prev.style[domTransition]='none';
				me._pano_prev.style.visibility=(Number(me._pano_prev.style.opacity)>0||!me._pano_prev.style.opacity)?'inherit':'hidden';
				me._pano_prev.ggVisible=true;
			}
		}
		me.divSkin.appendChild(me._pano_prev);
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8cGF0aCBmaW'+
			'xsPSIjRkZGRkZGIiBkPSJNLTE0My4yLDM4Ny41YzEuMSwwLDEuNiwwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjUmI3hkOyYjeGE7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjVjMC0xLjMsMC41LTEuOCwxLjYtMS44SC0xNDMuMnoiLz4KIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eiYj'+
			'eGQ7JiN4YTsmI3g5OyBNLTE0MS42LDQwNC43YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjVjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjUmI3hkOyYjeGE7JiN4OTtjMC0xLjMsMC41LTEuOCwxLjYtMS44aDYzLjVjMS4xLDAsMS42LDAuNSwxLjYsMS44VjQwNC43eiIvPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8cGF0aCBmaW'+
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
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE1My45LDQyMy42Yy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40aDBjLTE4LjcsMC0zNC0xNS4yLTM0LTM0aC0wLjVoLTcuN2MtMC41LDAtMC44LTAuMi0xLjEtMC43Yy0wLjMtMC41LTAuMi0xLDAuMS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZj'+
			'MC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjNjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE3OSwzOTdjMC0yLjIsMS44LTQsNC00YzIuMiwwLDQsMS44LDQsNGMwLDIuMi0xLjgsNC00LDRDLTE3Ny4yLDQwMS0xNzksMzk5LjItMTc5LD'+
			'M5N3ogTS0xNDQuNSw0MTYuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC40LTAuNiwwLjYtMS4xLDAuNmMtMC40LDAtMC43LTAuMi0xLTAuNmwtMTIuOC0xNy44Yy0wLjMtMC40LTAuNC0wLjktMC4xLTEuM2MwLjMtMC41LDAuNi0wLjcsMS4xLTAuN2g3LjZoMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40aDBj'+
			'MTguNywwLDM0LDE1LjIsMzQsMzRoMC41aDcuN2MwLjUsMCwwLjgsMC4yLDEuMSwwLjdjMC4zLDAuNSwwLjIsMS0wLjEsMS4zTC0xNDQuNSw0MTYuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My43LDQyMS4zYy0wLjgtMC45LTMuNS0zLjktNC00LjRjLTAuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zaDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMTMuOCwwLTI1LTExLjItMjUtMjVoMC43aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjdjMC4zLTAuNSwwLjItMS0wLjEtMS4zbC0xMi44LTE3LjhjLTAuMy'+
			'0wLjQtMC42LTAuNi0xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjNjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43aDAuNWMwLDE4LjcsMTUuMiwzNCwzNCwzNGgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjOCwwLDE1LjMtMi44LDIxLjEtNy40Qy0xNTMuMiw0MjMuMS0xNTMuMSw0MjItMTUzLjcsNDIxLjN6Ii8+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzEuNywzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMS0wLjdoLTcuN2gtMC41YzAtMTguNy0xNS4yLTM0LTM0LTM0aDBjLTgsMC0x'+
			'NS4zLDIuOC0yMS4xLDcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM2MwLjgsMC45LDMuNSwzLjksNCw0LjRjMC42LDAuNiwxLjQsMC42LDIsMC4yYzQuMi0zLjMsOS41LTUuMywxNS4zLTUuM2gwYzEzLjgsMCwyNSwxMS4yLDI1LDI1aC0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjctMTMxLjQsMzk4Lj'+
			'ItMTMxLjcsMzk3Ljd6Ii8+CiAgPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iLTE3NSIgcj0iNCIgY3k9IjM5NyIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTE1MS41LDQyNi42Yy02LjQsNS4xLTE0LjYsOC4yLTIzLjUsOC4yaDBjLTIwLjgsMC0zNy43LTE2LjktMzcuNy0zNy43aC0wLjZoLTguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4yLTEuMi0wLjdjLTAuMy0wLjUtMC4yLTEuMSwwLjEtMS41bDE0LjEtMTkuOGMwLjMtMC40LDAu'+
			'Ni0wLjYsMS4yLTAuNmMwLjQsMCwwLjcsMC4yLDEuMSwwLjZsMTQuMiwxOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC40aC0wLjdjMCwxNS4zLDEyLjQsMjcuNywyNy43LDI3LjdoMGM2LjQsMCwxMi4zLTIuMiwxNy01LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOUMtMTUwLjcsNDI0LjgtMTUwLjcsNDI2LTE1MS41LDQyNi42eiBNLTE3OS40LDM5N2MwLTIuNCwyLTQuNCw0LjQtNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi40LDAsNC'+
			'40LDIsNC40LDQuNGMwLDIuNC0yLDQuNC00LjQsNC40Qy0xNzcuNCw0MDEuNC0xNzkuNCwzOTkuNS0xNzkuNCwzOTd6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTE1LjMtMTIuNC0yNy43LTI3LjctMjcuN2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuNCwwLTEyLjMsMi4yLTE3LDUuOWMtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYtMy41LTMuOC00LjQtNC45'+
			'Yy0wLjctMC44LTAuNi0yLDAuMi0yLjZjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMjAuOCwwLDM3LjcsMTYuOSwzNy43LDM3LjdoMC42aDguNmMwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLjQsNDI0Yy0wLjktMS0zLjktNC4zLTQuNC00LjljLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTE1LjMsMC0yNy'+
			'43LTEyLjQtMjcuNy0yNy43aDAuN2g4LjRjMC41LDAsMC45LTAuMiwxLjItMC43czAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41YzAuMywwLjUsMC42LDAuNywxLjIsMC43aDguNmgwLjZjMCwyMC44LDE2LjksMzcuNywzNy43LDM3LjdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzguOSwwLDE3LTMuMSwyMy41LTguMkMtMTUwLjcsNDI2LTE1MC43LDQyNC44LTE1MS40LDQyNHoiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZG'+
			'IiBkPSJNLTEyNi45LDM5Ny44Yy0wLjMtMC41LTAuNi0wLjctMS4yLTAuN2gtOC42aC0wLjZjMC0yMC44LTE2LjktMzcuNy0zNy43LTM3LjdoMGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOG'+
			'MwLjMsMC40LDAuNiwwLjYsMS4xLDAuNmMwLjUsMCwwLjktMC4yLDEuMi0wLjZsMTQuMS0xOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEyNi43LDM5OC45LTEyNi42LDM5OC4zLTEyNi45LDM5Ny44eiIvPgogIDxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9Ii0xNzUiIHI9IjQuNCIgY3k9IjM5NyIvPgogPC9nPgo8L3N2Zz4K';
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
		el=me._button_2=document.createElement('div');
		els=me._button_2__img=document.createElement('img');
		els.className='ggskin ggskin_button_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_2__img.ggOverSrc=hs;
		el.ggId="Button 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_2.onclick=function (e) {
			player.enterVR();
		}
		me._button_2.onmouseover=function (e) {
			me._button_2__img.src=me._button_2__img.ggOverSrc;
		}
		me._button_2.onmouseout=function (e) {
			me._button_2__img.src=me._button_2__img.ggNormalSrc;
		}
		me._button_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_2);
		el=me._show_controller_button=document.createElement('div');
		els=me._show_controller_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTI0LjcgMTI0LjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMC'+
			'AwIDEyNC43IDEyNC43OyI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTEyLDQyLjFjLTIuMiwwLTQsMS44LTQsNHYzMi43YzAsMi4yLDEuOCw0LDQsNGgxMDAuOGMyLjIsMCw0LTEuOCw0LTRWNDZjMC0yLjItMS44LTQtNC00SDEyeiBNMzAuNCw3My43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuMywwLTExLjQtNS4xLTExLjQtMTEuNEMxOSw1Ni4xLDI0LjEsNTEsMzAuNCw1MWM2LjMsMCwxMS40LDUuMSwxMS40LDExLjRDNDEuOCw2OC42LDM2LjcsNzMuNywzMC40LDczLjd6IE02Mi40LDczLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNi4zLDAtMTEuNC01'+
			'LjEtMTEuNC0xMS40QzUxLDU2LjEsNTYuMSw1MSw2Mi40LDUxYzYuMywwLDExLjQsNS4xLDExLjQsMTEuNEM3My43LDY4LjYsNjguNiw3My43LDYyLjQsNzMuN3ogTTk0LjMsNzMuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qzg4LDczLjcsODMsNjguNiw4Myw2Mi40QzgzLDU2LjEsODgsNTEsOTQuMyw1MWM2LjMsMCwxMS40LDUuMSwxMS40LDExLjRDMTA1LjcsNjguNiwxMDAuNiw3My43LDk0LjMsNzMuN3oiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMzAuNCIgcj0iMTEuNCIgY3k9IjYyLjQiLz4KICAgPGNpcmNsZSBmaWxsPS'+
			'IjRkZGRkZGIiBjeD0iNjIuNCIgcj0iMTEuNCIgY3k9IjYyLjQiLz4KICAgPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iOTQuMyIgcj0iMTEuNCIgY3k9IjYyLjQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._show_controller_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._show_controller_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTI0LjcgMTI0LjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMC'+
			'AwIDEyNC43IDEyNC43OyI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTYuNCwzOS44Yy0yLjQsMC00LjQsMi00LjQsNC40djM2LjNjMCwyLjQsMiw0LjQsNC40LDQuNGgxMTJjMi40LDAsNC40LTIsNC40LTQuNFY0NC4yYzAtMi40LTItNC40LTQuNC00LjRINi40eiBNMjYuOSw3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy03LDAtMTIuNi01LjctMTIuNi0xMi42YzAtNyw1LjctMTIuNiwxMi42LTEyLjZjNywwLDEyLjYsNS43LDEyLjYsMTIuNkMzOS41LDY5LjMsMzMuOCw3NSwyNi45LDc1eiBNNjIuNCw3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy03LDAtMTIu'+
			'Ni01LjctMTIuNi0xMi42YzAtNyw1LjctMTIuNiwxMi42LTEyLjZjNywwLDEyLjYsNS43LDEyLjYsMTIuNkM3NSw2OS4zLDY5LjMsNzUsNjIuNCw3NXogTTk3LjksNzUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNywwLTEyLjYtNS43LTEyLjYtMTIuNmMwLTcsNS43LTEyLjYsMTIuNi0xMi42YzcsMCwxMi42LDUuNywxMi42LDEyLjZDMTEwLjUsNjkuMywxMDQuOCw3NSw5Ny45LDc1eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzJfMV8iPgogIDxnPgogICA8Y2lyY2xlIGNsYXNzPSJzdDAiIGZpbGw9IiNGRkZGRkYiIGN4PSIyNi45IiByPSIxMi42IiBjeT0iNjIuNCIvPgogICA8Y2lyY2xlIGNsYXNzPS'+
			'JzdDAiIGZpbGw9IiNGRkZGRkYiIGN4PSI2Mi40IiByPSIxMi42IiBjeT0iNjIuNCIvPgogICA8Y2lyY2xlIGNsYXNzPSJzdDAiIGZpbGw9IiNGRkZGRkYiIGN4PSI5Ny45IiByPSIxMi42IiBjeT0iNjIuNCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._show_controller_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="show_controller_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 207px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._show_controller_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._show_controller_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_auto_hide_controller') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._show_controller_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._show_controller_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._show_controller_button.style[domTransition]='opacity 500ms ease 0ms';
				if (me._show_controller_button.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._show_controller_button.style.opacity == 0.0) { me._show_controller_button.style.visibility="hidden"; } }, 505);
					me._show_controller_button.style.opacity=0;
				}
				else {
					me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
					me._show_controller_button.style.opacity=1;
				}
			}
		}
		me._show_controller_button.onclick=function (e) {
			me._hide_controller_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_controller_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._show_controller_button.onmouseover=function (e) {
			me._show_controller_button__img.style.visibility='hidden';
			me._show_controller_button__imgo.style.visibility='inherit';
		}
		me._show_controller_button.onmouseout=function (e) {
			me._show_controller_button__img.style.visibility='inherit';
			me._show_controller_button__imgo.style.visibility='hidden';
		}
		me._show_controller_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._hide_controller_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=5000;
		el.ggId="hide_controller_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_controller_timer.ggIsActive=function() {
			return (me._hide_controller_timer.ggTimestamp + me._hide_controller_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_controller_timer.ggActivate=function () {
			player.setVariableValue('vis_auto_hide_controller', true);
		}
		me._hide_controller_timer.ggDeactivate=function () {
			player.setVariableValue('vis_auto_hide_controller', false);
		}
		me._hide_controller_timer.ggUpdatePosition=function (useTransition) {
		}
		me._show_controller_button.appendChild(me._hide_controller_timer);
		me.divSkin.appendChild(me._show_controller_button);
		el=me._hide_controller_container=document.createElement('div');
		el.ggId="hide_controller_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_controller_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide_controller_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_auto_hide_controller') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hide_controller_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hide_controller_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hide_controller_container.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hide_controller_container.ggCurrentLogicStateAlpha == 0) {
					me._hide_controller_container.style.visibility=me._hide_controller_container.ggVisible?'inherit':'hidden';
					me._hide_controller_container.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hide_controller_container.style.opacity == 0.0) { me._hide_controller_container.style.visibility="hidden"; } }, 505);
					me._hide_controller_container.style.opacity=0;
				}
			}
		}
		me._hide_controller_container.onmouseover=function (e) {
			me.elementMouseOver['hide_controller_container']=true;
		}
		me._hide_controller_container.onmouseout=function (e) {
			me.elementMouseOver['hide_controller_container']=false;
		}
		me._hide_controller_container.ontouchend=function (e) {
			me.elementMouseOver['hide_controller_container']=false;
		}
		me._hide_controller_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_home=document.createElement('div');
		els=me._button_home__img=document.createElement('img');
		els.className='ggskin ggskin_button_home';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button home";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 288px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_home.ggIsActive=function() {
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
		me._button_home.onclick=function (e) {
			player.openNext("{node4}",player.hotspot.target);
			me._media_pause.style[domTransition]='none';
			me._media_pause.style.visibility='hidden';
			me._media_pause.ggVisible=false;
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
		}
		me._hide_controller_container.appendChild(me._button_home);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 12px;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 241px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
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
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHg9Ii0yMDYuMiIgZmlsbD0iIzAwMDAwMCIgeT0iMzk3IiB3aWR0aD0iMzIuMSIgaGVpZ2h0PSIyMi4yIi8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE2OC42LDQyMC4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtMzQuNWMtMi4zLDAtNC4yLTEuOS00LjItNC4ydi0yNC41YzAtMi4z'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHg9Ii0yMDkuNiIgZmlsbD0iIzAwMDAwMCIgeT0iMzk3IiB3aWR0aD0iMzUuNyIgaGVpZ2h0PSIyNC42Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNjcuOSw0MjIuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTM4LjNjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3Yt'+
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
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
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
		me._hide_controller_container.appendChild(me._button_fullscreen);
		el=me._media_controls=document.createElement('div');
		el.ggId="media_controls";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 12px;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 177px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media_controls.ggIsActive=function() {
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
		me._media_controls.ggUpdatePosition=function (useTransition) {
		}
		el=me._media_play=document.createElement('div');
		els=me._media_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNTAuNSwzOTguNmwtMzguMSwyNi42Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMlYzNzBjMC0xLjUsMS0yLjEsMi4zLTEuMmwzOC4yLDI2LjYmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTQ5LjMsMzk2LjMtMTQ5LjMsMzk3LjctMTUwLjUsMzk4LjZ6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJf'+
			'MiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTEsMzcwYzAtMS41LDEtMi4xLDIuMy0xLjJsMzguMiwyNi42YzEuMywwLjksMS4zLDIuMywwLDMuMmwtMzguMiwyNi42Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMlYzNzB6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._media_play__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._media_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 28px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 28px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE1My40LDQxNi4zYzAsMS4zLTEsMi4zLTIuMywyLjNoLTM4LjZjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTM4LjZjMC0xLjMsMS0yLjMsMi4zLTIuM2gzOC42YzEuMywwLDIuMywxLDIuMywyLjNWNDE2LjN6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0x'+
			'NTMuNCw0MTYuM2MwLDEuMy0xLDIuMy0yLjMsMi4zaC0zOC42Yy0xLjMsMC0yLjMtMS0yLjMtMi4zdi0zOC42YzAtMS4zLDEtMi4zLDIuMy0yLjNoMzguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMywwLDIuMywxLDIuMywyLjNWNDE2LjN6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._media_stop__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._media_stop__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
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
		me._hide_controller_container.appendChild(me._media_controls);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 12px;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 153px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_mute.ggIsActive=function() {
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
		me._button_mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
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
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
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
		me._hide_controller_container.appendChild(me._button_mute);
		me.divSkin.appendChild(me._hide_controller_container);
		el=me._closeall=document.createElement('div');
		el.ggId="close-all";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._closeall.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._closeall.onclick=function (e) {
			me._hide_weather.onclick.call(me._hide_weather);
			me._hide_map.onclick.call(me._hide_map);
		}
		me._closeall.ggUpdatePosition=function (useTransition) {
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._closeall);
		el=me._mapcontainer=document.createElement('div');
		el.ggId="map-container";
		el.ggDx=-1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mapcontainer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mapcontainer.ggUpdatePosition=function (useTransition) {
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._map1=document.createElement('div');
		els=me._map1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 70%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 77%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<iframe width=\"100%\" height=\"100%\" src=\"http:\/\/127.0.0.1:8000\/test.html\" frameborder=\"0\"><\/iframe>";
		el.appendChild(els);
		me._map1.ggIsActive=function() {
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
		me._map1.ggUpdatePosition=function (useTransition) {
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._mapcontainer.appendChild(me._map1);
		el=me._popup=document.createElement('div');
		els=me._popup__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 160px;';
		hs+='top : 62px;';
		hs+='visibility : hidden;';
		hs+='width : 176px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 178px;';
		hs+='height: 26px;';
		hs+='background: #d6d6d6;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="M\u1edf trong c\u1eeda s\u1ed5 m\u1edbi";
		el.appendChild(els);
		me._popup.ggIsActive=function() {
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
		me._popup.onclick=function (e) {
			player.openUrl("http:\/\/127.0.0.1:8000\/test.html","_blank");
		}
		me._popup.ggUpdatePosition=function (useTransition) {
		}
		me._mapcontainer.appendChild(me._popup);
		el=me._openmappopup=document.createElement('div');
		els=me._openmappopup__img=document.createElement('img');
		els.className='ggskin ggskin_openmappopup';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAAIACAYAAABjHw7RAAAWeElEQVR4nO3dPXIb157G4Ve2w5vLqQMo8B5UU1JwAyWqmk14A+QqpA04vMlEk6hmSiEZuOouwYGYTCgmzhxrArAlEAKJD/bB6e7/81R1USYp+eij8cM5fdB4FpJkdffx7d3HNxtf+zXJ8/MOhzu3Sf5M8vHuvz8kuek3HCZmlfU5O5yvzlXmaHicS9aPdc0f5561/MUnavvB4lXHsXC82yTv40lARZvnrvOWpbvOmZ4ILNEqyUWSqyRfHIs6Pt/93bJsqzh/HbWPq3xbmeYBwwPF5/T/C3Oc5/AEYHkE3+G4f3yOJwD3eJBwOCmWwbnscDx+lF4BGJbxzewdm8dVmKuL9P/343DM5ThppXOum/tWSX6PDT487DbJy9gUMydXcU7Dsa6TvD7mJ8wt/I'+
			'LPsV5E/KduleSPeCkenOqoic4PbccymuGa36eIPsf5FBv/pkz04emeZ/1Yd9B1/6nP+M3wGctl1q//ZzpEH8a3d5VzyuG/SPKu9yBYFMv+0yH60MbeZf8phl/waUn8p8FGPmjnNsnPD31xStf4h+v4ok9Lf/QeALmI6ENLz/PIy5p/PONAHnOR5H+S/NJ7ICzeP5L8R5J/9R5IUausz3WgrV+S/J3k39tfmMJSvyU/erDk38fnuK4P5/TdY13Ppf5V1g8Cok8PlvzP7yKiD+f2+/Ynei31D0v7/+j0/4d/5IFlMJqwxA99/JLkv5L8NXyix1K/pX2mZAqXuypw3kM/927re+6lfic/U+Oufu2t4ryHnl5l465+5wq/6/lMlfC397b3AIBv5+E5ljlXWd9DGKbKDv+27OSHaXiWtJ/xiz5zYEbaziqiD1OxStqGX/SZ'+
			'C8v97XhSBdPxNmkXftFnTp7nwLez5Ghveg8A+OoiaRN+0WeOzEzbsKEXpuN5Mn74h7faBLCKAtOzGjv83l+bubIkPT6rKDA9b8cM/1VEn/n6tfcAAM5hrPB7f23mzpNWoII3Y4T/Ism7EX4dYFlcPoEJemr4VxF9AJiNp4bfDn4AmJGnhP8irosCwKycGn5L/MA+H3sPAPjeqeF3Zz6W5rb3AADO4ZTwX40+Cujvz94DADiHY8O/itfrs0yWpcf3ofcAgO8dG367+IFD3fQeAPC9Y8JvFz9LZnbaxnXvAQD3HRp+u/hZstuYnbbiEgpMzKHh9y5bLNn73gNYMCspMDHPDvieVbx8j2V7ETP+lj7HZUKYiutDZvy/Nx8G9HMd0W/NigpMyL7we/keS+cadHvCDxOyL/yu7bNktxGlc7nsPQBgbV/47eRnyUT/fGzyg4'+
			'l4LPwXZxsFnJ/Z/nndxKwfJuGxXf124rJkdvL34XEF+npwV/8qTk6W6zKi38vL3gOA6n584PP/neSXcw4EzuQ2yX/2HkRhfyX5O8k/ew8Eivq/XTN+L+Fjycw4+3sf9/CHbnaF30v4WCrX9afjdcQfutgV/jdnHwW0J/rT81vWl16AM9oOv2V+lkj0p+km60sv4g9ntB1+y/wsjehP202Sn2PZH85mO/yW+VmK64j+nLyOG/zAWWzfwOdLl1HAuC7jrnxztUryR9xHBFq5dwOfVbdhwDiGWb7oz9ew9G/2D41sht/1febqNuvgv46l/aV4n/XfqWv/MLLN8Lu+z9wMM/yfI/hLdJP1k7kXsQIAo9m8xu/6PnNwneRj1m/zKvb1rLJenbyIfQBwiush/Kskn3qOZEa85vg8/rz7+PHuo9CzbXgSkHxbsfy101iq8yRs'+
			'Pr6G/yLJu54jmbBhiVF4AL5n4jgv1z/1HsFE3Wa9ucjucICHif4MDeG3se8brwEH2E/0Z2rY1e+62JroA+wn+jM2hN/GDNEHOIToz9wPcce+RPQBDiH6C7D9Jj0VXUf0AfYR/YX4IW7V+1vvAQBMnOgvSPUZ/2W8Nh/gMaK/MNXD/6H3AAAmTPQX6IfUfQ3/dcz2AR4i+gtVecb/cf+3AJQk+gtWOfwAfE/0F65y+F3fB7hP9AuoHH4AvhH9IoQfANEvRPgBalsl+aP3IDgf4Qeoa4i+N2orRPgBahL9ooQfoB7RL0z4AWoR/eKEH6AO0Uf4AYoQfZIIP0AFos9Xwg+wbKLPPcIPsFyiz3eEH2CZRJ+dhB9geUSfBwk/wPKIPg8SfoBl+RzR5xHCD7Acos9ewg+wDFcRfQ4g/ADzd5XkVe9BMA/CDzBvos9RhB9gvk'+
			'Sfowk/wDyJPicRfoD5EX1OJvwA8yL6PInwA8yH6PNkwg8wD6LPKIQfYPpEn9EIP8C0iT6jEn6A6RL9Nm6TvOg9iF6EH2CaRL+N2yQvew+iJ+EHmB7Rb2OI/k3vgfQk/ADTIvptiP4d4QeYDtFvQ/Q3CD/ANIh+G6K/RfgB+hP9NkR/B+EH6Ev02xD9Bwg/QD8XEf1WRP8BP/UeAEBRZvrtvIjoP8iMH+D8zPTbEf09hB/gvC6SvOs9iIUS/QMIP8D5iH47on8g4Qc4D9FvR/SPIPwA7Yl+O6J/JOEHaEv02xH9Ewg/QDui347on0j4AdoQ/XZE/wmEH2B8ot+O6D+R8AOMS/TbEf0RCD/AeES/HdEfifADjEP02xH9EQk/wNOJfjuiPzLhB3ga0W9H9BsQfoDTiX47ot+I8AOcRvTbEf2GhB/geKLfjug3JvwAxxH9'+
			'di4j+s0JP8DhRL+dyyTvew+iAuEHOIzotyP6ZyT8APuJfjuif2bCD/A40W9H9DsQfoCHiX47ot+J8APsJvrtiH5Hwg/wPdFvR/Q7E36A+1YR/VZEfwKEH+CbVZJPvQexUKI/EcIPsCb67Yj+hAg/gOi3JPoTI/xAdaLfjuhPkPADlYl+O6I/UcIPVCX67Yj+hAk/UJHotyP6Eyf8QDWi347oz4DwA5WIfjuiPxPCD1Qh+u2I/owIP1CB6Lcj+jMj/MDSiX47oj9Dwg8smei3I/ozJfzAUol+O6I/Y8IPLJHotyP6Myf8wNKIfjuivwDCDyyJ6Lcj+gsh/MBSiH471xH9xRB+YAlWSf7oPYiFuk7yuvcgGI/wA3M3RP9574EskOgvkPADcyb67Yj+Qgk/MFei347oL5jwA3Mk+u2I/sIJPzA3ot+O6Bcg/MCciH47ol'+
			'+E8ANzIfrtiH4hwg/Mgei3I/rFCD8wdaLfjugXJPzAlIl+O6JflPADUyX67Yh+YcIPTJHotyP6xQk/MEWi34boI/zA5HyO6Lcg+iQRfmBariL6LYg+Xwk/MBVXSV71HsQCiT73CD8wBaLfhujzHeEHehP9NkSfnYQf6En027iN6PMA4Qd6Ef02bpP83HsQTJfwAz2Ifhuiz17CD5yb6Ldxm+Rl70EwfcIPnJPotzFE/6b3QJg+4QfORfTbEH2OIvzAOYh+G6LP0YQfaE302xB9TiL8QEui34boczLhB1oR/TZEnycRfqAF0W9D9Hky4QfGJvptiD6jEH5gTKLfhugzGuEHxiL6bYg+oxJ+YAyi34boMzrhB55K9NsRfUYn/MBTXET0W3kR0acB4QdOdZHkXe9BLJTo04zwA6cQ/XZEn6aEHziW6Lcj+jQn/MAxRL8d'+
			'0ecshB84lOi3I/rnV/bPW/iBQ4h+O6LPOX0UfmAf0W9H9Pu67T2AHoQfeIzotyP6/f3ZewAdfBB+4CGi347oT8PH3gPo4Eb4gV1WEf1WRH86PvQewJndJpb6ge+tknzqPYiFEv1pqfZ38T4RfuB7v/cewEKJ/jRd9x7AGX1IhB+4z5vutCH601XpOv9NIvzAfa7rj0/0p+197wGcyeXwA+EHBhe9B7BAoj8Pl/u/Zfa+bmQUfiCxi78F0Z+Ppe/uv87Gv0XhB5Lkbe8BLIzoz8tNlj3r/23zP4QfSMz2x3QZ0Z+jpc767832E+EHXNsf02XqbBZbmqXO+n/b/oTwA296D2AhRH/+3mdZr+t/cPXpKsmXgsfq6D9CWKbe5+ISDqsmy7FK/39PYxxXD/0GzfihNk+An85Mf1mWsOR/m+T1Q18UfqjNbv6nEf1lep95x/'+
			'/lY18UfqjN9f3Tif6yzTX+e19KKvwAxxP9GuYW/4PvH2FzH9TV+zyc42EjXz0X6f/v7rHjc45smvBDXb3Pw7kdol/XVHf7X+XInlnqBziM5f3abrJeSr/uPZANl1nv3j/6TpFm/FDTVGcwUzzM9NnUe+n/6Fn+NuGHmoT/sEP0eci5nwB8zkj/HoUf6up9Hk79EH32WaX9E4CrjPxvUfihrt7n4ZQP0edYq4zX1GF2P3qrfhr7FwRm5TbJ896DmCAb+TjFTb7dKneVb3fGfJPk1zx8rt0m+TPJx7v//pDGb+1sxg91VT3/HzvM9Fk0L+eD2j7u/5ZSzPRZPOEHWBN9ShB+qO1D7wFMhOhThvBDbTdZbyyqTPQpRfiBytETfcoRfqDqcr/oU5LwAxWX+0WfsoQfSGpFUPQpr+oNPNzAB+7rfU66OQ+cgRk/MLjsPYDG'+
			'rmOmD8IPfPU+y73Wf51v91CH0oQf2PSy9wAaEH3YIPzAppssa8lf9GGL8APblrLkL/qwg/ADu8x9yV/04QHCD+xyk+RF70GcSPThEcIPPGSO8Rd92EP4gcfMKf6iDwcQfmCfOcT/MqIPBxF+4BBD/K97D2QH996HI7lXP3CMi/Q/f79k/djlPIYTCD9wrFX6PnZ4sx14AuEHTnXuJwCCDyMQfuCpWj4BuIrgw6iEHxjT8CTgc54ee+cpjOyn3gMAFucm919at0ry9u7Hb3Z8/8eNH3+4+/lAQ2b8AFCE1/EDQCHCDwCFCD8AFCL8AFCI8ANAIcIPAIUIPwAUIvwAUIjwA0Ahwg8AhQg/ABQi/ABQiPADQCHCDwCFCD8AFCL8AFCI8ANAIcIPAIUIPwAUIvwAUIjwA0Ahwg8AhQg/ABQi/ABQiPADQCHCDwCFCD8AFC'+
			'L8AFCI8ANAIcIPAIUIPwAUIvwAUIjwA0Ahwg8AhQg/ABQi/ABQiPADQCHCDwCFCD8AFCL8AFCI8ANAIcIPAIUIPwAUIvwAUIjwA0Ahwg8AhQg/ABQi/ABQiPADQCHCDwCFCD8AFCL8AFCI8ANAIcIPAIUIPwAUIvwAUIjwA0Ahwg8AhQg/ABQi/ABQiPADQCE/9R4AACzY6u7j2z3f9yHJTeOxfHWV5EvBY/jLAICxrJJc5PS2fr77uRctByn8AHC6IfafM36rrtKgV8IPAMcbgn+OZn3OiKsAwg8AxzlX8Js8ARB+ADjMKm2W9I89Tr4E4OV8AHCYiySfkjzvPZAkr7Iey9HxF34AeNwq6xn2u94D2eFTTlj6t9QPALtNZWn/kKX/g5jxA8Buq0xnaX+fVzkw/sIPAN8boj8nB8Vf+AHge3/0HsCJXmXPNX/hB4D7'+
			'rjKP5f2HvMsj8Rd+APjmIutZ89y9ywOb2IUfANZWmeZL9k71+65PCj8ArO0M5YztvN4v/ACwnCX+bcIPADuM9s53E/M8W7834QeguovMexf/Pvf2LQg/ANW96T2AM/g66xd+ACpbZZnX9rd9fXIj/ABU9rb3AM7kVe5e1y/8AFS21E19u7xNhB+AulZZ9qa+bW8S4QegrirL/INXifADQCUr4Qegqgov49v2VvgBqOrX3gPoQfgBqKrSxr6vhB8A6ngj/ABUtOo9gF6EHwAKEX4AKET4AaAQ4QeAQoQfAAoRfgAoRPgBoBDhB4BChB8AChF+AChE+AGgEOEHgEKEHwAKEX4AKET4AaAQ4QeAQoQfAAoRfgAoRPgBoBDhB4BChB8AChF+AChE+AGgEOEHgEKEHwAKEX4AKET4AaAQ4QeAQoQfAAoRfgAoRPgBoBDhB4'+
			'BChB8AChF+AChE+AGgEOEHgEKEHwAKEX4AKET4AaAQ4QeAQoQfAAoRfgAoRPgBoBDhB4BChB8AChF+AChE+AGgEOEHgEKEHwAKEX4AKET4AaAQ4QeAQoQfAAoRfgAoRPgBoBDhB4BChB8AChF+AChE+AGgEOEHgEKEHwAKEX4AKET4AaAQ4QeAQoQfAAoRfgAoRPgBoBDhB4BChB8AChF+AChE+AGgEOEHgEKEHwAKEX4AKET4AaAQ4QeAQoQfAAoRfgAoRPgBoBDhB4BChB8AChF+AChE+AGgEOEHgEKEHwAKEX4AKET4AaAQ4QeAQoQfAAoRfgAopHL43/YeAADdlG1A5fADQDmVw/+m9wAA6KZqAz7+kORj71F08irJqvcgADi7VdYNKKnyjD8pfI0HoLDSj/3Vw/8uZv0AlayyfuwvbZXkS+Hj6ul/hADMxFX6'+
			'd6fnsao+40/W13kueg8CgOYuUvja/uDZ3ccvXUcxDS+S3PQeBABNrJJ86j2ICXg2zPhvuw5jGj7FzB9giS4i+slW66tf89g8xB9gOS7SvytTOe7tafMHc//4HE8AAObsIuvH8t49mdJxkSQ/PeEPdcmeZ/1yj3dJLu8+9yH2AABM1SrfXp9f/uV6jxk299n0cDj7IQCm5XnvAczEiyQ3zzY+8aXXSACA5p4l9+/cd91pIABAW18bvxn+qm/WAwBL97Xxm0v9rvMDwDJ9vUnds60vuM4PAMvztffb9+p3nR8AluVe27fD7zo/ACzLvbZvL/W7zg8Ay3LvTei2Z/w3sdwPAEtxna27zm6HP7HcDwBL8V3Tt5f6E8v9ALAU95b5k90zfsv9ADB/3y3zJ7tn/IlZPwDM3Xez/eTh8Cfr9zH2jkcAMD+3SX7e9YVdS/2D92'+
			'3GAgA09mDDH5vxJ27hCwBz9GDfH5vxJ8nlyAMBANp6tN37Zvw2+QHAvOzc1DfYN+P30j4AmI/LPBL9ZP+MPzHrB4C5eHS2nyQ/HvCL/JXk7yT/HGNEAEATl0n+d983HTLjT8z6AWDq9s72k8Nm/IlZPwBM2UGz/eTwGf/A3fwAYFoevEvfLvt29W97eeT3AwBtHdXmY8Pv5X0AMB0734HvMccu9Q/cyhcA+ju648fO+Adu5QsAfZ3U4kN39W/7d+zyB4BeLnPiu+ieutQ/sMsfAM7rqF38205d6h/Y5Q8A5/Wk9p661D9wYx8AOJ+Db9TzkKeGP3G9HwDO4eTr+pueeo1/01WSVyP+egDA2nWS12P8QmOGP7HZDwDG9qTNfNueurlv28usBwgAPN1tRt5IP/aMP/EWvgAwloPeavcYLcKfiD8APNXo0U/ahT8RfwA4'+
			'VZPoJ23Dn4g/AByrWfST9uFPxB8ADtU0+sn4u/p3ucn6N2K3PwDsdpszRD85T/iT9W/k56xvQAAAfHOddSObRz85z1L/Nnf4A4C10e7Id6hzzfg3vc76fsMAUNllzhz9pM+Mf7BK8kfc4heAWoa78Z1laX9bjxn/wHV/AKo56/X8XXqGf2DpH4AKuiztb+u51L9tleT32PgHwLJcJ/ktHWf5m37sPYANfyX5V5K/k/yz81gAYAyXWUf/r94DGUxpxr/tIsm73oMAgBNcJnnfexC7TDn8ieV/AOZlUsv6u0w9/ANPAACYsskHfzCX8A88AQBgSmYT/MHcwj/wBACAnmYX/MFcwz9YJXmb9UZAdwAEoKXbrDfsfcgMgz+Ye/g3WQUAoIXZzu53WVL4Nw1PAn6NlQAAjnOb5M8sKPablhr+TcPlgDexGgDAbtdJPmbmy/'+
			'iHqBD+bZtPBBJPBgCqGSKfFAj9torh32V19/Ht3cc3G19zuQBgPoZl+sFm4JNikd/l/wH+F0Vj30IP2wAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="open-map-popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 163px;';
		hs+='top : 65px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._openmappopup.ggIsActive=function() {
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
		me._openmappopup.onclick=function (e) {
			player.openUrl("https:\/\/loudly-primary-piglet.ngrok-free.app\/webVR_war\/location\/"+me.ggUserdata.information,"_blank");
		}
		me._openmappopup.ggUpdatePosition=function (useTransition) {
		}
		me._mapcontainer.appendChild(me._openmappopup);
		el=me._hide_map=document.createElement('div');
		els=me._hide_map__img=document.createElement('img');
		els.className='ggskin ggskin_hide_map';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADVElEQVRoge2YzUtUURjGn3PvnTvTqEOOY/nBpAViOka5MCtiDC0wwoxwRDJbtAhaSX9Cq7YR9OXCjYHQLCTcGFiQLQWnRU4RlClklhmk+TH367QY0rnOXGfOzNwrwv3tzjnv+7zvwz2HmXMAGxsbm92E5JJMl14EoHEhACGsTdeAuKIQnAOk4vajfDSXqE9KOwKpYpgN6JomqN9c+BtJUBXlbM0Y6RNfR8peMzJg2HQiiQZ0FdKbyUSf2UBGTSdiZEBXTZRAXBEIwkM4/VMs+kYGBMMMyr3P7YSk0pREUKkZEpohVuV4AuNwuUvsLraB3WbPGzA+xHmGrspQXn2F8u476I9VAC9ByksgNNVCaD8JUuDKStcSA2p0EbGBCOiKlDgLOrMAaWYB8tgknP'+
			'1XwTccZtY2fQupn5awcX9yW/N66PIaNu4NQ/0wy6xvrgFJRexJBFC19LGKitiDEUBSmEqYuoXkiTnQPxsJ1RwQu29ACLYBFFAmxiGFhwBFBgDQ3yuQX0fgaG/KuIapX0CdWtCNxVAfHJdDIPu9IMVeODq7IYb69DmTH5lqmGpAm1/RjYWW80kxQssFfc7cT6Yaphqg0ra9T1MEafoYGmM7A6Ya4MrcurEyMZ4Uo7zVz3GVJUw1TD3EfJ0P2uzy5lgKD8WLBuNbKX6In+lzAlVMNUw1IJzxQx77sjWhyJCGByENDxrnBI8z1TB3C1UWga/NfEvw9VXgDh1gq8HaFCuOjprMY7uCzPqmG+DrfOCPpv8KfKAafKCaWd+Sv9NiTwDgdrg/EgLxevJvRCZYYoDzeyCc9RuuC60nwB0pz04726ZYEbvqQDzOpHnicUPsac1a'+
			'1zIDpMAB8Vry45p48yKIx50iIzMsvVIKTRXgG8s2x3xjDYTT6Z+cdsLyO7GztwGkwAFS6ILz1qWc9Sy7E/+HFLsg9h4DXNUg3qKc9Sw3AABCcwVQmPKxmZk9/6ySmwGKKCjuAmoA4sFzELwj4PYtp0/MQt8A9i1EEQUQBlGfk9Ir0W2rbwCAzj9tgSb3Q1tvg7buyaN+EsbP679Gt+5PiaK+9KI6HSMzhY2pm2bUNzawODoNIAxOC5OSzmkWUUPNb487ocl3oK2fgrv+c771bWxsbKznH05AGQrtjD8pAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hide map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 11px;';
		hs+='top : 111px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_map.ggIsActive=function() {
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
		me._hide_map.onclick=function (e) {
			me._hide_map.style[domTransition]='none';
			me._hide_map.style.visibility='hidden';
			me._hide_map.ggVisible=false;
			me._show_map.style[domTransition]='none';
			me._show_map.style.visibility=(Number(me._show_map.style.opacity)>0||!me._show_map.style.opacity)?'inherit':'hidden';
			me._show_map.ggVisible=true;
			me._map1.style[domTransition]='none';
			me._map1.style.visibility='hidden';
			me._map1.ggVisible=false;
			player.setVariableValue('map', false);
		}
		me._hide_map.ggUpdatePosition=function (useTransition) {
		}
		me._mapcontainer.appendChild(me._hide_map);
		el=me._show_map=document.createElement('div');
		els=me._show_map__img=document.createElement('img');
		els.className='ggskin ggskin_show_map';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADVElEQVRoge2YzUtUURjGn3PvnTvTqEOOY/nBpAViOka5MCtiDC0wwoxwRDJbtAhaSX9Cq7YR9OXCjYHQLCTcGFiQLQWnRU4RlClklhmk+TH367QY0rnOXGfOzNwrwv3tzjnv+7zvwz2HmXMAGxsbm92E5JJMl14EoHEhACGsTdeAuKIQnAOk4vajfDSXqE9KOwKpYpgN6JomqN9c+BtJUBXlbM0Y6RNfR8peMzJg2HQiiQZ0FdKbyUSf2UBGTSdiZEBXTZRAXBEIwkM4/VMs+kYGBMMMyr3P7YSk0pREUKkZEpohVuV4AuNwuUvsLraB3WbPGzA+xHmGrspQXn2F8u476I9VAC9ByksgNNVCaD8JUuDKStcSA2p0EbGBCOiKlDgLOrMAaWYB8tgknP'+
			'1XwTccZtY2fQupn5awcX9yW/N66PIaNu4NQ/0wy6xvrgFJRexJBFC19LGKitiDEUBSmEqYuoXkiTnQPxsJ1RwQu29ACLYBFFAmxiGFhwBFBgDQ3yuQX0fgaG/KuIapX0CdWtCNxVAfHJdDIPu9IMVeODq7IYb69DmTH5lqmGpAm1/RjYWW80kxQssFfc7cT6Yaphqg0ra9T1MEafoYGmM7A6Ya4MrcurEyMZ4Uo7zVz3GVJUw1TD3EfJ0P2uzy5lgKD8WLBuNbKX6In+lzAlVMNUw1IJzxQx77sjWhyJCGByENDxrnBI8z1TB3C1UWga/NfEvw9VXgDh1gq8HaFCuOjprMY7uCzPqmG+DrfOCPpv8KfKAafKCaWd+Sv9NiTwDgdrg/EgLxevJvRCZYYoDzeyCc9RuuC60nwB0pz04726ZYEbvqQDzOpHnicUPsac1a'+
			'1zIDpMAB8Vry45p48yKIx50iIzMsvVIKTRXgG8s2x3xjDYTT6Z+cdsLyO7GztwGkwAFS6ILz1qWc9Sy7E/+HFLsg9h4DXNUg3qKc9Sw3AABCcwVQmPKxmZk9/6ySmwGKKCjuAmoA4sFzELwj4PYtp0/MQt8A9i1EEQUQBlGfk9Ir0W2rbwCAzj9tgSb3Q1tvg7buyaN+EsbP679Gt+5PiaK+9KI6HSMzhY2pm2bUNzawODoNIAxOC5OSzmkWUUPNb487ocl3oK2fgrv+c771bWxsbKznH05AGQrtjD8pAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="show map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 11px;';
		hs+='top : 111px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._show_map.ggIsActive=function() {
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
		me._show_map.onclick=function (e) {
			me._map1.style[domTransition]='none';
			me._map1.style.visibility=(Number(me._map1.style.opacity)>0||!me._map1.style.opacity)?'inherit':'hidden';
			me._map1.ggVisible=true;
			me._hide_map.style[domTransition]='none';
			me._hide_map.style.visibility=(Number(me._hide_map.style.opacity)>0||!me._hide_map.style.opacity)?'inherit':'hidden';
			me._hide_map.ggVisible=true;
			me._show_map.style[domTransition]='none';
			me._show_map.style.visibility='hidden';
			me._show_map.ggVisible=false;
			me._hide_weather.onclick.call(me._hide_weather);
			me._closeall.style[domTransition]='none';
			me._closeall.style.visibility=(Number(me._closeall.style.opacity)>0||!me._closeall.style.opacity)?'inherit':'hidden';
			me._closeall.ggVisible=true;
			player.setVariableValue('map', true);
		}
		me._show_map.ggUpdatePosition=function (useTransition) {
		}
		me._mapcontainer.appendChild(me._show_map);
		me.divSkin.appendChild(me._mapcontainer);
		el=me._weather_container=document.createElement('div');
		el.ggId="weather_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 334px;';
		hs+='position : absolute;';
		hs+='right : 152px;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 448px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._weather_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._weather_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._weather=document.createElement('div');
		els=me._weather__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="weather";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 365px;';
		hs+='position : absolute;';
		hs+='right : -60px;';
		hs+='top : 18px;';
		hs+='visibility : hidden;';
		hs+='width : 448px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 20px;';
		hs+=cssPrefix + 'border-radius: 20px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="<iframe width=\"448\" height=\"335\" src=\"https:\/\/taib1910442.github.io\/DemoVR\/weather.html\" frameborder=\"0\"><\/iframe>";
		el.appendChild(els);
		me._weather.ggIsActive=function() {
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
		me._weather.ggUpdatePosition=function (useTransition) {
		}
		me._weather_container.appendChild(me._weather);
		el=me._show_weather=document.createElement('div');
		els=me._show_weather__img=document.createElement('img');
		els.className='ggskin ggskin_show_weather';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="show weather";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : -141px;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._show_weather.ggIsActive=function() {
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
		me._show_weather.onclick=function (e) {
			me._weather.style[domTransition]='none';
			me._weather.style.visibility=(Number(me._weather.style.opacity)>0||!me._weather.style.opacity)?'inherit':'hidden';
			me._weather.ggVisible=true;
			me._show_weather.style[domTransition]='none';
			me._show_weather.style.visibility='hidden';
			me._show_weather.ggVisible=false;
			me._hide_weather.style[domTransition]='none';
			me._hide_weather.style.visibility=(Number(me._hide_weather.style.opacity)>0||!me._hide_weather.style.opacity)?'inherit':'hidden';
			me._hide_weather.ggVisible=true;
			me._closeall.style[domTransition]='none';
			me._closeall.style.visibility=(Number(me._closeall.style.opacity)>0||!me._closeall.style.opacity)?'inherit':'hidden';
			me._closeall.ggVisible=true;
			me._hide_map.onclick.call(me._hide_map);
		}
		me._show_weather.ggUpdatePosition=function (useTransition) {
		}
		me._weather_container.appendChild(me._show_weather);
		el=me._hide_weather=document.createElement('div');
		els=me._hide_weather__img=document.createElement('img');
		els.className='ggskin ggskin_hide_weather';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hide weather";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : -141px;';
		hs+='top : 46px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_weather.ggIsActive=function() {
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
		me._hide_weather.onclick=function (e) {
			me._weather.style[domTransition]='none';
			me._weather.style.visibility='hidden';
			me._weather.ggVisible=false;
			me._hide_weather.style[domTransition]='none';
			me._hide_weather.style.visibility='hidden';
			me._hide_weather.ggVisible=false;
			me._show_weather.style[domTransition]='none';
			me._show_weather.style.visibility=(Number(me._show_weather.style.opacity)>0||!me._show_weather.style.opacity)?'inherit':'hidden';
			me._show_weather.ggVisible=true;
			me._closeall.style[domTransition]='none';
			me._closeall.style.visibility='hidden';
			me._closeall.ggVisible=false;
		}
		me._hide_weather.ggUpdatePosition=function (useTransition) {
		}
		me._weather_container.appendChild(me._hide_weather);
		me.divSkin.appendChild(me._weather_container);
		el=me._lichtrinh=document.createElement('div');
		el.ggId="lich-trinh";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 42px;';
		hs+='position : absolute;';
		hs+='right : 12px;';
		hs+='top : 166px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lichtrinh.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._lichtrinh.onclick=function (e) {
			player.openUrl("http:\/\/127.0.0.1:8000\/gpt.html","_blank");
		}
		me._lichtrinh.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._lichtrinh);
		el=me._filtersearchtint=document.createElement('div');
		el.ggId="filter-search-tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.490196);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._filtersearchtint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._filtersearchtint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('filter_search') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._filtersearchtint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._filtersearchtint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._filtersearchtint.style[domTransition]='';
				if (me._filtersearchtint.ggCurrentLogicStateVisible == 0) {
					me._filtersearchtint.style.visibility=(Number(me._filtersearchtint.style.opacity)>0||!me._filtersearchtint.style.opacity)?'inherit':'hidden';
					me._filtersearchtint.ggVisible=true;
				}
				else {
					me._filtersearchtint.style.visibility="hidden";
					me._filtersearchtint.ggVisible=false;
				}
			}
		}
		me._filtersearchtint.onclick=function (e) {
			player.setVariableValue('filter_search', !player.getVariableValue('filter_search'));
		}
		me._filtersearchtint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._filtersearchtint);
		el=me._filtersearchframe=document.createElement('div');
		els=me._filtersearchframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="filter-search-frame";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 61px;';
		hs+='height : 260px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 260px;';
		hs+='background: #8c8c8c;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="font-family: \'Muli\', sans-serif;";
		els.setAttribute('style',hs);
		els.innerHTML="<IFRAME src=\"https:\/\/taib1910442.github.io\/searchBox\/\" width=\"100%\" height=\"100%\" frameborder=\"no\" scrolling=\"no\" ><\/IFRAME>";
		el.appendChild(els);
		me._filtersearchframe.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._filtersearchframe.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('filter_search') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._filtersearchframe.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._filtersearchframe.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._filtersearchframe.style[domTransition]='';
				if (me._filtersearchframe.ggCurrentLogicStateVisible == 0) {
					me._filtersearchframe.style.visibility=(Number(me._filtersearchframe.style.opacity)>0||!me._filtersearchframe.style.opacity)?'inherit':'hidden';
					me._filtersearchframe.ggVisible=true;
				}
				else {
					me._filtersearchframe.style.visibility="hidden";
					me._filtersearchframe.ggVisible=false;
				}
			}
		}
		me._filtersearchframe.ggUpdatePosition=function (useTransition) {
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
		me.divSkin.appendChild(me._filtersearchframe);
		el=me._stationsearchbutton=document.createElement('div');
		els=me._stationsearchbutton__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzUgMz'+
			'U7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtzdHJva2U6IzRhNGE0YTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjIuNiw1LjhDMTgsMS4yLDEwLjUsMS4yLDUuOCw1LjhjLTQuNiw0LjYtNC42LDEyLjEsMCwxNi43YzQuMSw0LjEsMTAuNSw0LjUsMTUuMSwxLjMmI3hhOyYjeDk7YzAuMSwwLjUsMC4zLDAuOSwwLjcsMS4zbDYuNyw2LjdjMSwxLDIuNiwxLDMuNSwwYzEtMSwxLTIuNiwwLTMuNWwtNi43LTYuN2MtMC40LTAuNC0wLjgtMC42LTEuMy0wLjdDMjcuMSwxNi4zLDI2LjcsMTAsMjIuNiw1Ljh6'+
			'JiN4YTsmI3g5OyBNMjAuNSwyMC41Yy0zLjQsMy40LTksMy40LTEyLjUsMEM0LjUsMTcsNC41LDExLjQsOCw4YzMuNC0zLjQsOS0zLjQsMTIuNSwwQzIzLjksMTEuNCwyMy45LDE3LDIwLjUsMjAuNXoiLz4KPC9zdmc+Cg==';
		me._stationsearchbutton__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="station-search-button";
		el.ggDx=28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 7px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stationsearchbutton.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._stationsearchbutton.onclick=function (e) {
			player.setVariableValue('filter_search', !player.getVariableValue('filter_search'));
		}
		me._stationsearchbutton.ggUpdatePosition=function (useTransition) {
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
		el=me._closex=document.createElement('div');
		els=me._closex__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="close-x";
		el.ggDx=-2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 21px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="X";
		el.appendChild(els);
		me._closex.ggIsActive=function() {
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
		me._closex.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('filter_search') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._closex.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._closex.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._closex.style[domTransition]='';
				if (me._closex.ggCurrentLogicStateVisible == 0) {
					me._closex.style.visibility=(Number(me._closex.style.opacity)>0||!me._closex.style.opacity)?'inherit':'hidden';
					me._closex.ggVisible=true;
				}
				else {
					me._closex.style.visibility="hidden";
					me._closex.ggVisible=false;
				}
			}
		}
		me._closex.ggUpdatePosition=function (useTransition) {
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._stationsearchbutton.appendChild(me._closex);
		me.divSkin.appendChild(me._stationsearchbutton);
		el=me._map_pin_active0=document.createElement('div');
		els=me._map_pin_active0__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 127px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_pin_active0.onclick=function (e) {
			player.setVariableValue('mapshow', true);
			me._map_close.style[domTransition]='none';
			me._map_close.style.visibility=(Number(me._map_close.style.opacity)>0||!me._map_close.style.opacity)?'inherit':'hidden';
			me._map_close.ggVisible=true;
		}
		me._map_pin_active0.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active0']=true;
			me._map_pin_tt0.logicBlock_alpha();
		}
		me._map_pin_active0.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active0']=false;
			me._map_pin_tt0.logicBlock_alpha();
		}
		me._map_pin_active0.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active0']=false;
			me._map_pin_tt0.logicBlock_alpha();
		}
		me._map_pin_active0.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_tt0=document.createElement('div');
		els=me._map_pin_tt0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggDx=72;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._map_pin_tt0.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_pin_tt0.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_pin_tt0.ggUpdateText();
		});
		el.appendChild(els);
		me._map_pin_tt0.ggIsActive=function() {
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
		me._map_pin_tt0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_pin_tt0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_tt0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_tt0.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt0.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -38;
					me._map_pin_tt0.ggUpdatePosition(true);
				}
				else {
					me._map_pin_tt0.ggDx=72;
					me._map_pin_tt0.ggDy=5;
					me._map_pin_tt0.ggUpdatePosition(true);
				}
			}
		}
		me._map_pin_tt0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['map_pin_active0'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_tt0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_tt0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_tt0.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt0.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_tt0.style.visibility=me._map_pin_tt0.ggVisible?'inherit':'hidden';
					me._map_pin_tt0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_tt0.style.opacity == 0.0) { me._map_pin_tt0.style.visibility="hidden"; } }, 505);
					me._map_pin_tt0.style.opacity=0;
				}
			}
		}
		me._map_pin_tt0.ggUpdatePosition=function (useTransition) {
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._map_pin_active0.appendChild(me._map_pin_tt0);
		me.divSkin.appendChild(me._map_pin_active0);
		el=me._mappin=document.createElement('div');
		el.ggId="mappin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 66px;';
		hs+='height : 174px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mappin.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mappin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_close=document.createElement('div');
		els=me._map_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQt'+
			'MC40NjctMS42OTEsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy'+
			'42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTtjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLT'+
			'AuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4'+
			'Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEu'+
			'MjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTFjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwQzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTT'+
			'I0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OUM2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYs'+
			'NC41NTYtMi45NTksNy4xNDgtMi45NmMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0yMS4xMzIsMTkuNDM5TD'+
			'E3LjY5MywxNmwzLjQzOS0zLjQ0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0'+
			'LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OSYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="map_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -36px;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_close.ggIsActive=function() {
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
		me._map_close.onclick=function (e) {
			me._map_close.style[domTransition]='none';
			me._map_close.style.visibility='hidden';
			me._map_close.ggVisible=false;
			player.setVariableValue('mapshow', false);
		}
		me._map_close.onmouseover=function (e) {
			me._map_close__img.style.visibility='hidden';
			me._map_close__imgo.style.visibility='inherit';
		}
		me._map_close.onmouseout=function (e) {
			me._map_close__img.style.visibility='inherit';
			me._map_close__imgo.style.visibility='hidden';
		}
		me._map_close.ggUpdatePosition=function (useTransition) {
		}
		me._mappin.appendChild(me._map_close);
		el=me._map0=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='bottom : -4px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -263px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map0.ggIsActive=function() {
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
		me._map0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('mapshow') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('mapshow') == false))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map0.style[domTransition]='left 1000ms ease 0ms, bottom 1000ms ease 0ms';
				if (me._map0.ggCurrentLogicStatePosition == 0) {
					me._map0.style.left='0px';
					me._map0.style.bottom='-4px';
				}
				else if (me._map0.ggCurrentLogicStatePosition == 1) {
					me._map0.style.left='-263px';
					me._map0.style.bottom='-4px';
				}
				else {
					me._map0.style.left='-263px';
					me._map0.style.bottom='-4px';
				}
			}
		}
		me._map0.ggCurrentLogicStatePosition = -1;
		me._map0.ggUpdateConditionTimer=function () {
			me._map0.ggRadar.update();
		}
		me._map0.ggUpdatePosition=function (useTransition) {
		}
		me._map0.ggNodeChange=function () {
			if (me._map0.ggLastActivMarker) {
				if (me._map0.ggLastActivMarker._div.ggDeactivate) me._map0.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map0.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map0.ggLastActivMarker=marker;
			}
			if (!me._map0.ggMapNotLoaded) {
				me._map0.ggCenterNode();
			}
			if (player.getMapType(me._map0.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map0.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map0.ggChangeMap(mapId);
					}
				}
			}
			me._map0.ggLastNodeId = id;
		}
		me._mappin.appendChild(me._map0);
		me.divSkin.appendChild(me._mappin);
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style[domTransition]='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 457px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 901px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
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
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_img=document.createElement('div');
		els=me._info_text_img__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_text_img.ggUpdateText=function() {
			var hs="<iframe src=\"http:\/\/localhost:8080\/webVR_war\/info\/"+me.ggUserdata.information+""+player.getVariableValue('info_text_body')+"\" width=\"100%\" height=\"100%\" frameborder= \"0\" ><\/iframe>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_img.ggUpdateText();
		player.addListener('timer', function() {
			me._info_text_img.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_img.ggIsActive=function() {
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
		me._info_text_img.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_img);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQt'+
			'MC40NjctMS42OTEsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy'+
			'42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTtjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLT'+
			'AuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4'+
			'Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEu'+
			'MjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTFjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwQzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTT'+
			'I0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OUM2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYs'+
			'NC41NTYtMi45NTksNy4xNDgtMi45NmMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0yMS4xMzIsMTkuNDM5TD'+
			'E3LjY5MywxNmwzLjQzOS0zLjQ0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0'+
			'LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OSYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
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
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me.divSkin.appendChild(me._information);
		el=me._info_locations=document.createElement('div');
		el.ggId="info_locations";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : 106px;';
		hs+='position : absolute;';
		hs+='top : 106px;';
		hs+='visibility : hidden;';
		hs+='width : 50.86%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_locations.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_locations.ggUpdatePosition=function (useTransition) {
		}
		el=me._infolocationbg=document.createElement('div');
		el.ggId="infolocationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._infolocationbg.ggIsActive=function() {
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
		me._infolocationbg.ggUpdatePosition=function (useTransition) {
		}
		me._info_locations.appendChild(me._infolocationbg);
		el=me._info_location=document.createElement('div');
		els=me._info_location__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_location";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_location.ggUpdateText=function() {
			var hs="<iframe src=\"http:\/\/localhost:8080\/webVR_war\/info\/"+me.ggUserdata.information+"\" width=\"100%\" height=\"100%\" frameborder= \"0\" ><\/iframe>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_location.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_location.ggUpdateText();
		});
		el.appendChild(els);
		me._info_location.ggIsActive=function() {
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
		me._info_location.ggUpdatePosition=function (useTransition) {
		}
		me._info_locations.appendChild(me._info_location);
		el=me._ht_info_close2=document.createElement('div');
		els=me._ht_info_close2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQt'+
			'MC40NjctMS42OTEsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy'+
			'42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTtjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLT'+
			'AuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4'+
			'Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEu'+
			'MjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTFjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwQzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTT'+
			'I0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OUM2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYs'+
			'NC41NTYtMi45NTksNy4xNDgtMi45NmMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0yMS4xMzIsMTkuNDM5TD'+
			'E3LjY5MywxNmwzLjQzOS0zLjQ0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0'+
			'LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OSYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 715px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close2.ggIsActive=function() {
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
		me._ht_info_close2.onclick=function (e) {
			me._ht_info_close2.style[domTransition]='none';
			me._ht_info_close2.style.visibility='hidden';
			me._ht_info_close2.ggVisible=false;
			me._info_locations.style[domTransition]='none';
			me._info_locations.style.visibility='hidden';
			me._info_locations.ggVisible=false;
			me._button_info.style[domTransition]='none';
			me._button_info.style.visibility=(Number(me._button_info.style.opacity)>0||!me._button_info.style.opacity)?'inherit':'hidden';
			me._button_info.ggVisible=true;
		}
		me._ht_info_close2.onmouseover=function (e) {
			me._ht_info_close2__img.style.visibility='hidden';
			me._ht_info_close2__imgo.style.visibility='inherit';
		}
		me._ht_info_close2.onmouseout=function (e) {
			me._ht_info_close2__img.style.visibility='inherit';
			me._ht_info_close2__imgo.style.visibility='hidden';
		}
		me._ht_info_close2.ggUpdatePosition=function (useTransition) {
		}
		me._info_locations.appendChild(me._ht_info_close2);
		me.divSkin.appendChild(me._info_locations);
		el=me._button_info=document.createElement('div');
		els=me._button_info__img=document.createElement('img');
		els.className='ggskin ggskin_button_info';
		hs=basePath + 'images/button_info.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 249px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_info.onclick=function (e) {
			me._info_locations.style[domTransition]='none';
			me._info_locations.style.visibility=(Number(me._info_locations.style.opacity)>0||!me._info_locations.style.opacity)?'inherit':'hidden';
			me._info_locations.ggVisible=true;
			me._ht_info_close2.style[domTransition]='none';
			me._ht_info_close2.style.visibility=(Number(me._ht_info_close2.style.opacity)>0||!me._ht_info_close2.style.opacity)?'inherit':'hidden';
			me._ht_info_close2.ggVisible=true;
			me._button_info.style[domTransition]='none';
			me._button_info.style.visibility='hidden';
			me._button_info.ggVisible=false;
		}
		me._button_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_info);
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.501961);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 16px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_background.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_background.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_background.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_background.style[domTransition]='opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateAlpha == 0) {
					me._menu_background.style.visibility=me._menu_background.ggVisible?'inherit':'hidden';
					me._menu_background.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_background.style.opacity == 0.0) { me._menu_background.style.visibility="hidden"; } }, 505);
					me._menu_background.style.opacity=0;
				}
			}
		}
		me._menu_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_scroller=document.createElement('div');
		els=me._node_scroller__content=document.createElement('div');
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
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 149.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._node_scroller.ggScrollByX = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosX = (me._node_scroller__horScrollFg.offsetLeft + diffX);
			me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
			me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosX / (me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__content.style.left = -(Math.round((me._node_scroller.ggContentWidth * (1.0 - me._node_scroller.ggHPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
		}
		me._node_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._node_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._node_scroller.ggScrollPosX >= me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth)) {
					me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._node_scroller.ggScrollPosX <= 0)) {
					me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosX / (me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__content.style.left = -(Math.round((me._node_scroller.ggContentWidth * (1.0 - me._node_scroller.ggHPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._node_scroller.ggScrollByY = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosY = (me._node_scroller__vertScrollFg.offsetTop + diffY);
			me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
			me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
		}
		me._node_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._node_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._node_scroller.ggScrollPosY >= me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight)) {
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._node_scroller.ggScrollPosY <= 0)) {
					me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._node_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._node_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._node_scroller.clientWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller.clientWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0))) * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller.clientHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller.clientHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0))) * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._node_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaX *= 0.65;
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByX(me._node_scroller.ggDragInertiaX);
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._node_scroller__content.ontouchend = null;
				me._node_scroller__content.ontouchmove = null;
				me._node_scroller__content.onpointerup = null;
				me._node_scroller__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._node_scroller__content.onpointerup = me._node_scroller__content.ontouchend;
		}
			me._node_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._node_scroller.ggDragLastX) * me._node_scroller.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY) * me._node_scroller.ggVPercentVisible;
				me._node_scroller.ggDragInertiaX = -diffX;
				me._node_scroller.ggDragInertiaY = -diffY;
				me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByX(-diffX);
				me._node_scroller.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._node_scroller__content.onpointermove = me._node_scroller__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._node_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 600px; background-color: rgba(0,0,0,0.12549); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 600px; background-color: rgba(255,255,255,0.25098); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._node_scroller.ggScrollPosY = 0;
		me._node_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._node_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
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
				var diffY = (t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByY(diffY);
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
			var diffY = me._node_scroller.ggScrollHeight;
			if (e.offsetY < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._node_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._node_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._node_scroller.ggScrollByYSmooth(30 * me._node_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._node_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100%  -  50px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_scroller.ggIsActive=function() {
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
		me._node_scroller.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._node_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._node_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._node_scroller__vertScrollBg.style.visibility = 'inherit';
					me._node_scroller__vertScrollFg.style.visibility = 'inherit';
					me._node_scroller.ggVertScrollVisible = true;
				} else {
					me._node_scroller__vertScrollBg.style.visibility = 'hidden';
					me._node_scroller__vertScrollFg.style.visibility = 'hidden';
					me._node_scroller.ggVertScrollVisible = false;
				}
				if(me._node_scroller.ggVertScrollVisible) {
					me._node_scroller.ggAvailableWidth = me._node_scroller.clientWidth - 15;
					if (me._node_scroller.ggHorScrollVisible) {
						me._node_scroller.ggAvailableHeight = me._node_scroller.clientHeight - 15;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height - me._node_scroller__vertScrollBg.getBoundingClientRect().width;
						me._node_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._node_scroller.ggAvailableHeight = me._node_scroller.clientHeight;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height;
						me._node_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._node_scroller__vertScrollBg.style.height = me._node_scroller.ggAvailableHeight + 'px';
					me._node_scroller.ggVPercentVisible = contentHeight != 0 ? me._node_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._node_scroller.ggVPercentVisible > 1.0) me._node_scroller.ggVPercentVisible = 1.0;
					me._node_scroller.ggScrollHeight =  Math.round(me._node_scroller__vertScrollBg.offsetHeight * me._node_scroller.ggVPercentVisible);
					me._node_scroller__vertScrollFg.style.height = me._node_scroller.ggScrollHeight + 'px';
					me._node_scroller.ggScrollPosY = me._node_scroller.ggScrollPosYPercent * me._node_scroller.ggAvailableHeight;
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
					if (me._node_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
						me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._node_scroller.ggAvailableWidth = me._node_scroller.clientWidth;
					me._node_scroller.ggScrollPosY = 0;
					me._node_scroller.ggScrollPosYPercent = 0.0;
					me._node_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._node_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._node_scroller.ggHorScrollVisible || vertScrollWasVisible != me._node_scroller.ggVertScrollVisible) {
					me.updateSize(me._node_scroller);
					me._node_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner=document.createElement('div');
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 140;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
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
				parameter.top=(row * me._node_cloner.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
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
			me._node_cloner.callChildLogicBlocks_changenode();
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_changevisitednodes();
			me._node_cloner.callChildLogicBlocks_activehotspotchanged();
			me._node_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip();
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner.ggIsActive=function() {
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
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
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
		me._node_cloner.ggUpdatePosition=function (useTransition) {
				me._node_cloner.ggUpdate();
		}
		me._node_cloner.ggNodeChange=function () {
			me._node_cloner.ggUpdateConditionNodeChange();
		}
		me._node_scroller__content.appendChild(me._node_cloner);
		me._menu_background.appendChild(me._node_scroller);
		me.divSkin.appendChild(me._menu_background);
		el=me._menu_open=document.createElement('div');
		els=me._menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBmaWxsPSIjZmZmZmZmIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMz'+
			'I7IiBoZWlnaHQ9IjMycHgiIGZpbGwtb3BhY2l0eT0iMSI+CiA8cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz4KPC9zdmc+Cg==';
		me._menu_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_open.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStatePosition == 0) {
					me._menu_open.style.left='130px';
					me._menu_open.style.top='5px';
				}
				else {
					me._menu_open.style.left='21px';
					me._menu_open.style.top='11px';
				}
			}
		}
		me._menu_open.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_open);
		el=me._button_toggle_map=document.createElement('div');
		el.ggId="button_toggle_map";
		el.ggDx=-69;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 9px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_toggle_map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_toggle_map.onclick=function (e) {
			player.setVariableValue('vis_map', !player.getVariableValue('vis_map'));
		}
		me._button_toggle_map.ggUpdatePosition=function (useTransition) {
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
		el=me._button_open_map=document.createElement('div');
		els=me._button_open_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTI4LjQ5OSwxNS4zNDRsLTcuNjQsMS45ODNWOS4yNDJsNy42NC0xLjkwNVYxNS4zNDR6IE0xOS44MzYsOS4yMjl2Ny45MzNsLTcuNjczLTMuODMzVjUuNDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTIuMTYzLDUuNDE2LDE5Ljc3OCw5LjIwOSwxOS44MzYsOS4yMjl6IE0xMS4xNDEsNS4xNTV2OC4wOTJMMy41LDE1LjE2NlY3LjA2TDExLjE0MSw1LjE1'+
			'NXogTTMuNSwxNi4yMmw3LjY0MS0xLjkxOXY4LjMyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjA0NSwwLjAwOCwwLjA5LDAuMDE5LDAuMTMyTDMuNSwyNC42NjJWMTYuMjJ6IE0xMi4zMzUsMjIuODM4Yy0wLjA2My0wLjAzMi0wLjEyNy0wLjA1OC0wLjE5NC0wLjA4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMTItMC4wNDQsMC4wMjEtMC4wOSwwLjAyMS0wLjEzN3YtOC4xNDlsNy42NzMsMy44MzJ2OC4yODFMMTIuMzM1LDIyLjgzOHogTTIwLjg1OSwyNi44NDZ2LTguNDYybDcuNjQtMS45ODJMMjguNSwyNC45NCYjeGQ7JiN4YTsmI3g5OyYjeDk7TDIwLjg1OSwyNi44NDZ6Ii8+CiA8L2c+CiA8Zy'+
			'BmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMjguNDk5LDE1LjM0NGwtNy42NCwxLjk4M1Y5LjI0Mmw3LjY0LTEuOTA1VjE1LjM0NHogTTE5LjgzNiw5LjIyOXY3LjkzM2wtNy42NzMtMy44MzNWNS40MTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MxMi4xNjMsNS40MTYsMTkuNzc4LDkuMjA5LDE5LjgzNiw5LjIyOXogTTExLjE0MSw1LjE1NXY4LjA5MkwzLjUsMTUuMTY2VjcuMDZMMTEuMTQxLDUuMTU1eiBNMy41LDE2LjIybDcuNjQxLTEuOTE5djguMzImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuMDQ1LDAuMDA4LDAuMDksMC4wMTks'+
			'MC4xMzJMMy41LDI0LjY2MlYxNi4yMnogTTEyLjMzNSwyMi44MzhjLTAuMDYzLTAuMDMyLTAuMTI3LTAuMDU4LTAuMTk0LTAuMDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAxMi0wLjA0NCwwLjAyMS0wLjA5LDAuMDIxLTAuMTM3di04LjE0OWw3LjY3MywzLjgzMnY4LjI4MUwxMi4zMzUsMjIuODM4eiBNMjAuODU5LDI2Ljg0NnYtOC40NjJsNy42NC0xLjk4MkwyOC41LDI0Ljk0JiN4ZDsmI3hhOyYjeDk7JiN4OTtMMjAuODU5LDI2Ljg0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_open_map__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_open_map__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMjguNDk5LDE1LjM0NGwtNy42NCwxLjk4M1Y5LjI0Mmw3LjY0LTEuOTA1VjE1LjM0NHogTTE5LjgzNiw5LjIyOXY3LjkzM2wtNy42NzMtMy44MzNWNS40MTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MxMi4xNjMsNS40MTYsMTkuNzc4LDkuMjA5LDE5'+
			'LjgzNiw5LjIyOXogTTExLjE0MSw1LjE1NXY4LjA5MkwzLjUsMTUuMTY2VjcuMDZMMTEuMTQxLDUuMTU1eiBNMy41LDE2LjIybDcuNjQxLTEuOTE5djguMzImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuMDQ1LDAuMDA4LDAuMDksMC4wMTksMC4xMzJMMy41LDI0LjY2MlYxNi4yMnogTTEyLjMzNSwyMi44MzhjLTAuMDYzLTAuMDMyLTAuMTI3LTAuMDU4LTAuMTk0LTAuMDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAxMi0wLjA0NCwwLjAyMS0wLjA5LDAuMDIxLTAuMTM3di04LjE0OWw3LjY3MywzLjgzMnY4LjI4MUwxMi4zMzUsMjIuODM4eiBNMjAuODU5LDI2Ljg0NnYtOC40NjJsNy42NC0xLjk4Mk'+
			'wyOC41LDI0Ljk0JiN4ZDsmI3hhOyYjeDk7JiN4OTtMMjAuODU5LDI2Ljg0NnoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPHBhdGggZD0iTTI4LjQ5OSwxNS4zNDRsLTcuNjQsMS45ODNWOS4yNDJsNy42NC0xLjkwNVYxNS4zNDR6IE0xOS44MzYsOS4yMjl2Ny45MzNsLTcuNjczLTMuODMzVjUuNDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTIuMTYzLDUuNDE2LDE5Ljc3OCw5LjIwOSwxOS44MzYsOS4yMjl6IE0xMS4x'+
			'NDEsNS4xNTV2OC4wOTJMMy41LDE1LjE2NlY3LjA2TDExLjE0MSw1LjE1NXogTTMuNSwxNi4yMmw3LjY0MS0xLjkxOXY4LjMyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjA0NSwwLjAwOCwwLjA5LDAuMDE5LDAuMTMyTDMuNSwyNC42NjJWMTYuMjJ6IE0xMi4zMzUsMjIuODM4Yy0wLjA2My0wLjAzMi0wLjEyNy0wLjA1OC0wLjE5NC0wLjA4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMTItMC4wNDQsMC4wMjEtMC4wOSwwLjAyMS0wLjEzN3YtOC4xNDlsNy42NzMsMy44MzJ2OC4yODFMMTIuMzM1LDIyLjgzOHogTTIwLjg1OSwyNi44NDZ2LTguNDYybDcuNjQtMS45ODJMMjguNSwyNC45NCYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7TDIwLjg1OSwyNi44NDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_open_map__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_open_map";
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
		me._button_open_map.ggIsActive=function() {
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
		me._button_open_map.onmouseover=function (e) {
			me._button_open_map__img.style.visibility='hidden';
			me._button_open_map__imgo.style.visibility='inherit';
			me.elementMouseOver['button_open_map']=true;
			me._tt_togglemap.logicBlock_visible();
		}
		me._button_open_map.onmouseout=function (e) {
			me._button_open_map__img.style.visibility='inherit';
			me._button_open_map__imgo.style.visibility='hidden';
			me.elementMouseOver['button_open_map']=false;
			me._tt_togglemap.logicBlock_visible();
		}
		me._button_open_map.ontouchend=function (e) {
			me.elementMouseOver['button_open_map']=false;
			me._tt_togglemap.logicBlock_visible();
		}
		me._button_open_map.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_togglemap=document.createElement('div');
		els=me._tt_togglemap__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_togglemap";
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
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_togglemap.ggIsActive=function() {
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
		me._tt_togglemap.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_togglemap.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_togglemap.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_togglemap.style[domTransition]='left 0s, top 0s';
				if (me._tt_togglemap.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_togglemap.style.top='-25px';
					me._tt_togglemap.ggUpdatePosition(true);
				}
				else {
					me._tt_togglemap.ggDx=0;
					me._tt_togglemap.style.top='32px';
					me._tt_togglemap.ggUpdatePosition(true);
				}
			}
		}
		me._tt_togglemap.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_open_map'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_togglemap.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_togglemap.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_togglemap.style[domTransition]='left 0s, top 0s';
				if (me._tt_togglemap.ggCurrentLogicStateVisible == 0) {
					me._tt_togglemap.style.visibility=(Number(me._tt_togglemap.style.opacity)>0||!me._tt_togglemap.style.opacity)?'inherit':'hidden';
					me._tt_togglemap.ggVisible=true;
				}
				else {
					me._tt_togglemap.style.visibility="hidden";
					me._tt_togglemap.ggVisible=false;
				}
			}
		}
		me._tt_togglemap.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_map') == false))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_togglemap.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_togglemap.ggCurrentLogicStateText = newLogicStateText;
				me._tt_togglemap.style[domTransition]='left 0s, top 0s';
				if (me._tt_togglemap.ggCurrentLogicStateText == 0) {
					me._tt_togglemap.ggText="Close Map";
					me._tt_togglemap__text.innerHTML=me._tt_togglemap.ggText;
					if (me._tt_togglemap.ggUpdateText) {
					me._tt_togglemap.ggUpdateText=function() {
						var hs="Close Map";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_togglemap.ggUpdatePosition) me._tt_togglemap.ggUpdatePosition();
					}
				}
				else if (me._tt_togglemap.ggCurrentLogicStateText == 1) {
					me._tt_togglemap.ggText="Open Map";
					me._tt_togglemap__text.innerHTML=me._tt_togglemap.ggText;
					if (me._tt_togglemap.ggUpdateText) {
					me._tt_togglemap.ggUpdateText=function() {
						var hs="Open Map";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_togglemap.ggUpdatePosition) me._tt_togglemap.ggUpdatePosition();
					}
				}
				else {
					me._tt_togglemap.ggText="";
					me._tt_togglemap__text.innerHTML=me._tt_togglemap.ggText;
					if (me._tt_togglemap.ggUpdateText) {
					me._tt_togglemap.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_togglemap.ggUpdatePosition) me._tt_togglemap.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_togglemap.ggUpdatePosition=function (useTransition) {
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
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_open_map.appendChild(me._tt_togglemap);
		me._button_toggle_map.appendChild(me._button_open_map);
		el=me._button_close_map=document.createElement('div');
		els=me._button_close_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuMCI+CiAgPHBhdGggb3BhY2l0eT0iMS4wIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTEzOS4zLDM1Ny44YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjktMC4yLTEuMi0wLjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjNDLTE0MC4xLDM1OC0xMzkuNywzNTcuOC0xMzkuMywzNTcuOCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiLz4KPC9zdmc+'+
			'Cg==';
		me._button_close_map__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_close_map";
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
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_close_map.ggIsActive=function() {
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
		me._button_close_map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_close_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_close_map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_close_map.style[domTransition]='';
				if (me._button_close_map.ggCurrentLogicStateVisible == 0) {
					me._button_close_map.style.visibility=(Number(me._button_close_map.style.opacity)>0||!me._button_close_map.style.opacity)?'inherit':'hidden';
					me._button_close_map.ggVisible=true;
				}
				else {
					me._button_close_map.style.visibility="hidden";
					me._button_close_map.ggVisible=false;
				}
			}
		}
		me._button_close_map.ggUpdatePosition=function (useTransition) {
		}
		me._button_toggle_map.appendChild(me._button_close_map);
		me.divSkin.appendChild(me._button_toggle_map);
		el=me._map_screentint=document.createElement('div');
		el.ggId="map_screentint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.686275);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_screentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_screentint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_screentint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_screentint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_screentint.style[domTransition]='';
				if (me._map_screentint.ggCurrentLogicStateVisible == 0) {
					me._map_screentint.style.visibility=(Number(me._map_screentint.style.opacity)>0||!me._map_screentint.style.opacity)?'inherit':'hidden';
					me._map_screentint.ggVisible=true;
				}
				else {
					me._map_screentint.style.visibility="hidden";
					me._map_screentint.ggVisible=false;
				}
			}
		}
		me._map_screentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._map_screentint);
		el=me._map_container=document.createElement('div');
		el.ggId="map_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100%  - 100px);';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100%  - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_container.style[domTransition]='';
				if (me._map_container.ggCurrentLogicStateVisible == 0) {
					me._map_container.style.visibility=(Number(me._map_container.style.opacity)>0||!me._map_container.style.opacity)?'inherit':'hidden';
					me._map_container.ggVisible=true;
				}
				else {
					me._map_container.style.visibility="hidden";
					me._map_container.ggVisible=false;
				}
			}
		}
		me._map_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._map=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map.ggIsActive=function() {
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
		me._map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map.style[domTransition]='';
				if (me._map.ggCurrentLogicStateVisible == 0) {
					me._map.style.visibility=(Number(me._map.style.opacity)>0||!me._map.style.opacity)?'inherit':'hidden';
					if (me._map.ggMapNotLoaded) {
						me._map.ggInitMap(false);
						me._map.ggInitMapMarkers(true);
					}
					me._map.ggVisible=true;
				}
				else {
					me._map.style.visibility="hidden";
					me._map.ggVisible=false;
				}
			}
		}
		me._map.ggCurrentLogicStateVisible = -1;
		me._map.ggUpdateConditionTimer=function () {
			me._map.ggRadar.update();
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		me._map.ggNodeChange=function () {
			if (me._map.ggLastActivMarker) {
				if (me._map.ggLastActivMarker._div.ggDeactivate) me._map.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map.ggLastActivMarker=marker;
			}
			if (!me._map.ggMapNotLoaded) {
				me._map.ggCenterNode();
			}
			if (player.getMapType(me._map.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map.ggChangeMap(mapId);
					}
				}
			}
			me._map.ggLastNodeId = id;
		}
		me._map_container.appendChild(me._map);
		el=me._close=document.createElement('div');
		els=me._close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQt'+
			'MC40NjctMS42OTEsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy'+
			'42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTtjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLT'+
			'AuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4'+
			'Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEu'+
			'MjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTFjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwQzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTT'+
			'I0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OUM2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYs'+
			'NC41NTYtMi45NTksNy4xNDgtMi45NmMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0yMS4xMzIsMTkuNDM5TD'+
			'E3LjY5MywxNmwzLjQzOS0zLjQ0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0'+
			'LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OSYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -40px;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close.ggIsActive=function() {
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
		me._close.onclick=function (e) {
			player.setVariableValue('vis_map', false);
		}
		me._close.onmouseover=function (e) {
			me._close__img.style.visibility='hidden';
			me._close__imgo.style.visibility='inherit';
		}
		me._close.onmouseout=function (e) {
			me._close__img.style.visibility='inherit';
			me._close__imgo.style.visibility='hidden';
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me._map_container.appendChild(me._close);
		me.divSkin.appendChild(me._map_container);
		me._map0.ggMarkerInstances=[];
		me._map0.ggMapId = 'googlehybrid';
		me._map0.ggLastNodeId=null;
		me._map0.ggMarkerArray=[];
		me._map0.ggGoogleMarkerArray=[];
		me._map0.ggLastZoom = -1;
		me._map0.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map0.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map0.ggRadar;
			var map=me._map0.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map0.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map0.ggMapId);
				pan -= me._map0.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map0.ggFilteredIds.length > 0 && me._map0.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 1.05469;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#ff7a59',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#ff7a59',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		me._map0.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map0.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map0.ggInitMap=function(keepZoom) {
			me._map0.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._map0.ggMapId);
			var mapDetails = player.getMapDetails(me._map0.ggMapId);
			if (mapType == 'file') {
				me._map0.style.backgroundColor = mapDetails['bgcolor'];
				me._map0.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map0.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map0.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map0.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map0.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map0.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map0.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map0.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map0.ggLastZoom == -1) me._map0.ggLastZoom = 16;
				var initZoom = keepZoom ? me._map0.ggLastZoom : 16;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					disableDefaultUI: true,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map0.ggMap = new google.maps.Map(me._map0, mapOptions);
				if (mapTypeId == 'googlecustomstyle') {
					var styledMapType = new google.maps.StyledMapType(JSON.parse(mapDetails['googlecustomstylecode']), {name: 'Styled Map'});
					me._map0.ggMap.mapTypes.set('styled_map', styledMapType);
					me._map0.ggMap.setMapTypeId('styled_map');
				}
				if (mapTypeId == 'openstreetmap') {
					me._map0.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'https://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					me._map0.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['styleurl'] == '') {
								if (mapDetails['mapstyle'] == 'satellite') {
									return 'https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] + '/' + zoom + '/' + coord.x + '/' + coord.y + '@2x.png?access_token=' + mapDetails['mapkey'];
								} else {
									return 'https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] + '-v11/tiles/256/' + zoom + '/' + coord.x + '/' + coord.y + '@2x?access_token=' + mapDetails['mapkey'];
								}
							} else {
								var styleurlstring = mapDetails['styleurl'];
								styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
								return 'https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/' + zoom + '/' + coord.x + '/' + coord.y + '@2x?access_token=' + mapDetails['mapkey'];
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: 18
					}));
				}
				if (mapTypeId == 'custom') {
					me._map0.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							var urlString = mapDetails['mapurltemplate'];
							urlString = urlString.replace('{s}', 'a');
							urlString = urlString.replace('{z}', zoom);
							urlString = urlString.replace('{x}', coord.x);
							urlString = urlString.replace('{y}', coord.y);
							return urlString;
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapmaxzoom']
					}));
				}
			} else if (mapType == 'file') {
				if (me._map0.ggLastZoom == -1) me._map0.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map0.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					disableDefaultUI: true,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map0.ggMap = new google.maps.Map(me._map0, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map0.ggTileAvailable(coord.x, coord.y, zoom)) {
							return basePath + 'images/maptiles/' + me._map0.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map0.ggMap.mapTypes.set(me._map0.ggMapId, customMapType);
				me._map0.ggMap.setMapTypeId(me._map0.ggMapId);
				me._map0.ggCalculateFloorplanDimInDeg(mapDetails);
				google.maps.event.addListener(me._map0.ggMap, 'center_changed', function() {
					me._map0.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map0.ggMap, 'zoom_changed', function() {
					me._map0.ggCheckBounds(mapDetails);
				});
			}
		}
		me._map0.ggClearMap=function() {
		me._map0.ggMap = null;
		me._map0.ggClearMapMarkers();
		me._map0.ggMapNotLoaded = true;
		}
		me._map0.ggClearMapMarkers=function() {
			me._map0.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map0.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.setMap(null);
				}
			}
			me._map0.ggGoogleMarkerArray=[];
		}
		me._map0.ggCenterNode=function() {
			if (!me._map0.ggMap) return;
			var gps;
			if (player.getMapType(me._map0.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map0.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map0.ggMap.panTo(markerLocation);
			}
		}
		me._map0.ggFitBounds=function(force) {
			if (me._map0.ggMapNotLoaded) return;
			if (!me._map0.ggMarkerBounds.isEmpty()) {
				if (me._map0.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map0.ggGoogleMarkerArray).length > 1) {
					if (force) {
					me._map0.ggMap.fitBounds(me._map0.ggMarkerBounds, 30);
					} else {
						if (player.getMapType(me._map0.ggMapId) == 'web') {
							me._map0.ggMap.setZoom(16);
						} else {
							me._map0.ggMap.setZoom(7 + 16);
						}
					}
				} else {
					me._map0.ggMap.setCenter(me._map0.ggMarkerBounds.getCenter());
					if (player.getMapType(me._map0.ggMapId) == 'web') {
						if (force) {
						me._map0.ggMap.setZoom(18);
						} else {
							me._map0.ggMap.setZoom(16);
						}
					} else {
						if (force) {
						me._map0.ggMap.setZoom(7);
						} else {
							me._map0.ggMap.setZoom(7 + 16);
						}
					}
				}
			}
		}
		me._map0.ggInitMapMarkers=function(updateMapBounds) {
			me._map0.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map0.ggFilteredIds = [];
			if (me._map0.ggFilter != '') {
				var filter = me._map0.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map0.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map0.ggFilteredIds.length > 0) ids = me._map0.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map0.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map0.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map0.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map0.ggMap});
					marker.setTitle(player.getNodeTitle(id));
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map0.ggGoogleMarkerArray[id] = marker;
					me._map0.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map0.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map0.ggFitBounds(false);
			}
			skin.updateSize(me._map0);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._map0.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._map0.ggMapId = mapId;
			if (!me._map0.ggMapNotLoaded) {
				if (me._map0.ggMap) {
					me._map0.ggLastZoom = me._map0.ggMap.getZoom();
				}
				me._map0.ggClearMap();
				me._map0.ggInitMap(true);
				me._map0.ggInitMapMarkers(false);
			}
		}
		me._map0.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map0.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map0.mapHeightInDeg = me._map0.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map0.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map0.mapWidthInDeg = me._map0.mapHeightInDeg * mapAR;
			}
		}
		me._map0.ggInCheckBounds=false;
		me._map0.ggCheckBounds=function(mapDetails) {
			if (me._map0.ggInCheckBounds) return;
			me._map0.ggInCheckBounds = true;
			var mapCenter = me._map0.ggMap.getCenter();
			var currentZoom = me._map0.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map0.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map0.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			var xTemp = x;
			var yTemp = y;
			if (me._map0.mapWidthInDeg < me._map0.clientWidth * pixelInDeg) {
				var xMargin = (me._map0.clientWidth * pixelInDeg - me._map0.mapWidthInDeg) / 2;
				if (x < me._map0.mapWidthInDeg / 2 - xMargin) x = me._map0.mapWidthInDeg / 2 - xMargin;
				if (x > me._map0.mapWidthInDeg / 2 + xMargin) x = me._map0.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map0.mapWidthInDeg - xOffset) x = me._map0.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map0.mapHeightInDeg < me._map0.clientHeight * pixelInDeg) {
				var yMargin = (me._map0.clientHeight * pixelInDeg - me._map0.mapHeightInDeg) / 2;
				if (y < -me._map0.mapHeightInDeg / 2 - yMargin) y = -me._map0.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map0.mapHeightInDeg / 2 + yMargin) y = -me._map0.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map0.mapHeightInDeg + yOffset) y = -me._map0.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				me._map0.ggMap.setCenter(new google.maps.LatLng(y, x));
			}
			me._map0.ggInCheckBounds = false;
		}
		me._map.ggMarkerInstances=[];
		me._map.ggMapId = 'googleroadmap';
		me._map.ggLastNodeId=null;
		me._map.callChildLogicBlocksHotspot_map_pin_changenode = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_tt && me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map.callChildLogicBlocksHotspot_map_pin_configloaded = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_tt && me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_position) {
						me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_position();
					}
				}
			}
		}
		me._map.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_active && me._map.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling) {
						me._map.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling();
					}
					if (me._map.ggMarkerInstances[i]._map_pin_normal && me._map.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling) {
						me._map.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling();
					}
				}
			}
		}
		me._map.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_tt && me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map.callChildLogicBlocksHotspot_map_pin_active = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_active && me._map.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha) {
						me._map.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha();
					}
					if (me._map.ggMarkerInstances[i]._map_pin_normal && me._map.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha) {
						me._map.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha();
					}
				}
			}
		}
		me._map.callChildLogicBlocksHotspot_map_pin_hastouch = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_tt && me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_position) {
						me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_position();
					}
				}
			}
		}
		me._map.callChildLogicBlocksHotspot_map_pin_activehotspotchanged = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_tt && me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map.ggMarkerArray=[];
		me._map.ggGoogleMarkerArray=[];
		me._map.ggLastZoom = -1;
		me._map.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map.ggRadar;
			var map=me._map.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
				pan -= me._map.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map.ggFilteredIds.length > 0 && me._map.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.976563;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#000000',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#000000',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		me._map.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map.ggInitMap=function(keepZoom) {
			me._map.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._map.ggMapId);
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (mapType == 'file') {
				me._map.style.backgroundColor = mapDetails['bgcolor'];
				me._map.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map.ggLastZoom : 14;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				if (mapTypeId == 'googlecustomstyle') {
					var styledMapType = new google.maps.StyledMapType(JSON.parse(mapDetails['googlecustomstylecode']), {name: 'Styled Map'});
					me._map.ggMap.mapTypes.set('styled_map', styledMapType);
					me._map.ggMap.setMapTypeId('styled_map');
				}
				if (mapTypeId == 'openstreetmap') {
					me._map.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'https://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					me._map.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['styleurl'] == '') {
								if (mapDetails['mapstyle'] == 'satellite') {
									return 'https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] + '/' + zoom + '/' + coord.x + '/' + coord.y + '@2x.png?access_token=' + mapDetails['mapkey'];
								} else {
									return 'https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] + '-v11/tiles/256/' + zoom + '/' + coord.x + '/' + coord.y + '@2x?access_token=' + mapDetails['mapkey'];
								}
							} else {
								var styleurlstring = mapDetails['styleurl'];
								styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
								return 'https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/' + zoom + '/' + coord.x + '/' + coord.y + '@2x?access_token=' + mapDetails['mapkey'];
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: 18
					}));
				}
				if (mapTypeId == 'custom') {
					me._map.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							var urlString = mapDetails['mapurltemplate'];
							urlString = urlString.replace('{s}', 'a');
							urlString = urlString.replace('{z}', zoom);
							urlString = urlString.replace('{x}', coord.x);
							urlString = urlString.replace('{y}', coord.y);
							return urlString;
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapmaxzoom']
					}));
				}
				me._map.ggNodeChange();
				google.maps.event.addListener(me._map.ggMap, 'idle', function(){
					me.updateSize(me._map);
				});
			} else if (mapType == 'file') {
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map.ggTileAvailable(coord.x, coord.y, zoom)) {
							return basePath + 'images/maptiles/' + me._map.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map.ggMap.mapTypes.set(me._map.ggMapId, customMapType);
				me._map.ggMap.setMapTypeId(me._map.ggMapId);
				me._map.ggCalculateFloorplanDimInDeg(mapDetails);
				google.maps.event.addListener(me._map.ggMap, 'center_changed', function() {
					me._map.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map.ggMap, 'zoom_changed', function() {
					me._map.ggCheckBounds(mapDetails);
				});
			}
		}
		me._map.ggClearMap=function() {
		me._map.ggMap = null;
		me._map.ggClearMapMarkers();
		me._map.ggMapNotLoaded = true;
		}
		me._map.ggClearMapMarkers=function() {
			me._map.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					if (marker._div.parentNode) {
						marker._div.parentNode.removeChild(marker._div);
					}
					marker.setMap(null);
				}
			}
			me._map.ggMarkerArray=[];
			me._map.ggMarkerInstances=[];
			me._map.ggLastActivMarker = null;
		}
		me._map.ggCenterNode=function() {
			if (!me._map.ggMap) return;
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map.ggMap.panTo(markerLocation);
			}
		}
		me._map.ggFitBounds=function(force) {
			if (me._map.ggMapNotLoaded) return;
			if (!me._map.ggMarkerBounds.isEmpty()) {
				if (me._map.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map.ggGoogleMarkerArray).length > 1) {
					me._map.ggMap.fitBounds(me._map.ggMarkerBounds, 30);
				} else {
					me._map.ggMap.setCenter(me._map.ggMarkerBounds.getCenter());
					if (player.getMapType(me._map.ggMapId) == 'web') {
						me._map.ggMap.setZoom(18);
					} else {
						me._map.ggMap.setZoom(7);
					}
				}
			}
		}
		me._map.ggInitMapMarkers=function(updateMapBounds) {
			function SkinMarkerOverlay(pos, div, map) {
				this._pos = pos;
				this._div = div;
				this._map = map;
				this.setMap(map);
			}
			SkinMarkerOverlay.prototype = new google.maps.OverlayView();
			SkinMarkerOverlay.prototype.onAdd = function() {
				this.getPanes().overlayMouseTarget.appendChild(this._div);
				skin.updateSize(this._div);
			}
			SkinMarkerOverlay.prototype.draw = function() {
				var overlayProjection = this.getProjection();
				var point = this.getProjection().fromLatLngToDivPixel(this._pos);
				if (point) {
					this._div.style.left =(point.x - 12) + 'px';
					this._div.style.top =(point.y - 41) + 'px';
				}
			};
			SkinMarkerOverlay.prototype.onRemove = function() {
				this._div = null;
			};
			SkinMarkerOverlay.prototype.getPosition = function() {
				return this._pos;
			};
			me._map.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map.ggFilteredIds = [];
			if (me._map.ggFilter != '') {
				var filter = me._map.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map.ggFilteredIds.length > 0) ids = me._map.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new SkinMarkerOverlay(markerLocation,div._map_pin ,me._map.ggMap);

					me._map.ggMarkerArray[id]=marker;
					me._map.ggMarkerInstances.push(div);
					me._map.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map.ggFitBounds(false);
			}
			skin.updateSize(me._map);
		me._map.callChildLogicBlocksHotspot_map_pin_changenode();
		me._map.callChildLogicBlocksHotspot_map_pin_configloaded();
		me._map.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._map.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._map.callChildLogicBlocksHotspot_map_pin_active();
		me._map.callChildLogicBlocksHotspot_map_pin_hastouch();
		me._map.callChildLogicBlocksHotspot_map_pin_activehotspotchanged();
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._map.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._map.ggMapId = mapId;
			if (!me._map.ggMapNotLoaded) {
				if (me._map.ggMap) {
					me._map.ggLastZoom = me._map.ggMap.getZoom();
				}
				me._map.ggClearMap();
				me._map.ggInitMap(true);
				me._map.ggInitMapMarkers(false);
			}
		}
		me._map.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map.mapHeightInDeg = me._map.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map.mapWidthInDeg = me._map.mapHeightInDeg * mapAR;
			}
		}
		me._map.ggInCheckBounds=false;
		me._map.ggCheckBounds=function(mapDetails) {
			if (me._map.ggInCheckBounds) return;
			me._map.ggInCheckBounds = true;
			var mapCenter = me._map.ggMap.getCenter();
			var currentZoom = me._map.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			var xTemp = x;
			var yTemp = y;
			if (me._map.mapWidthInDeg < me._map.clientWidth * pixelInDeg) {
				var xMargin = (me._map.clientWidth * pixelInDeg - me._map.mapWidthInDeg) / 2;
				if (x < me._map.mapWidthInDeg / 2 - xMargin) x = me._map.mapWidthInDeg / 2 - xMargin;
				if (x > me._map.mapWidthInDeg / 2 + xMargin) x = me._map.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map.mapWidthInDeg - xOffset) x = me._map.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map.mapHeightInDeg < me._map.clientHeight * pixelInDeg) {
				var yMargin = (me._map.clientHeight * pixelInDeg - me._map.mapHeightInDeg) / 2;
				if (y < -me._map.mapHeightInDeg / 2 - yMargin) y = -me._map.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map.mapHeightInDeg / 2 + yMargin) y = -me._map.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map.mapHeightInDeg + yOffset) y = -me._map.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				me._map.ggMap.setCenter(new google.maps.LatLng(y, x));
			}
			me._map.ggInCheckBounds = false;
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._map0.ggClearMap();
			me._map0.ggInitMap(false);
			me._map0.ggInitMapMarkers(true);
			me._node_cloner.ggUpdate();
			if (me._map.ggMapNotLoaded == false) {
				me._map.ggClearMap();
				me._map.ggInitMap(false);
				me._map.ggInitMapMarkers(true);
			}
		});
		player.addListener('imagesready', function() {
			me._node_scroller.ggUpdatePosition();
		});
		player.addListener('varchanged_map', function() {if (	(		((player.getVariableValue('map') == true))	)) {	me._popup.style[domTransition]='none';	me._popup.style.visibility=(Number(me._popup.style.opacity)>0||!me._popup.style.opacity)?'inherit':'hidden';	me._popup.ggVisible=true;}if (	(		((player.getVariableValue('map') == false))	)) {	me._popup.style[domTransition]='none';	me._popup.style.visibility='hidden';	me._popup.ggVisible=false;}if (	(		((player.getVariableValue('map') == false))	)) {	me._openmappopup.style[domTransition]='none';	me._openmappopup.style.visibility='hidden';	me._openmappopup.ggVisible=false;}if (	(		((player.getVariableValue('map') == true))	)) {	me._openmappopup.style[domTransition]='none';	me._openmappopup.style.visibility=(Number(me._openmappopup.style.opacity)>0||!me._openmappopup.style.opacity)?'inherit':'hidden';	me._openmappopup.ggVisible=true;}});
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
	me.callChildLogicBlocksHotspot_ht_info_changenode = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_hastouch = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
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
		if (me._hide_controller_timer.ggLastIsActive!=me._hide_controller_timer.ggIsActive()) {
			me._hide_controller_timer.ggLastIsActive=me._hide_controller_timer.ggIsActive();
			if (me._hide_controller_timer.ggLastIsActive) {
				player.setVariableValue('vis_auto_hide_controller', true);
			} else {
				player.setVariableValue('vis_auto_hide_controller', false);
			}
		}
		if (me.elementMouseOver['hide_controller_container']) {
			me._hide_controller_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_controller_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._map0.ggUpdateConditionTimer();
		me._map.ggUpdateConditionTimer();
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AxMDAwIDEwMDA7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
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
		hs+='top : -320px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AxMDAwIDEwMDA7Ij4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcmI3hhOyYjeDk7JiN4OTtjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -320px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AxMDAwIDEwMDA7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
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
		hs+='top : -320px;';
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
		hs+='top : -350px;';
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
		hs+='background: rgba(0,0,0,0.431373);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hs_tt.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt.ggUpdateText();
		});
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC'+
			'0yNDAgMzMyIDEzMCAxMzA7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
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
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
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
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 94px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
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
		me._ht_info.onclick=function (e) {
			player.setVariableValue('info_text_body', me.hotspot.description);
			player.setVariableValue('vis_info_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_ht_info_image';
		hs=basePath + 'images/ht_info_image.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/ht_info_image__o.png';
		me._ht_info_image__img.ggOverSrc=hs;
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
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
		me._ht_info_image.logicBlock_visible = function() {
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
			if (me._ht_info_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image.style[domTransition]='';
				if (me._ht_info_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image.style.visibility="hidden";
					me._ht_info_image.ggVisible=false;
				}
				else {
					me._ht_info_image.style.visibility=(Number(me._ht_info_image.style.opacity)>0||!me._ht_info_image.style.opacity)?'inherit':'hidden';
					me._ht_info_image.ggVisible=true;
				}
			}
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.src=me._ht_info_image__img.ggOverSrc;
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.src=me._ht_info_image__img.ggNormalSrc;
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
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
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #585858;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
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
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information.style.top='-47px';
					me._tt_information.ggUpdatePosition(true);
				}
				else {
					me._tt_information.ggDx=0;
					me._tt_information.style.top='24px';
					me._tt_information.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
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
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._tt_information);
		el=me._ht_info_customimage=document.createElement('div');
		els=me._ht_info_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage.ggUpdatePosition();}
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
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
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
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage.ggIsActive=function() {
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
		me._ht_info_customimage.logicBlock_visible = function() {
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
			if (me._ht_info_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage.style[domTransition]='';
				if (me._ht_info_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage.style.visibility="hidden";
					me._ht_info_customimage__img.src = '';
					me._ht_info_customimage.ggVisible=false;
				}
				else {
					me._ht_info_customimage.style.visibility=(Number(me._ht_info_customimage.style.opacity)>0||!me._ht_info_customimage.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage.ggSubElement.src=me._ht_info_customimage.ggText;
					me._ht_info_customimage.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage.ggUpdatePosition=function (useTransition) {
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage.clientWidth;
			var parentHeight = me._ht_info_customimage.clientHeight;
			var img = me._ht_info_customimage__img;
			var aspectRatioDiv = me._ht_info_customimage.clientWidth / me._ht_info_customimage.clientHeight;
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
		me._ht_info.appendChild(me._ht_info_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
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
		} else
		{
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();;
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
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-191;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 380px;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			if (
				(
					((player.getVariableValue('vis_map_close_desktop') == true)) && 
					((player.getHasTouch() == false))
				)
			||
				(
					((player.getVariableValue('vis_map_close_mobile') == true)) && 
					((player.getHasTouch() == true))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
		}
		me._map_pin.onmouseover=function (e) {
			me.elementMouseOver['map_pin']=true;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.onmouseout=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ontouchend=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active.ggIsActive=function() {
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
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
			}
		}
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
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
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAAP30lEQVR4nN2bfYzlV1nHP+f8Xu/bzOy87U53ZrdtcFugFiwhrRKhDcY/uhL5x0b5xxDDHyZq1Eg0DUEgQqRGXpoK0WBM1ShgAikRTa0KVAi02KYYaLsF2i47szs7L3dm7vvv5ZzHP87vzu7s7tw7L3dq4rM5yeTe3z3n+Z7vc56381v1S7/5e/x/EH/UE16auGfeC0sntR/OCzKPyAJoDyWvKtSizdNFk3aXSpWtSxNLL5hRrTsSICuz992tPP9XgAcCpRbcp4ICUAoQ+p9pP0D7AbmM1VfnTn7ZWPP52F/+2mFBqYOa1qWJe+b9Uu13gQcULOycVRF4Hn4QEAZur9IsJ88yMmNAhGuer4vYL0uePzS7+vWXXhMgy9U3VSiN/6H2gj/QSpf6n5dKJW'+
			'qVMrValcDXA+fIjdBqd2i3OzRbre3PrdiuUvozSbv+sfnGM/UjA3Jp/J73+uXahxG7ABAGIccmxqnVqvje9cqLCLb4WwNKqeueMSK0Wh3W1+ukWdr/3ary/I8G6sIjezW5PZ2R82NviMqVm/7Ct/Y3sAalPWanp5gYr+1QOjNCkluMFXIrmGtMyCuARL4m8jSBr9DAWLXMWLXM5laTlbV1EDODyT+VyOwvLlfDB060vtcepuNQRhbH3jIZxtUvKeW9A2BsbJzZmSk87ZQyVuhm1gG41vb3IJGnqUbejvnW1utsbm4CYK35H5slZ+c2v7M4aJ6Bxrwyc++ZMB77Lqh3iFiOz85y/Pg0SiusQCsxrLUz2qkht4II+x693LLWztjq5hgrKK2YmZlibm4OAKXUnV5UfnZl9r67DwTk0sQ982j9TZBblfY4tXCKscKU0lRY'+
			'a6e0UoPASEY3t6x3MjqJOxLVapmF+Xm0F4DYGbT+2sXqXXfsC8hy9U0VHURfReyM9gJuOX2KOI5AoNnN2Uwy7P6taKhYgVZqaHQMCMRxxM2n5omCEKwp+eXxxxbH3jK5ZyCE1b/XYu/0EeZvmsP3fYwV6u2MTmoRy5GObmaotzOMFXzf58TcTSilUTa/NYyrX9o8+XpvKJDlmbd/RCn1bivC9PE5oih0IDoZqbHIa/QvNZZ6x4EJQ5+5uTmsCGLMO9J0+s8GAlmZufeMsvZBgMnpWSrVKlag0cvJzf4Ps6eVc7W+xtNq37/PjbDVzbHiAu7k9CwAYuV3VmbuPXO17jviiDXZx5VSXhxFTE46U+ykhm5m2YtoBZXQudJAa/S1fAtkuZCJpZPuzV33covq5YzFPpOTk3RaLXq9jidKPgmcvY6Rldn77kZ4t1jh2NSMWz'+
			'QTmj2zJ7cTac1UOaQceESeRhe5Ypam9Hrpdt4Y+Ipy4DFZDoh9vae5u6mLUwhMzcwgVpAsv3/5+H2/0Nd/mxHJep8CKJVrlMrOpJqJuS6/u1aUgmrkUwrcnmRZytbGBr0kIU26GJO757RHHEXEcZnK2BhRVKIW+YTa0kjyoes0e4agrImiEqXqGN3WJsraPwfetM3Iyux9dwvcAzA9ewKAJLP0jMXCrkMpmCwF2yCaW1ucf/VlNjbW6HaaO0CINXS7HTY21lg8/zL1+joiEAWa6UqI76mBa6VGtk18enrGbX6e3tkPlD6AFXNWRCiXKwRBiAg0knzwFuGY0FphTc7ypYt02g0ATk/XOPvmBd6wMM0dC1MEnuaFpTrPL23wn99f5Lnza9RXL9FtbDFz0zxBEFILfda72cD1WklO7IcEQUipVKbTaWOSzq8CT3ln3vqz'+
			'NLyZzyqlpmvHpimVyiTG0E0HH/DY96hGzp0vL52n026CUrznbWf4+Ht+jre+7gTzU1VC38P3NCcmKvz0qSne9ZZbqJUCvvvKOmnao91qMj4+ged5gJDlu68r4s6YrzVWhE6rgVhzrJZefERfrN51h9LebQDVag1rhV5uEVG7DoBKrLFW2Nqq02m3UFrzyHvfzu+ffTNRcF282hal4D1vO8Pnf+ud1OKAPEtZX13FWqHse2i1+7oiil5u3bPlqptPe7ddrN51h0bkLCJEUYznBQB0E8HK7qMceGhRGJOxvnIJRPj1nz/DPT91YiCLV8vNs2O8/10/AyJsbaySJi5Tr4X+wLW7ifMKnhcQRXE/6JzVyg9PAHhRGYDcuh8MkqAIEJvrq4gx3DxT433v3DWf21Xuv+sW7r3dga+vrADge9cXX1eLFSEtEr0odjoL3KKV59'+
			'8sYomL2tra4RG3v1jS6yBiefdbbx1oToPk197+ekQs3Z5jRCsK89p9/X7Z6fs+IhZgQdu05xoHngOS2cGH3NMKrVymmvS6ANxxavpAIABuu8llEGINed5zCg7Zk20dC52V0sc1yEmsJfB8rEC/ybF7/uRA5GkbKeLE60/eMLPek1TjgPnJClhLt9vFijPdQToY43QIPN+ZEHJSi7UVB8u5NCMgIrsOjXsuz1wBVAnUgc2qLxPlCACbZVgRtBqsgxF3VlDurIq1Fa08/6KIkOWug+GpwalPn9aoVEJEaPVyXl1pHBiECJy7tIWIEBQOp5fbgTpozx32LE8REZTnX9RizY8VgkkdkGEHrR+wRPmEYYhCeH5x/cBAzq82yNIEhRDFjplsSMngiWPCpCkKQaz5sQYuWCtkeYa1MKS35s5HLlgLQVTBWuGpc0sHBvLNF5ew'+
			'VgjCCCM+1rpUf5BoRfFchnWu+IJW8AoIaeI8kC7aMoN2JDVuodLYOCD88zMv88zLl/cNYqne4q/+7TlAKI85h7GXAq7v/p3OgoJXdN7rfBsgaW1hcueFAn+webVSd9BLlWOUx45hreWP/+FJkmzvfWgR+NDn/4tmJyGKS1QnXGBsJ3bg2oFfbLQVktYWAKbXfU6PndDfUlo3wQU4gMgb7IWyXGgXSeWx2dNoz2ep3uZ9n/nXPR38eqvH+x/9Ov/9I8fi1NzNKK1Ic6EzZDPiIsh0O83+lnRsRX/du/O218mmTNytlLpda01cGQcUnXTwhGkuRL7G15qwFNNpbLCy2eKfvv0Sge9xemaMUrizI9vqZTzx3Cv89uf+gxcvrALCsePzxJVjiMBaO0OGpEfjsY8CWvVl0l4LkCdOdZ7/Wx8gqEw8lnebv9xpbTJx/DS+dh'+
			'SmAw6diLDVy5gqB0SlCY7f/EY2l1+m12nx8Fee4uGvPMX89Bi3z89QiXx+cH6FH1/e3FbUCyIm524lLtcQYDNxncZBEvouqxCg03Jzic2/Cv1SV/EEgMkSep0mYalGyfNIssHFVZIJ9W7OROzjBTFTC2+gWV+iub6MWMPiWoPFtZ2mppSiOjHL+Mw8ojysuHPRSYY3OMqhyz7SbhOTJQAE1WNfYbMAMrf5ncXF6I3/Itbe39y8zFSpRhho6DG0lu4mll6aMhH7xKGmNnmS2uRJTNYj6XXIu02sGOJSlSCqbmfZgvNQG13XahomSkFUeKutjWUQi4g81m9uX2k+5OZhtLq/t7WGmTmN5weUIk2nN3ynRGCjm1MzPuXYdVC8IKYcxFC7Pg+zAp2epZkOL6f7UoucqibPSBsuACvhs/3vt4HUTqh/byyb88DpTmOFyrGT'+
			'lLRHW/bW0wJX5zcS0Bpiz8PXirBwl5kVslxIrSE/wG1h5LsbgHb9ImINoM6dMuce73+/Hccnll4wUiBsrju36PvKxRT21H7aHsZCOzNsJTmr7YzVdsZmN6edGbK9tcl2jChUrslhhdamK8BQPHw10B0JiS/qb4DEZl16rfp2WTsoE30tRsX3XJnbvIzNUwQaYRw/uiuQk3JuBcUXAZr1SyCOUq2GpMRHOHxPuZREoF2/XJDB3117HXddiqhEHgHI2ptkRf5VDrz/KxxU+yV42iLvtQCsUvpT1+p9HZAF88OngWcBOlsXHZBQo3De5rUcnlbEoXMWm+suwxZ4YiF/8UdDgQCI4pMA3Y3L26xUo5G/7TFUxqIirU+6V1wu6mM3evaGQMaPe/8I6gewkxWv/zbGazAC74rrbqy96hQT9Y1T5tyTewbiLunlg+BYMVnBSu'+
			'gPrRVGNfpnI+m2yVobFHR88Eb67goE4JR56UsUZ6VZX8SKEIcKT8NRX7uFgSIMXIOhXX/FkQGP78bGQCBuA/SDAGljlayoVWrR0bNSLroySbtJ3nFJp1X80SBdBwJZMC8+DnwLoLP5EwDHirf/aL/XEfqKOHBno7v1k2JH9WO35C89d2AgxSwPAmStjW1WxiP/yA553ztexYb14/IHhmk5FMgpc+5JgccBOhvnMQJB4KLtqONGWOR2RqBTnA3gCze1nv3+oYG4h5wHy9qb5EWtPB6PPq7UijmT5gbGXTNYpfSunmqnjnuQBfPDp1H6MXB2K9blQIGnRpYYxoHC1wqxkGxdcAuLevRGUfzAQAAKO7V5p0Hadn59fITRvl84pe1tNhKlbxzFbyR7BlLY6Rfgyo4FgSL0B3fO9zKiQG833Xob5/tLfm6vbOwLCEBhr9Yk'+
			'bdL2BtYW+dAhD/lY6HKq7tYK1mURSVCb/NP96LYvIAv5iz9C1KNwZed8T1EK9zXNDimFGs9TWISsWfSQRT0y7I25a2XfGgRjxz5IUUXm3Q1EHCsHMSlw50wEsuYqNush0PCEh/ar176BFDv1OXCsCIKnFeVo/6yUQo3WCkFIiyiu4NMn5dzKfuc6kE14Vn2EgpWstYogVIPB18rXDiiYREgay4jJEGjoSu266u/IgJyUcyuIciVx4wJi3d2ia1Tszaxi31WdYiEvzoaCT+/3xeVDAQHQ1erHBBo2T0lbywhQjTxu8I7ydaIUjMU+Au63JgNYCUuljx9Yn4P+cL7xTF3Bp+HKjvqe2hMr5cBDa7AmJ2+4mCTCJ/byovLIgQAUO7giJiNrLQPDWemzAZA1LxddQ1aicumRw+hyKCAnWt9ri/AJgLxxAWtytFJUwt1ZqY'+
			'SuaLImx3ZcPwClPnwYNg4NBKDYyRWxhqzpGmj915+ujeBXf5c1L/XZOC9l768Pq8ehgZxofa+NUh8G3A5LwUp0/fVdLfaKrmWO7ThTRKmHTjeeTw6rx6GBABQ7et6xcgkrQi0qXtDsL6SgErq3JpLNC9tsjB3XfzkKHUYC5HTj+QSlHgKwnWVMnqGuYaUSeSilMHmGdJ0JiuIDo/p/ViMBAuB2Vp0Ta7CtpR0HG9h2ALbVf7lAnXONwNHIyIBMLL1gRMmfAEj3MtYFOWqxRy3ue6orbIA8OMr/9TYyILCz1drf+UroXXG522zwbNEAHJmMFMjVrVbpXkby3nabR/LeVWzw0VGuCyMGAjtbrbZ95WWbq/4eORtwBEDgSquV3ho262CzDvTWdn43YjkSIFe3WqW9iLSLqlXUN4rvRi5HAsSJa7WSbrgBA68FDitHBuTq'+
			'Visw9FrgsHKEjFxptV7791HIkV4MLpgfPv0T//bHABbyF58+yrWO/IbTYD901GsA/C9GVYNNoq0j2AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
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
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
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
		me._map_pin.appendChild(me._map_pin_normal);
		el=me._map_pin_tt=document.createElement('div');
		els=me._map_pin_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggDx=0;
		el.ggDy=38;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._map_pin_tt.ggIsActive=function() {
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
		me._map_pin_tt.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_tt.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_tt.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -38;
					me._map_pin_tt.ggUpdatePosition(true);
				}
				else {
					me._map_pin_tt.ggDx=0;
					me._map_pin_tt.ggDy=38;
					me._map_pin_tt.ggUpdatePosition(true);
				}
			}
		}
		me._map_pin_tt.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['map_pin'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_tt.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_tt.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_tt.style.visibility=me._map_pin_tt.ggVisible?'inherit':'hidden';
					me._map_pin_tt.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_tt.style.opacity == 0.0) { me._map_pin_tt.style.visibility="hidden"; } }, 505);
					me._map_pin_tt.style.opacity=0;
				}
			}
		}
		me._map_pin_tt.ggUpdatePosition=function (useTransition) {
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._map_pin.appendChild(me._map_pin_tt);
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope,ggParent,parameter) {
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
		me.__div.setAttribute('style','position: absolute;width: 140px; height: 100px; visibility: inherit; overflow: visible;');
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
		el=me._node_image_cloner=document.createElement('div');
		els=me._node_image_cloner__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_Image_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image_cloner.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner.onclick=function (e) {
			if (
				(
					((me._node_image_cloner.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._node_image_cloner.onmouseover=function (e) {
			me.elementMouseOver['node_image_cloner']=true;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.onmouseout=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ontouchend=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 136px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 136px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
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
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "")) || 
				((player.getVariableValue('opt_thumbnail_menu_tooltip') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style[domTransition]='';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
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
		me._node_image_cloner.appendChild(me._node_title);
		el=me._node_visited=document.createElement('div');
		el.ggId="node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 87px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited.ggIsActive=function() {
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
		me._node_visited.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['node_image_cloner'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateBorderColor = 2;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._node_visited.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._node_visited.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._node_visited.style[domTransition]='border-color 0s';
				if (me._node_visited.ggCurrentLogicStateBorderColor == 0) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 1) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 2) {
					me._node_visited.style.borderColor="rgba(209,209,209,1)";
				}
				else {
					me._node_visited.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._node_visited.ggUpdatePosition=function (useTransition) {
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_image_cloner.appendChild(me._node_visited);
		me.__div.appendChild(me._node_image_cloner);
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
	me._show_controller_button.logicBlock_alpha();
	me._hide_controller_container.logicBlock_alpha();
	me._filtersearchtint.logicBlock_visible();
	me._filtersearchframe.logicBlock_visible();
	me._closex.logicBlock_visible();
	me._map_pin_tt0.logicBlock_alpha();
	me._map0.logicBlock_position();
	me._screentint_info.logicBlock_visible();
	me._information.logicBlock_visible();
	me._menu_background.logicBlock_alpha();
	me._menu_open.logicBlock_position();
	me._tt_togglemap.logicBlock_text();
	me._button_close_map.logicBlock_visible();
	me._map_screentint.logicBlock_visible();
	me._map_container.logicBlock_visible();
	me._map.logicBlock_visible();
	me._map_pin_tt0.logicBlock_position();
	me._tt_togglemap.logicBlock_position();
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible();me._show_controller_button.logicBlock_alpha();me._hide_controller_container.logicBlock_alpha();me._filtersearchtint.logicBlock_visible();me._filtersearchframe.logicBlock_visible();me._closex.logicBlock_visible();me._map_pin_tt0.logicBlock_alpha();me._map0.logicBlock_position();me._screentint_info.logicBlock_visible();me._information.logicBlock_visible();me._menu_background.logicBlock_alpha();me._menu_open.logicBlock_position();me._tt_togglemap.logicBlock_text();me._button_close_map.logicBlock_visible();me._map_screentint.logicBlock_visible();me._map_container.logicBlock_visible();me._map.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._map_pin_tt0.logicBlock_position();me._tt_togglemap.logicBlock_position(); });
	player.addListener('autorotatechanged', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._map_pin_tt0.logicBlock_position();me._tt_togglemap.logicBlock_position(); });
	player.addListener('activehotspotchanged', function(args) { me._map_pin_tt0.logicBlock_alpha(); });
	player.addListener('varchanged_vis_auto_hide_controller', function(args) { me._show_controller_button.logicBlock_alpha();me._hide_controller_container.logicBlock_alpha(); });
	player.addListener('varchanged_filter_search', function(args) { me._filtersearchtint.logicBlock_visible();me._filtersearchframe.logicBlock_visible();me._closex.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._screentint_info.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._menu_background.logicBlock_alpha();me._menu_open.logicBlock_position(); });
	player.addListener('varchanged_vis_map', function(args) { me._tt_togglemap.logicBlock_text();me._button_close_map.logicBlock_visible();me._map_screentint.logicBlock_visible();me._map_container.logicBlock_visible();me._map.logicBlock_visible(); });
	player.addListener('varchanged_mapshow', function(args) { me._map0.logicBlock_position(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._node_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._node_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._node_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('varchanged_opt_thumbnail_menu_tooltip', function(args) { me._node_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip(); });
	player.addListener('changenode', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_changenode(); });
	player.addListener('configloaded', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_configloaded(); });
	player.addListener('mouseover', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_mouseover(); });
	player.addListener('mouseover', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_mouseover(); });
	player.addListener('changenode', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_active(); });
	player.addListener('hastouch', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_activehotspotchanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_ht_info_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node_configloaded();me.callChildLogicBlocksHotspot_ht_info_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_info_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged(); });
	player.addListener('varchanged_opt_3d_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};