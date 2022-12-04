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

function addGrocery()
{
    recordData()
    groceryArr.push(groceryVal)
    createTable()
}

function deleteGrocery()
{
    recordData()
    let idx = numVal - 1
    groceryArr.splice(idx, 1)
    createTable()
}

function moveUpList()
{

    recordData()

    if (isNaN(numVal))
    {
        (numVal = 1)
        document.getElementById("numInput").value = 1;
    }

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
    createTable()
    document.getElementById("numInput").value = String(groceryArr.indexOf(itemVal) + 1);
}

function moveDownList()
{
    recordData()

    if (isNaN(numVal))
    {
        (numVal = 1)
        document.getElementById("numInput").value = 1;
    }

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
    createTable()
    document.getElementById("numInput").value = String(groceryArr.indexOf(itemVal) + 1);
}

function createTable() {
    groceryTable.replaceChildren();
    let tableSize = groceryArr.length;
    (tableSize == 0) ? emptyCart() : addCartItems(tableSize)
}

function emptyCart() {
    let newRow = groceryTable.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Empty!"
}

function addCartItems(tableSize) {
    for (let i = 0; i < tableSize; i++) {
        let newRow = groceryTable.insertRow();
        let newCell = newRow.insertCell();
        itemNum = i + 1;
        newCell.innerHTML = `Item ${itemNum}`;
        newCell = newRow.insertCell();
        newCell.innerHTML = groceryArr[i];
        }
}