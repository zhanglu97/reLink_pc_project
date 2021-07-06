<template>
    <div class="addProject CategoryCodingAdd">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-form-item class="formList" prop="addFormData1" label="品类名称：">
                    <el-input clearable class="input_right" placeholder="请输入品类名称" v-model="addForm.addFormData1"></el-input>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData2" label="前置编码：">
                    <el-input clearable class="input_right" placeholder="请输入前置编码" v-model="addForm.addFormData2"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { CategoryName, CategoryNum } from '@/assets/js/verify'
export default {
    data(){
        return {
            disabled: false,
            imgSrc: {},
            addForm:{
                addFormData1: '',//品类名称
                addFormData2: '',//前置编码
            },
            rules: {
                addFormData1:[
                    { required: true, validator: CategoryName, trigger: 'blur' },
                ],
                addFormData2:[
                    { required: true, validator: CategoryNum, trigger: 'blur' },
                ],
            },
        }
    },
    methods: {
        setFormData(formName){
            let addForm = {
                ...this.addForm,
            }
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('addForm', addForm)
                }else {
                    return false
                }
            })
        },
    },
    mounted(){
        
    },
    components: {
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/style/dialog.scss";
</style>