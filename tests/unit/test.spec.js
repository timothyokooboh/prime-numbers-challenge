import { mount } from '@vue/test-utils'
import PrimeNumbers from '@/components/PrimeNumbers.vue'

describe("PrimeNumbers", () => {

  it("returns true for prime numbers and returns false for non prime numbers ", () => {
    const wrapper = mount(PrimeNumbers);

    expect(wrapper.vm.isPrime(2)).toBe(true)
    expect(wrapper.vm.isPrime(5)).toBe(true)
    expect(wrapper.vm.isPrime(10)).toBe(false)
    expect(wrapper.vm.isPrime(29)).toBe(true)
    expect(wrapper.vm.isPrime(40)).toBe(false)
  })

  it("should return an array whose length is equal to the argument passed to getPrimeNums function", () => {
    /**
     * Since the function, getPrimeNums, takes arrayOfPrimeNumsLength as an argument,
     * then the wrapper must be mocked up with this data.
     */
    const wrapper = mount(PrimeNumbers, {
      data() {
        return {
          arrayOfPrimeNumsLength: 10
        }
      }
    })

    expect(wrapper.vm.getPrimeNums(wrapper.vm.arrayOfPrimeNumsLength)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
  })
})


