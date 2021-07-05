<template>
    <div class="ServiceCenter">
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100%) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchInput1" placeholder="客户名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-date-picker v-model="searchInput2" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
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
                <el-button @click="goDetail(scope.row)" type="text" size="small">查看</el-button>
            </template>
        </sys-table>
        
        <!-- 新增管理用户弹框 -->
        <div class="zll-dialog">
            <popout :title="title" :visible.sync="addDialog" v-if="addDialog" >
                <Add ref="add" slot="content" @addForm="getFormData"></Add>
                <template slot="bottom">
                    <p class="zll-botton" @click="()=>{this.$refs.add.setFormData('addForm')}">提 交</p>
                </template>
            </popout>
        </div> 
        <!-- 查看弹框 -->
        <div class="zll-dialog">
            <popout title="客户全局数据" :visible.sync="detailDialog" v-if="detailDialog" class="longSize">
                <detail ref="add" slot="content"></detail>
                <template slot="bottom">
                    <p class="zll-botton" @click="detailDialog = false">确 定</p>
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
                tableData: [{
                    tableNum1: '上海远大精密股份有限公司',//客户名称
                    tableNum2: '上海',//省
                    tableNum3: '上海',//市
                    tableNum4: '1',//购买次数
                    tableNum5: '6',//设备总数
                    runNum: '2',//运行数
                    stopNUm: '1',//停机数
                    alarmNum: '1',//报警
                    tableNum9: '0',//关机
                }, {
                    tableNum1: '苏州力拓合金科技有限公司',//客户名称
                    tableNum2: '江苏',//省
                    tableNum3: '苏州',//市
                    tableNum4: '3',//购买次数
                    tableNum5: '22',//设备总数
                    runNum: '21',//运行数
                    stopNUm: '1',//停机数
                    alarmNum: '0',//报警
                    tableNum9: '0',//关机
                }, {
                    tableNum1: '浙江吉利汽车精密有限公司',//客户名称
                    tableNum2: '浙江',//省
                    tableNum3: '台州',//市
                    tableNum4: '2',//购买次数
                    tableNum5: '12',//设备总数
                    runNum: '11',//运行数
                    stopNUm: '1',//停机数
                    alarmNum: '0',//报警
                    tableNum9: '0',//关机
                }],
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
                        {"columnValue": "tableNum2", "columnName": "省" },
                        {"columnValue": "tableNum3", "columnName": "市" },
                        {"columnValue": "tableNum4", "columnName": "购买次数" },
                        {"columnValue": "tableNum5", "columnName": "设备总数" },
                        {"columnValue": "runNum", "columnName": "运行数" },
                        {"columnValue": "stopNUm", "columnName": "停机数" },
                        {"columnValue": "alarmNum", "columnName": "报警" },
                        {"columnValue": "tableNum9", "columnName": "关机" },
                    ]
                    this.tableData = JSON.parse(JSON.stringify(this.tableData))
                    this.tableLoading = false;
                },500)
            },
            getFormData(data){
                console.log(data)
                this.addDialog = false
            },
            goDetail(val){ //查看
                this.detailDialog = true
            },
            searchReset() { //重置搜索
                this.searchInput1 = "";
                this.searchInput2 = "";
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