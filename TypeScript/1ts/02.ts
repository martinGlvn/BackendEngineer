// Interfaces & Tipos =>

type PaymentMethodType = "debito" | "credito" | "efectivo";
interface IPaymentMethod {
  paymentMethod: "debito" | "credito" | "efectivo";
}

interface IProductoBase {
  price: number;
  paymentMethod: IPaymentMethod["paymentMethod"]; // no es la forma mas recomendada
  nameClient: string;
}
type ProductoBaseType = {
  price: number;
  paymentMethod: PaymentMethodType;
  nameClient: string;
};
