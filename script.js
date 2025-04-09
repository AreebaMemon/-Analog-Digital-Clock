function updateClock() {
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const pakistanOffset = 5 * 60 * 60000; 
    const pakTime = new Date(utc + pakistanOffset);
    
    const htime = pakTime.getHours();
    const mtime = pakTime.getMinutes();
    const stime = pakTime.getSeconds();
    
    
    const hrotation = 30 * (htime % 12) + mtime / 2; 
    const mrotation = 6 * mtime; 
    const srotation = 6 * stime; 

   
    document.getElementById('hour').style.transform = `rotate(${hrotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mrotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${srotation}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
