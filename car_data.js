let cars = [
  {
    name: "Honda Amaze 1.2 VX i-VTEC",
    make: "Honda",
    year: 2017,
    mileage: "23.4 kmpl",
    price: 505000,
    kilometer: 87150,
    color: "Black",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
  },
  {
    name: "Maruti Suzuki Swift DZire VDI",
    make: "Maruti Suzuki",
    year: 2006,
    mileage: "21.14 kmpl",
    price: 450000,
    kilometer: 75000,
    color: "Grey",
    img: "https://imgd.aeplcdn.com/664x374/cw/ec/26860/Maruti-Suzuki-Dzire-Exterior-118637.jpg?wm=0&q=80"
  },
  {
    name: "Toyota Glanza G",
    make: "Toyota",
    year: 2007,
    mileage: "23.0 kmpl",
    price: 799000,
    kilometer: 37500,
    color: "Red",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/112839/glanza-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
  },
  {
    name: "Toyota Innova 2.4 VX 7 STR",
    make: "Toyota",
    year: 2008,
    mileage: "16.1 kmpl",
    price: 1950000,
    kilometer: 69000,
    color: "White",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1697698611076/front-left-side-47.jpg?imwidth=420&impolicy=resize"
  },
  {
    name: "Maruti Suzuki Ciaz ZXi",
    make: "Maruti Suzuki",
    year: 2017,
    mileage: "20.14 kmpl",
    price: 675000,
    kilometer: 73315,
    color: "Grey",
    img: "https://imgd.aeplcdn.com/664x374/cw/cars/maruti-suzuki/ciaz.jpg?q=80"
  },
  {
    name: "Mercedes-Benz CLA 200 Petrol Sport",
    make: "Mercedes-Benz",
    year: 2015,
    mileage: "17.3 km/kg",
    price: 1898999,
    kilometer: 47000,
    color: "Red",
    img:"https://imgd.aeplcdn.com/664x374/cw/ec/22898/MercedesBenz-CLA-Right-Front-Three-Quarter-84856.jpg?wm=0&q=80"
  },
  {
    name: "BMW X1 xDrive20d M Sport",
    make: "BMW",
    year: 2017,
    mileage: "16.1 kmpl",
    price: 2650000,
    kilometer: 75000,
    color: "Blue",
    img: "https://imgd.aeplcdn.com/664x374/cw/ec/20227/BMW-X1-Right-Front-Three-Quarter-65929.jpg?v=20160402105618&t=105618180&t=105618180&q=80"
  },
  {
    name: "Skoda Octavia 1.8 TSI Style Plus AT [2017]",
    make: "Skoda",
    year: 2017,
    mileage: "23.59 kmpl",
    price: 1390000,
    kilometer: 56000,
    color: "Red",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/43966/skoda-octavia-rs-245-exterior5.jpeg?q=80"
  },
  {
    name: "Nissan Terrano XL (D)",
    make: "Nissan",
    year: 2015,
    mileage: "20.0 kmpl",
    price: 575000,
    kilometer: 85000,
    color: "Red",
    img: "https://imgd.aeplcdn.com/664x374/cw/cars/nissan/terrano.jpg?q=80"
  },
  {
    name: "Renault Kwid 1.0 RXT [2016-2019]",
    make: "Renault",
    year: 2018,
    mileage: "17.3 kmpl",
    price: 459999,
    kilometer: 22541,
    color: "Grey",
    img: "https://imgd.aeplcdn.com/664x374/cw/specialVersions/4862.jpg?v=20180207114452&q=80"
  },
  {
    name: "Maruti Suzuki Ciaz Alpha Hybrid 1.5 AT",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "19.3 kmpl",
    price: 1075000,
    kilometer: 30672,
    color: "Blue",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
  },
  {
    name: "Tata Harrier XZ [2019-2020]",
    make: "Tata",
    year: 2019,
    mileage: null,
    price: 1695000,
    kilometer: 20856,
    color: "White",
    img: "https://imgd.aeplcdn.com/370x208/n/7rnlssa_1480037.jpg?q=80"
  },
  {
    name: "Volkswagen Polo GT TSI",
    make: "Volkswagen",
    year: 2017,
    mileage: "18.9 kmpl",
    price: 944999,
    kilometer: 41417,
    color: "White",
    img: "https://imgd.aeplcdn.com/370x208/n/0eaklsa_1470991.jpg?q=80"
  },
  {
    name: "Hyundai Creta 1.6 E Petrol",
    make: "Hyundai",
    year: 2007,
    mileage: "22.54 kmpl",
    price: 740000,
    kilometer: 60125,
    color: "Silver",
    img: "https://imgd.aeplcdn.com/370x208/n/x7v8asa_1459259.jpg?q=80"
  },
  {
    name: "Maruti Suzuki S-Presso VXi AMT",
    make: "Maruti Suzuki",
    year: 2020,
    mileage: "21.0 kmpl",
    price: 470000,
    kilometer: 2169,
    color: "Blue",
    img: "https://imgd.aeplcdn.com/370x208/n/p57d33a_1591335.jpg?q=80"
  },
  {
    name: "Volkswagen Vento Comfortline Petrol AT",
    make: "Volkswagen",
    year: 2015,
    mileage: "25.5 kmpl",
    price: 765000,
    kilometer: 60240,
    color: "Brown",
    img: "https://imgd.aeplcdn.com/370x208/n/1ciklsa_1471000.jpg?q=80"
  }, 
  {
    name: "Honda Brio V MT",
    make: "Honda",
    year: 2007,
    mileage: "18.2 kmpl",
    price: 351000,
    kilometer: 39276,
    color: "Blue",
    img: "https://imgd.aeplcdn.com/664x374/cw/ec/9730/Honda-Brio-20132016-Right-Front-Three-Quarter-81357.jpg?wm=0&q=80"
  },
  {
    name: "Hyundai Venue SX 1.0 Turbo iMT",
    make: "Hyundai",
    year: 2020,
    mileage: "24.3 kmpl",
    price: 990000,
    kilometer: 24013,
    color: "Silver",
    img: "https://imgd.aeplcdn.com/370x208/n/tsnojbb_1685357.jpg?q=80"
  },
  {
    name: "Ford Ecosport Titanium+ 1.0L EcoBoost",
    make: "Ford",
    year: 2015,
    mileage: "14.0 kmpl",
    price: 535000,
    kilometer: 28000,
    color: "Grey",
    img: "https://imgd.aeplcdn.com/370x208/n/k30lora_1420620.jpg?q=80"
  },
  {
    name: "Honda CR-V 2.4 AT",
    make: "Honda",
    year: 2013,
    mileage: "18.6 kmpl",
    price: 860000,
    kilometer: 67000,
    color: "Black",
    img: "https://imgd.aeplcdn.com/370x208/n/07bkora_1420592.jpg?q=80"
  },
  {
    name: "Hyundai Santro GL (CNG)",
    make: "Hyundai",
    year: 2009,
    mileage: "24.3 kmpl",
    price: 145000,
    kilometer: 72000,
    color: "Silver",
    img: "https://imgd.aeplcdn.com/664x374/cw/cars/discontinued/hyundai/santro-xing-2008-2015.jpg?q=80"
  },
  {
    name: "Tata Tiago Revotron XE [2016-2019]",
    make: "Tata",
    year: 2018,
    mileage: "33.44 km/kg",
    price: 409000,
    kilometer: 27069,
    color: "Red",
    img: "https://imgd.aeplcdn.com/370x208/n/w39uesa_1463316.jpg?q=80"
  },
  {
    name: "Tata Tigor Revotorq XT",
    make: "Tata",
    year: 2018,
    mileage: "23.95 kmpl",
    price: 490000,
    kilometer: 43000,
    color: "White",
    img: "https://imgd.aeplcdn.com/370x208/n/00lsora_1420934.jpg?q=80"
  },
  {
    name: "Toyota Innova 2.4 G 8 STR",
    make: "Toyota",
    year: 2019,
    mileage: "17.0 kmpl",
    price: 1900000,
    kilometer: 71000,
    color: "Grey",
    img: "https://imgd.aeplcdn.com/370x208/n/tpvuhab_1655939.png?q=80"
  },
  {
    name: "Mercedes-Benz GLC 220 d Progressive",
    make: "Mercedes-Benz",
    year: 2017,
    mileage: "20.63 kmpl",
    price: 3850000,
    kilometer: 45600,
    color: "Blue",
    img: "https://imgd.aeplcdn.com/370x208/n/sd6i3ua_1564519.jpg?q=80"
  },
  {
    name: "Mercedes-Benz M-Class ML 250 CDI",
    make: "Mercedes-Benz",
    year: 2008,
    mileage: "16.1 kmpl",
    price: 2300000,
    kilometer: 105101,
    color: "Blue",
    img: "https://imgd.aeplcdn.com/370x208/n/sd6i3ua_1564519.jpg?q=80"
  },
  {
    name: "Toyota Corolla Altis VL AT Petrol",
    make: "Toyota",
    year: 2016,
    mileage: "16.0 kmpl",
    price: 1095000,
    kilometer: 45000,
    color: "Black",
    img: "https://imgd.aeplcdn.com/370x208/n/sw356ra_1421818.jpg?q=80"
  },
  {
    name: "Audi A4 2.0 TDI (177bhp) Premium Plus",
    make: "Audi",
    year: 2013,
    mileage: "17.8 kmpl",
    price: 1575000,
    kilometer: 66000,
    color: "Blue",
    img: "https://imgd.aeplcdn.com/664x374/cw/ec/10820/Audi-A4-Right-Front-Three-Quarter-56157.jpg?wm=0&q=80"
  },
  {
    name: "Mercedes-Benz SLK-Class SLK 200 K",
    make: "Mercedes-Benz",
    year: 2010,
    mileage: "16.8 kmpl",
    price: 2400000,
    kilometer: 34105,
    color: "Silver",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/Mercedes-Benz-SLK-Class/2716/1562752994139/front-left-side-47.jpg?imwidth=420&impolicy=resize"
  },
  {
    name: "Mahindra Thar CRDe 4x4 AC",
    make: "Mahindra",
    year: 2015,
    mileage: "24.3 kmpl",
    price: 625000,
    kilometer: 65000,
    color: "Silver",
    img: "https://imgd.aeplcdn.com/370x208/n/c2i06ra_1421110.jpg?q=80"
  },
  {
    name: "Hyundai Creta SX Plus 1.6 AT CRDI",
    make: "Hyundai",
    year: 2017,
    mileage: "24.7 kmpl",
    price: 1150000,
    kilometer: 66602,
    color: "Brown",
    img: "https://imgd.aeplcdn.com/370x208/n/bxp3nra_1420160.jpg?q=80"
  },
  {
    name: "Renault Kwid 1.0 RXT AMT Opt",
    make: "Renault",
    year: 2019,
    mileage: "26.0 kmpl",
    price: 470000,
    kilometer: 11183,
    color: "Black",
    img: "https://imgd.aeplcdn.com/370x208/n/117ne3a_1571025.jpg?q=80"
  },
  {
    name: "MG Hector Sharp 2.0 Diesel [2019-2020]",
    make: "MG",
    year: 2019,
    mileage: "20.65 kmpl",
    price: 1611000,
    kilometer: 46301,
    color: "White",
    img: "https://imgd.aeplcdn.com/370x208/n/fapb9ta_1490480.jpg?q=80"
  },
  {
    name: "Tata Tiago Revotron XZA [2017-2019]",
    make: "Tata",
    year: 2017,
    mileage: "27.3 kmpl",
    price: 475000,
    kilometer: 34867,
    color: "Red",
    img: "https://imgd.aeplcdn.com/370x208/n/w39uesa_1463316.jpg?q=80"
  },
  {
    name: "Toyota Innova 2.5 GX BS IV 7 STR",
    make: "Toyota",
    year: 2015,
    mileage: "11.36 kmpl",
    price: 865000,
    kilometer: 43634,
    color: "Silver",
    img: "https://imgd.aeplcdn.com/664x374/cw/specialVersions/3866.jpg?v=20160510115423&q=80"
  },
  {
    name: "BMW X3 xDrive 20d Luxury Line [2018-2020]",
    make: "BMW",
    year: 2018,
    mileage: "12.99 kmpl",
    price: 3800000,
    kilometer: 9512,
    color: "Blue",
    img: "https://imgd.aeplcdn.com/370x208/n/22ci9sa_1463703.jpg?q=80"
  },
  {
    name: "Jeep Compass Limited Plus 2.0 Diesel 4x4 AT",
    make: "Jeep",
    year: 2020,
    mileage: "17.68 kmpl",
    price: 2475000,
    kilometer: 11293,
    color: "Grey",
    img: "https://imgd.aeplcdn.com/370x208/n/g5t8osa_1474555.jpg?q=80"
  },
  {
    name: "Mahindra Scorpio SLE BS-IV",
    make: "Mahindra",
    year: 2010,
    mileage: "14.28 kmpl",
    price: 400000,
    kilometer: 78000,
    color: "Blue",
    img: "https://imgd.aeplcdn.com/664x374/cw/cars/discontinued/mahindra/scorpio-2009-2014.jpg?q=80"
  },
  {
    name: "Honda Brio S MT",
    make: "Honda",
    year: 2016,
    mileage: "18.53 kmpl",
    price: 440000,
    kilometer: 50374,
    color: "Black",
    img: "https://imgd.aeplcdn.com/370x208/n/mg8vh5a_1439981.jpg?q=80"
  },
  {
    name: "BMW 3-Series 320i Luxury Line",
    make: "BMW",
    year: 2017,
    mileage: "14.84 kmpl",
    price: 2800000,
    kilometer: 15900,
    color: "Black",
    img: "https://imgd.aeplcdn.com/370x208/n/ga6dpra_1422139.jpg?q=80"
  },
  {
    name: "Honda City V Petrol [2017-2019]",
    make: "Honda",
    year: 2017,
    mileage: "21.12 kmpl",
    price: 645000,
    kilometer: 64000,
    color: "Red",
    img: "https://imgd.aeplcdn.com/370x208/n/oloubsa_1460628.jpg?q=80"
  },
  {
    name: "Volkswagen Polo Highline1.2L (D)",
    make: "Volkswagen",
    year: 2013,
    mileage: "20.36 kmpl",
    price: 365000,
    kilometer: 78000,
    color: "Red",
    img: "https://imgd.aeplcdn.com/664x374/cw/cars/discontinued/volkswagen/polo-2012-2014.jpg?q=80"
  },
  {
    name: "Ford Ecosport Titanium Plus 1.5L TDCi",
    make: "Ford",
    year: 2018,
    mileage: "21.7 kmpl",
    price: 975000,
    kilometer: 46000,
    color: "Brown",
    img: "https://imgd.aeplcdn.com/370x208/n/tgaefsa_1464451.jpg?q=80"
  },
  {
    name: "Volkswagen Polo Comfortline1.0L MPI",
    make: "Volkswagen",
    year: 2019,
    mileage: "18.24 kmpl",
    price: 695000,
    kilometer: 10310,
    color: "Black",
    img: "https://imgd.aeplcdn.com/370x208/n/rbbklsa_1470992.jpg?q=80"
  },
  {
    name: "Ford Ecosport Titanium 1.5L Ti-VCT",
    make: "Ford",
    year: 2018,
    mileage: "17.0 kmpl",
    price: 825000,
    kilometer: 16893,
    color: "White",
    img: "https://imgd.aeplcdn.com/664x374/cw/ec/40369/Ford-EcoSport-Right-Front-Three-Quarter-159249.jpg?wm=0&q=80"
  },
  {
    name: "Maruti Suzuki Swift VXi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "22.0 kmpl",
    price: 400000,
    kilometer: 32000,
    color: "Grey",
    img: "https://imgd.aeplcdn.com/370x208/n/3phi4ta_1508709.jpg?q=80"
  },
  {
    name: "Renault Kwid RXT [2019-2020]",
    make: "Renault",
    year: 2019,
    mileage: "24.04 kmpl",
    price: 310000,
    kilometer: 19000,
    color: "Blue",
    img: "https://imgd.aeplcdn.com/370x208/n/tlkne3a_1571023.jpg?q=80"
  },
  {
    name: "Toyota Innova 2.5 VX (Diesel) 7 Seater BS IV",
    make: "Toyota",
    year: 2008,
    mileage: "15.1 kmpl",
    price: 1150000,
    kilometer: 39000,
    color: "White",
    img: "https://imgd.aeplcdn.com/664x374/cw/cars/discontinued/toyota/innova-2012-2013.jpg?q=80"
  },
  {
    name: "Tata Tiago Revotron XM [2016-2019]",
    make: "Tata",
    year: 2018,
    mileage: "23.84 kmpl",
    price: 390000,
    kilometer: 38000,
    color: "White",
    img: "https://imgd.aeplcdn.com/370x208/n/s4ttesa_1463275.jpg?q=80"
  },
  {
    name: "Toyota Etios Liva 1.2 V",
    make: "Toyota",
    year: 2015,
    mileage: "17.71 kmpl",
    price: 455000,
    kilometer: 22541,
    color: "Grey",
    img: "https://imgd.aeplcdn.com/370x208/n/opj4bsa_1460592.jpg?q=80"
  },
  {
    name: "Maruti Suzuki Swift Dzire ZXi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "23.4 kmpl",
    price: 580000,
    kilometer: 57000,
    color: "Silver",
    img: "https://imgd.aeplcdn.com/370x208/n/39auusa_1483111.jpg?q=80"
  },
  {
    name: "Ford EcoSport Titanium 1.5 Ti VCT AT",
    make: "Ford",
    year: 2018,
    mileage: "14.8 kmpl",
    price: 905000,
    kilometer: 49000,
    color: "White",
    img:"https://imgd.aeplcdn.com/664x374/cw/ec/40369/Ford-EcoSport-Right-Front-Three-Quarter-159249.jpg?wm=0&q=80"
  },
  
  {
    name: "Hyundai Verna 1.6 VTVT S AT",
    make: "Hyundai",
    year: 2016,
    mileage: "17.01 kmpl",
    price: 700000,
    kilometer: 45000,
    color: "Red",
    img: "https://imgd.aeplcdn.com/664x374/cw/ec/22136/Hyundai-Verna-Right-Front-Three-Quarter-82934.jpg?wm=0&q=80"
  },
  {
    name: "Honda Amaze 1.5 S i-DTEC",
    make: "Honda",
    year: 2014,
    mileage: "25.8 kmpl",
    price: 540000,
    kilometer: 45000,
    color: "Red",
    img: "https://imgd.aeplcdn.com/664x374/cw/cars/honda/amaze.jpg?q=80"
  },
 

 {
    name: "Maruti Suzuki Alto 800 VXI",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "24.7 kmpl",
    price: 200000,
    kilometer: 45000,
    color: "White",
    img: "https://imgd.aeplcdn.com/370x208/n/6gouesa_1463328.jpg?q=80"
  },
  {
    name: "Tata Tiago Revotron XZ Plus [2018-2020]",
    make: "Tata",
    year: 2018,
    mileage: "23.84 kmpl",
    price: 470000,
    kilometer: 32200,
    color: "Grey",
    img: "https://imgd.aeplcdn.com/370x208/n/1mstesa_1463274.jpg?q=80"
  },
  {
    name: "Renault Kwid Climber 1.0 MT Opt [2017-2019]",
    make: "Renault",
    year: 2018,
    mileage: "23.01 kmpl",
    price: 300000,
    kilometer: 24000,
    color: "Blue",
    img: "https://imgd.aeplcdn.com/370x208/n/y5qlv5a_1457541.jpg?q=80"
  },
  {
    name: "Hyundai Creta 1.6 SX",
    make: "Hyundai",
    year: 2016,
    mileage: "17.01 kmpl",
    price: 950000,
    kilometer: 35000,
    color: "Silver",
    img: "https://imgd.aeplcdn.com/370x208/n/x7v8asa_1459259.jpg?q=80"
  },
  {
    name: "Maruti Suzuki Swift VXi",
    make: "Maruti Suzuki",
    year: 2011,
    mileage: "17.8 kmpl",
    price: 350000,
    kilometer: 50000,
    color: "Grey",
    img: "https://imgd.aeplcdn.com/370x208/n/3phi4ta_1508709.jpg?q=80"
  },
  {
    name: "Hyundai i20 Active 1.2 SX",
    make: "Hyundai",
    year: 2015,
    mileage: "17.19 kmpl",
    price: 510000,
    kilometer: 63000,
    color: "Red",
    img: "https://imgd.aeplcdn.com/370x208/n/v3lecsa_1460864.jpg?q=80"
  },
  {
    name: "Volkswagen Polo Comfortline1.0L MPI",
    make: "Volkswagen",
    year: 2019,
    mileage: "18.24 kmpl",
    price: 695000,
    kilometer: 10310,
    color: "Grey",
    img: "https://imgd.aeplcdn.com/370x208/n/4p4k3sa_1483616.jpg?q=80"
  },
  {
    name: "Ford Ecosport Titanium 1.5L Ti-VCT",
    make: "Ford",
    year: 2018,
    mileage: "17.0 kmpl",
    price: 825000,
    kilometer: 16893,
    color: "White",
    img: "https://imgd.aeplcdn.com/664x374/cw/ec/40369/Ford-EcoSport-Right-Front-Three-Quarter-159249.jpg?wm=0&q=80"
  },
  {
    name: "Renault Kwid RXT [2019-2020]",
    make: "Renault",
    year: 2019,
    mileage: "24.04 kmpl",
    price: 310000,
    kilometer: 19000,
    color: "Blue",
    img: "https://imgd.aeplcdn.com/370x208/n/tlkne3a_1571023.jpg?q=80"
  },
  {
    name: "Toyota Innova 2.5 GX BS IV 7 STR",
    make: "Toyota",
    year: 2015,
    mileage: "11.36 kmpl",
    price: 865000,
    kilometer: 43634,
    color: "Silver",
    img: "https://imgd.aeplcdn.com/664x374/cw/specialVersions/3866.jpg?v=20160510115423&q=80"
  },
  {
    name: "BMW X3 xDrive 20d Luxury Line [2018-2020]",
    make: "BMW",
    year: 2018,
    mileage: "12.99 kmpl",
    price: 3800000,
    kilometer: 9512,
    color: "Black",
    img: "https://imgd.aeplcdn.com/370x208/n/bsbi9sa_1463702.jpg?q=80"
  },
  {
    name: "Jeep Compass Limited Plus 2.0 Diesel 4x4 AT",
    make: "Jeep",
    year: 2020,
    mileage: "17.68 kmpl",
    price: 2475000,
    kilometer: 11293,
    color: "Grey",
    img: "https://imgd.aeplcdn.com/370x208/n/g5t8osa_1474555.jpg?q=80"
  },
  {
    name: "BMW 3-Series 320i Luxury Line",
    make: "BMW",
    year: 2017,
    mileage: "14.84 kmpl",
    price: 2800000,
    kilometer: 15900,
    color: "White",
    img: "https://imgd.aeplcdn.com/370x208/n/2wodpra_1422138.jpg?q=80"
  },
  {
    name: "Volkswagen Polo Comfortline1.0L MPI",
    make: "Volkswagen",
    year: 2019,
    mileage: "18.24 kmpl",
    price: 695000,
    kilometer: 10310,
    color: "Silver",
    img: "https://imgd.aeplcdn.com/370x208/n/4p4k3sa_1483616.jpg?q=80"
  },
]

export default cars