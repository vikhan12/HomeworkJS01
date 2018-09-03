
let a = parseInt(prompt('Enter a'));
let b = parseInt(prompt('Enter b'));
let c = parseInt(prompt('Enter c'));



var x1, x2;

function solution(a, b, c){
var d=Math.pow(2, b)-4*a*c
if (d<0){
    x1=x2='the roots of the quadratic equation are complex';
}
    else if(d==0){
        x1=x2=(-b)/2*a;
    }
        else{
            x1=-(b+Math.sqrt(d))/2*a;
            x2=-(b-Math.sqrt(d))/2*a;
        }
    return[x1, x2]
}
alert(solution(a,b,c))
