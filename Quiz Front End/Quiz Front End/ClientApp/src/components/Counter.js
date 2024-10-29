//Five questions that don't change -> In demo, perform quiz multiple times 

import React, { Component } from 'react';
import { jsPDF } from 'jspdf';

const itinerariesPool = [
    {
        itinerary: "Overview: Day 1: Visit Senso-ji Temple and Asakusa. Day 2: Explore Shibuya and Shinjuku. Day 3: Take a day trip to Mount Fuji.",
        itineraryDownload: `3-Day Osaka Adventure

Day 1: Landmarks and Shopping

Morning:
- Osaka Castle: Start your day at the iconic Osaka Castle. Take a stroll through Osaka Castle Park, especially scenic during cherry blossom season, and learn about Japanese feudal history.
- Namba Yasaka Shrine: Visit this unique shrine known for its giant lion-shaped stage, symbolizing the god of victory. It’s an interesting spot for photos and local history.

Afternoon:
- Dotonbori District: Dive into the heart of Osaka’s street food culture. Sample takoyaki (octopus balls) and okonomiyaki (savory pancake) as you explore this lively area filled with neon signs and vibrant shops.
- Shinsaibashi Shopping Street: Spend time shopping along this bustling street, filled with fashion boutiques, cosmetics, and Japanese specialty shops.

Evening:
- Umeda Sky Building: End the day with a visit to the Umeda Sky Building. Head to the Floating Garden Observatory for a stunning 360° view of the Osaka cityscape, especially beautiful at sunset.

Day 2: Temples and Traditional Osaka

Morning:
- Shitennoji Temple: Visit Shitennoji, one of Japan’s oldest Buddhist temples, with origins dating back to the 6th century. Enjoy the serene atmosphere and beautiful pagoda.
- Osaka Museum of History: Located near Osaka Castle, this museum offers interactive exhibits detailing Osaka's history and culture from ancient times to the modern era.

Afternoon:
- Kuromon Ichiba Market: Known as “Osaka’s Kitchen,” this market is famous for its fresh seafood, local produce, and ready-to-eat street food.
- Sumiyoshi Taisha Shrine: This grand Shinto shrine is known for its unique architectural style, which is one of the oldest in Japan. Explore the scenic grounds, including the Taiko Bridge.

Evening:
- Shinsekai District: Experience the retro vibes of Osaka’s Shinsekai, famous for its old-style izakayas (Japanese pubs), souvenir shops, and vibrant nightlife. Enjoy a traditional dinner of kushikatsu (fried skewers).

Day 3: Modern Attractions and Leisure

Morning:
- Osaka Aquarium Kaiyukan: Start the day at one of the world’s best aquariums. See diverse marine life, including giant whale sharks and colorful jellyfish.
- Tempozan Ferris Wheel: Afterward, take a ride on the Tempozan Ferris Wheel for scenic views of Osaka’s bay area and skyline.

Afternoon:
- Universal Studios Japan (USJ): Spend the afternoon at USJ for thrilling attractions. Don’t miss The Wizarding World of Harry Potter and Super Nintendo World, which are especially popular.
- Alternative: For a quieter afternoon, visit the Osaka Science Museum and National Museum of Art for a cultural experience and to explore art and science exhibits.

Evening:
- Abeno Harukas: Conclude your trip with a visit to Japan’s tallest skyscraper. The Abeno Harukas Observatory offers panoramic city views, perfect for capturing Osaka’s night skyline. Enjoy a memorable dinner at one of the nearby restaurants before heading home.
`,
        photoLink: 'https://images.goway.com/production/featured_images/japan_tokyo_akihabara_AdobeStock_295310062_Editorial_Use_Only.jpg',
        title: 'Tokyo Adventure',
        description: 'Experience Japan’s capital city, Tokyo, a bustling metropolis known for its modern skyline, traditional temples, and diverse neighborhoods.'
    },
    {
        itinerary: "Overview: Day 1: Kyoto Temples. Day 2: Nara and Uji. Day 3: Kinosaki Onsen.",
        itineraryDownload: `3-Day Kyoto Cultural Tour

Day 1: Temples and Historic Sights

Morning:
- Kiyomizu-dera Temple: Begin with one of Kyoto’s most famous landmarks. This UNESCO World Heritage Site offers a beautiful panoramic view of the city from its wooden terrace, especially stunning in autumn and spring.
- Higashiyama District: Stroll through this preserved historic district, with narrow lanes, traditional wooden buildings, and shops offering Kyoto crafts, sweets, and souvenirs.

Afternoon:
- Gion District: Explore the famous geisha district. Take a walk down Hanamikoji Street to see traditional tea houses and, if you’re lucky, catch a glimpse of a geisha or maiko.
- Yasaka Shrine: Visit this vibrant Shinto shrine located at the end of Shijo Street, known for its striking red gates and annual Gion Matsuri festival.

Evening:
- Pontocho Alley: Enjoy dinner in this narrow alley lined with restaurants, serving everything from kaiseki (traditional multi-course meals) to yakitori. The atmosphere is charming, with lantern-lit paths along the Kamo River.

Day 2: Zen Gardens and Castles

Morning:
- Ryoan-ji Temple: Start the day at this temple famous for its Zen rock garden, a serene and meditative spot that invites contemplation.
- Kinkaku-ji (Golden Pavilion): Visit this iconic golden temple, which reflects beautifully on the pond surrounding it. It’s one of Kyoto’s most photogenic spots.

Afternoon:
- Nijo Castle: Explore this historic castle, featuring stunning gardens, traditional Japanese architecture, and “nightingale floors” that chirp as you walk, designed as a security measure.
- Nishiki Market: Known as “Kyoto’s Kitchen,” this bustling market offers a taste of Kyoto with fresh seafood, pickles, snacks, and souvenirs.

Evening:
- Philosopher's Path: Take a scenic, peaceful stroll along this canal-side path lined with cherry trees. It’s a particularly beautiful route in spring when cherry blossoms are in full bloom.

Day 3: Shrines and Scenic Views

Morning:
- Fushimi Inari Shrine: Start early to visit the famous torii gate pathway at Fushimi Inari Shrine. Walk through thousands of vibrant red gates winding up the hillside, offering incredible photo opportunities and a sense of tranquility.
- Tofuku-ji Temple: Visit this Zen temple known for its impressive gardens and large, scenic Sanmon gate. In autumn, the maple trees create an unforgettable view.

Afternoon:
- Arashiyama Bamboo Grove: Head to Arashiyama and walk through the enchanting bamboo forest, an iconic and serene spot. Nearby, you can also visit the Tenryu-ji Temple and its beautiful gardens.
- Iwatayama Monkey Park: If you’re up for a hike, visit this monkey park for a unique experience and panoramic views of Kyoto from the top.

Evening:
- Hozu River Cruise: End your Kyoto journey with a boat ride down the scenic Hozu River, enjoying the tranquil beauty of the surrounding mountains and landscapes.
- Traditional Kaiseki Dinner: Conclude your trip with a traditional kaiseki meal in a local restaurant, savoring the flavors of seasonal Kyoto cuisine.
`,
        photoLink: 'https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2020/05/kyoto-view-iStock-1146262403-1024x600.jpg',
        title: 'Kyoto Cultural Journey',
        description: 'Discover the heart of Japan’s culture with Kyoto’s temples, tea houses, and scenic landscapes.'
    },
    {
        itinerary: "Overview: Day 1: Tokyo Museums. Day 2: Yokohama. Day 3: Nikko Day Trip.",
        itineraryDownload: `3-Day Tokyo Museums and Cultural Highlights

Day 1: Art and History Museums

Morning:
- Tokyo National Museum: Start with Japan’s oldest and largest museum in Ueno Park. Explore ancient samurai swords, traditional kimonos, Buddhist statues, and more, showcasing Japan’s rich cultural history.
- Ueno Zoo: Take a short stroll to Japan’s oldest zoo, known for its giant panda exhibit, and enjoy a break between museums.

Afternoon:
- National Museum of Western Art: Dive into works by Van Gogh, Monet, and Rodin. The museum is in a striking building designed by Le Corbusier.
- Tokyo Metropolitan Art Museum: Visit this contemporary art space, featuring rotating exhibits of Japanese and international artists.

Evening:
- Ameya-Yokocho Market: After a day of museums, unwind at this vibrant market with various street foods, shops, and a lively atmosphere.

Day 2: Science and Pop Culture

Morning:
- Miraikan (National Museum of Emerging Science and Innovation): Learn about cutting-edge technology and robotics. Experience interactive exhibits on AI, space exploration, and sustainability, including a chance to meet ASIMO, Honda's humanoid robot.
- Palette Town: Visit this entertainment complex, featuring teamLab Borderless, an interactive digital art museum that immerses visitors in vibrant colors and patterns.

Afternoon:
- Odaiba Seaside Park: Relax with views of Rainbow Bridge and Tokyo Bay. Nearby, you can find unique shopping spots like DiverCity Tokyo Plaza, known for its life-sized Gundam statue.
- Toyota Mega Web: See car exhibits showcasing Toyota’s latest models and learn about automotive history, including some futuristic concept cars.

Evening:
- Tokyo Tower: Head to Tokyo Tower for a stunning nighttime view of the city. You can enjoy dinner in the area and take in the iconic lit-up skyline.

Day 3: Japanese Culture and Traditional Arts

Morning:
- Edo-Tokyo Museum: Begin by exploring Tokyo’s history, from the Edo period to modern times. Walk through life-sized replicas of old Edo structures and learn about the city’s evolution.
- Ryogoku Sumo Hall: If visiting during tournament season, catch a sumo match, or visit the Sumo Museum nearby to learn about the history of this traditional sport.

Afternoon:
- Hokusai Museum: Discover the work of Katsushika Hokusai, famed for “The Great Wave off Kanagawa.” Learn about Edo-period art and the techniques that influenced Japan’s art scene.
- Kyu Yasuda Garden: Unwind in this nearby traditional Japanese garden, featuring beautiful koi ponds and classic Japanese landscaping.

Evening:
- Asakusa and Senso-ji Temple: Wrap up the day with a visit to Tokyo’s oldest temple, Senso-ji, in the lively Asakusa district. Enjoy street food, traditional souvenirs, and a memorable view of the temple lit up in the evening.
`,
        photoLink: 'https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2023-07/ultimate-shopping-guide-tokyo_2.jpg?itok=xOMrf1zz',
        title: 'Tokyo and Beyond',
        description: 'Explore Tokyo’s museums, the scenic city of Yokohama, and the historic town of Nikko.'
    },
    {
        itinerary: "Overview: Day 1: Explore the temples of Kyoto. Day 2: Experience Nara and its famous deer park. Day 3: Discover the hot springs of Kinosaki Onsen.",
        itineraryDownload: `Day 1: Temples of Kyoto\n\nMorning:\n- Kinkaku-ji (Golden Pavilion): Marvel at this stunning golden temple surrounded by beautiful gardens.\n- Ryoan-ji Temple: Visit this Zen temple known for its rock garden.\n\nAfternoon:\n- Fushimi Inari Shrine: Walk through thousands of red torii gates up the mountainside.\n- Gion District: Explore the historic Geisha district and enjoy a traditional tea house.\n\n\nDay 2: Nara Excursion\n\nMorning:\n- Nara Park: Feed the friendly deer and take in the peaceful surroundings.\n- Todai-ji Temple: See the massive Buddha statue in this ancient temple.\n\nAfternoon:\n- Kasuga Shrine: Visit this ancient shrine with thousands of lanterns.\n- Explore Naramachi: Walk through the old merchant district with traditional shops and eateries.\n\n\nDay 3: Kinosaki Onsen\n\nMorning:\n- Arrival in Kinosaki Onsen: Enjoy a relaxing day visiting the town's hot springs (onsen).\n- Sample the local cuisine and take in the charming streets lined with traditional buildings.\n\nEvening:\n- Onsen-Hopping: Experience the town’s seven public baths and unwind.\n- Try a traditional ryokan dinner for an authentic cultural experience.`,
        photoLink: 'https://www.tripsavvy.com/thmb/ANwL84MhMA-jShq3HkXedD0wSck=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-530105220-5c337bae46e0fb00012fcdfb.jpg', // Replace with actual image URL
        title: 'Kyoto, Nara & Onsen Retreat',
        description: 'Discover Japan’s cultural heart in Kyoto, visit the historic temples of Nara, and unwind in the traditional hot springs of Kinosaki Onsen.',
    },
    {
        itinerary: "Overview: Day 1: Discover Hiroshima's historic sites. Day 2: Explore Miyajima Island. Day 3: Relax and stroll through the scenic gardens of Okayama.",
        itineraryDownload: `Day 1: History in Hiroshima\n\nMorning:\n- Hiroshima Peace Memorial Park: Reflect at the site of the Hiroshima bombing and visit the Peace Memorial Museum.\n- Atomic Bomb Dome: See the preserved remains as a tribute to peace.\n\nAfternoon:\n- Shukkei-en Garden: Enjoy a stroll through this beautiful Japanese garden.\n- Hiroshima Castle: Explore the reconstructed castle and museum with samurai exhibits.\n\n\nDay 2: Miyajima Island\n\nMorning:\n- Itsukushima Shrine: Visit the famous "floating" torii gate and shrine, a UNESCO World Heritage site.\n- Mount Misen: Take a cable car or hike up for stunning views over the Seto Inland Sea.\n\nAfternoon:\n- Miyajima’s Omotesando Shopping Street: Try local delicacies like grilled oysters and momiji manju.\n\n\nDay 3: Okayama’s Gardens and Castles\n\nMorning:\n- Korakuen Garden: Relax in one of Japan’s most famous landscape gardens.\n- Okayama Castle: Tour the "Crow Castle" known for its unique black exterior.\n\nAfternoon:\n- Kibitsu Shrine: Explore this beautiful and lesser-known Shinto shrine nearby.\n- Take a scenic walk along the Asahi River or rent a boat in the park for a serene afternoon experience.`,
        photoLink: 'https://i0.wp.com/www.littlemissturtle.com/wp-content/uploads/2018/12/Miyajima-Island-in-a-wheelchair-Little-Miss-Turtle-Wheelchair-Travel-Blog.jpg?fit=1200%2C801&ssl=1', // Replace with actual image URL
        title: 'Hiroshima & Scenic West Japan',
        description: 'Journey through Japan’s western regions with a historical tour in Hiroshima, the natural beauty of Miyajima Island, and the serene landscapes of Okayama’s famous gardens.',
    },
    {
        itinerary: "Overview: Day 1: Explore the historic sites of Kyoto. Day 2: Experience the vibrant culture of Osaka. Day 3: Relax in the natural beauty of Nara.",
        itineraryDownload: `Day 1: Kyoto's Timeless Charm\n\nMorning:\n- Fushimi Inari Taisha: Hike through the famous torii gate pathway leading up the sacred Mount Inari.\n- Kinkaku-ji (Golden Pavilion): Visit this stunning Zen temple covered in gold leaf, surrounded by beautiful gardens.\n\nAfternoon:\n- Arashiyama Bamboo Grove: Walk through the enchanting bamboo forest and visit the nearby Tenryu-ji Temple.\n- Nijo Castle: Explore this UNESCO World Heritage site known for its beautiful architecture and gardens.\n\n\nDay 2: Osaka’s Urban Energy\n\nMorning:\n- Osaka Castle: Discover the historic castle and its surrounding park, a perfect spot for cherry blossom viewing in spring.\n- Kuromon Ichiba Market: Enjoy a delicious breakfast at this bustling market, famous for fresh seafood and local street food.\n\nAfternoon:\n- Dotonbori District: Experience Osaka’s vibrant nightlife and street food scene; try takoyaki and okonomiyaki.\n- Umeda Sky Building: Take in panoramic views of the city from the Floating Garden Observatory.\n\n\nDay 3: Nara's Natural Beauty\n\nMorning:\n- Nara Park: Meet the friendly free-roaming deer and visit the impressive Todai-ji Temple, housing a giant Buddha statue.\n- Kasuga-taisha: Explore the beautiful shrine famous for its hundreds of bronze lanterns.\n\nAfternoon:\n- Isuien Garden: Relax in this tranquil garden that showcases the beauty of traditional Japanese landscaping.\n- Return to Kyoto or Osaka for a leisurely evening and dinner at a local restaurant.`,
        photoLink: 'https://lexontheloose.com/wp-content/uploads/2023/06/Nara-without-alcohol-2-1024x1024.jpg', // Replace with actual image URL
        title: 'Kyoto, Osaka & Nara Getaway',
        description: 'Immerse yourself in the rich history and culture of Japan with a three-day journey through Kyoto’s temples, Osaka’s culinary delights, and Nara’s serene parks.',
    },
    {
        itinerary: "Overview: Day 1: Discover the ancient traditions of Kanazawa. Day 2: Enjoy the hot springs of Hakone. Day 3: Experience the cultural richness of Kamakura.",
        itineraryDownload: `Day 1: Kanazawa's Cultural Heritage\n\nMorning:\n- Kenroku-en Garden: Stroll through one of Japan's most beautiful gardens, renowned for its seasonal beauty and tranquil atmosphere.\n- Kanazawa Castle: Explore the historic castle grounds and learn about the samurai culture.\n\nAfternoon:\n- 21st Century Museum of Contemporary Art: Enjoy innovative art exhibitions in a striking architectural setting.\n- Higashi Chaya District: Wander through this historic geisha district, where you can visit traditional teahouses.\n\n\nDay 2: Relaxing in Hakone\n\nMorning:\n- Hakone Open-Air Museum: Discover a unique outdoor art museum set against the backdrop of stunning natural scenery.\n- Owakudani Valley: Take a scenic ride on the Hakone Ropeway and enjoy views of Mount Fuji while tasting the famous black eggs.\n\nAfternoon:\n- Lake Ashi: Take a boat cruise on this picturesque lake, surrounded by mountains, and enjoy stunning views of Fuji.\n- Onsen Experience: Relax in a traditional hot spring bath at one of Hakone’s many ryokans.\n\n\nDay 3: The Historic Charm of Kamakura\n\nMorning:\n- Great Buddha of Kamakura: Visit the iconic bronze statue, a symbol of the city, and explore the nearby Hase-dera Temple.\n- Komachi Street: Enjoy shopping and street food along this vibrant street filled with local shops and eateries.\n\nAfternoon:\n- Enoshima Island: Take a short trip to this charming island, explore its caves, and enjoy panoramic views from the lighthouse.\n- Return to Tokyo for an evening of leisure and exploration in the bustling city.`,
        photoLink: 'https://www.travelsewhere.net/wp-content/uploads/2023/04/DSC_0353-17-585x390.jpg', // Replace with actual image URL
        title: 'Kanazawa, Hakone & Kamakura Escape',
        description: 'Experience the best of Japan’s traditional and natural beauty on a three-day getaway through the historic town of Kanazawa, the relaxing hot springs of Hakone, and the charming coastal town of Kamakura.',
    },
    {
        itinerary: "Overview: Day 1: Explore Sapporo's city landmarks. Day 2: Discover the beauty of Otaru. Day 3: Experience Sapporo's winter sports and hot springs.",
        itineraryDownload: `Day 1: Sapporo City Highlights\n\nMorning:\n- Sapporo Clock Tower: Start your day by visiting this iconic symbol of Sapporo, a beautiful historic building that now houses a museum.\n- Odori Park: Take a leisurely stroll through this expansive park located in the heart of the city, which hosts seasonal flower displays and various events throughout the year.\n\nAfternoon:\n- Sapporo TV Tower: Head to the top for panoramic views of the city and the surrounding mountains, perfect for photography enthusiasts.\n- Susukino: Explore Sapporo's vibrant entertainment district, known for its bustling nightlife, restaurants, and shops.\n\n\nDay 2: Day Trip to Otaru\n\nMorning:\n- Otaru Canal: Take a short train ride to Otaru and enjoy a scenic walk along the picturesque canal, lined with historic warehouses and charming shops.\n- Music Box Museum: Visit this unique museum showcasing a collection of music boxes, where you can even create your own.\n\nAfternoon:\n- Sushi Street: Enjoy a delicious lunch at one of Otaru's famous sushi restaurants, known for their fresh seafood and local delicacies.\n- Glassworks Shops: Explore the artisanal glass shops, where you can find beautiful handmade glassware and souvenirs.\n\n\nDay 3: Winter Sports and Relaxation\n\nMorning:\n- Mount Moiwa: Head to Mount Moiwa for breathtaking views of Sapporo. In winter, enjoy skiing or snowboarding at nearby resorts.\n- Sapporo Snow Festival (if visiting in February): Experience the famous snow festival featuring stunning snow and ice sculptures.\n\nAfternoon:\n- Jozankei Onsen: Conclude your trip with a relaxing soak in one of the hot springs in Jozankei, known for its beautiful mountain scenery and therapeutic waters. Enjoy a traditional kaiseki meal at the ryokan (inn) for an authentic Japanese experience.`,
        photoLink: 'https://pyxis.nymag.com/v1/imgs/630/d33/58661be4b36d208da2fbafad36e72a466d-sapporo-snow-festival-lede.jpg', // Replace with actual image URL
        title: 'Winter Wonderland: Sapporo and Otaru Adventure',
        description: 'Discover the charm of Sapporo and nearby Otaru, from historic landmarks and delicious cuisine to thrilling winter sports and serene hot springs in this delightful three-day itinerary.',
    },
    {
        itinerary: "Overview: Day 1: Visit the Osaka University and local parks. Day 2: Explore the cultural sites and dining in Toyonaka. Day 3: Day trip to nearby Osaka attractions.",
        itineraryDownload: `Day 1: Discover Toyonaka's Educational and Natural Beauty\n\nMorning:\n- Osaka University: Start your day by exploring the beautiful campus of Osaka University, known for its lush greenery and modern architecture. Visit the University Museum to learn about local history and science.\n- Aizen Park: After the university, head to Aizen Park for a relaxing walk among its beautiful gardens and cherry blossom trees (if visiting in spring).\n\nAfternoon:\n- Kitanosato Park: Enjoy a picnic lunch in Kitanosato Park, where you can unwind and soak up the serene atmosphere. Don’t miss the playgrounds and walking paths.\n- Toyonaka City Museum of Art: Explore contemporary and traditional art exhibitions, showcasing local artists and cultural heritage.\n\n\nDay 2: Culture and Cuisine in Toyonaka\n\nMorning:\n- Tsurumi Ryokuchi Park: Spend the morning at Tsurumi Ryokuchi Park, known for its stunning floral displays and spacious walking areas. It’s perfect for a leisurely stroll or a bike ride.\n- Hattori Ryokuchi Park: Visit this expansive park that features walking trails, sports facilities, and a large pond for a refreshing nature experience.\n\nAfternoon:\n- Toyonaka City Hall: Check out the architecture and visit the local tourism office for information on ongoing events and exhibitions.\n- Local Cuisine: Enjoy lunch at a local restaurant serving Osaka specialties like takoyaki (octopus balls) or okonomiyaki (savory pancakes). Explore the local markets for fresh produce and snacks.\n\n\nDay 3: Day Trip to Osaka Attractions\n\nMorning:\n- Osaka Castle: Take a short train ride to Osaka and visit the iconic Osaka Castle, where you can explore the museum and enjoy the scenic views from the top.\n- Shitennoji Temple: After the castle, visit one of Japan’s oldest temples, known for its beautiful architecture and tranquil gardens.\n\nAfternoon:\n- Dotonbori District: Explore the vibrant Dotonbori area, famous for its neon lights, street food, and entertainment options. Sample local delicacies like kushikatsu (fried skewers) and enjoy the lively atmosphere.\n- Namba Parks: End your trip with a visit to Namba Parks, a shopping complex with a rooftop garden offering stunning views of the city.`,
        photoLink: 'https://live.staticflickr.com/5526/10115664143_2d5f2252ca_b.jpg', // Replace with actual image URL
        title: 'Cultural Journey: Toyonaka and Osaka Adventure',
        description: 'Experience the charm of Toyonaka, from its beautiful parks and educational institutions to local cuisine and day trips to Osaka’s famous landmarks in this exciting three-day itinerary.',
    },
    {
        itinerary: "Overview: Day 1: Visit local parks and historical sites. Day 2: Explore shopping and entertainment in Moriguchi. Day 3: Discover nearby Osaka attractions.",
        itineraryDownload: `Day 1: Discovering Moriguchi’s Natural and Historical Beauty\n\nMorning:\n- Moriguchi Park: Start your day at Moriguchi Park, known for its spacious greenery and beautiful cherry blossoms in spring. Enjoy a leisurely stroll or a morning jog.\n- Matsunoo Shrine: Visit the tranquil Matsunoo Shrine, a historic site surrounded by lush nature, where you can experience the local spiritual culture.\n\nAfternoon:\n- Moriguchi City Museum: Explore the Moriguchi City Museum to learn about the city’s history and cultural heritage through various exhibitions.\n- Yamada Park: Take a relaxing walk in Yamada Park, featuring playgrounds and serene walking paths ideal for a picnic.\n\n\nDay 2: Shopping and Entertainment in Moriguchi\n\nMorning:\n- Aeon Moriguchi Shopping Center: Spend your morning at the Aeon Moriguchi Shopping Center, where you can find everything from fashion to electronics and enjoy local delicacies at the food court.\n- Local Cafes: Enjoy a coffee break at one of the charming local cafes, perfect for people-watching and relaxing.\n\nAfternoon:\n- Moriguchi Cultural Center: Attend a performance or exhibition at the Moriguchi Cultural Center, showcasing local arts and talents.\n- Movie Theater: Catch a film at the nearby movie theater, featuring both Japanese and international films.\n\n\nDay 3: Day Trip to Osaka Attractions\n\nMorning:\n- Osaka Castle: Take a short train ride to Osaka and visit the iconic Osaka Castle, where you can explore the historical museum and enjoy scenic views from the top.\n- Shitennoji Temple: After the castle, visit Shitennoji Temple, one of Japan’s oldest temples, renowned for its beautiful architecture and gardens.\n\nAfternoon:\n- Kuromon Ichiba Market: Explore the bustling Kuromon Ichiba Market in Osaka, sampling fresh seafood, fruits, and other local specialties.\n- Namba Parks: End your trip with a visit to Namba Parks, a shopping complex with a rooftop garden offering stunning views of the city.`,
        photoLink: 'https://mediaim.expedia.com/localexpert/44563300/ce613328-085a-4207-8c15-4b8fd00585d4.jpg?impolicy=resizecrop&rw=500&rh=280', // Replace with actual image URL
        title: 'Moriguchi Adventure: Nature, Culture, and City Life',
        description: 'Experience the charm of Moriguchi, from its beautiful parks and historical sites to vibrant shopping and day trips to nearby Osaka attractions in this engaging three-day itinerary.',
    },
    {
        itinerary: "Overview: Day 1: Relax in hot springs and enjoy views of Mount Fuji. Day 2: Explore art museums and the Hakone Open-Air Museum. Day 3: Take a scenic boat ride on Lake Ashi.",
        itineraryDownload: `Day 1: Indulging in Hakone's Natural Beauty and Relaxation\n\nMorning:\n- Hakone Yumoto: Arrive in Hakone and start your day at Hakone Yumoto, a famous hot spring area. Enjoy a relaxing soak in one of the local onsen (hot spring baths) to rejuvenate yourself.\n- Komagatake Ropeway: Take the Komagatake Ropeway for breathtaking views of Mount Fuji and the surrounding landscape. Spend some time at the observation deck to capture the stunning scenery.\n\nAfternoon:\n- Owakudani Valley: Visit Owakudani Valley, known for its volcanic activity and sulfur vents. Try the famous black eggs, which are boiled in the hot springs, and enjoy panoramic views.\n- Hakone Shrine: Head to Hakone Shrine, nestled in a forested area by Lake Ashi. Explore the beautiful torii gate and serene surroundings.\n\n\nDay 2: Art and Culture in Hakone\n\nMorning:\n- Hakone Open-Air Museum: Spend the morning at the Hakone Open-Air Museum, where you can enjoy a unique collection of sculptures and art installations set against a backdrop of nature.\n- Chokoku no Mori Museum: Visit the nearby Chokoku no Mori Museum, dedicated to sculptures and art, and featuring a lovely garden.\n\nAfternoon:\n- Hakone Gora Park: Take a leisurely stroll through Hakone Gora Park, known for its beautiful flowers and views of the surrounding mountains. Don’t miss the tea house where you can enjoy traditional Japanese tea.\n- Local Cuisine: Dine at a local restaurant to savor Hakone’s specialties, including kaiseki (traditional multi-course meal) or fresh fish dishes.\n\n\nDay 3: Scenic Adventures in Hakone\n\nMorning:\n- Lake Ashi: Start your day with a scenic boat ride on Lake Ashi, where you can enjoy views of Mount Fuji from the water. Look out for the iconic red torii gate on the lake.\n- Hakone Sekisho: Visit the historical Hakone Sekisho (Checkpoint), which offers insights into the region's history and the role it played during the Edo period.\n\nAfternoon:\n- Hakone Tozan Railway: Experience a ride on the Hakone Tozan Railway, a picturesque train journey that takes you through beautiful landscapes and offers stunning views of the mountains.\n- Return and Relax: Conclude your trip with another visit to an onsen or relax in a café, enjoying the tranquil atmosphere of Hakone.`,
        photoLink: 'https://cdn.getyourguide.com/img/tour/368d5b603f186318d88ec7d831f4264fe7f289d06a7b62a4286602d61051ee1f.jpg/68.jpg', // Replace with actual image URL
        title: 'Hakone Escape: Hot Springs, Art, and Scenic Views',
        description: 'Immerse yourself in the beauty of Hakone, from its rejuvenating hot springs and stunning views of Mount Fuji to art museums and scenic adventures in this delightful three-day itinerary.',
    },
    {
        itinerary: "Overview: Day 1: Visit the Hill of the Buddha and explore nearby temples. Day 2: Discover local culture and enjoy outdoor activities. Day 3: Experience Hokkaido's nature with hiking and hot springs.",
        itineraryDownload: `Day 1: Tranquility at the Hill of the Buddha\n\nMorning:\n- Hill of the Buddha: Start your day by visiting the Hill of the Buddha (Buddha-zan), where you can admire the impressive 13-meter tall statue of the Buddha. Take your time to enjoy the serene atmosphere and beautiful surrounding views of Hokkaido’s landscapes.\n- Shiraoi Ainu Museum: After visiting the statue, head to the Shiraoi Ainu Museum, where you can learn about the indigenous Ainu culture through various exhibits and performances.\n\nAfternoon:\n- Explore Local Temples: Visit nearby temples such as the Shiraoi Kannon Temple and the Kannon-ji Temple, both known for their unique architecture and peaceful surroundings. Take a stroll around the grounds to soak in the spiritual ambiance.\n- Local Cuisine: Enjoy a traditional Hokkaido lunch at a local restaurant, featuring specialties like fresh seafood or soup curry.\n\n\nDay 2: Cultural Immersion and Outdoor Adventures\n\nMorning:\n- Historical Village of Hokkaido: Spend the morning at the Historical Village of Hokkaido in Sapporo, where you can see various restored buildings from the Meiji and Taisho eras, providing insight into the region's history.\n- Moerenuma Park: Explore Moerenuma Park, an artistic park designed by Isamu Noguchi, featuring sculptures, fountains, and beautiful landscapes ideal for leisurely walks.\n\nAfternoon:\n- Outdoor Activities: Engage in outdoor activities such as cycling or hiking in the surrounding areas, where you can enjoy Hokkaido's natural beauty. You can also visit local farms to experience agricultural activities.\n- Evening at the Hot Springs: After a day of exploration, relax in one of Hokkaido's famous onsen (hot springs) for a soothing experience.\n\n\nDay 3: Nature and Relaxation\n\nMorning:\n- Hiking in Shikotsu-Toya National Park: Start your day with a hike in the Shikotsu-Toya National Park, where you can enjoy breathtaking views of mountains and lakes. Trails vary in difficulty, so there’s something for everyone.\n- Lake Shikotsu: Visit Lake Shikotsu, a caldera lake known for its crystal-clear waters and stunning scenery. You can rent a kayak or take a scenic boat ride to fully appreciate the beauty of the area.\n\nAfternoon:\n- Return to Sapporo: Head back to Sapporo and take some time to explore the city’s shops and cafes, enjoying local treats such as Shiroi Koibito (white chocolate biscuits) or soup curry.\n- Departure: Conclude your trip with a final soak in an onsen or a visit to a local park before heading home.`,
        photoLink: 'https://cdn.thecollector.com/wp-content/uploads/2023/10/what-is-the-hill-of-the-buddha.jpg', // Replace with actual image URL
        title: 'Hokkaido Serenity: The Hill of the Buddha and Beyond',
        description: 'Experience the tranquil beauty of the Hill of the Buddha in Hokkaido, explore local culture, and immerse yourself in nature through outdoor activities and relaxing hot springs in this enriching three-day itinerary.',
    }







];
export class Counter extends Component {
    static displayName = Counter.name;

    constructor(props) {
        super(props);
        const randomItinerary = this.getRandomItinerary();

        this.state = {
            currentQuestion: 0,
            responses: [],
            showSurveyComplete: false,
            questions: this.getRandomQuestions(),
            itinerary: randomItinerary.itinerary,
            itineraryDownload: randomItinerary.itineraryDownload,
            photoLink: randomItinerary.photoLink,
            title: randomItinerary.title,
            description: randomItinerary.description

        };
    }
  
    // Function to shuffle the questions array
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to get ten random questions
    getRandomQuestions() {
        const shuffledQuestions = this.shuffleArray([...this.questions]);
        return shuffledQuestions.slice(0, 10);
    }
    getRandomItinerary() {
        const randomIndex = Math.floor(Math.random() * itinerariesPool.length);
        return itinerariesPool[randomIndex];
    }

//Question Code
    questions = [
        {
            questionText: 'What is your primary interest in visiting Japan?',
            answerOptions: [
                { answerText: 'Adventure' },
                { answerText: 'Relaxation' },
                { answerText: 'Educational' },
                { answerText: 'Culinary' },
            ],
        },
        {
            questionText: 'Which Japanese food do you like the most?',
            answerOptions: [
                { answerText: 'Sushi' },
                { answerText: 'Ramen' },
                { answerText: 'Tempura' },
                { answerText: 'Takoyaki' },
            ],
        },
        {
            questionText: 'What is your preferred transportation method?',
            answerOptions: [
                { answerText: 'Bullet trains (Shinkansen)' },
                { answerText: 'Walking or biking in local areas' },
                { answerText: 'Rental cars' },
                { answerText: 'Public buses or taxis' },
            ],
        },
        {
            questionText: 'What kind of accommodation would you prefer during your trip?',
            answerOptions: [
                { answerText: 'Traditional ryokan with hot springs' },
                { answerText: 'Modern luxury hotel' },
                { answerText: 'Budget hostel or capsule hotel' },
                { answerText: 'Airbnb or rental homes' },
            ],
        },
        {
            questionText: 'What’s the first thing you want to capture on your camera?',
            answerOptions: [
                { answerText: 'Ancient temples or shrines' },
                { answerText: 'Unique street food and markets' },
                { answerText: 'A stunning mountain view' },
                { answerText: 'Bustling city streets and lights' },
            ],
        },
        {
            questionText: 'Which Japanese craft would you like to try making?',
            answerOptions: [
                { answerText: 'Origami or pottery' },
                { answerText: 'Making sushi or soba noodles' },
                { answerText: 'Crafting natural soaps or lotions' },
                { answerText: 'Designing kawaii accessories' },
            ],
        },
        {
            questionText: 'How adventurous are you when it comes to food?',
            answerOptions: [
                { answerText: 'Open to trying traditional but familiar dishes' },
                { answerText: 'Excited to try street food, even if it’s unusual' },
                { answerText: 'Preferring comforting, healthy, or light meals' },
                { answerText: 'Game for anything, especially experimental cuisine' },
            ],
        },
        {
            questionText: 'What are you most excited about exploring in Japan?',
            answerOptions: [
                { answerText: 'Ancient temples and cultural sites' },
                { answerText: 'Street food and famous markets' },
                { answerText: 'Natural hot springs and mountains' },
                { answerText: 'Modern architecture and pop culture spots' },
            ],
        },
        {
            questionText: 'What type of Japanese architecture would you like to explore?',
            answerOptions: [
                { answerText: 'Historic castles and temples' },
                { answerText: 'Quaint, local food stalls and markets' },
                { answerText: 'Traditional inns and rural homes' },
                { answerText: 'Modern skyscrapers and innovative buildings' },
            ],
        },
        {
            questionText: 'What do you hope to gain from your trip to Japan?',
            answerOptions: [
                { answerText: 'A deeper understanding of Japanese history and tradition' },
                { answerText: 'A taste of Japan’s diverse food culture' },
                { answerText: 'A sense of peace and relaxation' },
                { answerText: 'A fast-paced adventure and memorable sights' },
            ],
        },
        {
            questionText: 'What pace of travel do you prefer?',
            answerOptions: [
                { answerText: 'Fast-paced, lots of activities' },
                { answerText: 'Moderate, a good balance of relaxation and sightseeing' },
                { answerText: 'Slow-paced, with a focus on deep experiences' },
                { answerText: 'Flexible, I adjust based on the moment' },
            ],
        },
        {
            questionText: 'Are you interested in Japanese pop culture (e.g., anime, video games, fashion)?',
            answerOptions: [
                { answerText: 'Very much' },
                { answerText: 'Somewhat' },
                { answerText: 'Not really' },
                { answerText: 'Not at all' },
            ],
        },
        {
            questionText: 'What kind of natural scenery do you prefer?',
            answerOptions: [
                { answerText: 'Mountains and forests' },
                { answerText: 'Beaches and coastal areas' },
                { answerText: 'Countryside and rolling hills' },
                { answerText: 'Urban parks and gardens' },
            ],
        },
        {
            questionText: 'Do you enjoy participating in outdoor sports or adventures?',
            answerOptions: [
                { answerText: 'Yes, hiking, skiing, or water sports' },
                { answerText: 'Yes, but only occasionally' },
                { answerText: 'No, I prefer indoor activities' },
                { answerText: 'I’m open to new experiences' },
            ],
        },
        {
            questionText: 'What kind of climate do you prefer?',
            answerOptions: [
                { answerText: 'Cool and mild' },
                { answerText: 'Warm and tropical' },
                { answerText: 'Varied, with distinct seasons' },
                { answerText: 'It doesn’t matter, I can adapt' },
            ],
        },
        // Add more survey questions as needed
    ];
  

    handleAnswerOptionClick = (answerText) => {
        this.setState((prevState) => ({
            responses: [...prevState.responses, answerText],
        }));

        const nextQuestion = this.state.currentQuestion + 1;
        if (nextQuestion < this.state.questions.length) {
            this.setState({
                currentQuestion: nextQuestion,
            });
        } else {
            // Add a pause before showing the survey complete message
            setTimeout(() => {
                this.setState({
                    showSurveyComplete: true,
                });
            }, 500); // 2000 ms = 2 second pause
        }
    };


    // Function to create a downloadable itinerary file
    createDownloadLink = () => {
        const doc = new jsPDF();
        doc.setFontSize(12); // Set the font size to 10 (adjust as needed)
        doc.text(this.state.itineraryDownload, 10, 10);
        doc.save("itinerary.pdf");
    };


    render() {
        const { questions, currentQuestion, showSurveyComplete, itinerary, itineraryDownload, photoLink, title, description } = this.state;

        return (
            <div style={styles.page}>
                <div style={styles.quiz}>
                    {showSurveyComplete ? (
                        <div style={styles.surveyCompleteSection}>
                            Thank you for completing the survey!
                            <div>Your result:</div>
                            <div style={styles.resultText}>{title}</div>
                            <div style={styles.itinerary}>
                                {photoLink && (
                                    <img src={photoLink} alt="Itinerary Photo" style={styles.resultImage} />
                                )}
                                <p>{description}</p>
                                <h2>Your Itinerary:</h2>
                                <p>{itinerary}</p>
                                <button onClick={this.createDownloadLink} style={styles.button}>
                                    Download Full Itinerary
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div style={styles.questionSection}>
                                <div style={styles.questionCount}>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                {questions[currentQuestion] && (
                                    <div style={styles.questionText}>
                                        {questions[currentQuestion].questionText}
                                    </div>
                                )}
                            </div>
                            <div style={styles.answerSection}>
                                {questions[currentQuestion] && questions[currentQuestion].answerOptions.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => this.handleAnswerOptionClick(option.answerText)}
                                        style={styles.button} // Apply button styles here
                                    >
                                        {option.answerText}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }

  }                

const styles = {
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#F7F3F0', // Fixed: Removed extra '#' and 'x'
    },
    quiz: {
        width: '70%',
        backgroundColor: '#F7F3F0',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    },
    surveyCompleteSection: {
        textAlign: 'center',
    },
    resultText: {
        fontSize: '28px',
        fontWeight: 'bold',
    },
    resultImage: {
        display: 'block', // Ensures image is a block element
        margin: '20px auto', // Centers image horizontally
        width: '60%',
        height: 'auto',
    },
    itinerary: {
        marginTop: '20px',
        textAlign: 'center', // Centers text and image within this section
    },
    questionSection: {
        marginBottom: '30px',
    },
    questionCount: {
        marginBottom: '15px',
    },
    questionText: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    answerSection: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#EDCDDE', // Pink color
        color: '#000',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '10px',
        fontSize: '18px',
        marginBottom: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        outline: 'none', // Remove outline for a cleaner look
    },
};
    


export default Counter;

/*
    questions = [
        {
            questionText: 'What is your primary interest in visiting Japan?',
            answerOptions: [
                { answerText: 'Adventure' },
                { answerText: 'Relaxation' },
                { answerText: 'Educational' },
                { answerText: 'Culinary' },
            ],
        },
        {
            questionText: 'Which Japanese food do you like the most?',
            answerOptions: [
                { answerText: 'Sushi' },
                { answerText: 'Ramen' },
                { answerText: 'Tempura' },
                { answerText: 'Takoyaki' },
            ],
        },
        {
            questionText: 'What is your preferred transportation method?',
            answerOptions: [
                { answerText: 'Bullet trains (Shinkansen)' },
                { answerText: 'Walking or biking in local areas' },
                { answerText: 'Rental cars' },
                { answerText: 'Public buses or taxis' },
            ],
        },
        {
            questionText: 'What kind of accommodation would you prefer during your trip?',
            answerOptions: [
                { answerText: 'Traditional ryokan with hot springs' },
                { answerText: 'Modern luxury hotel' },
                { answerText: 'Budget hostel or capsule hotel' },
                { answerText: 'Airbnb or rental homes' },
            ],
        },
        {
            questionText: 'What’s the first thing you want to capture on your camera?',
            answerOptions: [
                { answerText: 'Ancient temples or shrines' },
                { answerText: 'Unique street food and markets' },
                { answerText: 'A stunning mountain view' },
                { answerText: 'Bustling city streets and lights' },
            ],
        },
        {
            questionText: 'Which Japanese craft would you like to try making?',
            answerOptions: [
                { answerText: 'Origami or pottery' },
                { answerText: 'Making sushi or soba noodles' },
                { answerText: 'Crafting natural soaps or lotions' },
                { answerText: 'Designing kawaii accessories' },
            ],
        },
        {
            questionText: 'How adventurous are you when it comes to food?',
            answerOptions: [
                { answerText: 'Open to trying traditional but familiar dishes' },
                { answerText: 'Excited to try street food, even if it’s unusual' },
                { answerText: 'Preferring comforting, healthy, or light meals' },
                { answerText: 'Game for anything, especially experimental cuisine' },
            ],
        },
        {
            questionText: 'What are you most excited about exploring in Japan?',
            answerOptions: [
                { answerText: 'Ancient temples and cultural sites' },
                { answerText: 'Street food and famous markets' },
                { answerText: 'Natural hot springs and mountains' },
                { answerText: 'Modern architecture and pop culture spots' },
            ],
        },
        {
            questionText: 'What type of Japanese architecture would you like to explore?',
            answerOptions: [
                { answerText: 'Historic castles and temples' },
                { answerText: 'Quaint, local food stalls and markets' },
                { answerText: 'Traditional inns and rural homes' },
                { answerText: 'Modern skyscrapers and innovative buildings' },
            ],
        },
        {
            questionText: 'What do you hope to gain from your trip to Japan?',
            answerOptions: [
                { answerText: 'A deeper understanding of Japanese history and tradition' },
                { answerText: 'A taste of Japan’s diverse food culture' },
                { answerText: 'A sense of peace and relaxation' },
                { answerText: 'A fast-paced adventure and memorable sights' },
            ],
        },
        {
            questionText: 'What pace of travel do you prefer?',
            answerOptions: [
                { answerText: 'Fast-paced, lots of activities' },
                { answerText: 'Moderate, a good balance of relaxation and sightseeing' },
                { answerText: 'Slow-paced, with a focus on deep experiences' },
                { answerText: 'Flexible, I adjust based on the moment' },
            ],
        },
        {
            questionText: 'Are you interested in Japanese pop culture (e.g., anime, video games, fashion)?',
            answerOptions: [
                { answerText: 'Very much' },
                { answerText: 'Somewhat' },
                { answerText: 'Not really' },
                { answerText: 'Not at all' },
            ],
        },
        {
            questionText: 'What kind of natural scenery do you prefer?',
            answerOptions: [
                { answerText: 'Mountains and forests' },
                { answerText: 'Beaches and coastal areas' },
                { answerText: 'Countryside and rolling hills' },
                { answerText: 'Urban parks and gardens' },
            ],
        },
        {
            questionText: 'Do you enjoy participating in outdoor sports or adventures?',
            answerOptions: [
                { answerText: 'Yes, hiking, skiing, or water sports' },
                { answerText: 'Yes, but only occasionally' },
                { answerText: 'No, I prefer indoor activities' },
                { answerText: 'I’m open to new experiences' },
            ],
        },
        {
            questionText: 'What kind of climate do you prefer?',
            answerOptions: [
                { answerText: 'Cool and mild' },
                { answerText: 'Warm and tropical' },
                { answerText: 'Varied, with distinct seasons' },
                { answerText: 'It doesn’t matter, I can adapt' },
            ],
        },
        // Add more survey questions as needed
    ];
*/