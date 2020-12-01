function checkUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => handleData(json))
}

function handleData(data) {
    console.log(data);

    var size = document.getElementById("usersNumber").value; 
    if(size){
        var users = data.slice(0, size);
    }else{
        var users = data;
    }
    var usersTable = document.getElementById("usersTable");
    usersTable.innerHTML = "";
    if (data) {
        var tableHead = document.createElement("thead");
        var tableHeadItem = document.createElement("tr");
        var user = users[0];
        for (var key in user) {
            if (user.hasOwnProperty(key)) {
                console.log(key + " -> " + user[key]);
                var tableHeadItemTh = document.createElement("th");
                tableHeadItemTh.setAttribute("scope", "col")
                tableHeadItemTh.innerHTML = key;
                tableHeadItem.appendChild(tableHeadItemTh);
            }
        }
        tableHead.appendChild(tableHeadItem);
        usersTable.appendChild(tableHead);

        var tablebody = document.createElement("tbody");
        var count = 0;
        while (users[count]) {
            user = users[count];
            var userRow = document.createElement("tr");
            for (var key in user) {
                if (user.hasOwnProperty(key)) {
                    console.log(key + " -> " + user[key]);
                    var userRowProperty = document.createElement("td");
                    if (typeof user[key] === "object") {
                        if(key === "company"){
                            userRowProperty.innerHTML = user[key].name;
                        }else if(key === "address"){
                            userRowProperty.innerHTML = user[key].city;
                        }
                    } else {
                        userRowProperty.innerHTML = user[key];
                    }
                    userRow.appendChild(userRowProperty);
                }
            }
            tablebody.appendChild(userRow);
            count++;
        }

        usersTable.appendChild(tablebody);

    }

}