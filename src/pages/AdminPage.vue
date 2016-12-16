<template lang="html">
  <page :page-name="'admin_page'">
    <x-header slot="header" :title="'管理后台'" :return="'/'"></x-header>
    <div class="wp scroller">
      <div class="panel" v-if="current === 1">
        <p class="t-c fs20 no-select">创建活动</p>
        <div class="input-group">
          <label for="">名称</label>
          <input type="text" class="input" v-model="aName" placeholder="">
        </div>
        <div class="input-group">
          <label for="">描述</label>
          <input type="text" class="input" v-model="aDesc" placeholder="">
        </div>
        <div class="btn btn-primary block fs16 m-t-lg no-select" @click="createAct()">创 建</div>
      </div>
      <section class="panel t-c" v-else>
        <p class="fs20 no-select">创建群组</p>
        <label class="lb">
          <select class="m-t-lg select" v-model="groupId">
            <option :value="item.id || 0" v-for="item in gList">{{item.title || ''}}</option>
          </select>
        </label>
        <div class="input-group">
          <label for="">名称</label>
          <input type="text" class="input" v-model="gName" placeholder="">
        </div>
        <div class="input-group">
          <label for="">描述</label>
          <input type="text" class="input" v-model="gDesc" placeholder="">
        </div>
        <div class="btn btn-primary block fs16 m-t-lg no-select" @click="createGroup()">创 建</div>
      </section>
    </div>
    <x-footer slot="footer"
      :admin="true"
      :current="current"
      :change-status="changeStatus"
    ></x-footer>
  </page>
</template>

<script>
import Page from '@components/Page'
import xHeader from '@components/xHeader'
import xFooter from '@components/xFooter'
export default {
  data () {
    return {
      current: 1,
      aName: '',
      aDesc: '',
      gName: '',
      gDesc: '',
      gList: [],
      groupId: 0
    }
  },
  computed: {},
  mounted () {},
  methods: {
    changeStatus (num) {
      this.current = num
      if (+num === 2) this.getActList()
    },
    getActList () {
      this.$store.dispatch('getActList').then(data => {
        console.log(data)
        this.gList = data || []
      })
    },
    createAct () {
      if (!this.validateAct()) {
        this.$store.state.notify = {
          type: 'warning',
          msg: '请输入正确的活动信息',
          isValide: true
        }
        return
      }
      this.$store.dispatch('createAct', {
        title: this.aName,
        text: this.aDesc
      }).then(data => {
        console.log(data, 1)
        if (!data) return
        this.clearAct()
        this.$store.state.notify = {
          type: 'info',
          msg: '创建活动成功',
          isValide: true
        }
      })
    },
    createGroup () {
      if (!this.validateGroup()) {
        this.$store.state.notify = {
          type: 'warning',
          msg: '请输入正确的群组信息',
          isValide: true
        }
        return
      }
      this.$store.dispatch('createGroup', {
        activityId: this.groupId,
        groupList: [{
          groupName: this.gName,
          des: this.gDesc
        }]
      }).then(data => {
        if (!data.length) return
        this.clearGroup()
        this.$store.state.notify = {
          type: 'info',
          msg: '创建群组成功',
          isValide: true
        }
      })
    },
    validateAct () {
      return this.aName !== '' && this.aDesc !== ''
    },
    clearAct () {
      this.aName = ''
      this.aDesc = ''
    },
    validateGroup () {
      return this.gName !== '' && this.gDesc !== '' && this.groupId
    },
    clearGroup () {
      this.gName = ''
      this.gDesc = ''
      this.getActList()
    }
  },
  components: {
    Page,
    xHeader,
    xFooter
  }
}
</script>

<style lang="css" scoped>
.input-group {
  margin: 20px 0;
}
.input-group label {
  font-size: 18px;
  user-select: none;
}
.input {
  font-size: 18px;
  height: 40px;
  line-height: 40px;
  width: 80%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.select {
  padding: 10px 100px;
  margin: 30px 0 0 0;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
  -webkit-box-shadow: 0 3px 0 #ccc, 0 -1px #fff inset;
  -moz-box-shadow: 0 3px 0 #ccc, 0 -1px #fff inset;
  box-shadow: 0 3px 0 #ccc, 0 -1px #fff inset;
  background: #f8f8f8;
  color:#888;
  border:none;
  outline:none;
  display: inline-block;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  cursor:pointer;
}
.lb {position:relative}
.lb:after {
    content:'< >';
    font:11px "Consolas", monospace;
    color:#aaa;
    -webkit-transform:rotate(90deg);
    -moz-transform:rotate(90deg);
    -ms-transform:rotate(90deg);
    transform:rotate(90deg);
    right:8px; top:2px;
    padding:0 0 6px;
    border-bottom:1px solid #ddd;
    position:absolute;
    pointer-events:none;
}
.lb:before {
    content:'';
    right:6px; top:0px;
    width:20px; height:20px;
    background:#f8f8f8;
    position:absolute;
    pointer-events:none;
    display:block;
}
</style>
