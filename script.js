const container = document.querySelector('.container'),
    imgtag = container.querySelector('.status-box img'),
    heading = container.querySelector('.status-box h3'),
    para = container.querySelector('.status-box p'),
    guide = container.querySelector('.guide');

window.onload = () => {
    function ajax(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET","https://api.github.com/users", true);
        xhr.onload = () => {
             //console.log(event);
            if (xhr.status == 200 && xhr.status < 300) {
                // console.log('online');
                heading.innerText = "You're Online";
                imgtag.src = "wifi.png";
                heading.classList.add('active');

                para.innerText = "Hurray! Now you're connected to internet";
                guide.innerText="// Turn Off Your Internet and Wait";
                guide.classList.add('active');
            }
            else {
                // console.log('offline');
               offline();
            }
        }
        xhr.onerror = () => {
            //   console.log(xhr.err)
            // console.log('offline');
            offline();
        
    }
    xhr.send();
    function offline(){
        heading.innerText = "You're Offline";
        imgtag.src = "offline.png";
        heading.classList.remove('active');

        para.innerText = "Please connect to the internet";
        guide.innerText="// Turn On Your Internet";
        guide.classList.remove('active');
    }
   
}
setInterval(ajax, 100);

}
