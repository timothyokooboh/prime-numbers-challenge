<template>
    <div class="container">
        
        <div class="input-container">
            <label for="input"> Enter number of first prime numbers</label> <br><br>
            <input 
                type="number" 
                class="input" 
                id="input"
                v-model="arrayOfPrimeNumsLength"
            >
            
        </div>

        <!-- This will serve as container for the generated table -->
        <div ref="tableContainer" class="table-container"> </div>
    </div>
</template>

<script>
/**
 *  STEP 1: Create a function called isPrime which takes a number as an argument and checks whether the number is a prime number.
 *  E.G isPrime(5) should return true. 
 *      isPrime(10) should return false.
 * 
 *  STEP 2: Create a function called getPrimeNums which takes a number as an argument and returns an array whose length equals the number passed as an argument.
 *  The values of the array should be the first set of prime numbers.
 *  E.G getPrimeNums(5) should return the first FIVE prime numbers. 
 *      getPrimeNums(10) should return the first TEN prime numbers.
 *
 * 
 *  STEP 3: Write a function called createPrimeTable which will build the multiplication table of prime numbers.
 */

export default {
    data() {
        return {
            arrayOfPrimeNums: [2], // This initializes the array of prime numbers with the value of 2.
            arrayOfPrimeNumsLength: 10 // This will be used to generate a multiplication table of the first TEN prime numbers
        }
    },
    
    methods: {
        isPrime(num) {
            for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
                if(num % i === 0) return false; 
            }
            return num > 1;
        },

        getPrimeNums(length) {
            let i = 3;

            while(this.arrayOfPrimeNums.length < length) {
                if(this.isPrime(i)) {
                    this.arrayOfPrimeNums.push(i);
                }
                i++;
            }

            return this.arrayOfPrimeNums;
        },

        createPrimeTable() {
            let result = 'x'; // This is used to simulate the multiplication sign.

            let copiedArray = [...this.arrayOfPrimeNums] // This avoids mutating the original array of prime numbers.

            copiedArray.splice(0, 0, 0); // I used this hack to ensure that the multiplication table begins with 2.

            let table = document.createElement("table");
    
            for (let i = 0; i < copiedArray.length; i++) {
                let tr = document.createElement("tr");
    
                for (let j = 0; j < copiedArray.length; j++) {
                    if(i == 0 && j == 0) {
                        let td = document.createElement("td");
                        td.append("x");
                        tr.appendChild(td);
                    }

                    else if(i == 0 && j > 0){
                        result = copiedArray[j];
                        let td = document.createElement("td");
                        td.appendChild(document.createTextNode(result));
                        tr.appendChild(td);
                    } 

                    else if(j == 0 && i > 0){
                        result = copiedArray[i];
                        let td = document.createElement("td");
                        td.appendChild(document.createTextNode(result));
                        tr.appendChild(td);
                    } 

                    else if(i > 0 && j > 0){
                        result = copiedArray[i] * copiedArray[j];
                        let td = document.createElement("td");
                        td.appendChild(document.createTextNode(result));
                        tr.appendChild(td);
                    }
          
                }
   
                table.appendChild(tr)
   
            } 
            return this.$refs.tableContainer.appendChild(table)

        },

        printResult() {
            this.getPrimeNums(this.arrayOfPrimeNumsLength)
            this.createPrimeTable()
        }
    },
    watch: {
        arrayOfPrimeNumsLength() {
            /**
             * Watch for changes in the value of arrayOfPrimeNumsLength.
             * 
             * Remove the existing table from the DOM.
             * 
             * Re-initialize arrayOfPrimeNums.
             * 
             * Call printResult function.
            */

            let table = document.getElementsByTagName("table");
            table.forEach((table) => {
                table.remove()
            })

            this.arrayOfPrimeNums = [2];

            this.printResult();
           
        }
    },

    mounted() {
        this.printResult()
    }
}
</script>

<style lang="scss" >
    .container {
        margin: 4rem auto;
        max-width: 90rem;
        width: 90%;
    }

    .table-container {
        overflow: scroll;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    table, td {
        border: 1px solid #DDDDDD;
        padding: 5px;
    }

    tr:first-child,
    table > tr > td:nth-of-type(1) {
        font-weight: bold;
    }

    tr:nth-child(even) {
        background-color: #EFEFF8;
    }
       
    td {
        padding: 10px 10px;
    }

    .input-container {
        margin: 2rem 0;
        max-width: 17rem;

        input {
            height: 1.5rem;
            width: 100%;
            outline: none;
            border: 5px solid #EFEFF8;
            border-radius: 5px;
            padding: 5px 10px;
        }

        label {
            text-transform: capitalize;
            letter-spacing: 1.08px;
        }
    }
        
</style>