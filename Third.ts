const at: string = 'hello'; // 무조건 소문자!!
const bt: String = 'hell'; // 대문자 사용 금지

type World = "world";
const aw: World ='world'; // 자동완성 추천됨

type Greeting = `hello ${World}`; //World에 저기 위에 type World가 들어가서 hello world로 나옴


//----------------------------------------------------

let arrr: string[] = [];
let arrr2: Array<string> = [];
function rest(...args: string[]) { //a,...args: 면 console은 1,[2,3]
    console.log(args); //[1,2,3]
}

rest('1', '2', '3'); // function rest이 string이기 때문에 이것도 string이엳야 함

const tuple: [string, number] = ['1', 1];
tuple[2] = 'hello'; // 3번쨰로 요소 추가하는거라서 안됨
tuple.push('hello');  // 근데 이건 됨..