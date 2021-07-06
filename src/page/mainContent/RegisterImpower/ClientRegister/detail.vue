<template>
    <div class="addProject ClientRegisterAdd">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="upLoad">
                            <ImgUpload :imgList.sync="imgSrc"></ImgUpload>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <el-form-item class="formList" prop="addFormData1" label="客户名称：">
                            <el-input clearable class="input_right" placeholder="请输入客户名称" v-model="addForm.addFormData1"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData2" label="统一代码：">
                            <el-input clearable class="input_right" placeholder="请输入统一代码" v-model="addForm.addFormData2"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData3" label="地址：">
                            <v-distpicker class="zll-distpicker" @selected="onSelect"></v-distpicker>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData4" label="注册日期：">
                            <el-date-picker clearable type="date" placeholder="请选择注册日期" v-model="addForm.addFormData4"></el-date-picker>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData5" label="联系人：">
                            <el-input clearable class="input_right" placeholder="请输入联系人" v-model="addForm.addFormData5"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData6" label="注册手机号：">
                            <el-input clearable class="input_right" placeholder="请输入注册手机号" v-model="addForm.addFormData6"></el-input>
                        </el-form-item>
                        <el-form-item class="formList"></el-form-item>
                        <el-form-item class="formList" prop="addFormData7" label="账号：">
                            <el-input clearable class="input_right" placeholder="请输入账号" v-model="addForm.addFormData7"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData8" label="密码：">
                            <el-input clearable class="input_right" show-password placeholder="请输入密码" v-model="addForm.addFormData8"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData9" label="子用户数：">
                            <el-input clearable class="input_right" placeholder="请输入子用户数" v-model.number="addForm.addFormData9"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData10" label="状态：">
                            <el-select clearable v-model="addForm.addFormData10" placeholder="请选择状态">
                                <el-option label="待启用" value="待启用"></el-option>
                                <el-option label="启用" value="启用"></el-option>
                                <el-option label="停用" value="停用"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script>
import ImgUpload from './imgUpload'
import { checkPhone, linkMan, userId, password} from '@/assets/js/verify'
export default {
    data(){
        return {
            imgSrc: {},
            addForm:{
                addFormData1: '',//客户名称
                addFormData2: '',//统一代码
                addFormData3: '',//地址
                addFormData4: '',//注册日期
                addFormData5: '',//联系人
                addFormData6: '',//注册手机号
                addFormData7: '',//账号
                addFormData8: '',//密码
                addFormData9: '',//子用户数
                addFormData10: '',//状态
            },
            rules: {
                addFormData1:[
                    { required: true,message: '请输入客户名称', trigger: 'blur' },
                ],
                addFormData2:[
                    { required: true, message: '请输入统一代码', trigger: 'blur' },
                ],
                addFormData3:[
                    { required: true, message: '请选择地址', trigger: 'change' },
                ],
                addFormData4:[
                    { required: true, message: '请选择注册日期', trigger: 'change' },
                ],
                addFormData5:[
                    { required: true, validator: linkMan, trigger: 'blur' },
                ],
                addFormData6:[
                    { required: true,  validator: checkPhone, trigger: 'blur' },
                ],
                addFormData7:[
                    { required: true, validator: userId, trigger: 'blur' },
                ],
                addFormData8:[
                    { required: true, validator: password, trigger: 'blur' },
                ],
                addFormData9:[
                    { required: true, message: '请输入子用户数', trigger: 'blur' },
                ],
                addFormData10:[
                    { required: true, message: '请选择状态', trigger: 'change' },
                ],
            },
        }
    },
    components: {
        ImgUpload
    },
    methods: {
        setFormData(formName){
            // if(!this.imgSrc.file) {
            //     this.$message.warning('请上传照片！');
            //     return false
            // }
            let addForm = {
                ...this.addForm,
                'imgSrc': {...this.imgSrc},
            }
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('addForm', addForm)
                }else {
                    return false
                }
            })
        },
        onSelect (data) {
            console.log(data)
            this.addForm.addFormData3 = data.province.value + data.city.value + data.area.value
        },
    },
    mounted(){
        
    },
}
</script>
<style lang="scss" scoped>
    @import "@/assets/style/dialog.scss";
    .ClientRegisterAdd {
        .upLoad {
            min-width: 100px;
            max-width: 200px;
            margin: 15px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
</style>