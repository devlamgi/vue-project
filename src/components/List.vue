<template>
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table id="tableReport" class="table table-hover table-striped ">
            <tbody>
              <tr
                v-for="(money,index) in list"
                :key="index">
                <td class="media-left">
                  <h2>{{money.money}}</h2>
                </td>
                <td class="media-body">
                  <h4 class="media-heading font-yellow text-bold hidden-xs">{{money.receiver}}</h4>
                  <h4 class="media-heading font-yellow text-bold hidden-sm hidden-md hidden-lg hidden-xl">{{money.content}}</h4>
                  <span><strong>Status:</strong> <span class="label label-info">{{money.status}}</span></span>
                </td>
              </tr>
            </tbody>
          </table>
  </div>
</div>  
</template>

<script>
/* eslint-disable */
export default {
  name: 'List',
  data: function() {
		return {
      list: [],
		};
  },
  created() {
    this.list = this.$store.getters['money/getList'];
  },
  computed: {
    testlist: function() {
      this.list = this.$store.getters['money/getList'];
      return this.list;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
