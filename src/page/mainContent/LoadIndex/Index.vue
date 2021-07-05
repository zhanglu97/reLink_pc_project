<template>
    <div class="LoadIndex">
        <h2 class="page_title_h2">负荷指数</h2>
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100%) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchInput1" placeholder="设备名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput1" placeholder="设备名称"></el-input>
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
                    tableNum1: '车削加工中心',//设备名称
                    tableNum2: 'KDVL320H',//设备型号
                    tableNum3: 'KVDL21030012',//设备码
                    tableNum4: '2021-03-28',//注册日期
                    tableNum5: '上海远大',//客户名称
                    tableNum6: '52.3%',//本月负荷
                    runNum: '1332.8',//运行 h
                    stopNUm: '107.3',//停机 h
                    alarmNum: '12.2',//报警 h
                    gjNum: '54.3',//关机 h
                    nowState: '运行',//当前状态 h
                }, {
                    tableNum1: '车削加工中心',//设备名称
                    tableNum2: 'KDVL320H',//设备型号
                    tableNum3: 'KVDL21030012',//设备码
                    tableNum4: '2021-02-28',//注册日期
                    tableNum5: '苏州力拓',//客户名称
                    tableNum6: '52.3%',//本月负荷
                    runNum: '1332.8',//运行 h
                    stopNUm: '107.3',//停机 h
                    alarmNum: '12.2',//报警 h
                    gjNum: '54.3',//关机 h
                    nowState: '运行',//当前状态 h
                }, {
                    tableNum1: '车削加工中心',//设备名称
                    tableNum2: 'KDVL320H',//设备型号
                    tableNum3: 'KVDL21030012',//设备码
                    tableNum4: '2021-03-29',//注册日期
                    tableNum5: '浙江吉利',//客户名称
                    tableNum6: '66.1%',//本月负荷
                    runNum: '1332.8',//运行 h
                    stopNUm: '107.3',//停机 h
                    alarmNum: '12.2',//报警 h
                    gjNum: '54.3',//关机 h
                    nowState: '运行',//当前状态 h
                },],
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
                        {"columnValue": "tableNum1", "columnName": "设备名称",width: 120 },
                        {"columnValue": "tableNum2", "columnName": "设备型号" },
                        {"columnValue": "tableNum3", "columnName": "设备码" },
                        {"columnValue": "tableNum4", "columnName": "注册日期",width: 120,isSortable: true },
                        {"columnValue": "tableNum5", "columnName": "客户名称" },
                        {"columnValue": "tableNum6", "columnName": "本月负荷" },
                        {"columnValue": "runNum", "columnName": "运行 h" },
                        {"columnValue": "stopNUm", "columnName": "停机 h" },
                        {"columnValue": "alarmNum", "columnName": "报警 h" },
                        {"columnValue": "gjNum", "columnName": "关机 h" },
                        {"columnValue": "nowState", "columnName": "当前状态" },
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