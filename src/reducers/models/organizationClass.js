
class OrganizationClass {

    constructor( title, date, tagline, location, imagelink, description,areasOfEngagement, pboNpoNum, facebookLink, status, coordinates) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.location = location;
        this.imagelink = imagelink;
        this.tagline = tagline;
        this.areasOfEngagement = areasOfEngagement;
        this.pboNpoNum =pboNpoNum;
        this.facebookLink =facebookLink;
        this.status = status;
        this.coordinates = coordinates;
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
            tagline: this.tagline,
            areasOfEngagement: this.areasOfEngagement, 
            pboNpoNum: this.pboNpoNum,
            facebookLink: this.facebookLink,
            status: this.status, 
            coordinates: this.coordinates
        }
        return newObj
    }


}

export default OrganizationClass
