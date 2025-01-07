"use server";

export async function calculateShipping(formData: FormData) {
  const shippingFrom = formData.get("shipping-from");
  const shippingTo = formData.get("shipping-to");
  /*------ I think we need to  
  1-send to backend  to get a request of available couriers 
  2-this server action respose must reflect in shipping result component
  3- i don't have a backend so i faked it 
  ------*/
}
