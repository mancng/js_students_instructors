

function studentNames(students){

    for(var i = 0; i < students.length; i++){
        console.log(students[i].first_name + " " + students[i].last_name);
    }
}

function studentInstructor(users){

    for(var key in users){
        console.log(key);

        for(var i = 0; i < users[key].length; i++) {

            var firstNameCount = users[key][i].first_name.length;
            var lastNameCount = users[key][i].last_name.length;

            console.log(i+1 + " - " + users[key][i].first_name + " " + users[key][i].last_name + " - " + (firstNameCount + lastNameCount));
        }
    }
}
