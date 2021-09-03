const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Salman Shah'},
    {id: 41, name: 'Manna'},
    {id: 51, name: 'Jashim'}
];


const ids = students.map(s => s.id);
const bigger = students.find(s => s.id>40)
console.log(bigger);