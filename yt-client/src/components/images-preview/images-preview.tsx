import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


type ImagesProps = {
    images: string[]
}

function ImagesPreview({ images }: ImagesProps) {
    return (
        <Carousel className="w-full max-w-sm">
            <CarouselContent className="-ml-1">
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card>
                            <CardContent className="p-0">
                                <img
                                    src={image}
                                    alt="Photo by Drew Beamer"
                                    className="rounded-md object-cover h-full w-full"
                                />
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
    );
}

export default ImagesPreview;
