const o="ACCESS-TOKEN",e="TOKEN_TYPE",a="EXPIRES_IN",r="LOADED_TRACKS",l="http://localhost:4173",S={userInfo:"me",featuredPlaylist:"browse/featured-playlists?limit=5",toplists:"browse/categories/toplists/playlists?limit=10",playlist:"playlists",userPlaylist:"me/playlists"},c=()=>{localStorage.removeItem(o),localStorage.removeItem(e),localStorage.removeItem(a),window.location.href=l},i=t=>JSON.parse(localStorage.getItem(t)),E=(t,s)=>localStorage.setItem(t,JSON.stringify(s)),n={DASHBOARD:"DASHBOARD",PLAYLIST:"PLAYLIST"};export{o as A,a as E,r as L,n as S,e as T,S as a,i as g,c as l,E as s};