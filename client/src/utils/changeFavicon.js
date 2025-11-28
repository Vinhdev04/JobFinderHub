
function changeFavicon ()  {
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    
    document.addEventListener('visibilitychange', () => {
        favicon.href= document.hidden ? '/we-are-hiring.png' : '/favicon.png';
    });
}

export default changeFavicon;