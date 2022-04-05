import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import axios from 'axios'
import { useMulticallContract } from './useContract'
import ERC20_INTERFACE from '../constants/abis/erc20'
import priceContracts from '../constants/DVXPriceContracts'
// eslint-disable-next-line
type ApiResponse = {
  data: {
    [key: string]: string
  }
  update_at: string
}

/**
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
// eslint-disable-next-line
const api = 'https://api.pancakeswap.info/api/v2/tokens/0xec87e4ffC54da4dAb82AbB50595CD44306d20E03'

const useGetPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(api);
        const priceData: ApiResponse = res.data;
        setData(new BigNumber(priceData.data.price).toNumber())

        // if(multicallContract){
        //   const {cakeAddress, wbnbAddress, lpAddress} = priceContracts;
        //   const calls = [
        //     [cakeAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
        //     [wbnbAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
        //   ];
        //   // eslint-disable-next-line
        //   const [resultsBlockNumber, result] = await multicallContract.aggregate(calls);
        //   const [cakeAmount, busdAmount] = result.map(r=>ERC20_INTERFACE.decodeFunctionResult("balanceOf", r));
        //   const cake = new BigNumber(cakeAmount);
        //   const busd = new BigNumber(busdAmount);
        //   const cakePrice = busd.div(cake).toNumber();
        //   setData(cakePrice)
        // }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract])

  return data
}

export default useGetPriceData
