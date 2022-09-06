import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  //@Input() content;

  providerList = [
    {
        "partyID": "c350534e-eed7-4ee2-88cb-62881f9ac695",
        "distance": 0,
        "priority": 0,
        "providerName": "Ron Lafleur",
        "gender": "Male",
        "providerBio": "My approach to helping people is to provide a safe, compassionate space where you will feel heard, understood, and accepted while helping you to come up with solutions that will work for you. I have a Master’s degree in Counselling from McGill, and nearly twenty years experience dealing with issues ranging from couples / relationship issues, anxiety, stress, depression, and life transition. You can expect a mixture of cognitive-behavioral therapy, short-term solution focused methods, along with a mindfulness-based approach to help come up with workable solutions to help you lead a more fulfilling life.",
        "timeAvailables": [
            {
                "displayTime": "04:30 PM",
                "providerTimeInMinutes": 810,
                "locId": "191E839C-3578-4085-8D2C-8D900BE8DFFF",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "05:45 PM",
                "providerTimeInMinutes": 885,
                "locId": "191E839C-3578-4085-8D2C-8D900BE8DFFF",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 960,
                "locId": "191E839C-3578-4085-8D2C-8D900BE8DFFF",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "fbc6d37f-e9a8-4eb8-9a2e-94193e969e24",
        "distance": 0,
        "priority": 0,
        "providerName": "Joanna Gut",
        "gender": "Female",
        "providerBio": "Joanna A. Gut is dedicated and passionate social worker who supports her client overcoming difficulties using variety of modalities. Joanna’s main interest and area of practice is depression, anxiety and emotional regulation. The solution focus therapy and holistic modalities i.e mindfulness meditation are Joanna’s favorite tools. She graduated from York University with BSW and MSW.",
        "timeAvailables": [
            {
                "displayTime": "04:30 PM",
                "providerTimeInMinutes": 990,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "05:45 PM",
                "providerTimeInMinutes": 1065,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:15 PM",
                "providerTimeInMinutes": 1215,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "09:30 PM",
                "providerTimeInMinutes": 1290,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "10:30 PM",
                "providerTimeInMinutes": 1350,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "08cfcd2d-5e5d-4f17-90b3-bdada8ec90b3",
        "distance": 0,
        "priority": 0,
        "providerName": "Maxine Roberts",
        "gender": "Female",
        "providerBio": null,
        "timeAvailables": [
            {
                "displayTime": "04:30 PM",
                "providerTimeInMinutes": 1050,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "82f31f84-f75f-4123-8561-e2702da32282",
        "distance": 0,
        "priority": 0,
        "providerName": "Denise Matis",
        "gender": "Female",
        "providerBio": "Denise Matis, MA, is passionate about working with clients to reduce distressing thoughts that contribute to further pain.  Denise uses mostly Acceptance and Commitment Therapy as well as CBT when warranted.  She graduated from Liberty University in 2010.",
        "timeAvailables": [
            {
                "displayTime": "04:30 PM",
                "providerTimeInMinutes": 810,
                "locId": "2B174203-3117-464D-A4C2-06093AE51D99",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "05:30 PM",
                "providerTimeInMinutes": 870,
                "locId": "2B174203-3117-464D-A4C2-06093AE51D99",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:30 PM",
                "providerTimeInMinutes": 930,
                "locId": "2B174203-3117-464D-A4C2-06093AE51D99",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "407acec4-17ce-412b-ac6e-f2931b6b8d53",
        "distance": 0,
        "priority": 0,
        "providerName": "Elizabeth Eaton",
        "gender": "Female",
        "providerBio": "Elizabeth Eaton is a psychotherapist whose work is focused on supporting individuals and couples toward a life-expression which is closer to their ideal; this has involved exploring and addressing trauma, grief and loss, gender and sexual identity, and complex mental health issues, such as personality disorders. Their approach is trauma-informed, strengths-based, and person-centered. They graduated from St. Stephen’s College with a Master’s in Psychotherapy & Spirituality, and they mainly use Dialectical Behaviour Therapy (DBT) in their work.",
        "timeAvailables": [
            {
                "displayTime": "04:30 PM",
                "providerTimeInMinutes": 870,
                "locId": "40C9F68B-977B-4713-A267-DF2FAC2B154D",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "99c0d420-6474-4e81-86ef-e6b715f419fb",
        "distance": 0,
        "priority": 0,
        "providerName": "Scott Coleman",
        "gender": "Male",
        "providerBio": "Scott Coleman (BA, MPPC, CCC). Providing individual, children, and family counseling for a variety of issues, Scott specializes in anxiety, trauma, pain issues, along with supporting clients, families, and children with unique needs such as ADHD and autism.",
        "timeAvailables": [
            {
                "displayTime": "04:30 PM",
                "providerTimeInMinutes": 870,
                "locId": "AE62C81E-B6BA-49F2-A5B0-CE8BB67B8CC4",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "05:30 PM",
                "providerTimeInMinutes": 930,
                "locId": "AE62C81E-B6BA-49F2-A5B0-CE8BB67B8CC4",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "225a1cd6-ac3c-4a2a-8aa8-80f21db9c0b8",
        "distance": 0,
        "priority": 0,
        "providerName": "Ferne Dezenhouse",
        "gender": "Female",
        "providerBio": "Ferne Dezenhouse graduated with a Masters of Social Work and has over 45 years of counselling experience. She is a specialist in CBT (cognitive behavioral therapy), and provides a solution-focused and supportive/humanistic approach to a wide range of challenges including anger, anxiety and depression, bereavement, parenting issues, trauma and workplace issues. Ferne provides counselling to both families and couples, as well as individuals.",
        "timeAvailables": [
            {
                "displayTime": "04:45 PM",
                "providerTimeInMinutes": 1005,
                "locId": "E3D792DA-2FB4-4110-B5C6-B47FEC78CAE7",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "29778d4a-1451-4d47-af2b-270047b193ca",
        "distance": 0,
        "priority": 0,
        "providerName": "Howard Modlin",
        "gender": "Male",
        "providerBio": "Howard Modlin M.A., (C.Psych), Registered Psychotherapist, is a client-centered practitioner, well-grounded in competency-based, non-pathologizing approaches. In his work with clients, Howard integrates solution-focused, systemic, and psychodynamic perspectives helping clients explore their  inner strengths, adaptive strategies and pursue their potential for personal growth. Howard has extensive experience with clients going through grief, interpersonal conflict, anxiety, depression, or simply experiencing a general lack of well-being. Having managed nursing homes in his career, Howard also specializes in supporting adult children facing the life transition challenges of their aging parents.",
        "timeAvailables": [
            {
                "displayTime": "04:45 PM",
                "providerTimeInMinutes": 1005,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "7c078d66-2f0c-41b5-ba2f-27365cd8ba50",
        "distance": 0,
        "priority": 0,
        "providerName": "Mark Isajiw",
        "gender": "Male",
        "providerBio": "Mark Isajiw obtained his MSW in 1993 from the University of Toronto. He is licensed in the State of Washington where he spent several years as a rural clinician, and served as a mental health officer in the U.S Air Force for 12 years including deployment to Iraq. As a result of this experience, Mark was chosen to be the primary provider in the crisis intervention program Homewood provided to the Toronto Police. Mark brings his well-rounded experience to counselling with individuals, couples, children, and families, specializing in treating trauma and marital issues. His main theoretical orientation comes from Cognitive Behavioural Therapy (CBT) in addition to principles of mindfulness.",
        "timeAvailables": [
            {
                "displayTime": "04:45 PM",
                "providerTimeInMinutes": 1005,
                "locId": "25DDA236-28A0-4843-AD50-C4E1F05C0DE3",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "5de03519-218b-470a-9f86-033baad143d1",
        "distance": 0,
        "priority": 0,
        "providerName": "Terra Janot",
        "gender": "Female",
        "providerBio": "Terra Janot, BHSc., MED., CCC. Terra works with men and women suffering from symptoms related to a wide range of mental health and life concerns, including anxiety, depression, work related stress (and burnout), as well as issues related to intimacy and closeness in marriage. Terra utilizes solution focused and CBT techniques in her sessions with clients, as well as incorporates mindfulness, which helps to ground a busy mind. Terra graduated with a Masters Degree in Counselling Psychology from the University of Lethbridge in 2016 and also completed a Bachelors Degree in Addictions Counselling in 2010.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 840,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "1947b675-c774-498b-98ef-0c608f5075fc",
        "distance": 0,
        "priority": 0,
        "providerName": "Sandra Marji",
        "gender": "Female",
        "providerBio": "Sandra Marji, RSW, MSW is passionate and motivated to help client build resiliency, determine solutions to their difficulties and build inner empowerment. She is passionate about working with mental health concerns, parenting difficulties, children and youth, grief and trauma. She has graduated from York University with a Masters of Social Work.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "2d7a4de4-4912-4100-83e1-3d6e3669d876",
        "distance": 0,
        "priority": 0,
        "providerName": "Julia Allen",
        "gender": "Female",
        "providerBio": "I am a holistic counsellor living in the Cowichan Valley of Vancouver Island. I have been a clinical counsellor for over thirty years. I also write a blog for my website visionaryjourneys.ca. My counselling focuses on anxiety, depression, nature relatedness, somatic trauma resolution, mindfulness, and parts therapy.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 840,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 900,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 960,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "83bf2bb4-28b7-4827-b5be-3eb25a220581",
        "distance": 0,
        "priority": 0,
        "providerName": "Laura Loli-Dano",
        "gender": "Female",
        "providerBio": null,
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "fe99cecd-e6ab-4673-b62c-4b417e289269",
        "distance": 0,
        "priority": 0,
        "providerName": "Stan Pope",
        "gender": "Male",
        "providerBio": "Stan Pope has over forty years of experience working as a counselor assessing and counseling clients with issues ranging from: depression, anxiety, PTSD, addictions, as well as managing chronic illness and pain. He is a registered Social Worker and his formal training has been in short term solution focused therapy, as well as hypnotherapy, motivational and cognitive behavioral therapy. His approach is client-centered and focuses upon the strength and resilience which he believes lies within everyone and that can be harnessed to better cope with what life throws at us.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "f25e68b3-e39f-44ae-ab78-52cf644961b0",
        "distance": 0,
        "priority": 0,
        "providerName": "Ulla Conrad",
        "gender": "Female",
        "providerBio": "Ulla Conrad, MCPsych, has close to two decades of experience in the fields of relationship issues, anxiety, depression, and balancing work and professional lives, among others. She graduated from the University of Constance, Germany, in 1995 with a Masters degree in clinical psychology  and mainly uses cognitive-behavioural therapy in her work.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "a30f5df4-59a9-46bd-81ec-53c58f585c06",
        "distance": 0,
        "priority": 0,
        "providerName": "Pawan Singh",
        "gender": "Female",
        "providerBio": "Passionate about helping clients achieve their best possible outcome.  Practice includes Psychotherapy, CBT, Mindfulness, Meditation, Trauma, Grief and EMDR.  I have been practicing as a Social Worker/Psychotherapist since 2010 when I completed my degree in Social Work (BSW and MSW) from the University of Windsor.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "279b2134-1c65-4814-a5fa-592a2208765c",
        "distance": 0,
        "priority": 0,
        "providerName": "Shannen Scott",
        "gender": "Female",
        "providerBio": "Shannen Scott, RP, graduated with a Masters of Counselling Psychology in 2013 and uses mostly Cognitive Behaviour Therapy and Dialectical Behaviour Therapy skills in her work. Her specialization is in addictions and mental health, working with both the individual and their families.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:00 PM",
                "providerTimeInMinutes": 1200,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "13eb9bf1-88f8-4945-aebc-5bb84efed21b",
        "distance": 0,
        "priority": 0,
        "providerName": "Doron Gold",
        "gender": "Male",
        "providerBio": "Doron Gold, BA, JD, MSW, CPCC works with a variety of clients addressing various issues related to mental health, stress, career and trauma. As a former practicing lawyer, he has particular interest and expertise in the lives of lawyers, paralegals and law students. Doron focuses on non-judgmentally and empathetically validating clients' experiences and helping them work through challenges with kindness and compassion.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "E3D792DA-2FB4-4110-B5C6-B47FEC78CAE7",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "6fed452e-e0d6-41fe-be84-66782a0e983d",
        "distance": 0,
        "priority": 0,
        "providerName": "Jean-Guy Lévesque",
        "gender": "Male",
        "providerBio": "Jean-Guy Levesque graduated from The University of Montreal with a Masters in Psychology in 1982 and is a Registered Social Worker in the province of Ontario.  Jean-Guy works with individual, couples and families in a wide variety of presenting issues, including Anger, Anxiety, LGBTQ, Depression, Learning Disabilities, Workplace Issues and Stress. Jean-Guy specializes in a Short Term Solution-Focused approach and offers services in both French and English.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "191E839C-3578-4085-8D2C-8D900BE8DFFF",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "6b59ae70-3000-498e-ac59-6c07c7bb0353",
        "distance": 0,
        "priority": 0,
        "providerName": "Alexandrea [Allie] Cantwell [Allie]",
        "gender": "Female",
        "providerBio": "I am a Canadian Certified Counsellor (CCC #10008167) and earned a master’s degree in Counselling from Acadia University. Before that, I studied at Saint Thomas University, while completing an undergraduate degree, double majoring in Psychology and Criminology. Throughout my career, I have worked as a Clinical Therapist in a private addiction's facility and Social Services roles with non-profit and government organizations. It is through this work that I have witnessed first-hand our unlimited capacity for growth and resilience when surrounded with the right support.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:15 PM",
                "providerTimeInMinutes": 1155,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "f1f1a43e-8093-422c-9134-7aab0d0a37c4",
        "distance": 0,
        "priority": 0,
        "providerName": "Irene Loewen",
        "gender": "Female",
        "providerBio": "Irene Loewen, RN BA MA, is experienced in helping her clients to develop skills and solutions for various concerns such as anxiety, depression, couples issues, sexuality, mental health and addictions.  She is a clinical member of The Canadian Association for  Marriage and Family Therapy.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "f9e6c067-a64f-499c-b4d6-a3cf5b0d30ce",
        "distance": 0,
        "priority": 0,
        "providerName": "Ashanti Fraser",
        "gender": "Male",
        "providerBio": "Ashanti Fraser, MEd, CCC, has been a counsellor in private practice for over 45 years.  He combines a strong traditional education in counselling psychology with a longstanding interest and training in Eastern and Western healing traditions and spiritual approaches. His primary goal is helping people sort through the ups and downs of modern life in compassionate, creative and life affirming ways.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 960,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "002bc0d8-0ff9-4a50-b0a1-85711b10086a",
        "distance": 0,
        "priority": 0,
        "providerName": "Alma Fourie",
        "gender": "Female",
        "providerBio": "Alma Fourie, PhD., M.Comm, has 26 years of experience and possesses expertise in counselling, clinical supervision, leadership, mental health, stress management, play therapy, as well as facilitation and training. Her research interest includes adverse childhood experiences, trauma informed practices, and employee wellness. She has a passion for guiding individuals as well as being present on their healing journey.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 900,
                "locId": "648FC9D0-E656-42F0-B52D-72691905EE83",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "fadc9441-2cf2-4412-b826-92e926fbafdd",
        "distance": 0,
        "priority": 0,
        "providerName": "Luciana Daghum",
        "gender": "Female",
        "providerBio": "I have maintained and deepened my passion for working with children, youth and adults since I began counselling in 2000. I strive to facilitate personal growth and healing in a manner that is empathetic, warm, and accepting. As a counsellor I am committed to affirming the potential and inner strength that my clients possess to help them make positive changes in their lives. I work with clients experiencing stress, anxiety and depression as a result of dealing with difficult life transitions. I speak English and Portuguese.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 840,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "2b0005c4-46e5-4ec3-b14c-93aac2eb5d25",
        "distance": 0,
        "priority": 0,
        "providerName": "Gerald Loewen",
        "gender": "Male",
        "providerBio": "Gerald Loewen, M.A., is passionate about helping clients dealing with stress, anxiety and depression, relationship issues, as well as grief.  He graduated from Wheaton College Graduate School in Wheaton, Illinois.  He mainly uses cognitive behavioral therapy (CBT) to assist clients.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 840,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:15 PM",
                "providerTimeInMinutes": 915,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:45 PM",
                "providerTimeInMinutes": 1005,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "b7f0e141-7d9f-4843-96e7-e9dff4420cb7",
        "distance": 0,
        "priority": 0,
        "providerName": "Patrizia Zonta [Patricia]",
        "gender": "Female",
        "providerBio": null,
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "9276239A-0D05-4E24-9F9F-E76FC324A2D2",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "c609fbca-fa0f-4969-aba2-f0117dfdbd49",
        "distance": 0,
        "priority": 0,
        "providerName": "Deborah [Debbie] Tabin",
        "gender": "Female",
        "providerBio": "Debbie Tabin, BSW, RSW, (MAL Health), is passionate about supporting clients on their recovery journey whether that is dealing with mental health issues, addictions and habits, life changes, relationship conflicts.  Debbie graduated from University of Manitoba with her Bachelor of Social Work in 2006 and her Masters in Leadership with a health specialty from Royal Roads University in 2013 and mainly uses Cognitive Behavioral Therapy, Solution-Focused Therapy and Narrative Therapy tools in her work.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 900,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "ce1f5174-ff92-4416-86d0-e6a9d3cd6316",
        "distance": 0,
        "priority": 0,
        "providerName": "Mark Arnold",
        "gender": "Male",
        "providerBio": "Mark Arnold, MSW RSW, is a highly experienced counselor in the sector having worked with hundreds of individuals, couples and families since 1994. He specializes in working with adolescents and young adults as well as those struggling with anxiety and depression.. He graduated from the University of Toronto in 1989 and mainly uses Cognitive Behavioural Therapy (CBT) and Mindfulness in his work.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "8c22dbb2-a258-4483-a7cf-f3257ff4c70d",
        "distance": 0,
        "priority": 0,
        "providerName": "Sheila Waterman",
        "gender": "Female",
        "providerBio": null,
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "121ba038-8c30-4d70-9326-f56a10cb3ad2",
        "distance": 0,
        "priority": 0,
        "providerName": "Nazir Hussain",
        "gender": "Male",
        "providerBio": "",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "7fb2a70f-5749-4036-b37d-f9f33622efc4",
        "distance": 0,
        "priority": 0,
        "providerName": "Fiona Murphy",
        "gender": "Female",
        "providerBio": "Fiona Murphy, MSW RSW, has been working as a counsellor for over 30 years.  She has a passionate belief in the ability of the human spirit to heal itself, and for each person to live their fullest potential, when they have been given the opportunity to be heard,understood, and recognized.  She uses modalities which support this fundamental premise.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 960,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "2cb2bc0a-c7ad-4f67-b8d9-dc35798e8acf",
        "distance": 0,
        "priority": 0,
        "providerName": "Lih Chin Tan",
        "gender": "Female",
        "providerBio": "Lihchin Tan, CCC, has worked extensively with youths and their families, adults, and couples. She adopts a culturally-informed practice and strives to understand each individual in their unique cultural environment. Lihchin adopts an integrative approach in her clinical practice, combining client-centred, trauma-informed and emotion-focused philosophies.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 900,
                "locId": "40C9F68B-977B-4713-A267-DF2FAC2B154D",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "40C9F68B-977B-4713-A267-DF2FAC2B154D",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "40C9F68B-977B-4713-A267-DF2FAC2B154D",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "09:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "40C9F68B-977B-4713-A267-DF2FAC2B154D",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "35f7329a-651b-4005-8de2-dc4fbeaabe19",
        "distance": 0,
        "priority": 0,
        "providerName": "Geraldine Denty",
        "gender": "Female",
        "providerBio": "Geraldine Denty, M.S.W., R.S.W., has 22 years of practice experience. Her approach is holistic; she is committed to supporting her clients on their journey to mental health wellness by using a collaborative, therapeutic approach to explore, discover, understand and develop tools and strategies to address presenting issues through Cognitive Behavioural Therapy, Mindfulness and Solution Focused Therapy. \nHer areas of interest include depression anxiety, relationship issues, stress management, career guidance, coping tools, life transitions, substance abuse/addiction, and is a Homewood Health certified Substance Abuse Expert Assessor.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 900,
                "locId": "4C04CCEC-B7A7-48AE-9E15-E1444D0DE670",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 960,
                "locId": "4C04CCEC-B7A7-48AE-9E15-E1444D0DE670",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "75317b29-3d48-419b-900d-d963aeefafba",
        "distance": 0,
        "priority": 0,
        "providerName": "Larry Holmes",
        "gender": "Male",
        "providerBio": "Larry Holmes MA, RSW, CYW, Dipl. Bus. Admin. has worked as a college professor and a clinician throughout a longstanding career.  Areas of experience include addictions, anxiety/depression care, bereavement, individual/couple counselling, parenting and conflict resolution.  As a life skills trainer, he focuses on enhancing self-discovery and well-being during individual and group sessions.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "932DD1D4-A120-4C78-98CD-9A4BB65A44FE",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "ac277bc6-d71f-44cf-92ae-c39bc4e32419",
        "distance": 0,
        "priority": 0,
        "providerName": "Jim Hanna",
        "gender": "Male",
        "providerBio": "Jim Hanna MSW RSW believes that making a genuine and accepting connection with others is the core of his clinical practice.  He primarily uses CBT and Mindfulness in his practice and is familiar with a 12 step approach when dealing with addictions.  Jim has worked as a counsellor/therapist in addictions, mental health and EFAP settings for over 30 years.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "85D68930-D9C9-4D5D-B5D8-44A9C093568A",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "85D68930-D9C9-4D5D-B5D8-44A9C093568A",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "85D68930-D9C9-4D5D-B5D8-44A9C093568A",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "6dcc11b9-8adc-480d-932f-c4824ad9d5bf",
        "distance": 0,
        "priority": 0,
        "providerName": "Dilnawaz Qamar",
        "gender": "Female",
        "providerBio": "Dilnawaz Qamar RP (Qualifying) provides a nonjudgmental, safe, respectable, and validating space for client as they embark the journey of self-discovery. She uses an eclectic approach including CBT, DBT and solution focused therapy. She did certification in Dialectical Behavioral Therapy from Centre from MindBody Health, Toronto, have postgraduate diploma in Clinical Counseling and Psychotherapy. She did master’s in applied psychology in 2007. She is a registered member of Ontario Association of Mental Health Professionals and College of Registered Psychotherapist of Ontario.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "975d5200-19a0-4a3b-a4be-ac64fae05646",
        "distance": 0,
        "priority": 0,
        "providerName": "Oluronke Taiwo",
        "gender": "Female",
        "providerBio": "Oluronke Taiwo BSc,MSc,BSW,MSW,RSW    Oluronke (Ronke) Taiwo, originally from Nigeria is a Social Worker, Scientist, an educator, and a Counsellor. Ronke has over 13 years of clinical experience working with mental health consumers and other populations in her Social Work Career. Ronke earned both her Bachelor and Master of Social Work from Dalhousie University in 2006 and 2008 respectively. Ronke’s area of specialty includes individual & family Counseling, Couple Counseling, Grief and Loss. Ronke mainly uses Solution Focus and Cognitive Behaviour Therapy in her practice.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DFDFBF45-2880-4D17-8810-9E3DA44F377A",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:30 PM",
                "providerTimeInMinutes": 1170,
                "locId": "DFDFBF45-2880-4D17-8810-9E3DA44F377A",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "0059b6f9-b404-416d-89f7-7f026b2a5cbc",
        "distance": 0,
        "priority": 0,
        "providerName": "Regimol Joseph",
        "gender": "Female",
        "providerBio": "Regimol Joseph, MSW RSW, is a committed social worker who supports her clients to identify and work through various psycho social aspects impacting their personal, social, family and work life with a person centered approach. In addition to her Master’s degree in social work, she has completed training in grief and bereavement, Cognitive Behavioural Therapy (CBT) and Dialectical Behaviour therapy (DBT).",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:30 PM",
                "providerTimeInMinutes": 1110,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:00 PM",
                "providerTimeInMinutes": 1200,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "09:30 PM",
                "providerTimeInMinutes": 1290,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "2ca6c60f-4891-418d-bee4-52316af38362",
        "distance": 0,
        "priority": 0,
        "providerName": "Ana Meger",
        "gender": "Female",
        "providerBio": "Ana Meger-Hoeft is a Canadian Certified Counsellor (CCC), her practice specializes in grief, anxiety, trauma, life transitions, anger, addiction issues and depression.  She has a master’s degree in clinical counseling and over 25 years’ experience working in the Mental Health field.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 900,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "2872e107-9287-4681-ae76-17a9260e2672",
        "distance": 0,
        "priority": 0,
        "providerName": "Beth Moutrey",
        "gender": "Female",
        "providerBio": "Beth Moutrey, B.A. D.AT has been providing telephone and online counselling support to people bravely addressing concerns including but not limited to trauma, anxiety and depression, eating disorders, interpersonal and family of origin relationships.  Beth is passionate about applying mindfulness based strategies to help client set intentions and actualize goals.  Beth’s background includes postgraduate training in Art Therapy, a modality that combines art making with counselling methods.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "7d4aa2b1-71f4-43da-8bee-246201747e76",
        "distance": 0,
        "priority": 0,
        "providerName": "Mike Powell",
        "gender": "Male",
        "providerBio": null,
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "0accdeec-fb7f-4dde-9818-062390d47552",
        "distance": 0,
        "priority": 0,
        "providerName": "Tracy Dibben",
        "gender": "Female",
        "providerBio": "Tracy Dibben, Registered Professional Counsellor(RPC), Canadian Professional Counsellors Association(CPCA); Counselling Therapist, Association of Counselling Therapy of Alberta (ACTA) provides compassionate emotional support, Cognitive Behavior Therapy (CBT) based solution focused thinking, along with pastoral counselling.  She has over 15 years of experience, joining with people in their emotional and relationship struggles and helping them pursue practical next steps towards coping and healing.",
        "timeAvailables": [
            {
                "displayTime": "05:00 PM",
                "providerTimeInMinutes": 900,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "5bae2065-d4be-482b-a4da-5d2d370b009d",
        "distance": 0,
        "priority": 0,
        "providerName": "Cheryl Hambrey",
        "gender": "Female",
        "providerBio": "Cheryl Hambrey MA RP CPC is a seasoned counsellor who has addressed complex issues such as addiction, trauma, depression, anxiety, domestic violence, burnout and grief.  Her desire is to foster an atmosphere of hope, fresh perspective and the skills to move forward.",
        "timeAvailables": [
            {
                "displayTime": "05:15 PM",
                "providerTimeInMinutes": 855,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:30 PM",
                "providerTimeInMinutes": 930,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "f55d5928-f7e1-4e52-9962-8502af49b673",
        "distance": 0,
        "priority": 0,
        "providerName": "David Walters",
        "gender": "Male",
        "providerBio": "David A Walters, PhD (University of Aberdeen, UK), CCC, is an experienced and compassionate professional who has worked as a clinician and as an educator in Clinical & Counselling Psychology.  He values the potential and integrity of each individual, adopting an integration of humanistic, psychodynamic, existential and wellness approaches. Dr. Walters has earned postdoctoral qualifications in Psychoanalytic Studies (University of Sheffield) and he has published on a range of topics, including that of journal writing for mindfulness and health.",
        "timeAvailables": [
            {
                "displayTime": "05:15 PM",
                "providerTimeInMinutes": 915,
                "locId": "AE62C81E-B6BA-49F2-A5B0-CE8BB67B8CC4",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "06:15 PM",
                "providerTimeInMinutes": 975,
                "locId": "AE62C81E-B6BA-49F2-A5B0-CE8BB67B8CC4",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:15 PM",
                "providerTimeInMinutes": 1035,
                "locId": "AE62C81E-B6BA-49F2-A5B0-CE8BB67B8CC4",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:45 PM",
                "providerTimeInMinutes": 1125,
                "locId": "AE62C81E-B6BA-49F2-A5B0-CE8BB67B8CC4",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "09:45 PM",
                "providerTimeInMinutes": 1185,
                "locId": "AE62C81E-B6BA-49F2-A5B0-CE8BB67B8CC4",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "7411b4ef-0cd3-461f-9ec9-7f274d34ff03",
        "distance": 0,
        "priority": 0,
        "providerName": "Soren Michelsen",
        "gender": "Male",
        "providerBio": "",
        "timeAvailables": [
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:15 PM",
                "providerTimeInMinutes": 1155,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:15 PM",
                "providerTimeInMinutes": 1215,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "e73e7607-0d42-4dc9-8a57-00835416a38c",
        "distance": 0,
        "priority": 0,
        "providerName": "Alexa Tyler",
        "gender": "Female",
        "providerBio": "Alexa Tyler, MSW RCSW, is an enthusiastic and humanistic practitioner who strives to create a safe, non-judgmental, and inclusive space for every person. Her goal is to allow people to express themselves freely and validate their individual experiences. She graduated from Concord University with her Masters of Social Work in 2017 and has a broad spectrum of specialties including working with First Nations people, anxiety, depression, trauma, and bullying in all forms.",
        "timeAvailables": [
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 900,
                "locId": "191E839C-3578-4085-8D2C-8D900BE8DFFF",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 960,
                "locId": "191E839C-3578-4085-8D2C-8D900BE8DFFF",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "191E839C-3578-4085-8D2C-8D900BE8DFFF",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "09:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "191E839C-3578-4085-8D2C-8D900BE8DFFF",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "11:00 PM",
                "providerTimeInMinutes": 1200,
                "locId": "191E839C-3578-4085-8D2C-8D900BE8DFFF",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "12:00 PM",
                "providerTimeInMinutes": 1260,
                "locId": "191E839C-3578-4085-8D2C-8D900BE8DFFF",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "13:00 PM",
                "providerTimeInMinutes": 1320,
                "locId": "191E839C-3578-4085-8D2C-8D900BE8DFFF",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "14:00 PM",
                "providerTimeInMinutes": 1380,
                "locId": "191E839C-3578-4085-8D2C-8D900BE8DFFF",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "ad2756c9-aecd-4b34-a460-8c0c4cb1a9dc",
        "distance": 0,
        "priority": 0,
        "providerName": "Nancy Lawrence",
        "gender": "Female",
        "providerBio": "Nancy Lawrence, BA, MEd, CCPA, is a dedicated professional clinician, providing support services as a part of the dynamic Homewood Health  team for the past 12 years. Nancy is committed to help clients identify solutions and overcome obstacles, utilizing a diverse range of skills and experience. Nancy is well practiced in multiple modalities including Gestalt Therapy, Short Term Solution-Focused Therapy, Transactional Analysis, Person-Centered, Imago, Cognitive Behavioral Therapy, Spiritual and Feminist Approaches.",
        "timeAvailables": [
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 960,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "e2dd0909-5cf3-44bd-8026-e462c3a83db8",
        "distance": 0,
        "priority": 0,
        "providerName": "Mary Lou Groen",
        "gender": "Female",
        "providerBio": "Mary Lou Groen, MSW, RSW, is a clinical social worker who has been working in the field for the past 26 years.  Mary Lou is passionate about helping her clients improve their mental health and coping as they work through the trauma in their lives associated with childhood abuse; domestic violence; substance abuse; suicide. Mary Lou provides services to families, couples and individuals who are experiencing problems in their relationships. Trauma informed and Solution Focused therapies are utilized.",
        "timeAvailables": [
            {
                "displayTime": "06:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "0e3f7734-dfa1-420c-bfd6-dbf15316b2a8",
        "distance": 0,
        "priority": 0,
        "providerName": "Angela Green",
        "gender": "Female",
        "providerBio": "Angela Green, MCRDS, BCR, BA, ACC, operates from a solution focused perspective.  As a counsellor she believes that all people have strengths, abilities and resources, and that there are always a number of ways to look at an issue. She employs tools and techniques including Mindfulness, Cognitive Behaviour Therapy (CBT), and Acceptance and Commitment Therapy (ACT).",
        "timeAvailables": [
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "09:00 PM",
                "providerTimeInMinutes": 1200,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "52fc29bc-c8cd-44db-b0f7-c1df1821e591",
        "distance": 0,
        "priority": 0,
        "providerName": "Rebecca Paulsen",
        "gender": "Female",
        "providerBio": null,
        "timeAvailables": [
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:00 PM",
                "providerTimeInMinutes": 1200,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "09:00 PM",
                "providerTimeInMinutes": 1260,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "4dccb2c0-34e9-4db2-ae3a-2b70a7468493",
        "distance": 0,
        "priority": 0,
        "providerName": "Wendy Gagne [Marie]",
        "gender": "Female",
        "providerBio": "Wendy Gagne is devoted to helping couples connect again, parents manage ADHD children, and individuals recover from trauma, depression, anxiety and more. Her main therapies are CBT and faith-based counseling. She holds a Master of Divinity from McMaster University and a M.Th. from Trinity College of the Bible and is working on her PhD in Christian Counseling.",
        "timeAvailables": [
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:00 PM",
                "providerTimeInMinutes": 1200,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "ef4b5586-52d8-4aa6-8906-88b38fb5c8ef",
        "distance": 0,
        "priority": 0,
        "providerName": "Janice Butler (AB)",
        "gender": "Female",
        "providerBio": "Janice Butler loves supporting individuals, couples, and families in finding their way through the challenges of life. She has many years of experience with different counselling approaches including breathwork, cognitive behavioral, families systems, somatic(body) awareness, inner child-work, Hendrix Imago Marriage counselling technic. Janice believes every problem comes with an opportunity to grow and become more fully connected to ourselves and the world around us.",
        "timeAvailables": [
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "3eb75a2d-c5a9-47f0-9c9e-bb89ee469d26",
        "distance": 0,
        "priority": 0,
        "providerName": "Chiduzie Ezedebego",
        "gender": "Male",
        "providerBio": "My name is Chiduzie (Duzie) Ezedebego, I hold a Bachelor of Science degree, a Bachelor of Arts degree in Justice Studies from Royal Roads University, and a Master of Social Work Degree from the University of Northern British Columbia. \nI am a Registered Clinical Counsellor (RCC), with the BC Association of Counsellors, and a registered Social Worker (RSW), with the BC College of Social Workers. I have been providing individual and couples counselling since my graduation in 2014.",
        "timeAvailables": [
            {
                "displayTime": "07:00 PM",
                "providerTimeInMinutes": 960,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "08:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "366566a7-6add-4f72-a24f-d4ea893c8c5c",
        "distance": 0,
        "priority": 0,
        "providerName": "Munir Velji",
        "gender": "Male",
        "providerBio": "Munir Velji BA, BSW, MSW, RSW. Munir holds three degrees; a BA in Criminology and a Bachelors in Social Work, as well as, a Masters in Social Work. Munir graduated from UBC in 1993 and has been working as a Clinical Social Worker for 27 years. Munir has experience in trauma, mental health and addictions. He has worked with children, adolescents, seniors, couples and families.",
        "timeAvailables": [
            {
                "displayTime": "08:00 PM",
                "providerTimeInMinutes": 1020,
                "locId": "DDFCFBF8-D5DC-4685-B689-36E67303105A",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "09:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DDFCFBF8-D5DC-4685-B689-36E67303105A",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "10:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DDFCFBF8-D5DC-4685-B689-36E67303105A",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "11:00 PM",
                "providerTimeInMinutes": 1200,
                "locId": "DDFCFBF8-D5DC-4685-B689-36E67303105A",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "965184eb-6b52-48e1-8649-69532f7d3337",
        "distance": 0,
        "priority": 0,
        "providerName": "Brenda Kraushaar",
        "gender": "Female",
        "providerBio": null,
        "timeAvailables": [
            {
                "displayTime": "08:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "4688c6be-bd1a-404f-860a-a7eaacc0b146",
        "distance": 0,
        "priority": 0,
        "providerName": "Jason Sloove",
        "gender": "Male",
        "providerBio": "Jason Sloove, MSc, RCC, is passionate about helping clients develop solutions for achieving sustainable and healthy patterns of behaviours and relationship interactions. He has extensive experience and training with trauma recovery, compassion fatigue, depression, anxiety, and couple and family dynamic problems. He graduated from Loma Linda University with his Masters Science in Marriage and Family Therapy. He also has 10 years of clinical experience in private and public mental health. He uses EFT, ACT, CBT, EFCT and EFFT.",
        "timeAvailables": [
            {
                "displayTime": "08:15 PM",
                "providerTimeInMinutes": 1035,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "09:30 PM",
                "providerTimeInMinutes": 1110,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "3b7dcb7f-20f0-4156-a912-9df0ba5923a7",
        "distance": 0,
        "priority": 0,
        "providerName": "Monique Brideau",
        "gender": "Female",
        "providerBio": "Monique Brideau, MSW, Registered Clinical Social Worker, draws on a variety of resources, including Acceptance and Commitment Therapy (ACT) to help her clients identify solutions to their challenges with stress, anxiety, depression, trauma, relationships and grief and loss.",
        "timeAvailables": [
            {
                "displayTime": "09:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "10:00 PM",
                "providerTimeInMinutes": 1200,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "11:00 PM",
                "providerTimeInMinutes": 1260,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "16017cb2-bfb5-4ddc-beaf-cb9ecee7ecb5",
        "distance": 0,
        "priority": 0,
        "providerName": "Garret Ford",
        "gender": "Male",
        "providerBio": "Garret Ford, M.ED BHSC BA CCC, enjoys working with clients from a variety of backgrounds cope and recover from stressors; his main specialties are relationship issues, addictions [substance and process], and trauma. He graduated from the University of Lethbridge in 2017 with a Masters of Education in Counselling Psychology and mainly uses brief psychodynamic, solution focused therapy, cognitive behavioral therapy [CBT], supportive humanistic counselling, and eye movement desensitization and reprocessing [EMDR] in his current practice.",
        "timeAvailables": [
            {
                "displayTime": "09:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "10:00 PM",
                "providerTimeInMinutes": 1200,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "8a6b1aca-28e5-4e73-bc63-d0d1bd93159b",
        "distance": 0,
        "priority": 0,
        "providerName": "James [Jim] Blake",
        "gender": "Male",
        "providerBio": null,
        "timeAvailables": [
            {
                "displayTime": "09:00 PM",
                "providerTimeInMinutes": 1080,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "10:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "11:00 PM",
                "providerTimeInMinutes": 1200,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Phone"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    },
    {
        "partyID": "6ef2c41c-c42f-4e78-b93b-296e616eff49",
        "distance": 0,
        "priority": 0,
        "providerName": "Golda Martey",
        "gender": "Female",
        "providerBio": "Golda Martey, MCP, CCC. is passionate about supporting her clients identify solutions to relational and emotional concerns. She honours the client’s perspective, dignity, and personal choice in the counselling process. She works with clients to develop skills to manage various concerns not limited to trauma, anxiety and depression to navigate stuck moments in their personal lives and relationships to meet their goals. She graduated from Adler University with her Master of Counselling Psychology and uses tools not limited to Cognitive Behavioural therapies, Attachment based and Emotion Focused Family therapies in her work.",
        "timeAvailables": [
            {
                "displayTime": "10:00 PM",
                "providerTimeInMinutes": 1140,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            },
            {
                "displayTime": "11:00 PM",
                "providerTimeInMinutes": 1200,
                "locId": "DBC41525-290E-4543-970E-9B2BC6AAE720",
                "modalities": [
                    "InPerson",
                    "Video"
                ],
                "canRescheduleOrCancel": true
            }
        ],
        "lsAutoMatchMessage": null
    }
];
  constructor() { }

  ngOnInit(): void {
  }

}
