import { useQuery } from '@tanstack/vue-query'

import { OrderService } from '../services/order.service'

export const useGetCart = () => {
  const {
    data: pizzas,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['orders'],
    queryFn: OrderService.getAll,
    select: ({ data }) => data,
  })

  return { isLoading, isError, error, pizzas }
}
