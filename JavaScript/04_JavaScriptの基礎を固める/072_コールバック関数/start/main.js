function hello(callback, lastname) {
    console.log(callback);
    console.log('hello ' + callback(lastname));
}

function getName() {
    return 'Code Mafia';
}
const getFirstName = function(name) {
    return 'Code' + name;
}

hello(getFirstName, 'Mafia');