import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vidoSchema = new Schema(
    {
        videoFile: {
            type: String,  // cloudinary url
            required: true
        },
        thumbnail: {
            type: String,  // cloudinary url
            required: true
        },
        title: {
            type: String,  
            required: true
        },
        desctiption: {
            type: String,  
            required: true
        },
        duration: {
            type: String,  
            required: true
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Booleann,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
        
    },
    {
        timeseries: true
    }
)


videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video",  vidoSchema);