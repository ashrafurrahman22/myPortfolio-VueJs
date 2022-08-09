<template>
<div id="mainDiv" class="px-12 bg-base-300">
    <Header/>
     <div className='card w-64 bg-base-100 shadow-xl mx-auto mb-5'>
                <div className='card-body bg-primary'>
                    <h2 className="text-center text-4xl font-bold text-white tracking-widest">Skills</h2> <hr />
                </div>
            </div>
    <Skills/>
            <div className='card w-64 bg-base-100 shadow-xl mx-auto'>
                    <div className='card-body bg-primary'>
                        <h2 className="text-center text-4xl font-bold text-white tracking-widest">Projects</h2> <hr />
                    </div>
                </div>
                <Project/>
                <div className='card w-64 bg-base-100 shadow-xl mx-auto'>
                    <div className='card-body bg-primary'>
                        <h2 className="text-center text-4xl font-bold text-white tracking-widest">Contact</h2> <hr />
                    </div>
                </div>
                <Contact/>
</div>

</template>

<script>

import Header from './Header.vue';
import Skills from './Skills.vue';
import Project from './Project.vue';
import Contact from './Contact.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Home',
    components : {
        Header,
        Skills,
        Project,
        Contact
    }
}
</script>


<style>
    #mainDiv {
        font-family: ;
    }
</style>