findMedianSortedArrays = (n, n1, x = [...n,...n1].sort((a,b)=>a-b), z = x.length) => z % 2 === 0 ?(x[(z/2)]+x[(z/2)-1])/2:x[Math.floor(z/2)]



findMedianSortedArrays = (n1, n2,n = n1.concat(n2),s = Array.from(n).sort((a,b)=>a-b), middle = Math.floor(s.length/2)) => {if(s.length % 2 === 0) return (s[middle-1]+s[middle])/2; return s[middle]}