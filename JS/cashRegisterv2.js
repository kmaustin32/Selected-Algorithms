/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/

var insufficient = {
  status: "INSUFFICIENT_FUNDS",
  change: []
};
Object.freeze(insufficient);

var closed = {
  status: "CLOSED",
  change: [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]
};

var open = {
  status: "OPEN",
  change: [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]
};

const CURRENCY = {
  "PENNY": .01,
  "NICKEL": .05,
  "DIME": .10,
  "QUARTER": .25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};
Object.freeze(CURRENCY);


function checkCashRegister(price, cash, cid) {
  let change = (cash - price).toFixed(2);
  let totalDrawer = 0;

  for (let i = 0; i < cid.length; i++) {
    totalDrawer += cid[i][1];
  }

  totalDrawer = Math.round(totalDrawer * 100) / 100;
  
  var num100 = 0;
  var num20 = 0;
  var num10 = 0;
  var num5 = 0;
  var num1 = 0;
  var numQuarter = 0;
  var numDime = 0;
  var numNickel = 0;
  var numPenny = 0;


  if (change > totalDrawer) {
    return insufficient;
  } else if (change == totalDrawer) {
    let equaled = {
      status: "CLOSED",
      change: cid
    }
    return equaled;
  } else {
    var finalArray = [
      ['PENNY', 0],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0]
    ];

    while (change > 0) {
      if (change >= 100 && cid[8][1] >= num100) {
        num100 += 100;
        change -= 100;
        finalArray[8][1] = num100;
      } else if (change >= 20 && cid[7][1] > num20) {
        num20 += 20;
        change -= 20;
        finalArray[7][1] = num20;
      } else if (change >= 10 && cid[6][1] > num10) {
        num10 += 10;
        change -= 10;
        finalArray[6][1] = num10;
      } else if (change >= 5 && cid[5][1] > num5) {
        num5 += 5;
        change -= 5;
        finalArray[5][1] = num5;
      } else if (change >= 1 && cid[4][1] >num1) {
        num1 += 1;
        change -= 1;
        finalArray[4][1] = num1;
      } else if (change >= .25 && cid[3][1] > numQuarter) {
        numQuarter += .25;
        change -= .25;
        finalArray[3][1] = numQuarter;
      } else if (change >= .10 && cid[2][1] > numDime) {
        numDime += .10;
        change -= .10;
        finalArray[2][1] = numDime;
      } else if (change >= .05 && cid[1][1] > numNickel) {
        numNickel += .05;
        change -= .05;
        finalArray[1][1] = numNickel;
      } else {
        if (change >= .01 && cid[0][1] >= numPenny) {
          numPenny += .01;
          change -= .01;
          finalArray[0][1] = numPenny;
        } else if (change > 0 && cid[0][1] >= numPenny){
          while (change > 0 && cid[0][1] >= numPenny) {
            change -= .01;
            numPenny += .01;
            finalArray[0][1] = numPenny;
            finalArray.reverse();
          }
        } else {
          return insufficient;
        }
      }
    }

    let result = finalArray.filter(item => item[1] != 0);
    open = {
      status: "OPEN",
      change: result
    };

    if (result.length < 1 || change > 0) {
    return insufficient;
    }

    return open;
  }

  console.log("Change: " + change);
  console.log("Total in Drawer: " + totalDrawer);
  console.log("Price: " + price);
  console.log("Cash Paid: " + cash);
}



/*
function runTest(name, expected, actual) {
  if(expected === actual) {
    console.log("TEST:SUCCESS:" + name);
  } else {
    console.log("TEST:FAILED:" + name + ":Expected:" + JSON.stringify(expected) + ":ACTUAL:" + JSON.stringify(actual));
  }
}
*/

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
