var square = x => x * x;
console.log(square(9));

var user = {
    name : 'Manohar',
    sayHi() {
        console.log(arguments);
        console.log('Hi Iam',this.name);
    }
};
user.sayHi();
user.sayHi(1,2,3,4);


