<template>
<div class="base-main">
    <h1>{{mainTitle}}</h1>
    <h2>{{mainSubtitle}}</h2>
    <div class="container"  v-bind:class="{ 'overflow-hidden': !scrollable }">
        <div class="row">
           <slot name='baseBreadcrumb'></slot>
        </div>
        <div class='row' >
            <div :class="gridCSS" style="width:100%">
                <slot></slot>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'BaseMain',
  computed:{
      gridCSS(){
         return (this.display=='grid') ? 'd-flex flex-wrap gridview' : '';
      }
  },
  props: {
    mainTitle:
    {
        type:String,
        required: true,
        default:"The most complete RTBF website"
    },
    mainSubtitle:{
        type:String
    },
    scrollable:
    {
            type:Boolean,
            default:true
    },
    display:
    {
        type:String,
        // validator(value){
        //     if(value==("normal"||"grid"))
        //         return true;
        //     else
        //         return false;
        // },
        default: "grid"
    }
  }
}
</script>

<style>
.base-main{
 background-image: url("../../assets/pc.jpg");
  height: 840px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
}
.gridview{
    margin:60px;
}
.gridview> *{
    background-color:darkcyan;
    opacity:0.8;
    color:white;
    border-style: solid;
    border-radius: 5px;
    border-color: black;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    padding:30px;
    margin:10px;

}
h1{
    color:white;
    font-size:50px;
    padding-top:5%;
    text-shadow: 2px 2px black;
}
</style>