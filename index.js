
//     expect(append).to.have.ordered.members(["Milo", "Otis", "Garfield", "Odie"]);

const append = ['Milo', "Otis", 'Garfield'];
append.push('Odie');
append;
// => ["Milo", "Otis", "Garfield", "Odie"]

//

// expect(prepend).to.have.ordered.members(["Odie", "Milo", "Otis", "Garfield"]);

const prepend = ['Milo', "Otis", 'Garfield'];
prepend.unshift('Odie');
prepend;
//  => ["Odie", "Milo", "Otis", "Garfield"]

// 

// expect(removeLast).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');

const removeLast = ['Milo', "Otis", 'Garfield'];
removeLast.pop();
removeLast;

// expect(removeFirst).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');

const removeFirst = ['Milo', "Otis", 'Garfield'];
removeFirst.shift();
removeFirst;