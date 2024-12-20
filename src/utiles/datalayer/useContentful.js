import client from "./client"

const useContentful = () => {

    //function to fetch all events from "KSSS Event" content type:
    const getData = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "ksssEvent",
                select: "fields",
                order: "fields.fullYear" && "fields.date",
                query: "" //here will go filtering
            });


            //- - - - - - - - - - - - - - - - - - - - - - - - - - 
            //Sanitizing data from Contentful to get only fields that needed:
            //- - - - - - - - - - - - - - - - - - - - - - - - - - 
            const sanitizedEntries = entries.items.map((item) => {
                const introImage = item.fields.introImage?.fields || null;
                const eventImages = item.fields.images?.map(img => img.fields) || null;

                return {
                    id: item.sys.id,
                    slug: item.sys.slug,
                    ...item.fields,
                    introImage,
                    eventImages
                }

            })

            //- - - - - - - - - - - - - - - - - - - - - - - - - - 
            // Log each item in the array individually
            sanitizedEntries.forEach((entry, index) => {
                console.log(`SANITIZED ENTRY ${index + 1}:`, entry);
            });
            //- - - - - - - - - - - - - - - - - - - - - - - - - -
            return sanitizedEntries;


        } catch (error) {
            console.log(`Error: try to fetching events ${error}`);
        }

    };
    return { getData };

}


export default useContentful;