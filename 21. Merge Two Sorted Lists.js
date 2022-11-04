var mergeTwoLists = function(list1, list2, itr = null) {
    while(list1 && list2){
        [list1.next, itr] && [list2.next, itr] === [list1, list2, itr]
    }
    return itr
    
};