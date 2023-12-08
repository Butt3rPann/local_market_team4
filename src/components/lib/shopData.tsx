export interface IShop {
    id: number;
    name: string;
    lastOnline: number;
    shopProfileImg?: string;
  }
  
  export const defaultShop:IShop = {
      id: -1,
      name: "",
      lastOnline: -1
  }
  
  export const ShopData: IShop[] = [
    { id: 1, 
      name: "MONEYYYY", 
      lastOnline: 15, 
      shopProfileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYZcjeeAweirM8P17qQpZeLH81SxBkMRYQFsyB6iQY2ZaRVl8Ah_vluyOjpXS7-vSP5o&usqp=CAU" 
    },
    { id: 2, 
      name: "ILOVECAT",
      lastOnline: 30 ,
      shopProfileImg: "https://i.pinimg.com/564x/d8/53/68/d85368c8c57b068e62fd47f6755317d6.jpg",
    },
    { id: 3, 
      name: "BEARING",
      lastOnline: 60 ,
      shopProfileImg: "https://i.pinimg.com/564x/75/98/4e/75984ef45a000c8d073a5fea4d4c3dcc.jpg"
      
    },
    { id: 4, 
      name: "M&S", 
      lastOnline: 120,
      shopProfileImg: "https://i.pinimg.com/564x/f3/e4/2f/f3e42fa71d8885f1ab656b9c0f590a72.jpg"
    },
    { id: 5, 
      name: "COOKKY", 
      lastOnline: 240,
      shopProfileImg: "https://i.pinimg.com/564x/99/12/ff/9912ff23c5c33b7316e4e5f5b61ac38f.jpg"
    },
  ];