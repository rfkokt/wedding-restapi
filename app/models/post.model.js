module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            nama: String,
            hubungan: String,
            doa: String,
            hadir: Boolean,
        },
        {timestamps: true}
    )

    //mengubah _id menjadi object
    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Post = mongoose.model("posts", schema)
    return Post
}