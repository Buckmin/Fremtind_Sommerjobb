/* 
    dette er en testfil for funfacts. funfacts her er ikke faktasjekket.

    det bør vel egentlig være lagret i et tekstfil, evt i excelark, og så har vi en funksjon som leser fra filen. per nå er det her

*/


// dårlig kilde for bananer https://www.theguardian.com/environment/green-living-blog/2010/jul/01/carbon-footprint-banana

export function ManyFunfactsDict() { // tallene er googlet kjapt. bananer og kaffe er fra the Guardian i 2010, antall liter er kjemi-matte
    const funDict =
    {
        0   :   [   "	bare ingenting slipper ut ingenting	", " 0 er ganske lite", "oi det var lite utslipp "	]	,
        1	:	[	"	13	bananer	"	,	"	50	kopper kaffe	"	,	"	559	L CO2 i atmosfæren	"	,	]	,
2	:	[	"	25	bananer	"	,	"	100	kopper kaffe	"	,	"	1118	L CO2 i atmosfæren	"	,	]	,
3	:	[	"	38	bananer	"	,	"	150	kopper kaffe	"	,	"	1677	L CO2 i atmosfæren	"	,	]	,
4	:	[	"	50	bananer	"	,	"	200	kopper kaffe	"	,	"	2236	L CO2 i atmosfæren	"	,	]	,
5	:	[	"	63	bananer	"	,	"	250	kopper kaffe	"	,	"	2795	L CO2 i atmosfæren	"	,	]	,
6	:	[	"	75	bananer	"	,	"	300	kopper kaffe	"	,	"	3354	L CO2 i atmosfæren	"	,	]	,
7	:	[	"	88	bananer	"	,	"	350	kopper kaffe	"	,	"	3913	L CO2 i atmosfæren	"	,	]	,
8	:	[	"	100	bananer	"	,	"	400	kopper kaffe	"	,	"	4472	L CO2 i atmosfæren	"	,	]	,
9	:	[	"	113	bananer	"	,	"	450	kopper kaffe	"	,	"	5031	L CO2 i atmosfæren	"	,	]	,
10	:	[	"	125	bananer	"	,	"	500	kopper kaffe	"	,	"	5590	L CO2 i atmosfæren	"	,	]	,
11	:	[	"	138	bananer	"	,	"	550	kopper kaffe	"	,	"	6149	L CO2 i atmosfæren	"	,	]	,
12	:	[	"	150	bananer	"	,	"	600	kopper kaffe	"	,	"	6708	L CO2 i atmosfæren	"	,	]	,
13	:	[	"	163	bananer	"	,	"	650	kopper kaffe	"	,	"	7267	L CO2 i atmosfæren	"	,	]	,
14	:	[	"	175	bananer	"	,	"	700	kopper kaffe	"	,	"	7826	L CO2 i atmosfæren	"	,	]	,
15	:	[	"	188	bananer	"	,	"	750	kopper kaffe	"	,	"	8385	L CO2 i atmosfæren	"	,	]	,
16	:	[	"	200	bananer	"	,	"	800	kopper kaffe	"	,	"	8944	L CO2 i atmosfæren	"	,	]	,
17	:	[	"	213	bananer	"	,	"	850	kopper kaffe	"	,	"	9503	L CO2 i atmosfæren	"	,	]	,
18	:	[	"	225	bananer	"	,	"	900	kopper kaffe	"	,	"	10062	L CO2 i atmosfæren	"	,	]	,
19	:	[	"	238	bananer	"	,	"	950	kopper kaffe	"	,	"	10621	L CO2 i atmosfæren	"	,	]	,
20	:	[	"	250	bananer	"	,	"	1000	kopper kaffe	"	,	"	11180	L CO2 i atmosfæren	"	,	]	,
21	:	[	"	263	bananer	"	,	"	1050	kopper kaffe	"	,	"	11739	L CO2 i atmosfæren	"	,	]	,
22	:	[	"	275	bananer	"	,	"	1100	kopper kaffe	"	,	"	12298	L CO2 i atmosfæren	"	,	]	,
23	:	[	"	288	bananer	"	,	"	1150	kopper kaffe	"	,	"	12857	L CO2 i atmosfæren	"	,	]	,
24	:	[	"	300	bananer	"	,	"	1200	kopper kaffe	"	,	"	13416	L CO2 i atmosfæren	"	,	]	,
25	:	[	"	313	bananer	"	,	"	1250	kopper kaffe	"	,	"	13975	L CO2 i atmosfæren	"	,	]	,
26	:	[	"	325	bananer	"	,	"	1300	kopper kaffe	"	,	"	14534	L CO2 i atmosfæren	"	,	]	,
27	:	[	"	338	bananer	"	,	"	1350	kopper kaffe	"	,	"	15093	L CO2 i atmosfæren	"	,	]	,
28	:	[	"	350	bananer	"	,	"	1400	kopper kaffe	"	,	"	15652	L CO2 i atmosfæren	"	,	]	,
29	:	[	"	363	bananer	"	,	"	1450	kopper kaffe	"	,	"	16211	L CO2 i atmosfæren	"	,	]	,
30	:	[	"	375	bananer	"	,	"	1500	kopper kaffe	"	,	"	16770	L CO2 i atmosfæren	"	,	]	,
31	:	[	"	388	bananer	"	,	"	1550	kopper kaffe	"	,	"	17329	L CO2 i atmosfæren	"	,	]	,
32	:	[	"	400	bananer	"	,	"	1600	kopper kaffe	"	,	"	17888	L CO2 i atmosfæren	"	,	]	,
33	:	[	"	413	bananer	"	,	"	1650	kopper kaffe	"	,	"	18447	L CO2 i atmosfæren	"	,	]	,
34	:	[	"	425	bananer	"	,	"	1700	kopper kaffe	"	,	"	19006	L CO2 i atmosfæren	"	,	]	,
35	:	[	"	438	bananer	"	,	"	1750	kopper kaffe	"	,	"	19565	L CO2 i atmosfæren	"	,	]	,
36	:	[	"	450	bananer	"	,	"	1800	kopper kaffe	"	,	"	20124	L CO2 i atmosfæren	"	,	]	,
37	:	[	"	463	bananer	"	,	"	1850	kopper kaffe	"	,	"	20683	L CO2 i atmosfæren	"	,	]	,
38	:	[	"	475	bananer	"	,	"	1900	kopper kaffe	"	,	"	21242	L CO2 i atmosfæren	"	,	]	,
39	:	[	"	488	bananer	"	,	"	1950	kopper kaffe	"	,	"	21801	L CO2 i atmosfæren	"	,	]	,
40	:	[	"	500	bananer	"	,	"	2000	kopper kaffe	"	,	"	22360	L CO2 i atmosfæren	"	,	]	,
41	:	[	"	513	bananer	"	,	"	2050	kopper kaffe	"	,	"	22919	L CO2 i atmosfæren	"	,	]	,
42	:	[	"	525	bananer	"	,	"	2100	kopper kaffe	"	,	"	23478	L CO2 i atmosfæren	"	,	]	,
43	:	[	"	538	bananer	"	,	"	2150	kopper kaffe	"	,	"	24037	L CO2 i atmosfæren	"	,	]	,
44	:	[	"	550	bananer	"	,	"	2200	kopper kaffe	"	,	"	24596	L CO2 i atmosfæren	"	,	]	,
45	:	[	"	563	bananer	"	,	"	2250	kopper kaffe	"	,	"	25155	L CO2 i atmosfæren	"	,	]	,
46	:	[	"	575	bananer	"	,	"	2300	kopper kaffe	"	,	"	25714	L CO2 i atmosfæren	"	,	]	,
47	:	[	"	588	bananer	"	,	"	2350	kopper kaffe	"	,	"	26273	L CO2 i atmosfæren	"	,	]	,
48	:	[	"	600	bananer	"	,	"	2400	kopper kaffe	"	,	"	26832	L CO2 i atmosfæren	"	,	]	,
49	:	[	"	613	bananer	"	,	"	2450	kopper kaffe	"	,	"	27391	L CO2 i atmosfæren	"	,	]	,
50	:	[	"	625	bananer	"	,	"	2500	kopper kaffe	"	,	"	27950	L CO2 i atmosfæren	"	,	]	,
51	:	[	"	638	bananer	"	,	"	2550	kopper kaffe	"	,	"	28509	L CO2 i atmosfæren	"	,	]	,
52	:	[	"	650	bananer	"	,	"	2600	kopper kaffe	"	,	"	29068	L CO2 i atmosfæren	"	,	]	,
53	:	[	"	663	bananer	"	,	"	2650	kopper kaffe	"	,	"	29627	L CO2 i atmosfæren	"	,	]	,
54	:	[	"	675	bananer	"	,	"	2700	kopper kaffe	"	,	"	30186	L CO2 i atmosfæren	"	,	]	,
55	:	[	"	688	bananer	"	,	"	2750	kopper kaffe	"	,	"	30745	L CO2 i atmosfæren	"	,	]	,
56	:	[	"	700	bananer	"	,	"	2800	kopper kaffe	"	,	"	31304	L CO2 i atmosfæren	"	,	]	,
57	:	[	"	713	bananer	"	,	"	2850	kopper kaffe	"	,	"	31863	L CO2 i atmosfæren	"	,	]	,
58	:	[	"	725	bananer	"	,	"	2900	kopper kaffe	"	,	"	32422	L CO2 i atmosfæren	"	,	]	,
59	:	[	"	738	bananer	"	,	"	2950	kopper kaffe	"	,	"	32981	L CO2 i atmosfæren	"	,	]	,
60	:	[	"	750	bananer	"	,	"	3000	kopper kaffe	"	,	"	33540	L CO2 i atmosfæren	"	,	]	,
61	:	[	"	763	bananer	"	,	"	3050	kopper kaffe	"	,	"	34099	L CO2 i atmosfæren	"	,	]	,
62	:	[	"	775	bananer	"	,	"	3100	kopper kaffe	"	,	"	34658	L CO2 i atmosfæren	"	,	]	,
63	:	[	"	788	bananer	"	,	"	3150	kopper kaffe	"	,	"	35217	L CO2 i atmosfæren	"	,	]	,
64	:	[	"	800	bananer	"	,	"	3200	kopper kaffe	"	,	"	35776	L CO2 i atmosfæren	"	,	]	,
65	:	[	"	813	bananer	"	,	"	3250	kopper kaffe	"	,	"	36335	L CO2 i atmosfæren	"	,	]	,
66	:	[	"	825	bananer	"	,	"	3300	kopper kaffe	"	,	"	36894	L CO2 i atmosfæren	"	,	]	,
67	:	[	"	838	bananer	"	,	"	3350	kopper kaffe	"	,	"	37453	L CO2 i atmosfæren	"	,	]	,
68	:	[	"	850	bananer	"	,	"	3400	kopper kaffe	"	,	"	38012	L CO2 i atmosfæren	"	,	]	,
69	:	[	"	863	bananer	"	,	"	3450	kopper kaffe	"	,	"	38571	L CO2 i atmosfæren	"	,	]	,
70	:	[	"	875	bananer	"	,	"	3500	kopper kaffe	"	,	"	39130	L CO2 i atmosfæren	"	,	]	,
71	:	[	"	888	bananer	"	,	"	3550	kopper kaffe	"	,	"	39689	L CO2 i atmosfæren	"	,	]	,
72	:	[	"	900	bananer	"	,	"	3600	kopper kaffe	"	,	"	40248	L CO2 i atmosfæren	"	,	]	,
73	:	[	"	913	bananer	"	,	"	3650	kopper kaffe	"	,	"	40807	L CO2 i atmosfæren	"	,	]	,
74	:	[	"	925	bananer	"	,	"	3700	kopper kaffe	"	,	"	41366	L CO2 i atmosfæren	"	,	]	,
75	:	[	"	938	bananer	"	,	"	3750	kopper kaffe	"	,	"	41925	L CO2 i atmosfæren	"	,	]	,
76	:	[	"	950	bananer	"	,	"	3800	kopper kaffe	"	,	"	42484	L CO2 i atmosfæren	"	,	]	,
77	:	[	"	963	bananer	"	,	"	3850	kopper kaffe	"	,	"	43043	L CO2 i atmosfæren	"	,	]	,
78	:	[	"	975	bananer	"	,	"	3900	kopper kaffe	"	,	"	43602	L CO2 i atmosfæren	"	,	]	,
79	:	[	"	988	bananer	"	,	"	3950	kopper kaffe	"	,	"	44161	L CO2 i atmosfæren	"	,	]	,
80	:	[	"	1000	bananer	"	,	"	4000	kopper kaffe	"	,	"	44720	L CO2 i atmosfæren	"	,	]	,
81	:	[	"	1013	bananer	"	,	"	4050	kopper kaffe	"	,	"	45279	L CO2 i atmosfæren	"	,	]	,
82	:	[	"	1025	bananer	"	,	"	4100	kopper kaffe	"	,	"	45838	L CO2 i atmosfæren	"	,	]	,
83	:	[	"	1038	bananer	"	,	"	4150	kopper kaffe	"	,	"	46397	L CO2 i atmosfæren	"	,	]	,
84	:	[	"	1050	bananer	"	,	"	4200	kopper kaffe	"	,	"	46956	L CO2 i atmosfæren	"	,	]	,
85	:	[	"	1063	bananer	"	,	"	4250	kopper kaffe	"	,	"	47515	L CO2 i atmosfæren	"	,	]	,
86	:	[	"	1075	bananer	"	,	"	4300	kopper kaffe	"	,	"	48074	L CO2 i atmosfæren	"	,	]	,
87	:	[	"	1088	bananer	"	,	"	4350	kopper kaffe	"	,	"	48633	L CO2 i atmosfæren	"	,	]	,
88	:	[	"	1100	bananer	"	,	"	4400	kopper kaffe	"	,	"	49192	L CO2 i atmosfæren	"	,	]	,
89	:	[	"	1113	bananer	"	,	"	4450	kopper kaffe	"	,	"	49751	L CO2 i atmosfæren	"	,	]	,
90	:	[	"	1125	bananer	"	,	"	4500	kopper kaffe	"	,	"	50310	L CO2 i atmosfæren	"	,	]	,
91	:	[	"	1138	bananer	"	,	"	4550	kopper kaffe	"	,	"	50869	L CO2 i atmosfæren	"	,	]	,
92	:	[	"	1150	bananer	"	,	"	4600	kopper kaffe	"	,	"	51428	L CO2 i atmosfæren	"	,	]	,
93	:	[	"	1163	bananer	"	,	"	4650	kopper kaffe	"	,	"	51987	L CO2 i atmosfæren	"	,	]	,
94	:	[	"	1175	bananer	"	,	"	4700	kopper kaffe	"	,	"	52546	L CO2 i atmosfæren	"	,	]	,
95	:	[	"	1188	bananer	"	,	"	4750	kopper kaffe	"	,	"	53105	L CO2 i atmosfæren	"	,	]	,
96	:	[	"	1200	bananer	"	,	"	4800	kopper kaffe	"	,	"	53664	L CO2 i atmosfæren	"	,	]	,
97	:	[	"	1213	bananer	"	,	"	4850	kopper kaffe	"	,	"	54223	L CO2 i atmosfæren	"	,	]	,
98	:	[	"	1225	bananer	"	,	"	4900	kopper kaffe	"	,	"	54782	L CO2 i atmosfæren	"	,	]	,
99	:	[	"	1238	bananer	"	,	"	4950	kopper kaffe	"	,	"	55341	L CO2 i atmosfæren	"	,	]	,
100	:	[	"	1250	bananer	"	,	"	5000	kopper kaffe	"	,	"	55900	L CO2 i atmosfæren	"	,	]	,
101	:	[	"	1263	bananer	"	,	"	5050	kopper kaffe	"	,	"	56459	L CO2 i atmosfæren	"	,	]	,
102	:	[	"	1275	bananer	"	,	"	5100	kopper kaffe	"	,	"	57018	L CO2 i atmosfæren	"	,	]	,
103	:	[	"	1288	bananer	"	,	"	5150	kopper kaffe	"	,	"	57577	L CO2 i atmosfæren	"	,	]	,
104	:	[	"	1300	bananer	"	,	"	5200	kopper kaffe	"	,	"	58136	L CO2 i atmosfæren	"	,	]	,
105	:	[	"	1313	bananer	"	,	"	5250	kopper kaffe	"	,	"	58695	L CO2 i atmosfæren	"	,	]	,
106	:	[	"	1325	bananer	"	,	"	5300	kopper kaffe	"	,	"	59254	L CO2 i atmosfæren	"	,	]	,
107	:	[	"	1338	bananer	"	,	"	5350	kopper kaffe	"	,	"	59813	L CO2 i atmosfæren	"	,	]	,
108	:	[	"	1350	bananer	"	,	"	5400	kopper kaffe	"	,	"	60372	L CO2 i atmosfæren	"	,	]	,
109	:	[	"	1363	bananer	"	,	"	5450	kopper kaffe	"	,	"	60931	L CO2 i atmosfæren	"	,	]	,
110	:	[	"	1375	bananer	"	,	"	5500	kopper kaffe	"	,	"	61490	L CO2 i atmosfæren	"	,	]	,
111	:	[	"	1388	bananer	"	,	"	5550	kopper kaffe	"	,	"	62049	L CO2 i atmosfæren	"	,	]	,
112	:	[	"	1400	bananer	"	,	"	5600	kopper kaffe	"	,	"	62608	L CO2 i atmosfæren	"	,	]	,
113	:	[	"	1413	bananer	"	,	"	5650	kopper kaffe	"	,	"	63167	L CO2 i atmosfæren	"	,	]	,
114	:	[	"	1425	bananer	"	,	"	5700	kopper kaffe	"	,	"	63726	L CO2 i atmosfæren	"	,	]	,
115	:	[	"	1438	bananer	"	,	"	5750	kopper kaffe	"	,	"	64285	L CO2 i atmosfæren	"	,	]	,
116	:	[	"	1450	bananer	"	,	"	5800	kopper kaffe	"	,	"	64844	L CO2 i atmosfæren	"	,	]	,
117	:	[	"	1463	bananer	"	,	"	5850	kopper kaffe	"	,	"	65403	L CO2 i atmosfæren	"	,	]	,
118	:	[	"	1475	bananer	"	,	"	5900	kopper kaffe	"	,	"	65962	L CO2 i atmosfæren	"	,	]	,
119	:	[	"	1488	bananer	"	,	"	5950	kopper kaffe	"	,	"	66521	L CO2 i atmosfæren	"	,	]	,
120	:	[	"	1500	bananer	"	,	"	6000	kopper kaffe	"	,	"	67080	L CO2 i atmosfæren	"	,	]	,
121	:	[	"	1513	bananer	"	,	"	6050	kopper kaffe	"	,	"	67639	L CO2 i atmosfæren	"	,	]	,
122	:	[	"	1525	bananer	"	,	"	6100	kopper kaffe	"	,	"	68198	L CO2 i atmosfæren	"	,	]	,
123	:	[	"	1538	bananer	"	,	"	6150	kopper kaffe	"	,	"	68757	L CO2 i atmosfæren	"	,	]	,
124	:	[	"	1550	bananer	"	,	"	6200	kopper kaffe	"	,	"	69316	L CO2 i atmosfæren	"	,	]	,
125	:	[	"	1563	bananer	"	,	"	6250	kopper kaffe	"	,	"	69875	L CO2 i atmosfæren	"	,	]	,
126	:	[	"	1575	bananer	"	,	"	6300	kopper kaffe	"	,	"	70434	L CO2 i atmosfæren	"	,	]	,
127	:	[	"	1588	bananer	"	,	"	6350	kopper kaffe	"	,	"	70993	L CO2 i atmosfæren	"	,	]	,
128	:	[	"	1600	bananer	"	,	"	6400	kopper kaffe	"	,	"	71552	L CO2 i atmosfæren	"	,	]	,
129	:	[	"	1613	bananer	"	,	"	6450	kopper kaffe	"	,	"	72111	L CO2 i atmosfæren	"	,	]	,
130	:	[	"	1625	bananer	"	,	"	6500	kopper kaffe	"	,	"	72670	L CO2 i atmosfæren	"	,	]	,
131	:	[	"	1638	bananer	"	,	"	6550	kopper kaffe	"	,	"	73229	L CO2 i atmosfæren	"	,	]	,
132	:	[	"	1650	bananer	"	,	"	6600	kopper kaffe	"	,	"	73788	L CO2 i atmosfæren	"	,	]	,
133	:	[	"	1663	bananer	"	,	"	6650	kopper kaffe	"	,	"	74347	L CO2 i atmosfæren	"	,	]	,
134	:	[	"	1675	bananer	"	,	"	6700	kopper kaffe	"	,	"	74906	L CO2 i atmosfæren	"	,	]	,
135	:	[	"	1688	bananer	"	,	"	6750	kopper kaffe	"	,	"	75465	L CO2 i atmosfæren	"	,	]	,
136	:	[	"	1700	bananer	"	,	"	6800	kopper kaffe	"	,	"	76024	L CO2 i atmosfæren	"	,	]	,
137	:	[	"	1713	bananer	"	,	"	6850	kopper kaffe	"	,	"	76583	L CO2 i atmosfæren	"	,	]	,
138	:	[	"	1725	bananer	"	,	"	6900	kopper kaffe	"	,	"	77142	L CO2 i atmosfæren	"	,	]	,
139	:	[	"	1738	bananer	"	,	"	6950	kopper kaffe	"	,	"	77701	L CO2 i atmosfæren	"	,	]	,
140	:	[	"	1750	bananer	"	,	"	7000	kopper kaffe	"	,	"	78260	L CO2 i atmosfæren	"	,	]	,
141	:	[	"	1763	bananer	"	,	"	7050	kopper kaffe	"	,	"	78819	L CO2 i atmosfæren	"	,	]	,
142	:	[	"	1775	bananer	"	,	"	7100	kopper kaffe	"	,	"	79378	L CO2 i atmosfæren	"	,	]	,
143	:	[	"	1788	bananer	"	,	"	7150	kopper kaffe	"	,	"	79937	L CO2 i atmosfæren	"	,	]	,
144	:	[	"	1800	bananer	"	,	"	7200	kopper kaffe	"	,	"	80496	L CO2 i atmosfæren	"	,	]	,
145	:	[	"	1813	bananer	"	,	"	7250	kopper kaffe	"	,	"	81055	L CO2 i atmosfæren	"	,	]	,
146	:	[	"	1825	bananer	"	,	"	7300	kopper kaffe	"	,	"	81614	L CO2 i atmosfæren	"	,	]	,
147	:	[	"	1838	bananer	"	,	"	7350	kopper kaffe	"	,	"	82173	L CO2 i atmosfæren	"	,	]	,
148	:	[	"	1850	bananer	"	,	"	7400	kopper kaffe	"	,	"	82732	L CO2 i atmosfæren	"	,	]	,
149	:	[	"	1863	bananer	"	,	"	7450	kopper kaffe	"	,	"	83291	L CO2 i atmosfæren	"	,	]	,
150	:	[	"	1875	bananer	"	,	"	7500	kopper kaffe	"	,	"	83850	L CO2 i atmosfæren	"	,	]	,
151	:	[	"	1888	bananer	"	,	"	7550	kopper kaffe	"	,	"	84409	L CO2 i atmosfæren	"	,	]	,
152	:	[	"	1900	bananer	"	,	"	7600	kopper kaffe	"	,	"	84968	L CO2 i atmosfæren	"	,	]	,
153	:	[	"	1913	bananer	"	,	"	7650	kopper kaffe	"	,	"	85527	L CO2 i atmosfæren	"	,	]	,
154	:	[	"	1925	bananer	"	,	"	7700	kopper kaffe	"	,	"	86086	L CO2 i atmosfæren	"	,	]	,
155	:	[	"	1938	bananer	"	,	"	7750	kopper kaffe	"	,	"	86645	L CO2 i atmosfæren	"	,	]	,
156	:	[	"	1950	bananer	"	,	"	7800	kopper kaffe	"	,	"	87204	L CO2 i atmosfæren	"	,	]	,
157	:	[	"	1963	bananer	"	,	"	7850	kopper kaffe	"	,	"	87763	L CO2 i atmosfæren	"	,	]	,
158	:	[	"	1975	bananer	"	,	"	7900	kopper kaffe	"	,	"	88322	L CO2 i atmosfæren	"	,	]	,
159	:	[	"	1988	bananer	"	,	"	7950	kopper kaffe	"	,	"	88881	L CO2 i atmosfæren	"	,	]	,
160	:	[	"	2000	bananer	"	,	"	8000	kopper kaffe	"	,	"	89440	L CO2 i atmosfæren	"	,	]	,
161	:	[	"	2013	bananer	"	,	"	8050	kopper kaffe	"	,	"	89999	L CO2 i atmosfæren	"	,	]	,
162	:	[	"	2025	bananer	"	,	"	8100	kopper kaffe	"	,	"	90558	L CO2 i atmosfæren	"	,	]	,
163	:	[	"	2038	bananer	"	,	"	8150	kopper kaffe	"	,	"	91117	L CO2 i atmosfæren	"	,	]	,
164	:	[	"	2050	bananer	"	,	"	8200	kopper kaffe	"	,	"	91676	L CO2 i atmosfæren	"	,	]	,
165	:	[	"	2063	bananer	"	,	"	8250	kopper kaffe	"	,	"	92235	L CO2 i atmosfæren	"	,	]	,
166	:	[	"	2075	bananer	"	,	"	8300	kopper kaffe	"	,	"	92794	L CO2 i atmosfæren	"	,	]	,
167	:	[	"	2088	bananer	"	,	"	8350	kopper kaffe	"	,	"	93353	L CO2 i atmosfæren	"	,	]	,
168	:	[	"	2100	bananer	"	,	"	8400	kopper kaffe	"	,	"	93912	L CO2 i atmosfæren	"	,	]	,
169	:	[	"	2113	bananer	"	,	"	8450	kopper kaffe	"	,	"	94471	L CO2 i atmosfæren	"	,	]	,
170	:	[	"	2125	bananer	"	,	"	8500	kopper kaffe	"	,	"	95030	L CO2 i atmosfæren	"	,	]	,
171	:	[	"	2138	bananer	"	,	"	8550	kopper kaffe	"	,	"	95589	L CO2 i atmosfæren	"	,	]	,
172	:	[	"	2150	bananer	"	,	"	8600	kopper kaffe	"	,	"	96148	L CO2 i atmosfæren	"	,	]	,
173	:	[	"	2163	bananer	"	,	"	8650	kopper kaffe	"	,	"	96707	L CO2 i atmosfæren	"	,	]	,
174	:	[	"	2175	bananer	"	,	"	8700	kopper kaffe	"	,	"	97266	L CO2 i atmosfæren	"	,	]	,
175	:	[	"	2188	bananer	"	,	"	8750	kopper kaffe	"	,	"	97825	L CO2 i atmosfæren	"	,	]	,
176	:	[	"	2200	bananer	"	,	"	8800	kopper kaffe	"	,	"	98384	L CO2 i atmosfæren	"	,	]	,
177	:	[	"	2213	bananer	"	,	"	8850	kopper kaffe	"	,	"	98943	L CO2 i atmosfæren	"	,	]	,
178	:	[	"	2225	bananer	"	,	"	8900	kopper kaffe	"	,	"	99502	L CO2 i atmosfæren	"	,	]	,
179	:	[	"	2238	bananer	"	,	"	8950	kopper kaffe	"	,	"	100061	L CO2 i atmosfæren	"	,	]	,
180	:	[	"	2250	bananer	"	,	"	9000	kopper kaffe	"	,	"	100620	L CO2 i atmosfæren	"	,	]	,
181	:	[	"	2263	bananer	"	,	"	9050	kopper kaffe	"	,	"	101179	L CO2 i atmosfæren	"	,	]	,
182	:	[	"	2275	bananer	"	,	"	9100	kopper kaffe	"	,	"	101738	L CO2 i atmosfæren	"	,	]	,
183	:	[	"	2288	bananer	"	,	"	9150	kopper kaffe	"	,	"	102297	L CO2 i atmosfæren	"	,	]	,
184	:	[	"	2300	bananer	"	,	"	9200	kopper kaffe	"	,	"	102856	L CO2 i atmosfæren	"	,	]	,
185	:	[	"	2313	bananer	"	,	"	9250	kopper kaffe	"	,	"	103415	L CO2 i atmosfæren	"	,	]	,
186	:	[	"	2325	bananer	"	,	"	9300	kopper kaffe	"	,	"	103974	L CO2 i atmosfæren	"	,	]	,
187	:	[	"	2338	bananer	"	,	"	9350	kopper kaffe	"	,	"	104533	L CO2 i atmosfæren	"	,	]	,
188	:	[	"	2350	bananer	"	,	"	9400	kopper kaffe	"	,	"	105092	L CO2 i atmosfæren	"	,	]	,
189	:	[	"	2363	bananer	"	,	"	9450	kopper kaffe	"	,	"	105651	L CO2 i atmosfæren	"	,	]	,
190	:	[	"	2375	bananer	"	,	"	9500	kopper kaffe	"	,	"	106210	L CO2 i atmosfæren	"	,	]	,
191	:	[	"	2388	bananer	"	,	"	9550	kopper kaffe	"	,	"	106769	L CO2 i atmosfæren	"	,	]	,
192	:	[	"	2400	bananer	"	,	"	9600	kopper kaffe	"	,	"	107328	L CO2 i atmosfæren	"	,	]	,
193	:	[	"	2413	bananer	"	,	"	9650	kopper kaffe	"	,	"	107887	L CO2 i atmosfæren	"	,	]	,
194	:	[	"	2425	bananer	"	,	"	9700	kopper kaffe	"	,	"	108446	L CO2 i atmosfæren	"	,	]	,
195	:	[	"	2438	bananer	"	,	"	9750	kopper kaffe	"	,	"	109005	L CO2 i atmosfæren	"	,	]	,
196	:	[	"	2450	bananer	"	,	"	9800	kopper kaffe	"	,	"	109564	L CO2 i atmosfæren	"	,	]	,
197	:	[	"	2463	bananer	"	,	"	9850	kopper kaffe	"	,	"	110123	L CO2 i atmosfæren	"	,	]	,
198	:	[	"	2475	bananer	"	,	"	9900	kopper kaffe	"	,	"	110682	L CO2 i atmosfæren	"	,	]	,
199	:	[	"	2488	bananer	"	,	"	9950	kopper kaffe	"	,	"	111241	L CO2 i atmosfæren	"	,	]	,
200	:	[	"	2500	bananer	"	,	"	10000	kopper kaffe	"	,	"	111800	L CO2 i atmosfæren	"	,	]	,
        }
    return funDict
}