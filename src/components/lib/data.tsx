export const getProductById = (id: number) => {
  return data.find((product) => product.id === id);
};

export const data = [
    {
      id: 1,
      shopId: 1,
      img: [
        "https://s3-alpha-sig.figma.com/img/516c/c4b3/bc631f7a43f3774b3ce0c09f915a6dfe?Expires=1702857600&Signature=bewK10hcYfJjVdYRIKo~CX3Bpiu1i4JUFjR-2Q6Uh1vcXP8lt4wByjqW5FdK0os2g07s8z5sE-dqb-J1uIi8dO2jJuVSFQi3ID7Fn-x3YZ8ONo3M4CxyVXQYkSlcFTJUzELjM2CIqN4WsR8xZGPZKeoF3q7oqa-pgVyNv00AIiFApQdk2TArwe9eM6M6aF6DYkGuOaK6zhLPzfJESgyL~N0nWehfIyEWCXke5WW-Cu7sJOTjqFEV3rRDlAYRK32sIleH0X2m8zZZswGfo9qIhRKt3och8owjD~gETuN2FY1x3zAkL64CUTAdJduy1D4A5rIM1whapV14A5iTyZBOZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://s3-alpha-sig.figma.com/img/5d43/4abc/0d02543bb13e9bb18964958634b01e5a?Expires=1702857600&Signature=XC7TwWFuXb0aM3h6c3etiXWmWLVWpMdHZtZabj5EoVbBVlRAlpn5fNAhYIIJ3l6WC0EymQgHa6EGgBX3ecOBREONjczPd4Ow1uD8hUnVGmSGfQmzCcOUtIFpy5vIksZ0GCQ0zg9PRCCD-t0BYjI7V8U7v9bFcSpf6vOnLYGhnhjQfM3H4dK-lBoIm0YMYtcgLogm-KhV2WaZAS1Gg8sUx3NVZX7sHzb7T1xd5kbPWDLOw7ltJ6-efq6FIN2z~X-T2N8Ucgj3jCPcgaDeLvt1~JPFOs4BOU-TtAduTTduxb-qMoC7s8CMSzSko2ZPSC~rkQkXECf4SCSgMGg2RvIY4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://s3-alpha-sig.figma.com/img/381a/2fab/42115899487f044e4efcd6dc211cfe20?Expires=1702857600&Signature=AgPGsgLvpjUc0hVabaCl-yA2K6H2-b1wU5-tDVttCL0u0GxbLLo8actRm-q~MNnF7xoPAToogJYTcxihvKSzDqm6agZMkDsPlZS6vzP0-~CW4ulyJRAO7Kk6cbUjhCwxNE8vmF9EPB2qfFmgDFBtkNnVg8yWEHgi9bTJPt8EjSX8F5ttAS6uOXUZmRiG2d3vzQZrKlM1F4musUX0xCidsbCIORzrHbX4oIjyDi3n5EwktX8MjtiUHuIBuUfmxfFk6oolkFhr5Yv23t-Fohq3l-Rx7kVAY46j5Yz5TNoWP8Va~b8JMIsma5EmTrwRHKmLHT7ztjAQgklsH70JEdgpKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://s3-alpha-sig.figma.com/img/f461/2d6e/62512520b4890ee8d437b25e22e324b3?Expires=1702857600&Signature=ChSD~gH41cpv9G1N3TxMCaQf8aAMmI7Okm2i-lCeACsNo3mVfLx0qItT~dFl0RtQ7LQXAqV1Lhk~e0ttp-KvCbKLeRKahOfKUwj70FsplpXwNF5tPJ8QRQVjwd-AYtHF16OtInWZnEy1P38zdM5UOs2WVXprORfGhrVAy~z-yeDtMNlw0An3A6b48MtLfb1Cp5C-nARbdj0UPNorbP9lo1h~NjMHhv4vR4Pm4-6cL4J2PCyIxkFbMWK~EsZlVU7Gz3y~r3A656hrPqiQRErTEMHV3f64Ik9ae0R7M7liv3UfY-hn4jnKGfXMBGaZu4l1Ih90xe-ghsy55dXoAUd8VA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      ],
      saleAmount: 501,
      productName: "เสื้อคอกลม ลาย DEK BANG MOD",
      rate: 4.5,
      numRate: 355,
      price: 199,
      categories: 'Clothes',
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
    },
    {
      id: 2,
      shopId: 2,
      img: [
        "https://s3-alpha-sig.figma.com/img/0aa4/49d5/d48145439fd58fb21fd8201f66f438bd?Expires=1702857600&Signature=VPTAEBYMK7iEZcoy9L6aGSbZQn3NL637sOGl6aVGnp9m82N7KymUUOv6d2AkQh-ISmX-riPPq~rOz62szgjhP1qbDkF2yqIdKAt5ePDctqd8TZTw4rEJCyUSQzLb6vhWl-d085ilOjJpqumdYtiFH1RKvJEYX0WscY076FDpEla8TxYjSHM5xxlZfSpx-Gj2yBJXVXFad2IYUwbLYjmE4Y5wz05cC5owgrgCmMljNCJF8RQzLQJXUg4KpjKRf03ru5kAMycDEQNO0fS8M5pFxQ4weZInasCkw3JdpPMdQm30KnGjD~uBgX76qwMSKNwCEv2m~p0aWzpTZYgoUkZ0jQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://down-th.img.susercontent.com/file/sg-11134201-22120-b5hh217ffblv58",
        "https://down-th.img.susercontent.com/file/sg-11134201-22120-48uwdu7ffblvcc",
        "https://down-th.img.susercontent.com/file/sg-11134201-22120-2gvs0s7ffblva0",
        "https://down-th.img.susercontent.com/file/sg-11134201-22120-5kotps7ffblvf1"
      ],
      saleAmount: 427,
      productName: "Kioku เทปลบคำผิด พร้อมไส้เติม รุ่น Rora",
      rate: 4.1,
      numRate: 311,
      price: 59,
      newPrice: 1,
      categories: "Stationery",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
    },
    {
      id: 3,
      shopId: 3,
      img: [
        "https://down-th.img.susercontent.com/file/77328fe1d729b99d39edb784b6487390",
        "https://down-th.img.susercontent.com/file/th-11134207-7r98p-llygaxgqkuq6cd",
        "https://down-th.img.susercontent.com/file/th-11134207-7r98x-llygaxfc7fnree",
        "https://down-th.img.susercontent.com/file/da93c5738978076a7e43cf3626d552f5",
        "https://s3-alpha-sig.figma.com/img/85cb/242b/0cefbdd10ffa38fd78c746d4609371af?Expires=1702857600&Signature=MabcqM3Q97weHh2UhHnfUpIamczNRMTwUP0R4HsAqsvKB1tikSLoMY7ee0R0Ds~9LfrR0cX0LBUFOvtzDg9kJ6Xp-E8M4f5RX~NTn-4Gsu9w4y70VpyEmlSWCej1OeKvvfV5wdsZz2DfcITwgXXa7HcMaB-EThxb7~5j8UDRBCg7l04EEOzw6RCGMBDhTmDTC85IovD70~ciVBw5iZeB5YI~46WU8X14~oVtyrughaGHfAXWWQozJvZ7sDZASL5YQPwpcILl7QEp4-vokbBoDJz0Ftsg3hlSgYV6xQX3XvkbL6pbhxGVhfLWtRl7hu7Z2BOkx5QSFX7FkbLIgqe4rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      ],
      saleAmount: 254,
      productName: "Box set ปากกา MUJI เขียนลื่นเขียนดี สีติดง่ายไม่ขาด",
      rate: 4.5,
      numRate: 202,
      price: 99,
      newPrice: 1,
      categories: "Stationery",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
    },
    {
      id: 4,
      shopId: 4,
      img: [
        "https://s3-alpha-sig.figma.com/img/2475/42a5/ffa05cd29231d932ca72f08faee05d8a?Expires=1702857600&Signature=JHGtS6Z5ZINe8L~B2Oh-WrXOKmqAfhUreEQqHkSAcccvDglca1xg6VWXIpXQlBsIdRqcubd6FlAW7NczY2LchBo3XO2HNDYDXmu7B2NRZWmEMbrJeLxtT3r7cu2LP3zUvooLI8ab-8XCjY1IaRSsd7VFaZSh2DDT10otLC8edty7ZuUeuRjW5Xn5waL2Hpqw4pxh-VSSOlYwv3aTkvmsXOpgNjdHtYnsgVu8xMPqACR3lmuSz0lbMBEABLwoye1spZurY6XL-RNP~2uiH6Oq~o64WEjTnhbps5zL49-bDf6a9O4maiCFKRcKoDrq4OkkhOSxeaMrPaVWV0EJJiSlBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://s3-alpha-sig.figma.com/img/2475/42a5/ffa05cd29231d932ca72f08faee05d8a?Expires=1702857600&Signature=JHGtS6Z5ZINe8L~B2Oh-WrXOKmqAfhUreEQqHkSAcccvDglca1xg6VWXIpXQlBsIdRqcubd6FlAW7NczY2LchBo3XO2HNDYDXmu7B2NRZWmEMbrJeLxtT3r7cu2LP3zUvooLI8ab-8XCjY1IaRSsd7VFaZSh2DDT10otLC8edty7ZuUeuRjW5Xn5waL2Hpqw4pxh-VSSOlYwv3aTkvmsXOpgNjdHtYnsgVu8xMPqACR3lmuSz0lbMBEABLwoye1spZurY6XL-RNP~2uiH6Oq~o64WEjTnhbps5zL49-bDf6a9O4maiCFKRcKoDrq4OkkhOSxeaMrPaVWV0EJJiSlBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://s3-alpha-sig.figma.com/img/2475/42a5/ffa05cd29231d932ca72f08faee05d8a?Expires=1702857600&Signature=JHGtS6Z5ZINe8L~B2Oh-WrXOKmqAfhUreEQqHkSAcccvDglca1xg6VWXIpXQlBsIdRqcubd6FlAW7NczY2LchBo3XO2HNDYDXmu7B2NRZWmEMbrJeLxtT3r7cu2LP3zUvooLI8ab-8XCjY1IaRSsd7VFaZSh2DDT10otLC8edty7ZuUeuRjW5Xn5waL2Hpqw4pxh-VSSOlYwv3aTkvmsXOpgNjdHtYnsgVu8xMPqACR3lmuSz0lbMBEABLwoye1spZurY6XL-RNP~2uiH6Oq~o64WEjTnhbps5zL49-bDf6a9O4maiCFKRcKoDrq4OkkhOSxeaMrPaVWV0EJJiSlBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      ],
      saleAmount: 510,
      productName: "Complete Biology สรุปชีววิทยา",
      rate: 4.5,
      numRate: 421,
      price: 300,
      newPrice: 1,
      categories: "Book",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
    },
    {
      id: 5,
      shopId: 5,
      img: [
        "https://down-th.img.susercontent.com/file/1067f21b35ce0414c355c9e5d4539ce4_tn",
        "https://down-th.img.susercontent.com/file/342672cc6514206a0b6081c8d23825e2",
        "https://down-th.img.susercontent.com/file/1067f21b35ce0414c355c9e5d4539ce4_tn",
        "https://down-th.img.susercontent.com/file/342672cc6514206a0b6081c8d23825e2",
      ],
      saleAmount: 840,
      productName: "กระดุมนักศึกษา",
      rate: 4.5,
      numRate: 788,
      price: 45,
      categories: "Clothes",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
    },
    {
      id: 6,
      shopId: 1,
      img: [
        "https://s3-alpha-sig.figma.com/img/9cd7/39de/4c7ce354f8ad926ef4a2944b33301a68?Expires=1702857600&Signature=k6vVMvUrU3-NR4L0QLmWGX8JP0y66c4MmMQT5glnKiRroc9R7vscIGI9RwX4aYI8ILhVWgnRtz27G~346vpWjfFonmGL4zxRnJhjiHuy0e54UZ6wCjKSqE4lNaIhXsPjMeEM7p0aZNyaCYNiT2tqBMY0Z1aLaMtVIkaZvIFfTM3yyxhcRBqv4dE6x4Yyo9qgMA0uOI7xx4NPGiP92AATNIkmWjralP-lw1e0V-SgM56dx-Km67WafWudM4puDpY5dagXbeHUyMlqoV3UX~iKctE9gQx3TKrBlp8XItCGTbCHkdIC4wahLjSyw-w~ORLkGvXummsr6EoU0aS24OLpLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://s3-alpha-sig.figma.com/img/9cd7/39de/4c7ce354f8ad926ef4a2944b33301a68?Expires=1702857600&Signature=k6vVMvUrU3-NR4L0QLmWGX8JP0y66c4MmMQT5glnKiRroc9R7vscIGI9RwX4aYI8ILhVWgnRtz27G~346vpWjfFonmGL4zxRnJhjiHuy0e54UZ6wCjKSqE4lNaIhXsPjMeEM7p0aZNyaCYNiT2tqBMY0Z1aLaMtVIkaZvIFfTM3yyxhcRBqv4dE6x4Yyo9qgMA0uOI7xx4NPGiP92AATNIkmWjralP-lw1e0V-SgM56dx-Km67WafWudM4puDpY5dagXbeHUyMlqoV3UX~iKctE9gQx3TKrBlp8XItCGTbCHkdIC4wahLjSyw-w~ORLkGvXummsr6EoU0aS24OLpLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://s3-alpha-sig.figma.com/img/9cd7/39de/4c7ce354f8ad926ef4a2944b33301a68?Expires=1702857600&Signature=k6vVMvUrU3-NR4L0QLmWGX8JP0y66c4MmMQT5glnKiRroc9R7vscIGI9RwX4aYI8ILhVWgnRtz27G~346vpWjfFonmGL4zxRnJhjiHuy0e54UZ6wCjKSqE4lNaIhXsPjMeEM7p0aZNyaCYNiT2tqBMY0Z1aLaMtVIkaZvIFfTM3yyxhcRBqv4dE6x4Yyo9qgMA0uOI7xx4NPGiP92AATNIkmWjralP-lw1e0V-SgM56dx-Km67WafWudM4puDpY5dagXbeHUyMlqoV3UX~iKctE9gQx3TKrBlp8XItCGTbCHkdIC4wahLjSyw-w~ORLkGvXummsr6EoU0aS24OLpLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://s3-alpha-sig.figma.com/img/9cd7/39de/4c7ce354f8ad926ef4a2944b33301a68?Expires=1702857600&Signature=k6vVMvUrU3-NR4L0QLmWGX8JP0y66c4MmMQT5glnKiRroc9R7vscIGI9RwX4aYI8ILhVWgnRtz27G~346vpWjfFonmGL4zxRnJhjiHuy0e54UZ6wCjKSqE4lNaIhXsPjMeEM7p0aZNyaCYNiT2tqBMY0Z1aLaMtVIkaZvIFfTM3yyxhcRBqv4dE6x4Yyo9qgMA0uOI7xx4NPGiP92AATNIkmWjralP-lw1e0V-SgM56dx-Km67WafWudM4puDpY5dagXbeHUyMlqoV3UX~iKctE9gQx3TKrBlp8XItCGTbCHkdIC4wahLjSyw-w~ORLkGvXummsr6EoU0aS24OLpLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      ],
      saleAmount: 556,
      productName: "กระบอกน้ำ KMUTT 500 ml",
      rate: 4.8,
      numRate: 351,
      price: 369,
      categories: "Others",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
    },
    {
      id: 7,
      shopId: 2,
      img: [
        "https://s3-alpha-sig.figma.com/img/3f34/5f8e/f860eaff8530e9f350b271c7a415e5f5?Expires=1702857600&Signature=dl4PwympTKSY7pGZEaZzHiTqb8e-lr7wOV-fJB6JV9PC4c3f5-0LN-DdEiQGkxA9mV9MwiJhFjmADpm7C-QFam3vYpuXRZZh-rcVFGVZdwv9D4oik3jy2qmnwDKBeTz3NrgzqJ6BkEH9HOCjKNJCH1ovRpWW1-4aqH2jHfWjFTxNmPvSI~bgORyrZfhrLMdfKwoQKYTl0~hMKWWlnbexQxkvqhrOX~iFatA6Ci6aB6HyUJyDCfX9dQ2gqofF~vJiOHlVQAIv0dNmesO3LHG8m6LFwmwFVJeBOj5o1GMIjbDS3FvTQnxmN3IB2LKX3Yg4pEFIrAvUYs0zOU18QhXbow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://down-th.img.susercontent.com/file/fcade62a7d5da4b2073047ef7108f635",
        "https://s3-alpha-sig.figma.com/img/3f34/5f8e/f860eaff8530e9f350b271c7a415e5f5?Expires=1702857600&Signature=dl4PwympTKSY7pGZEaZzHiTqb8e-lr7wOV-fJB6JV9PC4c3f5-0LN-DdEiQGkxA9mV9MwiJhFjmADpm7C-QFam3vYpuXRZZh-rcVFGVZdwv9D4oik3jy2qmnwDKBeTz3NrgzqJ6BkEH9HOCjKNJCH1ovRpWW1-4aqH2jHfWjFTxNmPvSI~bgORyrZfhrLMdfKwoQKYTl0~hMKWWlnbexQxkvqhrOX~iFatA6Ci6aB6HyUJyDCfX9dQ2gqofF~vJiOHlVQAIv0dNmesO3LHG8m6LFwmwFVJeBOj5o1GMIjbDS3FvTQnxmN3IB2LKX3Yg4pEFIrAvUYs0zOU18QhXbow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://down-th.img.susercontent.com/file/fcade62a7d5da4b2073047ef7108f635"
      ],
      saleAmount: 840,
      productName: "คู่มือเรียน เขียนโปรแกรม Python (ภาคปฏิบัติ)",
      rate: 4.9,
      numRate: 431,
      price: 310,
      categories: "Book",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
    },
    {
      id: 8,
      shopId: 3,
      img: [
        "https://down-th.img.susercontent.com/file/42f67dc5ea7f9f0d77cf6bb2d26775b6",
        "https://s3-alpha-sig.figma.com/img/e215/b7ba/f15106a5c21a85e03f21dfa4a11261ef?Expires=1702857600&Signature=lssucae8emEpFk0fawAjD1lUcvWk8H~30nd742JdBV5MtNgv9oU2HYFXHCbb22XV1iSGbjtKmVz0iPzL6DaJhTh3sd3UNGiLetdhWPVy501GzugE6C-W3bGMyIWJlDsI1AdzoynEz8Uthv7V4pXRs3CErmk2fA0YlK7RS-Jyjka7RPaT5ZV6ZKRqFiySC4ux3D8qM1BtXoV3LyZIG9x~uPUZEMIV2qioOk7lsnW3~0Hp4jKGQxmRMb2J-kWOlnEm6jetuYfEARE6~PjPTd50acaVSvTt9RvxrQWJJi0WjcRNqE~kpxhD4wn4WGcn7luTm5PMbJ2EOiaX1QP~pmUG8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://down-th.img.susercontent.com/file/3226dd601909c99935769de269c4313d",
        "https://down-th.img.susercontent.com/file/eba373295b2b5b72bb86d28d72f55414",
        "https://down-th.img.susercontent.com/file/e01b4f60fddcf0d18e40780256ae1ca0"
      ],
      saleAmount: 389,
      productName: "Muji ยางลบ เครื่องเขียนสำหรับลบดินสอ",
      rate: 4.1,
      numRate: 366,
      price: 36,
      newPrice: 1,
      categories: "Stationery",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
    },
    {
      id: 9,
      shopId: 4,
      img: [
        "https://down-th.img.susercontent.com/file/488b091668418b7532489bcb80f6876e",
        "https://down-th.img.susercontent.com/file/4951b62101378b405c0ab34aff2ad1f8",
        "https://down-th.img.susercontent.com/file/b77109a0927063c46311e5a0d0a307a1"
      ],
      saleAmount: 401,
      productName: "ชุดเครื่องเขียน แพ็ค 5 ชิ้น (ดินสอ ยางลบ ไม้บรรทัด กบเหลา)",
      rate: 4.5,
      numRate: 321,
      price: 15,
      categories: "Stationery",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 10,
        shopId: 5,
        img: [
          "https://down-th.img.susercontent.com/file/th-11134207-7qul2-lguidc74wbhkde",
          "https://down-th.img.susercontent.com/file/th-11134207-7quky-lguidc74wb90be",
          "https://down-th.img.susercontent.com/file/th-11134207-7qul2-lguidc74wbhkde",
          "https://down-th.img.susercontent.com/file/th-11134207-7quky-lguidc74wb90be"
        ],
        saleAmount: 250,
        productName: "ชีสบอล",
        rate: 4.7,
        numRate: 120,
        price: 35,
        categories: "Dessert",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 11,
        shopId: 1,
        img: [
          "https://down-th.img.susercontent.com/file/sg-11134201-23010-3lpb29ua7fmv2a",
          "https://down-th.img.susercontent.com/file/sg-11134201-23010-iyxmypva7fmv81",
          "https://down-th.img.susercontent.com/file/sg-11134201-23010-chf8wcva7fmv13",
          "https://down-th.img.susercontent.com/file/sg-11134201-23010-x0ejr4ua7fmve9",
          "https://down-th.img.susercontent.com/file/sg-11134201-23010-ubc1sgva7fmv84"
        ],
        saleAmount: 411,
        productName: "ปากกาเจล ขนาด 0.5 mm",
        rate: 4.5,
        numRate: 245,
        price: 30,
        categories: "Stationery",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 12,
        shopId: 2,
        img: [
          "https://s3-alpha-sig.figma.com/img/52eb/b6f5/75b09b16b41b223023b5224a2bbdd1ef?Expires=1702857600&Signature=bDABi21jUnCRW3E9ah7gmu5LLaJxNXAMEMtksYXiJniXnZ~zfjVozL7WbjgDWO87Wmf9y0JB6uo1MEDm5DgT25Om2v2x-aE7yiZe08tfbK42I62LLXY~hr6Fl4~I1YurGJyi2-OUAXYvMvxIZCyIwBX39crgUA2WsDcl-yFg1lugoX8hu3mRsDVSW3c3FelyCvh95UEvIKliPpKUCDHUP5BUzzWCvSF~NGUFKjfW0ZyPWbJkSeV6G~5zTiXc2-PsjK3abNreptc5tqYtOIhAvV7zpPVLDXyz-NncYRfyaBVO7N5pKeB~Qf9knpSXBm8MFi8BA2BOswpQZdD2sYnqpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          "https://s3-alpha-sig.figma.com/img/52eb/b6f5/75b09b16b41b223023b5224a2bbdd1ef?Expires=1702857600&Signature=bDABi21jUnCRW3E9ah7gmu5LLaJxNXAMEMtksYXiJniXnZ~zfjVozL7WbjgDWO87Wmf9y0JB6uo1MEDm5DgT25Om2v2x-aE7yiZe08tfbK42I62LLXY~hr6Fl4~I1YurGJyi2-OUAXYvMvxIZCyIwBX39crgUA2WsDcl-yFg1lugoX8hu3mRsDVSW3c3FelyCvh95UEvIKliPpKUCDHUP5BUzzWCvSF~NGUFKjfW0ZyPWbJkSeV6G~5zTiXc2-PsjK3abNreptc5tqYtOIhAvV7zpPVLDXyz-NncYRfyaBVO7N5pKeB~Qf9knpSXBm8MFi8BA2BOswpQZdD2sYnqpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          "https://s3-alpha-sig.figma.com/img/52eb/b6f5/75b09b16b41b223023b5224a2bbdd1ef?Expires=1702857600&Signature=bDABi21jUnCRW3E9ah7gmu5LLaJxNXAMEMtksYXiJniXnZ~zfjVozL7WbjgDWO87Wmf9y0JB6uo1MEDm5DgT25Om2v2x-aE7yiZe08tfbK42I62LLXY~hr6Fl4~I1YurGJyi2-OUAXYvMvxIZCyIwBX39crgUA2WsDcl-yFg1lugoX8hu3mRsDVSW3c3FelyCvh95UEvIKliPpKUCDHUP5BUzzWCvSF~NGUFKjfW0ZyPWbJkSeV6G~5zTiXc2-PsjK3abNreptc5tqYtOIhAvV7zpPVLDXyz-NncYRfyaBVO7N5pKeB~Qf9knpSXBm8MFi8BA2BOswpQZdD2sYnqpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          "https://s3-alpha-sig.figma.com/img/52eb/b6f5/75b09b16b41b223023b5224a2bbdd1ef?Expires=1702857600&Signature=bDABi21jUnCRW3E9ah7gmu5LLaJxNXAMEMtksYXiJniXnZ~zfjVozL7WbjgDWO87Wmf9y0JB6uo1MEDm5DgT25Om2v2x-aE7yiZe08tfbK42I62LLXY~hr6Fl4~I1YurGJyi2-OUAXYvMvxIZCyIwBX39crgUA2WsDcl-yFg1lugoX8hu3mRsDVSW3c3FelyCvh95UEvIKliPpKUCDHUP5BUzzWCvSF~NGUFKjfW0ZyPWbJkSeV6G~5zTiXc2-PsjK3abNreptc5tqYtOIhAvV7zpPVLDXyz-NncYRfyaBVO7N5pKeB~Qf9knpSXBm8MFi8BA2BOswpQZdD2sYnqpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        ],
        saleAmount: 640,
        productName: "เสื้อยืดคอกลมลาย KMUTT",
        rate: 4.9,
        numRate: 611,
        price: 199,
        categories: "Clothes",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 13,
        shopId: 3,
        img: [
          "https://down-th.img.susercontent.com/file/303cbc427e6243ee9d04dfc071b26ba4",
          "https://down-th.img.susercontent.com/file/303cbc427e6243ee9d04dfc071b26ba4",
          "https://down-th.img.susercontent.com/file/40d343c451ef277aa7980a9ee9e6dfb8",
          "https://down-th.img.susercontent.com/file/910d42cdd410594ed22212a0487a839d"
        ],
        saleAmount: 1249,
        productName: "แมสลายการ์ตูน 3D ผู้ใหญ่",
        rate: 4.9,
        numRate: 1201,
        price: 20,
        categories: "Others",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 14,
        shopId: 4,
        img: [
          "https://down-th.img.susercontent.com/file/th-11134207-7r991-lmk1s74nn8qvab",
          "https://down-th.img.susercontent.com/file/th-11134207-7r98v-lmk2suy8d3f26a",
          "https://down-th.img.susercontent.com/file/th-11134207-7r98p-lmk2a77t7imfcb",
          "https://down-th.img.susercontent.com/file/th-11134207-7r991-lmk1s74nlu6f5e",
          "https://down-th.img.susercontent.com/file/th-11134207-7r98v-lmk1s74nsv0n5b"
        ],
        saleAmount: 655,
        productName: "Soft-Baked Cookie",
        rate: 4.6,
        numRate: 529,
        price: 60,
        categories: "Dessert",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 15,
        shopId: 5,
        img: [
          "https://down-th.img.susercontent.com/file/c0bea98b7a1ffc268891be25119624a1",
          "https://down-th.img.susercontent.com/file/f94dc682ddbd84e8f46fde5be323b6c5",
          "https://down-th.img.susercontent.com/file/2c7a33bd767ff83d5f79825a44199f7c",
          "https://down-th.img.susercontent.com/file/73dfa38b6f2d47913b342ce23cf6a963",
          "https://down-th.img.susercontent.com/file/9210ce88fb0e15cee04bc276439d40d7"
        ],
        saleAmount: 546,
        productName: "บราวนี่เข้มข้น",
        rate: 4.2,
        numRate: 129,
        price: 35,
        categories: "Dessert",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 16,
        shopId: 1,
        img: [
          "https://down-th.img.susercontent.com/file/1df6b8f24f77e512699bb12fe4d5afc7",
          "https://down-th.img.susercontent.com/file/363a43844dde23ce5d79eb943061a013",
          "https://down-th.img.susercontent.com/file/193841be8effa8640191f3271e24de97",
          "https://down-th.img.susercontent.com/file/0ae9c22a64c6873ead64e65a73350cd8",
          "https://down-th.img.susercontent.com/file/36f3549cb62fd6448e598a06ddaf80e3"
        ],
        saleAmount: 254,
        productName: "ปังไท พายผีเสื้อ",
        rate: 4.6,
        numRate: 120,
        price: 20,
        newPrice: 1,
        categories: 'Dessert',
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 17,
        shopId: 2,
        img: [
          "https://down-th.img.susercontent.com/file/th-11134207-7r98u-lnse4vy6pzxsec",
          "https://down-th.img.susercontent.com/file/th-11134207-7r991-lln0wvb6sg972c",
          "https://down-th.img.susercontent.com/file/th-11134207-7r98u-lnse4vy6pzxsec",
          "https://down-th.img.susercontent.com/file/th-11134207-7r98r-lnse4vy6rei8f9",
          "https://down-th.img.susercontent.com/file/th-11134207-7r98w-lln0wvb6pn4b9c"
        ],
        saleAmount: 215,
        productName: "PRO โปร ผงซักฟอก",
        rate: 4.1,
        numRate: 180,
        price: 105,
        categories: 'Others',
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 18,
        shopId: 3,
        img: [
          "https://down-th.img.susercontent.com/file/fa3753bf6e440604d5c295069d0e1ef5",
          "https://down-th.img.susercontent.com/file/e15758e37a8dd15ac7aea22749f75606",
          "https://down-th.img.susercontent.com/file/f12049144e4d3a3ed8ae1f1f0b53932a",
          "https://down-th.img.susercontent.com/file/88ed99bacb3872866ea50bf223632004",
        ],
        saleAmount: 153,
        productName: "ฮอลล์เอ็กซ์เอสลูกอมชูการ์ฟรีกลิ่นบลูเบอร์รี่",
        rate: 3.2,
        numRate: 120,
        price: 67,
        newPrice: 1,
        categories: 'Dessert',
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 19,
        shopId: 4,
        img: [
          "https://down-th.img.susercontent.com/file/929406e15e36e4aa756f88999af64550",
          "https://down-th.img.susercontent.com/file/929406e15e36e4aa756f88999af64550",
          "https://down-th.img.susercontent.com/file/929406e15e36e4aa756f88999af64550",
          "https://down-th.img.susercontent.com/file/929406e15e36e4aa756f88999af64550",
          "https://down-th.img.susercontent.com/file/929406e15e36e4aa756f88999af64550"
        ],
        saleAmount: 710,
        productName: "หัวเข็มขัดนักศึกษามจธ (KMUTT) ",
        rate: 4.5,
        numRate: 588,
        price: 45,
        categories: "Clothes",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 20,
        shopId: 5,
        img: [
          "https://down-th.img.susercontent.com/file/a0f546c40a54eaae7347701b9cff2ed8",
          "https://down-th.img.susercontent.com/file/32cecaf1b978c71217f861b18831ac18",
          "https://down-th.img.susercontent.com/file/a0f546c40a54eaae7347701b9cff2ed8",
          "https://down-th.img.susercontent.com/file/32cecaf1b978c71217f861b18831ac18",
          "https://down-th.img.susercontent.com/file/a0f546c40a54eaae7347701b9cff2ed8",
        ],
        saleAmount: 2065,
        productName: "【หนังสือภาษาอังกฤษ】Eat That Frog",
        rate: 4.9,
        numRate: 2000,
        price: 145,
        categories: "Others",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 21,
        shopId: 1,
        img: [
          "https://down-th.img.susercontent.com/file/85eb77540a299b3855738104e7939fd6",
          "https://down-th.img.susercontent.com/file/9df47be2369470ffc228e0bff55da0f1",
          "https://down-th.img.susercontent.com/file/55695c721ab913423ec1163a3e0cedbf",
          "https://down-th.img.susercontent.com/file/6a16269ef653186a4633ed7df3fdc23b",

        ],
        saleAmount: 4065,
        productName: "AFFLIGA กางเกงวอร์มขายาว",
        rate: 4.9,
        numRate: 3520,
        price: 195,
        newPrice: 1,
        categories: "Clothes",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 22,
        shopId: 2,
        img: [
          "https://down-th.img.susercontent.com/file/th-11134207-7r98q-llcztlx0txkca6",
          "https://down-th.img.susercontent.com/file/th-11134207-7r991-lluhkyqynnyf08",
          "https://down-th.img.susercontent.com/file/sg-11134201-22100-9awgfdy2whiv28",
          "https://down-th.img.susercontent.com/file/7cba43adf90007e81571fd8beec2046b",
          "https://down-th.img.susercontent.com/file/407da7ded0cc196af92f9653cfb33199",
          "https://down-th.img.susercontent.com/file/572929bde15de23db8c8a2a97d82396d"
        ],
        saleAmount: 1065,
        productName: "ชีทสรุปเนื้อหา1เล่มมีทุกวิชา (5 วิชาหลัก)",
        rate: 4.3,
        numRate: 720,
        price: 380,
        newPrice: 1,
        categories: "Book",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 23,
        shopId: 3,
        img: [
          "https://down-th.img.susercontent.com/file/9dbc65d13bd64c2e443d9f1876a000c5",
          "https://down-th.img.susercontent.com/file/9dbc65d13bd64c2e443d9f1876a000c5",
          "https://down-th.img.susercontent.com/file/9dbc65d13bd64c2e443d9f1876a000c5",
          "https://down-th.img.susercontent.com/file/9dbc65d13bd64c2e443d9f1876a000c5",
        ],
        saleAmount: 865,
        productName: "EMOTIONAL FIRST AID ซ่อมแซมสุขที่สึกหรอ",
        rate: 4.9,
        numRate: 720,
        price: 290,
        categories: "Book",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 24,
        shopId: 4,
        img: [
          "https://down-th.img.susercontent.com/file/5827a509d6358b6ce73057697a6fdd12",
          "https://down-th.img.susercontent.com/file/09251b700f8e30c830f12871cc01296b",
          "https://down-th.img.susercontent.com/file/b4150c17ec4f915c9e17e8b10228756c",
          "https://down-th.img.susercontent.com/file/e44cdeb7477c52a8b1b666dd977a718d"
        ],
        saleAmount: 365,
        productName: "หนังสือ ฝึก คัด เขียน อักษรเกาหลี",
        rate: 4.1,
        numRate: 140,
        price: 29,
        newPrice: 1,
        categories: "Book",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },
      {
        id: 25,
        shopId: 5,
        img: [
          "https://down-th.img.susercontent.com/file/a6ad324bf87f25a8b2cc2918dc6867af",
          "https://down-th.img.susercontent.com/file/7bd7aabb39d57ec4ca15effe64bd560e",
          "https://down-th.img.susercontent.com/file/cda9ed35af58bd5dbe596e22105d2898"
        ],
        saleAmount: 265,
        productName: "ฟุตบอล",
        rate: 4.3,
        numRate: 121,
        price: 173,
        newPrice: 1,
        categories: "Others",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis mauris est, in dictum velit porttitor at. Donec sit amet orci ligula. Quisque venenatis, velit vel porttitor consequat, justo dolor placerat quam, sodales lacinia odio leo sit amet dui. Ut orci tortor, fringilla mollis interdum quis, dapibus a libero. "
      },

      
  ];
  