import { createClient } from 'contentful';

const useContentful = () => {

    const client = createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    })


    //function to fetch all events from "KSSS Event" content type
    const getData = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "ksssEvent",
                select: "fields",
                // order: "fields.fullYear"
            });


            const sanitazedEntries = entries.items.map((item) => {
                const eventImage = item.fields.images && item.fields.images[0]?.fields;
                return {
                    ...item.fields,
                    eventImage
                }
            })
            return sanitazedEntries

        } catch (error) {
            console.log(`Error: try to fetching events ${error}`);
        }
    };
    return { getData };

}


export default useContentful;