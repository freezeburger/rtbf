<template>
    <div :class="getClass" >
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'BaseText',
    props: ['TextType','Emphase'],
    /*props:{
            TextType : new Array(['Title1','Title2','SmallText','Text']),
            Emphase : new Array([true,false]),
            color:{
                    validator(v)
                        {return (v=='color')}
                  }
          },
      */
     
    mounted(){
         if ((this.TextType=="Text") || (this.TextType=="SmallText"))
        document.addEventListener("selectionchange", e => this.BaseSelect(e));
    },
    
    methods:{
        BaseSelect : function() {
            const sel = document.getSelection();
            this.$emit("selection",sel);
            console.log(sel);
        }
     },
    computed:{
        getClass() {
                var aClass = []
                aClass.push("BaseText");
                switch (this.TextType)
                {
                    case "Title1":
                        aClass.push("Title1");
                        break;
                    case "Title2":
                        aClass.push("Title2");
                        break;
                    case "SmallText":
                        aClass.push("SmallText");
                        break;
                    case "Text":
                        aClass.push("TextDefault");
                        break;
                    default:
                        break;
                }
                if ((this.TextType=="SmallText") || (this.TextType=="Text"))
                {
                    if (this.Emphase=="true")
                        aClass.push("Border");
                       
                }
                return aClass.join(" ");
        }
    },
/*    data:{
        Title1:"Title1",
        Title2:"Title2",
        SmallText:"SmallText",
        Text:"Text"
    },*/
    components: 
   {
    }
}
</script>

<style scoped>
    .BaseText
    {
        font-family: 'Courier New', Courier, monospace;
    }
    .TextDefault {
           font-size:12px;
    }
    .TextDefault::selection {
        background-color: yellow;
    }
    .Title1
    {
        font-size:2em;
        font-weight: bolder;
    }
    .Title2
    {
        font-size:1.5em;
        font-weight:bold;
    }
    .SmallText
    {
        font:10px;
    }

    .SmallText::selection {
        background-color: yellow;
    }

    .Border
    {
        background-color:lightgrey;
        border : 1px solid darkgray;
    }
</style>
