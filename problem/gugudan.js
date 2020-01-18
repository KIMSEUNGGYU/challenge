
function gugudan (start,end){
    for (var a= start; a <=end; a++){
        console.log(`${a}단`);
        for (var b=1; b<=9; b++){
            console.log(`${a} * ${b} = ${a*b}`);
        }
        console.log(' ');
    }
}
gugudan(2,5);