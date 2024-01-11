import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { VideoType } from "@/modules/video/domain/video";

type VideoProps = {
    videoItem: VideoType
}

function VideoPreview({ videoItem }: VideoProps) {
    return (
        <Avatar className="h-60 w-60">
            <AvatarImage src={videoItem.thumbnail} />
            <AvatarFallback>{videoItem.id.slice(0, 2)}</AvatarFallback>
        </Avatar>
    );
}

export default VideoPreview;
