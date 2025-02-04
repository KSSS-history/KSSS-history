//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
//This is the data fetching for the EVENTS fetched from Contentful
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 

import client from "./client"

const useContentful_events = () => {


    //function to fetch all events from "KSSS Event" content type:
    const getData = async () => {

        //Because there is a limit of 100 entries for every API call from Contentful, 
        //we need to fetch the next 100 and so on until all entries are fetched.
        try {
            const limit = 50;
            let skip = 0;
            let total = 0;
            let allEntries = [];

            do {
                const response = await client.getEntries({
                    content_type: "ksssEvent",
                    select: "fields",
                    order: "fields.fullYear" && "fields.date",
                    skip: skip,
                    limit: limit,
                    query: "" //here can go filtering

                });

                // Combine fetched entries into the main array
                allEntries = [...allEntries, ...response.items];

                // Update skip and total for the next iteration
                skip += limit;
                total = response.total;
            } while (skip < total);



            //- - - - - - - - - - - - - - - - - - - - - - - - - - 
            //Sanitizing data from Contentful to get only fields that needed:
            //- - - - - - - - - - - - - - - - - - - - - - - - - - 
            const sanitizedEntries = allEntries.map((item) => {
                const introImage = item.fields.introImage?.fields || null;
                const eventImages = item.fields.images?.map(img => img.fields) || null;


                return {
                    id: item.sys.id,
                    ...item.fields,
                    introImage,
                    eventImages
                }

            })


            //- - - - - - - - - - - - - - - - - - - - - - - - - - 
            // Log each item in the array individually
            // sanitizedEntries.forEach((entry, index) => {
            //     console.log(`SANITIZED ENTRY from use_Contenful ${index + 1}:`, entry);
            // });
            //- - - - - - - - - - - - - - - - - - - - - - - - - -
            return sanitizedEntries;

        } catch (error) {
            console.log('Error: trying to fetch events:', error);
        }

    };
    return { getData };

}


export default useContentful_events;