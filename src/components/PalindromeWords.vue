<template>
    <div>
        <div class="row">
            <div class="col">
                Enter the palindrome words here :
                <div class="input-group">
                    <input type="text" class="form-control" v-model="inputPalindrome">
                     <div class="input-group-append">
                        <button class="btn btn-outline-secondary" @click="checkPalindrome(inputPalindrome)" id="btnCheck">
                            Check
                        </button>
                        <button class="btn btn-secondary" @click="reset()" id="btnClear">
                            Clear
                        </button>
                    </div>
                </div>
                
                <div class="row mt-3">
                    <div class="col">
                        <b>
                            Result Output :
                        </b>
                        
                        <div style="margin-top: 2vmin; ">
                            <div id="TotalPalindrome">
                            </div>
                            <div id="PalindromeWord">
                            </div>
                            <div id="PalindromeIndex">
                            </div>
                            <div id="InvalidPalindromeIndex">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputPalindrome: '',
            PalindromeWord: [],
            notPalindromeWord: []
        }
    },
    methods: {
        checkPalindrome() {
            let Words = this.inputPalindrome;
  
            let devideWords = Words.split(' ');
            
            devideWords.forEach((items) => {
                this.palindromeFn(items)
            });
            
            // CEK INDEX PALINDROME
            let FindIndex1 = []
                this.PalindromeWord.forEach((item) =>{
                let res = devideWords.findIndex(i => i === item)
                return FindIndex1.push(res)
            })
            
            // CEK INDEX NOT PALINDROME
            let FindIndex2 = []
                this.notPalindromeWord.forEach((item) =>{
                let res = devideWords.findIndex(i => i === item)
                return FindIndex2.push(res)
            })
            
            const totalWord = this.PalindromeWord.length;

            document.getElementById('TotalPalindrome').innerHTML = 
                `Total Detected PalindromeWord : <b>${totalWord}</b>`;
            
            document.getElementById('PalindromeWord').innerHTML =
                `PalindromeWord : <b>${this.PalindromeWord}</b>`;

            document.getElementById('PalindromeIndex').innerHTML =
                `PalindromeIndex : <b>${FindIndex1}</b>`;

            document.getElementById('InvalidPalindromeIndex').innerHTML =
                `Invalid PalindromeIndex : <b>${FindIndex2}</b>`;
        },
        palindromeFn(string) {
            const stringLength = string.length;
            for (let i = 0; i < stringLength / 2; i++) {
                if (string[i] !== string[stringLength - 1 - i]) {
                    return this.notPalindromeWord.push(string);
                }
            }
            return this.PalindromeWord.push(string);
        },
        reset() {
            this.inputPalindrome = '';
            this.PalindromeWord = [];
            this.notPalindromeWord = [];

            document.getElementById('TotalPalindrome').innerHTML = 
                ``;
            
            document.getElementById('PalindromeWord').innerHTML =
                ``;

            document.getElementById('PalindromeIndex').innerHTML =
                ``;

            document.getElementById('InvalidPalindromeIndex').innerHTML =
                ``;
        }
    }
    
}
</script>
<style>
    
</style>