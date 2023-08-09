var members = ['David','Daeho','Hi'];
console.log(members[1]); //Daeho
var i=0;
while(i<members.length){
    console.log('array loop',members[i])
    i+=1;
}
var roles = {
    'programmer':'David',
    'Student':'Daeho',
    'Hi':'Hi'
}

console.log(roles.Student); // Daeho

for(var name in roles){
    console.log('object => ',name,'value => ',roles[name]);
}