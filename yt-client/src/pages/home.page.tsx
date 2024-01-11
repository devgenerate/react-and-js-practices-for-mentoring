import { gql, useQuery } from "@apollo/client";

import { Skeleton } from "@/components/ui/skeleton"
import { ImagesPreview } from "@/components/images-preview";

import { GetVideosData } from "@/modules/video/domain/video-gql";


const getVideosQuery = gql`
    query getVideos {
        getVideos {
            uid
            id
            url
            thumbnail
        }
    }
`

function HomePage() {
    const { data, error, loading } = useQuery<GetVideosData>(getVideosQuery, {
        fetchPolicy: 'network-only'
    })

    return (
        <main className="page flex justify-center items-center">
            { loading && (
                <section className="flex flex-wrap gap-5">
                    {
                        new Array(3).fill(null).map((_, index) => (
                            <Skeleton className="h-[242px] w-[362px]" key={`skeleton-images-${index}`} />
                        ))
                    }
                </section>
            ) }
            <section className="flex justify-center">
                {
                    !loading && !error && data && <ImagesPreview images={data.getVideos.map(v => v.thumbnail)} />
                }
            </section>
        </main>
    );
}

export default HomePage;
