<template>
    <div class="CloudUser">
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100% - 200px) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchInput1" placeholder="姓名"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput2" placeholder="部门"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput3" placeholder="分组"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput4" placeholder="角色"></el-input>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchInput5" placeholder="状态">
                        <el-option label="正常" value="正常"></el-option>
                        <el-option label="停用" value="停用"></el-option>
                    </el-select>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
            </div>
			<div class="addNew" style="width: 200px !important">
                <span @click="addUser()"><i class="el-icon-circle-plus-outline"></i> 新增用户</span>
			</div>
		</div>
        <!-- table -->
        <sys-table  
            :tableData="tableData" 
            :tableLoading="tableLoading" 
            :tableHeader="tableHeader"
            :scopeWidth="120"
        >
            <template slot-scope="scope" slot="operate">
                <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
            </template>
        </sys-table>
        
        <!-- 新增管理用户弹框 -->
        <div class="zll-dialog">
            <popout :title="'用户 · ' + title" :visible.sync="addDialog" v-if="addDialog" >
                <Add ref="add" slot="content" @addForm="getFormData"></Add>
                <template slot="bottom">
                    <p class="zll-botton" v-if="title == '查看'" @click="addDialog = false">确 定</p>
                    <p class="zll-botton" v-else @click="()=>{this.$refs.add.setFormData('addForm')}">提 交</p>
                </template>
            </popout>
        </div> 
    </div>
</template>

<script>
    import Add from './Add'
    export default {
        data(){
            return {
                title: '',
                tableLoading:true, //table刷新
                searchInput1: '',
                searchInput2: '',
                searchInput3: '',
                searchInput4: '',
                searchInput5: '',
                tableData: [{
                    tableNum1: '质量部',//部门
                    tableNum2: '',//分组
                    tableNum3: '部长',//角色
                    tableNum4: '张三',//姓名
                    tableNum5: 'zhangsan',//用户名
                    tableNum6: '2020-12-14 14:01',//注册日期
                    tableNum7: '正常',//状态
                }, {
                    tableNum1: '生产部',//部门
                    tableNum2: '',//分组
                    tableNum3: '主任',//角色
                    tableNum4: '李四',//姓名
                    tableNum5: 'lisi',//用户名
                    tableNum6: '2020-12-14 14:01',//注册日期
                    tableNum7: '正常',//状态
                }],
                tableHeader:[],
                addDialog: false, //用户弹框
            }
        },
        methods: {
             getTableList(){//获取表格数据
                this.tableLoading = true;
                setTimeout(()=>{
                    this.tableHeader =  [
                        {"columnValue": "tableNum1", "columnName": "部门" },
                        {"columnValue": "tableNum2", "columnName": "分组" },
                        {"columnValue": "tableNum3", "columnName": "角色" },
                        {"columnValue": "tableNum4", "columnName": "姓名" },
                        {"columnValue": "tableNum5", "columnName": "用户名" },
                        {"columnValue": "tableNum6", "columnName": "注册日期", isSortable: true },
                        {"columnValue": "tableNum7", "columnName": "状态", width: "100" },
                    ]
                    this.tableData = JSON.parse(JSON.stringify(this.tableData))
                    this.tableLoading = false;
                },500)
            },
            addUser(){
                this.title = '新增'
                this.addDialog = true
            },
            getFormData(data){
                console.log(data)
                this.addDialog = false
            },
            edit(val){ //编辑
                this.addDialog = true
                this.title = '编辑'
            },
            searchReset() { //重置搜索
                this.searchInput1 = "";
                this.searchInput2 = "";
                this.searchInput3 = "";
                this.searchInput4 = "";
                this.searchInput5 = "";
                this.getTableList();
            },
        },
        mounted(){
            this.getTableList();//显示table
        },
        components: {
            Add,
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/style/SearchTop.scss";
</style>