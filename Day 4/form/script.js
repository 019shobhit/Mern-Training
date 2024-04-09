// const fnChange = (e) => {
//     // console.log('First name ');
//     console.log(e.target.value);
// }

// const fnChange = (e) => {
//     const val = e.target.value;
//     if(val.length>3){
//         console.log('Correct');
//     }
// console.log(e.target.value);
// }
const submit12 = (e) => {
    e.preventDefault();
    // console.dir(e.target.value)
    const t = e.target;
    const res = {
        hobies: [],
    };
    for (let i = 0; i < t.length; i++) {
        // console.log(t[i].value,t[i].type);
        // const va = t[i].value;
        // const ty = t[i].type;
        // if(ty=='checkbox'){
        //     console.log(t[i].checked);
        // }
        const ty = t[i].type;
        if (ty != 'submit') {
            const vl = t[i].value;
            const nm = t[i].name;
            if (ty == 'checkbox' && t[i].checked) {
                res.hobies.push(vl);
            }
            if (ty != 'checkbox') {
                res[nm] = vl;
            }

        }

    }
    console.log(res);
}