const a: number = 5;
const b: string = '5';
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = true; // 모든 타입 가능, 아무 의미 없음
// 형식 선언 소문자여야 함

const h: 5 = 5;
const i:true = true; // 완전 값 고정

//function add( x:number, y:number ):number { return x+y } // return 값 타입선언은 매개변수 자리 바로 뒤
//type Add = (x:number, y:number) => number;
// type으로 타입을 선언하는 방식 타입 애일리어스(type alias)
//const add:Add = (x,y) => x+y; //x,y 둘 다 숫자고 return 값도 숫자

interface Add{
    (x:number, y:number): number;
}

const arr: string[] = ['123', '456']
const arr2: number[] = [123,456]
const arr3: [number, number, string] = [123,456,'hi'] // 개수 지정
//const obj: { lat:number, lon:number } = { lat: 37.5, lon: 127.5 };