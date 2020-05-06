//.filter() 過濾
//.map()
//.sort() 分類
//.reduce()

const users = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const users2 = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// 1. use .filter //篩選範圍
// const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
let fifteen = users.filter(function(e){
    return (e.year>=1500 && e.year<1600);
});
console.log(fifteen);


// 2. use .map //指定資料
//const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
let fullName = users.map(function(e){
    return (e.first+" "+e.last);
});
console.log(fullName);


// 3. use .sort //排訊資料
// const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
let ordered = users.sort(function(a,b){
    if(a.year>b.year){
        return 1; //a在b後
    }
    else if (a.year<b.year){
        return -1; //a在b前
    }
    else {
        return 0;
    }
});
console.log(ordered);


// 4. use reduce //資料內容的累加
let totalYears = users.reduce(function(total,e){
    return total + (e.passed - e.year);
},0);
console.log(totalYears);

// 5. use sort //排序資料
let oldest = users.sort(function(a,b){
    if(a.passed-a.year > b.passed-b.year){
        return -1; //a在b前
    }
    else if(a.passed-a.year < b.passed-b.year){
        return 1; //a在b後
    }
    else{
        return 0;
    }
})
console.log(oldest);