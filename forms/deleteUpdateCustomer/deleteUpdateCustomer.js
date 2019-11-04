hmb2.onclick = function(s) {
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

deleteUpdateCustomer.onshow=function(){
  // get all the data from the database when program loads
      let query = "SELECT DISTINCT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=bjs03838&query=" + query)
      if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        drpCustomerSelection.clear()   
        for (i = 0; i <= results.length - 1; i++) 
        drpCustomerSelection.addItem(results[i])
}
}

drpCustomerSelection.onclick=function(s){
    drpCustomerSelect.value = s


rdoUpdateDelete.onchange=function(){
  switch(rdoUpdateDelete.value) {
  case 0:
    NSB.MsgBox(`Enter a new name in the box`)
    btnSubmitUpdate.onclick=function(){
    newName = lblUpdateName.value
    let query = "UPDATE customers SET name = newName"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=bjs03838&query=" + query)
    NSB.MsgBox(`Name Changed!`)
}
    break;
case 1:
    custDelete =  drpCustomerSelect.value
    let customerDel = "DELETE FROM customer WHERE name = " + '"' + drpCustomerSelection.value + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=bjs03838&query=" + customerDel)
      if (req1.status == 200) {
      lblCompletion.value = "You have deleted " + custDelete
}
}
}
}


