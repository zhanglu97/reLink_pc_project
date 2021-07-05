<template>
    <div class="CloudService">
        <h2 class="page_title_h2">云服务</h2>
        <div class="nav_tab">
            <div @click="getshow(1)" :class="{active:shows == 1}" class="MenuList left">我的服务</div>
            <div @click="getshow(2)" :class="{active:shows == 2}" class="MenuList middle">服务中心</div>
            <div @click="getshow(3)" :class="{active:shows == 3}" class="MenuList right">统计查询</div>
            <div class="clearBoth"></div>
        </div>
        <div class="CloudService-body">
            <MineService v-if="shows == 1"></MineService>
            <ServiceCenter v-if="shows == 2"></ServiceCenter>
            <StatisticSearch v-if="shows == 3"></StatisticSearch>
        </div>
    </div>
</template>

<script>
import MineService from './MineService/Index'
import ServiceCenter from './ServiceCenter/Index'
import StatisticSearch from './StatisticSearch/Index'
export default {
    data() {
        return {
            shows: 1
        }
    },
    methods:{
        getshow(val) {
            this.shows = val
        },
    },
    components: {
        MineService,
        ServiceCenter,
        StatisticSearch,
    }
};
</script>

<style lang="scss" scoped>
.CloudService {
    margin: 0 auto;
    width: 100%;margin-bottom: 15px;
    border-bottom: 0;
    .nav_tab {
        position: relative;
        &::after {
            content: ' ';
            width: calc(100% - 585px);
            height: 1px;
            background: #e6e6e6;
            position: absolute;
            bottom: 0px;
            right: -15px;
        }
    }
    .MenuList {
        height: 35px;
        line-height: 33px;
        float: left;
        text-align: center;
        width: 200px;
        background: #f7f7f7;
        color: #333;
        font-size: 14px;
        cursor: pointer;
        border-top: 2px solid #f7f7f7;
        border-bottom: 1px solid #e6e6e6;
        &:hover {
            transition: all .3s;
            color: #34BFC6;
            background: #fff;
            border-top: 2px solid #fff;
        }
        &.active {
            color: #34BFC6;
            transition: all .3s;
            background: #fff;
            border-top: 2px solid #34BFC6;
            border-bottom: 1px solid #fff;
        }
        &.middle {
            border-left: 1px solid #e6e6e6;
            border-right: 1px solid #e6e6e6;
        }
        &.left {
            border-left: 1px solid #e6e6e6;
            position: relative;
            &::before {
                content: ' ';
                width: 15px;
                height: 1px;
                background: #e6e6e6;
                position: absolute;
                bottom: -1px;
                left: -15px;
            }
        }
        &.right {
            border-right: 1px solid #e6e6e6;
        }
        
    }
    .CloudService-body {
        padding-top: 15px;
    }
}
</style>