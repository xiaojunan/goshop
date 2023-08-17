<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <rank />
    <Like />
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import rank from "@/pages/Home/rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";

export default {
  components: {
    ListContainer,
    Recommend,
    rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    // console.log(this.$store);
    this.$store.dispatch("getFloorList");
    // this.$store.dispatch("getUserInfo");
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
};
</script>

<style>
</style>