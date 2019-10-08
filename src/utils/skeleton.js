import Vue from 'vue';
import Skeleton from '../components/skeleton/skeleton-2';

export default new Vue({
  components: {
    Skeleton,
  },
  render: h => h(Skeleton),
});