hmb3.onclick = function(s) {
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

drpCustomerAddition.onshow=function(){
     // get all the data from the database when program loads
      let query = "SELECT DISTINCT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=bjs03838&query=" + query)
      if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        drpCustomerAddition.clear()   
        for (i = 0; i <= results.length - 1; i++) 
        drpCustomerAddition.addItem(results[i])
}
}

btnAddNewCust.onclick=function(){
  let newName = txtName.value
  let newCity = txtCity.value
  let newStreet = txtStreet.value
  let newState = txtState.value
  let newZipCode = txtZipcode.value
  let query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('"+newName+"', '"+newStreet+"', '"+newCity+"','"+ newState+"'," +newZipCode+")"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=bjs03838&query=" + query)
  if (req1.status == 200) {
  NSB.MsgBox(`A new customer was just added!`)
  }
}
