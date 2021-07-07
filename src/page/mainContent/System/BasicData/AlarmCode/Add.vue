<template>
    <div class="addProject AlarmCodeAdd">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-form-item class="formList" prop="addFormData1" label="报警代码：">
                    <el-input clearable class="input_right" placeholder="请输入报警代码" v-model="addForm.addFormData1"></el-input>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData2" label="故障内容：">
                    <el-input clearable class="input_right" placeholder="请输入故障内容" v-model="addForm.addFormData2"></el-input>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData3" label="处理方法：">
                    <el-input clearable class="input_right" type="textarea" :rows="3"  placeholder="请输入处理方法" v-model="addForm.addFormData3"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            disabled: false,
            imgSrc: {},
            addForm:{
                addFormData1: '',//报警代码
                addFormData2: '',//故障内容
                addFormData3: '',//处理方法
            },
            rules: {
                addFormData1:[
                    { required: true,  message: '请输入报警代码', trigger: 'blur' },
                ],
                addFormData2:[
                    { required: true,  message: '请输入故障内容', trigger: 'blur' },
                ],
                addFormData3:[
                    { required: true,  message: '请输入处理方法', trigger: 'blur' },
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