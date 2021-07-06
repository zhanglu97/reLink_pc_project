<template>
    <div class="CategoryCoding">
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100% - 200px) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchInput1" placeholder="品类名称"></el-input>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
            </div>
			<div class="addNew" style="width: 200px !important">
                <span @click="addUser()"><i class="el-icon-circle-plus-outline"></i> 新增品类</span>
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
            <popout :title="title + '品类'" :visible.sync="addDialog" v-if="addDialog" class="minSize">
                <Add ref="add" slot="content" @addForm="getFormData"></Add>
                <template slot="bottom">
                    <p class="zll-botton" @click="()=>{this.$refs.add.setFormData('addForm')}">提 交</p>
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
                searchInput5: '',
                tableData: [{
                    tableNum1: '数控立车',//品类名称
                    tableNum2: 'SKL',//前置编码
                    tableNum3: '在用',//状态
                }, {
                    tableNum1: '立式加工中心',//品类名称
                    tableNum2: 'LJC',//前置编码
                    tableNum3: '在用',//状态
                }, {
                    tableNum1: '钻攻中心',//品类名称
                    tableNum2: 'ZGC',//前置编码
                    tableNum3: '在用',//状态
                }, {
                    tableNum1: '钻攻中心',//品类名称
                    tableNum2: 'PCN',//前置编码
                    tableNum3: '在用',//状态
                }, {
                    tableNum1: '卧式加工中心',//品类名称
                    tableNum2: 'WJC',//前置编码
                    tableNum3: '在用',//状态
                },],
                tableHeader:[],
                selectList: [],
                addDialog: false, //用户弹框
            }
        },
        methods: {
             getTableList(){//获取表格数据
                this.tableLoading = true;
                setTimeout(()=>{
                    this.tableHeader =  [
                        {"columnValue": "tableNum1", "columnName": "品类名称", width: 200  },
                        {"columnValue": "tableNum2", "columnName": "前置编码" },
                        {"columnValue": "tableNum3", "columnName": "状态", width: 120 },
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