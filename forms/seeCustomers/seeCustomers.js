hmb1.onclick = function(s) {
    if (typeof(s) == "object") {
        return;
    }
    if (s === "See Customers") {
        ChangeForm(seeCustomers)
    }
    if (s === "Delete/Update Customers") {
        ChangeForm(deleteUpdateCustomer)
    }
    if (s === "Add Customer") {
        ChangeForm(addCustomer)
    }
};

drpCustomerSelect.onshow=function(){
     // get all the data from the database when program loads
      let query = "SELECT DISTINCT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=bjs03838&query=" + query)
      if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        drpCustomerSelect.clear()   
        for (i = 0; i <= results.length - 1; i++) 
        drpCustomerSelect.addItem(results[i])
}
}

drpCustomerSelect.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    drpCustomerSelect.value = s   // make dropdown show choice user made
      let query = "SELECT name, street, city, state, zipcode FROM customer WHERE name = " + '"' + drpCustomerSelect.value + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=bjs03838&query=" + query)
      var selectionResults = JSON.parse(req1.responseText)
      lblCustomerSelect.value = selectionResults
}
}