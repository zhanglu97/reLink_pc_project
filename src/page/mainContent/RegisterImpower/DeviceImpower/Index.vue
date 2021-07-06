<template>
    <div class="DeviceImpower">
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100%) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchInput1" placeholder="客户名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput2" placeholder="合同号"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput3" placeholder="设备名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput4" placeholder="设备型号"></el-input>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchInput5" placeholder="授权状态">
                        <el-option label="未授权" value="未授权"></el-option>
                        <el-option label="已授权" value="已授权"></el-option>
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
                <el-button @click="goDetail(scope.row,1)" v-if="scope.row.ImpowerState == '未授权'" type="text" size="small">授权</el-button>
                <el-button @click="goDetail(scope.row,2)" v-else type="text" size="small">查看</el-button>
            </template>
        </sys-table>
        
        <!-- 查看弹框 -->
        <div class="zll-dialog">
            <popout :title="title" :visible.sync="detailDialog" v-if="detailDialog">
                <detail ref="add" :titleTxt="title" slot="content" @addForm="getFormData"></detail>
                <template slot="bottom">
                    <p class="zll-botton" v-if="title == '查看设备'" @click="detailDialog = false">确 定</p>
                    <p class="zll-botton" v-else @click="()=>{this.$refs.add.setFormData('addForm')}">提 交</p>
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
                    tableNum1: '上海远大精密股份有限公司',//客户名称
                    tableNum2: 'C210328012',//合同号
                    tableNum3: '李伟',//销售
                    tableNum4: '车削加工中心',//设备名称
                    tableNum5: 'KDVL320H',//设备型号
                    tableNum6: 'KDV21030013',//设备码
                    tableNum7: 'E0-3H-DE-56-3B',//Relink Mac
                    ImpowerState: '未授权',//授权状态
                }, {
                    tableNum1: '苏州力拓合金科技有限公司',//客户名称
                    tableNum2: 'C210328011',//合同号
                    tableNum3: '张三',//销售
                    tableNum4: '车削加工中心',//设备名称
                    tableNum5: 'KDVL320H',//设备型号
                    tableNum6: 'KDV21030012',//设备码
                    tableNum7: '8D-9E-45-F5-0C',//Relink Mac
                    ImpowerState: '已授权',//授权状态
                }, {
                    tableNum1: '浙江吉利汽车精密股份有限公司',//客户名称
                    tableNum2: 'C210328009',//合同号
                    tableNum3: '张三',//销售
                    tableNum4: '立式加工中心',//设备名称
                    tableNum5: 'KDVM3000',//设备型号
                    tableNum6: 'KDV21030011',//设备码
                    tableNum7: 'E0-3H-DE-56-3B',//Relink Mac
                    ImpowerState: '已授权',//授权状态
                }, {
                    tableNum1: '浙江吉利汽车精密股份有限公司',//客户名称
                    tableNum2: 'C210328009',//合同号
                    tableNum3: '李四',//销售
                    tableNum4: '车削加工中心',//设备名称
                    tableNum5: 'KDVM3000',//设备型号
                    tableNum6: 'KDV21030010',//设备码
                    tableNum7: 'E0-3H-DE-56-3B',//Relink Mac
                    ImpowerState: '已授权',//授权状态
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
                        {"columnValue": "tableNum1", "columnName": "客户名称",width: 180 },
                        {"columnValue": "tableNum2", "columnName": "合同号" },
                        {"columnValue": "tableNum3", "columnName": "销售"  },
                        {"columnValue": "tableNum4", "columnName": "设备名称" },
                        {"columnValue": "tableNum5", "columnName": "设备型号" },
                        {"columnValue": "tableNum6", "columnName": "设备码" },
                        {"columnValue": "tableNum7", "columnName": "Relink Mac" },
                        {"columnValue": "ImpowerState", "columnName": "授权状态" },
                    ]
                    this.tableData = JSON.parse(JSON.stringify(this.tableData))
                    this.tableLoading = false;
                },500)
            },
            goDetail(val,type){ //查看
                this.detailDialog = true
                if(type == 1) {
                    this.title = '设备录入及授权'
                }else {
                    this.title = '查看设备'
                }
            },
            getFormData(data){
                console.log(data)
                this.detailDialog = false
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