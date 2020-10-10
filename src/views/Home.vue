<template>
  <div>
    <h1 class="title">multiplication table of prime numbers</h1>
    <PrimeNumbers/>
  </div>
</template>

<script>
  import PrimeNumbers from "../components/PrimeNumbers";
  import gsap from "gsap";

  export default {
    components: {
      PrimeNumbers
    },
    
    mounted() {
      const tl = gsap.timeline(
        {
          defaults: {
            ease: "power1.out"
          }
        }
      )

      tl.fromTo(".title", {opacity: 0}, {opacity: 1, duration: 1, delay: 3.3})
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
    text-transform: uppercase;
    margin-top: 2rem;
    letter-spacing: 1.08px;
    line-height: 3rem;
    font-weight: 300;
    padding: 0 .5rem;

    @media only screen and(max-width: 31.25em) {
      font-size: 1.3rem;
    }

  }
</style>