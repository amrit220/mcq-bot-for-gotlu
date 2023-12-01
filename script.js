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
  {
    question: "What is the primary reason for the death sentences imposed on eight former Indian Navy personnel in Qatar?",
    options: ["Terrorism charges", "Espionage charges", "Drug trafficking", "Kidnapping"],
    correctAnswer: "Espionage charges"
  },
  {
    question: "Which company were the accused individuals working for in Doha?",
    options: ["Al Jazeera", "Al Dahra", "Qatar Petroleum", "Qatar Airways"],
    correctAnswer: "Al Dahra"
  },
  {
    question: "What type of submarines is the company Dahra Global Technologies and Consultant Services linked to?",
    options: ["Russian-origin submarines", "Chinese-origin submarines", "Italian-origin submarines", "American-origin submarines"],
    correctAnswer: "Italian-origin submarines"
  },
  {
    question: "What is the estimated annual remittance from the Indian expatriate community in Qatar to India?",
    options: ["$500 million", "$750 million", "$1 billion", "$1.5 billion"],
    correctAnswer: "$750 million"
  },
  {
    question: "Why has the Indian Ministry of External Affairs expressed deep shock and concern?",
    options: ["Economic downturn in Qatar", "Death sentences imposed on Indian citizens", "Natural disaster in Qatar", "Political unrest in India"],
    correctAnswer: "Death sentences imposed on Indian citizens"
  },
  {
    question: "What is the strategic and economic significance of the India-Qatar relationship?",
    options: ["Cultural exchange", "Military alliances", "Liquefied natural gas (LNG) imports", "Scientific collaboration"],
    correctAnswer: "Liquefied natural gas (LNG) imports"
  },
  {
    question: "When did the Prime Minister of India visit Doha?",
    options: ["2010", "2012", "2016", "2018"],
    correctAnswer: "2016"
  },
  {
    question: "How can India use diplomatic pressure to address the situation?",
    options: ["Economic sanctions", "Military intervention", "Direct diplomatic negotiations", "Cyberattacks"],
    correctAnswer: "Direct diplomatic negotiations"
  },
  {
    question: "What agreement signed in 2015 could be utilized by India to transfer convicted prisoners?",
    options: ["Qatar-India Defense Pact", "Extradition Treaty", "Prisoner Transfer Agreement", "Non-Aggression Pact"],
    correctAnswer: "Prisoner Transfer Agreement"
  },
  {
    question: "What role can NGOs and civil society play in the case?",
    options: ["Provide financial support", "Raise the issue globally", "Take legal action in Qatar", "Supply humanitarian aid"],
    correctAnswer: "Raise the issue globally"
  },
  {
    question: "What is the first step for the individuals sentenced to death within the Qatari legal system?",
    options: ["Seek asylum in Qatar", "File an appeal", "Request a pardon", "Go on a hunger strike"],
    correctAnswer: "File an appeal"
  },
  {
    question: "In which international court can India invoke jurisdiction if due procedures are not followed?",
    options: ["International Criminal Court (ICC)", "International Court of Justice (ICJ)", "International Arbitration Court", "European Court of Human Rights"],
    correctAnswer: "International Court of Justice (ICJ)"
  },
  {
    question: "In the Kulbhushan Jadhav case, who was the opposing party?",
    options: ["China", "Afghanistan", "Pakistan", "Bangladesh"],
    correctAnswer: "Pakistan"
  },
  {
    question: "Which case involved the 'Right of Passage over Indian Territory'?",
    options: ["Bangladesh v. India", "China v. India", "Portugal v. India", "Sri Lanka v. India"],
    correctAnswer: "Portugal v. India"
  },
  {
    question: "What was the subject of the case 'Obligations concerning Negotiations relating to Cessation of the Nuclear Arms Race and to Nuclear Disarmament'?",
    options: ["Climate change", "Nuclear disarmament", "Human rights violations", "Maritime disputes"],
    correctAnswer: "Nuclear disarmament"
  },
  {
    question: "When did the trials in the current case take place?",
    options: ["August 2022", "March and June 2023", "January 2023", "October 2022"],
    correctAnswer: "March and June 2023"
  },
  {
    question: "How many Indian nationals are sentenced to death in the espionage case?",
    options: ["5", "8", "10", "12"],
    correctAnswer: "8"
  },
  {
    question: "What reason is cited by authorities for maintaining secrecy around the case?",
    options: ["National security", "Lack of evidence", "Political instability", "Media censorship"],
    correctAnswer: "National security"
  },
  {
    question: "What sector is the company Dahra Global Technologies and Consultant Services involved in?",
    options: ["Information technology", "Agriculture", "Defense", "Tourism"],
    correctAnswer: "Defense"
  },
  {
    question: "What can India do if the appeal process is missing in Qatar?",
    options: ["Accept the verdict", "Invoke diplomatic immunity", "Seek intervention from the UN", "File a complaint with the International Criminal Court"],
    correctAnswer: "Seek intervention from the UN"
  },
  {
    question: "What is the primary industry in which Indians in Qatar are highly respected?",
    options: ["Construction", "Oil and gas", "Information technology", "Hospitality"],
    correctAnswer: "Oil and gas"
  },
  {
    question: "What is the primary source of tension in the India-Qatar relationship due to this case?",
    options: ["Economic disputes", "Military conflicts", "Diplomatic breakdown", "Death sentences"],
    correctAnswer: "Death sentences"
  },
  {
    question: "How many high-level meetings have the Prime Minister of India and the Emir of Qatar engaged in?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2"
  },
  {
    question: "What is the primary contribution of the Indian expatriate community in Qatar to the Indian economy?",
    options: ["Tourism revenue", "Remittances", "Foreign aid", "Technology exports"],
    correctAnswer: "Remittances"
  },
  {
    question: "What is the estimated number of Indians in Qatar?",
    options: ["500,000", "700,000", "1 million", "1.5 million"],
    correctAnswer: "700,000"
  },
  {
    question: "What sector is Qatar a significant supplier of to India?",
    options: ["Information technology", "Agriculture", "Liquefied natural gas (LNG)", "Tourism"],
    correctAnswer: "Liquefied natural gas (LNG)"
  },
  {
    question: "How has India reacted to the death sentences?",
    options: ["Celebration", "Shock and concern", "Indifference", "Approval"],
    correctAnswer: "Shock and concern"
  },
  {
    question: "What is the role of NGOs and civil society in addressing the situation?",
    options: ["Economic support", "Legal representation", "Raising the issue globally", "Providing humanitarian aid"],
    correctAnswer: "Raising the issue globally"
  },
  {
    question: "In which month were the individuals arrested in Qatar?",
    options: ["March", "June", "August", "October"],
    correctAnswer: "August"
  },
  {
    question: "What is the primary reason cited by Qatari authorities for not disclosing specific charges?",
    options: ["Lack of evidence", "National security", "Diplomatic immunity", "Media censorship"],
    correctAnswer: "National security"
  },
  {
    question: "What is the main purpose of the Washington Declaration signed by South Korea and the U.S.?",
    options: ["Strengthening trade relations", "Reinforcing the strategic partnership against North Korean aggression", "Enhancing cultural exchange", "Promoting environmental cooperation"],
    correctAnswer: "Reinforcing the strategic partnership against North Korean aggression"
  },
  {
    question: "What event prompted the signing of the Washington Declaration?",
    options: ["A successful North Korean summit", "North Korea’s successful launch of a solid-fuel ICBM", "South Korea’s request for economic aid", "The opening of a new embassy in Washington, D.C."],
    correctAnswer: "North Korea’s successful launch of a solid-fuel ICBM"
  },
  {
    question: "What does the agreement propose in terms of American military presence in the Korean peninsula?",
    options: ["Deployment of a nuclear ballistic missile defense system", "Deployment of American troops", "Deployment of an American nuclear ballistic submarine", "Withdrawal of all American forces"],
    correctAnswer: "Deployment of an American nuclear ballistic submarine"
  },
  {
    question: "What is the role of the nuclear consultative group mentioned in the agreement?",
    options: ["To oversee South Korea’s nuclear program", "To provide intelligence to North Korea", "To advise on nuclear deterrence strategies", "To promote nuclear disarmament"],
    correctAnswer: "To advise on nuclear deterrence strategies"
  },
  {
    question: "Why is South Korea hesitant to develop its own nuclear capabilities?",
    options: ["Concerns about controlling global nuclear arms production", "Lack of financial resources", "Opposition from North Korea", "Pressure from China"],
    correctAnswer: "Concerns about controlling global nuclear arms production"
  },
  {
    question: "What is South Korea’s stance on the Non-Proliferation Treaty (NPT)?",
    options: ["South Korea has withdrawn from the NPT", "South Korea is a vocal supporter of the NPT", "South Korea is neutral regarding the NPT", "South Korea is actively violating the NPT"],
    correctAnswer: "South Korea is a vocal supporter of the NPT"
  },
  {
    question: "Why does the U.S. oppose South Korea developing its own nuclear arsenal?",
    options: ["Concerns about North Korean retaliation", "Fear of a regional nuclear arms race", "The U.S. lacks the technology to help South Korea", "Support for North Korea’s nuclear ambitions"],
    correctAnswer: "Fear of a regional nuclear arms race"
  },
  {
    question: "What is the larger goal of the U.S. regarding non-proliferation?",
    options: ["To promote the development of nuclear weapons", "To reduce global nuclear arms production", "To encourage all nations to develop their nuclear capabilities", "To support North Korea’s nuclear program"],
    correctAnswer: "To reduce global nuclear arms production"
  },
  {
    question: "Who has criticized the Washington Declaration?",
    options: ["South Korea and North Korea", "China and North Korea", "South Korea and the U.S.", "Russia and China"],
    correctAnswer: "China and North Korea"
  },
  {
    question: "What is the South Korean public’s opinion on U.S. support as mentioned in the text?",
    options: ["They are overwhelmingly supportive of U.S. assistance", "They are skeptical about U.S. support", "They are indifferent to U.S. support", "They are actively opposing U.S. involvement"],
    correctAnswer: "They are skeptical about U.S. support"
  },
  {
    question: "What do a majority of the South Korean public want to do as a deterrence measure?",
    options: ["Strengthen their economic ties with North Korea", "Form an alliance with China", "Build their own nuclear weapons", "Seek assistance from the United Nations"],
    correctAnswer: "Build their own nuclear weapons"
  },
  {
    question: "What is the main concern of the U.S. regarding South Korea’s nuclear ambitions?",
    options: ["The U.S. fears North Korea will attack South Korea", "The U.S. wants to control South Korea’s military entirely", "The U.S. is concerned about regional nuclear instability", "The U.S. supports South Korea’s nuclear ambitions"],
    correctAnswer: "The U.S. is concerned about regional nuclear instability"
  },
  {
    question: "Which country does the Washington Declaration primarily aim to deter against?",
    options: ["Russia", "China", "South Korea", "North Korea"],
    correctAnswer: "North Korea"
  },
  {
    question: "What type of missile did North Korea successfully launch, leading to the agreement?",
    options: ["Hwasong-8 solid-fuel ICBM", "Tomahawk cruise missile", "Scud missile", "Patriot missile"],
    correctAnswer: "Hwasong-8 solid-fuel ICBM"
  },
  {
    question: "What role does the nuclear ballistic submarine play in the agreement?",
    options: ["It serves as a communication platform", "It is a nuclear missile launch platform", "It provides medical aid to South Korea", "It conducts scientific research in the region"],
    correctAnswer: "It is a nuclear missile launch platform"
  },
  {
    question: "What does the South Korean public’s skepticism about U.S. support imply?",
    options: ["They believe the U.S. is fully committed to defending South Korea", "They doubt the effectiveness of U.S. support", "They have complete trust in North Korea’s intentions", "They are actively campaigning for U.S. withdrawal"],
    correctAnswer: "They doubt the effectiveness of U.S. support"
  },
  {
    question: "What is the primary concern behind not allowing South Korea to develop its own nuclear arsenal?",
    options: ["Control over global nuclear arms production", "North Korean support for South Korea’s nuclear ambitions", "Strengthening regional alliances", "Enhancing South Korean economic growth"],
    correctAnswer: "Control over global nuclear arms production"
  },
  {
    question: "What international treaty is South Korea committed to in the context of nuclear non-proliferation?",
    options: ["The Geneva Convention", "The Paris Agreement", "The Non-Proliferation Treaty (NPT)", "The Strategic Arms Reduction Treaty (START)"],
    correctAnswer: "The Non-Proliferation Treaty (NPT)"
  },
  {
    question: "How have China and North Korea reacted to the Washington Declaration?",
    options: ["They fully support the agreement", "They have not expressed any opinion on the matter", "They have criticized the agreement", "They have signed a similar agreement with South Korea"],
    correctAnswer: "They have criticized the agreement"
  },
  {
    question: "What is the majority opinion among the South Korean public regarding nuclear weapons?",
    options: ["They are opposed to any form of nuclear weapons", "They support North Korea’s nuclear weapons program", "They want to build their own nuclear weapons", "They believe nuclear weapons should be banned worldwide"],
    correctAnswer: "They want to build their own nuclear weapons"
  },
  {
    question: "When was the most recent UN water conference held?",
    options: ["1977", "2023", "1990", "2010"],
    correctAnswer: "2023"
  },
  {
    question: "What is the primary goal of the UN 2023 Water Conference?",
    options: ["Solving global water challenges", "Reducing greenhouse gas emissions", "Promoting renewable energy", "Enhancing healthcare infrastructure"],
    correctAnswer: "Solving global water challenges"
  },
  {
    question: "What is the theme of the UN 2023 Water Conference?",
    options: ["United for Climate Action", "Our Watershed Moment", "Building Sustainable Cities", "Sustainable Agriculture"],
    correctAnswer: "Our Watershed Moment"
  },
  {
    question: "Which organization hosted the UN 2023 Water Conference?",
    options: ["UNESCO", "World Meteorological Organization", "United Nations", "World Bank"],
    correctAnswer: "United Nations"
  },
  {
    question: "What did the 1977 water conference in Mar Del Plata, Argentina, result in?",
    options: ["A global action plan for clean water", "A decrease in water scarcity", "A focus on renewable energy", "An increase in industrialization"],
    correctAnswer: "A global action plan for clean water"
  },
  {
    question: "What was the outcome of the UN 2023 Water Conference regarding binding commitments?",
    options: ["There were numerous binding commitments made.", "There were no binding commitments made.", "The conference emphasized binding commitments.", "Only governments made binding commitments."],
    correctAnswer: "There were no binding commitments made."
  },
  {
    question: "What types of organizations and entities made voluntary commitments at the conference?",
    options: ["Only governments", "Philanthropic donors, governments, corporations, and NGOs", "Corporations and NGOs", "Only philanthropic donors"],
    correctAnswer: "Philanthropic donors, governments, corporations, and NGOs"
  },
  {
    question: "Which technology innovation was mentioned in the conference outcomes?",
    options: ["Sustainable agriculture practices", "Wastewater treatment", "Greenhouse gas reduction", "Urban planning"],
    correctAnswer: "Wastewater treatment"
  },
  {
    question: "How can cost-effective approaches to data-generation for water management be achieved?",
    options: ["Using traditional survey methods", "Implementing social media campaigns", "Utilizing sensors and satellite data", "Relying on anecdotal evidence"],
    correctAnswer: "Utilizing sensors and satellite data"
  },
  {
    question: "What is the purpose of the W12+ Blueprint?",
    options: ["To promote renewable energy solutions", "To host city profiles and case studies related to water security", "To develop international water treaties", "To create a global water database"],
    correctAnswer: "To host city profiles and case studies related to water security"
  },
  {
    question: "What does the “Making Rights Real” initiative aim to do?",
    options: ["Promote women’s rights", "Advocate for powerful actors in society", "Help marginalized communities and women understand how to exercise their rights", "Enhance corporate governance"],
    correctAnswer: "Help marginalized communities and women understand how to exercise their rights"
  },
  {
    question: "What hinders farmers and industries from using water efficiently and sustainably?",
    options: ["Lack of available water", "Government regulations", "Inadequate infrastructure", "Lack of incentives"],
    correctAnswer: "Lack of incentives"
  },
  {
    question: "Which major global events are crucial for the success of the commitments made at the UN 2023 Water Conference?",
    options: ["World Cup", "High-level Political Forum (HLPF) and COP28 climate talks", "Olympic Games", "G20 Summit"],
    correctAnswer: "High-level Political Forum (HLPF) and COP28 climate talks"
  },
  {
    question: "What is the primary challenge in addressing water problems according to the text?",
    options: ["Fragmentation due to the local nature of water issues", "Lack of international cooperation", "Excessive funding for water projects", "Government interference"],
    correctAnswer: "Fragmentation due to the local nature of water issues"
  },
  {
    question: "What is the primary driver of groundwater over-abstraction mentioned in the text?",
    options: ["Industrial pollution", "Heavy irrigation, especially in places like Punjab", "Urbanization", "Lack of infrastructure"],
    correctAnswer: "Heavy irrigation, especially in places like Punjab"
  },
  {
    question: "Which Sustainable Development Goal (SDG) is primarily concerned with access to clean water and sanitation?",
    options: ["SDG 4", "SDG 7", "SDG 6", "SDG 9"],
    correctAnswer: "SDG 6"
  },
  {
    question: "What is the primary focus of the remaining SDG 6 targets?",
    options: ["Reducing greenhouse gas emissions", "Enhancing industrialization", "Addressing water scarcity and contamination", "Promoting renewable energy"],
    correctAnswer: "Addressing water scarcity and contamination"
  },
  {
    question: "How can the issue of groundwater over-abstraction be resolved according to the text?",
    options: ["Increase agricultural pumping", "Change agricultural policies to pump less water", "Encourage heavy irrigation", "Implement industrial regulations"],
    correctAnswer: "Change agricultural policies to pump less water"
  },
  {
    question: "What is the role of the “Water for Women Fund”?",
    options: ["Promoting water sports for women", "Supporting women’s rights organizations", "Enhancing women’s participation in the water sector", "Providing women with clean water sources"],
    correctAnswer: "Enhancing women’s participation in the water sector"
  },
  {
    question: "What is the significance of the “Water Action Agenda” in the context of the conference outcomes?",
    options: ["It emphasizes the need for more infrastructure", "It highlights the role of corporations in water management", "It integrates environmental, social, and corporate governance into effective water governance", "It promotes water privatization"],
    correctAnswer: "It integrates environmental, social, and corporate governance into effective water governance"
  },
  {
    question: "How can cross-learning be accelerated, according to the text?",
    options: ["By implementing global educational programs", "By sharing technology and solutions between regions and countries", "By creating more local water conferences", "By increasing government funding for water projects"],
    correctAnswer: "By sharing technology and solutions between regions and countries"
  },
  {
    question: "What is the main focus of the IBM Sustainability Accelerator?",
    options: ["Promoting sustainable agriculture", "Solar energy production", "Wastewater treatment", "Water management"],
    correctAnswer: "Water management"
  },
  {
    question: "Which organization offers data analysis tools for water management?",
    options: ["United Nations", "World Bank", "World Meteorological Organization", "Greenpeace"],
    correctAnswer: "World Meteorological Organization"
  },
  {
    question: "What do the voluntary commitments at the UN 2023 Water Conference depend on for success?",
    options: ["Government regulations", "International treaties", "Consumer willingness to pay a premium for sustainably produced goods", "Corporate donations"],
    correctAnswer: "Consumer willingness to pay a premium for sustainably produced goods"
  },
  {
    question: "What is the goal of the “Our watershed moment” theme of the conference?",
    options: ["To highlight the importance of forest conservation", "To emphasize the role of urbanization in water management", "To support the achievement of water-related global goals and objectives", "To address climate change"],
    correctAnswer: "To support the achievement of water-related global goals and objectives"
  },
  {
    question: "What type of data was mentioned as important for large investments in the text?",
    options: ["Social media data", "Sensor and satellite data", "Financial data", "Personal anecdotes"],
    correctAnswer: "Sensor and satellite data"
  },
  {
    question: "What is the primary challenge mentioned in the text regarding water sector fragmentation?",
    options: ["Lack of local solutions", "Water scarcity", "Lack of political cooperation", "Local nature of water problems"],
    correctAnswer: "Local nature of water problems"
  },
  {
    question: "What did the 1977 water conference result in?",
    options: ["An increase in water scarcity", "A focus on renewable energy", "A global action plan for clean water", "Decreased industrialization"],
    correctAnswer: "A global action plan for clean water"
  },
  {
    question: "Which organization hosts city profiles and case studies related to water security challenges?",
    options: ["United Nations", "World Bank", "W12+ Blueprint", "World Meteorological Organization"],
    correctAnswer: "W12+ Blueprint"
  },
  {
    question: "What is the role of the “Making Rights Real” initiative?",
    options: ["Promoting sustainable agriculture", "Advocating for powerful actors in society", "Helping marginalized communities and women understand how to exercise their rights", "Encouraging corporate governance"],
    correctAnswer: "Helping marginalized communities and women understand how to exercise their rights"
  },
  {
    question: "When were diplomatic relations established between India and Canada?",
    options: ["1940", "1947", "1955", "1960"],
    correctAnswer: "1947"
  },
  {
    question: "What are the shared principles that form the basis of India-Canada bilateral relations?",
    options: ["Authoritarianism and censorship", "Democracy, human rights, rule of law, and pluralism", "Military alliances and aggression", "Trade dominance and economic power"],
    correctAnswer: "Democracy, human rights, rule of law, and pluralism"
  },
  {
    question: "What was the annual bilateral trade value between India and Canada until recently?",
    options: ["$1 billion", "$3 billion", "$6 billion", "$10 billion"],
    correctAnswer: "$6 billion"
  },
  {
    question: "How many Canadian companies are actively pursuing business in the Indian market?",
    options: ["Over 100", "Over 300", "Over 600", "Over 1,000"],
    correctAnswer: "Over 1,000"
  },
  {
    question: "What type of agreement are India and Canada engaged in technical negotiations for?",
    options: ["Military alliance", "Comprehensive Economic Partnership Agreement (CEPA)", "Cultural exchange agreement", "Energy cooperation agreement"],
    correctAnswer: "Comprehensive Economic Partnership Agreement (CEPA)"
  },
  {
    question: "What percentage of the total Canadian population is of Indian origin?",
    options: ["1%", "2%", "3%", "4%"],
    correctAnswer: "3%"
  },
  {
    question: "What is the approximate percentage of international students in Canada who are from India?",
    options: ["10%", "20%", "30%", "40%"],
    correctAnswer: "40%"
  },
  {
    question: "What is the name of the Canada-India Research Centre of Excellence?",
    options: ["CIRE", "ICEP", "IC-IMPACTS", "INDCAN"],
    correctAnswer: "IC-IMPACTS"
  },
  {
    question: "In which field have India’s Department of Biotechnology and Canada’s IC-IMPACTS implemented joint research projects?",
    options: ["Space exploration", "Healthcare", "Agriculture", "Information technology"],
    correctAnswer: "Healthcare"
  },
  {
    question: "What program focuses on knowledge and scientific research on Cold Climate (Arctic) Studies between India and Canada?",
    options: ["IC-IMPACTS", "Space Exchange Program", "Arctic Research Initiative", "Polar Canada"],
    correctAnswer: "Polar Canada"
  },
  {
    question: "What agencies have signed MOUs in the field of exploration and utilization of outer space?",
    options: ["ISRO and NASA", "ISRO and Chinese Space Agency", "ISRO and Canadian Space Agency (CSA)", "ISRO and European Space Agency (ESA)"],
    correctAnswer: "ISRO and Canadian Space Agency (CSA)"
  },
  {
    question: "Which Canadian organization has launched several nanosatellites from Canada in collaboration with ISRO?",
    options: ["NASA", "ANTRIX", "SpaceX", "Blue Origin"],
    correctAnswer: "ANTRIX"
  },
  {
    question: "In which satellite launch did ISRO fly the first Canadian Low Earth Orbit (LEO) satellite?",
    options: ["Chandrayaan-2", "Mars Orbiter Mission", "PSLV C43", "PSLV (Polar Satellite Launch Vehicle) in 2018"],
    correctAnswer: "PSLV (Polar Satellite Launch Vehicle) in 2018"
  },
  {
    question: "What is the primary cultural sensitivity issue that has strained India-Canada relations?",
    options: ["Religious conflicts", "Language barriers", "Support for Khalistan", "Economic disputes"],
    correctAnswer: "Support for Khalistan"
  },
  {
    question: "What did Canada permit that was seen as glorifying violence by Sikh separatists, causing tension with India?",
    options: ["A religious festival", "A political rally", "A parade depicting the 1984 assassination of Indian Prime Minister Indira Gandhi", "A diplomatic conference"],
    correctAnswer: "A parade depicting the 1984 assassination of Indian Prime Minister Indira Gandhi"
  },
  {
    question: "Who is the director of the South Asia Institute at the Wilson Center think-tank mentioned in the context of bilateral relations?",
    options: ["Michael Kugelman", "David Wilson", "Sarah Institute", "John Think-Tank"],
    correctAnswer: "Michael Kugelman"
  },
  {
    question: "What issue has caused dissatisfaction and raised concerns in India regarding Canadian policies?",
    options: ["Visa and immigration policies", "Trade imbalances", "Diplomatic ties with China", "Cultural exchange programs"],
    correctAnswer: "Visa and immigration policies"
  },
  {
    question: "What event led to Canada and India not having bilateral talks during the G20 meeting in New Delhi?",
    options: ["Disagreement over economic cooperation", "Differing stances on international issues", "Visa policy disputes", "Cultural exchange program conflicts"],
    correctAnswer: "Differing stances on international issues"
  },
  {
    question: "What agricultural trade disputes have arisen between India and Canada?",
    options: ["Wheat and rice exports", "Poultry and dairy products", "Spices and tea", "Textiles and clothing"],
    correctAnswer: "Poultry and dairy products"
  },
  {
    question: "What should be encouraged to address the Khalistan issue in India-Canada relations?",
    options: ["Military intervention", "Economic sanctions", "Open and inclusive dialogue", "Cultural exchange programs"],
    correctAnswer: "Open and inclusive dialogue"
  },
  {
    question: "What can help foster a deeper understanding of each other’s cultures and traditions in India-Canada relations?",
    options: ["Economic sanctions", "Environmental cooperation", "Promoting cultural exchange programs", "Military alliances"],
    correctAnswer: "Promoting cultural exchange programs"
  },
  {
    question: "What can India and Canada work together on given their shared commitment to combat climate change?",
    options: ["Space exploration", "Counterterrorism", "Green technologies and renewable energy", "Nuclear energy"],
    correctAnswer: "Green technologies and renewable energy"
  },
  {
    question: "How can India and Canada promote mutual understanding in their bilateral relations?",
    options: ["Through agricultural cooperation", "By organizing more parades", "Regular high-level diplomatic dialogues and exchanges", "By increasing visa restrictions"],
    correctAnswer: "Regular high-level diplomatic dialogues and exchanges"
  },
  {
    question: "In what area can robust cooperation be achieved through the framework of the JWG on Counter Terrorism?",
    options: ["Space exploration", "Healthcare", "Environmental cooperation", "Counterterrorism issues"],
    correctAnswer: "Counterterrorism issues"
  },
  {
    question: "What is the primary focus of the IC-IMPACTS program?",
    options: ["Agriculture", "Space exploration", "Healthcare", "Environmental sustainability"],
    correctAnswer: "Healthcare"
  },
  {
    question: "Which agency is the commercial arm of ISRO and has launched nanosatellites from Canada?",
    options: ["NASA", "ANTRIX", "SpaceX", "Blue Origin"],
    correctAnswer: "ANTRIX"
  },
  {
    question: "What is the name of the bilateral agreement that India and Canada are engaged in technical negotiations for?",
    options: ["CEPA", "SEZ", "NAFTA", "GATT"],
    correctAnswer: "CEPA"
  },
  {
    question: "Which event involving the depiction of violence by Sikh separatists strained Canada-India relations?",
    options: ["Religious festival", "Political rally", "Parade depicting the 1984 assassination of Indian Prime Minister Indira Gandhi", "Diplomatic conference"],
    correctAnswer: "Parade depicting the 1984 assassination of Indian Prime Minister Indira Gandhi"
  },
  {
    question: "What is the shared commitment that can lead to cooperation in green technologies and renewable energy?",
    options: ["Counterterrorism", "Environmental sustainability", "Space exploration", "Healthcare"],
    correctAnswer: "Environmental sustainability"
  },
  {
    question: "How can India and Canada address the Khalistan issue and encourage open dialogue?",
    options: ["Military intervention", "Economic sanctions", "Legal measures and inclusive dialogue", "Cultural exchange programs"],
    correctAnswer: "Legal measures and inclusive dialogue"
  },
  {
    question: "What percentage of Bihar’s population is constituted by Other Backward Classes (OBCs) and Extremely Backward Classes (EBCs) combined, according to the 2023 Caste Survey findings?",
    options: ["36.01%", "27.12%", "63%", "19.65%"],
    correctAnswer: "63%"
  },
  {
    question: "What percentage of Bihar’s population is categorized as Scheduled Castes, as per the Caste Survey?",
    options: ["1.68%", "27.12%", "19.65%", "36.01%"],
    correctAnswer: "19.65%"
  },
  {
    question: "In which phase of the Caste Survey was data collected on people’s castes, sub-castes, and socio-economic conditions?",
    options: ["First Phase", "Second Phase", "Both Phases", "Neither Phase"],
    correctAnswer: "Second Phase"
  },
  {
    question: "What was optional in the Caste Survey, allowing respondents to choose whether to provide this information?",
    options: ["Caste certificate number", "Ration card number", "Aadhaar number", "Household size"],
    correctAnswer: "Aadhaar number"
  },
  {
    question: "The Caste Survey findings may lead to increased demands for what?",
    options: ["Decreasing OBC quota", "Reducing the EBC quota", "Increasing OBC and EBC quotas", "Eliminating reservation quotas"],
    correctAnswer: "Increasing OBC and EBC quotas"
  },
  {
    question: "The Justice Rohini Commission has been examining the question of what regarding OBCs since 2017?",
    options: ["Increasing the OBC quota", "Sub-categorisation of OBCs", "Eliminating OBC reservations", "Implementing reservation quotas for SCs"],
    correctAnswer: "Sub-categorisation of OBCs"
  },
  {
    question: "The Caste Survey may reopen the debate over what reservation ceiling imposed by the Supreme Court?",
    options: ["75%", "25%", "50%", "100%"],
    correctAnswer: "50%"
  },
  {
    question: "The Caste Survey is seen as a means to fulfill objectives outlined in which part of the Indian Constitution?",
    options: ["Part I – The Union and its Territory", "Part III – Fundamental Rights", "Part IV – Directive Principles of State Policy", "Part V – The Union"],
    correctAnswer: "Part IV – Directive Principles of State Policy"
  },
  {
    question: "The Caste Census can help in the development of targeted measures to reduce what across the state and promote equity and social justice?",
    options: ["Discrimination", "Inequality", "Political favoritism", "Caste identities"],
    correctAnswer: "Inequality"
  },
  {
    question: "What are the potential repercussions of conducting a Caste Census?",
    options: ["Economic benefits", "Social harmony", "Political and social repercussions", "Caste eradication"],
    correctAnswer: "Political and social repercussions"
  },
  {
    question: "In the context of India, what does the term “SECC” stand for?",
    options: ["Social and Economic Census Commission", "Socio-Economic and Caste Census", "Scheduled Caste and Census Committee", "Statewide Enumeration and Caste Count"],
    correctAnswer: "Socio-Economic and Caste Census"
  },
  {
    question: "What was the last year in which a caste census was conducted and publicly released in India?",
    options: ["2001", "2011", "1931", "1950"],
    correctAnswer: "1931"
  },
  {
    question: "What was the main reason for not making the caste-based data from the 2011 Census public?",
    options: ["Fear of caste discrimination", "Fear of political favoritism and opportunism", "Lack of interest in caste data", "Concerns over data confidentiality"],
    correctAnswer: "Fear of political favoritism and opportunism"
  },
  {
    question: "What is the primary purpose of the Census in India?",
    options: ["Identifying beneficiaries of state support", "Capturing the Indian population", "Delimitation exercise", "Reducing caste-based discrimination"],
    correctAnswer: "Capturing the Indian population"
  },
  {
    question: "How is data collected during the Census different from data collected during the SECC?",
    options: ["Census data is open for public use, while SECC data is confidential.", "Census data is not used by the government, while SECC data is.", "Census collects caste information, while SECC does not.", "Census and SECC data collection methods are identical."],
    correctAnswer: "Census data is open for public use, while SECC data is confidential."
  },
  {
    question: "What is the primary difference between the Census and SECC?",
    options: ["Census is focused on caste data, while SECC is not.", "Census data is confidential, while SECC data is open for use by government departments.", "Census is conducted annually, while SECC is conducted every ten years.", "Census covers only rural areas, while SECC covers both rural and urban areas."],
    correctAnswer: "Census data is confidential, while SECC data is open for use by government departments."
  },
  {
    question: "Which act governs the confidentiality of data collected during the Census?",
    options: ["SECC Act of 1931", "Census Act of 1948", "Caste Census Act of 2011", "Data Confidentiality Act of 2000"],
    correctAnswer: "Census Act of 1948"
  },
  {
    question: "What is the potential drawback of using caste as a proxy for class or deprivation in India?",
    options: ["It simplifies data collection.", "It often doesn’t accurately represent class or deprivation.", "It encourages social integration.", "It eliminates caste-based discrimination."],
    correctAnswer: "It often doesn’t accurately represent class or deprivation."
  },
  {
    question: "What kind of discrimination does caste represent in India?",
    options: ["Racial discrimination", "Religious discrimination", "Class discrimination", "Embedded discrimination"],
    correctAnswer: "Embedded discrimination"
  },
  {
    question: "How often is the Census conducted in India?",
    options: ["Annually", "Every five years", "Every ten years", "Biannually"],
    correctAnswer: "Every ten years"
  },
  {
    question: "What is the significance of the Bihar Caste Survey findings in state and national elections?",
    options: ["It has no impact on elections.", "It may lead to the removal of OBC quotas.", "It may influence the identification of intended beneficiaries for welfare schemes.", "It might lead to the elimination of caste-based discrimination."],
    correctAnswer: "It may influence the identification of intended beneficiaries for welfare schemes."
  },
  {
    question: "What is the primary objective of the first phase of the Caste Survey?",
    options: ["Collecting caste data", "Counting and recording households", "Examining socio-economic conditions", "Identifying OBC and EBC populations"],
    correctAnswer: "Counting and recording households"
  },
  {
    question: "Which data was optional for respondents to provide during the Caste Survey?",
    options: ["Household size", "Caste certificate number", "Socio-economic conditions", "Ration card number"],
    correctAnswer: "Caste certificate number"
  },
  {
    question: "How might the Caste Survey findings affect the reservation quotas for OBCs?",
    options: ["They may lead to a reduction in OBC quotas.", "They could lead to an increase in OBC quotas.", "They have no impact on OBC quotas.", "They may eliminate OBC quotas altogether."],
    correctAnswer: "They could lead to an increase in OBC quotas."
  },
  {
    question: "Who submitted the report on sub-categorization of OBCs after examining the matter since 2017?",
    options: ["The President of India", "The Chief Minister of Bihar", "The Justice Rohini Commission", "The Supreme Court"],
    correctAnswer: "The Justice Rohini Commission"
  },
  {
    question: "The 50% reservation ceiling imposed by the Supreme Court may be reevaluated based on what factor?",
    options: ["Population of SCs", "Population of STs", "Population of OBCs", "Population of EBCs"],
    correctAnswer: "Population of OBCs"
  },
  {
    question: "The Caste Census is aligned with which part of the Indian Constitution?",
    options: ["Part I – The Union and its Territory", "Part II – Citizenship", "Part III – Fundamental Rights", "Part IV – Directive Principles of State Policy"],
    correctAnswer: "Part IV – Directive Principles of State Policy"
  },
  {
    question: "What long-term objectives can the Caste Census help achieve?",
    options: ["Increase political favoritism", "Reduce social inequality", "Eliminate caste identities", "Enhance economic development"],
    correctAnswer: "Reduce social inequality"
  },
  {
    question: "What are the main concerns regarding conducting a Caste Census?",
    options: ["Lack of political impact", "Hardening of caste identities", "Improved social harmony", "Rapid data release"],
    correctAnswer: "Hardening of caste identities"
  },
  {
    question: "What is the primary focus of the Caste Census in India?",
    options: ["Eliminating caste-based discrimination", "Promoting cultural diversity", "Capturing caste-based data", "Identifying beneficiaries of state support"],
    correctAnswer: "Capturing caste-based data"
  },
  {
    question: "What is MS Swaminathan known as?",
    options: ["Father of Indian Independence", "Father of India’s Green Revolution", "Father of Indian Agriculture", "Father of Indian Science"],
    correctAnswer: "Father of India’s Green Revolution"
  },
  {
    question: "In which Indian state was MS Swaminathan born?",
    options: ["Kerala", "Tamil Nadu", "Punjab", "Maharashtra"],
    correctAnswer: "Tamil Nadu"
  },
  {
    question: "What major event influenced MS Swaminathan to shift his focus to agriculture?",
    options: ["World War II", "Bengal famine of 1942-43", "Indian Independence movement", "Economic depression"],
    correctAnswer: "Bengal famine of 1942-43"
  },
  {
    question: "What was MS Swaminathan’s initial career aspiration before he became involved in agriculture?",
    options: ["Engineering", "Medicine", "Teaching", "Journalism"],
    correctAnswer: "Medicine"
  },
  {
    question: "In which organization did MS Swaminathan serve as the Director General?",
    options: ["United Nations", "Indian Council of Agricultural Research (ICAR)", "World Health Organization (WHO)", "Food and Agricultural Organization (FAO)"],
    correctAnswer: "Indian Council of Agricultural Research (ICAR)"
  },
  {
    question: "What was the primary goal of the Green Revolution in India?",
    options: ["Environmental conservation", "Increasing crop diversity", "Boosting crop productivity and food security", "Promoting organic farming"],
    correctAnswer: "Boosting crop productivity and food security"
  },
  {
    question: "Who was MS Swaminathan’s collaborator in developing high-yielding wheat and rice varieties?",
    options: ["Mahatma Gandhi", "Norman Borlaug", "Jawaharlal Nehru", "C. Subramaniam"],
    correctAnswer: "Norman Borlaug"
  },
  {
    question: "What was the significant impact of high-yielding wheat and rice varieties developed by MS Swaminathan and his collaborator?",
    options: ["Increased crop diversity", "Decreased crop yields", "Averted famine and increased food self-sufficiency", "Reduced agricultural research funding"],
    correctAnswer: "Averted famine and increased food self-sufficiency"
  },
  {
    question: "What did the ‘Swaminathan Report’ primarily focus on?",
    options: ["Environmental conservation", "Causes of farm distress and farmer welfare", "Agricultural exports", "Industrialization of agriculture"],
    correctAnswer: "Causes of farm distress and farmer welfare"
  },
  {
    question: "What is Minimum Support Price (MSP)?",
    options: ["The minimum price at which consumers purchase agricultural products.", "The minimum wage for agricultural laborers.", "The price at which the government purchases crops directly from farmers.", "The maximum price for agricultural land."],
    correctAnswer: "The price at which the government purchases crops directly from farmers."
  },
  {
    question: "Which act did MS Swaminathan play a pivotal role in developing, related to the protection of plant varieties and farmers’ rights?",
    options: ["Environmental Protection Act", "Plant Varieties Act", "Protection of Plant Varieties and Farmers’ Right Act 2001", "Agricultural Sustainability Act"],
    correctAnswer: "Protection of Plant Varieties and Farmers’ Right Act 2001"
  },
  {
    question: "What was the main focus of the M. S. Swaminathan Research Foundation (MSSRF)?",
    options: ["Promoting space exploration", "Promoting sustainable agriculture and rural development", "Advancing medical research", "Advocating for wildlife conservation"],
    correctAnswer: "Promoting sustainable agriculture and rural development"
  },
  {
    question: "Which prestigious award was MS Swaminathan honored with as the first laureate in 1987?",
    options: ["Nobel Prize in Medicine", "Pulitzer Prize for Agriculture", "World Food Prize", "Nobel Peace Prize"],
    correctAnswer: "World Food Prize"
  },
  {
    question: "Which Padma award was conferred upon MS Swaminathan in 1967?",
    options: ["Padma Vibhushan", "Padma Shri", "Padma Bhushan", "Padma Ratna"],
    correctAnswer: "Padma Shri"
  },
  {
    question: "In addition to the World Food Prize, which international award did MS Swaminathan receive in 1971?",
    options: ["Grammy Award", "Nobel Prize in Physics", "Ramon Magsaysay Award", "Booker Prize for Literature"],
    correctAnswer: "Ramon Magsaysay Award"
  },
  {
    question: "Which Indian state’s agricultural heritage site was globally recognized with MS Swaminathan’s contribution?",
    options: ["Gujarat", "Kerala", "Maharashtra", "Punjab"],
    correctAnswer: "Kerala"
  },
  {
    question: "What is the focus of the M.S. Swaminathan Research Foundation’s approach to rural communities?",
    options: ["Pro-poor, pro-women, and pro-nature", "Urban development", "Industrialization", "Political activism"],
    correctAnswer: "Pro-poor, pro-women, and pro-nature"
  },
  {
    question: "Which year was MS Swaminathan born?",
    options: ["1910", "1925", "1935", "1940"],
    correctAnswer: "1925"
  },
  {
    question: "What was the name of the organization where MS Swaminathan served as the Independent Chairman of the Food and Agricultural Organization Council?",
    options: ["United Nations", "ICAR", "FAO", "WHO"],
    correctAnswer: "FAO"
  },
  {
    question: "What is the significance of the ‘Gulf of Mannar Marine Biosphere (Go MMB)’?",
    options: ["It’s a famous tourist destination in India.", "It’s a globally important agricultural heritage site.", "It’s a protected marine area with diverse biodiversity.", "It’s a major agricultural research institute."],
    correctAnswer: "It’s a protected marine area with diverse biodiversity."
  },
  {
    question: "What was MS Swaminathan’s primary motivation for shifting his focus to agriculture?",
    options: ["Economic opportunity", "Bengal famine of 1942-43", "Family tradition", "Political aspirations"],
    correctAnswer: "Bengal famine of 1942-43"
  },
  {
    question: "Which term is used to describe the minimum price at which the government purchases crops directly from farmers?",
    options: ["Agricultural Floor Price", "Farmer Support Price", "Minimum Crop Rate", "Minimum Support Price (MSP)"],
    correctAnswer: "Minimum Support Price (MSP)"
  },
  {
    question: "What is the primary goal of the Protection of Plant Varieties and Farmers’ Right Act 2001?",
    options: ["Protecting endangered animal species", "Promoting industrial agriculture", "Protecting the rights of farmers and plant breeders", "Regulating pesticide use"],
    correctAnswer: "Protecting the rights of farmers and plant breeders"
  },
  {
    question: "In which year was the M. S. Swaminathan Research Foundation (MSSRF) established?",
    options: ["1970", "1988", "1995", "2000"],
    correctAnswer: "1988"
  },
  {
    question: "Which award did MS Swaminathan receive for his significant contributions to agriculture in 1987?",
    options: ["Nobel Prize", "Pulitzer Prize", "World Food Prize", "Ramon Magsaysay Award"],
    correctAnswer: "World Food Prize"
  },
  {
    question: "What did MS Swaminathan’s groundbreaking work with Norman Borlaug focus on?",
    options: ["Animal husbandry", "High-yielding wheat and rice varieties", "Organic farming", "Horticulture"],
    correctAnswer: "High-yielding wheat and rice varieties"
  },
  {
    question: "Which organization did MS Swaminathan serve as the Director General, playing a crucial role in advancing agricultural research in India?",
    options: ["UNESCO", "FAO", "ICAR", "WHO"],
    correctAnswer: "ICAR"
  },
  {
    question: "What role did MS Swaminathan play in the Green Revolution?",
    options: ["He was the architect of the revolution.", "He provided financial support.", "He was a political leader during the revolution.", "He was a passive observer."],
    correctAnswer: "He was the architect of the revolution."
  },
  {
    question: "Which international award did MS Swaminathan receive in 1986 for his contributions to science?",
    options: ["Nobel Prize", "Ramon Magsaysay Award", "Albert Einstein World Science Award", "Pulitzer Prize"],
    correctAnswer: "Albert Einstein World Science Award"
  },
  {
    question: "What is the primary focus of the M.S. Swaminathan Research Foundation (MSSRF)?",
    options: ["Space exploration", "Promoting sustainable agriculture and rural development", "Advancing medical research", "Wildlife conservation"],
    correctAnswer: "Promoting sustainable agriculture and rural development"
  },
  {
    question: "What is the primary purpose of the Five Eyes Alliance?",
    options: ["Economic cooperation", "Intelligence sharing", "Military alliance", "Cultural exchange"],
    correctAnswer: "Intelligence sharing"
  },
  {
    question: "Which countries are members of the Five Eyes Alliance?",
    options: ["United States, Russia, China, France, Germany", "Australia, Canada, New Zealand, United Kingdom, United States", "India, Pakistan, Bangladesh, Sri Lanka, Nepal", "Japan, South Korea, Vietnam, Philippines, Indonesia"],
    correctAnswer: "Australia, Canada, New Zealand, United Kingdom, United States"
  },
  {
    question: "What was the original purpose of the UK-USA Agreement, a precursor to the Five Eyes Alliance?",
    options: ["Joint military operations", "Signals intelligence cooperation", "Economic trade agreement", "Environmental protection"],
    correctAnswer: "Signals intelligence cooperation"
  },
  {
    question: "When was the UK-USA Agreement officially signed?",
    options: ["1943", "1946", "1949", "1956"],
    correctAnswer: "1946"
  },
  {
    question: "Which country was the first to join the UK-USA Agreement after the United Kingdom and the United States?",
    options: ["Canada", "Australia", "New Zealand", "France"],
    correctAnswer: "Canada"
  },
  {
    question: "What is the primary language spoken among the Five Eyes countries?",
    options: ["Spanish", "Mandarin", "English", "French"],
    correctAnswer: "English"
  },
  {
    question: "What led to a closer alignment among the Five Eyes countries in recent years?",
    options: ["Economic partnerships", "Common interests, including concerns about China", "Religious affiliations", "Cultural festivals"],
    correctAnswer: "Common interests, including concerns about China"
  },
  {
    question: "When was the Five Eyes Intelligence Oversight and Review Council established?",
    options: ["1956", "1980s", "2010", "1946"],
    correctAnswer: "2010"
  },
  {
    question: "Which countries are part of the “Nine Eyes” group within the intelligence alliance?",
    options: ["United States, United Kingdom, Australia, Canada, New Zealand, France, Germany, Spain, Italy", "United States, United Kingdom, Australia, Canada, New Zealand, Netherlands, Denmark, France, Norway", "United States, United Kingdom, Australia, Canada, New Zealand, Belgium, Italy, Germany, Spain", "United States, United Kingdom, Australia, Canada, New Zealand, Japan, South Korea, Taiwan, India"],
    correctAnswer: "United States, United Kingdom, Australia, Canada, New Zealand, Netherlands, Denmark, France, Norway"
  },
  {
    question: "Which countries are part of the “14 Eyes” bloc within the intelligence alliance?",
    options: ["United States, United Kingdom, Australia, Canada, New Zealand, France, Germany, Spain, Italy, Belgium, Netherlands, Denmark, Sweden, Norway", "United States, United Kingdom, Australia, Canada, New Zealand, Japan, South Korea, Taiwan, India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan", "United States, United Kingdom, Australia, Canada, New Zealand, Russia, China, Brazil, South Africa, Argentina, Mexico, Chile, Peru", "United States, United Kingdom, Australia, Canada, New Zealand, Egypt, Saudi Arabia, Turkey, Israel, Iran, Iraq, Syria, Jordan, Lebanon"],
    correctAnswer: "United States, United Kingdom, Australia, Canada, New Zealand, France, Germany, Spain, Italy, Belgium, Netherlands, Denmark, Sweden, Norway"
  },
  {
    question: "What historical event led to the sharing of intelligence between the UK and the US during World War II?",
    options: ["The Battle of Stalingrad", "The Battle of Britain", "The Battle of Pearl Harbor", "The Battle of Normandy"],
    correctAnswer: "The Battle of Britain"
  },
  {
    question: "Which agreement laid the foundations for the UK-USA Agreement?",
    options: ["BRUSA Agreement", "NATO Treaty", "Warsaw Pact", "European Union Agreement"],
    correctAnswer: "BRUSA Agreement"
  },
  {
    question: "When were the UKUSA agreement files officially released to the public?",
    options: ["1946", "1956", "1980s", "2010"],
    correctAnswer: "2010"
  },
  {
    question: "What is the main focus of the Five Eyes Intelligence Oversight and Review Council?",
    options: ["Military strategy", "Intelligence oversight, review, and security", "Economic development", "Environmental protection"],
    correctAnswer: "Intelligence oversight, review, and security"
  },
  {
    question: "When did the Balfour Declaration express official support for a Jewish “national home” in Palestine?",
    options: ["a. 1917", "b. 1948", "c. 1967", "d. 1987"],
    correctAnswer: "a. 1917"
  },
  {
    question: "In which year did Britain withdraw its forces from Palestine?",
    options: ["a. 1917", "b. 1948", "c. 1967", "d. 1987"],
    correctAnswer: "b. 1948"
  },
  {
    question: "What percentage of the territory did Israel control at the end of the 1948 Arab-Israeli War?",
    options: ["a. 25%", "b. 50%", "c. 75%", "d. 100%"],
    correctAnswer: "b. 50%"
  },
  {
    question: "Which organization was founded in 1964 to address the Palestinian crisis?",
    options: ["a. Muslim Brotherhood", "b. PLO (Palestine Liberation Organization)", "c. UN", "d. Hamas"],
    correctAnswer: "b. PLO (Palestine Liberation Organization)"
  },
  {
    question: "What event prompted the 1967 Six-Day War?",
    options: ["a. Founding of the PLO", "b. Declaration of Israel’s independence", "c. Oslo Accords", "d. Camp David Accords"],
    correctAnswer: "b. Declaration of Israel’s independence"
  },
  {
    question: "Which organization is regarded as a terrorist organization by the U.S. government and won the Palestinian Authority’s legislative elections in 2006?",
    options: ["a. UN", "b. Muslim Brotherhood", "c. Hamas", "d. PLO"],
    correctAnswer: "c. Hamas"
  },
  {
    question: "What significant agreement established limited autonomy in the Gaza Strip and parts of the West Bank?",
    options: ["a. Camp David Accords", "b. Oslo Accords", "c. Balfour Declaration", "d. Abraham Accords"],
    correctAnswer: "b. Oslo Accords"
  },
  {
    question: "Which territory is located between Israel and Jordan and includes the de facto administrative capital of Palestine, Ramallah?",
    options: ["A. Golan Heights", "b. Gaza Strip", "c. West Bank", "d. Sinai Peninsula"],
    correctAnswer: "c. West Bank"
  },
  {
    question: "Which country officially recognized both Jerusalem and the Golan Heights as part of Israel?",
    options: ["a. United States", "b. India", "c. Saudi Arabia", "d. Jordan"],
    correctAnswer: "a. United States"
  },
  {
    question: "When did India recognize Israel as a state?",
    options: ["a. 1947", "b. 1950", "c. 1967", "d. 1988"],
    correctAnswer: "b. 1950"
  },
  {
    question: "India was one of the first countries to recognize the statehood of which entity in 1988?",
    options: ["a. PLO", "b. UN", "c. Hamas", "d. Israel"],
    correctAnswer: "a. PLO"
  },
  {
    question: "What policy shift has India undergone in recent years regarding the Israel-Palestine conflict?",
    options: ["a. Pro-Palestine to pro-Israel", "b. Pro-Israel to pro-Palestine", "c. Strict neutrality", "d. No change in policy"],
    correctAnswer: "a. Pro-Palestine to pro-Israel"
  },
  {
    question: "What does India propose as a solution to the Israel-Palestine conflict?",
    options: ["a. One-state solution", "b. No solution", "c. Two-state solution", "d. Three-state solution"],
    correctAnswer: "c. Two-state solution"
  },
  {
    question: "Why did Hamas launch an assault on Israel according to the provided information?",
    options: ["a. To strengthen ties with Saudi Arabia", "b. To disrupt efforts to normalize relations between Israel and other countries", "c. To gain control of the Golan Heights", "d. To promote the Muslim Brotherhood agenda"],
    correctAnswer: "b. To disrupt efforts to normalize relations between Israel and other countries"
  },
  {
    question: "What do the Abraham Accords refer to?",
    options: ["a. Peace agreements between Israel and its neighbors", "b. The founding of Hamas", "c. The Camp David Accords", "d. UN resolutions on Palestine"],
    correctAnswer: "a. Peace agreements between Israel and its neighbors"
  },
  {
    question: "Which organization does India believe should act as a mediator to resolve the Israel-Palestine issue in multilateral forums?",
    options: ["A. UN", "b. Muslim Brotherhood", "c. Hamas", "d. India"],
    correctAnswer: "d. India"
  },
  {
    question: "Which Indian city is recognized as the de facto administrative capital of Palestine?",
    options: ["a. Mumbai", "b. New Delhi", "c. Ramallah", "d. Chennai"],
    correctAnswer: "c. Ramallah"
  },
  {
    question: "When did India recognize Israel as a state?",
    options: ["a. 1947", "b. 1950", "c. 1967", "d. 1988"],
    correctAnswer: "b. 1950"
  },
  {
    question: "India was one of the first countries to recognize the statehood of which entity in 1988?",
    options: ["a. PLO", "b. UN", "c. Hamas", "d. Israel"],
    correctAnswer: "a. PLO"
  },
  {
    question: "What policy shift has India undergone in recent years regarding the Israel-Palestine conflict?",
    options: ["a. Pro-Palestine to pro-Israel", "b. Pro-Israel to pro-Palestine", "c. Strict neutrality", "d. No change in policy"],
    correctAnswer: "a. Pro-Palestine to pro-Israel"
  },
  {
    question: "What does India propose as a solution to the Israel-Palestine conflict?",
    options: ["a. One-state solution", "b. No solution", "c. Two-state solution", "d. Three-state solution"],
    correctAnswer: "c. Two-state solution"
  },
  {
    question: "Why did Hamas launch an assault on Israel according to the provided information?",
    options: ["a. To strengthen ties with Saudi Arabia", "b. To disrupt efforts to normalize relations between Israel and other countries", "c. To gain control of the Golan Heights", "d. To promote the Muslim Brotherhood agenda"],
    correctAnswer: "b. To disrupt efforts to normalize relations between Israel and other countries"
  },
  {
    question: "What do the Abraham Accords refer to?",
    options: ["a. Peace agreements between Israel and its neighbors", "b. The founding of Hamas", "c. The Camp David Accords", "d. UN resolutions on Palestine"],
    correctAnswer: "a. Peace agreements between Israel and its neighbors"
  },
  {
    question: "Which organization does India believe should act as a mediator to resolve the Israel-Palestine issue in multilateral forums?",
    options: ["A. UN", "b. Muslim Brotherhood", "c. Hamas", "d. India"],
    correctAnswer: "d. India"
  },
  {
    question: "Which Indian city is recognized as the de facto administrative capital of Palestine?",
    options: ["a. Mumbai", "b. New Delhi", "c. Ramallah", "d. Chennai"],
    correctAnswer: "c. Ramallah"
  },






      
      
    // Add more questions 
];

let usedQuestionIndices = [];
let currentQuestionIndex = 0;
let score = 0;
let quizEnded = false;

const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const totalQuestionsContainer = document.getElementById("total-questions-container"); // Add this line

// Function to load question and options
function loadQuestion() {
  if (usedQuestionIndices.length === questions.length) {
      // All questions have been asked
      quizEnded = true;
      questionContainer.innerHTML = "<h2>Quiz Completed</h2>";
      resultContainer.innerHTML = `Your Score: ${score} out of ${questions.length}.`;
  } else {
      // Get a random, unused question index
      do {
          currentQuestionIndex = Math.floor(Math.random() * questions.length);
      } while (usedQuestionIndices.includes(currentQuestionIndex));

      usedQuestionIndices.push(currentQuestionIndex);

      const currentQuestion = questions[currentQuestionIndex];
      questionContainer.innerHTML = `
          <h2>${currentQuestion.question}</h2>
          <div id="options-container">
              ${currentQuestion.options.map(option => `<button class="option">${option}</button>`).join('')}
          </div>
      `;

      const optionButtons = document.querySelectorAll(".option");
      optionButtons.forEach(button => {
          button.addEventListener("click", () => {
              checkAnswer(button.textContent);
          });
      });
  }
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

  // Load next question only if the quiz hasn't ended
  if (!quizEnded) {
      // next question
      currentQuestionIndex++;
      loadQuestion();
  }
}

// Display total number of questions
totalQuestionsContainer.innerHTML = `Total Questions: ${questions.length}`;

// Start the quiz 
shuffleArray(questions);
loadQuestion();


