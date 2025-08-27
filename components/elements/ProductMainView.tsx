"use client"
import * as React from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

export function CarouselSpacing() {
  const ProductImages: string[] = [
    "/images/01.png",
    "/images/02.png",
    "/images/03.png",
    "/images/04.png",
    "/images/01.png",
    "/images/02.png",
    "/images/03.png",
    "/images/04.png",
    "/images/01.png",
    "/images/02.png",
    "/images/03.png",
    "/images/04.png",
    "/images/01.png",
    "/images/02.png",
    "/images/03.png",
    "/images/04.png",
  ]

  return (
    <Carousel
      className="w-full px-2"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
    >
      <CarouselContent className="-ml-1 gap-x-1 md:gap-x-2 lg:gap-x-1">
        {ProductImages.map((src, index) => (
          <CarouselItem
            key={index}
            className="
              basis-1/3      /* 3 items on mobile */
              md:basis-1/4   /* 4 items on tablet */
              lg:basis-1/6   /* 6 items on desktop */
            "
          >
            <Card className="border-none shadow-none relative bg-background">
              <CardContent
                className="flex items-center justify-center p-2 h-28 rounded-md relative"
                style={{
                  backgroundImage: "url('/images/spl.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Product Image */}
                <Image
                  src={src}
                  alt={`Product ${index + 1}`}
                  width={120}
                  height={120}
                  className="object-contain h-full w-auto relative z-10"
                />

                {/* Special Offer Badge */}
                <Image
                  src="/images/spcl.png"
                  alt="Special Offer"
                  width={80}
                  height={60}
                  className="absolute -bottom-8 -right-6 z-20"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
