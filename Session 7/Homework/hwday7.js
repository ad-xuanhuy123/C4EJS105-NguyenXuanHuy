// Bai 1
// 1D 2A 3C 4B
// Bai 3 
// No
// Bai 4
function bai4() {
    const s = document.getElementsByTagName('li');
    document.getElementById('id1').innerHTML = s[1].innerHTML;
    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
}
// Bai 5
    let d = document.getElementsByClassName("author");
    for (i=0;i<d.length;i++) {
        console.log(d[i].textContent);
    }    


