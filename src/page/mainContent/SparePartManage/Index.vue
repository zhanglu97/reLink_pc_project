<template>
    <div class="SparePartManage">
        <h2 class="page_title_h2">备件管理</h2>
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100%) !important">
                <div class="input_flex">
                    <el-select clearable v-model="searchInput1" placeholder="件号">
                        <el-option label="B001" value="B001"></el-option>
                        <el-option label="B002" value="B002"></el-option>
                    </el-select>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchInput2" placeholder="品名">
                        <el-option label="润滑油" value="润滑油"></el-option>
                        <el-option label="轴承" value="轴承"></el-option>
                    </el-select>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchInput3" placeholder="型号"></el-input>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchInput4" placeholder="状态">
                        <el-option label="充足" value="充足"></el-option>
                        <el-option label="紧张" value="紧张"></el-option>
                        <el-option label="无" value="无"></el-option>
                    </el-select>
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
            <popout title="备件数据" :visible.sync="detailDialog" v-if="detailDialog" class="longSize">
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
                tableData: [{
                    tableNum1: 'B001',//件号
                    tableNum2: '润滑油',//品名
                    tableNum3: 'W30',//型号
                    tableNum4: '',//适用对象
                    tableNum5: '20',//数量
                    tableNum6: '升',//单位
                    tableNum7: '充足',//库存状态
                    tableNum8: '',//消耗说明
                }, {
                    tableNum1: 'B002',//件号
                    tableNum2: '轴承',//品名
                    tableNum3: 'C61200',//型号
                    tableNum4: '',//适用对象
                    tableNum5: '2',//数量
                    tableNum6: '只',//单位
                    tableNum7: '紧张',//库存状态
                    tableNum8: '',//消耗说明
                }, {
                    tableNum1: 'B003',//件号
                    tableNum2: '轴承',//品名
                    tableNum3: '',//型号
                    tableNum4: '',//适用对象
                    tableNum5: '0',//数量
                    tableNum6: '只',//单位
                    tableNum7: '无',//库存状态
                    tableNum8: '',//消耗说明
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
                        {"columnValue": "tableNum1", "columnName": "件号", width: 50 },
                        {"columnValue": "tableNum2", "columnName": "品名" },
                        {"columnValue": "tableNum3", "columnName": "型号" },
                        {"columnValue": "tableNum4", "columnName": "适用对象" },
                        {"columnValue": "tableNum5", "columnName": "数量",isSortable: true, width: 80 },
                        {"columnValue": "tableNum6", "columnName": "单位", width: 80 },
                        {"columnValue": "tableNum7", "columnName": "库存状态", width: 80 },
                        {"columnValue": "tableNum8", "columnName": "消耗说明" },
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