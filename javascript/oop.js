/************************** OOP **************************/

// function Song(singer, title, release){
//     this.singer = singer;
//     this.title = title;
//     this.release = new Date(release);
//     this.getReleaseDay = function () {
//         return this.release.getDay();
//     }
//     // console.log(this);
// }
// Song.prototype.getInfo = function(){  // 프로토타입에  getInfo 추가
//     return `이 노래는 ${this.singer}의 노래이고 제목은 ${this.title}입니다`
// }

// const song1 = new Song("bts", "DNA", "2017-09-18");  // new 키워드를 통해 객체를 인스턴스화
// const song2 = new Song("EMINEM", "Love Youerself", "2022-05-11");

// console.log(song2.getInfo());  // 0부터 일요일


class Song{
    constructor(singer, title, release){
        this.singer = singer;
        this.title = title;
        this.release = new Date(release);
    }
    getReleaseDay(){
        return `이 노래는 ${this.singer}의 노래이고 제목은 ${this.title}입니다`
    }
}
const song1 = new Song("bts", "DNA", "2017-09-18");  // new 키워드를 통해 객체를 인스턴스화
const song2 = new Song("EMINEM", "Love Youerself", "2022-05-11");

console.log(song1)