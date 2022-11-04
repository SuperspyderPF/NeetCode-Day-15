 = (l,s = null) => {for(let i = 0; i < l.length; i++){ s = merge(s, l[i])}   return s}; merge = ( l1,  l2) => { if (l1 == null) {return l2} if (l2 == null) {return l1} if (l1.val < l2.val) { l1.next = merge(l1.next, l2); return l1; } else { l2.next = merge(l1, l2.next); return l2; }}
        
    
        
  
    
        
        
    
        
        
   


