// Code your solution here
//matching
function findMatching(driverNames, searchqueries)
{
    return driverNames.filter(function(results){
        return results.toLowerCase() === searchqueries.toLowerCase()
    })
}

function fuzzyMatch(driverNames,testStr)
{
    return driverNames.filter(function(results){
        return results.toLowerCase().indexOf(testStr.toLowerCase()) === 0
    })
}

function matchName(driverNames,searchqueries)
{
    return driverNames.filter(function(result){
        return result.name === searchqueries
    })
}
