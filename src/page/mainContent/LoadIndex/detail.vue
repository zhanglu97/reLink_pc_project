<template>
    <div class="addProject UserAdd">
        <div class="addForm zll-form">
            <el-row :gutter="20">
                <el-col :span="9">
                    <div class="formList">
                        <span class="text_left">客户名称：</span>
                        <span class="text_right">上海远大精密股份有限公司</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">区域：</span>
                        <span class="text_right">上海市 浦东新区</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">注册日期：</span>
                        <span class="text_right">2019-03-12</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">设备总数：</span>
                        <span class="text_right">6</span>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="formList">
                        <div class="zll-botton run">运行</div>
                        <span class="num run">2</span>
                    </div>
                    <div class="formList">
                        <div class="zll-botton stop">停机</div>
                        <span class="num stop">1</span>
                    </div>
                    <div class="formList">
                        <div class="zll-botton bj">报警</div>
                        <span class="num bj">1</span>
                    </div>
                    <div class="formList">
                        <div class="zll-botton gj">关机</div>
                        <span class="num gj">2</span>
                    </div>
                </el-col>
                <el-col :span="9">
                    <div class="formList">
                        <span class="text_left">购买次数：</span>
                        <span class="text_right">4</span>
                    </div>
                    <div class="formList"></div>
                    <div class="formList">
                        <span class="text_left">销售：</span>
                        <span class="text_right">李茂旭  13565733388</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">技术支持：</span>
                        <span class="text_right">周永飞  13030227482</span>
                    </div>
                </el-col>
            </el-row>
            <div class="tableList">
                <table border="1">
                    <tr>
                        <th>设备名称</th><th>设备型号</th><th>设备编码</th><th>授权日期</th><th>保修状态</th><th>运行 h</th><th>停机 h</th><th>报警 h</th><th>关机 h</th><th>当前状态</th>
                    </tr>
                    <tr class="add_Table" v-for="(item, index) in tableData"  :key="index">
                        <td><p>{{ item.table1 }}</p></td>
                        <td><p>{{ item.table2 }}</p></td>
                        <td><p>{{ item.table3 }}</p></td>
                        <td><p>{{ item.table4 }}</p></td>
                        <td :class="{'bxzt': item.table5 == '过保'}"><p>{{ item.table5 }}</p></td>
                        <td class="runtxt"><p>{{ item.table6 }}</p></td>
                        <td class="stoptxt"><p>{{ item.table7 }}</p></td>
                        <td class="bjtxt"><p>{{ item.table8 }}</p></td>
                        <td class="gjtxt"><p>{{ item.table9 }}</p></td>
                        <td class="state">
                            <p v-if="item.table10 == '运行'" class="zll-botton run">运行</p>
                            <p v-if="item.table10 == '停机'" class="zll-botton stop">停机</p>
                            <p v-if="item.table10 == '报警'" class="zll-botton bj">报警</p>
                            <p v-if="item.table10 == '关机'" class="zll-botton gj">关机</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tableData: [{
                table1: '车削加工中心',
                table2: 'KDVL320H',
                table3: 'KVDL21030012',
                table4: '2021-03-28',
                table5: '在保',
                table6: '1332.8',
                table7: '107.3',
                table8: '12.2',
                table9: '54.3',
                table10: '运行',
            }, {
                table1: '车削加工中心',
                table2: 'KDVL320H',
                table3: 'KVDL21030003',
                table4: '2021-03-28',
                table5: '在保',
                table6: '1332.8',
                table7: '107.3',
                table8: '12.2',
                table9: '54.3',
                table10: '停机',
            }, {
                table1: '普通立车',
                table2: 'KDVM21030004',
                table3: 'KVDL21030003',
                table4: '2021-03-28',
                table5: '在保',
                table6: '1332.8',
                table7: '107.3',
                table8: '12.2',
                table9: '54.3',
                table10: '报警',
            }, {
                table1: '钻攻中心',
                table2: 'KDVL320H',
                table3: 'KVDL21030010',
                table4: '2021-03-28',
                table5: '在保',
                table6: '',
                table7: '',
                table8: '',
                table9: '',
                table10: '',
            }, {
                table1: '立式龙门铣',
                table2: 'KDVL320H',
                table3: 'KVDL21030010',
                table4: '2021-03-28',
                table5: '在保',
                table6: '1332.8',
                table7: '107.3',
                table8: '12.2',
                table9: '54.3',
                table10: '关机',
            }, {
                table1: '立式龙门铣',
                table2: 'KDVL320H',
                table3: 'KVDL21030010',
                table4: '2021-03-28',
                table5: '过保',
                table6: '1332.8',
                table7: '107.3',
                table8: '12.2',
                table9: '54.3',
                table10: '关机',
            }]
        }
    },
    methods: {
        
    },
    mounted(){
        
    },
    components: {
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/style/dialog.scss";
    .UserAdd {
        .formList {
            margin-bottom: 10px;
            .zll-botton {
                width: 100px;
                margin-bottom: 16px;
                height: 26px;
                line-height: 13px;
                margin-left: 0;
                float: left;
            }
            .num {
                float: left;
                margin-left: 15px;
                &.run {
                    color: #67C23A;
                }
                &.stop {
                    color: #e6a23c;
                }
                &.bj {
                    color: #f56c6c;
                }
                &.gj {
                    color: #909399;
                }
            }
        }
        .tableList .add_Table {
            .runtxt {
                color: #67C23A;
            }
            .stoptxt {
                color: #e6a23c;
            }
            .bjtxt {
                color: #f56c6c;
            }
            .gjtxt {
                color: #909399;
            }
            .bxzt {
                color: #f44336;
            }
            .state {
                .zll-botton {
                    width: 80%;
                    height: 26px;
                    line-height: 13px;
                }
            }
        }
    }
</style>