<template>
    <div class="addProject UserAdd">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-form-item class="formList" prop="addFormData1" label="角色名称：">
                    <el-input clearable class="input_right" placeholder="请输入角色名称" v-model="addForm.addFormData1"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="Table_body zll-table powerTable">
            <el-table :data="powerTable"  stripe
                      border style="width: 100%"
                      tooltip-effect="light"
                      :span-method="arraySpanMethod"
            >
                <el-table-column prop="index"  label="序号" width="50" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="tableNum1" label="主标题"  width="100"  :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="tableNum2" label="副标题"  width="150" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column label="内容" :show-overflow-tooltip="true">
                    <template slot-scope="{row}">
                        <el-checkbox-group v-model="check">
                            <el-checkbox :label="item.value" v-for="(item,index) in row.tableNum3"  :key="index" >{{item.title}}</el-checkbox>
                        </el-checkbox-group>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['type'],
        data(){
            return {
                check: [],
                addForm:{
                    addFormData1: '',
                },
                rules: {
                    addFormData1:[
                        { required: true, message: '请输入角色名称', trigger: 'blur' },
                    ],
                },
                powerTable:[],
                powerData: [{
                    mainTitle: '通知公告',
                    children: [{
                        subtitle: '',
                        content: [
                            { title: '查看', value: '通知公告查看' },
                        ],
                    }]
                },{
                    mainTitle: '客户总览',
                    children: [{
                        subtitle: '',
                        content: [
                            { title: '查看', value: '客户总览查看' },
                        ],
                    }] 
                },{
                    mainTitle: '负荷指数',
                    children: [{
                        subtitle: '',
                        content: [
                            { title: '查看', value: '负荷指数查看' },
                        ],
                    },]
                },{
                    mainTitle: '云服务',
                    children: [{
                        subtitle: '我的服务',
                        content: [
                            { title: '查看', value: '我的服务查看' },
                        ],
                    },{
                        subtitle: '服务中心',
                        content: [
                            { title: '查看', value: '服务中心查看' },
                        ],
                    },{
                        subtitle: '统计查询',
                        content: [
                            { title: '查看', value: '统计查询查看' },
                        ],
                    },]
                },{
                    mainTitle: '报警记录',
                    children: [{
                        subtitle: '',
                        content: [
                            { title: '查看', value: '报警记录查看' },
                        ],
                    }, ]
                },{
                    mainTitle: '备件管理',
                    children: [{
                        subtitle: '',
                        content: [
                            { title: '查看', value: '备件管理查看' },
                        ],
                    },]
                },{
                    mainTitle: '注册授权',
                    children: [{
                        subtitle: '客户注册',
                        content: [
                            { title: '新增', value: '客户注册新增' },
                            { title: '编辑', value: '客户注册编辑' },
                        ],
                    },{
                        subtitle: '设备授权',
                        content: [
                            { title: '授权', value: '设备授权授权' },
                            { title: '查看', value: '设备授权查看' },
                        ],
                    },]
                },{
                    mainTitle: '系统',
                    children: [{
                        subtitle: '组织架构',
                        content: [
                            { title: '新增', value: '组织架构新增' },
                        ],
                    },{
                        subtitle: '角色权限',
                        content: [
                            { title: '新增', value: '角色权限新增' },
                            { title: '编辑', value: '角色权限编辑' },
                        ],
                    },{
                        subtitle: '用户管理',
                        content: [
                            { title: '新增', value: '用户管理新增' },
                            { title: '编辑', value: '用户管理编辑' },
                            { title: '删除', value: '用户管理删除' },
                        ],
                    },{
                        subtitle: '数据备份',
                    },{
                        subtitle: '系统日志',
                    }]
                }],
            }
        },
        methods: {
            tableList(){
                let i = 1;
                for (let _i of this.powerData) {
                    let rowSpan = false;
                    let j = 1;
                    for(let _j of _i.children){
                        let obj ={
                            index: i,
                            tableNum1: _i.mainTitle,
                            tableNum2: _j.subtitle,
                            tableNum3: [],
                            rowSpan: _i.children.length,
                        }
                        if(_j.content){
                            for(let _k of _j.content){
                                let child = {
                                    title: _k.title,
                                    value: _k.value,
                                    rowSpan: _j.content.length,
                                };
                                obj.tableNum3.push(child);
                            }
                        }
                        if(rowSpan){
                            obj.rowSpan = 0;
                        }
                        j++;
                        rowSpan = true;
                        this.powerTable.push(obj);
                    }
                    i++;
                }
            },
            arraySpanMethod({ row, column, rowIndex, columnIndex }) {
                if (columnIndex < 2) {
                    if (row.rowSpan === 0) {
                        return [0, 0]
                    } else {
                        return [row.rowSpan, 1]
                    }
                }
            },
            setFormData(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('addForm',this.addForm)
                    }else {
                        return false
                    }
                })
            },
        },
        mounted(){
            this.tableList()
        }
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/style/dialog.scss";
    .UserAdd {
        .addForm {
            width: 50%;
        }
        .zll-table {
            margin-top: 15px;
        }
    }
    
</style>