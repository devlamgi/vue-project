<template>
  <div class="container register-form">
        <div class="form">
            <div class="form-content">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="number" v-model="money.money" class="form-control" placeholder="Money" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="money.content" class="form-control" placeholder="Content" value=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="radio" id="in" value="0" v-model="money.status">
                            <label for="in">In</label>
                            <input type="radio" id="out" value="1" v-model="money.status">
                            <label for="out">Out</label>
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="money.receiver" class="form-control" placeholder="Receiver" value=""/>
                        </div>
                    </div>
                </div>
                <button v-on:click="submit" type="button" class="btnSubmit">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    msg: String
  },
  data: function() {
		return {
      money: {
        status: 0,
        content: "",
        money: 0,
        receiver: ""
      }
		};
  },
  methods: {
    submit: function() {
      this.$store.dispatch('money/register', this.money);
      this.money = {
        status: 0,
        content: "",
        money: 0,
        receiver: ""
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
