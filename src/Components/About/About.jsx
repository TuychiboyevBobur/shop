import React from "react"
import styled from "styled-components"
import Map from "./Map"

const Container = styled("div")`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  margin-top: 5rem;
`

const LeftContent = styled("div")`
margin-top: -6rem;
  width: 48%;
`
function About() {
  return (
    <Container className="about">
      <LeftContent>
        <h1>Biz haqimizda</h1>
        <p>
          Onlayn xarid qilish imkonini beradigan elektron tijorat shaklidir
          iste'molchilar tovar yoki xizmatlarni sotuvchidan to'g'ridan-to'g'ri
          sotib olishlari Veb-brauzer yoki mobil ilova yordamida Internet.
          <br /> Iste'molchilar a to'g'ridan-to'g'ri sotuvchining veb-saytiga
          tashrif buyurib, qiziqish mahsuloti yoki xarid qidiruvidan foydalanib,
          muqobil sotuvchilarni qidirish orqali bir xil mahsulotning mavjudligi
          va narxini ko'rsatadigan vosita turli xil elektron sotuvchilar. <br />
          2020 yildan boshlab mijozlar onlayn xarid qilishlari mumkin turli xil
          kompyuterlar va qurilmalardan, jumladan, ish stolidan foydalanish
          kompyuterlar, noutbuklar, planshet kompyuterlar va smartfonlar. <br />
          Onlayn do'kon mahsulot yoki xizmatlarni sotib olishning jismoniy
          o'xshashligini keltirib chiqaradi muntazam "g'isht va ohak" sotuvchisi
          yoki savdo markazi; jarayon biznesdan iste'molchiga (B2C) onlayn xarid
          qilish deb ataladi. <br /> Qachon an onlayn-do'kon korxonalarga
          boshqasidan xarid qilish imkonini berish uchun tashkil etilgan biznes
          uchun bu jarayon biznesdan biznesga (B2B) onlayn deb ataladi xarid
          qilish. <br /> Oddiy onlayn-do'kon mijozga ko'rish imkonini beradi
          firmaning mahsulot va xizmatlari assortimenti, fotosuratlari yoki
          rasmlarini ko'ring mahsulotlar, mahsulot xususiyatlari haqida ma'lumot
          bilan birga, xususiyatlari va narxlari. Onlayn do'konlar odatda
          xaridorlarga foydalanishga imkon beradi Muayyan modellar, brendlar
          yoki narsalarni topish uchun "qidirish" xususiyatlari. <br /> Onlayn
          mijozlar Internetga kirishlari va tegishli usulga ega bo'lishi kerak
          kredit karta kabi tranzaktsiyani bajarish uchun to'lov Interac-ni
          yoqadigan debet karta yoki PayPal kabi xizmat. Uchun jismoniy
          mahsulotlar (masalan, qog'ozli kitoblar yoki kiyim-kechak), elektron
          sotuvchi mahsulotni xaridorga jo'natadi; kabi raqamli mahsulotlar
          uchun qo'shiqlar yoki dasturiy ta'minotning raqamli audio fayllari,
          e-tailer odatda yuboradi faylni mijozga Internet orqali yuborish.
          <br /> Eng kattasi bu onlayn chakana korporatsiyalar - Alibaba,
          Amazon.com va eBay.
        </p>
      </LeftContent>
      <Map />
    </Container>
  )
}

export default About
