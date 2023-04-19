import React from "react";
import Image from "next/image";
import { Flex, Text } from "@chakra-ui/react";
function index() {
  return (
    <>
      <Text>
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
      </Text>
      <Flex>
      <Image
        src="/logo.png" 
        alt="Logo" 
        width={150}
        height={150}
      /> 
       <Image
        src="/logo.png" 
        alt="Logo" 
        width={150}
        height={150}
      /> 
       <Image
        src="/logo.png" 
        alt="Logo" 
        width={150}
        height={150}
      /> 
       <Image
        src="/logo.png" 
        alt="Logo" 
        width={150}
        height={150}
      /> 
      </Flex>
      <Text>
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
      </Text>
    </>
  );
}
export default index;
