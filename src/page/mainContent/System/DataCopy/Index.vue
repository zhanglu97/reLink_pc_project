<template>
    <div class="DataCopy">
        <h2 class="page_title_h2">数据备份</h2>
        <!-- table -->
        <sys-table :isMultipleSelection="false" class="DataCopy_table"
            :tableData="tableData"
            :tableLoading="tableLoading"
            :tableHeader="tableHeader"
            :scopeWidth="120"
            :isOperate="false"
            :isPagination="false"
        ></sys-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableLoading: true, //table刷新
            tableData: [{
                tableNum1: "2019-12-13  00:03:06", //启动时间
                tableNum2: "1123", //数据量（M）
                tableNum3: "2019-12-12", //备份日期
                copyState: "失败", //备份状态
                tableNum5: "2019-12-13  00:03:06", //完成时间
            }, {
                tableNum1: "2019-12-13  00:03:06", //启动时间
                tableNum2: "25634", //数据量（M）
                tableNum3: "2019-12-11", //备份日期
                copyState: "成功", //备份状态
                tableNum5: "2019-12-12  00:05:33", //完成时间
            }, {
                tableNum1: "2019-12-10  00:03:06", //启动时间
                tableNum2: "25634", //数据量（M）
                tableNum3: "2019-12-10", //备份日期
                copyState: "成功", //备份状态
                tableNum5: "2019-12-11  00:05:02", //完成时间
            },],
            tableHeader: [],
        };
    },
    methods: {
        getTableList() { //获取表格数据
            this.tableLoading = true;
            setTimeout(() => {
                this.tableHeader = [
                    { columnValue: "tableNum1", columnName: "启动时间" },
                    { columnValue: "tableNum2", columnName: "数据量（M）", isSortable: true },
                    { columnValue: "tableNum3", columnName: "备份日期" },
                    { columnValue: "copyState", columnName: "备份状态" },
                    { columnValue: "tableNum5", columnName: "完成时间", isSortable: true },
                ];
                this.tableData = JSON.parse(JSON.stringify(this.tableData));
                this.tableLoading = false;
            }, 500);
        },
    },
    mounted() {
        this.getTableList(); //显示table
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/SearchTop.scss";
</style>