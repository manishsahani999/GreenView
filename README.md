# GreenView
Disease Mapping – Our main objective is to help poor farmers and government to tackle the decrease in crop productivity due to diseases and pests.

> Selected in Google's Build for Digital India under top 20 Ideas in North-India.

## Concept
Agriculture plays a key role in supporting the rapidly growing population. Plant disease reduces the production along with the quality of food, fiber and biofuel crops. These losses can range from chronic to catastrophic, on an average 42% of the population of the six most important food crops Losses due to postharvest disease can be disastrous, especially when farms are a long way from markets and infrastructure and supply chain practices are poor.

Farmers spend a lot of money on disease management, often without adequate technical support, the crops result in poor disease control, pollution, and harmful results. Crop losses tend to be greatest in tropical countries where environmental conditions are particularly favorable, incomes are low and knowledge and investments in crop health management are minimal. Disease losses can mean that communities become dependent on imported foods, often replacing a balanced diet with processed foods that create further health problems.

Plant breeders have very successfully increased potential crop yields, however, the impacts of cropbreeding for resource-poor farmers have been disappointing. Much greater emphasis is required to address reasons for the gap between potential and actual yields achieved by farmers, and research that is focussed on narrowing this gap.

## Target Audience
The target audience of our solution includes farmers, food companies, and government agencies.

## Personas
Anakin - Owns an apple farm

Luke - Supplier of raw materials for food processing companies

#### Feedback
We took our solution to some farmers and we got to learn that most of the farmers don&#39;t even know about the diseases and if they don’t know about these then they certainly don&#39;t know how to prevent their crops from such dangers. So we decided to provide more knowledge about the crops and the disease itself and what steps can be taken in order to get a better yield and healthy crops. Then again in multilingual countries like India, we have to provide the solution in all possible languages to make our application more accessible and increase the user interactions by including options like voice commands and translation.

## Working
Our projects have three components as usual:
1. Frontend: This is where the user interacts with our application and they can send images of plants and crops they want to know about, like disease, basic info and can see which area of their crop is more affected by the disease. The image uploaded by the user along with the location is then sent to the backend. It also shows a heat map of diseases area wise.
2. Backend: This is where the real magic happens, the image sent by the frontend get uploaded here and we analyze the image and detect the disease and other useful information. The data is then stored and plotted on the map.

<div style="text-align:center;">
<a href="https://ibb.co/yh89Jnx"><img src="https://i.ibb.co/8zjCVDQ/REST-API.png" alt="REST-API" border="0"></a>
</div>

We used ReactJS for developing the interface, PHP/Laravel for the backend server and Tensorflow/Keras for developing the state of the art image classifier for the disease prediction. All three components will be deployed on Microsoft’s Azure resources, Machine Learning for our TensorFlow Model and other web app containers for other React and Laravel.

## Core Technologies

Core technologies include Python, JavaScript, ReactJs, PHP, Tensorflow/Keras, Django, Azure ML studio, Mysql.

## The Business Model
Our aim is to ship a service-based product to farmers and other Agencies and chains. Our service will have different plans tailored to farmers so that they can maximize their profit by minimizing the damage and losses due to crop diseases.
We could partner with the best in the market companies that provide solutions to make the crop free of diseases. We will promote their products and recommend to farmers if they actually help them. Initially, we will require some funds to make the platform available to all farmers, the most crucial part is execution, we have to go on actual farms and meet different farmers and explain to them how our app will help them, and why they should use it.

The main problem in Agriculture is that the farmers lack the knowledge about disease prevention, people and other big companies only tell them to introduce pesticides and fertilizers so that they can make money off it.

## The team
We are a team of two Computer science undergraduates studying at Delhi Technological University. We love deep learning and our goal is to use it to create solutions for real-world problems that will benefit society on a large scale. Our areas of interest are Natural Language Processing and Computer Vision.
