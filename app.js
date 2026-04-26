const STORAGE_KEY = "co-driver-lab-v1";

const sources = [
  {
    title: "Colorado DMV Driver Education",
    url: "https://dmv.colorado.gov/drivereducation",
    note: "Official handbook, practice quiz, driving schools, and safety topic links."
  },
  {
    title: "Colorado @Home Knowledge Test",
    url: "https://dmv.colorado.gov/home-driving-knowledge-tests",
    note: "Official online knowledge test rules, timing, webcam, fees, and retake notes."
  },
  {
    title: "Colorado Permits and First-Time License",
    url: "https://dmv.colorado.gov/permits-first-time-driver-license",
    note: "Permit ages, supervised driving, drive logs, and license upgrade requirements."
  },
  {
    title: "Colorado Hands-Free Law",
    url: "https://www.codot.gov/safety/distracteddriving/colorado-hands-free-law",
    note: "Current cellphone and mobile device rules for drivers."
  },
  {
    title: "Colorado Child Passenger Safety Law",
    url: "https://www.codot.gov/safety/carseats/colorado-child-passenger-safety-law-1",
    note: "Updated child restraint rules effective January 1, 2025."
  },
  {
    title: "Colorado DMV Alcohol DUI",
    url: "https://dmv.colorado.gov/alcohol-dui",
    note: "Express Consent, refusal, revocation, and alcohol-related requirements."
  }
];

const modules = [
  {
    id: "permit",
    title: "Permit and Test Plan",
    label: "DMV",
    time: "12 min",
    category: "Licensing",
    goal: "Know the steps to get a Colorado instruction permit and how the knowledge test fits into the process.",
    facts: [
      "A Colorado permit is required if you have never had a license or if a license has been expired or canceled for more than 12 months.",
      "The minimum age to receive a Colorado learner's permit is 15.",
      "The knowledge test can be taken online through @Home, in an office, or through an approved driving school when available.",
      "The @Home knowledge test has a 60-minute time limit, requires a desktop or laptop with a webcam, and is available in English and Spanish.",
      "Passing the online test does not issue the permit by itself. You still schedule a DMV appointment and bring proof of passing and required documents."
    ],
    mustKnow: [
      "Study the handbook first, then use the official practice quiz as a supplement.",
      "Bring required identity and address documents. For minors, a parent, guardian, or eligible adult may need to sign liability and identity forms.",
      "Colorado state driver license offices do not conduct driving skills tests; skills tests are handled by approved third-party testers."
    ],
    traps: [
      "A school ID alone is not enough proof of identity.",
      "If you fail the written test before passing, a state retest fee can apply at the appointment.",
      "For @Home testing, leaving the test boundary or having another person visible can disqualify the attempt."
    ],
    checkpoint: [
      {
        q: "After passing the @Home knowledge test, what is still required before you can legally drive on a permit?",
        options: [
          "Schedule a DMV appointment and have the permit issued",
          "Print the result and begin driving alone",
          "Wait 30 days before doing anything",
          "Take the driving skills test immediately"
        ],
        answer: 0,
        why: "Passing the knowledge test is one step. The DMV still has to issue the instruction permit before you can drive with a supervisor."
      },
      {
        q: "Who needs a permit in Colorado?",
        options: [
          "Only drivers under 18",
          "Anyone who has never had a license or whose license has been expired or canceled over 12 months",
          "Only new residents from another country",
          "Only people taking the road test"
        ],
        answer: 1,
        why: "Colorado's permit requirement is based on licensing status, not only age."
      }
    ]
  },
  {
    id: "teen",
    title: "Minor Driver Rules",
    label: "Teen",
    time: "14 min",
    category: "Licensing",
    goal: "Memorize the age bands, supervised driving hours, passenger rules, and curfew limits for drivers under 18.",
    facts: [
      "Ages 15 to 15 years, 6 months: complete a 30-hour driver education course before permit issuance.",
      "Ages 15 years, 6 months to 16: complete either a 4-hour driver awareness program or a 30-hour driver education course.",
      "Ages 16 to 17: no formal driver education is required before the permit, but the knowledge test is still required.",
      "To move from permit to minor license, most 16 to 17-year-old applicants must hold a permit for 12 months and log 50 supervised hours, including 10 at night.",
      "If applying before age 16 years, 6 months, complete 6 hours of behind-the-wheel training with an approved school unless the rural distance exemption applies."
    ],
    mustKnow: [
      "During the first year with a minor license, driving from midnight to 5 a.m. is restricted unless an exception applies.",
      "For the first six months of a minor license, only passengers 21 or older may ride with you, except siblings and emergencies.",
      "During the second six months, one passenger under 21 is allowed, except siblings and emergencies.",
      "Drivers under 18 may not use a cellphone for calls or texting except for an emergency call."
    ],
    traps: [
      "The drive log must show both total driving hours and night driving hours.",
      "If using RoadReady, the log still needs to be printed for an in-person license appointment.",
      "Passenger limits are about passengers under 21, with siblings handled as an exception."
    ],
    checkpoint: [
      {
        q: "How many supervised driving hours are required for a typical Colorado minor license upgrade?",
        options: ["25 total, 5 at night", "40 total, 8 at night", "50 total, 10 at night", "62 total, 12 at night"],
        answer: 2,
        why: "The standard log requirement is 50 supervised hours, with at least 10 of those hours at night."
      },
      {
        q: "During the first year with a minor license, when is driving generally not permitted unless an exception applies?",
        options: ["10 p.m. to 4 a.m.", "Midnight to 5 a.m.", "1 a.m. to 6 a.m.", "Sunset to sunrise"],
        answer: 1,
        why: "The first-year curfew for licensed drivers under 18 is midnight to 5 a.m., with specific exceptions."
      }
    ]
  },
  {
    id: "laws",
    title: "Laws That Cost Your License",
    label: "Law",
    time: "16 min",
    category: "Law",
    goal: "Understand Colorado's point system, alcohol rules, seat belt laws, child restraints, and hands-free phone rules.",
    facts: [
      "Adult drivers 21 and older can face point suspension at 12 points in 12 months or 18 points in 24 months.",
      "Drivers under 18 can face suspension at 6 points in 12 months or 7 points before turning 18.",
      "Minor drivers 18 through 20 can face suspension at 9 points in 12 months, 12 points in 24 months, or 14 points between ages 18 and 21.",
      "Colorado's Express Consent law requires a chemical test when an officer has reasonable grounds to believe a driver is impaired by alcohol, drugs, or both.",
      "Refusing the required alcohol test can cause a one-year revocation for a first offense and a Persistent Drunk Driver designation.",
      "Since 2025, drivers may not hold or manually use a mobile electronic device while driving unless an exception applies."
    ],
    mustKnow: [
      "Hands-free means set up the phone before driving; the law also applies while stopped at traffic signals.",
      "Texting while driving is illegal, and drivers under 18 are barred from cellphone use except emergency calls.",
      "Child passenger safety rules changed on January 1, 2025. Children under 9 must use the correct child restraint and sit in the back seat if available.",
      "Children and teens ages 9 through 17 must be properly restrained in a booster seat or seat belt."
    ],
    traps: [
      "A speakerphone call is not legal if you are holding or handling the phone.",
      "Under Colorado law, alcohol and many drugs, including marijuana, can impair driving.",
      "Child seats must match the manufacturer's height, weight, and age requirements, not just the child's birthday."
    ],
    checkpoint: [
      {
        q: "What is true under Colorado's hands-free law?",
        options: [
          "Holding a phone is allowed at red lights",
          "Manual phone use is allowed for GPS if the driver is careful",
          "Drivers must use hands-free methods unless an exception applies",
          "The law applies only to drivers under 18"
        ],
        answer: 2,
        why: "Colorado expanded the rule in 2025. Holding or manually using a mobile device while driving is prohibited unless an exception applies."
      },
      {
        q: "What can happen after a first refusal to complete the required alcohol chemical test?",
        options: ["Only a warning", "One-year revocation", "No penalty if the driver later takes a roadside breath test", "A parking ticket"],
        answer: 1,
        why: "Refusal can trigger a one-year revocation for a first offense. A roadside breath test does not satisfy the later chemical testing requirement."
      }
    ]
  },
  {
    id: "signals",
    title: "Signals and Signs",
    label: "Signs",
    time: "15 min",
    category: "Road Signs",
    goal: "Read traffic signals, sign shapes, sign colors, and common sign families quickly.",
    facts: [
      "A steady red light means stop. After stopping and yielding, right turns on red are allowed unless a sign prohibits it.",
      "A steady yellow light warns that red is about to appear. Stop unless already in the intersection or too close to stop safely.",
      "A steady green light permits movement after yielding to traffic and pedestrians already in the intersection or crosswalk.",
      "A flashing red light is treated like a stop sign.",
      "A flashing yellow light warns of a hazard. Slow down and proceed with caution.",
      "A flashing yellow arrow means left-turning drivers may proceed only after yielding to oncoming traffic and pedestrians."
    ],
    mustKnow: [
      "Red octagon: stop. Downward triangle: yield. Diamond: warning. Rectangle: regulatory or guide depending on color and placement.",
      "Regulatory signs tell you what the law requires or prohibits.",
      "Warning signs identify hazards such as curves, crossings, merges, and changing road conditions.",
      "Route markers and guide signs help with direction and location, not right-of-way."
    ],
    traps: [
      "A green light does not erase the duty to yield to pedestrians and vehicles already in the intersection.",
      "A red arrow means no turn in that direction until allowed.",
      "If a signal is out, treat the intersection as a four-way stop unless directed otherwise."
    ],
    checkpoint: [
      {
        q: "What does a flashing red light mean?",
        options: ["Yield only", "Stop, then proceed after yielding", "Speed up to clear the intersection", "Stop only if another vehicle is present"],
        answer: 1,
        why: "A flashing red light has the same legal meaning as a stop sign."
      },
      {
        q: "What does a diamond-shaped yellow sign usually indicate?",
        options: ["A service area", "A warning about conditions ahead", "A parking rule", "A route number"],
        answer: 1,
        why: "Most diamond-shaped yellow signs are warning signs."
      }
    ]
  },
  {
    id: "markings",
    title: "Markings and Lane Use",
    label: "Lanes",
    time: "14 min",
    category: "Road Signs",
    goal: "Use pavement markings and lane controls to know when to pass, turn, merge, or stay put.",
    facts: [
      "Yellow lines separate traffic moving in opposite directions.",
      "White lines separate lanes moving in the same direction.",
      "Broken yellow lines allow passing when safe. Double solid yellow lines mean neither side may pass.",
      "If a solid yellow line is on your side, you may not pass. If the broken line is on your side, you may pass when safe.",
      "A two-way left-turn lane is for drivers from either direction preparing to turn left. It is not a travel or passing lane.",
      "A white diamond marks preferential lanes such as HOV, transit, or other special-use lanes."
    ],
    mustKnow: [
      "Never change lanes or pass until you check ahead, mirrors, and blind spots.",
      "Use turn signals before lane changes and before turning into roads, parking lots, driveways, or another lane.",
      "Stay out of bike lanes except when lawfully turning, entering, or leaving the road, and only after yielding."
    ],
    traps: [
      "Crosswalks exist at intersections even when no painted lines are visible.",
      "A solid white line means stay in your lane unless there is a safety reason to cross.",
      "Center turn lanes are not merge acceleration lanes."
    ],
    checkpoint: [
      {
        q: "What do double solid yellow lines mean?",
        options: ["Both sides may pass carefully", "Only the left lane may pass", "Neither direction may pass", "They mark a bike lane"],
        answer: 2,
        why: "Double solid yellow lines mark a no-passing zone for traffic in both directions."
      },
      {
        q: "What is a two-way left-turn lane for?",
        options: ["Passing slower traffic", "Regular travel during congestion", "Left turns from either direction", "Emergency vehicles only"],
        answer: 2,
        why: "The shared center lane is reserved for vehicles preparing to turn left."
      }
    ]
  },
  {
    id: "rightofway",
    title: "Right-of-Way and Speed",
    label: "Yield",
    time: "17 min",
    category: "Rules",
    goal: "Know when to yield, when to stop, and how speed must change with conditions.",
    facts: [
      "Right-of-way rules tell who must yield. They do not give permission to force another road user to move.",
      "At four-way stops, the first vehicle to stop goes first. If vehicles arrive together, yield to the vehicle on the right.",
      "Left turns must yield to oncoming traffic unless protected by a green arrow or a four-way stop arrival order.",
      "Pedestrians have right-of-way at intersections and crosswalks, even if the crosswalk is unmarked.",
      "Drivers must reduce speed when weather, pedestrians, traffic, or road conditions make the posted speed unsafe.",
      "You must stop at least 20 feet before a school bus with red lights flashing unless a median or physical barrier separates you from the bus."
    ],
    mustKnow: [
      "Emergency vehicles with lights or sirens require you to yield and pull to the right when safe.",
      "At roundabouts, yield to pedestrians, bicyclists in crosswalks, and traffic already inside.",
      "Transit buses signaling back into traffic have right-of-way when the yield sign on the bus is activated."
    ],
    traps: [
      "The speed limit is for ideal conditions. Snow, ice, darkness, heavy traffic, and pedestrians can require a lower speed.",
      "Do not pass a vehicle stopped at a crosswalk. It may be stopped for a pedestrian you cannot see.",
      "At a green light, still yield before turning."
    ],
    checkpoint: [
      {
        q: "At a four-way stop, two vehicles arrive at the same time. Who should yield?",
        options: ["The vehicle on the right", "The vehicle on the left", "The larger vehicle", "The vehicle going straight"],
        answer: 1,
        why: "When vehicles arrive together, the driver on the left yields to the driver on the right."
      },
      {
        q: "When must you stop for a school bus with red lights flashing?",
        options: [
          "Only if you are behind it",
          "Only on two-lane roads",
          "At least 20 feet away unless separated by a median or physical barrier",
          "Only if children are visible"
        ],
        answer: 2,
        why: "Colorado requires stopping at least 20 feet away from a stopped school bus with red lights flashing, with the physical-barrier exception."
      }
    ]
  },
  {
    id: "maneuvers",
    title: "Turns, Parking, and Freeways",
    label: "Move",
    time: "15 min",
    category: "Driving",
    goal: "Practice the lane positioning, signaling, and scanning habits scored on the drive test and tested on the written test.",
    facts: [
      "Signal before every turn, lane change, parking movement, and move away from a curb.",
      "In urban areas, signal continuously for at least 100 feet before turning or changing lanes.",
      "On four-lane highways where the posted speed is over 40 mph, signal for at least 200 feet.",
      "Right turns should begin and end close to the right curb unless signs or markings allow otherwise.",
      "Left turns should start from the left-most legal lane and finish in the correct lane.",
      "When entering a freeway, use the ramp to search, signal, accelerate to traffic speed, and merge when there is a safe gap."
    ],
    mustKnow: [
      "Before changing lanes, check traffic ahead, use mirrors, and look over your shoulder for the blind spot.",
      "Do not stop in an acceleration lane unless absolutely necessary.",
      "When leaving a freeway, signal early, move to the exit lane, and reduce speed after entering the deceleration lane."
    ],
    traps: [
      "Right on red is allowed only after a complete stop, after yielding, and when no sign prohibits it.",
      "Do not swing wide into another lane during turns.",
      "Backing requires looking to the rear and checking front and sides; move slowly and be ready to stop."
    ],
    checkpoint: [
      {
        q: "What is the correct lane-change sequence?",
        options: [
          "Signal, check mirrors and blind spot, move when safe",
          "Move first, then signal",
          "Honk, speed up, and move",
          "Signal only if other traffic is nearby"
        ],
        answer: 0,
        why: "A safe lane change uses signal, mirror checks, blind spot check, and a controlled move only when safe."
      },
      {
        q: "When may you turn right on red in Colorado?",
        options: [
          "Anytime traffic is light",
          "After slowing and honking",
          "After a complete stop and yielding, unless prohibited by sign",
          "Only from a one-way street"
        ],
        answer: 2,
        why: "Right on red requires a full stop, yielding, and no posted prohibition."
      }
    ]
  },
  {
    id: "defense",
    title: "Passing and Defensive Driving",
    label: "Scan",
    time: "16 min",
    category: "Safety",
    goal: "Make the safest choice before trouble develops: following distance, passing, blind spots, and communication.",
    facts: [
      "The three-second rule is a minimum following-distance habit for normal conditions. Add more time in bad weather, at night, near large vehicles, or when towing.",
      "Pass on the left unless on a one-way street or a roadway with at least two lanes moving in the same direction.",
      "Do not pass by driving off the pavement or onto the shoulder.",
      "Do not pass within 100 feet of an intersection or railroad crossing.",
      "Do not pass on hills or curves where your view is blocked.",
      "When passing a bicyclist, allow at least a three-foot buffer."
    ],
    mustKnow: [
      "Large trucks and buses have large blind spots, longer stopping distance, and wide-turn needs.",
      "If you cannot see a truck driver's mirrors, the truck driver likely cannot see you.",
      "Aggressive driving includes willful behavior that puts others or property in danger, such as tailgating, shoulder passing, or running red lights."
    ],
    traps: [
      "Blind spots are not solved by mirrors alone; look over your shoulder.",
      "Only pass one vehicle at a time as a safe general habit.",
      "Do not cut back in front of large vehicles because they need more room to stop."
    ],
    checkpoint: [
      {
        q: "How much space must you give when passing a bicyclist?",
        options: ["At least 1 foot", "At least 2 feet", "At least 3 feet", "No specific space if you signal"],
        answer: 2,
        why: "Colorado drivers must allow at least three feet when passing a bicyclist."
      },
      {
        q: "When should following distance be increased beyond three seconds?",
        options: ["Only on freeways", "In snow, at night, around large vehicles, or when conditions reduce safety", "Never", "Only if a police car is nearby"],
        answer: 1,
        why: "Three seconds is a baseline. Conditions and vehicle type often require a larger gap."
      }
    ]
  },
  {
    id: "conditions",
    title: "Colorado Conditions",
    label: "CO",
    time: "15 min",
    category: "Safety",
    goal: "Adapt to snow, ice, mountains, rural roads, night driving, and construction zones common in Colorado.",
    facts: [
      "On snow or ice, slow down, increase following distance, brake gently, and avoid sudden steering or acceleration.",
      "Bridges, ramps, shaded areas, and overpasses can freeze before other road surfaces.",
      "In mountain driving, use lower gears on long downgrades and avoid riding the brakes.",
      "Pull over only where there is enough room and visibility; mountain shoulders can be narrow or unstable.",
      "At night, reduce speed so you can stop within the distance your headlights show.",
      "Construction zone fines can be higher, and lanes, workers, equipment, and flaggers can change the normal traffic pattern."
    ],
    mustKnow: [
      "Use headlights when visibility is reduced by snow, rain, fog, or darkness.",
      "In fog, use low beams. High beams reflect off the moisture and reduce visibility.",
      "Watch for wildlife on rural and mountain roads, especially around dawn, dusk, and night.",
      "If the vehicle begins to skid, ease off the accelerator and steer in the direction you want the front of the vehicle to go."
    ],
    traps: [
      "Four-wheel drive helps you move; it does not help you stop faster on ice.",
      "Cruise control can be risky on slippery roads.",
      "Do not coast downhill in neutral."
    ],
    checkpoint: [
      {
        q: "What is the safest braking habit on long mountain downgrades?",
        options: ["Ride the brakes continuously", "Shift to neutral", "Use lower gears and controlled braking", "Turn off the engine"],
        answer: 2,
        why: "Lower gears help control speed and reduce brake overheating."
      },
      {
        q: "What should you do in fog?",
        options: ["Use high beams", "Use low beams and slow down", "Follow taillights closely", "Drive with hazard lights at highway speed"],
        answer: 1,
        why: "Low beams reduce glare in fog. Slow down so you can react inside your visible distance."
      }
    ]
  },
  {
    id: "sharing",
    title: "Sharing the Road and Emergencies",
    label: "Care",
    time: "18 min",
    category: "Safety",
    goal: "Protect vulnerable road users and respond correctly to vehicle emergencies or crashes.",
    facts: [
      "Pedestrians have right-of-way at intersections and crosswalks, marked or unmarked.",
      "Bicyclists may ride outside bike lanes and can be harder to see. Check before turning, opening doors, or crossing bike lanes.",
      "Motorcycles can be hidden by vehicles, signs, or blind spots. Judge their speed carefully before turning left.",
      "At railroad crossings, stop when lights flash or gates are down. Never start across unless there is room to clear the tracks completely.",
      "Light rail vehicles may move with traffic signals and cannot stop quickly. Never turn in front of an approaching light rail vehicle.",
      "If your gas pedal sticks, shift to neutral, steer off the road, and stop."
    ],
    mustKnow: [
      "With anti-lock brakes in an emergency, apply firm steady pressure and keep steering.",
      "For a tire blowout, hold the wheel firmly, ease off the accelerator, and slow gradually before pulling off.",
      "After a crash, stop, protect the scene if possible, help injured people, exchange required information, and report when required.",
      "When being stopped by police, signal, pull to the right when safe, turn off the engine and audio, and stay in the vehicle unless directed."
    ],
    traps: [
      "Do not pump anti-lock brakes.",
      "Never assume a pedestrian can hear or see your vehicle.",
      "Never stop with your vehicle blocking the crosswalk."
    ],
    checkpoint: [
      {
        q: "What is the best emergency stop technique with anti-lock brakes?",
        options: ["Pump the brake pedal", "Apply firm steady pressure and keep steering", "Use only the parking brake", "Shift to reverse"],
        answer: 1,
        why: "ABS is designed for firm, continuous brake pressure while you maintain steering control."
      },
      {
        q: "What should you do when railroad crossing lights start flashing?",
        options: ["Stop", "Speed up", "Honk and continue", "Stop only if the gate is down"],
        answer: 0,
        why: "Flashing railroad crossing lights mean stop and wait until it is safe and legal to proceed."
      }
    ]
  }
];

const signItems = [
  {
    id: "stop",
    group: "regulatory",
    visual: "stop",
    label: "STOP",
    prompt: "What action does this sign require?",
    options: ["Slow if traffic is present", "Come to a complete stop", "Yield without stopping", "Stop only if turning"],
    answer: 1,
    explain: "A stop sign requires a complete stop at the stop line, before the crosswalk, or before entering the intersection."
  },
  {
    id: "yield",
    group: "regulatory",
    visual: "yield",
    label: "YIELD",
    prompt: "What should you do at this sign?",
    options: ["Reduce speed or stop if needed to let others go first", "Stop for 10 seconds", "Proceed because you are protected", "Change lanes immediately"],
    answer: 0,
    explain: "Yield means slow and be ready to stop for pedestrians and traffic with right-of-way."
  },
  {
    id: "school",
    group: "warning",
    visual: "warning",
    label: "SCHOOL",
    prompt: "What does a fluorescent yellow-green pentagon or school warning sign tell you?",
    options: ["Truck route", "School or school crossing area", "No pedestrians allowed", "Hospital ahead"],
    answer: 1,
    explain: "School warning signs alert drivers to children, school zones, and school crossings."
  },
  {
    id: "rail-crossing",
    group: "warning",
    visual: "rail",
    label: "RAILROAD",
    prompt: "What should you expect near this sign?",
    options: ["A railroad crossing", "A one-way road", "A divided highway begins", "A bus-only lane"],
    answer: 0,
    explain: "Railroad signs warn of tracks ahead. Never enter unless there is room to clear the tracks."
  },
  {
    id: "ped-crossing",
    group: "warning",
    visual: "warning",
    label: "PED XING",
    prompt: "What should you do near a pedestrian crossing warning sign?",
    options: ["Maintain speed because pedestrians must wait", "Watch for pedestrians and be ready to yield", "Drive on the shoulder", "Use high beams"],
    answer: 1,
    explain: "Pedestrians have right-of-way at intersections and crosswalks, including unmarked crosswalks."
  },
  {
    id: "wrong-way",
    group: "regulatory",
    visual: "route",
    label: "WRONG WAY",
    prompt: "What does a WRONG WAY sign mean?",
    options: ["Continue cautiously", "You are entering traffic in the wrong direction", "The road is closed for weather", "The lane is for carpools"],
    answer: 1,
    explain: "Do not continue past a WRONG WAY sign. It warns you that you are traveling against traffic."
  },
  {
    id: "double-yellow",
    group: "marking",
    visual: "marking",
    lineClass: "double-yellow",
    label: "Double Yellow",
    prompt: "What do double solid yellow lines mean?",
    options: ["Either direction may pass", "No passing for either direction", "One-way traffic", "Lane reserved for buses"],
    answer: 1,
    explain: "Double solid yellow lines mean neither side may pass."
  },
  {
    id: "broken-yellow",
    group: "marking",
    visual: "marking",
    lineClass: "broken-yellow",
    label: "Broken Yellow",
    prompt: "What does a broken yellow line mean?",
    options: ["Passing may be allowed when safe", "Passing is never allowed", "Traffic moves in the same direction", "Pedestrian crossing only"],
    answer: 0,
    explain: "A broken yellow line separates opposite directions and allows passing when it is safe and legal."
  },
  {
    id: "solid-broken",
    group: "marking",
    visual: "marking",
    lineClass: "solid-broken",
    label: "Solid and Broken",
    prompt: "If the solid yellow line is on your side, what does it mean?",
    options: ["You may pass if fast enough", "You may not pass", "Only motorcycles may pass", "The lane is closed"],
    answer: 1,
    explain: "If the solid yellow line is on your side, passing is not allowed."
  },
  {
    id: "broken-white",
    group: "marking",
    visual: "marking",
    lineClass: "white-lane",
    label: "Broken White",
    prompt: "What does a broken white line separate?",
    options: ["Traffic moving in the same direction", "Traffic moving in opposite directions", "A no-stopping zone", "Railroad tracks"],
    answer: 0,
    explain: "White lane lines separate traffic traveling in the same direction. Broken white lines allow lane changes when safe."
  }
];

const scenarios = [
  {
    id: "left-turn-bike",
    title: "Left Turn With an Oncoming Bicyclist",
    scene: "intersection-bike",
    prompt: "You are turning left at a green light. An oncoming bicyclist is traveling straight through the intersection. What is the safest legal move?",
    choices: [
      { text: "Yield and turn only after the bicyclist clears your path.", correct: true, feedback: "Correct. Left turns must yield to oncoming traffic, including bicycles and motorcycles." },
      { text: "Turn first because cars have priority over bicycles.", correct: false, feedback: "Bicyclists are traffic. Yield before crossing their path." },
      { text: "Honk and turn quickly.", correct: false, feedback: "Honking does not create right-of-way and can make the situation less predictable." }
    ]
  },
  {
    id: "school-bus",
    title: "School Bus on an Undivided Road",
    scene: "intersection-bus",
    prompt: "A school bus ahead is stopped with red lights flashing on an undivided road. You are approaching from the opposite direction.",
    choices: [
      { text: "Stop at least 20 feet away and wait until the red lights stop flashing.", correct: true, feedback: "Correct. On an undivided road, both directions stop for flashing red school bus lights." },
      { text: "Slow and pass if no children are visible.", correct: false, feedback: "Visibility is not the standard. The flashing red lights require a stop." },
      { text: "Stop only if you are behind the bus.", correct: false, feedback: "Opposing traffic also stops unless separated by a median or physical barrier." }
    ]
  },
  {
    id: "hands-free",
    title: "Phone at a Red Light",
    scene: "intersection-phone",
    prompt: "You stop at a red light and your phone buzzes in the cupholder. What should you do?",
    choices: [
      { text: "Leave it alone until parked or use only hands-free controls set up before driving.", correct: true, feedback: "Correct. Colorado's hands-free law applies while stopped in traffic or at a signal." },
      { text: "Pick it up because the car is not moving.", correct: false, feedback: "The rule still applies at a stoplight or in traffic." },
      { text: "Hold it below the window so other drivers cannot see.", correct: false, feedback: "Hiding the device does not make manual use legal or safe." }
    ]
  },
  {
    id: "mountain-grade",
    title: "Long Mountain Downgrade",
    scene: "mountain-grade",
    prompt: "You are descending a long mountain grade and your speed keeps increasing. What is the right strategy?",
    choices: [
      { text: "Shift to a lower gear and use controlled braking.", correct: true, feedback: "Correct. Lower gears help control speed and reduce brake overheating." },
      { text: "Shift to neutral to save fuel.", correct: false, feedback: "Coasting in neutral reduces control and is unsafe." },
      { text: "Ride the brakes continuously.", correct: false, feedback: "Continuous braking can overheat brakes and reduce stopping power." }
    ]
  },
  {
    id: "railroad",
    title: "Blocked Railroad Crossing",
    scene: "railroad",
    prompt: "Traffic is backed up after railroad tracks. The gate is up, but there is not enough room for your vehicle on the far side.",
    choices: [
      { text: "Wait before the tracks until there is room to clear them completely.", correct: true, feedback: "Correct. Never start across tracks unless you can clear the crossing." },
      { text: "Move onto the tracks because the gate is up.", correct: false, feedback: "The gate being up does not matter if you cannot clear the tracks." },
      { text: "Stop on the tracks and shift to park.", correct: false, feedback: "Stopping on tracks is extremely dangerous." }
    ]
  },
  {
    id: "abs",
    title: "Emergency Stop With ABS",
    scene: "emergency-stop",
    prompt: "A hazard appears suddenly and your vehicle has anti-lock brakes. What should you do?",
    choices: [
      { text: "Press the brake firmly and keep steady pressure while steering.", correct: true, feedback: "Correct. ABS works with firm steady brake pressure." },
      { text: "Pump the brakes rapidly.", correct: false, feedback: "Pumping is not the correct ABS technique." },
      { text: "Use the parking brake first.", correct: false, feedback: "The service brake with ABS is the correct emergency stop control." }
    ]
  }
];

const questionBank = [
  makeQuestion("Licensing", "What is the minimum age to receive a Colorado learner's permit?", ["14", "15", "16", "18"], 1, "Colorado permits can be issued starting at age 15."),
  makeQuestion("Licensing", "A Colorado permit holder must drive with:", ["Any licensed friend", "A licensed driver 21 or older in the front passenger seat", "Only a driving instructor", "No one after sunset"], 1, "Permit driving requires a qualifying licensed supervisor in the front passenger seat."),
  makeQuestion("Licensing", "For a typical minor license upgrade, how long must the permit be held?", ["3 months", "6 months", "12 full months", "Until age 21"], 2, "Most minors must hold the permit for 12 full months before a license."),
  makeQuestion("Licensing", "How many night driving hours are part of the standard minor drive log?", ["5", "10", "15", "20"], 1, "The 50-hour log includes at least 10 hours at night."),
  makeQuestion("Licensing", "Where are Colorado driving skills tests generally taken?", ["At a state driver license office", "With an approved third-party driving school or tester", "Only online", "Only with a parent"], 1, "State driver license offices are not conducting driving skills tests."),
  makeQuestion("Licensing", "If you pass the @Home knowledge test, what should you bring to the DMV appointment?", ["Proof or confirmation that you passed", "Only your vehicle registration", "A printed driving log only", "A notarized road-test score"], 0, "The permit issuance appointment needs proof of passing plus required documents."),
  makeQuestion("Licensing", "The @Home knowledge test requires:", ["A phone camera", "A desktop or laptop with a webcam", "A tablet only", "No camera"], 1, "The online test uses a desktop or laptop with webcam monitoring."),
  makeQuestion("Licensing", "Drivers under 18 with a first-year license are generally restricted from driving:", ["8 p.m. to midnight", "Midnight to 5 a.m.", "Noon to 5 p.m.", "Only on weekends"], 1, "The curfew is midnight to 5 a.m. unless an exception applies."),
  makeQuestion("Licensing", "During the first six months of a minor license, which passenger rule generally applies?", ["Any passengers are allowed", "Only passengers 21 or older, except siblings and emergencies", "No passengers of any age", "Only one passenger under 21"], 1, "The first six months allow passengers 21 or older, with exceptions."),
  makeQuestion("Licensing", "For ages 15 to 15 years, 6 months, what education is required before the permit?", ["No formal course", "30-hour driver education course", "A 1-hour safety video", "Only behind-the-wheel training"], 1, "The youngest permit age band requires a 30-hour driver education course."),

  makeQuestion("Law", "Colorado's 2025 hands-free law generally prohibits drivers from:", ["Using turn signals", "Holding or manually using a mobile electronic device while driving", "Listening to GPS directions", "Having a phone in the vehicle"], 1, "Drivers must use hands-free methods unless an exception applies."),
  makeQuestion("Law", "Does Colorado's hands-free rule apply at a stoplight?", ["Yes", "No", "Only after dark", "Only in school zones"], 0, "The rule applies while stopped in traffic or at a signal."),
  makeQuestion("Law", "A first hands-free law violation starts with:", ["No fine and no points", "$75 fine and two license suspension points", "A mandatory jail sentence", "Vehicle impoundment"], 1, "The first offense starts at a $75 fine and two license suspension points."),
  makeQuestion("Law", "Drivers under 18 may use a cellphone while driving:", ["For any hands-free call", "Only to place an emergency call", "If the trip is under 5 miles", "At stop signs only"], 1, "Drivers under 18 are prohibited from cellphone use except emergency calls."),
  makeQuestion("Law", "Adult drivers 21 or older can face point suspension at:", ["4 points in 12 months", "8 points in 24 months", "12 points in 12 months", "20 points in 12 months"], 2, "Adult point suspension can begin at 12 points in any 12 consecutive months."),
  makeQuestion("Law", "Under Colorado Express Consent, a driver must:", ["Consent to a required chemical test when an officer has reasonable grounds for DUI", "Take only a roadside breath test", "Submit only if convicted first", "Choose no test without consequences"], 0, "Express Consent requires cooperation with chemical testing when legally requested."),
  makeQuestion("Law", "A first refusal of the required alcohol chemical test can result in:", ["One-year revocation", "Only a warning", "A lower insurance bill", "No DMV action"], 0, "Refusal can trigger one-year revocation for a first offense."),
  makeQuestion("Law", "Children under 2 and under 40 pounds must generally ride:", ["In a rear-facing car seat in the back seat if available", "In an adult lap belt", "In the front seat if airbags are on", "Without restraint on short trips"], 0, "The updated child passenger rule requires rear-facing restraint for this group."),
  makeQuestion("Law", "Children ages 9 through 17 must be:", ["Unrestrained in the back seat", "Properly restrained in a booster seat or seat belt", "In a rear-facing car seat only", "In the front seat only"], 1, "Children and teens 9 through 17 must use a proper booster or seat belt."),
  makeQuestion("Law", "A child passenger safety violation is:", ["Only enforceable after another violation", "A primary violation", "Not enforceable in cities", "Only a warning"], 1, "Drivers can be stopped if a child is not properly restrained."),

  makeQuestion("Road Signs", "A steady red light means:", ["Stop until green, with limited turns after stopping and yielding if allowed", "Slow down only", "Proceed if no cars are visible", "Stop only for pedestrians"], 0, "A red light requires a stop. Right on red may be allowed after stopping and yielding unless prohibited."),
  makeQuestion("Road Signs", "A flashing red light means:", ["Treat it as a stop sign", "Proceed without stopping", "Speed up", "Yield only to buses"], 0, "A flashing red light has the same meaning as a stop sign."),
  makeQuestion("Road Signs", "A flashing yellow light means:", ["Stop and wait for green", "Hazard ahead; slow and proceed with caution", "Road closed", "Emergency vehicle only"], 1, "Flashing yellow warns of a hazard."),
  makeQuestion("Road Signs", "A flashing yellow arrow for a left turn means:", ["Protected turn only", "Turn with caution after yielding to oncoming traffic and pedestrians", "No left turn", "Stop and wait for a green arrow only"], 1, "The driver may turn only after yielding."),
  makeQuestion("Road Signs", "A red arrow means:", ["You may turn after yielding", "Do not proceed in the arrow direction", "Protected turn", "Speed limit changes"], 1, "A red arrow prohibits movement in that direction until allowed."),
  makeQuestion("Road Signs", "A diamond-shaped yellow sign usually means:", ["Warning", "Interstate route", "Parking rule", "Hospital"], 0, "Diamond yellow signs usually warn of road conditions or hazards."),
  makeQuestion("Road Signs", "A downward triangle sign means:", ["Stop", "Yield", "No passing", "Railroad crossing"], 1, "The upside-down triangle is the yield sign shape."),
  makeQuestion("Road Signs", "A red octagon means:", ["Stop", "Yield", "Do not enter", "School zone"], 0, "The red octagon is reserved for STOP."),
  makeQuestion("Road Signs", "If traffic signals are not operating, drivers should usually:", ["Treat the intersection as a four-way stop", "Speed through before others", "Ignore cross traffic", "Use only horn signals"], 0, "A dark or malfunctioning signal is treated as a four-way stop unless directed otherwise."),
  makeQuestion("Road Signs", "A HAWK signal is used to help:", ["Trucks weigh in", "Pedestrians cross safely", "Open toll lanes", "Measure speed"], 1, "HAWK signals are pedestrian crossing signals."),

  makeQuestion("Markings", "Yellow lines separate:", ["Traffic moving in opposite directions", "Traffic moving in the same direction", "Parking lanes only", "Bike lanes only"], 0, "Yellow separates opposite directions."),
  makeQuestion("Markings", "White lines separate:", ["Traffic moving in the same direction", "Traffic moving in opposite directions", "Rail crossings", "Construction areas only"], 0, "White separates same-direction lanes."),
  makeQuestion("Markings", "Double solid yellow lines mean:", ["Either side may pass", "Neither side may pass", "Only trucks may pass", "Bike lane ahead"], 1, "Double solid yellow means no passing for both directions."),
  makeQuestion("Markings", "If the broken yellow line is on your side and passing is otherwise safe, you may:", ["Pass", "Never pass", "Drive on the shoulder", "Stop in the lane"], 0, "A broken yellow line on your side allows passing when safe."),
  makeQuestion("Markings", "A two-way left-turn lane may be used for:", ["Regular travel", "Passing", "Preparing for a left turn from either direction", "Parking"], 2, "Shared center turn lanes are for left turns, not travel or passing."),
  makeQuestion("Markings", "A white diamond painted in a lane often marks:", ["A special-use lane such as HOV or transit", "No lane use", "A railroad track", "A school bus stop"], 0, "Diamonds mark preferential or exclusive-use lanes."),
  makeQuestion("Markings", "Crosswalks exist:", ["Only where painted", "At intersections even when unmarked", "Only in school zones", "Only on one-way streets"], 1, "Drivers must watch for marked and unmarked crosswalks."),
  makeQuestion("Markings", "A solid white line generally tells drivers to:", ["Stay in the lane", "Pass on the shoulder", "Enter the center turn lane", "Cross immediately"], 0, "Solid white lines indicate staying in lane unless safety requires otherwise."),

  makeQuestion("Rules", "At a four-way stop, the first driver to stop should:", ["Go first after yielding as needed", "Always wait for a truck", "Back up", "Wave everyone through"], 0, "At four-way stops, first arrival generally proceeds first."),
  makeQuestion("Rules", "If two drivers reach a four-way stop at the same time, the driver on the left should:", ["Go first", "Yield to the driver on the right", "Honk", "Reverse"], 1, "When arrival is simultaneous, the left driver yields to the right driver."),
  makeQuestion("Rules", "Before turning left across oncoming traffic, you must:", ["Yield unless protected or first at a four-way stop", "Speed up", "Turn before pedestrians", "Flash headlights"], 0, "Left turns must yield to oncoming vehicles, bikes, motorcycles, and pedestrians unless protected."),
  makeQuestion("Rules", "Pedestrians have right-of-way:", ["Only at painted crosswalks", "At intersections and crosswalks, including unmarked crosswalks", "Only with a crossing guard", "Never outside downtown"], 1, "Drivers must yield to pedestrians at marked and unmarked crosswalks."),
  makeQuestion("Rules", "The posted speed limit is:", ["Always safe in every condition", "The maximum for ideal conditions", "A minimum speed", "Only a suggestion"], 1, "Drivers must reduce speed when hazards, weather, or traffic require it."),
  makeQuestion("Rules", "When an emergency vehicle approaches with lights or siren, you should:", ["Stop in your lane immediately", "Yield and pull to the right when safe", "Speed up", "Turn left"], 1, "Yield and move right when it is safe."),
  makeQuestion("Rules", "At a roundabout, entering drivers must yield to:", ["Traffic already in the roundabout and pedestrians or bicyclists in crosswalks", "Only buses", "No one", "Only vehicles on the right"], 0, "Yield before entering a roundabout."),
  makeQuestion("Rules", "When a school bus is stopped with red lights flashing on an undivided road, opposing traffic must:", ["Stop unless separated by a median or physical barrier", "Continue", "Honk", "Pass at 10 mph"], 0, "Both directions stop unless a median or physical barrier separates them."),
  makeQuestion("Rules", "How far from a school bus with flashing red lights must you stop?", ["At least 5 feet", "At least 10 feet", "At least 20 feet", "At least 100 feet"], 2, "Stop at least 20 feet away."),
  makeQuestion("Rules", "A vehicle stopped at a crosswalk should not be passed because:", ["It may be stopped for a pedestrian you cannot see", "Passing is always faster", "The lane is closed", "The driver is lost"], 0, "Passing a stopped vehicle at a crosswalk can hide a pedestrian."),

  makeQuestion("Driving", "In urban areas, signal continuously before turning or changing lanes for at least:", ["25 feet", "50 feet", "100 feet", "500 feet"], 2, "Use at least 100 feet in urban areas."),
  makeQuestion("Driving", "On four-lane highways over 40 mph, signal before turning or changing lanes for at least:", ["50 feet", "100 feet", "200 feet", "1 mile"], 2, "Use at least 200 feet on these higher-speed four-lane roads."),
  makeQuestion("Driving", "Before changing lanes, check:", ["Only the side mirror", "Ahead, mirrors, and blind spot", "Only the rearview mirror", "Only if your signal is broken"], 1, "A proper lane change includes scanning ahead, mirrors, and blind spot."),
  makeQuestion("Driving", "When entering a freeway, you should:", ["Stop at the end of the ramp", "Signal, search for a gap, accelerate to traffic speed, and merge when safe", "Merge at any speed", "Use hazard lights"], 1, "Use the ramp to match traffic and find a safe gap."),
  makeQuestion("Driving", "When leaving a freeway, reduce speed:", ["Before signaling", "Only after entering the deceleration or exit lane when safe", "In the travel lane far before the exit", "Not at all"], 1, "Avoid slowing traffic too early in the through lane; use the exit lane for deceleration."),
  makeQuestion("Driving", "A right turn should generally start and finish:", ["From and into the left lane", "Close to the right curb or edge", "Across all lanes", "From the shoulder"], 1, "Right turns are made from the right-most legal position unless signs or markings say otherwise."),
  makeQuestion("Driving", "Right on red is allowed when:", ["You stop, yield, and no sign prohibits it", "You only slow down", "You are in a hurry", "The light has been red for 30 seconds"], 0, "A legal right on red requires a complete stop, yielding, and no prohibition."),
  makeQuestion("Driving", "Backing safely requires:", ["Using only mirrors", "Looking to the rear and checking front and sides while moving slowly", "Backing quickly", "Honking continuously"], 1, "Use direct looking and checks in all directions."),
  makeQuestion("Driving", "A safe following distance in normal conditions is at least:", ["One second", "Three seconds", "Ten car lengths at every speed", "Half a second"], 1, "Three seconds is a baseline for normal conditions."),
  makeQuestion("Driving", "When should you increase following distance?", ["Snow, darkness, heavy traffic, towing, or large vehicles", "Only on sunny days", "Never", "Only below 10 mph"], 0, "Poor conditions and vehicle limits require more space."),

  makeQuestion("Safety", "When passing a bicyclist, allow at least:", ["1 foot", "2 feet", "3 feet", "6 inches"], 2, "Colorado requires a minimum three-foot buffer."),
  makeQuestion("Safety", "You may pass on the right:", ["By driving onto the shoulder", "On a one-way street or road with two or more lanes in your direction, when safe", "On any hill", "Inside an intersection"], 1, "Passing on the right is limited and may not use the shoulder."),
  makeQuestion("Safety", "Do not pass within 100 feet of:", ["Any intersection or railroad crossing", "Any driveway", "Any parked car", "A streetlight"], 0, "Passing is prohibited near intersections and railroad crossings."),
  makeQuestion("Safety", "If you cannot see a truck driver's mirrors:", ["The driver likely cannot see you", "You are definitely visible", "You should tailgate", "Turn on high beams"], 0, "Truck blind spots are large; mirror visibility is a practical warning."),
  makeQuestion("Safety", "On snow or ice, you should:", ["Brake hard and steer quickly", "Slow down, increase space, and make smooth inputs", "Use cruise control", "Follow tire tracks closely"], 1, "Smooth control and extra space reduce skids."),
  makeQuestion("Safety", "If your vehicle starts to skid, you should:", ["Slam the brakes", "Ease off the accelerator and steer where you want the front of the vehicle to go", "Close your eyes", "Shift to park"], 1, "Look and steer toward your intended path."),
  makeQuestion("Safety", "On a long mountain downgrade, use:", ["Lower gears and controlled braking", "Neutral", "Continuous heavy braking", "The parking brake only"], 0, "Lower gears help manage speed and brake heat."),
  makeQuestion("Safety", "In fog, use:", ["High beams", "Low beams", "No lights", "Interior lights"], 1, "Low beams reduce glare in fog."),
  makeQuestion("Safety", "At railroad crossing lights, you should:", ["Stop when lights flash", "Speed up before gates lower", "Shift gears on the tracks", "Stop only if a train is visible"], 0, "Flashing crossing lights require a stop."),
  makeQuestion("Safety", "Before entering railroad tracks, make sure:", ["There is room to clear the tracks completely", "The vehicle ahead is moving slowly", "You can stop on the tracks", "Your hazard lights are on"], 0, "Never enter unless you can clear the tracks."),
  makeQuestion("Safety", "With anti-lock brakes in an emergency, you should:", ["Pump the brakes", "Apply firm steady pressure and keep steering", "Use only the parking brake", "Shift to neutral first"], 1, "ABS is designed for firm continuous braking."),
  makeQuestion("Safety", "If the gas pedal sticks, you should:", ["Press harder", "Shift to neutral and steer off the road", "Turn off the key immediately while moving fast", "Use cruise control"], 1, "Neutral removes engine power while you steer to safety."),
  makeQuestion("Safety", "If a tire blows out, you should:", ["Hold the wheel firmly and slow gradually", "Brake hard immediately", "Turn sharply to the shoulder", "Accelerate"], 0, "Maintain control first, then slow and pull off safely."),
  makeQuestion("Safety", "Aggressive driving may include:", ["Tailgating, shoulder passing, red-light running, or threatening maneuvers", "Using a turn signal", "Yielding to pedestrians", "Checking mirrors"], 0, "Aggressive driving is willful unsafe behavior."),
  makeQuestion("Safety", "When stopped by police, a safe response is to:", ["Signal and pull right when safe, turn off engine and audio, stay in the vehicle unless directed", "Exit immediately and walk toward the officer", "Keep driving to your destination", "Hide your hands"], 0, "Calm, visible, predictable actions improve safety during traffic stops.")
];

function makeQuestion(category, q, options, answer, explain) {
  return { category, q, options, answer, explain };
}

function createDefaultState() {
  return {
    view: "dashboard",
    selectedModule: modules[0].id,
    completedModules: [],
    checkpointAnswers: {},
    signFilter: "all",
    signIndex: 0,
    signAnswered: {},
    scenarioOrder: scenarios.map((item) => item.id),
    scenarioAnswers: {},
    mockQuestions: [],
    mockAnswers: {},
    mockSubmitted: false,
    bestScore: null,
    weakCategories: {},
    planner: {
      age: "15",
      status: "new"
    }
  };
}

let state = loadState();

document.addEventListener("DOMContentLoaded", () => {
  attachGlobalEvents();
  ensureMock();
  render();
});

function loadState() {
  const defaults = createDefaultState();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaults, ...saved, planner: { ...defaults.planner, ...(saved?.planner || {}) } };
  } catch {
    return defaults;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function attachGlobalEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.querySelectorAll("[data-view-jump]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.viewJump));
  });

  document.getElementById("resetProgress").addEventListener("click", () => {
    const keepPlanner = state.planner;
    state = { ...createDefaultState(), planner: keepPlanner };
    ensureMock(true);
    saveState();
    render();
    showToast("Progress reset.");
  });

  document.getElementById("ageSelect").addEventListener("change", (event) => {
    state.planner.age = event.target.value;
    saveState();
    renderPlanner();
  });

  document.getElementById("statusSelect").addEventListener("change", (event) => {
    state.planner.status = event.target.value;
    saveState();
    renderPlanner();
  });

  document.querySelectorAll("[data-sign-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.signFilter = button.dataset.signFilter;
      state.signIndex = 0;
      saveState();
      renderSigns();
    });
  });

  document.getElementById("shuffleScenarios").addEventListener("click", () => {
    state.scenarioOrder = shuffle([...scenarios.map((item) => item.id)]);
    state.scenarioAnswers = {};
    saveState();
    renderScenarios();
  });

  document.getElementById("newMock").addEventListener("click", () => {
    ensureMock(true);
    saveState();
    renderMock();
    showToast("New mock test ready.");
  });

  document.getElementById("submitMock").addEventListener("click", submitMock);

  window.addEventListener("hashchange", () => {
    const next = window.location.hash.replace("#", "");
    if (["dashboard", "learn", "signs", "scenarios", "mock"].includes(next)) {
      switchView(next, false);
    }
  });
}

function switchView(view, updateHash = true) {
  state.view = view;
  saveState();
  if (updateHash) window.location.hash = view;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function render() {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("is-active", view.id === state.view));
  document.querySelectorAll(".nav-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === state.view));

  renderDashboard();
  renderLearning();
  renderSigns();
  renderScenarios();
  renderMock();
}

function renderDashboard() {
  const completed = state.completedModules.length;
  const percent = Math.round((completed / modules.length) * 100);
  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressBar").style.width = `${percent}%`;
  document.getElementById("completedCount").textContent = `${completed} / ${modules.length}`;
  document.getElementById("bestScore").textContent = state.bestScore === null ? "Not yet" : `${state.bestScore}%`;
  document.getElementById("weakAreaCount").textContent = Object.keys(state.weakCategories || {}).length;

  renderPlanner();
  renderNextLesson();
  renderModuleCards();
  renderSources();
}

function renderPlanner() {
  const ageSelect = document.getElementById("ageSelect");
  const statusSelect = document.getElementById("statusSelect");
  ageSelect.value = state.planner.age;
  statusSelect.value = state.planner.status;

  const result = document.getElementById("plannerResult");
  const items = [];
  if (state.planner.status === "permit") {
    items.push("Keep driving only with a licensed supervisor until your permit is upgraded.");
    items.push("If you are under 18, keep building the 50-hour log with 10 night hours.");
  } else if (state.planner.status === "expired") {
    items.push("Start with a Colorado permit because licenses expired or canceled over 12 months require the permit path.");
    items.push("Study, pass the knowledge test, and schedule the permit issuance appointment.");
  } else if (state.planner.status === "transfer") {
    items.push("Use the Colorado new resident and transfer guidance to confirm document and testing requirements.");
    items.push("If you are transferring a minor permit, Colorado may apply permit-hold and drive-log requirements.");
  } else {
    items.push("Study the handbook and take practice questions before scheduling the knowledge test.");
    items.push("Pre-register online, pass the knowledge test, then schedule the permit appointment.");
  }

  if (state.planner.age === "15") {
    items.push("Complete a 30-hour driver education course before the permit.");
  } else if (state.planner.age === "15_6") {
    items.push("Complete a 4-hour driver awareness program or a 30-hour driver education course.");
  } else if (state.planner.age === "16_17") {
    items.push("No formal education is required for the permit, but the knowledge test and appointment still are.");
    items.push("For the license, expect 12 months of permit hold, 50 logged hours, and a driving skills test.");
  } else if (state.planner.age === "18_20") {
    items.push("No formal education is required for the permit, but you still need the knowledge test and permit before the skills test.");
  } else {
    items.push("Adult first-time drivers still start with a permit when they have never been licensed.");
  }

  result.innerHTML = `
    <strong>Your path focus</strong>
    <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
}

function renderNextLesson() {
  const next = modules.find((module) => !state.completedModules.includes(module.id)) || modules[0];
  document.getElementById("nextLesson").innerHTML = `
    <h3>${next.title}</h3>
    <p>${next.goal}</p>
    <div class="module-meta">
      <span class="tag">${next.category}</span>
      <span class="tag">${next.time}</span>
    </div>
    <button class="button primary" data-open-module="${next.id}">Open Lesson</button>
  `;
  document.querySelector("[data-open-module]").addEventListener("click", (event) => {
    state.selectedModule = event.currentTarget.dataset.openModule;
    saveState();
    switchView("learn");
  });
}

function renderModuleCards() {
  const container = document.getElementById("moduleCards");
  container.innerHTML = modules
    .map((module, index) => {
      const complete = state.completedModules.includes(module.id);
      return `
        <article class="module-card ${complete ? "is-complete" : ""}">
          <div>
            <div class="module-meta">
              <span class="tag">${String(index + 1).padStart(2, "0")}</span>
              <span class="status-pill ${complete ? "good" : "warn"}">${complete ? "Complete" : "Open"}</span>
            </div>
            <h3>${module.title}</h3>
            <p>${module.goal}</p>
          </div>
          <button class="button secondary" data-module-card="${module.id}">${complete ? "Review" : "Study"}</button>
        </article>
      `;
    })
    .join("");

  container.querySelectorAll("[data-module-card]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedModule = button.dataset.moduleCard;
      saveState();
      switchView("learn");
    });
  });
}

function renderSources() {
  const container = document.getElementById("sourceLinks");
  container.innerHTML = sources
    .map(
      (source) => `
        <a class="source-card" href="${source.url}" target="_blank" rel="noreferrer">
          <strong>${source.title}</strong>
          <span>${source.note}</span>
        </a>
      `
    )
    .join("");
}

function renderLearning() {
  const list = document.getElementById("lessonList");
  list.innerHTML = modules
    .map((module, index) => {
      const complete = state.completedModules.includes(module.id);
      const active = state.selectedModule === module.id;
      return `
        <button class="lesson-button ${active ? "is-active" : ""}" data-lesson="${module.id}">
          <strong>${index + 1}. ${module.title}</strong>
          <small>${complete ? "Complete" : module.category} - ${module.time}</small>
        </button>
      `;
    })
    .join("");

  list.querySelectorAll("[data-lesson]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedModule = button.dataset.lesson;
      saveState();
      renderLearning();
    });
  });

  const module = modules.find((item) => item.id === state.selectedModule) || modules[0];
  const complete = state.completedModules.includes(module.id);
  const content = document.getElementById("lessonContent");
  content.innerHTML = `
    <div class="lesson-hero">
      <div>
        <p class="eyebrow">${module.category}</p>
        <h2>${module.title}</h2>
        <p>${module.goal}</p>
        <div class="module-meta">
          <span class="tag">${module.time}</span>
          <span class="status-pill ${complete ? "good" : "warn"}">${complete ? "Complete" : "In progress"}</span>
        </div>
      </div>
      <div class="lesson-icon" aria-hidden="true">${module.label}</div>
    </div>

    <section class="lesson-section">
      <h3>Core Facts</h3>
      <div class="fact-grid">
        ${module.facts.map((fact) => `<div class="fact-item">${fact}</div>`).join("")}
      </div>
    </section>

    <section class="lesson-section">
      <h3>Must Know</h3>
      <ul>${module.mustKnow.map((fact) => `<li>${fact}</li>`).join("")}</ul>
    </section>

    <section class="lesson-section">
      <h3>Common Traps</h3>
      <ul>${module.traps.map((fact) => `<li>${fact}</li>`).join("")}</ul>
    </section>

    <section class="lesson-section">
      <h3>Checkpoint</h3>
      <div class="quiz-grid">
        ${module.checkpoint.map((question, index) => renderCheckpoint(module.id, question, index)).join("")}
      </div>
    </section>

    <section class="lesson-section">
      <button class="button primary" data-complete-module="${module.id}">${complete ? "Mark Reviewed" : "Complete Lesson"}</button>
      <button class="button secondary" data-practice-category="${module.category}">Practice Related Questions</button>
    </section>
  `;

  content.querySelectorAll("[data-checkpoint]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = `${button.dataset.moduleId}-${button.dataset.questionIndex}`;
      state.checkpointAnswers[key] = Number(button.dataset.checkpoint);
      saveState();
      renderLearning();
    });
  });

  content.querySelector("[data-complete-module]").addEventListener("click", () => {
    if (!state.completedModules.includes(module.id)) state.completedModules.push(module.id);
    saveState();
    renderDashboard();
    renderLearning();
    showToast(`${module.title} marked complete.`);
  });

  content.querySelector("[data-practice-category]").addEventListener("click", () => {
    const category = module.category === "Road Signs" ? "Road Signs" : module.category;
    state.mockQuestions = selectQuestions(10, category).map((q) => questionBank.indexOf(q));
    state.mockAnswers = {};
    state.mockSubmitted = false;
    saveState();
    switchView("mock");
  });
}

function renderCheckpoint(moduleId, question, index) {
  const key = `${moduleId}-${index}`;
  const selected = state.checkpointAnswers[key];
  const answered = selected !== undefined;
  return `
    <article class="question-card">
      <h3>${question.q}</h3>
      <div class="answer-grid">
        ${question.options
          .map((option, optionIndex) => {
            let optionClass = "";
            if (answered && optionIndex === question.answer) optionClass = "is-correct";
            if (answered && optionIndex === selected && selected !== question.answer) optionClass = "is-wrong";
            return `
              <button class="quiz-option ${optionClass}" data-module-id="${moduleId}" data-question-index="${index}" data-checkpoint="${optionIndex}">
                ${option}
              </button>
            `;
          })
          .join("")}
      </div>
      ${answered ? `<div class="feedback"><strong>${selected === question.answer ? "Correct." : "Review this."}</strong> ${question.why}</div>` : ""}
    </article>
  `;
}

function renderSigns() {
  document.querySelectorAll("[data-sign-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.signFilter === state.signFilter);
  });

  const filtered = getFilteredSigns();
  if (state.signIndex >= filtered.length) state.signIndex = 0;
  const item = filtered[state.signIndex] || signItems[0];
  const answered = state.signAnswered[item.id];
  const card = document.getElementById("signDrill");
  card.innerHTML = `
    <div class="sign-stage">
      ${renderSignVisual(item)}
    </div>
    <div class="sign-info">
      <p class="eyebrow">${item.group}</p>
      <h2>${item.label}</h2>
      <p>${item.prompt}</p>
      <div class="answer-grid">
        ${item.options
          .map((option, index) => {
            let optionClass = "";
            if (answered !== undefined && index === item.answer) optionClass = "is-correct";
            if (answered !== undefined && index === answered && answered !== item.answer) optionClass = "is-wrong";
            return `<button class="quiz-option ${optionClass}" data-sign-answer="${index}">${option}</button>`;
          })
          .join("")}
      </div>
      ${answered !== undefined ? `<div class="feedback"><strong>${answered === item.answer ? "Correct." : "Not quite."}</strong> ${item.explain}</div>` : ""}
      <div class="hero-actions">
        <button class="button secondary" data-prev-sign>Previous</button>
        <button class="button primary" data-next-sign>Next</button>
      </div>
    </div>
  `;

  card.querySelectorAll("[data-sign-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      state.signAnswered[item.id] = Number(button.dataset.signAnswer);
      saveState();
      renderSigns();
    });
  });
  card.querySelector("[data-prev-sign]").addEventListener("click", () => {
    state.signIndex = (state.signIndex - 1 + filtered.length) % filtered.length;
    saveState();
    renderSigns();
  });
  card.querySelector("[data-next-sign]").addEventListener("click", () => {
    state.signIndex = (state.signIndex + 1) % filtered.length;
    saveState();
    renderSigns();
  });

  const set = document.getElementById("signSet");
  set.innerHTML = filtered
    .map(
      (sign, index) => `
        <button class="mini-sign ${index === state.signIndex ? "is-active" : ""}" data-sign-index="${index}">
          ${sign.label}
        </button>
      `
    )
    .join("");
  set.querySelectorAll("[data-sign-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.signIndex = Number(button.dataset.signIndex);
      saveState();
      renderSigns();
    });
  });
}

function getFilteredSigns() {
  return state.signFilter === "all" ? signItems : signItems.filter((item) => item.group === state.signFilter);
}

function renderSignVisual(item) {
  if (item.visual === "marking") {
    return `
      <div class="sign-visual marking">
        <div class="mark-lines ${item.lineClass}"></div>
        <span>${item.label}</span>
      </div>
    `;
  }
  return `<div class="sign-visual ${item.visual}"><span>${item.label}</span></div>`;
}

function renderScenarios() {
  const board = document.getElementById("scenarioBoard");
  const ordered = state.scenarioOrder.map((id) => scenarios.find((item) => item.id === id)).filter(Boolean);
  board.innerHTML = ordered
    .map((scenario) => {
      const answered = state.scenarioAnswers[scenario.id];
      return `
        <article class="scenario-card">
          <div class="scenario-visual" aria-hidden="true">${renderScenarioVisual(scenario.scene)}</div>
          <div class="scenario-body">
            <p class="eyebrow">Scenario</p>
            <h2>${scenario.title}</h2>
            <p>${scenario.prompt}</p>
            <div>
              ${scenario.choices
                .map((choice, index) => {
                  let choiceClass = "";
                  if (answered !== undefined && choice.correct) choiceClass = "correct";
                  if (answered !== undefined && answered === index && !choice.correct) choiceClass = "wrong";
                  return `<button class="choice ${choiceClass}" data-scenario="${scenario.id}" data-choice="${index}">${choice.text}</button>`;
                })
                .join("")}
            </div>
            ${
              answered !== undefined
                ? `<div class="feedback">${scenario.choices[answered].feedback}</div>`
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");

  board.querySelectorAll("[data-scenario]").forEach((button) => {
    button.addEventListener("click", () => {
      state.scenarioAnswers[button.dataset.scenario] = Number(button.dataset.choice);
      saveState();
      renderScenarios();
    });
  });
}

function renderScenarioVisual(scene) {
  const common = `<div class="intersection"></div>`;
  const visuals = {
    "intersection-bike": `${common}<div class="scene-car" style="left:18%;top:46%;"></div><div class="scene-bike" style="right:18%;top:45%;"></div>`,
    "intersection-bus": `${common}<div class="scene-car" style="left:20%;top:46%;"></div><div class="scene-car red" style="right:18%;top:46%;width:92px;"></div>`,
    "intersection-phone": `${common}<div class="scene-car" style="left:44%;bottom:18%;"></div><div class="scene-ped" style="left:53%;top:38%;"></div>`,
    "mountain-grade": `<div class="mountain m1"></div><div class="mountain m2"></div><div class="road"></div><div class="scene-car" style="right:25%;bottom:24%;"></div>`,
    railroad: `${common}<div class="sign-visual rail" style="position:absolute;left:16%;top:18%;width:118px;"><span>RR</span></div><div class="scene-car" style="left:42%;top:46%;"></div>`,
    "emergency-stop": `${common}<div class="scene-car" style="left:44%;bottom:16%;"></div><div class="scene-ped" style="left:48%;top:42%;"></div>`
  };
  return visuals[scene] || common;
}

function ensureMock(force = false) {
  if (force || !state.mockQuestions.length) {
    state.mockQuestions = selectQuestions(25).map((question) => questionBank.indexOf(question));
    state.mockAnswers = {};
    state.mockSubmitted = false;
  }
}

function selectQuestions(count, category = null) {
  const pool = category ? questionBank.filter((question) => question.category === category) : questionBank;
  return shuffle([...pool]).slice(0, Math.min(count, pool.length));
}

function renderMock() {
  ensureMock();
  const questions = state.mockQuestions.map((index) => questionBank[index]).filter(Boolean);
  const answered = Object.keys(state.mockAnswers).length;
  const status = document.getElementById("mockStatus");
  const submit = document.getElementById("submitMock");

  let scoreBlock = "";
  if (state.mockSubmitted) {
    const result = gradeMock();
    scoreBlock = ` Score: <strong>${result.correct}/${questions.length} (${result.percent}%)</strong>. ${result.percent >= 80 ? "Passing range for this practice set." : "Review missed categories, then retake."}`;
  }
  status.innerHTML = `
    Answered <strong>${answered}/${questions.length}</strong>. Aim for 80% or better before scheduling the official test.${scoreBlock}
  `;
  submit.disabled = state.mockSubmitted || answered < questions.length;

  const container = document.getElementById("mockTest");
  container.innerHTML = questions
    .map((question, qIndex) => {
      const selected = state.mockAnswers[qIndex];
      return `
        <article class="question-card">
          <header>
            <h3>${qIndex + 1}. ${question.q}</h3>
            <span class="tag">${question.category}</span>
          </header>
          <fieldset>
            ${question.options
              .map((option, optionIndex) => {
                let optionClass = "";
                if (state.mockSubmitted && optionIndex === question.answer) optionClass = "is-correct";
                if (state.mockSubmitted && optionIndex === selected && selected !== question.answer) optionClass = "is-wrong";
                return `
                  <label class="radio-option ${optionClass}">
                    <input type="radio" name="q${qIndex}" value="${optionIndex}" ${selected === optionIndex ? "checked" : ""} ${state.mockSubmitted ? "disabled" : ""} />
                    <span>${option}</span>
                  </label>
                `;
              })
              .join("")}
          </fieldset>
          ${state.mockSubmitted ? `<div class="feedback"><strong>${selected === question.answer ? "Correct." : "Missed."}</strong> ${question.explain}</div>` : ""}
        </article>
      `;
    })
    .join("");

  if (!state.mockSubmitted) {
    container.querySelectorAll("input[type='radio']").forEach((input) => {
      input.addEventListener("change", () => {
        const qIndex = Number(input.name.replace("q", ""));
        state.mockAnswers[qIndex] = Number(input.value);
        saveState();
        renderMock();
      });
    });
  }
}

function submitMock() {
  ensureMock();
  const questions = state.mockQuestions.map((index) => questionBank[index]).filter(Boolean);
  if (Object.keys(state.mockAnswers).length < questions.length) {
    showToast("Answer every question before submitting.");
    return;
  }
  state.mockSubmitted = true;
  const result = gradeMock();
  state.bestScore = state.bestScore === null ? result.percent : Math.max(state.bestScore, result.percent);
  state.weakCategories = result.weakCategories;
  saveState();
  renderDashboard();
  renderMock();
  showToast(result.percent >= 80 ? "Practice test passed. Review explanations before the official test." : "Practice test submitted. Review weak areas and retake.");
}

function gradeMock() {
  const questions = state.mockQuestions.map((index) => questionBank[index]).filter(Boolean);
  let correct = 0;
  const misses = {};
  questions.forEach((question, index) => {
    if (state.mockAnswers[index] === question.answer) {
      correct += 1;
    } else {
      misses[question.category] = (misses[question.category] || 0) + 1;
    }
  });
  return {
    correct,
    percent: Math.round((correct / questions.length) * 100),
    weakCategories: misses
  };
}

function shuffle(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
  }
  return items;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2800);
}
