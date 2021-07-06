<template>
    <div class="AlarmRecord">
        <h2 class="page_title_h2">报警记录</h2>
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100%) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchInput1" placeholder="设备名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput2" placeholder="设备型号"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput3" placeholder="客户名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput4" placeholder="报警代码"></el-input>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchInput5" placeholder="代码类别">
                        <el-option label="自定义" value="自定义"></el-option>
                        <el-option label="系统" value="系统"></el-option>
                    </el-select>
                </div>
                <div class="input_flex">
                    <el-date-picker v-model="searchInput6" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
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
        
        <!-- 查看弹框 -->
        <div class="zll-dialog">
            <popout title="报警数据" :visible.sync="detailDialog" v-if="detailDialog" class="longSize">
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
                searchInput3: '',
                searchInput4: '',
                searchInput5: '',
                searchInput6: '',
                tableData: [{
                    tableNum1: '车削加工中心',//设备名称
                    tableNum2: 'KDVL320H',//设备型号
                    tableNum3: '2021-03-28',//注册日期
                    tableNum4: '上海远大精密股份有限公司',//客户名称
                    tableNum5: '2021-05-06 13:33:41',//报警日期
                    alarmdm: '4001',//报警代码
                    tableNum7: '自定义',//代码类别
                    tableNum8: '自消',//处理方式
                }, {
                    tableNum1: '车削加工中心',//设备名称
                    tableNum2: 'KDVL320H',//设备型号
                    tableNum3: '2021-02-28',//注册日期
                    tableNum4: '苏州力拓合金科技有限公司',//客户名称
                    tableNum5: '2021-05-01 13:33:41',//报警日期
                    alarmdm: '03',//报警代码
                    tableNum7: '系统',//代码类别
                    tableNum8: '售后',//处理方式
                }, {
                    tableNum1: '车削加工中心',//设备名称
                    tableNum2: 'KDVL320H',//设备型号
                    tableNum3: '2021-04-8',//注册日期
                    tableNum4: '苏州力拓合金科技有限公司',//客户名称
                    tableNum5: '2021-04-22 13:33:41',//报警日期
                    alarmdm: '80',//报警代码
                    tableNum7: '系统',//代码类别
                    tableNum8: '',//处理方式
                },],
                tableHeader:[],
                detailDialog: false,
            }
        },
        methods: {
            getTableList(){//获取表格数据
                this.tableLoading = true;
                setTimeout(()=>{
                    this.tableHeader =  [
                        {"columnValue": "tableNum1", "columnName": "设备名称" },
                        {"columnValue": "tableNum2", "columnName": "设备型号" },
                        {"columnValue": "tableNum3", "columnName": "注册日期",isSortable: true },
                        {"columnValue": "tableNum4", "columnName": "客户名称", width: 150 },
                        {"columnValue": "tableNum5", "columnName": "报警日期",isSortable: true },
                        {"columnValue": "alarmdm", "columnName": "报警代码", width: 80 },
                        {"columnValue": "tableNum7", "columnName": "代码类别" },
                        {"columnValue": "tableNum8", "columnName": "处理方式", width: 80 },
                    ]
                    this.tableData = JSON.parse(JSON.stringify(this.tableData))
                    this.tableLoading = false;
                },500)
            },
            goDetail(val){ //查看
                this.detailDialog = true
            },
            searchReset() { //重置搜索
                this.searchInput1 = "";
                this.searchInput2 = "";
                this.searchInput3 = "";
                this.searchInput4 = "";
                this.searchInput5 = "";
                this.searchInput6 = "";
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