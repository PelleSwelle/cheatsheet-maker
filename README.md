# Cheatsheet Maker

A web application to make cheatsheets. 

The idea is to be able to upload a variety of different file formats and have the application just do its thing.

The wishlist is:
.docx, .doc, .odt, .json, js, .md

at the moment the supported file format is:
.json

# The infrastructure
Currently there are three levels of 'knowledge'.
These are 
topic, grouping, item

where topic is the top hierarchical layer. This is the overall topic of the sheet
grouping is a subdivision of the topic, dividing the knowledge into segments of easier-to-learn components
item is each 'piece of knowledge' the sheet is to display.

The visualisation of the information uploaded or written manually is calculated from the hierarchy built into the data itself and assumes a couple of things about the data.

These are the following:

The schema, the app expects to receive is

topic {
    name
    description

    groupings {
        grouping 1 {
            name
            description
            
            items {
                item 1 {
                    name
                    description
                }
                item 2 {
                    name
                    description
                }
            }
        }
        
        grouping 2 {
            name
            description
            
            items {
                item 1 {
                    name
                    description
                }
                item 2 {
                    name
                    description
                }
            }
        }
    }
}
