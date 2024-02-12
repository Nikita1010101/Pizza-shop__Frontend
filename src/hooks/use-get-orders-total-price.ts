import { useQuery } from '@tanstack/vue-query'

import { OrderService } from '../services/order.service'

export const useGetOrdersTotalPrice = () => {
  const {
    data: totalPrice,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['orders_total_price'],
    queryFn: OrderService.getTotalPrice,
    select: ({ data }) => data.price,
  })

  return { isLoading, isError, error, totalPrice }
}
