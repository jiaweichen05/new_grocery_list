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
    idx = numVal - 1

    if (itemIdx === null || itemIdx != idx)
    {
        itemIdx = idx
        itemVal = groceryArr[idx]
    }

    currentIdx = groceryArr.indexOf(itemVal)

    if (currentIdx === 0)
    {
        alert("Can't move up anymore! \nEnter a number of a different grocery item")
        return
    }
    swapVal(currentIdx, currentIdx - 1)
    rewriteList()
}
function moveDownList()
{
    recordData()
    idx = numVal - 1

    if (itemIdx === null || itemIdx != idx)
    {
        itemIdx = idx
        itemVal = groceryArr[idx]
    }

    currentIdx = groceryArr.indexOf(itemVal)

    if (currentIdx === groceryArr.length - 1)
    {
        alert("Can't move down anymore \nEnter a number of a different grocery item")
        return 
    }
    swapVal(currentIdx, currentIdx + 1)
    rewriteList()
}
function swapVal(idx1, idx2)
{
    temp = groceryArr[idx2]
    groceryArr[idx2] = groceryArr[idx1]
    groceryArr[idx1] = temp
}