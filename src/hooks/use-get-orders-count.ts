import { useQuery } from '@tanstack/vue-query'

import { OrderService } from '../services/order.service'

export const useGetOrdersCount = () => {
  const {
    data: count,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['orders_count'],
    queryFn: OrderService.getCount,
    select: ({ data }) => data.count,
  })

  return { count, error, isError, isLoading, refetch }
}
