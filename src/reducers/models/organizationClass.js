
class OrganizationClass {

    constructor( title, date, description, location, imagelink) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.location = location;
        this.imagelink = imagelink;
    }

    getTitle() {
        return this.title
    }

    getObject() {

        let newObj = {
            title: this.title,
            date: this.date,
            description: this.description,
            location: this.location,
            imagelink: this.imagelink,
        }
        return newObj
    }


}

export default OrganizationClass
