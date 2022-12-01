let itemIdx = null
let itemVal = null

let swapVal = (idx1, idx2) => {
    let temp = groceryArr[idx2]
    groceryArr[idx2] = groceryArr[idx1]
    groceryArr[idx1] = temp
}

let recordData = () => {
    groceryVal = form.groceryInput.value
    numVal = parseInt(form.numInput.value)
}

function rewriteList()
{
    shoppingList.innerHTML = ""
    for (let i = 0; i < groceryArr.length; i++)
    {
        let listDisplay = i + 1
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
    let idx = numVal - 1
    groceryArr.splice(idx, 1)
    rewriteList()
}
function moveUpList()
{
    recordData()
    let idx = numVal - 1

    if (itemIdx === null || itemIdx != idx)
    {
        itemIdx = idx
        itemVal = groceryArr[idx]
    }

    let currentIdx = groceryArr.indexOf(itemVal)
    
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
    let idx = numVal - 1

    if (itemIdx === null || itemIdx != idx)
    {
        itemIdx = idx
        itemVal = groceryArr[idx]
    }

    let currentIdx = groceryArr.indexOf(itemVal)

    if (currentIdx == groceryArr.length - 1)
    {
        alert("Can't move down anymore \nEnter a number of a different grocery item")
        return 
    }
    swapVal(currentIdx, currentIdx + 1)
    rewriteList()
}
