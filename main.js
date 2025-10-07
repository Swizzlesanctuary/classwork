
    
        let name = prompt("გთხოვთ შეიყვანოთ თქვენი სახელი:");
        let surname = prompt("გთხოვთ შეიყვანოთ თქვენი გვარი:");
        let birthYear = prompt("გთხოვთ შეიყვანოთ თქვენი დაბადების წელი:");
        let city = prompt("გთხოვთ შეიყვანოთ თქვენი საცხოვრებელი ქალაქი:");

     
        let currentYear = new Date().getFullYear();
        let age = currentYear - birthYear;

        
        alert("გამარჯობა " + name + " " + surname + ", მიხარია რომ უკვე " + age + " წლის ხარ და " + city + "-დან ხარ!");
   


