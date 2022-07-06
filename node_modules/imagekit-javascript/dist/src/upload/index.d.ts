import { ImageKitOptions, UploadOptions, UploadResponse } from "../interfaces";
export declare const upload: (xhr: XMLHttpRequest, uploadOptions: UploadOptions, options: ImageKitOptions, callback?: ((err: Error | null, response: UploadResponse | null) => void) | undefined) => void;
