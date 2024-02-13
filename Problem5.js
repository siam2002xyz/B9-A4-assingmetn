function password(user) {
    
    const firstLetter = user.siteName.toUpperCase();
    const password = `${user.siteName}#${user.name}@${user.birthYear}`;
    if(user.birthYear.toString().length !== 4){
        return "Invalid";
    }
    else{
        return password;
    }
    
    
}

const user = { name: "toky", birthYear: 200, siteName: "Facebook" };
console.log(password(user));
