// PRODUCT TYPE
export interface ProductType {
  id: string;
  title: string;
  description: string;
  price: number;
}

// NOTIFICATION TYPE
export interface NotificationListType {
  id: string;
  image: string;
  title: string;
  description: string;
}

// ORDER TYPE
export interface ProductInCartType {
  id: string;
  title: string;
  quantity: number;
  total: number;
}

// PRODUCT DETIAL TYPE
export interface OptionVariantType {
  type: string;
  price: number;
  defaultChoice: boolean;
}

interface OptionsType {
  name: string;
  variants: OptionVariantType[];
}

export interface SideDistType {
  name: string;
  price: number;
}

export interface ProductDetailType {
  id: string;
  title: string;
  price: number;
  options?: OptionsType[];
  sideDish?: SideDistType[];
}
