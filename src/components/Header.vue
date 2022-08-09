<template>
<div id="headerDiv">
<div className="lg:hero lg:bg-base-200 w-full rounded-lg my-8">
        <div className="lg:hero-content my-8 gap-x-20 flex-col lg:flex-row-reverse">
            <img  src="https://ashrafur-rahman-portfolio.netlify.app/static/media/OPU%20PIC.7ff55765a87e24c11225.jpg" className="max-w-sm rounded-xl shadow-2xl mx-auto" />
            <div>
                <h1 className="lg:text-5xl lg:text-left text-center text-3xl font-semiBold">Ashrafur Rahman</h1>
                <h3 id='typewriter'
                 className="py-6 lg:text-3xl text-center break-words text-sm font-md">
                     Junior Front-End Web Developer
                 </h3>

                <a target='blank' href="https://drive.google.com/file/d/1PZEd46myvbm0n7IG6YB8RHNUBhwi1c4S/view?usp=sharing">
                <button  class="btn lg:mx-0 mx-auto lg:w-2/5 w-full btn-active btn-secondary hover:-translate-y-1 hover:scale-110 hover:btn-success duration-500 ">Download Resume</button>
                </a>

            </div>
        </div>
    </div>

</div>
</template>


<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : "Header"
}
</script>

<style>
 #headerDiv {
     padding-top: 30px;
 }


#typewriter { 
    overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: none; }
  }
</style>