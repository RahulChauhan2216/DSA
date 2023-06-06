let items = [["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], ruleKey = "type", ruleValue = "phone"

var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;

    if (ruleKey == "color") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][1] == ruleValue) {
                count++
            }
        }
    }

    if (ruleKey == "type") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][0] == ruleValue) {
                count++
            }
        }
    }

    if (ruleKey == "name") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][2] == ruleValue) {
                count++
            }
        }
    }
    return count;
};

console.log(countMatches(items, ruleKey, ruleValue));