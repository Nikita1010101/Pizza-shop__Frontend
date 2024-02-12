import { useMutation, useQueryClient } from '@tanstack/vue-query'

import { OrderService } from '../services/order.service'

export const useDeletePizzaFromCart = () => {
  const queryClient = useQueryClient()

  const { mutate: deletePizzaFromCart } = useMutation({
    mutationFn: (pizzaId: string) => OrderService.delete(pizzaId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] })
      queryClient.invalidateQueries({ queryKey: ['orders_count'] })
      queryClient.invalidateQueries({ queryKey: ['orders_total_price'] })
    },
  })

  return { deletePizzaFromCart }
}
