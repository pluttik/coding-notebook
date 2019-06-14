// single-line comment
/* multiline
comment */
var a, b;
console.log('Value of a: ', a);

function id01Disappear() {
    document.getElementById('id01').style.display = 'none';
}
function id01Appear() {
    document.getElementById('id01').style.display = 'inline-block';
}
function id01ChangeText() {
    document.getElementById('id01').innerHTML = 'This text can change and... ';
}
a = 'Pop up!', b = 'Printing something in the console';
function id02Alert() {
    window.alert(a);
}
function id03Console() {
    console.log(b);
}
function id04ToRed() {
    document.getElementById('id04').style.color = 'red';
}