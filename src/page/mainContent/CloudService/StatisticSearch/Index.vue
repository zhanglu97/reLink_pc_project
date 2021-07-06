<template>
    <div class="StatisticSearch">
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100%) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchInput2" placeholder="服务号"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput1" placeholder="客户名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput3" placeholder="设备名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput4" placeholder="设备型号"></el-input>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchInput5" placeholder="状态">
                        <el-option label="未处理" value="未处理"></el-option>
                        <el-option label="处理中" value="处理中"></el-option>
                        <el-option label="已完成" value="已完成"></el-option>
                    </el-select>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchInput7" placeholder="响应速度">
                        <el-option label="超时" value="超时"></el-option>
                        <el-option label="正常" value="正常"></el-option>
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
            <popout title="设备数据" :visible.sync="detailDialog" v-if="detailDialog">
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
                searchInput7: '',
                tableData: [{
                    tableNum1: '2021-03-12 14:44',//报修日期
                    tableNum2: 'F2103120092',//服务号
                    tableNum3: '上海远大精密股份有限公司',//客户名称
                    tableNum4: '车削加工中心',//设备名称
                    tableNum5: 'KDVL320H',//设备型号
                    tableNum6: '导轨行进1/3不',//问题描述
                    tableNum7: '未处理',//状态
                    tableNum8: '超时',//响应速度
                    tableNum9: '田归农',//技术支持
                    tableNum10: '',//评分
                }, {
                    tableNum1: '2021-03-18 14:44',//报修日期
                    tableNum2: 'F2103120092',//服务号
                    tableNum3: '苏州力拓',//客户名称
                    tableNum4: '车削加工中心',//设备名称
                    tableNum5: '',//设备型号
                    tableNum6: '',//问题描述
                    tableNum7: '处理中',//状态
                    tableNum8: '超时',//响应速度
                    tableNum9: '田归农',//技术支持
                    tableNum10: '',//评分
                }, {
                    tableNum1: '2021-03-10 14:44',//报修日期
                    tableNum2: 'F2103120092',//服务号
                    tableNum3: '浙江吉利',//客户名称
                    tableNum4: '车削加工中心',//设备名称
                    tableNum5: '',//设备型号
                    tableNum6: '',//问题描述
                    tableNum7: '已完成',//状态
                    tableNum8: '正常',//响应速度
                    tableNum9: '田归农',//技术支持
                    tableNum10: '10',//评分
                },  ],
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
                        {"columnValue": "tableNum1", "columnName": "报修日期",width: 120,isSortable: true },
                        {"columnValue": "tableNum2", "columnName": "服务号" },
                        {"columnValue": "tableNum3", "columnName": "客户名称",width: 120  },
                        {"columnValue": "tableNum4", "columnName": "设备名称" },
                        {"columnValue": "tableNum5", "columnName": "设备型号" },
                        {"columnValue": "tableNum6", "columnName": "问题描述" },
                        {"columnValue": "tableNum7", "columnName": "状态" },
                        {"columnValue": "tableNum8", "columnName": "响应速度" },
                        {"columnValue": "tableNum9", "columnName": "技术支持" },
                        {"columnValue": "tableNum10", "columnName": "评分" },
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
                this.searchInput7 = "";
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