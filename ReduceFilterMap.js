// using REDUCE
const data = [
    { sport: 'cricket', name: 'name1' },
    { sport: 'kabaddi', name: 'name2' },
    { sport: 'cricket', name: 'name3' },
    { sport: 'football', name: 'name4' },
    { sport: 'football', name: 'name4' }
];

const sportCount = data.reduce((acc, current) => {
    const sport = current.sport;
    if (acc[sport]) {
        acc[sport]++;
    } else {
        acc[sport] = 1;
    }
    return acc;
}, {});

console.log("Reduce:", sportCount);

// using FILTER
const data2 = [
    { sport: 'cricket', name: 'name1' },
    { sport: 'kabaddi', name: 'name2' },
    { sport: 'cricket', name: 'name3' },
    { sport: 'football', name: 'name4' }
];

const sportCount2 = {};

data2.forEach(item => {
    const count = data2.filter(obj => obj.sport === item.sport).length;
    if (!sportCount2[item.sport]) {
        sportCount2[item.sport] = count;
    }
});

console.log("Filter:", sportCount2);

// using MAP
const data3 = [
    { sport: 'cricket', name: 'name1' },
    { sport: 'kabaddi', name: 'name2' },
    { sport: 'cricket', name: 'name3' },
    { sport: 'football', name: 'name4' }
];

const sportCount3 = {};
data3.map(item => {
    if (sportCount3[item.sport]) {
        sportCount3[item.sport]++; 
    } else {
        sportCount3[item.sport] = 1;  
    }
    return item; 
});

console.log("Map:", sportCount3);
