import { useMutation, useQueryClient } from '@tanstack/vue-query'

import { OrderService } from '../services/order.service'

export const useAddPizzaToCart = () => {
  const queryClient = useQueryClient()

  const { mutate: addPizzaToCart } = useMutation({
    mutationFn: (pizzaId: string) => OrderService.create(pizzaId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders_count'] })
    },
  })

  return { addPizzaToCart }
}
