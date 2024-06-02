var input =
{
    "name": "positive",
    "children":
        [
            {
                "name": "product service",
                "children":
                    [
                        {
                            "name": "price",
                            "children":
                                [
                                    {
                                        "name": "cost",
                                        "size": 8
                                    }
                                ]
                        },
                        {
                            "name": "quality",
                            "children":
                                [
                                    {
                                        "name": "messaging",
                                        "size": 4
                                    }
                                ]
                        }
                    ]
            },
            {
                "name": "customer service",
                "children":
                    [
                        {
                            "name": "Personnel",
                            "children":
                                [
                                    {
                                        "name": "CEO",
                                        "size": 7
                                    }
                                ]
                        }
                    ]
            },
            {
                "name": "product",
                "children":
                    [
                        {
                            "name": "Apple",
                            "children":
                                [
                                    {
                                        "name": "iPhone 4",
                                        "size": 10
                                    }
                                ]
                        }
                    ]
            }
        ]
}

const getDepth = (object) => {
    var level = 1;
    for(var key in object) {
        if (!object.hasOwnProperty(key)) continue;

        if(typeof object[key] == 'object'){
            var depth = utils.depthOf(object[key]) + 1;
            level = Math.max(depth, level);
        }
    }
    return level;
}
