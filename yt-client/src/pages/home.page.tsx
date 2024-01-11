import { gql, useQuery } from "@apollo/client";

import { Skeleton } from "@/components/ui/skeleton"
import { VideoPreview } from "@/components/video-preview";

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
        <main className="page">
            { loading && (
                <section className="flex flex-wrap items-center gap-5">
                    <Skeleton className="h-60 w-60 rounded-full" />
                    <Skeleton className="h-60 w-60 rounded-full" />
                    <Skeleton className="h-60 w-60 rounded-full" />
                    <Skeleton className="h-60 w-60 rounded-full" />
                    <Skeleton className="h-60 w-60 rounded-full" />
                </section>
            ) }
            <section className="flex flex-wrap items-center gap-5">
                {
                    !loading && !error && data && data.getVideos.map((video, index) => (
                        <VideoPreview videoItem={video} key={`${video.uid}-${index}`} />
                    ))
                }
            </section>
        </main>
    );
}

export default HomePage;
