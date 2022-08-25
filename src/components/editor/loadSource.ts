import { get } from "@/utils/http";
import data from '@/mock/data'

interface Detail {
    url: string;
}

interface Response {
    code: number,
    data: Array<Detail>
}


export function loadAnimationData(callback: (res: any) => void) {
    return get(`./lottie/${data.lottie_name}.json`, (json) => {
        if (callback) {
            callback(json);
        }
    });
}


export function loadBGM(callback: (res: string) => void) {
    return get(
        `https://autumnfish.cn/song/url?id=${data.music163_id}`,
        (json: Response) => {
            if (json.code == 200 && callback) {
                callback(json.data[0].url);
            }
        }
    );
}