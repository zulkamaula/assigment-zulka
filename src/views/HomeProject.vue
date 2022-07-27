<template>
    <div class="container-fluid text-center">
        
        <div class="row p-2 justify-content-center bg-secondary text-light">
            <div class="col font-weight-bold display-4">
                ZulApp!
            </div>
            <div class="col font-italic border align-self-center p-1" style="font-size: 2vmin;">
                Assigment Result by Zulkariski to PT. Log Kar Indonesia
            </div>
        </div>

        <div class="row bg-light justify-content-center p-3">
            <div class="col-11">

                <div class="row mt-5 mb-4 justify-content-between justify-content-md-center align-items-start">

                    <div class="col-lg-5 col-md-8 col-sm-11 bg-white p-3 rounded shadow-sm text-left cardTask">
                        <span class="titleTask">
                            TASK NO.1
                        </span>
                        <span class="titleTaskEks border-bottom pb-2 d-none">
                            TASK NO.1 - Check Palindrome Words

                            <div class="row justify-content-center mt-4">
                                <div class="col-11">
                                    <div class="d-block font-italic text-muted">
                                        Visit the following link, and <b> don't forget to click button Run first </b> to be able to test the program.
                                    </div> 
                                      
                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="checkPalindrome" readonly>
                                        <div class="input-group-append">
                                            <button class="btn btn-secondary" @click="toVisit(checkPalindrome)">
                                                Try it
                                            </button>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </span>
                    </div>

                    <div class="col-lg-5 col-md-8 col-sm-11 bg-white p-3 rounded shadow-sm text-left cardTask">
                        <span class="titleTask">
                            TASK NO.2
                        </span>
                        <span class="titleTaskEks border-bottom pb-2 d-none">
                            TASK NO.2 - Cool Triangle

                            <div class="row justify-content-center mt-4">
                                <div class="col-11">  
                                    <div class="d-block font-italic text-muted">
                                        Visit the following link, and <b> don't forget to click button Run first </b> to be able to test the program.
                                    </div> 

                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="coolTriangle" readonly>
                                        <div class="input-group-append">
                                            <button class="btn btn-secondary" @click="toVisit(coolTriangle)">
                                                Try it
                                            </button>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </span>
                    </div>

                    <div class="col-lg-5 col-md-8 col-sm-11 bg-white p-3 rounded shadow-sm text-left cardTask">
                        <span class="titleTask">
                            TASK NO.3
                        </span>
                        <span class="titleTaskEks border-bottom pb-2 d-none">
                            TASK NO.3 - JSON Beauty Converter

                            <div class="row justify-content-center mt-4">
                                <div class="col-11">
                                    <div class="d-block font-italic text-muted">
                                        Visit the following link, and <b> don't forget to click button Run first </b> to be able to test the program.
                                    </div> 

                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="convertBeautyJSON" readonly>
                                        <div class="input-group-append">
                                            <button class="btn btn-secondary" @click="toVisit(convertBeautyJSON)">
                                                Try it
                                            </button>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </span>
                    </div>

                    <div class="col-lg-5 col-md-8 bg-white p-3 rounded shadow-sm text-left cardTask">
                        <span class="titleTask">
                            TASK NO.4
                        </span>
                        <span class="titleTaskEks border-bottom pb-2 d-none">
                            TASK NO.4 - Create WebApp consume API

                            <div class="row justify-content-center mt-4">
                                <div class="col-11">
                                    <div class="d-block font-italic text-muted">
                                        Visit the following link, and <b> don't forget to click button Run first </b> to be able to test the program.
                                    </div>  
                                    
                                    <div class="input-group">
                                    <input type="text" class="form-control" v-model="createWebApp" readonly>
                                        <div class="input-group-append">
                                            <button class="btn btn-secondary" @click="toVisit(createWebApp)">
                                                Try it
                                            </button>
                                        </div>
                                    </div>  
                                </div>
                            </div>

                            <div class="row justify-content-center mt-4">
                                <div class="col-11">  
                                    <div class="d-block font-italic text-muted">
                                        You can also view the deployment of this application at :
                                    </div>
                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="deployApps.myMav" readonly>
                                        <div class="input-group-append">
                                            <button class="btn btn-secondary" @click="toVisit(deployApps.myMav)">
                                                Try it
                                            </button>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </span>
                    </div>
                </div>

            </div>
        </div>

         
    </div>
</template>

<script>

export default {
    data(){
        return {
            checkPalindrome: 'https://codepen.io/zulkamaula/pen/JjLryLB',
            coolTriangle: 'https://codepen.io/zulkamaula/pen/dymVVdo',
            convertBeautyJSON: 'https://codepen.io/zulkamaula/pen/jOzGGZz',
            createWebApp: 'https://github.com/zulkamaula/MAV---Movie-Vue-App',
            deployApps: {
                myMav: 'https://mymav.netlify.app/'
            }
        }
    },
    methods: {
        toVisit(URL){
            window.open(URL, '_blank')
        }
    }
    
}
</script>

<style>
.cardTask {
    margin: 2vmin;
}

.cardTask:hover {
    cursor: pointer;
}

.titleTaskEks {
    transition: all .2s;
    opacity: 0 !important;
}

.cardTask:hover .titleTask {
    opacity: 0;
    display: none;
}

.cardTask:hover .titleTaskEks {
    opacity: 1 !important;
    display: inline !important;
}

    
</style>
