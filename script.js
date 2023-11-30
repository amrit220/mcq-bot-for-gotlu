// Shuffle function to randomize questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "who is my fav avenger?",
    options: ["iron man", "vision", "hottie wanda", "black widow"],
    correctAnswer: "iron man"
  },
  {
    question: "How many balls you have?",
    options: ["1", "3", "2", "0"],
    correctAnswer: "0"
  },
  {
    question: "When was the 9th International Day of Yoga (IDY) celebrated?",
    options: ["a) June 21, 2023", "b) June 21, 2022", "c) June 21, 2021", "d) June 21, 2020"],
    correctAnswer: "a) June 21, 2023"
  },
  {
    question: "What was the theme of the 9th International Day of Yoga (IDY)?",
    options: [
      "a) Yoga for Unity",
      "b) Yoga for Peace",
      "c) Yoga for Vasudhaiva Kutumbakam",
      "d) Yoga for Global Harmony"
    ],
    correctAnswer: "c) Yoga for Vasudhaiva Kutumbakam"
  },

  {
    question: "Which organization collaborated with the Ministry of Ayush to supply yoga mats made by tribal artisans?",
    options: [
      "a) Ministry of Textiles",
      "b) Ministry of Culture",
      "c) Ministry of Tribal Affairs",
      "d) TRIFED (Tribal Cooperative Marketing Development Federation of India Ltd)"
    ],
    correctAnswer: "d) TRIFED (Tribal Cooperative Marketing Development Federation of India Ltd)"
  },

  {
    question: "Which type of mats represent the diverse cultural heritage of India’s tribes?",
    options: [
      "a) Silk Yoga Mats",
      "b) Woolen Yoga Mats",
      "c) Tribal Artisan Yoga Mats",
      "d) Synthetic Yoga Mats"
    ],
    correctAnswer: "c) Tribal Artisan Yoga Mats"
  },

  {
    question: "What is the Ocean Ring of Yoga initiative?",
    options: [
      "a) Yoga sessions held in coastal areas of India",
      "b) Yoga demonstrations at ports and vessels of friendly countries by the Indian Navy and Merchant ships",
      "c) Yoga events organized in countries along the Prime Meridian line",
      "d) Yoga sessions held on the beaches of India"
    ],
    correctAnswer: "b) Yoga demonstrations at ports and vessels of friendly countries by the Indian Navy and Merchant ships"
  },

  {
    question: "Which regions will showcase yoga’s reach in extreme locations?",
    options: [
      "a) Himalayas and Ganges River",
      "b) Sahara Desert and Amazon Rainforest",
      "c) Himadri in the Arctic and Bharati in Antarctica",
      "d) Great Barrier Reef and Mount Everest"
    ],
    correctAnswer: "c) Himadri in the Arctic and Bharati in Antarctica"
  },

  {
    question: "Which Indian armed forces will form a chain of yoga demonstrations?",
    options: [
      "a) Indian Army and Indian Air Force",
      "b) Border Security Force (BSF) and Indian Navy",
      "c) Indo-Tibetan Border Police (ITBP) and Border Roads Organization (BRO)",
      "d) Indian Coast Guard and Central Reserve Police Force (CRPF)"
    ],
    correctAnswer: "c) Indo-Tibetan Border Police (ITBP) and Border Roads Organization (BRO)"
  },

  {
    question: "Where will the Prime Minister lead yoga on the International Day of Yoga?",
    options: [
      "a) United Nations Headquarters in New York",
      "b) Rashtrapati Bhavan in New Delhi",
      "c) Yoga camps across India",
      "d) Taj Mahal in Agra"
    ],
    correctAnswer: "a) United Nations Headquarters in New York"
  },

  {
    question: "What does “Har Aangan Yoga” mean?",
    options: [
      "a) Yoga in the courtyard of every house",
      "b) Yoga in public parks",
      "c) Yoga in educational institutions",
      "d) Yoga on the banks of the Ganges River"
    ],
    correctAnswer: "a) Yoga in the courtyard of every house"
  },

  {
    question: "When was the first International Day of Yoga celebrated?",
    options: ["a) 2014", "b) 2015", "c) 2016", "d) 2017"],
    correctAnswer: "b) 2015"
  },

  {
    question: "Which session of the United Nations General Assembly (UNGA) proposed the idea of the International Day of Yoga?",
    options: ["A) 68th session", "b) 69th session", "c) 70th session", "d) 71st session"],
    correctAnswer: "b) 69th session"
  },

  {
    question: "How many Guinness World Records were created during the first Yoga Day celebrations in 2015?",
    options: ["a) One", "b) Two", "c) Three", "d) Four"],
    correctAnswer: "b) Two"
  },

  {
    question: "What does the word “yoga” mean?",
    options: ["a) Balance", "b) Strength", "c) Union", "d) Flexibility"],
    correctAnswer: "c) Union"
  },

  {
    question: "Which organization collaborated with the Ministry of Ayush to develop the M-Yoga App?",
    options: [
      "a) World Health Organization (WHO)",
      "b) United Nations Educational, Scientific and Cultural Organization (UNESCO)",
      "c) International Yoga Federation (IYF)",
      "d) Ministry of Youth Affairs and Sports"
    ],
    correctAnswer: "a) World Health Organization (WHO)"
  },
  {
    question: "What is the purpose of the M-Yoga App?",
    options: [
      "a) To provide information about yoga postures",
      "b) To promote global health and well-being",
      "c) To facilitate yoga sessions for COVID-19 patients",
      "d) To connect yoga enthusiasts worldwide"
    ],
    correctAnswer: "b) To promote global health and well-being"
  },

  {
    question: "Which ministry collaborated with the WHO to develop the M-Yoga App?",
    options: [
      "a) Ministry of Ayush",
      "b) Ministry of Health and Family Welfare",
      "c) Ministry of Education",
      "d) Ministry of Youth Affairs and Sports"
    ],
    correctAnswer: "a) Ministry of Ayush"
  },

  {
    question: "What is the purpose of the new website for International Day of Yoga (IDY)?",
    options: [
      "a) To provide information about yoga events around the world",
      "b) To promote yoga tourism in India",
      "c) To facilitate online yoga classes",
      "d) To provide updated and relevant information about IDY"
    ],
    correctAnswer: "d) To provide updated and relevant information about IDY"
  },

  {
    question: "When was Yoga recognized as a sports discipline by the Ministry of Youth Affairs and Sports?",
    options: ["a) 2013", "b) 2014", "c) 2015", "d) 2016"],
    correctAnswer: "c) 2015"
  },

  {
    question: "What are the ‘sadhanas’ listed in the Common Yoga Protocol?",
    options: [
      "a) Yama and Niyama",
      "b) Asana and Pranayama",
      "c) Meditation and Mantra chanting",
      "d) All of the above"
    ],
    correctAnswer: "d) All of the above"
  },

  {
    question: "Which organization offers vocational education courses in Yoga for CBSE schools?",
    options: [
      "a) Ministry of Skill Development and Entrepreneurship",
      "b) National Skill Development Corporation",
      "c) Ministry of Ayush",
      "d) Beauty & Wellness Sector Skill Council"
    ],
    correctAnswer: "d) Beauty & Wellness Sector Skill Council"
  },

  {
    question: "What is the purpose of the KFON project?",
    options: [
      "a) To reduce the digital divide",
      "b) To promote e-governance",
      "c) Both a) and b)",
      "d) To provide free internet to all households"
    ],
    correctAnswer: "c) Both a) and b)"
  },
  {
    question: "How many kilometers does the KFON network infrastructure cover?",
    options: [
      "a) 10,000 km",
      "b) 20,000 km",
      "c) 30,000 km",
      "d) 40,000 km"
    ],
    correctAnswer: "c) 30,000 km"
  },
  {
    question: "Who is responsible for providing internet connectivity to households under KFON?",
    options: [
      "a) Kerala government",
      "b) Cable TV providers",
      "c) Internet service providers",
      "d) All of the above"
    ],
    correctAnswer: "d) All of the above"
  },
  {
    question: "How many government offices are planned to be connected in the initial stage of KFON?",
    options: [
      "a) 10,000 offices",
      "b) 20,000 offices",
      "c) 30,000 offices",
      "d) 40,000 offices"
    ],
    correctAnswer: "c) 30,000 offices"
  },
  {
    question: "What is the promised range of internet speeds under KFON?",
    options: [
      "a) 1 Mbps to 5 Mbps",
      "b) 5 Mbps to 10 Mbps",
      "c) 10 Mbps to 10 Gbps",
      "d) 100 Mbps to 1 Gbps"
    ],
    correctAnswer: "c) 10 Mbps to 10 Gbps"
  },
  {
    question: "How many BPL families are targeted to receive free internet connections in the first phase of KFON?",
    options: [
      "a) 5,000 families",
      "b) 10,000 families",
      "c) 14,000 families",
      "d) 20,000 families"
    ],
    correctAnswer: "c) 14,000 families"
  },
  {
    question: "Who owns the infrastructure assets of KFON?",
    options: [
      "a) Kerala State Electricity Board (KSEB)",
      "b) Kerala State IIT Infrastructure Limited",
      "c) Bharat Electronics Limited (BEL)",
      "d) Kerala Infrastructure Investment Fund Board (KIIFB)"
    ],
    correctAnswer: "a) Kerala State Electricity Board (KSEB)"
  },
  {
    question: "Which consortium is responsible for implementing the KFON project?",
    options: [
      "a) Kerala State Electricity Board (KSEB)",
      "b) Kerala State IIT Infrastructure Limited",
      "c) Bharat Electronics Limited (BEL)",
      "d) Kerala Infrastructure Investment Fund Board (KIIFB)"
    ],
    correctAnswer: "c) Bharat Electronics Limited (BEL)"
  },
  {
    question: "What type of licenses does KFON hold?",
    options: [
      "a) Internet Service Provider (ISP) licenses",
      "b) Infrastructure Provider (category one) licenses",
      "c) Both a) and b)",
      "d) None of the above"
    ],
    correctAnswer: "c) Both a) and b)"
  },
  {
    question: "What services does KFON offer besides internet connectivity?",
    options: [
      "a) Leasing of dark fibre",
      "b) Fibre to the home",
      "c) Colocation of assets",
      "d) All of the above"
    ],
    correctAnswer: "d) All of the above"
  },
  {
    question: "Which organization fully funds the KFON project?",
    options: [
      "a) Kerala State Electricity Board (KSEB)",
      "b) Kerala State IIT Infrastructure Limited",
      "c) Bharat Electronics Limited (BEL)",
      "d) Kerala Infrastructure Investment Fund Board (KIIFB)"
    ],
    correctAnswer: "d) Kerala Infrastructure Investment Fund Board (KIIFB)"
  },
  {
    question: "What is the primary objective of KFON?",
    options: [
      "a) To provide free internet to all households in Kerala",
      "b) To improve mobile phone call quality",
      "c) To promote e-governance",
      "d) To empower below poverty line families with internet access"
    ],
    correctAnswer: "a) To provide free internet to all households in Kerala"
  },
  {
    question: "How many BPL families are expected to receive high-speed internet access in the long-term plan?",
    options: [
      "a) 100 families per assembly constituency",
      "b) 1,000 families per assembly constituency",
      "c) 10,000 families per assembly constituency",
      "d) 100,000 families per assembly constituency"
    ],
    correctAnswer: "a) 100 families per assembly constituency"
  },
  {
    question: "Which organization shares KFON’s infrastructure with all service providers?",
    options: [
      "a) Kerala State Electricity Board (KSEB)",
      "b) Kerala State IIT Infrastructure Limited",
      "c) Bharat Electronics Limited (BEL)",
      "d) None of the above"
    ],
    correctAnswer: "a) Kerala State Electricity Board (KSEB)"
  },
  {
    question: "How many Points-of-Presence does KFON have across Kerala?",
    options: [
      "a) 100",
      "b) 250",
      "c) 375",
      "d) 500"
    ],
    correctAnswer: "c) 375"
  },
  {
    question: "Which government entity is responsible for the implementation of the KFON project?",
    options: [
      "a) Kerala State Electricity Board (KSEB)",
      "b) Kerala State IIT Infrastructure Limited",
      "c) Bharat Electronics Limited (BEL)",
      "d) Kerala Infrastructure Investment Fund Board (KIIFB)"
    ],
    correctAnswer: "b) Kerala State IIT Infrastructure Limited"
  },
  {
    question: "What range of internet speeds does KFON promise to provide?",
    options: [
      "a) 1 Mbps to 10 Mbps",
      "b) 10 Mbps to 100 Mbps",
      "c) 100 Mbps to 1 Gbps",
      "d) 1 Gbps to 10 Gbps"
    ],
    correctAnswer: "c) 100 Mbps to 1 Gbps"
  },
  {
    question: "When did India sign an MoU with the World Food Programme (WFP) to send wheat to Afghanistan?",
    options: ["a) 2020", "b) 2023", "c) 2022", "d) 2021"],
    correctAnswer: "b) 2023"
  },
  {
    question: "How much metric tonnes of wheat did India declare to send to Afghanistan through the Iranian port of Chahbahar?",
    options: ["a) 5,000 MT", "b) 10,000 MT", "c) 15,000 MT", "d) 20,000 MT"],
    correctAnswer: "d) 20,000 MT"
  },
  {
    question: "According to the WFP, how many Afghan families are unable to afford enough food at present?",
    options: ["a) 5 out of 10", "b) 7 out of 10", "c) 9 out of 10", "d) 3 out of 10"],
    correctAnswer: "c) 9 out of 10"
  },
  {
    question: "How many Afghans are estimated to be facing the threat of starvation, as per the WFP?",
    options: ["a) 10 million", "b) 15 million", "c) 20 million", "d) 25 million"],
    correctAnswer: "c) 20 million"
  },
  {
    question: "India’s stance on the Taliban government is that:",
    options: ["a) It fully recognizes the Taliban government", "b) It opposes sending humanitarian aid to Afghanistan", "c) It requires “unimpeded access” to ensure aid reaches the people", "d) It supports the tribal warlords and local Taliban leaders"],
    correctAnswer: "c) It requires “unimpeded access” to ensure aid reaches the people"
  },
  {
    question: "Which international organization within the United Nations provides food assistance worldwide?",
    options: ["a) UNICEF", "b) WHO", "c) WFP", "d) UNESCO"],
    correctAnswer: "c) WFP"
  },
  {
    question: "When was the World Food Programme (WFP) founded?",
    options: ["a) 1950", "b) 1961", "c) 1975", "d) 1983"],
    correctAnswer: "b) 1961"
  },
  {
    question: "Who are the founders of the World Food Programme (WFP)?",
    options: ["a) United Nations Security Council", "b) World Bank and IMF", "c) Food and Agriculture Organization (FAO) and United Nations General Assembly (UNGA)", "d) Red Cross and Red Crescent"],
    correctAnswer: "c) Food and Agriculture Organization (FAO) and United Nations General Assembly (UNGA)"
  },
  {
    question: "What is the primary objective of the World Food Programme (WFP)?",
    options: ["a) Promote global trade", "b) Provide medical assistance", "c) Combat climate change", "d) End hunger and improve food security"],
    correctAnswer: "d) End hunger and improve food security"
  },
  {
    question: "What is the vision of the World Food Programme (WFP)?",
    options: ["a) Achieve world peace", "b) Eradicate poverty", "c) Eliminate terrorism", "d) Eradicate food insecurity and malnutrition by 2030 (SDG 2 – Zero Hunger)"],
    correctAnswer: "d) Eradicate food insecurity and malnutrition by 2030 (SDG 2 – Zero Hunger)"
  },
  {
    question: "Which initiative of the WFP allows donations through the ShareTheMeal app?",
    options: ["a) Feed the Future", "b) Hunger Relief Campaign", "c) Share the Meal Initiative", "d) Global Food Aid Program"],
    correctAnswer: "c) Share the Meal Initiative"
  },
  {
    question: "How is the World Food Programme (WFP) funded?",
    options: ["a) Government taxes", "b) Membership fees", "c) Voluntary donations from various sources", "d) Private investments"],
    correctAnswer: "c) Voluntary donations from governments, corporations, individuals, and not-for-profit entities"
  },
  {
    question: "In which year did the WFP receive the Nobel Prize for Peace?",
    options: ["a) 2010", "b) 2015", "c) 2020", "d) 2022"],
    correctAnswer: "c) 2020"
  },
  {
    question: "What is the main focus of WFP’s activities in India?",
    options: ["a) Providing education support", "b) Improving infrastructure", "c) Enhancing healthcare systems", "d) Improving the efficiency of India’s food distribution system and food security"],
    correctAnswer: "d) Improving the efficiency of India’s food distribution system and food security"
  },
  {
    question: "Which organization is a member of the United Nations Sustainable Development Group (UNSDG)?",
    options: ["A) International Monetary Fund (IMF)", "b) World Health Organization (WHO)", "c) World Food Programme (WFP)", "d) World Trade Organization (WTO)"],
    correctAnswer: "c) World Food Programme (WFP)"
  },
  {
    question: "What is the title of WFP’s strategic plan for the years 2022-2025?",
    options: ["a) A Hunger-Free World", "b) Ending Global Poverty", "c) Turning the tide against hunger", "d) Sustainable Food Security"],
    correctAnswer: "c) Turning the tide against hunger"
  },
  {
    question: "Which app allows users to make donations to WFP’s Share the Meal Initiative?",
    options: ["a) MealShare", "b) FoodAid", "c) HungerRelief", "d) ShareTheMeal"],
    correctAnswer: "d) ShareTheMeal"
  },
  {
    question: "How does India plan to send wheat to Afghanistan?",
    options: ["a) Through the Pakistani port of Gwadar", "b) Through the Iranian port of Chahbahar", "c) Through the Afghan capital Kabul", "d) Through the Turkish port of Istanbul"],
    correctAnswer: "b) Through the Iranian port of Chahbahar"
  },
  {
    question: "What is the main concern of India regarding humanitarian aid to Afghanistan?",
    options: ["a) Ensuring the aid is delivered through military channels", "b) Directly supporting tribal warlords", "c) Preventing local Taliban leaders from receiving aid", "d) Ensuring unimpeded access to the people of Afghanistan"],
    correctAnswer: "d) Ensuring unimpeded access to the people of Afghanistan"
  },
  {
    question: "What is the primary outcome goal of the World Food Programme’s strategic plan?",
    options: ["a) Increasing government funding", "b) Empowering local communities", "c) Strengthening international alliances", "d) People are better able to meet their urgent food and nutrition needs"],
    correctAnswer: "d) People are better able to meet their urgent food and nutrition needs"
  },
  {
    question: "What is the primary focus of WFP’s activities in India since 1963?",
    options: ["a) Promoting economic growth", "b) Disaster relief and recovery", "c) Improving subsidized food distribution", "d) Providing education and healthcare"],
    correctAnswer: "c) Improving subsidized food distribution"
  },
  {
    question: "Which organization awarded the World Food Programme the Nobel Prize for Peace in 2020?",
    options: ["a) United Nations General Assembly", "b) World Health Organization", "c) International Red Cross", "d) Norwegian Nobel Committee"],
    correctAnswer: "d) Norwegian Nobel Committee"
  },
  {
    question: "What is the main objective of the “Share the Meal” initiative?",
    options: ["a) Promoting sustainable agriculture", "b) Distributing cooking equipment", "c) Encouraging healthy eating habits", "d) Providing a platform for donations to fight hunger"],
    correctAnswer: "d) Providing a platform for donations to fight hunger"
  },
  {
    question: "Which United Nations Sustainable Development Goal (SDG) is related to the vision of the World Food Programme?",
    options: ["A) SDG 1 – No Poverty", "b) SDG 3 – Good Health and Well-being", "c) SDG 5 – Gender Equality", "d) SDG 2 – Zero Hunger"],
    correctAnswer: "d) SDG 2 – Zero Hunger"
  },
  {
    question: "What does the World Food Programme aim to achieve through its outcomes?",
    options: ["a) Strengthening military operations", "b) Enhancing political stability", "c) Improving nutrition and livelihoods", "d) Establishing new trade agreements"],
    correctAnswer: "c) Improving nutrition and livelihoods"
  },
  {
    question: "What is the primary source of funding for the World Food Programme?",
    options: ["a) Mandatory contributions from UN member states", "b) Sale of food products to recipient countries", "c) Profit from commercial ventures", "d) Voluntary donations from various sources"],
    correctAnswer: "d) Voluntary donations from governments, corporations, individuals, and not-for-profit entities"
  },
  {
    question: "What is the main focus of the World Food Programme’s efforts in India?",
    options: ["a) Promoting tourism", "b) Addressing water scarcity", "c) Enhancing agricultural exports", "d) Improving food distribution and security"],
    correctAnswer: "d) Improving food distribution and security"
  },
  {
    question: "What is the primary goal of the World Food Programme’s strategic plan for 2022-2025?",
    options: ["a) Ending all armed conflicts worldwide", "b) Eliminating political corruption", "c) Turning the tide against hunger", "d) Eradicating poverty"],
    correctAnswer: "c) Turning the tide against hunger"
  },
  {
    question: "Which initiative of the World Food Programme allows people to donate through a mobile app?",
    options: ["a) Feed the Hungry", "b) ShareTheMeal", "c) Hunger Relief Fund", "d) Food Aid Network"],
    correctAnswer: "b) ShareTheMeal"
  },
  {
    question: "What is the main focus of WFP’s activities in India related to food distribution?",
    options: ["a) Enhancing the quality of street food", "b) Strengthening food exports", "c) Improving the efficiency of subsidized food distribution", "d) Encouraging organic farming"],
    correctAnswer: "c) Improving the efficiency of subsidized food distribution"
  },
  {
    question: "What is the threshold for winnings up to which online gaming platforms are not required to deduct TDS?",
    options: ["A) Rs 1,000", "B) Rs 500", "C) Rs 100", "D) Rs 10,000"],
    correctAnswer: "C) Rs 100"
  },
  {
    question: "What types of deposits are considered taxable in the online gaming industry?",
    options: ["A) Player deposits", "B) Bonus and referral bonus", "C) In-game currency purchases", "D) All of the above"],
    correctAnswer: "B) Bonus and referral bonus"
  },
  {
    question: "How is the net winnings calculated in the online gaming industry?",
    options: ["A) Using the total amount in all user accounts", "B) Considering each user account separately", "C) Ignoring user accounts with multiple transfers", "D) Only including withdrawals as net winnings"],
    correctAnswer: "B) Considering each user account separately"
  },
  {
    question: "When will transfers between user accounts under the same online intermediary not be treated as withdrawals or deposits?",
    options: ["A) Always", "B) Only for professional gamers", "C) If the accounts belong to the same user", "D) If the accounts belong to different users"],
    correctAnswer: "C) If the accounts belong to the same user"
  },
  {
    question: "How is the fair market value of winnings in kind determined in online gaming?",
    options: ["A) It is always based on the purchase price by the intermediary", "B) It is based on the original retail price", "C) It is determined by the CBDT", "D) It is generally based on the fair market value"],
    correctAnswer: "D) It is generally based on the fair market value"
  },
  {
    question: "Which Act introduced section 194BA in the Income-tax Act, 1961, related to TDS on online gaming winnings?",
    options: ["A) Income-tax Act, 1972", "B) Finance Act, 2023", "C) Central Board of Revenue Act, 1963", "D) Gaming Tax Act, 2022"],
    correctAnswer: "B) Finance Act, 2023"
  },
  {
    question: "What is the applicable rate of TDS on net winnings from online gaming platforms?",
    options: ["A) 20%", "B) 25%", "C) 30%", "D) 35%"],
    correctAnswer: "C) 30%"
  },
  {
    question: "When is TDS required to be deducted on online gaming winnings?",
    options: ["A) At the time of deposit", "B) At the end of the financial year", "C) At the time of withdrawal and at the end of the financial year", "D) Never"],
    correctAnswer: "C) At the time of withdrawal and at the end of the financial year"
  },
  {
    question: "How will these new tax rules impact online gamers?",
    options: ["A) Reduce the tax burden", "B) Increase the tax burden", "C) Have no impact on taxes", "D) Eliminate taxes on winnings"],
    correctAnswer: "B) Increase the tax burden"
  },
  {
    question: "What potential impact do these rules have on professional gamers and streamers?",
    options: ["A) Lower taxes and simpler financial management", "B) Higher taxes and more complex financial management", "C) No impact on professional gamers and streamers", "D) Exemption from taxes for professional gamers and streamers"],
    correctAnswer: "B) Higher taxes and more complex financial management"
  },
  {
    question: "How may esports organizations need to adjust to the new tax rules?",
    options: ["A) Reduce revenue streams", "B) Increase tax evasion", "C) Consider tax implications for revenue streams", "D) Ignore the rules entirely"],
    correctAnswer: "C) Consider tax implications for revenue streams"
  },
  {
    question: "What is the purpose of the Central Board of Direct Taxes (CBDT)?",
    options: ["A) To regulate online gaming", "B) To provide inputs for policy and planning of direct taxes", "C) To administer indirect tax laws", "D) To oversee foreign exchange regulations"],
    correctAnswer: "B) To provide inputs for policy and planning of direct taxes"
  },
  {
    question: "Which of the following is not a part of the Department of Revenue in India?",
    options: ["A) Central Board of Direct Taxes (CBDT)", "B) Central Board of Indirect Taxes and Customs (CBIC)", "C) Reserve Bank of India (RBI)", "D) Directorate General of Foreign Trade (DGFT)"],
    correctAnswer: "C) Reserve Bank of India (RBI)"
  },
  {
    question: "What is the main focus of the Global Maritime India Summit (GMIS) 2023?",
    options: ["a) Shipbuilding", "b) Port infrastructure", "c) Decarbonization", "d) Finance and insurance"],
    correctAnswer: "Answer: c) Decarbonization"
  },
  {
    question: "How does the World Bank define the 'blue economy'?",
    options: ["a) Sustainable use of land resources for economic growth", "b) Sustainable use of ocean resources for economic growth", "c) Sustainable use of air resources for economic growth", "d) Sustainable use of forest resources for economic growth"],
    correctAnswer: "Answer: b) Sustainable use of ocean resources for economic growth"
  },
  {
    question: "India’s coastline is approximately how long in kilometers?",
    options: ["a) 1,000 km", "b) 5,000 km", "c) 7,517 km", "d) 10,000 km"],
    correctAnswer: "Answer: c) 7,517 km"
  },
  {
    question: "What percentage of India’s trade by volume transits by sea?",
    options: ["a) 50%", "b) 75%", "c) 80%", "d) 95%"],
    correctAnswer: "Answer: d) 95%"
  },
  {
    question: "What is the goal of India’s Amrit Kaal Vision 2047 for port infrastructure?",
    options: ["a) To reduce the number of major ports", "b) To achieve carbon neutrality at all major ports", "c) To decrease coastal shipping", "d) To establish more non-major ports"],
    correctAnswer: "Answer: b) To achieve carbon neutrality at all major ports"
  },
  {
    question: "How much investment is planned for the Indian maritime sector over the next 25 years?",
    options: ["a) Rs 10-15 trillion", "b) Rs 50-60 trillion", "c) Rs 75-80 trillion", "d) Rs 100 trillion"],
    correctAnswer: "Answer: c) Rs 75-80 trillion"
  },
  {
    question: "How many major ports are included in the Amrit Kaal Vision 2047 plan for public-private partnerships (PPP)?",
    options: ["a) 5 major ports", "b) 8 major ports", "c) 10 major ports", "d) 12 major ports"],
    correctAnswer: "Answer: d) 12 major ports"
  },
  {
    question: "What is the primary goal of India’s maritime partnerships discussed at GMIS 2023?",
    options: ["a) To reduce maritime trade", "b) To promote Indian tourism", "c) To enhance global and national maritime partnerships", "d) To establish military alliances"],
    correctAnswer: "Answer: c) To enhance global and national maritime partnerships"
  },
  {
    question: "What is the focus of the 'Make in India' initiative in the maritime sector?",
    options: ["a) Promoting Indian cuisine", "b) Establishing maritime clusters", "c) Developing renewable energy sources", "d) Reducing carbon emissions"],
    correctAnswer: "Answer: b) Establishing maritime clusters"
  },
  {
    question: "What is the main challenge of weak oceanic governance in the Indian maritime sector?",
    options: ["a) Lack of skilled labor", "b) Lack of technological advancements", "c) Lack of comprehensive regulations and frameworks", "d) Lack of access to international markets"],
    correctAnswer: "Answer: c) Lack of comprehensive regulations and frameworks"
  },
  {
    question: "What is one of the primary sources of marine pollution in India?",
    options: ["a) Volcanic eruptions", "b) Agricultural runoff", "c) Solar radiation", "d) Geothermal activity"],
    correctAnswer: "Answer: b) Agricultural runoff"
  },
  {
    question: "What is the average turnaround time at Indian ports, according to the information provided?",
    options: ["a) 20 hours", "b) 40 hours", "c) 62.16 hours", "d) 80 hours"],
    correctAnswer: "Answer: c) 62.16 hours"
  },
  {
    question: "In comparison to Indian ports, which country has considerably better port performance?",
    options: ["a) Japan", "b) Australia", "c) Brazil", "d) Russia"],
    correctAnswer: "Answer: a) Japan"
  },
  {
    question: "What is a non-traditional security challenge facing the Indian maritime sector?",
    options: ["a) Cybersecurity threats", "b) Food shortages", "c) Conflict in neighboring waters", "d) Climate change"],
    correctAnswer: "Answer: c) Conflict in neighboring waters"
  },
  {
    question: "What has raised concerns about nuclear weapons in the Indian Ocean?",
    options: ["a) The development of Indian nuclear submarines", "b) The presence of Russian naval bases", "c) The growing operations of the Chinese navy", "d) The disarmament of regional powers"],
    correctAnswer: "Answer: c) The growing operations of the Chinese navy"
  },
  {
    question: "What is the main issue associated with Illegal, Unreported, and Unregulated (IUU) fishing?",
    options: ["a) Overfishing", "b) Lack of fishing technology", "c) Reduced demand for seafood", "d) Depletion of fish stocks"],
    correctAnswer: "Answer: d) Depletion of fish stocks"
  },
  {
    question: "Which initiative is aimed at revamping the Indian maritime sector by 2047?",
    options: ["a) Sagarmala Programme", "b) Sustainable Fishing Act", "c) Green Energy Initiative", "d) Indian Ocean Trade Agreement"],
    correctAnswer: "Answer: a) Sagarmala Programme"
  },
  {
    question: "What is the focus of the 'Harit Sagar Green Port guidelines'?",
    options: ["a) Reducing carbon emissions in the maritime sector", "b) Promoting sustainable fishing practices", "c) Enhancing cybersecurity in ports", "d) Developing marine tourism"],
    correctAnswer: "Answer: a) Reducing carbon emissions in the maritime sector"
  },
  {
    question: "What is the purpose of the 'National Logistics Portal (Marine)'?",
    options: ["a) To promote road transport", "b) To facilitate maritime trade logistics", "c) To regulate air cargo services", "d) To improve railway infrastructure"],
    correctAnswer: "Answer: b) To facilitate maritime trade logistics"
  },
  {
    question: "Which app is designed to assist in maritime navigation and information sharing?",
    options: ["a) My Shipmate", "b) Sea Explorer", "c) Sagar Setu app", "d) Ocean Tracker"],
    correctAnswer: "Answer: c) Sagar Setu app"
  },
  {
    question: "What legislation was enacted in 2021 to govern major ports in India?",
    options: ["a) Major Port Authorities Act, 2021", "b) Port Modernization Act, 2021", "c) Maritime Security Act, 2021", "d) Port Workers’ Rights Act, 2021"],
    correctAnswer: "Answer: a) Major Port Authorities Act, 2021"
  },
  {
    question: "Which act, passed in 2021, is related to Indian vessels?",
    options: ["a) Indian Vessels Act, 2021", "b) Indian Maritime Safety Act, 2021", "c) Indian Shipping and Trade Act, 2021", "d) Indian Coastal Security Act, 2021"],
    correctAnswer: "Answer: a) Indian Vessels Act, 2021"
  },
  {
    question: "Where is the International Container Transshipment Port planned in India?",
    options: ["a) Mumbai", "b) Chennai", "c) Kolkata", "d) Galathea Bay"],
    correctAnswer: "Answer: d) Galathea Bay"
  },
  {
    question: "How many multiple choice questions have been presented thus far?",
    options: ["a) 20", "b) 21", "c) 22", "d) 23"],
    correctAnswer: "Answer: b) 21"
  },
  {
    question: "What is the primary goal of India’s 'Sagarmala Programme'?",
    options: ["a) To promote maritime tourism", "b) To reduce the number of major ports", "c) To enhance coastal shipping", "d) To develop port infrastructure"],
    correctAnswer: "Answer: d) To develop port infrastructure"
  },
  {
    question: "What is the focus of the 'Decarbonization in the maritime sector' initiative?",
    options: ["a) Reducing carbon emissions in the maritime sector", "b) Promoting the use of diesel engines", "c) Expanding coal exports", "d) Increasing air travel"],
    correctAnswer: "Answer: a) Reducing carbon emissions in the maritime sector"
  },
  {
    question: "What is the main objective of the 'National Logistics Portal (Marine)'?",
    options: ["a) To improve road transportation", "b) To facilitate railway logistics", "c) To enhance air cargo services", "d) To streamline maritime trade logistics"],
    correctAnswer: "Answer: d) To streamline maritime trade logistics"
  },
  {
    question: "Which app is designed to assist in maritime navigation and information sharing?",
    options: ["a) My Shipmate", "b) Sea Explorer", "c) Sagar Setu app", "d) Ocean Tracker"],
    correctAnswer: "Answer: c) Sagar Setu app"
  },
  {
    question: "What legislation was enacted in 2021 to govern major ports in India?",
    options: ["a) Major Port Authorities Act, 2021", "b) Port Modernization Act, 2021", "c) Maritime Security Act, 2021", "d) Port Workers’ Rights Act, 2021"],
    correctAnswer: "Answer: a) Major Port Authorities Act, 2021"
  },
  {
    question: "Which act, passed in 2021, is related to Indian vessels?",
    options: ["a) Indian Vessels Act, 2021", "b) Indian Maritime Safety Act, 2021", "c) Indian Shipping and Trade Act, 2021", "d) Indian Coastal Security Act, 2021"],
    correctAnswer: "Answer: a) Indian Vessels Act, 2021"
  },
  {
    question: "What organization has declared 2023 as the International Year of Millets?",
    options: ["A) World Health Organization", "B) Food and Agriculture Organization of the United Nations (FAO)", "C) United Nations Educational, Scientific and Cultural Organization (UNESCO)", "D) International Food Policy Research Institute (IFPRI)"],
    correctAnswer: "B) Food and Agriculture Organization of the United Nations (FAO)"
  },
  {
    question: "Which of the following is NOT a major millet grown in India?",
    options: ["A) Sorghum", "B) Pearl millet", "C) Finger millet", "D) Foxtail millet"],
    correctAnswer: "D) Foxtail millet"
  },
  {
    question: "What makes millets suitable for cultivation in areas with unpredictable weather patterns and water scarcity?",
    options: ["A) They are naturally resistant to pests", "B) They require less water and are drought-resistant", "C) They have a long growing season", "D) They can grow in flooded conditions"],
    correctAnswer: "B) They require less water and are drought-resistant"
  },
  {
    question: "Which of the following statements about millets is true?",
    options: ["A) They are a poor source of fiber and protein", "B) They contain gluten, making them unsuitable for people with celiac disease", "C) They are primarily grown using modern industrial farming practices", "D) They are naturally gluten-free"],
    correctAnswer: "D) They are naturally gluten-free"
  },
  {
    question: "What is the primary reason for the decline in the area under millet cultivation in India?",
    options: ["A) High production costs", "B) Lack of government support", "C) Low yields and labor-intensive processing", "D) Lack of consumer demand"],
    correctAnswer: "C) Low yields and labor-intensive processing"
  },
  {
    question: "Which country is the largest producer of millets in the world?",
    options: ["A) China", "B) Nigeria", "C) India", "D) United States"],
    correctAnswer: "C) India"
  },
  {
    question: "What percentage of global millet production is accounted for by India, Nigeria, and China combined?",
    options: ["A) 25%", "B) 40%", "C) 55%", "D) 70%"],
    correctAnswer: "C) 55%"
  },
  {
    question: "Which government initiative was launched in 2007 to promote the production and consumption of millets in India?",
    options: ["A) National Organic Farming Mission (NOFM)", "B) National Millets Mission (NMM)", "C) Green Revolution Initiative (GRI)", "D) Millet Development Scheme (MDS)"],
    correctAnswer: "B) National Millets Mission (NMM)"
  },
  {
    question: "What is the primary purpose of the Price Support Scheme (PSS) related to millet cultivation?",
    options: ["A) To provide free millet seeds to farmers", "B) To offer financial assistance to farmers for millet cultivation", "C) To establish millet processing plants", "D) To promote millet exports"],
    correctAnswer: "B) To offer financial assistance to farmers for millet cultivation"
  },
  {
    question: "Which factor is NOT mentioned as a constraint to increased millet cultivation and consumption?",
    options: ["A) Lack of government support", "B) Perceived unpleasant taste of millets", "C) Competition from rice and wheat", "D) High yields of millet crops"],
    correctAnswer: "D) High yields of millet crops"
  },
  {
    question: "What is the primary goal of promoting millets in the Public Distribution System (PDS)?",
    options: ["A) Making millets more expensive", "B) Making millets less accessible", "C) Making millets accessible and affordable to the masses", "D) Restricting millet consumption"],
    correctAnswer: "C) Making millets accessible and affordable to the masses"
  },
  {
    question: "What is the primary objective of promoting organic farming of millets?",
    options: ["A) To increase millet yields", "B) To reduce the availability of millets in the market", "C) To promote sustainable and chemical-free millet production", "D) To encourage the use of synthetic pesticides"],
    correctAnswer: "C) To promote sustainable and chemical-free millet production"
  },
  {
    question: "Which type of millet is commonly known as 'Finger millet'?",
    options: ["A) Jowar", "B) Sama", "C) Bajra", "D) Ragi"],
    correctAnswer: "D) Ragi"
  },
  {
    question: "What percentage of India’s production of millets accounts for the global production?",
    options: ["A) 10%", "B) 20%", "C) 30%", "D) 40%"],
    correctAnswer: "B) 20%"
  },
  {
    question: "Which country has seen a dramatic increase in millet production in recent years?",
    options: ["A) India", "B) Nigeria", "C) China", "D) Africa"],
    correctAnswer: "B) Nigeria"
  },
  {
    question: "Which millet is NOT considered a major millet in India?",
    options: ["A) Sorghum", "B) Pearl millet", "C) Finger millet", "D) Proso millet"],
    correctAnswer: "D) Proso millet"
  },
  {
    question: "Which government initiative focuses on the development of value-added millet-based products?",
    options: ["A) National Millets Mission (NMM)", "B) Price Support Scheme (PSS)", "C) Development of Value-Added Products Initiative (DVAPI)", "D) Promotion of Organic Farming (POF)"],
    correctAnswer: "C) Development of Value-Added Products Initiative (DVAPI)"
  },
  {
    question: "What is the primary factor contributing to low millet consumption in India?",
    options: ["A) High consumer demand", "B) Lack of government support", "C) Limited availability in retail markets", "D) Low nutritional value"],
    correctAnswer: "C) Limited availability in retail markets"
  },
  {
    question: "What is the primary reason for the decline in the area under millet cultivation in India?",
    options: ["A) High production costs", "B) Lack of government support", "C) Low yields and labor-intensive processing", "D) Lack of consumer demand"],
    correctAnswer: "C) Low yields and labor-intensive processing"
  },
  {
    question: "Which country is the largest producer of millets in the world?",
    options: ["A) China", "B) Nigeria", "C) India", "D) United States"],
    correctAnswer: "C) India"
  },
  {
    question: "What percentage of global millet production is accounted for by India, Nigeria, and China combined?",
    options: ["A) 25%", "B) 40%", "C) 55%", "D) 70%"],
    correctAnswer: "C) 55%"
  },
  {
    question: "Which government initiative was launched in 2007 to promote the production and consumption of millets in India?",
    options: ["A) National Organic Farming Mission (NOFM)", "B) National Millets Mission (NMM)", "C) Green Revolution Initiative (GRI)", "D) Millet Development Scheme (MDS)"],
    correctAnswer: "B) National Millets Mission (NMM)"
  },
  {
    question: "What is the primary purpose of the Price Support Scheme (PSS) related to millet cultivation?",
    options: ["A) To provide free millet seeds to farmers", "B) To offer financial assistance to farmers for millet cultivation", "C) To establish millet processing plants", "D) To promote millet exports"],
    correctAnswer: "B) To offer financial assistance to farmers for millet cultivation"
  },
  {
    question: "Which factor is NOT mentioned as a constraint to increased millet cultivation and consumption?",
    options: ["A) Lack of government support", "B) Perceived unpleasant taste of millets", "C) Competition from rice and wheat", "D) High yields of millet crops"],
    correctAnswer: "D) High yields of millet crops"
  },
  {
    question: "What is the primary goal of promoting millets in the Public Distribution System (PDS)?",
    options: ["A) Making millets more expensive", "B) Making millets less accessible", "C) Making millets accessible and affordable to the masses", "D) Restricting millet consumption"],
    correctAnswer: "C) Making millets accessible and affordable to the masses"
  },
  {
    question: "What is the primary objective of promoting organic farming of millets?",
    options: ["A) To increase millet yields", "B) To reduce the availability of millets in the market", "C) To promote sustainable and chemical-free millet production", "D) To encourage the use of synthetic pesticides"],
    correctAnswer: "C) To promote sustainable and chemical-free millet production"
  },
  {
    question: "Which type of millet is commonly known as 'Finger millet'?",
    options: ["A) Jowar", "B) Sama", "C) Bajra", "D) Ragi"],
    correctAnswer: "D) Ragi"
  },
  {
    question: "What percentage of India’s production of millets accounts for the global production?",
    options: ["A) 10%", "B) 20%", "C) 30%", "D) 40%"],
    correctAnswer: "B) 20%"
  },
  {
    question: "Which country has seen a dramatic increase in millet production in recent years?",
    options: ["A) India", "B) Nigeria", "C) China", "D) Africa"],
    correctAnswer: "B) Nigeria"
  },
  {
    question: "Which millet is NOT considered a major millet in India?",
    options: ["A) Sorghum", "B) Pearl millet", "C) Finger millet", "D) Proso millet"],
    correctAnswer: "D) Proso millet"
  },
  {
    question: "Which government initiative focuses on the development of value-added millet-based products?",
    options: ["A) National Millets Mission (NMM)", "B) Price Support Scheme (PSS)", "C) Development of Value-Added Products Initiative (DVAPI)", "D) Promotion of Organic Farming (POF)"],
    correctAnswer: "C) Development of Value-Added Products Initiative (DVAPI)"
  },
  {
    question: "What is the primary factor contributing to low millet consumption in India?",
    options: ["A) High consumer demand", "B) Lack of government support", "C) Limited availability in retail markets", "D) Low nutritional value"],
    correctAnswer: "C) Limited availability in retail markets"
  },
  {
    question: "What does GHI stand for in the context of the Global Hunger Index?",
    options: ["Global Health Index", "Government Hunger Indicator", "Global Hunger Index", "Gross Hunger Incidence"],
    correctAnswer: "Global Hunger Index"
  },
  {
    question: "Which organizations publish the Global Hunger Index annually?",
    options: ["UNICEF and WHO", "Concern Worldwide and Welthungerhilfe", "World Bank and IMF", "Red Cross and Oxfam"],
    correctAnswer: "Concern Worldwide and Welthungerhilfe"
  },
  {
    question: "What does a GHI score of 0 indicate?",
    options: ["Severe hunger", "No hunger", "Moderate hunger", "Extreme hunger"],
    correctAnswer: "No hunger"
  },
  {
    question: "What is the GHI score for India in 2023?",
    options: ["29.2", "28.7", "35.5", "38.4"],
    correctAnswer: "28.7"
  },
  {
    question: "How is child stunting defined in the GHI?",
    options: ["Low weight for height", "Low height for age", "Low weight for age", "Low BMI for age"],
    correctAnswer: "Low height for age"
  },
  {
    question: "Which neighboring country scored better than India in the GHI 2023?",
    options: ["Pakistan", "Bangladesh", "Nepal", "Sri Lanka"],
    correctAnswer: "Bangladesh"
  },
  {
    question: "What is the primary indicator for Sustainable Development Goal 2.1?",
    options: ["Child stunting", "Child wasting", "Undernourishment", "Child mortality"],
    correctAnswer: "Undernourishment"
  },
  {
    question: "Which factor is not included in the calculation of the GHI score?",
    options: ["Child mortality", "Child wasting", "Adult obesity", "Child stunting"],
    correctAnswer: "Adult obesity"
  },
  {
    question: "What is the GHI 2023 score for the world?",
    options: ["10.5", "18.3", "25.9", "30.7"],
    correctAnswer: "18.3"
  },
  {
    question: "What are some of the global crises attributed to the stagnation in GHI progress?",
    options: ["Climate change, conflicts, economic shocks", "Political instability, currency devaluation", "Technological disruption, trade disputes", "Health epidemics, social media influence"],
    correctAnswer: "Climate change, conflicts, economic shocks"
  },
  {
    question: "What percentage of the population facing severe food shortages defines a famine according to the UN?",
    options: ["At least 5%", "At least 10%", "At least 20%", "At least 30%"],
    correctAnswer: "At least 20%"
  },
  {
    question: "What is 'hidden hunger'?",
    options: ["Hunger that is concealed from public view", "A severe form of acute malnutrition", "Micronutrient deficiency", "Starvation due to food scarcity"],
    correctAnswer: "Micronutrient deficiency"
  },
  {
    question: "What are some of the causes of hidden hunger?",
    options: ["Overeating", "Infections and illnesses", "Lack of exercise", "Genetic factors"],
    correctAnswer: "Infections and illnesses"
  },
  {
    question: "Which government initiative in India focuses on nutrition and child development?",
    options: ["Swachh Bharat Abhiyan", "POSHAN Abhiyan (National Nutrition Mission)", "Make in India", "Digital India"],
    correctAnswer: "POSHAN Abhiyan (National Nutrition Mission)"
  },
  {
    question: "Which program provides mid-day meals to school children in India?",
    options: ["PM Garib Kalyan Yojna", "Integrated Child Development Services (ICDS) Scheme", "National Food Security Act, 2013", "Mid-day Meal (MDM) scheme"],
    correctAnswer: "Mid-day Meal (MDM) scheme"
  },
  {
    question: "What is the focus of the Eat Right India Movement?",
    options: ["Promoting physical fitness", "Encouraging organic farming", "Raising awareness about balanced diets and nutrition", "Reducing food waste"],
    correctAnswer: "Raising awareness about balanced diets and nutrition"
  },
  {
    question: "How can information technology be used in addressing hunger?",
    options: ["Implementing mobile nutritional clinics", "Enhancing transparency in food distribution", "Reducing food wastage", "Monitoring the temperature of food storage facilities"],
    correctAnswer: "Enhancing transparency in food distribution"
  },
  {
    question: "Which government program aims to improve the nutritional status of pregnant and lactating women in India?",
    options: ["Pradhan Mantri Matru Vandana Yojana", "Mission Indradhanush", "PM Garib Kalyan Yojna", "National Food Security Act, 2013"],
    correctAnswer: "Pradhan Mantri Matru Vandana Yojana"
  },
  {
    question: "What is one way to tackle hunger and malnutrition through technology, according to the information?",
    options: ["Implement mobile nutritional clinics", "Promote organic farming", "Improve internet connectivity in rural areas", "Develop more food delivery apps"],
    correctAnswer: "Implement mobile nutritional clinics"
  },
  {
    question: "Which government initiative focuses on improving the distribution of subsidized food to economically disadvantaged populations?",
    options: ["POSHAN Abhiyan (National Nutrition Mission)", "Eat Right India Movement", "Pradhan Mantri Matru Vandana Yojana", "Public Distribution System (PDS) Enhancement"],
    correctAnswer: "Public Distribution System (PDS) Enhancement"
  },
  {
    question: "What is the key argument made by the Indian government in response to the GHI 2023 report?",
    options: ["India’s hunger situation is much worse than reported", "The GHI methodology is flawed", "India’s child wasting rate is the lowest in the world", "The government needs more funding to address hunger"],
    correctAnswer: "The GHI methodology is flawed"
  },
  {
    question: "Which indicator is criticized by the Indian government for being based on a small sample size opinion poll?",
    options: ["Child stunting", "Child wasting", "Child mortality", "Proportion of Undernourished Population"],
    correctAnswer: "Proportion of Undernourished Population"
  },
  {
    question: "According to the Indian government, what are some of the complex factors that contribute to indicators like stunting and wasting?",
    options: ["Climate change and conflicts", "Sanitation, genetics, environment, and food utilization", "The quality of healthcare services", "Government policies"],
    correctAnswer: "Sanitation, genetics, environment, and food utilization"
  },
  {
    question: "Which factor is not mentioned as a contributor to hunger in India in the information?",
    options: ["Socioeconomic Disparities and Poverty", "Gender Inequality and Nutritional Disparities", "Lack of access to clean water", "Climate Change and Environmental Stressors"],
    correctAnswer: "Lack of access to clean water"
  },
  {
    question: "What is the 'Way Forward' recommendation related to the Public Distribution System (PDS)?",
    options: ["Abolish the PDS to reduce government expenses", "Enhance transparency, reliability, and affordability of nutritious food", "Create more government jobs", "Establish more food banks"],
    correctAnswer: "Enhance transparency, reliability, and affordability of nutritious food"
  },
  {
    question: "Which Sustainable Development Goal (SDG) focuses on ensuring access to safe, nutritious, and sufficient food for all?",
    options: ["SDG 1.1", "SDG 2.1", "SDG 3.2", "SDG 4.3"],
    correctAnswer: "SDG 2.1"
  },
  {
    question: "What is the prevalence of child stunting in India, according to the information?",
    options: ["7.2%", "16.6%", "18.7%", "35.5%"],
    correctAnswer: "35.5%"
  },
  {
    question: "Which neighboring country scored the highest GHI rank in 2023?",
    options: ["Pakistan", "Bangladesh", "Nepal", "Sri Lanka"],
    correctAnswer: "Sri Lanka"
  },
  {
    question: "What is the GHI score for India in 2000?",
    options: ["38.4", "29.2", "35.5", "28.7"],
    correctAnswer: "38.4"
  },
  {
    question: "Which of the following is not one of the four indicators used to calculate the GHI score?",
    options: ["Child mortality", "Child wasting", "Adult obesity", "Undernourishment"],
    correctAnswer: "Adult obesity"
  },
  {
    question: "What does the Indian government argue regarding child mortality in relation to hunger?",
    options: ["Child mortality is solely due to hunger", "Child mortality is unrelated to hunger", "Other factors contribute to child mortality", "Child mortality is decreasing in India"],
    correctAnswer: "Other factors contribute to child mortality"
  },
  {
    question: "What is the GHI 2023 score for Yemen?",
    options: ["30.0", "40.2", "45.8", "Not mentioned in the information"],
    correctAnswer: "40.2"
  },
  {
    question: "Which Indian initiative focuses on improving maternal and child health?",
    options: ["Pradhan Mantri Matru Vandana Yojana", "National Food Security Act, 2013", "POSHAN Abhiyan (National Nutrition Mission)", "PM Garib Kalyan Yojna"],
    correctAnswer: "Pradhan Mantri Matru Vandana Yojana"
  },
  {
    question: "What is the GHI 2023 score for Belarus?",
    options: ["5.4", "18.3", "30.9", "60.5"],
    correctAnswer: "5.4"
  },
  {
    question: "What percentage of child wasting is reported for India in the GHI 2023?",
    options: ["7.2%", "18.7%", "3.1%", "35.5%"],
    correctAnswer: "18.7%"
  },
  {
    question: "Which organization is responsible for publishing the GHI report?",
    options: ["UNICEF", "Welthungerhilfe", "Concern Worldwide", "Oxfam"],
    correctAnswer: "Concern Worldwide"
  },
  {
    question: "What is the GHI 2023 score for Central African Republic?",
    options: ["18.3", "35.5", "60.0", "Not mentioned in the information"],
    correctAnswer: "60.0"
  },
  {
    question: "Which initiative aims to improve food distribution to economically disadvantaged populations in India?",
    options: ["POSHAN Abhiyan (National Nutrition Mission)", "Pradhan Mantri Matru Vandana Yojana", "Public Distribution System (PDS) Enhancement", "Mission Indradhanush"],
    correctAnswer: "Public Distribution System (PDS) Enhancement"
  },
  {
    question: "Which indicator is an outcome of various complex factors, according to the Indian government?",
    options: ["Child mortality", "Child wasting", "Child stunting", "Undernourishment"],
    correctAnswer: "Child stunting"
  },
  {
    question: "What is the GHI 2023 score for China?",
    options: ["20.5", "10.0", "50.7", "Not mentioned in the information"],
    correctAnswer: "20.5"
  },
  {
    question: "What is the primary focus of the National Food Security Act, 2013, in India?",
    options: ["Improving maternal health", "Enhancing national security", "Ensuring food security for economically disadvantaged populations", "Promoting organic farming"],
    correctAnswer: "Ensuring food security for economically disadvantaged populations"
  },
  {
    question: "Which Sustainable Development Goal (SDG) aims to end all forms of malnutrition?",
    options: ["SDG 1.1", "SDG 2.2", "SDG 3.2", "SDG 4.3"],
    correctAnswer: "SDG 2.2"
  },
  {
    question: "Which factor is mentioned as a contributor to hunger in India due to inefficient agricultural practices?",
    options: ["Poor internet connectivity", "Crop yields and post-harvest losses", "Lack of government funding", "Excessive food imports"],
    correctAnswer: "Crop yields and post-harvest losses"
  },
  {
    question: "What is the GHI 2023 score for Madagascar?",
    options: ["18.3", "35.5", "60.0", "Not mentioned in the information"],
    correctAnswer: "Not mentioned in the information"
  },
  {
    question: "What is the purpose of the Mission Indradhanush initiative in India?",
    options: ["Promoting digital literacy", "Immunizing children and pregnant women", "Enhancing agricultural practices", "Ensuring clean drinking water access"],
    correctAnswer: "Immunizing children and pregnant women"
  },
  {
    question: "What is the focus of the 'Eat Right India Movement'?",
    options: ["Promoting a vegetarian diet", "Encouraging organic farming", "Raising awareness about balanced diets and nutrition", "Reducing food exports"],
    correctAnswer: "Raising awareness about balanced diets and nutrition"
  },

      
      
    // Add more questions 
];

let currentQuestionIndex = 0;
let score = 0;
let quizEnded = false;

const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const totalQuestionsContainer = document.getElementById("total-questions-container"); // Add this line

// Function to load question and options
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <div id="options-container">
            ${shuffleArray(currentQuestion.options).map(option => `<button class="option">${option}</button>`).join('')}
        </div>
    `;
    
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach(button => {
        button.addEventListener("click", () => {
            checkAnswer(button.textContent);
        });
    });
}

// Function to check the answer
function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        resultContainer.innerHTML = "Correct!";
        score++;
    } else {
        resultContainer.innerHTML = `Wrong! The correct answer is ${correctAnswer}.`;
    }

    // next question
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Load next question
        loadQuestion();
    } else {
        // Quiz is finished
        quizEnded = true;
        questionContainer.innerHTML = "<h2>Quiz Completed</h2>";
        resultContainer.innerHTML = `Your Score: ${score} out of ${questions.length}.`;
    }
}
// Display total number of questions
totalQuestionsContainer.innerHTML = `Total Questions: ${questions.length}`;
// Start the quiz 
shuffleArray(questions);
loadQuestion();
