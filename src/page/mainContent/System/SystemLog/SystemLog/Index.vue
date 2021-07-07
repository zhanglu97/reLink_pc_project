<template>
    <div class="SystemLog">
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100% - 150px) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchInput1" placeholder="用户名"></el-input>
                </div>
                <div class="input_flex">
                    <el-date-picker v-model="searchInput2" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
            </div>
            <div class="button">
                <p class="zll-botton download"> Excel 导入</p>
            </div>
		</div>
        <!-- table -->
        <sys-table class="DataCopy_table"
            :tableData="tableData" 
            :tableLoading="tableLoading" 
            :tableHeader="tableHeader"
            :scopeWidth="120"
            :isOperate="false"
        >
        </sys-table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                searchInput1: '',
                searchInput2: '',
                tableLoading:true, //table刷新
                tableData: [{
                    tableNum1: 'admin',//用户名
                    tableNum2: '192.168.1.8',//IP地址
                    tableNum3: '54687',//端口
                    tableNum4: 'Mobile',//用户端
                    tableNum5: '2020-12-21 09:01:12',//登录时间
                    tableNum6: '2020-12-21 09:01:12',//退出时间
                },{
                    tableNum1: 'admin',//用户名
                    tableNum2: '192.168.1.8',//IP地址
                    tableNum3: '54687',//端口
                    tableNum4: 'Mobile',//用户端
                    tableNum5: '2020-12-21 09:01:12',//登录时间
                    tableNum6: '2020-12-21 09:01:12',//退出时间
                }],
                tableHeader:[],
                selectList: [],
            }
        },
        methods: {
            getTableList(){//获取表格数据
                this.tableLoading = true;
                setTimeout(()=>{
                    this.tableHeader =  [
                        {"columnValue": "tableNum1", "columnName": "用户名", width: 200},
                        {"columnValue": "tableNum2", "columnName": "IP地址" },
                        {"columnValue": "tableNum3", "columnName": "端口", width: 150 },
                        {"columnValue": "tableNum4", "columnName": "用户端", width: 150},
                        {"columnValue": "tableNum5", "columnName": "登录时间", isSortable: true},
                        {"columnValue": "tableNum6", "columnName": "退出时间"},
                    ]
                    this.tableData = JSON.parse(JSON.stringify(this.tableData))
                    this.tableLoading = false;
                },500)
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
    }
</script>

<style lang="scss" scoped>
@import "@/assets/style/SearchTop.scss";
</style>