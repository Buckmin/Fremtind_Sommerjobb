/* 
        Dette er fila hvor fake testutslipp blir generert. for å teste koden vi har.
*/

export function EmissionsPerDay() { // tanken med denne blir så å sette alle emissions til 0 for alle dager, så fylles de opp etterhvert.
    //let dag1utslipp = new Date ("2020-01-01") // første dag i brukerens informasjon om utslipp
    let currentDag = new Date ("2020-01-01")
    const emissionsArr2 = [[new Date(currentDag), 1]] // første element, første dato kommer ikke med pga ""....getDate() +1"
    for (let i = 0; i < 365; i++){
        currentDag.setDate(currentDag.getDate() + 1)
        emissionsArr2.push([new Date(currentDag), 1]) // [[dato 1, utslipp dato 1], [dato 2, utslipp dato 2]]
        //console.log(emissionsArr2[i])
    }
    

// gammelt array.
    // const emissionsArr = 
    // [
    //     ["	2020-06-01	"	,	1	],
    //     ["	2020-06-02	"	,	2	],
    //     ["	2020-06-03	"	,	3	],
    //     ["	2020-06-04	"	,	4	],
    //     ["	2020-06-05	"	,	5	],
    //     ["	2020-06-06	"	,	6	],
    //     ["	2020-06-07	"	,	7	],
    //     ["	2020-06-08	"	,	8	],
    //     ["	2020-06-09	"	,	9	],
    //     ["	2020-06-10	"	,	10	],
    //     ["	2020-06-11	"	,	11	],
    //     ["	2020-06-12	"	,	12	],
    //     ["	2020-06-13	"	,	13	],
    //     ["	2020-06-14	"	,	14	],
    //     ["	2020-06-15	"	,	15	],
    //     ["	2020-06-16	"	,	16	],
    //     ["	2020-06-17	"	,	17	],
    //     ["	2020-06-18	"	,	18	],
    //     ["	2020-06-19	"	,	19	],
    //     ["	2020-06-20	"	,	20	],
    //     ["	2020-06-21	"	,	21	],
    //     ["	2020-06-22	"	,	22	],
    //     ["	2020-06-23	"	,	23	],
    //     ["	2020-06-24	"	,	24	],
    //     ["	2020-06-25	"	,	25	],
    //     ["	2020-06-26	"	,	26	],
    //     ["	2020-06-27	"	,	27	],
    //     ["	2020-06-28	"	,	28	],
    //     ["	2020-06-29	"	,	29	],
    //     ["	2020-06-30	"	,	30	],
    //     ["	2020-07-01	"	,	31	],
    //     ["	2020-07-02	"	,	32	],
    //     ["	2020-07-03	"	,	33	],
    //     ["	2020-07-04	"	,	34	],
    //     ["	2020-07-05	"	,	35	],
    //     ["	2020-07-06	"	,	36	],
    //     ["	2020-07-07	"	,	37	],
    //     ["	2020-07-08	"	,	38	],
    //     ["	2020-07-09	"	,	39	],
        
    // ]

    return emissionsArr2
    
}