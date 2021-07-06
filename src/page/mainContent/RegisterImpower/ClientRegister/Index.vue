<template>
    <div class="ClientRegister">
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100% - 100px) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchInput1" placeholder="客户名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchInput2" placeholder="账号">
                        <el-option label="refo" value="refo"></el-option>
                        <el-option label="deshuo" value="deshuo"></el-option>
                        <el-option label="nbd" value="nbd"></el-option>
                    </el-select>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput3" placeholder="手机号"></el-input>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchInput4" placeholder="状态">
                        <el-option label="待启用" value="待启用"></el-option>
                        <el-option label="启用" value="启用"></el-option>
                        <el-option label="停用" value="停用"></el-option>
                    </el-select>
                </div>
                <div class="input_flex">
                    <el-date-picker v-model="searchInput5" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
            </div>
			<div class="addNew" style="width: 100px !important">
                <span @click="addClient()"><i class="el-icon-circle-plus-outline"></i> 新增客户</span>
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
                <el-button @click="goDetail(scope.row)" type="text" size="small">编辑</el-button>
            </template>
        </sys-table>
        
        <!-- 查看弹框 -->
        <div class="zll-dialog">
            <popout :title="title" :visible.sync="detailDialog" v-if="detailDialog">
                <detail ref="add" slot="content" @addForm="getFormData"></detail>
                <template slot="bottom">
                    <p class="zll-botton" @click="()=>{this.$refs.add.setFormData('addForm')}">提 交</p>
                </template>
            </popout>
        </div> 
    </div>
</template>

<script>
    import detail from './detail'
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
                    tableNum1: '南京睿孚信息科技有限公司',//客户名称
                    tableNum2: '江苏',//区域
                    tableNum3: '南京',//城市
                    tableNum4: '李大林',//联系人
                    tableNum5: '18951749013',//注册手机号
                    tableNum6: '2021-03-05 14:33',//注册日期
                    tableNum7: 'refo',//账号
                    tableNum8: '0/5',//子用户
                    tableNum9: '待启用',//状态
                }, {
                    tableNum1: '南京德朔实业有限公司',//客户名称
                    tableNum2: '江苏',//区域
                    tableNum3: '南京',//城市
                    tableNum4: '徐蔚然',//联系人
                    tableNum5: '13384662344',//注册手机号
                    tableNum6: '2021-03-02 21:54',//注册日期
                    tableNum7: 'deshuo',//账号
                    tableNum8: '3/5',//子用户
                    tableNum9: '启用',//状态
                }, {
                    tableNum1: '宁波东力传动股份有限公司',//客户名称
                    tableNum2: '浙江',//区域
                    tableNum3: '宁波',//城市
                    tableNum4: '张权',//联系人
                    tableNum5: '13813013345',//注册手机号
                    tableNum6: '2021-03-01 11:01',//注册日期
                    tableNum7: 'nbd',//账号
                    tableNum8: '2/5',//子用户
                    tableNum9: '停用',//状态
                }, ],
                tableHeader:[],
                addDialog: false, //用户弹框
                detailDialog: false,
            }
        },
        methods: {
             getTableList(){//获取表格数据
                this.tableLoading = true;
                setTimeout(()=>{
                    this.tableHeader =  [
                        {"columnValue": "tableNum1", "columnName": "客户名称",width: 180 },
                        {"columnValue": "tableNum2", "columnName": "区域" },
                        {"columnValue": "tableNum3", "columnName": "城市"  },
                        {"columnValue": "tableNum4", "columnName": "联系人" },
                        {"columnValue": "tableNum5", "columnName": "注册手机号" },
                        {"columnValue": "tableNum6", "columnName": "注册日期",isSortable: true,width: 120 },
                        {"columnValue": "tableNum7", "columnName": "账号" },
                        {"columnValue": "tableNum8", "columnName": "子用户" },
                        {"columnValue": "tableNum9", "columnName": "状态" },
                    ]
                    this.tableData = JSON.parse(JSON.stringify(this.tableData))
                    this.tableLoading = false;
                },500)
            },
            addClient() {
                this.title = '新客户注册'
                this.detailDialog = true
            },
            getFormData(data){
                console.log(data)
                this.detailDialog = false
            },
            goDetail(val){ //编辑
                this.title = '编辑客户数据'
                this.detailDialog = true
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
            detail
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/style/SearchTop.scss";
</style>