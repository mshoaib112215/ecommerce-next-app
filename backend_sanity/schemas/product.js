export default{
    name: "product",
    title: "Product",
    type: "document",
    feild:[{
        name : "image",
        title: 'Image',
        type: 'array',
        of: [{type: "image"}],
        option:{
            hotspot: true,
        }
    },
    {
        name: "name",
        title: "Name",
        type: 'string',
        
    },
    {
        name: 'slug',
        title:"Slug",
        type: 'slug',
        option:{
            source: 'name',
            maxLength: 90,
        }
    },
    {
        name: 'price',
        title: "Price",
        type: "number"
    },
    {
        name: "details",
        title: "Details",
        type: 'string',
    
    }]

}