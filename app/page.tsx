"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import clsx from "clsx";
import "swiper/swiper-bundle.css";
import css from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <div className={css.wrapper}>
          <h1 className={css.header_title}>
            Корейская дача 광주광역시 외국인친화병원
          </h1>
          <h2 className={css.header_subtitle}>Корейская медицинская клиника</h2>
        </div>
      </header>
      <main>
        <div className={css.wrapper}>
          <Swiper
            className={clsx(css.mySwiper, "swiper")}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>정형외과</h2>
              <Link className={css.mySwiper_link} href={"/orthopedics"}>
                ортопедия
              </Link>
            </SwiperSlide>
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>신경외과</h2>
              <Link className={css.mySwiper_link} href={"/neurology"}>
                Неврология
              </Link>
            </SwiperSlide>
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>피부과</h2>
              <Link className={css.mySwiper_link} href={"/dermatology"}>
                Дерматология
              </Link>
            </SwiperSlide>
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>성형외과</h2>
              <Link className={css.mySwiper_link} href={"/plasticSurgey"}>
                Пластическая хирургия
              </Link>
            </SwiperSlide>
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>소아과</h2>
              <Link className={css.mySwiper_link} href={"/pediatrics"}>
                Педиатрия
              </Link>
            </SwiperSlide>
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>산부인과</h2>
              <Link className={css.mySwiper_link} href={"/gynecology"}>
                Гинекология
              </Link>
            </SwiperSlide>
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>내과</h2>
              <Link
                className={css.mySwiper_link}
                href={"/therapeuticDepartment"}
              >
                терапевтическое отделение
              </Link>
            </SwiperSlide>
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>심장내과</h2>
              <Link className={css.mySwiper_link} href={"/cardiology"}>
                кардиология
              </Link>
            </SwiperSlide>
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>이비인후과</h2>
              <Link className={css.mySwiper_link} href={"/otolaryngology"}>
                отоларингология
              </Link>
            </SwiperSlide>
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>안과</h2>
              <Link className={css.mySwiper_link} href={"/ophthalmology"}>
                офтальмология
              </Link>
            </SwiperSlide>
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>치과</h2>
              <Link className={css.mySwiper_link} href={"/dentistry"}>
                стоматология
              </Link>
            </SwiperSlide>
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>한방과</h2>
              <Link className={css.mySwiper_link} href={"/oriental-medicine"}>
                восточная медицина
              </Link>
            </SwiperSlide>
            <SwiperSlide className={clsx(css.mySwiperSlide, "swiper-slide")}>
              <h2>정신과</h2>
              <Link className={css.mySwiper_link} href={"/oriental-medicine"}>
                психиатрия
              </Link>
            </SwiperSlide>
          </Swiper>
          <section className={css.about}>
            <h2 className={css.about_title}>Бесплатные консультации</h2>
            <div className={css.about_content_top}>
              <Image
                className={css.content_top_img}
                width={219}
                height={224}
                src="/about-image.jpg"
                alt=""
              />
              <div className={css.content_top_text}>
                <p>
                  Независимо от вашего места нахождения и времени вы можете
                  получить высоко профессиональные медицинские услуги онлайн
                  прямо из Кореи
                </p>
                <p>
                  Если вы оставите на нашем сайте свои контактные данные и
                  информацию с желаемым курсом лечения, то вы сможете обратиться
                  к врачу по онлайн-видео. Если вам нужна операция, вы можете
                  пройти предварительное лечение в корейской больнице.{" "}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
