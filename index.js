


    let set1 = [3, 1, 7, 9];
    let set2 = [2, 4, 1, 9, 3];
    let sum = 0;
    let found;

  
    for (let i = 0; i < set1.length; i++) {
      found = false;
      for (let j = 0; j < set2.length; j++) {
        if (set1[i] === set2[j]) {
          found = true;
          break;
        }
      }
      if (!found) sum += set1[i];
    }


    for (let i = 0; i < set2.length; i++) {
      found = false;
      for (let j = 0; j < set1.length; j++) {
        if (set2[i] === set1[j]) {
          found = true;
          break;
        }
      }
      if (!found) sum += set2[i];
    }

    document.getElementById("output1").innerHTML =
      `Set 1: [${set1}]<br>
       Set 2: [${set2}]<br>
       Distinct Elements Sum = <strong>${sum}</strong>`;


    function dot_product(v1, v2, psObj) {
      psObj.value = 0;
      for (let i = 0; i < v1.length; i++) {
        psObj.value += v1[i] * v2[i];
      }
    }

    function checkOrthogonalProcedure() {
      let pairs = [
        { v1: [1, 2, 3], v2: [3, 2, 1] },  
        { v1: [1, 0], v2: [0, 1] },        
        { v1: [2, -3], v2: [3, 2] }       
      ];

      let output = "<strong>Using Procedure Version:</strong><br>";
      let ps = { value: 0 };

      for (let i = 0; i < pairs.length; i++) {
        let { v1, v2 } = pairs[i];
        dot_product(v1, v2, ps);
        output += `Pair ${i + 1}: v1=[${v1}], v2=[${v2}] → Dot Product=${ps.value} `;
        output += (ps.value === 0) ? "(Orthogonal)<br>" : "(Not Orthogonal)<br>";
      }

      return output;
    }


   
    function dot_product_function(v1, v2) {
      let ps = 0;
      for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
      }
      return ps;
    }

    function checkOrthogonalFunction() {
      let pairs = [
        { v1: [1, 0], v2: [0, 1] },        
        { v1: [2, 5], v2: [-5, 2] },      
        { v1: [1, 2, 3], v2: [4, 5, 6] }    
      ];

      let output = "<br><strong>Using Function Version:</strong><br>";

      for (let i = 0; i < pairs.length; i++) {
        let { v1, v2 } = pairs[i];
        let ps = dot_product_function(v1, v2);
        output += `Pair ${i + 1}: v1=[${v1}], v2=[${v2}] → Dot Product=${ps} `;
        output += (ps === 0) ? "(Orthogonal)<br>" : "(Not Orthogonal)<br>";
      }

      return output;
    }


   
    document.getElementById("output2").innerHTML =
      checkOrthogonalProcedure() + checkOrthogonalFunction();

