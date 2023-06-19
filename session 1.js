function f2cel(temp) {
    return (temp-32)*(5/9);
}

function f2kelvin(temp) {
    return (temp+ 459.67)*(5/9)
}

function c2faren(temp) {

    return (temp*(9/5))+32;
}


function c2kelvin(temp) {
    return temp+273.15;
}

function k2faren(temp) {
    return (temp - 273.15)*(9/5)+(32);
}

function k2cel(temp) {
    return (temp - 273.15)
}

let a= parseInt(prompt('Enter the value of temperature : '));

let x= {
    F_2_c : 1,
    F_2_k : 2,
    C_2_F : 3,
    C_2_K : 4,
    k_2_f : 5,
    k_2_c : 6,
};

let b= prompt('Enter your option :  F_2_c : 1, F_2_k : 2, C_2_F : 3, C_2_K : 4, k_2_f : 5, k_2_c : 6,')

if (b==1){
    console.log(f2cel(a));
}
else if (b==2){
    console.log(f2kelvin(a));
}
else if (b==3){
    console.log(c2faren(a));
}
else if (b==4){
    console.log(c2kelvin(a));
}
else if (b==5){
    console.log(k2faren(a));
}
else if (b==6){
    console.log(k2cel(a));
}


