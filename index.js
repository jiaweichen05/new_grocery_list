itemIdx = null
itemVal = null

function recordData()
{
    groceryVal = form.groceryInput.value
    numVal = parseInt(form.numInput.value)
}
function rewriteList()
{
    shoppingList.innerHTML = ""
    for (let i = 0; i < groceryArr.length; i++)
    {
        listDisplay = i + 1
        shoppingList.innerHTML += "<p>" + listDisplay + ": " + groceryArr[i] + "</p>"
    }
}
function addGrocery()
{
    recordData()
    groceryArr.push(groceryVal)
    rewriteList()
}
function deleteGrocery()
{
    recordData()
    idx = numVal - 1
    groceryArr.splice(idx, 1)
    rewriteList()
}
function moveUpList()
{
    recordData()
    if (numVal > 1 && numVal <= groceryArr.length)
    {
        idx = numVal - 1
        aboveIdx = idx - 1
        aboveVal = groceryArr[aboveIdx]
        atVal = groceryArr[idx]
        groceryArr.splice(aboveIdx, 2, atVal, aboveVal)
        // groceryArr.push(firstVal)
        rewriteList()
    }
}
function moveDownList()
{
    recordData()
    if (numVal >= 1 && numVal < groceryArr.length)
    {
        idx = numVal - 1
        belowIdx = idx + 1
        belowVal = groceryArr[belowIdx]
        atVal = groceryArr[idx]
        groceryArr.splice(idx, 2, belowVal, atVal)
        // groceryArr.push(firstVal)
        rewriteList()
    }
}