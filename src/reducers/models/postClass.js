
class Post {

    constructor( title, date, description, likes, detailedDescription, uploadedDocs, imagelink) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.likes = likes;
        this.detailedDescription = detailedDescription; 
        this.uploadedDocs = uploadedDocs;
        this.imagelink = imagelink;
    }

    getObject() {
        let newObj = {
            title: this.title,
            date: this.date,
            description: this.description,
            likes: this.likes,
            detailedDescription: this.detailedDescription,
            uploadedDocs: this.uploadedDocs,
            imagelink: this.imagelink,
        }
        return newObj
    }


}

export default Post
