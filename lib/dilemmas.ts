export interface Choice {
  label: "A" | "B" | "C" | "D" | "E";
  text: string;
}

export interface Episode {
  number: number;
  text: string;
  choices: Choice[];
}

export interface ReportSection {
  title: string;
  content: string;
}

export interface PostReportOption {
  label: string;
  description: string;
}

export interface Dilemma {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  framing: string;
  episodes: Episode[];
  reportSections: ReportSection[];
  postReportOptions: PostReportOption[];
}

export const DILEMMAS: Dilemma[] = [
  {
    id: 0,
    title: "The Promotion Dilemma",
    subtitle: "Ambition and Belonging",
    description:
      "You have been offered a significant career advancement. It requires relocating and stepping away from your community. How do you deliberate when both paths hold genuine value?",
    framing:
      "You have been offered a significant career advancement with higher pay and status. However, it requires relocating to another city and stepping away from your current community and relationships. The position aligns with your professional ambitions but would fundamentally change your personal life.",
    episodes: [
      {
        number: 1,
        text: "You receive the formal offer. Your new salary would be 40% higher, and the role itself is one you have worked toward for years. The company mentions they need a decision within two weeks.\n\nYou call your closest friend that evening. They listen carefully and remind you that you have always been ambitious. But there is a pause before they speak, and you hear what remains unsaid.",
        choices: [
          {
            label: "A",
            text: "Call the company and request a month to decide.",
          },
          { label: "B", text: "Immediately share the news with your family." },
          {
            label: "C",
            text: "Schedule coffee with a mentor from your current workplace.",
          },
          {
            label: "D",
            text: "Make a list of pros and cons, deciding by logic alone.",
          },
          {
            label: "E",
            text: "Visit the new city unannounced to get a feel for it.",
          },
        ],
      },
      {
        number: 2,
        text: "Two days pass. You have done research and found that the new city is vibrant and growing. The role itself excites you—it represents everything you have strived for professionally. Yet each morning you wake up in your apartment, you notice small details: the light from your window, the café downstairs where you know everyone's name.\n\nYour mother calls. She does not ask directly, but mentions that your father's health has been declining. She says they would like you to visit soon.",
        choices: [
          { label: "A", text: "Book a flight home immediately." },
          {
            label: "B",
            text: "Acknowledge the information but tell her you need to focus on your decision first.",
          },
          {
            label: "C",
            text: 'Ask your mother explicitly: "Should I take the job?"',
          },
          {
            label: "D",
            text: "Research healthcare and proximity options from the new location.",
          },
          {
            label: "E",
            text: "Schedule a family meeting after you have made your choice.",
          },
        ],
      },
      {
        number: 3,
        text: 'You are sitting in the office where you have spent the last five years. You look at the desk, the plants on the windowsill that colleagues have given you, the photos of your team from recent outings. Your direct manager notices you are reflective and pulls you aside.\n\n"I am not going to ask you to stay," they say. "But I want you to know that your absence would be felt here. We have built something together." The words are not manipulative. They are honest.',
        choices: [
          {
            label: "A",
            text: "Express your gratitude but reaffirm your ambition.",
          },
          {
            label: "B",
            text: "Break down emotionally and admit you are torn.",
          },
          { label: "C", text: 'Ask them: "What would you do in my position?"' },
          {
            label: "D",
            text: "Suggest the possibility of working remotely from the new location.",
          },
          {
            label: "E",
            text: "Say nothing, but feel the weight of the decision settle deeper.",
          },
        ],
      },
      {
        number: 4,
        text: "You have now spent time in the new city on a preliminary visit. It is impressive. The office is modern. Your future colleagues seem talented and collaborative. You walked the neighborhoods and found parks, restaurants, bookstores. It is not a hostile place.\n\nBut it is not home. Home is not typically impressive. Home is familiar. Home is built from thousands of small moments that cannot be replicated in another city, no matter how pleasant it is. You understand this viscerally while standing in a gleaming new office that is supposed to be yours.",
        choices: [
          {
            label: "A",
            text: "Accept that homes can be built anywhere, given time.",
          },
          {
            label: "B",
            text: "Realize that you may be overvaluing familiarity.",
          },
          {
            label: "C",
            text: "Acknowledge that some losses cannot be fully compensated by gains.",
          },
          {
            label: "D",
            text: "Recognize that fear of the unknown may be driving your hesitation.",
          },
          {
            label: "E",
            text: "Decide that professional achievement matters more than comfort.",
          },
        ],
      },
      {
        number: 5,
        text: 'Five days remain before the deadline. You have not spoken to the company since receiving the offer. You have not made a final decision. You are living in a state of suspended time, where both possibilities exist equally.\n\nYour therapist asks you a simple question: "What are you most afraid of losing?" The question sits with you for hours. You know the answer, but naming it feels like admitting defeat. It also feels like admitting something about yourself that you have always resisted.',
        choices: [
          {
            label: "A",
            text: "Admit that you are afraid of losing your identity within your current community.",
          },
          {
            label: "B",
            text: "Recognize that you fear becoming someone who sacrifices relationships for status.",
          },
          {
            label: "C",
            text: "Acknowledge that you might regret the move professionally in five years.",
          },
          {
            label: "D",
            text: "Face the possibility that no choice will feel entirely right.",
          },
          {
            label: "E",
            text: "Realize that the fear itself might be the most important information.",
          },
        ],
      },
      {
        number: 6,
        text: "You call the company. The conversation is brief. You have made your decision. As you end the call, there is a moment of absolute silence in your office. The decision is made. The future you had imagined for yourself—the one you received this offer for—is no longer happening.\n\nBut another future is remaining. It is quieter. It is more modest. It contains fewer achievements of the kind that can be written on a resume. But it contains something else: a choice made consciously, according to values you have clarified through the pain of the last two weeks.",
        choices: [
          { label: "A", text: "Feel immediate relief and certainty." },
          { label: "B", text: "Experience regret mixed with relief." },
          { label: "C", text: "Wonder if you have made a profound mistake." },
          {
            label: "D",
            text: "Recognize that you will never fully know what the other path would have held.",
          },
          {
            label: "E",
            text: "Feel that something important has shifted in your understanding of yourself.",
          },
        ],
      },
      {
        number: 7,
        text: "One week later, life returns to its normal rhythms. You have declined the offer formally. Your colleagues seem relieved, though some mention that they did not expect you to stay. Your parents are grateful, though they do not say so directly. Your friend asks if you are happy with the decision.\n\nYou pause before answering. Happiness seems like the wrong frame. You are clear-eyed. You have learned something about yourself through the process of choosing. You have also sacrificed something, and that loss is real. The future you will now experience will be meaningful, but it will not be the future you were promised. It will simply be the future that aligns with who you have chosen to be.",
        choices: [
          {
            label: "A",
            text: "Report the decision as final and move forward.",
          },
          { label: "B", text: "Admit that you still have moments of doubt." },
          {
            label: "C",
            text: "Reflect on what this choice reveals about your values.",
          },
          {
            label: "D",
            text: "Decide that you will revisit this choice in a year to assess.",
          },
          {
            label: "E",
            text: "Recognize that this decision will shape your trajectory in ways you cannot predict.",
          },
        ],
      },
    ],
    reportSections: [
      {
        title: "Your Pattern of Deliberation",
        content:
          "Throughout the dilemma, you demonstrated a systematic approach to decision-making. You gathered information, consulted with others, and allowed yourself to sit with the discomfort of ambiguity. This pattern suggests someone who values both achievement and relationship, and who recognizes that significant decisions cannot be made through either logic or emotion alone.",
      },
      {
        title: "The Tension You Navigate",
        content:
          "The core tension in your choices revealed itself repeatedly: the pull between ambition and belonging. You showed capacity to hold both values simultaneously, rather than collapsing one into the other. This flexibility is uncommon, but it comes at a cost—you cannot fully resolve the tension, only manage it.",
      },
      {
        title: "What You Reveal About Loss",
        content:
          "Every significant choice involves loss. Your responses throughout the dilemma suggest you are aware of this, perhaps more acutely than many. You did not minimize the reality of sacrificing one path for another. This awareness is mature, and it carries weight.",
      },
      {
        title: "Your Relationship to Uncertainty",
        content:
          "You sat with the decision for a full two weeks, neither rushing toward certainty nor paralyzing yourself. This suggests a moderate tolerance for ambiguity—high enough to make a thoughtful choice, but low enough to eventually decide and move forward.",
      },
      {
        title: "The Values Underneath",
        content:
          "The decision you made (or would make) emerges from values that extend beyond career advancement or comfort. They touch on questions of identity, community, and what kind of life feels aligned with your sense of self. These are questions that do not have permanent answers—they will resurface in different forms.",
      },
      {
        title: "Moving Forward",
        content:
          'This dilemma was not designed to reveal the "correct" choice. It was designed to reveal how you deliberate when something genuinely matters. The insights here are not about what you should do next, but about who you are in the process of deciding.',
      },
    ],
    postReportOptions: [
      {
        label: "Explore Another Dilemma",
        description:
          "Begin a new narrative journey with different choices to make.",
      },
      {
        label: "Reflect on Your Responses",
        description:
          "Review your choices and their implications in more detail.",
      },
      {
        label: "Return to Home",
        description: "Go back to the homepage and explore other dilemmas.",
      },
    ],
  },
  {
    id: 1,
    title: "The Compromise Dilemma",
    subtitle: "Integrity and Pragmatism",
    description:
      "A business opportunity emerges that conflicts with a personal principle. Do you adjust your values for practical gain, or hold firm at the cost of advancement?",

    framing:
      "A promising business opportunity emerges that requires adjusting a personal principle. The financial reward is substantial, and refusing it means losing not just money, but a chance at significant professional growth. How do you navigate the line between integrity and pragmatism?",
    episodes: [
      {
        number: 1,
        text: "You receive an email from a potential investor. They are interested in funding your project, but with one condition: you must include a partnership with a company whose practices you have privately criticized. The investor says their concern is purely financial—the partnership strengthens the business model.\n\nYou reread the email three times. The opportunity is real. The compromise is clear.",
        choices: [
          {
            label: "A",
            text: "Schedule a call to negotiate the terms of the partnership.",
          },
          {
            label: "B",
            text: "Reply immediately that you cannot accept the condition.",
          },
          {
            label: "C",
            text: "Research the company further to see if your concerns were justified.",
          },
          {
            label: "D",
            text: "Discuss it with a trusted advisor before responding.",
          },
          {
            label: "E",
            text: "Take time to examine why this principle matters to you.",
          },
        ],
      },
      {
        number: 2,
        text: 'Your advisor listens carefully. They acknowledge your principle, but then ask: "Is this principle absolute, or is it contextual?" The question unsettles you. You have always thought of integrity as non-negotiable. But your advisor continues: "Most of us adjust our principles when enough is at stake. The question is whether this is one of those moments, and whether you can live with the adjustment."\n\nThat night, you cannot sleep.',
        choices: [
          {
            label: "A",
            text: "Realize that principles without flexibility are brittle.",
          },
          {
            label: "B",
            text: "Understand that this kind of compromise erodes your foundation.",
          },
          {
            label: "C",
            text: "Recognize that you might resent the partnership later.",
          },
          {
            label: "D",
            text: "Accept that pragmatism sometimes requires compromise.",
          },
          {
            label: "E",
            text: "Wonder what kind of person you are becoming through this struggle.",
          },
        ],
      },
      {
        number: 3,
        text: "You do your research. The company in question is not evil. They have made questionable decisions, but so has every major company. Their practices are industry standard. When you look at it objectively, the partnership makes sense. It is not a moral catastrophe.\n\nThis realization is both comforting and troubling. You had expected the company to be worse. Now that they are merely mediocre, the decision feels more ambiguous.",
        choices: [
          {
            label: "A",
            text: "Accept that your initial judgment was too harsh.",
          },
          {
            label: "B",
            text: "Question whether you were using the company as a symbol for something else.",
          },
          {
            label: "C",
            text: 'Realize that "industry standard" is a low bar for your own integrity.',
          },
          {
            label: "D",
            text: "Understand that some principles are about maintaining your self-image.",
          },
          {
            label: "E",
            text: "Recognize that refusing this opportunity has its own costs.",
          },
        ],
      },
      {
        number: 4,
        text: 'You meet with the investor in person. They are not the caricature you had imagined. They are thoughtful, engaged, and genuinely interested in your success. They even acknowledge the partnership issue: "I know this is uncomfortable for you. But I would not be proposing it if I did not think it would benefit everyone. Including your conscience in the long run."\n\nThe phrase strikes you: "Your conscience in the long run." What does that mean?',
        choices: [
          {
            label: "A",
            text: "Consider that compromise now might prevent worse compromises later.",
          },
          {
            label: "B",
            text: "Wonder if the investor understands your concerns as deeply as you do.",
          },
          {
            label: "C",
            text: "Examine whether growth without principles is worth the price.",
          },
          {
            label: "D",
            text: 'Ask yourself: "What would I tell someone else to do in this position?"',
          },
          {
            label: "E",
            text: "Recognize that there is no neutral choice here—refusing is also a choice.",
          },
        ],
      },
      {
        number: 5,
        text: 'You have forty-eight hours to decide. The investor has been generous with the timeline. You spend the first day trying to convince yourself to accept. The partnership is rational. The benefits are real. But a voice in you keeps saying: "This is not who I am."\n\nThen you consider: "Perhaps who you are is someone who must accept these realities to survive. Perhaps that is who you are becoming."',
        choices: [
          {
            label: "A",
            text: "Decide that you will refuse, and accept the consequences.",
          },
          {
            label: "B",
            text: "Choose to accept, and work to become someone at peace with it.",
          },
          {
            label: "C",
            text: "Propose a third option that honors both integrity and pragmatism.",
          },
          {
            label: "D",
            text: "Recognize that either choice will require you to grieve something.",
          },
          {
            label: "E",
            text: "Understand that your decision will reveal what you truly value.",
          },
        ],
      },
      {
        number: 6,
        text: "You call the investor. You have made your decision. As the words leave your mouth, you feel something settle inside you. It is not peace exactly. It is clarity. You have chosen something—not because it is the right thing, but because it is your thing. You know what you have accepted and what you have refused.",
        choices: [
          { label: "A", text: "Feel the weight of your decision immediately." },
          { label: "B", text: "Experience relief that the ambiguity is over." },
          { label: "C", text: "Wonder if you have made a terrible mistake." },
          {
            label: "D",
            text: "Understand that you will never fully know the outcome of the path not taken.",
          },
          {
            label: "E",
            text: "Recognize that the decision itself has changed you.",
          },
        ],
      },
      {
        number: 7,
        text: 'Two weeks pass. You have begun to see the consequences of your choice. If you refused: you have more time, but less financial security and fewer resources. If you accepted: you have everything you need to grow, but you must learn to coexist with a compromise you made.\n\nYour colleague asks you: "Do you regret it?" You pause. The question is more complex than it seems. Regret is not quite the right word. You are living with the results of knowing yourself.',
        choices: [
          {
            label: "A",
            text: "Admit that the costs are higher than you anticipated.",
          },
          {
            label: "B",
            text: "Recognize that both paths would have required sacrifice.",
          },
          {
            label: "C",
            text: "Understand that this decision will inform future ones.",
          },
          {
            label: "D",
            text: "Realize that your integrity is not destroyed, only tested.",
          },
          {
            label: "E",
            text: 'Accept that "regret" and "living with your choices" may be the same thing.',
          },
        ],
      },
    ],
    reportSections: [
      {
        title: "How You Hold Your Values",
        content:
          "Your choices revealed a nuanced relationship with integrity. You did not dismiss your principles, but neither did you treat them as absolutes divorced from context. This suggests maturity—the understanding that values are real but also adaptive.",
      },
      {
        title: "Your Relationship to Pragmatism",
        content:
          "You showed capacity to consider practical realities without being consumed by them. You asked questions about cost and benefit, but you also examined what the cost would be to your sense of self. This balance is not common.",
      },
      {
        title: "The Role of Certainty",
        content:
          "Your deliberation suggests you sought certainty where none exists. No choice here was unambiguously right. You eventually had to choose despite this uncertainty. Your pattern shows how you manage that discomfort.",
      },
      {
        title: "Identity and Adaptation",
        content:
          "Beneath this dilemma is a deeper question: Can you compromise without losing yourself? Your responses suggest you understand that identity is not fixed. You are capable of change, and you know it.",
      },
      {
        title: "The Cost You Are Willing to Pay",
        content:
          "Your decision points to what you value most. Whether you prioritized integrity or opportunity, security or principle, your choice is not arbitrary. It comes from somewhere deep in how you understand the world.",
      },
      {
        title: "Integration",
        content:
          "The final test is integration. Can you live with your choice and still see yourself as someone of integrity? Or someone of pragmatism? Your answer to this question matters more than the choice itself.",
      },
    ],
    postReportOptions: [
      {
        label: "Explore Another Dilemma",
        description:
          "Begin a new narrative journey with different choices to make.",
      },
      {
        label: "Reflect on Your Responses",
        description:
          "Review your choices and their implications in more detail.",
      },
      {
        label: "Return to Home",
        description: "Go back to the homepage and explore other dilemmas.",
      },
    ],
  },
  {
    id: 2,
    title: "The Commitment Dilemma",
    subtitle: "Freedom and Obligation",
    description:
      "A relationship deepens and commitment is requested. You value your independence. Can you commit without losing yourself? Should you?",

    framing:
      "A relationship has deepened, and commitment is requested. You value your independence and autonomy deeply. You also value this person. Is commitment possible without losing yourself? Should you compromise your freedom?",
    episodes: [
      {
        number: 1,
        text: 'They bring it up on a quiet evening. Not dramatically. They simply ask: "Do you see a future with me?" The question is gentle, but it carries weight. You care about this person. You enjoy your time together. But the question implies something—obligation, entanglement, the loss of exit routes.\n\nYou do not answer immediately. You ask for time to think.',
        choices: [
          {
            label: "A",
            text: "Spend time examining what commitment would actually mean.",
          },
          {
            label: "B",
            text: "Research what other independent people say about commitment.",
          },
          { label: "C", text: 'Ask yourself: "What am I afraid of losing?"' },
          { label: "D", text: "Discuss your fears directly with them." },
          {
            label: "E",
            text: "Reflect on past relationships and what changed when you committed.",
          },
        ],
      },
      {
        number: 2,
        text: "You think about your past relationships. You remember the slow erosion of time and space for yourself. How hobbies became couple activities. How independent friends became third wheels. How your own goals began to orbit around someone else's needs. The pattern is clear to you. Commitment, for you, has meant diminishment.\n\nBut this person is different. Or are they?",
        choices: [
          {
            label: "A",
            text: "Recognize that the pattern might be about you, not them.",
          },
          {
            label: "B",
            text: "Wonder whether you are protecting yourself from inevitable loss.",
          },
          {
            label: "C",
            text: "Consider that this person might handle your independence differently.",
          },
          {
            label: "D",
            text: "Acknowledge that vulnerability to another person is always a risk.",
          },
          {
            label: "E",
            text: "Accept that some people cannot be vulnerable without drowning.",
          },
        ],
      },
      {
        number: 3,
        text: 'They notice your distance. They ask directly: "Are you pulling away?" You try to explain about your fear of losing yourself. They listen. And then they say something that surprises you: "I do not want to consume you. I want to build something with you. Those are different things. But I need to know that you are willing to try."\n\nThe distinction lands. Build something, not consume. But the words do not erase your doubt.',
        choices: [
          {
            label: "A",
            text: "Wonder whether anyone can truly not consume another person.",
          },
          {
            label: "B",
            text: "Recognize that trust is required, and you do not yet have it.",
          },
          {
            label: "C",
            text: "Appreciate their clarity but understand it does not solve your problem.",
          },
          {
            label: "D",
            text: "Realize that your fear might be coming from old wounds.",
          },
          {
            label: "E",
            text: "Understand that commitment requires a kind of faith.",
          },
        ],
      },
      {
        number: 4,
        text: "You spend time observing other couples. Really observing. You see ones who have lost themselves entirely. You see others who have built something together while remaining distinct. You notice that the difference is not about love. It is about boundaries, intention, and the courage to maintain your own center.\n\nYou also notice something else: the couples who remain distinct seem happier. But is that because they are naturally suited, or because they have worked at it?",
        choices: [
          {
            label: "A",
            text: "Decide that you will only commit if you can maintain absolute independence.",
          },
          {
            label: "B",
            text: "Recognize that some interdependence is the cost of closeness.",
          },
          {
            label: "C",
            text: "Understand that you will not know how you will change until you commit.",
          },
          {
            label: "D",
            text: "Accept that commitment is an ongoing negotiation, not a fixed state.",
          },
          {
            label: "E",
            text: "Question whether your need for independence is strength or protection.",
          },
        ],
      },
      {
        number: 5,
        text: "One month has passed. They have been patient, but you can feel the limit of their patience. They love you, but they also have their own timeline. The question is becoming urgent. You realize you have been using the time not to decide, but to avoid deciding.\n\nIn a moment of clarity, you understand: you could think about this forever. There is no amount of analysis that will eliminate the risk.",
        choices: [
          {
            label: "A",
            text: "Commit, and trust that you can maintain your center.",
          },
          { label: "B", text: "End the relationship before it goes further." },
          {
            label: "C",
            text: "Propose a different kind of commitment—slower, more flexible.",
          },
          {
            label: "D",
            text: "Acknowledge that you cannot make this decision alone.",
          },
          {
            label: "E",
            text: "Recognize that fear is not a sufficient reason to refuse.",
          },
        ],
      },
      {
        number: 6,
        text: "You make your choice and communicate it. You can feel the weight of it immediately. If you have committed: you have opened yourself to loss in a way you have avoided. If you have refused: you have chosen safety, but you carry the knowledge of what you gave up.\n\nEither way, something has shifted inside you. You have been forced to choose your own life, consciously.",
        choices: [
          { label: "A", text: "Feel fear and exhilaration in equal measure." },
          {
            label: "B",
            text: "Experience the grief of what the other path would have been.",
          },
          {
            label: "C",
            text: "Recognize that your choice was about more than this person.",
          },
          {
            label: "D",
            text: "Understand that you are now living with your own autonomy.",
          },
          {
            label: "E",
            text: "Accept that commitment and independence are both forms of risk.",
          },
        ],
      },
      {
        number: 7,
        text: "Three months later. If you committed: You are learning how to be both distinct and entangled. It is harder than you thought. It is also more possible. If you refused: You have returned to your independence, but it feels different now. The freedom you valued is still there, but it is quieter. Less like triumph, more like acceptance.\n\nYour choice has taught you something about yourself that was not available to you before.",
        choices: [
          {
            label: "A",
            text: "Understand that autonomy and vulnerability are not opposites.",
          },
          {
            label: "B",
            text: "Recognize that some losses are necessary for growth.",
          },
          {
            label: "C",
            text: "Realize that your deepest values have been clarified through choosing.",
          },
          {
            label: "D",
            text: "Accept that this dilemma will return, in different forms, throughout your life.",
          },
          {
            label: "E",
            text: "Know that whoever you are becoming is revealed through how you love.",
          },
        ],
      },
    ],
    reportSections: [
      {
        title: "Your Relationship to Autonomy",
        content:
          "Your choices reveal how you understand freedom. Do you see it as freedom from constraint, or freedom to choose constraint for something you value? Your pattern suggests you are still discovering the difference.",
      },
      {
        title: "The Role of Trust",
        content:
          "Throughout this dilemma, the question of trust returned repeatedly. Can you trust another person not to consume you? Can you trust yourself to maintain boundaries? Your responses suggest your trust is conditional, and that is not a weakness.",
      },
      {
        title: "Your Fear of Dissolution",
        content:
          "There is something beneath the surface here: a fear that intimacy means self-loss. This is not uncommon, but it is not inevitable. Your choices suggest you are questioning whether this fear serves you.",
      },
      {
        title: "The Cost of Protection",
        content:
          "Your commitment to independence has value. But protection always comes at a cost. Your responses suggest you are becoming aware of what that cost is.",
      },
      {
        title: "Identity in Relationship",
        content:
          "The real question beneath this dilemma is: Can you be in relationship and still be yourself? Your choices point to your working answer. But this is a question you will live with, not solve.",
      },
      {
        title: "What Your Choice Reveals",
        content:
          "Whether you moved toward commitment or maintained your solitude, your choice reveals what you value most. It also reveals what you are willing to risk, and what you are willing to protect. That self-knowledge is the real value of this experience.",
      },
    ],
    postReportOptions: [
      {
        label: "Explore Another Dilemma",
        description:
          "Begin a new narrative journey with different choices to make.",
      },
      {
        label: "Reflect on Your Responses",
        description:
          "Review your choices and their implications in more detail.",
      },
      {
        label: "Return to Home",
        description: "Go back to the homepage and explore other dilemmas.",
      },
    ],
  },
];

export function getDilemma(id: number): Dilemma | undefined {
  return DILEMMAS.find((d) => d.id === id) ?? DILEMMAS.find((d) => d.id);
}

export function getEpisode(
  dilemmaId: number,
  episodeId: number,
): { episode: Episode | undefined; title: string | undefined } {
  const dilemma = getDilemma(dilemmaId);
  return {
    episode: dilemma?.episodes.find((e) => e.number === episodeId),
    title: dilemma?.title,
  };
}
