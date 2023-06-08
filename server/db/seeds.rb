puts "Creating seed"

posts = [
    {
        title: "Grapes",
        desc:" Grapes are not only delicious but also offer several health benefits. They are rich in vitamins C and K, antioxidants, and other beneficial plant compounds. These nutrients contribute to the overall health of the body and may help reduce the risk of chronic diseases, support heart health, promote digestion, and boost the immune system.

                Grapes are commonly consumed fresh as a snack, but they are also used in various culinary applications. They can be turned into juice, wine, jams, jellies, and raisins. In addition, grapes are a popular ingredient in salads, desserts, and even savory dishes.

                The cultivation of grapes is known as viticulture, and different grape varieties are grown in different regions around the world. Some well-known grape varieties include Chardonnay, Cabernet Sauvignon, Merlot, and Pinot Noir, which are used to produce different types of wines.",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        cat: "FOOD"
    },
    {
        title: "Lemon",
        desc:  "Lemons are a rich source of vitamin C, providing over 100% of the recommended daily intake in just one medium-sized fruit. Vitamin C is an essential nutrient that supports the immune system, promotes skin health, and acts as an antioxidant in the body.

                In addition to vitamin C, lemons contain various other vitamins and minerals, including vitamin B6, potassium, and folate. They also contain dietary fiber, although it is mostly found in the pulp rather than the juice.

                Lemons are widely used in culinary applications, adding a tangy and acidic flavor to dishes and beverages. They are often used as a flavoring agent in cooking, baking, and salad dressings. Lemon juice is also popularly used to make lemonade, a refreshing and thirst-quenching drink.

                Beyond culinary uses, lemons have several other applications. Their acidic nature makes them effective in cleaning and as a natural household cleaner. Lemon juice can be used to remove stains, freshen up surfaces, and neutralize odors. Lemon essential oil, extracted from the lemon peel, is used in aromatherapy for its uplifting and invigorating scent.",
        img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        cat: "FOOD"
    },
    {
        title: "Beetroots",
        desc: "Beetroots are known for their earthy and sweet flavor, making them a versatile ingredient in various culinary preparations. They can be consumed raw, cooked, pickled, or juiced, and are used in a wide range of dishes, including salads, soups, stews, and side dishes.

                One of the notable characteristics of beetroots is their vibrant color, which is due to the presence of a pigment called betalain. This pigment not only gives beetroots their deep red hue but also offers potential health benefits as a powerful antioxidant and anti-inflammatory compound.

                In terms of nutritional value, beetroots are low in calories and fat but rich in essential nutrients. They are a good source of dietary fiber, folate (vitamin B9), manganese, potassium, and vitamin C. Beetroots also contain nitrates, which have been linked to potential benefits for blood pressure regulation and exercise performance.",
        img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        cat: "FOOD"
    },
    {
        title: "Avocado",
        desc: "fats, which are considered healthy fats. These fats are beneficial for heart health and may help lower bad cholesterol levels while increasing good cholesterol levels. Avocados are also a good source of dietary fiber, which aids in digestion and promotes a feeling of fullness.

                Avocados are rich in essential nutrients and vitamins. They contain a wide range of vitamins, including vitamin K, vitamin C, vitamin E, vitamin B5, vitamin B6, and folate. They are also a good source of minerals such as potassium, magnesium, and copper.",
        img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        cat: "FOOD"
    } 
]

users = [
    {username: 'Morris', email: 'morris@gmail.com', password: '135454'}
]

posts.each do |post|
    post = Post.create(post)

    users.each do |user|
            user = User.create(user)
    end
end