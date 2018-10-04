//https://www.csvjson.com/csv2json
// SELECT trim(COURSE.PREFIX) AS COURSEPREFIX, substr('0000' || COURSE.CODE, -4, 4) AS COURSECODE, COURSE.NAME AS COURSENAME,
// COURSE.studentswill as OUTCOMES from course where yearid=1819 order by COURSEPREFIX asc, COURSECODE
var darray = [
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ACCT ",
    "Code": 2321,
    "Title": "Intermediate Accounting I",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of the conceptual framework of accounting. A, C, F</li><li>Prepare GAAP-based financial statements. C, D, E</li><li>Account for current assets, plant assets, and intangible assets. D</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ACCT ",
    "Code": 2322,
    "Title": "Intermediate Accounting II",
    "Learning_Outcomes": "<ol><li>Apply generally accepted accounting principles to balance sheet and income statement valuation. A B C D E F</li><li>Prepare and analyze GAAP-based financial statements. A B C D E F</li><li>Define current and long-term liabilities and describe how they are valued. A</li><li>Discuss the characteristics of the corporate form of organization, the rights of stockholders, and the key components of stockholder’s equity. B</li><li>Explain the accounting procedures for issuing and repurchasing various classes of stock. B</li><li>Explain the effect of distributing various forms of dividends. B</li><li>Describe accounting issues involved with revenue recognition. C</li><li>Describe the accounting criteria and procedures for capitalizing leases by the lessee. D</li><li>Identify the issues associated with accounting for income taxes. E</li><li>Explain the use of notes in financial statement preparation. F</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ACCT ",
    "Code": 2331,
    "Title": "Tax Accounting",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of tax laws and regulations as they relate to tax compliance. A, B, C, E, F</li><li>Complete tax forms for a variety of tax situations. D</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ACCT ",
    "Code": 2362,
    "Title": "Forensic Accounting",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of careers in forensic accounting and criminology. G</li><li>Perform basic audit techniques to test balance sheet accounts most susceptible to fraud and use ratio and other fraud analytic procedures. A, B, E</li><li>Apply knowledge to test for fraud in a digital environment. D, E</li><li>Demonstrate knowledge of legal, regulatory, and ethical issues involved in a fraud investigation. C</li><li>Differentiate the roles of auditing, fraud examination and financial forensics. A, B</li><li>Recognize red flags for fraud and identify behavioral red flags exhibited by fraudsters. A, F</li><li>Present team findings and conclusions from fraud case studies in group discussions and formal PowerPoint presentations. F</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ACCT ",
    "Code": 2382,
    "Title": "Accounting Systems Applications",
    "Learning_Outcomes": "<ol><li>Record a variety of transactions and adjustments in automated accounting systems. A, B, C, G</li><li>Analyze and record equity transactions for proprietorships and partnerships. B, G</li><li>Detect and correct errors using accounting software. B, C, F, G</li><li>Record a variety of payroll and payroll related transactions. E, G</li><li>Prepare and interpret a variety of payroll reports and payroll tax forms. E</li><li>Prepare a variety of reports using accounting software. B, G</li><li>Analyze, explain, and interpret a variety of financial reports. B, E, F, G</li><li>Perform maintenance activities in automated accounting systems. A, B, C</li><li>Identify the internal control procedures appropriate to automated accounting systems. F</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ACCT ",
    "Code": 2392,
    "Title": "Accounting Internship",
    "Learning_Outcomes": "<ol><li>Demonstrate working knowledge of basic accounting and business concepts as they apply to the internship work. (A)</li><li>Exhibit the ability to work as part of a team in a professional environment. (A, B)</li><li>Organize work properly for the purpose of attaining efficient and effective skills for entry-level positions. (A, B)</li><li>Demonstrate appropriate written and oral communication skills related to applying for and carrying out the internship position in the accounting field. (A, B, C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ACCT  ",
    "Code": 1020,
    "Title": "Principles of Accounting II ★",
    "Learning_Outcomes": "<ol><li>Prepare and analyze a statement of cash flows. A,</li><li>Analyze and interpret financial and managerial accounting information. A, C, G</li><li>Analyze the liquidity, solvency, and profitability of a company. B</li><li>Differentiate between cost accounting methods in order to prepare and interpret cost reports. B, C, D</li><li>Demonstrate knowledge of managerial accounting, applying concepts and calculations. C, D</li><li>Differentiate cost behavior and prepare a cost volume profit analysis. B, E</li><li>Create a variety of operating and financial budgets within the master budget. D, F</li><li>Create and interpret a variance analysis for manufacturing costs. D, E, G</li><li>Prepare and interpret an incremental analysis. H</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ACCT   ",
    "Code": 2301,
    "Title": "Payroll Accounting",
    "Learning_Outcomes": "<ol><li>Identify major pieces of legislation affecting employment law. A, C</li><li>Identify, prepare, and use personnel and payroll information and records in accordance with laws affecting the payroll operations. A, B, C</li><li>Calculate regular and overtime rates of pay using various acceptable methods and compute net pay. B</li><li>Use computerized payroll systems to generate forms, reports, and other payroll information. B</li><li>Identify legal considerations in the hiring, employing, and firing process. A, C</li><li>Become familiar with Publication 15, Circular E, 15A and 15B and its uses. A, C</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ACCT                   ",
    "Code": 1010,
    "Title": "Principles of Accounting I ★",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of generally accepted accounting principles. A, B, C</li><li>Complete the steps in the accounting cycle and prepare the financial statements. C, D</li><li>Determine the application, interpretation, and financial statement effect of specific accounting methods and procedures. E, F, G, H, I, J, K</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN ",
    "Code": 1302,
    "Title": "Keyboarding/Formatting I",
    "Learning_Outcomes": "<ol><li>Create, review, edit, and correctly format basic business documents. (B, E)</li><li>Develop keyboarding skill using the touch system. (A, D)</li><li>Increase keyboarding speed and accuracy by the end of the course. (A, D, G)</li><li>Keyboard with no more than 5 errors during a three-minute timing. (A, D, G)</li><li>Define terms associated with keyboarding, Windows operating system, and document formats. (A, C, E)</li><li>Follow both written and oral instructions. (A, F)</li><li>Proofread and revise copy using proofreader's marks. (B, E, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN ",
    "Code": 1306,
    "Title": "Medical Terminology I",
    "Learning_Outcomes": "<ol><li>Emphasize mastery of basic medical terminology elements – word roots, combining forms, prefixes and suffixes. (A)</li><li>Increase understanding of human anatomy and basic physiology for body systems (B).</li><li>Expand understanding of disease pathology, symptoms, and treatment as well as diagnostic and surgical procedures. (C)</li><li>Develop ability to use medical terminology correctly in oral and written communication. (B)</li><li>Develop ability to pronounce and spell medical terms. (A,B,C,D)</li><li>Pronounce and spell medical terms. (A,B,C,D)</li><li>Identify criteria for evaluating health information on the Web. (D,E)</li><li>Analyze a Web site for accuracy, appropriateness, and validity of health information using specified criteria. (D,E)</li><li>Describe common diseases associated with each body system. (C)</li><li>Identify common diagnostic procedures used in medicine. (C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN ",
    "Code": 1307,
    "Title": "Survey of Coding",
    "Learning_Outcomes": "<ol><li>Apply diagnosis/procedure codes according to current nomenclature. (A, C, E, F, G)</li><li>Discuss established guidelines in code assignment. (A, B, D, F, G)</li><li>Describe importance of clinical information found in the health record. (A, C, D, F, G)</li><li>Resolve discrepancies between coded data and supporting documentation. (A, C, F, G)</li><li>Identify and describe insurance claim management and bill reconciliation processes related to validating data elements. (A, F, G)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN ",
    "Code": 1321,
    "Title": "Communication Media",
    "Learning_Outcomes": "<ol><li>Demonstrate his/her knowledge of communications media through the use of social networking applications. (A)</li><li>Strengthen vocabulary, grammatical/punctuation skills for professional writing.(B)</li><li>Apply his/her ability to research and identify businesses with a successful corporate presence. (A)</li><li>Demonstrate mastery of course through course capstone social media project.(F)</li><li>Use recording software to create audio clips and videos.(D)</li><li>Actively participate in a web conference.(E)</li><li>Enhance writing skills by publishing articles to their student blog. (E)</li><li>Participate in microblogging with tools such as Twitter. (E)</li><li>Research web design principles as they relate to the overall marketing approach.(C)</li><li>Explore web page editors and create web pages to be incorporated in the capstone project.(E, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN ",
    "Code": 2306,
    "Title": "Legal Terminology &amp; Transcription",
    "Learning_Outcomes": "<ol><li>Spell, pronounce, and define legal terms used in most law environments. (D)</li><li>Transcribe legal documents from prerecorded dictation. (B, D, F)</li><li>Format legal documents for a variety of law specialties. (E, F)</li><li>Identify and use properly the transcription equipment and software. (A)</li><li>Apply knowledge of legal terminology to the transcription and proofreading of legal dictation from originator with various accents, dialects, and dictation styles.(B)</li><li>Memorize and recall correct legal terminology in context when transcribing dictated material. (D)</li><li>Operate machine transcription equipment properly by keying continually while listening in thought units. (A)</li><li>Recognize the dictation techniques of order, voice, identification, visualization, and simple-talk language. (B)</li><li>Organize work properly for the dictation/transcription process by displaying the proper desk arrangement, machine setup, and time schedule.(A)</li><li>Identify and use proofreaders' marks.( F)</li><li>Refer to reference texts, if necessary, to use correct punctuation marks and capitalization rules in both dictation and transcription.(B, C, D, E, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN ",
    "Code": 2311,
    "Title": "ICD-PCS Coding",
    "Learning_Outcomes": "<ol><li>Distinguish among Medicare Part A, B, C, and D. (D)</li><li>Examine guidelines for reporting ICD-CM codes. (B)</li><li>Explain the uses of coding conventions when assigning codes. (A)</li><li>Identify the first-listed diagnosis. (B)</li><li>Validate V or Z code assignment. (B)</li><li>Assign Evaluation and Management, ICD 10-CM, ICD 10-PCS, and CPT codes. (B)</li><li>Audit a patient chart. (D)</li><li>Assign HCPCS and CPT codes and modifiers, if needed. (B)</li><li>Link diagnosis codes with appropriate procedure/services. (C)</li><li>Abstract information from surgical reports, history and physical reports, diagnostic procedure reports, discharge reports, and SOAP notes to determine the diagnosis code(s) and service/procedure codes along with appropriate modifiers, if needed. (B, C, D)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN ",
    "Code": 2313,
    "Title": "Health Insurance Survey",
    "Learning_Outcomes": "<ol><li>Enhance understanding of various insurance programs and plans using correct terminology.(A)</li><li>Expand the student’s understanding of the importance of diagnostic and procedural coding to physician reimbursement. (D)</li><li>Expand understanding/knowledge of federal and state regulations (HIPPA, red flags, etc.) and ethical issues. (E)</li><li>Emphasize mastery of use of electronic claims software (B)</li><li>Develop an awareness of the relationship between insurance billing/coding/insurance reimbursement and practice management to current health and medical topics of interest.<br> (B,C,D)</li><li>Complete insurance claim forms with data provided. (B)</li><li>Apply principles of risk management to reduce medical practice liability. (C)</li><li>Identify problem claims, trace delinquent claims and insurance problems. (B,C)</li><li>Explain the importance of correct information needed to complete each portion of the insurance claim form. (B,C)</li><li>Apply knowledge of different carrier requirements for claims and reimbursement purposes in electronic claims submission. (B,D)</li><li>Discuss relationship of current medical/office practice issues to billing/coding/office management. (E,F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN ",
    "Code": 2319,
    "Title": "Healthcare Delivery Systems",
    "Learning_Outcomes": "<ol><li>Compare efficacy of all modes of delivery. (A,C)</li><li>Identify federal, state, and local entities.(A,B,E)</li><li>Identify all the past and current modes of healthcare delivery. (A,C,E)</li><li>Demonstrate the use of correct terminology related to healthcare delivery systems. (A,B,D)</li><li>Identify the social, legal, and economic factors that affect the delivery of health care. (B,C)</li><li>Discuss the roles and responsibilities of health care professions/providers and their role in quality improvement. (C,E)</li><li>Describe the basic organization of the various types of hospitals, the levels of services provided, and the sources of financing. (A,B,C,E)</li><li>Describe the various types of ambulatory care facilities, levels of services provided, and the sources of financing. (A,B,C,E)</li><li>Describe the various types of long-term care institutions, the levels of services they provide, and the sources of financing. (A,B,C,E)</li><li>Illustrate how different quality control methods are used in assessing healthcare services. (C)</li><li>Identify and describe the regulators of healthcare, including government and non-government entities. (D,E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN ",
    "Code": 2321,
    "Title": "Introduction to Managing Health Information",
    "Learning_Outcomes": "<ol><li>Describe characteristics of health care delivery and settings in the United States. (A, B)</li><li>Delineate career opportunities for health information management professionals. (A, B, C)</li><li>Describe types of patient records, numbering and filing systems, and record storage and circulation methods. (D, E)</li><li>Explain indexes, registers, and health data collection. (D, E, F)</li><li>Explain legal aspects of health information management. (F)</li><li>Identify and differentiate between classification systems and reimbursement systems. (D, E)</li><li>Analyze healthcare statistics. (D, E)</li><li>Identify the importance of and explain the process of quality case management and registries. (B, D, E, F)</li><li>Identify the basic process of financial and operations management in the health care field. (A, B)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN ",
    "Code": 2325,
    "Title": "Medical Terminology II",
    "Learning_Outcomes": "<ol><li>Use prefixes, suffixes, combining forms, and root words to explain understanding of medical terms. (A)</li><li>Identify integral parts and components of human anatomy and physiology (B)</li><li>Apply knowledge of basic and advanced systematic pathology, disease process, and treatments correctly. (B, C)</li><li>Analyze a medical term for the purpose of dissecting its elements and translation. (A, B, C D)</li><li>Pronounce and spell medical terms. (A, B, C, D)</li><li>Identify criteria for evaluating health information on the Web. (D, E)</li><li>Analyze a Web site for accuracy, appropriateness, and validity of health information using specified criteria. (D, E)</li><li>Apply knowledge of medical terms for communication with other healthcare providers and patients. (A, C, D, E)</li><li>Analyze basic and advanced disease-related information for communication processes. (D, E)</li><li>Analyze medical records for medical terminology accuracy (A, B, C, D, E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN ",
    "Code": 2395,
    "Title": "Administrative Professional Technology Internship",
    "Learning_Outcomes": "<ol><li>Utilize all components of computer software to create professional business documents. (A)</li><li>Demonstrate proper procedures to create documents suitable for course work, professional purposes, and personal use. (A)</li><li>Show effective written and oral communication skills with team/co-workers and supervisors to ensure timely and accurate completion of work and to establish and maintain professional relationships. (A, B, C)</li><li>Demonstrate a strong work ethic and positive attitude and professionalism by regularly attending and being punctual for the internship placement. (A, B, C)</li><li>Demonstrate working knowledge of basic medical terminology and medical office concepts. (C)</li><li>Explore the web as a resource tool to gather data to produce office documents and presentations. (A)</li><li>Integrate all components of computer software using proper office format and confidentiality practices. (A, C)</li><li>Apply knowledge from previous course work to a wide range of real-world business processes. (B, C)</li><li>Demonstrate skills in the areas of leadership, teamwork, decision-making and management of resources. (A, B, C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN  ",
    "Code": 1308,
    "Title": "Office Procedures",
    "Learning_Outcomes": "<ol><li>Critique case situations conducive to real world situations that require problem solving skills and knowledge gained from human relations skills and communication methods. (A, D, F)</li><li>Research and present data related to the role of administrative tasks and office procedures. (A, B)</li><li>Demonstrate the ability to perform office based projects through the use of computer applications. (A, B, C)</li><li>Define the role and prioritize the functions of management in the workplace. (A, B, C)</li><li>Identify workplace issues that affect job performance. (A, D, E)</li><li>Define ethics and ethical behavior. (D, E)</li><li>Use critical thinking skills to make decisions. (F)</li><li>Be an effective team player by being reliable, flexible, an active participant, and supportive. (D, E)</li><li>Communicate effectively in both written and verbal communications. (A, D, E)</li><li>Manage incoming and outgoing communications in the workplace. (A, B, C, G)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN  ",
    "Code": 1310,
    "Title": "Business Communications",
    "Learning_Outcomes": "<ol><li>Explain communication processes in business. (A, B, C, D E, F)</li><li>Explain the importance of team communication in the workplace. (E)</li><li>Define possible barriers to intercultural communication. (A, D, E)</li><li>Apply the concepts for writing and proofing letters, memos, emails, business reports, proposals, and oral presentations in the workplace. (A, B, C, D, E, F)</li><li>Prepare a professional cover letter and resume`. (A. B, D, F)</li><li>Demonstrate proper use of grammar through writing assessments. (A, B, C, D, E, F)</li><li>Effectively use technology to enhance presentations. (D, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN  ",
    "Code": 1311,
    "Title": "Word Processing I",
    "Learning_Outcomes": "<ol><li>Demonstrate basic file management (create folders, copying, moving, renaming, deleting files and/or folders). (A)</li><li>Create, edit, and print business documents using Word features. (B)</li><li>Use character, paragraph, and page formatting commands efficiently. (B)</li><li>Set and manipulate tabs to create tabular columns of text. (B)</li><li>Use basic and advanced features to create and edit tables. (B)</li><li>Identify acceptable professional document layouts and design. (C)</li><li>Work with page and column formatting to produce newsletters containing graphics and textboxes using both Word and Publisher. (C)</li><li>Work with templates, themes, and styles to modify formatting applied to a report including modifying the theme, creating a new style, and adding a table of contents. (C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN  ",
    "Code": 1313,
    "Title": "Spreadsheet Applications",
    "Learning_Outcomes": "<ol><li>Create, edit, format, and print spreadsheets. (B)</li><li>Enter formulas and functions in a spreadsheet. (B)</li><li>Manage multiple worksheets and workbooks.(B)</li><li>Analyze and chart financial data. (C)</li><li>Identify terminology associated with spreadsheets.&nbsp; (A)</li><li>Identify the anatomy of a worksheet and the types of worksheet entries. (A)</li><li>Use absolute, relative, and mixed references correctly in a spreadsheet. (B)</li><li>Use advanced functions appropriately in a spreadsheet. (D)</li><li>Create, edit, and summarize data using spreadsheet tables and pivot tables. (D)</li><li>Use Goal Seek and variable tables to perform what-if-analysis. (D)</li><li>Validate data entries and use defined names to customize spreadsheets. (D)</li><li>Create and use macros in a spreadsheet. (D)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN  ",
    "Code": 2303,
    "Title": "CPT Coding",
    "Learning_Outcomes": "<ol><li>Use the CPT and HCPCS manuals to assign billing codes. (A, C)</li><li>Demonstrate the ability to assign modifiers as appropriate to the related CPT code. (A, B, C)</li><li>Explain evaluation and management code assignment. (A, B)</li><li>Explain consultation codes. (B, C)</li><li>Assign CPT codes associated with anesthesia services. (B, C)</li><li>Explain the relationship between correct code assignment and financial management. (A, B)</li><li>Describe the format of CPT codes, sections, guidelines and punctuation. (B)</li><li>Assign CPT and HCPCS modifiers. (A, B, C)Insert text here…</li><li>Explain coding audit processes. (A, B, C)</li><li>Identify incorrect coding processes. (A, B, C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ADMN  ",
    "Code": 2304,
    "Title": "Introduction to Electronic Health Records",
    "Learning_Outcomes": "<ol><li>Identify the features and components of a database. (A)</li><li>Create and modify a relational database structure and its objects. (B, E)</li><li>Identify the goal of HIPAA. (C)</li><li>Identify HIPAA privacy and security standards. (C)</li><li>Identify HIPAA enforcement agencies, fraud and abuse regulations, and strategies for compliance. (C)</li><li>Summarize the history of the electronic health record (EHR). (A,D)</li><li>Summarize the standards history for the electronic health record. (A, E)</li><li>Examine the components of the EHR.(D,E)</li><li>Demonstrate the use of basic EHR software application features. (B, D, E)</li><li>Identify the components of managing an electronic health records system. (A, D)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN ",
    "Code": 1305,
    "Title": "Introduction to Business",
    "Learning_Outcomes": "<ol><li>Understand the various forms of business ownership, pros and cons of each as related to a given business, and the processes for formation. A</li><li>Understand the various functional areas of business operations and the interrelationship of these functional areas within the organization. B, C, D, E</li><li>Demonstrate student preparedness for further study in a variety of available fields of study within the business environment as well as provide additional information to assist students in determining a specific field of interest. A, B, C, D, E</li><li>Discuss what markets are and how they are classified. C</li><li>Describe the four basic management functions. B</li><li>Discuss management's information requirements. D</li><li>Summarize how managers evaluate the financial health of a business. F, G</li><li>Research, analyze, write and present a company analysis using basic report template. F, G</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN ",
    "Code": 1380,
    "Title": "Supervisory Management",
    "Learning_Outcomes": "<ol><li>Explain the principles and skills associated with effective planning, organizing, leading, and controlling. (A, F)</li><li>Describe techniques for coping with workplace dynamics, including appraisals, safety, conflict, and change in labor relations. (A, F)</li><li>Explain the Team Leader or Supervisor's role. (A, F)</li><li>Explain the stages of group and team development. (B, C, D,E)</li><li>Summarize the skills needed to be a successful team leader or supervisor. (A, C, E)</li><li>Apply effective delegation techniques. (E)</li><li>Know when and how to develop contingency plans. (B)</li><li>Formulate and organize basic plans for getting the work done. (B)</li><li>Discuss in detail time management techniques. (B)</li><li>Understand the steps involved in managing a crisis. (A,B)</li><li>Describe the climate and skills needed to develop employees by coaching them. (E)</li><li>Apply effective performance appraisal techniques. (E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN ",
    "Code": 2160,
    "Title": "Quality Improvement",
    "Learning_Outcomes": "<ol><li>Explain how statistical process control fits in to the quality management system. A, B,C, D</li><li>Interpret the relationship between quality/productivity and world market competitiveness. B, H</li><li>Evaluate the cost of quality. A, B, C, D</li><li>Describe and analyze W. Edwards Deming’s 14 points of management and his quality management philosophy. A, C</li><li>Summarize the history of quality control. A, B, C</li><li>Summarize the history of team management. A, B, C, F</li><li>Evaluate team management. A, B, C, F</li><li>Describe current events in the quality management field. A, B, C, G, H</li><li>Compute and/or construct, analyze, and apply the following evaluative methods: C, D<ol><li>Flowcharts</li><li>Operational Definitions</li><li>Cause and Effect Diagrams</li><li>Check Sheets</li><li>Pareto Diagrams</li><li>Histograms</li><li>Run Charts</li><li>Process mean, range, and standard deviation</li><li>X-BAR and R and X-BAR and S variables control chart</li></ol></li><li>Describe the Plan, Do, Study, Act continuous improvement cycle. A, C, D</li><li>Evaluate rational subgrouping schemes. C, D</li><li>Identify and evaluate process state of control. C, D</li><li>Evaluate process capability. C, D</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN ",
    "Code": 2330,
    "Title": "Principles of Management ★",
    "Learning_Outcomes": "<ol><li>Describe each of the managerial functions as they relate to strategic decision-making.&nbsp; (A, B, C)</li><li>Describe the role and importance of communication in management.&nbsp; (A, B, D)</li><li>Identify and explain the basic management activities. (A, B, C, D, G)</li><li>Describe and provide examples of the different kinds of managers by both level and area of the organization. (F,&nbsp;G)</li><li>Describe the basic skills required for effective management. (F, G)</li><li>Discuss the role education and experience play in acquiring management skills. (F, G)</li><li>Describe the management and career challenges that exist in the workplace.&nbsp; (E, G)</li><li>Identify and explain the impact of the components of the general, task, and internal environments of organizations, with particular emphasis on organizational culture and internal and external customers. (F, G)</li><li>Relate personal ethics, managerial ethics, and managing ethical behavior of employees. (F, G)</li><li>Summarize the arguments for and against social responsibility of business. (F, G)</li><li>Identify the advantages and disadvantages of various organizational structures. (B, G)</li><li>Describe the six steps in the rational decision-making process. (A, G)</li><li>Identify and explain the major perspectives on motivation. (C, G)</li><li>Contrast leadership and management. (C, G)</li><li>Discuss the advantages and disadvantages of using teams in organizations. (C, F, G)&nbsp;</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN ",
    "Code": 2340,
    "Title": "Human Resource Management",
    "Learning_Outcomes": "<ol><li>Access key legislation affecting employee and labor relations. A</li><li>Discuss key factors in workforce planning such as recruitment, selection, and development of employees. B, C</li><li>Explain what human resource management is and the role it plays in the management process and productivity. A, B</li><li>Discuss federal laws related to employment, including examples and steps to correct issues. C</li><li>Investigate disciplinary problems, and demonstrate approaches to disciplinary action. D</li><li>Recognize the connection between effective management and bottom-line results. E</li><li>Perform job analysis, and prepare job descriptions and job specifications. C</li><li>Summarize the steps in recruitment and placement, including using testing. C</li><li>Explain factors that affect the usefulness of interviews and guidelines for being a more effective interviewer. C</li><li>Explain the problems to be avoided in appraising performance, including using the correct tool. D</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN ",
    "Code": 2395,
    "Title": "Business Applications",
    "Learning_Outcomes": "<ol><li>Understand the demands and needs of a career in business. (A,B,C)</li><li>Apply knowledge gained in previous courses to a wide range of business problems. (A,B,C)</li><li>Demonstrate skills in the areas of leadership, knowledge, teamwork, decision-making, communication, and effective management of resources. (A,B,C)</li><li>Explain entrepreneurship, the risks entrepreneurs face, and the advantages and disadvantages of entrepreneurship. (A)</li><li>Demonstrate an ability to function effectively in a self-managed team. (E)</li><li>Analyze the financial impact of various business activities and alternatives. (B,C,E)</li><li>Develop an understanding of the interrelationships amongst the varied business disciplines within this simulated course framework.(C, D)</li><li>Demonstrate an understanding of the budgetary controls for product and labor costs for their respective business models. (C, D, E)</li><li>Demonstrate problem solving skills arising from the competitive environment in the classroom. (C, D, E)</li><li>Present final results using a formal presentation to communicate an understanding of the team’s successes and failures. (B, C, D)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN ",
    "Code": 2420,
    "Title": "Customer Service",
    "Learning_Outcomes": "<ol><li>Explain customer service concepts and the relationship between customer service and current management and marketing theory and practice. (A)</li><li>Explain the reasons that customer service is a critical element in contemporary business  (A, E)</li><li>Discuss the impact of customer service in contemporary marketing environments. (A, E)</li><li>Analyze how marketing and customer service strategies, organizational systems, and the personnel of an organization affect customer service. (A, C)</li><li>Identify and describe an organization's internal and external customers. (A)</li><li>Explain customer needs and expectations. (A)</li><li>Discuss the costs and benefits of exceptional customer service. (A, B)</li><li>Describe and use best practices in customer service situations. (B, C)</li><li>Evaluate an organization's effectiveness in meeting customer service standards. (A, B, C, D, F)</li><li>Listen more effectively. (B, C)</li><li>Communicate effectively with customers—nonverbally and verbally. (B, C)</li><li>Communicate effectively with customers by telephone and by email. (B, C)</li><li>Communicate effectively with multicultural and other diverse customers. (B, C, E)</li><li>Apply appropriate techniques for handling customer interaction, requests, problems, and complaints. (B, C, D)</li><li>Investigate customer service issues and problems and develop solutions. (D, F)</li><li>Use customer service problem solving and conflict resolution strategies. (B, C, D, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN ",
    "Code": 2471,
    "Title": "Management Internship",
    "Learning_Outcomes": "<ol><li>Demonstrate a working knowledge of basic management and basic business concepts.(A)</li><li>Exhibit the ability to work effectively as part of a team in the professional environment.(A,B)</li><li>Show effective written and oral communication skills with team/co-workers and supervisors to ensure timely and accurate completion of work and to establish good human relationships. (A,B,C)</li><li>Prepare an application and resume for the search for an internship position in the management field. Participate in an interview with the Internship Coordinator in preparation for interviewing with potential employers.&nbsp; Actively participate in the search for an internship. (A,C)</li><li>Demonstrate a strong work ethic and positive attitude and professionalism by regularly attending and being punctual for the internship. (A,B,C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN  ",
    "Code": 2180,
    "Title": "Team Practicum",
    "Learning_Outcomes": "<ol><li>Communicate effectively, either orally or in writing, publicly or privately. A,E,F</li><li>Apply various management theories in self-managed teams. A,E,F</li><li>Effectively lead a problem discussion, such as might occur in a team or committee meeting. A,D</li><li>Work with others in organizing to solve problems. A,E,F</li><li>Assemble necessary information for use in identifying problems. B</li><li>Break down a problem into its component parts in order to organize resources to reach a solution. B</li><li>Analyze information in order to establish objectives in problem solving. B,C</li><li>Easily and routinely use the business press to obtain background and specific information for decision making.&nbsp;</li><li>Review a set of problems or objectives and establish priorities for action. B,C</li><li>Make coherent, responsible assignments to members of the team. D,E,F</li><li>Work with others to identify and develop specific activities that will lead to objective achievement. A,F</li><li>Manage the team's activities so that the objective is attained. F</li><li>Effectively appraise the performance of team members and peers. A,F</li><li>Conduct her/himself in a professional manner when interacting in business relationships. A,C</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN  ",
    "Code": 2320,
    "Title": "Business Finance",
    "Learning_Outcomes": "<ol><li>Analyze and interpret financial statements and other financial information to make effective and informed business decisions. (A,B,E,F)</li><li>Explain the characteristics of financial markets and instruments. (C)</li><li>Describe the concepts of risk and return relationship, time value of money, valuation of assets, capital budgeting, and working capital management. (A,B,C,D,E,F)</li><li>Discuss maximization of stockholder wealth. (A,D)</li><li>Discuss how interest rates are determined. (F,H)</li><li>Describe the relationship between risk, return, market price, and market efficiency. (C)</li><li>Identify the sources of long-term funds. (C,G,H)</li><li>Describe the characteristics of long-term debt. (C,G,H)</li><li>Identify the characteristics of common stock. (C,G,H)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN  ",
    "Code": 2370,
    "Title": "Legal Environment of Business",
    "Learning_Outcomes": "<ol><li>Demonstrate a basic knowledge of the American legal system. (A)</li><li>Explain various legal issues and how those issues affect the business environment. (B)</li><li>Develop an understanding of principles of law that govern business transactions. (B, D,E)</li><li>Recognize ethical and legal challenges in the workplace. (A,B)</li><li>Analyze contracts to establish presence of requisite elements. (B,C)</li><li>Demonstrate knowledge of creation and termination of the employer-employee relationship. (B, D)</li><li>Demonstrate understanding of the different types of business structures and the legal differences between them. (B,D,E)</li><li>Discuss legal protections for borrowers and lenders, including types of credit, fair debt reporting and collection, legal interest rates, and debt relief. (B)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN  ",
    "Code": 2380,
    "Title": "Principles of Marketing",
    "Learning_Outcomes": "<ol><li>Explain the concept of marketing and how marketing strategies are planned, implemented and controlled. (A, B)</li><li>Explain the process of market segmentation and target marketing. (A, D, F)</li><li>Identify the elements of the marketing mix and how they are used to satisfy marketing opportunities. (A, E)</li><li>Apply marketing concepts to the global business environment. (C)</li><li>Explain the difference between consumer and business marketing. (E)</li><li>Describe consumer and organizational buyer decision making processes and outline the major influences on buying behavior. (E)</li><li>Explain and use the product life cycle concept. (A, B, D)</li><li>Identify and evaluate marketing channels. (D)</li><li>Discuss the role of the internet and social media in marketing (D, F)</li><li>Explain supply chain management. (G)</li><li>Explain the role of retailing and analyze retail marketing strategy. (G)</li><li>Explain the components of a promotion mix for a product. (E)</li><li>Discuss pricing strategies. (E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN  ",
    "Code": 2385,
    "Title": "Project Design &amp; Management",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of project management terms and techniques. (A, B, E)</li><li>Describe the various approaches for selecting projects, programs, and portfolios. (B, C, D)</li><li>Explain the main tasks for initiating, planning, executing, monitoring, controlling, and closing projects. (A, B, C, D, E)</li><li>Explain thoroughly the main phases of the project life cycle. (Ch.1) A,C,D</li><li>List and describe the steps required to develop a baseline plan. (Ch.1) A,C,D</li><li>Discuss the essential skills needed to be an effective project manager. (Ch.10) A,B,C,D</li><li>Define and discuss the stages of team development. (Ch.11) A,B,C</li><li>Discuss the types of conflict that might arise during a project and the methods for handling them. (Ch.11) A,B,C</li><li>Discuss the basic elements of time management. (Ch.11) A,B,C,D</li><li>Discuss the importance of both oral and written communication as they relate to project success. (Ch.12) A,B,C,D</li><li>Explain the purpose and importance of the following: status review meetings, problem solving meetings, technical design review meetings. (Ch.12) A,B,C,D</li><li>Compare and contrast the following: functional-type organization, project-type organization, matrix-type organization. (Ch.13) A,B,C</li><li>Define <em>project proposal </em>and describe the purpose of a proposal. (Ch.3) A,C,D</li><li>List the steps involved in detailed project planning. (Ch.4) A,C,D</li><li>Discuss the importance of project control and describe the project control process. (Ch.4) A,C,D</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "BUSN   ",
    "Code": 2350,
    "Title": "Organization Behavior",
    "Learning_Outcomes": "<ol><li>Explain the importance of interpersonal skills to manage effectively when dealing with change and/or conflict within the workplace. (A)</li><li>Describe the impact in the workplace of globalization, cultural differences, workforce diversity, and ethics and discuss the role of leadership in achieving effective organizational performance. (D)</li><li>Differentiate between group and individual behaviors and analyze various group dynamics and how they may have an impact on the organization. (B)</li><li>Interpret and summarize major concepts of conflict management. ( A,B)</li><li>Identify a variety of different conflicts structures. (B,D,E)</li><li>Evaluate and practice different approaches for conflict intervention and resolution. (B-E)</li><li>Describe the root causes of conflict and the types. (A)</li><li>Identify techniques to build sustaining relationships and trust in organizations. (E)</li><li>Apply effective communication skills in negotiation and mediation situations. (D)</li><li>Study conflict situations and identify appropriate methods to mitigate conflict. (B,C,E,)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CISP ",
    "Code": 1010,
    "Title": "Computer Science I ★",
    "Learning_Outcomes": "<ol><li>Use basic Unix/Linux commands and an editor. (A)</li><li>Write, compile, link and execute C++ programs. (B, C, E, G)</li><li>Use C++ syntax and programming constructs including program header files, data types, variables, simple I/O, functions and parameters, conditional statements, for and while loops, structures, classes, file I/O, and pointers to write well-structured programs. (B, C, F, H)</li><li>Use some fundamental algorithms such as searching and sorting. (C, D, F)</li><li>Write algorithms to solve problems. (C, D, H)</li><li>Debug C++ programs. (B, C, E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CISP ",
    "Code": 1020,
    "Title": "Computer Science II ★",
    "Learning_Outcomes": "<ol><li>Apply the syntax and semantics of C++ programming languages. A</li><li>Utilize advanced C++ programming statements in large programs. A, B, E</li><li>Construct user-defined data types, arrays, structures and unions. A, B, E</li><li>Implement and address abstract data structures via pointers. B, C</li><li>Construct links, stacks, queues, linked-list and binary tree searching, insertion and deletion. C</li><li>Implement and utilize recursive functions. C, D, G</li><li>Demonstrate various sorting and searching techniques. D</li><li>Demonstrate hashing techniques .C</li><li>Demonstrate the use of heaps. C</li><li>Demonstrate methods to balance binary search trees. A, C, E</li><li>Write a large program using various data structures. E, F</li><li>Write and use make files to manage projects. F</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CISP ",
    "Code": 1550,
    "Title": "C++ Programming",
    "Learning_Outcomes": "<ol><li>Use a C++ compiler and its editing featur (A,B,C,D,E)</li><li>Formulate program code from specifications, real-world data representation, business and engineering problems and real-world problem examp (A,B,C)</li><li>Use the computer system and its operating environments. (A,B,C, D,E)</li><li>Use the C++ language to interact with client users to produce data output and accurate results. (A,B,D,E)</li><li>Apply computer problem solving in the business and engineering environments. (A,B,C,D,E)</li><li>Use the C++ programming language in problem solving, data manipulation, data storage and retrieval, menu handling and error detection. (A,B,C,D,E)</li><li>Take real world problems and generate C++ programming code to solve for those applications. (A,B,C,D,E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CISP ",
    "Code": 2410,
    "Title": "Assembly &amp; Computer Organization ★",
    "Learning_Outcomes": "<ol><li>Calculate unsigned, signed and integer and floating-point binary number values. (A)</li><li>Design, implement, and test the hardware for a system using a digital circuit simulator. (A, B)</li><li>Design, implement, and test assembly language programs. (A, B)</li><li>Describe and use basic ISA-level concepts such as registers and stacks, memory addressing modes and ISA-level instruction types and formats. (A, B)</li><li>Detect/correct errors using error detection/correction codes. (A, C)</li><li>Explain the fetch-decode-execute cycle. (C)</li><li>Describe pipelining, parallel processing and calculate speedup. (C)</li><li>Calculate cache miss and hit rates, map main memory addresses to cache blocks. (C)</li><li>Describe the difference between physical and virtual memory addresses and calculate physical addresses. (A, B, C, D)</li><li>Describe direct memory access, the difference between polling and the difference between character and block I/O. (C, D)</li><li>Describe disk sectors, error correction codes and calculate disk latency. (C)</li><li>Explain cache replacement and write policies. (C)</li><li>Describe basic issues of process management. (D)</li><li>Describe the compilation, assembly and linking processes. (C)</li><li>Explain the difference between RISC and CISC. (C)</li><li>Describe different parallel processing techniques. (D)</li><li>Use professionally accepted methods and materials in their approach to completion of applications. (A, B, C)</li><li>Practice elements of the work ethic such as punctuality, professionalism dependability, cooperation, and contribution. (A, B, C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 1301,
    "Title": "Introduction to Programming &amp; Logic ★",
    "Learning_Outcomes": "<ol><li>Work within the framework of the Program Development Cycle, analyze and design computer software solutions to typical business problems using standard structure techniques. A, B, C, D, E</li><li>Document and illustrate solutions using appropriate planning tools. B, C</li><li>Read a process flow model or pseudocode solution and give an accurate description of the problem being solved, correctly outline the variables being used, and the steps being followed. A, C, D, E</li><li>Use variables, control structures, methods and arrays to build programs. D, E</li><li>Gain a broad understanding of computer science and information technology. A, B, C, F</li><li>Create computer software in Scratch/Alice, Javascript, Python and Arduino/Lego. B, C, D, E</li><li>Maintain a weekly blog to document work/thoughts and to gain insight into the learning process itself. A, H</li><li>Find areas of computer science that are personally rewarding/interesting and especially, areas that are worth expending time/effort to learn and work with. A, H</li><li>Create a web page from scratch using only a text editor to understand the text-based nature of the web and to prepare to write programs that generate HTML. A, B, D</li><li>Gain an understanding of current state-of-the-art technology and be able to discuss the possibilities of these technologies. A, G, H</li><li>Work in the UNIX environment and understand basic commands, paths and rudimentary scripting. A, F</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 1316,
    "Title": "Game Scripting",
    "Learning_Outcomes": "<ol><li>Demonstrate understanding of scripting syntax and common applications. (A, B, C, F)</li><li>Demonstrate understanding of how to link the scripting API into another language such as C++. (A, B, E, F)</li><li>Demonstrate understanding of scripting tools and how they are used in an application. (B, C, D, E, F)</li><li>Demonstrate knowledge of proper script writing etiquette and commenting. (A, B, C, D, E, F)</li><li>Demonstrate knowledge of debugging and running script programs. (A, E, F)</li><li>Create computer programs that utilize correct methodologies. (B, C, D, E, G)</li><li>Create computer controlled (scripted) objects in a 3D virtual environment. (B, C, D, E, G)</li><li>Design, build and demonstrate functional products. (A, B, C, D, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 1317,
    "Title": "Introduction to Scripting Languages",
    "Learning_Outcomes": "<ol><li>Write shell scripts in variations of the Bourne shell and/or C shell. (A, B, C)</li><li>Customize a Unix/Linux environment for a specific application. (A, B, C)</li><li>Produce formatted output using OS tools and scripts. (A, B, E, F)</li><li>Apply the `tool box' concept to specific problems. (A ,B, C, E)</li><li>Integrate OS tools and high-level programming code. (A, B, C, D, E, F)</li><li>Use Unix/Linux commands to solve problems. (A, B, C)</li><li>Use OS utilities for text formatting. (A, B, C)</li><li>Use one or more high-level programming languages. (A, D, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 1320,
    "Title": "A+ Hardware &amp; Software",
    "Learning_Outcomes": "<ol><li>Identify, install, configure, and troubleshoot hardware components to support computing needs. (A,B,C)</li><li>Identify, install, configure, and troubleshoot software components to support computing needs. (A,B,C)</li><li>Identify, install, configure, and troubleshoot necessary components for local area networks. (A,B,C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 1330,
    "Title": "Microsoft Desktop OS",
    "Learning_Outcomes": "<ol><li>Install the Microsoft desktop operating system software. (A,B,C,D,E,F)</li><li>Set up Local Users and Groups. (B,C,D)</li><li>Configure System for Network Access. (B,C,D,E)</li><li>Troubleshoot any issue related to the installation, security, and network access. (B,C,D,E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 1333,
    "Title": "Linux LPIC-1",
    "Learning_Outcomes": "<ol><li>Determine and configure system architecture, devices, and Linux file systems. (A, C, D)</li><li>Perform a custom Linux installation and package management using package tools. (B)</li><li>Interact with GNU and UNIX commands, shells, scripting and data management. (A, C, D)</li><li>Install and configure user interfaces and desktops. (A, B, C, D)</li><li>Perform and configure administrative tasks, essential system services, networking fundamentals and security. (A, B, C, D)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 1351,
    "Title": "Principles of Information Assurance",
    "Learning_Outcomes": "<ol><li>Identify the threats and common attacks posed to information security and differentiate between threats and attacks to the information within systems. (A, B, C, D)</li><li>Define the application of information assurance to the business environment. (A, C, D)</li><li>Demonstrate an understanding of security policies. (A, D)</li><li>Maintain information assurance programs. (A, C, D)</li><li>Explain the difference between vulnerabilities, threats, risks and exploits and the relationship of each to the others. (A)</li><li>Set up basic security mechanisms in order to protect data and information. (B, D)</li><li>Describe concepts related to physical security and personnel security. (A, C, E)</li><li>Explain the Security Systems Development Life Cycle. (C)</li><li>Demonstrate an understanding of the importance of human factors, such as ethics, in the process of information assurance. (A, C)</li><li>Implement the NIST functions of identifying assets and threats, creating a plan to protect those assets, detecting threats and vulnerabilities, responding to attacks or natural disasters, and recovering from attacks or natural disasters for a variety of scenarios. (E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2303,
    "Title": "Machine Organization",
    "Learning_Outcomes": "<ol><li>Identify and use the major addressing modes of a PC. (A,B)</li><li>Implement a stack using PC assembler and make use of the user stack. (A,B)</li><li>Write assembly language programs that call functions and procedures and pass arguments. (A,B)</li><li>Explain the operation of assemblers, interpreters and compilers. (B,C)</li><li>Use PC compilers, assembler, linker and symbolic debuggers to develop programs. (A)</li><li>Use bit-wise instructions to implement the laws of logic and Boolean algebra. (A,B,D)</li><li>Write system programs making use of control structures and modularity. (A,B,D)</li><li>Create modular programs. (B)</li><li>Use the different internal formats of integers, real numbers and character data and convert between the forms whenever possible. (C,D)</li><li>Use Debug in debugging programs. (A,B,C,D)</li><li>Pass arguments by value or reference. (A,B)</li><li>Use the linker and answer questions concerning the linking process. (B)</li><li>Create and/or use a library with a programming language. (A,B)</li><li>Create, edit, delete, rename, copy and display the contents of files. (A,E,F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2310,
    "Title": "Advanced .Net Programming",
    "Learning_Outcomes": "<ol><li>Design and build non-trivial, real-world, applications and dynamic Web sites that can send data to and retrieve data from databases located on remote servers based on client input or case study research. (A, C, F, G)</li><li>Develop data validation processes and integrate them with forms. (B, D)</li><li>Create effective reports. (D, F)</li><li>Demonstrate effective use of ASP, ADO and SQL Server to build Web-based applications. (A, B, C, E)</li><li>Effectively review and analyze the work of their peers as a means of providing constructive feedback and improving their own work. (G)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2311,
    "Title": ".NET Windows-Based Client Development",
    "Learning_Outcomes": "<ol><li>Demonstrate how well-designed Windows forms may be used to further enhance the user’s experience. (A,C)</li><li>Create and process forms using data controls and advanced form controls. (A,B,C)</li><li>Connect to a variety of data sources and query the data. (C,D)</li><li>Use terminology associated with the computer system and computer language compilers. (A,B)</li><li>Understand computer program design and the C# language development environment. (A,B,C)</li><li>Demonstrate knowledge of Object-Oriented design and implementation principles. (A,B)</li><li>Use C# tools to create a well-documented application based on client input or industry research. (A,B,C)</li><li>Use professionally accepted methods and materials in completion of applications. (A,B,C,D)</li><li>Practice elements of the work ethic such as punctuality, professionalism, dependability, cooperation, and contribution. (A,D,E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2314,
    "Title": "Java Programming III",
    "Learning_Outcomes": "<ol><li>Write Java programs that meet internationalization requirements.&nbsp; (C, E)</li><li>Use Java Beans and Bean events. (A, B, C, E)</li><li>Explain Swing models and identify advanced GUI components such as internal frames, toolbars, menus and layout managers. (A, C)</li><li>Explain database connectivity methods and write Java programs to interface with major databases. (B, C, E)</li><li>Write modular programs and Java applications using Java Servlets and Java Server Pages (JSP). (A, B, C, D, E)</li><li>Generate project documents such as requirement specifications document, design document and test document. (C, D, E)</li><li>Use IDE to configure web servers, databases and other server-side computing resources. (B, E)</li><li>Write Java programs using JTable and JTree Swing components to display data in grid and hierarchical formats. (A, C)</li><li>Explain enterprise Java platform architecture and its components. (A, B)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2320,
    "Title": "Windows Server Administration",
    "Learning_Outcomes": "<ol><li>Install, configure, and troubleshoot networking components on a Windows server in a network environment. (A,B,C,D)</li><li>Install, configure, and troubleshoot various Windows Server services such as DNS, DHCP, Remote Access, WINS, and NAT. (A,B,C)</li><li>Explain features and versions of the different Windows Server system. (A)</li><li>Plan, prepare, perform, and troubleshoot the installation for Windows Server. (A,B,C)</li><li>Install, configure, and troubleshoot the DNS Service. (D,E)</li><li>Install, configure, and troubleshoot the Active Directory Service. (F,G,H,I)</li><li>Apply and configure Group Policy for managing desktop and server environments. (F,G,H,I)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2326,
    "Title": "Network Security",
    "Learning_Outcomes": "<ol><li>Understand and explain security principles, issues, and procedures. (A,B,C,D,E,F,G,H)</li><li>Explain and analyze threats and vulnerabilities and design and implement appropriate security controls. (A,B,C,D,E,F,G,H)</li><li>Define, install, and configure appropriate authentication, authorization, or access controls. (A,B,C,D,E,F,G,H)</li><li>Utilize and configure appropriate cryptography concepts and methods. (A,B,C)</li><li>Apply security controls to maintain confidentiality, integrity, availability and identify appropriate technologies and products. (A,B,C,D,E,F,G,H)</li><li>Troubleshoot security events and incidents. (A,B,C,D,E,F,G,H)</li><li>Define and discuss applicable policies, laws, and regulations. (A,B,C,E,F,G,H)</li><li>Identify risk, threats, threat agents, and participate in risk mitigation activities. (A,C,H,)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2330,
    "Title": "Routing &amp; Switching II",
    "Learning_Outcomes": "<ol><li>Perform basic binary and related networking math and subnetting. (C)</li><li>Identify types of networks, network devices, and network protocols and their functions. (A, B, C, D, E)</li><li>Explain both the OSI and TCP/IP reference models of networking. . (B, C, D)</li><li>Use TCP/IP troubleshooting commands and diagnostic tools to identify network configuration problems. (C, D)</li><li>Configure RIP and CDP protocols and explain routing theory. (A, B, E)</li><li>Identify and configure ports and interfaces on Cisco routers and switches. (A, B, C, E)</li><li>Explain functions of router and switch components, configuration files, and working modes. (A, B, E)</li><li>Use and explain Cisco IOS and IFS commands. (A, E)</li><li>Explain layer 2 switching concepts and protocols to configure and manage switches. (B, D, E)</li><li>Perform password reset steps for Cisco routers and switches. (A, B, D, E)</li><li>Read and work from diagrams and service manuals. (A,B,C,D,E)</li><li>Safely and appropriately operate tools, equipment and technology. (A,B,C,D,E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2331,
    "Title": "Unix/Linux System Administration",
    "Learning_Outcomes": "<ol><li>Use the command line and X Windows environment to perform basic system administration. (A, B, C, D, E)</li><li>Create and manage user and system processes. (B, E)</li><li>Complete various types of installations and client configurations. (A, C, E)</li><li>Demonstrate the use of boot loaders, run levels, package managers, file system utilities, and backup utilities. (B, C, D, E)</li><li>Understand and demonstrate security, performance and troubleshooting techniques. (A, D, E)</li><li>Practice elements of the work ethic such as punctuality, professionalism, dependability, cooperation, and contribution. (F)</li><li>Use industry accepted practices to administer systems in a stand-alone or clustered environment. (E, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2340,
    "Title": "Advanced Database Concepts &amp; Programming",
    "Learning_Outcomes": "<ol><li>Demonstrate effective use of documentation, tutorials, and on-line resources. (A, B)</li><li>Demonstrate effective application of all major SQL statements. (B, C, D)</li><li>Apply object security concepts to specify and implement role and user privileges. (E, F)</li><li>Create, debug and integrate stored procedures, functions, and triggers in a database system. (B,D)</li><li>Use a graphical user interface to create and manage a relational database. (B, C, D)</li><li>Use terminology associated with computers, software and database applications in proper context. (A)</li><li>Use SQL* Plus commands, processes and SQL Developer to create Oracle database objects and produce reports. (B, C, D)</li><li>Apply SQL and PL/SQL skills to real world business problems. (B, C, D, E, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2347,
    "Title": "Web Database Application Development",
    "Learning_Outcomes": "<ol><li>Build Web pages using HTML, server-side scripting and embedded SQL. (C, D, E, F, G)</li><li>Integrate data validation processes into Web-based forms. (B, E)</li><li>Assign user access to Web application components using Web site session security and database object privileges. (C, D, E, F)</li><li>Design and build dynamic Web sites that utilize databases located on remote servers. (C, D, E, F, G)</li><li>Explain the conditions under which it is appropriate to use specific Web and database technologies to create database-centric applications. (A)</li><li>Recognize and use standard relational database and object-oriented terminology. (B)</li><li>Demonstrate effective use of HTML, PHP and MySQL to build dynamic Web pages. (E, F)</li><li>Demonstrate effective use of documentation, tutorials, and on-line resources to learn proper syntax and use of Web-based technologies. (C)</li><li>Effectively review and analyze the work of their peers as a means of providing constructive feedback and improving their own work. (G)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2348,
    "Title": "Data Management Systems",
    "Learning_Outcomes": "<ol><li>Demonstrate effective use of software to organize and analyze patterns and associations in data. (D)</li><li>Create and populate data warehouses and/or data marts. (C)</li><li>Use data mining and analysis techniques to make associations and predictions. (G)</li><li>Analyze data for characteristics of structure to determine the most suitable database organization. (C, D, F)</li><li>Use access control statements and DBMS utilities to create users, assign privileges, and manage a DBMS. (B, E)</li><li>Explain the similarities and differences of various data models. (C, D, E)</li><li>Explain the functions of database administration. (B, E)</li><li>Write programs using query languages to accomplish administrative tasks. (A, B)</li><li>Use the Internet to access databases. (A, B, C, E)</li><li>Explore XML as an alternative database organization. (B, C, D)</li><li>Explain the concept of indexes. (F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2352,
    "Title": "Digital Forensics",
    "Learning_Outcomes": "<ol><li>Compare computer investigations, data acquisition and the process of crime and incident scenes. (A, D, E)</li><li>Use current computer forensics tools and perform computer forensics analysis and validation. (B, D, F)</li><li>Perform network forensics, e-mail investigations and cell phone and mobile device forensics. (B, D, E, F)</li><li>Complete reports for investigations.(E)</li><li>Define privileged communications and confidentiality. (A,C)</li><li>Demonstrate an understanding of the legal aspects of forensics, including chain of custody guidelines. (C, E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2353,
    "Title": "Tactical Perimeter Defense",
    "Learning_Outcomes": "<ol><li>Demonstrate an understanding of network defense fundamentals, advanced TCP/IP, router fundamentals and Cisco router security. (A)</li><li>Design and configure firewalls. (B, C)</li><li>Implement IPSec, virtual private networks, and secure wireless networks. (B, C, D, E)</li><li>Configure and implement intrusion detection systems. (A, B, C, E)</li><li>Demonstrate the ability to work independently as well as cooperatively as part of a team. (E)</li><li>Design a network defense strategy that utilizes “Defense in Depth” practices by layering security mechanisms. (D)</li><li>Create security plans, incident documentation, and problem resolution reports. (D, E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2364,
    "Title": "Virtualization Essentials",
    "Learning_Outcomes": "<ol><li>Define and use common terms and definitions of virtualization. (A,B,C,D)</li><li>Describe the business benefits and business considerations of virtualization. (A,B,C)</li><li>Describe approaches to server virtualization, its relevance to the modern data center, available platforms, and important features. (A)</li><li>Explain the implications of virtualization on storage, networks, and applications. (A,B,C)</li><li>Explain the implications of virtualization on the modern workplace and the management challenges and opportunities. (D,E)</li><li>Explain the impact and changes of virtualization on IT service management. (F,G,H)</li><li>Describe the steps that lead to the successful adoption of virtualization techniques and the implications for an organization. (E,F,G,H)</li><li>Outline the compliance, risk, and regulatory consequences of virtualization and its financial and strategic impact. (A,B,C,D,E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2373,
    "Title": "Wireless Networks",
    "Learning_Outcomes": "<ol><li>Describe the protocols and TCP/IP levels required for wireless communications. (A,B,C,D)</li><li>Identify the basic concept of wireless networks. (A,B,C,D)</li><li>Analyze traffic theories, mobile radio propagation, channel coding, and cellular concepts. (A,B,C,D)</li><li>Compare and contrast multiple division techniques, mobile communication systems, and existing wireless networks. (A,B,C,D)</li><li>Classify network protocols, ad hoc and sensor networks, wireless MANs, LANs, and PANs. (A,B,C,D)</li><li>Apply wireless ID technologies, in particular RFID work. (A,B,C,D)</li><li>Define structures and operations of satellite, cellular, cordless, and mobile IP systems. (A,B,C,D)</li><li>Design and troubleshoot systems using wireless LANs, Wi-Fi, and Bluetooth technologies. (A,B,C,D)</li><li>Solve problems by diagnosing and troubleshooting wireless communications problems. (A,B,C,D)</li><li>Solve problems encountered in the planning, installation, configuration, and upgrading of wireless communications systems. (A,B,C,D)</li><li>Participate in wireless systems planning and problem-solving teams. (D)</li><li>Handle and examine modern computing and communications systems devices. (A,B,C,D)</li><li>Prepare documents for management explaining wireless system problems and the need for new systems, upgrades, networks, etc. (A,B,C,D)</li><li>Read and work from diagrams and service manuals. (A,B.C)</li><li>Safely and appropriately operate tools, equipment, and technology. (A,B,C)</li><li>Read appropriate meters used in the wireless technologies. (A,B,C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2375,
    "Title": "Internet Software Development",
    "Learning_Outcomes": "<ol><li>Create complex web pages using the JavaScript language. (A, B, C)</li><li>Define and outline the structure of the Document Object Model (DOM) underlying web pages. (A, D)</li><li>Use PHP to create dynamic web pages. (A, B, C, D, E, F, I)</li><li>Create a simple Ajax web site that performs asynchronous communication. (A, B, C, D, E, F, J)</li><li>Intelligently discuss the history of computer technology with emphasis on communication technologies. (A)</li><li>Create a web page using only a text editor and browser. (A)</li><li>Know how to use HTML effectively and how to design a decent web page. (A)</li><li>Use Cascading Style Sheets (CSS) and define the style of individual HTML tags, sets of tags, or groups of pages. (A,B)</li><li>Use JavaScript to access the Document Object Model and add or modify objects. ( A, B, C, D)</li><li>Describe the basics of the PHP language and its use in creating web applications. (I)</li><li>Apply Ajax for asynchronous communication. (A, B, C, D, E, F, H)</li><li>Discuss the current state of the art in web-based computer programming and the tools used in the class. (A, B, C, D, E, F, G, H, I)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2376,
    "Title": "Mobile Application Development",
    "Learning_Outcomes": "<ol><li>Design, create, run and debug mobile applications. (B, C, D, F, E)</li><li>Perform mobile application tasks using activities, intents and services. (B, D, F)</li><li>Create mobile applications using GUI elements such as text views, buttons, check boxes, spinner controls, indicators and layouts. (A, B, C, D, E, F)</li><li>Develop mobile apps using Location Based Services (LBS) APIs and Web APIs. (B, C, D, E, F)</li><li>Use and integrate data and storage APIs with mobile applications. (A, B, C, D, E, F)</li><li>Understand and use event handling, fragments and dialogs. (A, B, D, F)</li><li>Write apps using graphics and animations. (B, C, D, E, F)</li><li>Explain mobile technologies and Android platform and its components. (A, B)</li><li>Explain mobile application life cycle. (B, D)</li><li>Create and use different types of application resources. (B, C, D, E)</li><li>Generate project documents such as requirement specifications document, design document and test document. (A, C, E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2380,
    "Title": "Applied Systems Development",
    "Learning_Outcomes": "<ol><li>Construct a plan by using Project Management tools for system study through teamwork and cooperation. (A, B, D, G, I)</li><li>Create Requirement Definition Documents based on client specifications. (A, B, C, D, H)</li><li>Develop a software solution that meets the needs of a local business or community agency, as a team, after a complete system study of the client’s specifications. (E, I)</li><li>Present the software solution to peers, faculty, and the client. (F, I)</li><li>Evaluate team members’ project contributions and participation. (A, C, D,)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2391,
    "Title": "Special Topics in Computer Information Technology",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of the product set being covered. (A, F, G)</li><li>List, discuss and use the product set features. (B, D, E)</li><li>Produce working client-based procedures or code aligned with this product. (B, C, D, E, F, G)</li><li>Find and use tutorial resources. (B, C, D, E, F, G)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC ",
    "Code": 2399,
    "Title": "Internship in Computer Information Technology",
    "Learning_Outcomes": "<ol><li>Demonstrate a working knowledge of basic computer science and information technology in a professional environment. (A)</li><li>Exhibit the ability to work effectively as part of a team in the professional environment. (A, B)</li><li>Demonstrate a strong work ethic and positive attitude and professionalism by regularly attending and being punctual for the internship job. (A, B, C)</li><li>Show effective written and oral communication skills with team/co-workers and supervisors to ensure timely and accurate completion of work and to establish good human relationships. (A, B, C)</li><li>Prepare an application and resume for the search for an internship position in the computer information technology field. Participate in an interview with the Internship Coordinator in preparation for interviewing with potential employers. (A, C)</li><li>Actively participate in the search for an internship. (A, C)</li><li>Demonstrate appropriate skill level in the area of networking, systems administration, cyber defense, database management or programming. (C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC  ",
    "Code": 1102,
    "Title": "Networking Lab",
    "Learning_Outcomes": "<ol><li>Develop problem-solving, critical thinking and analytical reasoning skills (as applicable to system and network configuration). (A, B, C, D, E)</li><li>Demonstrate effective use of software and hardware tools. (A, C, D)</li><li>Use analysis, design, implementation, testing, documentation and troubleshooting skills to complete substantial projects. (A, B, C, D, E)</li><li>Safely and appropriately operate tools, equipment and technology. (A, C, D)</li><li>Read and work from diagrams and service manuals. (A, B, C, D, E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC  ",
    "Code": 1110,
    "Title": "Programming I Lab",
    "Learning_Outcomes": "<ol><li>Write programs to solve basic computing problems using selection and iterative statements. (A, C, E)</li><li>Write programs using functions and methods. (A, B, D, C)</li><li>Test and debug programs they have written. (A, D)</li><li>Develop modular, algorithmic solutions for basic computing problems ( A, C)</li><li>Create and use user-defined methods. (A, C, D)</li><li>Create and use arrays and strings. (A, B, C, D, E)</li><li>Use the Java API (A, B, E)</li><li>Use a Java IDE (A, C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC  ",
    "Code": 1111,
    "Title": "Programming II Lab",
    "Learning_Outcomes": "<ol><li>Write programs to solve intermediate-level computing problems using classes from a language library. (A, B, C, D, E)</li><li>Write programs using user-defined classes that utilize best practices or inheritance, polymorphism and encapsulation. (A, C)</li><li>Create abstract classes and interfaces. (A)</li><li>Write programs that use standard data structures such as arrays and/or lists. (A, C)</li><li>Implement, test and debug intermediate-level computer programs. (B, C, D)</li><li>Create and use interfaces and abstract, final and anonymous classes (A, B, D)</li><li>Write programs that use JavaFX (A, B, D)</li><li>Write programs that throw and catch exceptions (A, B, D)</li><li>Write programs that uses Java collection, file I/O and database connectivity packages (A, B, D)</li><li>Write programs using JDBC to connect to and query a database (A, B, D)</li><li>Create and use Java applets and application (A, B, C, D)</li><li>Use an IDE to implement Java applications (D)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC  ",
    "Code": 1302,
    "Title": "Introduction to Networking",
    "Learning_Outcomes": "<ol><li>Differentiate between the various networking media and connections. (A, B, C, D)</li><li>Identify network topologies, devices, and protocols and their features and functions. (A, B, C, D, E)</li><li>Describe the various LAN and WAN technologies in use. (B)</li><li>Explain the features and capabilities of networking software. (C, D)</li><li>Describe network management and security concepts, tools, and techniques. (B, C, D, E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC  ",
    "Code": 1310,
    "Title": "Programming I",
    "Learning_Outcomes": "<ol><li>Develop an algorithmic solution to solve a problem using sequence, selection, and iteration. (A, C, D)</li><li>Demonstrate the skills necessary to correctly compile, debug, and test programs. (A, C)</li><li>Create and use data types and variables. (A, C, D)</li><li>Develop modular, algorithmic solutions for basic computing problems. (A, E)</li><li>Create and use user-defined methods. (A, C, D)</li><li>Create and use arrays and strings. (A, C, D)</li><li>Create and use user-defined classes (A, B, C)</li><li>Use the Java API. (C, E)</li><li>Use a Java IDE. (A, C, E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC  ",
    "Code": 1311,
    "Title": "Programming II",
    "Learning_Outcomes": "<ol><li>Use professional models such as UML to design intermediate computing solutions. (A, D)</li><li>Develop modular algorithmic solutions for intermediate computing problems using object-oriented constructs. (A, D)</li><li>Explain object-oriented concepts such as inheritance, abstract classes, interfaces, polymorphism and encapsulation. (A, C, D)</li><li>Execute processes necessary to display knowledge of the software language statements required for developing and implementing typical business applications. (A, B, C, D, E)</li><li>Design applications and/or applets that use interfaces and abstract, final and/or anonymous classes (A, B, D)</li><li>Design applications and/or applets that use an event-driven GUI interface (A, B, D)</li><li>Design applications and/or applets that throw and catch exceptions (A, B, D)</li><li>Design applications that use file I/O and database connectivity (A, B, D)</li><li>Explain the use of Java collections (A, B, D)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC  ",
    "Code": 2290,
    "Title": "Capstone Course in Computer Information Technology",
    "Learning_Outcomes": "<ol><li>Understand, explain, design, and create a computer-based project in either an individual or team-based scenario. (A, B, C, D, E)</li><li>Present and defend the outcomes of the computer-based project. (E)</li><li>Demonstrate knowledge of the products and equipment involved in the implemented solution. (B, C, D, E)</li><li>Demonstrate proficiency in locating and using resources. (D)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC  ",
    "Code": 2329,
    "Title": "Routing &amp; Switching I",
    "Learning_Outcomes": "<ol><li>Perform basic binary and related networking math and subnetting. (C)</li><li>Identify types of networks, network devices, and network protocols and their functions. (A, B, C, D, E)</li><li>Explain both the OSI and TCP/IP reference models of networking. . (B, C, D)</li><li>Use TCP/IP troubleshooting commands and diagnostic tools to identify network configuration problems. (C, D)</li><li>Configure RIP and CDP protocols and explain routing theory. (A, B, E)</li><li>Identify and configure ports and interfaces on Cisco routers and switches. (A, B, C, E)</li><li>Explain functions of router and switch components, configuration files, and working modes. (A, B, E)</li><li>Use and explain Cisco IOS and IFS commands. (A, E)</li><li>Explain layer 2 switching concepts and protocols to configure and manage switches. (B, D, E)</li><li>Perform password reset steps for Cisco routers and switches. (A, B, D, E)</li><li>Read and work from diagrams and service manuals. (A,B,C,D,E)</li><li>Safely and appropriately operate tools, equipment and technology. (A,B,C,D,E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC   ",
    "Code": 1303,
    "Title": "Database Concepts",
    "Learning_Outcomes": "<ol><li>Perform research and analyze requirements for a database application using database design tools and principles. (C, D)</li><li>Translate client/user requirements into a data model. (C, D)</li><li>Develop physical database characteristics and define a user interface to implement a data model. (B)</li><li>Perform database normalization. (D, E)</li><li>Use SQL to convert data to information. (B, F)</li><li>Describe the functions of database administration. (E)</li><li>Describe the difference between a relational DBMS and a NoSQL database. (A)</li><li>Describe the characteristics and purposes of a data warehouse. (G)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CITC   ",
    "Code": 2335,
    "Title": "Systems Analysis &amp; Design",
    "Learning_Outcomes": "<ol><li>Demonstrate an understanding of general concepts of system analysis and design. (A, F)</li><li>Construct a plan by using Project Management tools for system study through teamwork and cooperation. (A, B, C, D, E, F, G)</li><li>Develop an understanding of the system's life cycle and the tools and techniques available to the analyst. (A, C, E, F)</li><li>Develop different alternative solutions to a given problem. (B, E, F)</li><li>Create Requirements Definition Documents using variety case studies. (A, C, E, F)</li><li>Create Use Cases, and other UML models using modeling tools. (C, F)</li><li>Develop software solution after a complete system study using various case studies. (A, F, G)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CULA ",
    "Code": 1320,
    "Title": "Culinary I (Fundamentals)",
    "Learning_Outcomes": "<ol><li>Demonstrate basic knife skills, hand tool and equipment operation with emphasis on proper safety techniques.(B,C,E)</li><li>Execute the dice, batonnet, julienne, mince and bias cuts on a variety of vegetables. (B,C,E)</li><li>Identify and use herbs, spices, oils, and vinegar, condiments, marinades and rubs. (A,E)</li><li>Demonstrate sanitary food handling techniques, safe work practices, and proper equipment and facility use and maintenance. (B,E,F)</li><li>Execute and season a number of foundation dishes including stocks, cream soups, puree soups, starches, vegetables, grains and poultry. (A,D,E,F,G,H)</li><li>Prepare Bechamel (Cream Sauces), Veloute (Stock-based), Espangnole (Brown Sauce), Tomato Sauce and Hollandaise Sauce. (A,D,EG)</li><li>Demonstrate the basic principles of dry and moist cooking methodologies. (E,I).</li><li>Recognize various parts of the standardized recipe and understand it relationship to culinary consistency. (A,I)</li><li>Recognize and explain the types of multiple dairy products. (E,I)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CULA ",
    "Code": 1325,
    "Title": "Culinary II (Fabrication)",
    "Learning_Outcomes": "<ol><li>Explain and demonstrate the concept of Hazard Analysis Critical Control Points in the professional kitchen as it applies to sanitation and safety procedures to food preparation techniques. (A,B,G)</li><li>Describe composition, structure of meats, poultry and seafood and explain the use of the federal inspection and grading system in selecting and purchasing meats. (A,G,H,I)</li><li>Apply proper storage procedures to ensure maximum shelf life for fresh and frozen meats, poultry, seafood, grains, legumes and vegetables.(B,C,D,G,H,I)</li><li>Apply proper cooking methods for proteins, grains, legumes, vegetables, meats, poultry and seafood to establish a complete nutritious plated meal presentation. (B,C,D,G,H,I)</li><li>Apply sustainable purchasing and production practices.(B,G)</li><li>Illustrate how heat affects foods and demonstrate the basic principles of various cooking methods. (A,C,E,I)</li><li>Identify and cook pasta products. (A,B,C,F)</li><li>Identify the primal, sub-primal and fabricated cuts of beef, veal, pork and game. Illustrate basic butchering procedures on all meats. (G,H)</li><li>Identify a variety of game and prepare game for cooking and apply various cooking methods to game. (G,H,I)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CULA ",
    "Code": 1330,
    "Title": "Garde Manger",
    "Learning_Outcomes": "<ol><li>List and describe the procedure for hot and cold smoking of meats and fish. (A,D,E)</li><li>Define and use common terms for the Garde Manger department.(A,B,D,G, H)</li><li>Demonstrate planning, timing, and preparation of various buffet menus, emphasizing commitment to quality and excellence.(C,D,E,F,G)</li><li>Describe the components of salads and salad dressings.(A,B,C,D,H,I)</li><li>Prepare a variety of hot and cold sandwiches and crudités. (A,B,C,D)</li><li>Prepare and serve a variety of cold and hot hors d’oeurves, including canapés, and be able to choose hors d’oeurves, including canapés,that are appropriate for the meal or event. (A,B,C,D,E)</li><li>Understand and demonstrate the basic principles of plate presentation. (A,D,E,H,I)</li><li>Prepare a variety of ice carvings. (D, F)</li><li>Prepare a variety of ice creams, sorbets and frozen dessert items.(A, B,C,H)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CULA ",
    "Code": 2300,
    "Title": "Breakfast Cookery",
    "Learning_Outcomes": "<ol><li>Apply various cooking methods to eggs. (A,F)</li><li>Identify and prepare breakfast meats. (C,E)</li><li>Prepare cold and hot cereal recipes. (B,F)</li><li>Prepare breakfast casseroles. (B,A,E)</li><li>Use prepared fruits as breakfast dishes and as ingredients in breakfast recipes. (B, A,E)</li><li>Prepare pancakes, crepes and other griddlecakes. (D,E,F)</li><li>Prepare a variety of quick breads using the biscuit method, muffin method and creaming method. (D,G)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CULA ",
    "Code": 2390,
    "Title": "Culinary Capstone",
    "Learning_Outcomes": "<ol><li>Demonstrate continued development of effective and sound work practices that include knife skills, personal and kitchen organization skills. (A,B,C,D)</li><li>Execute a number of dishes including stock, soups, sauces, seafood, starches and vegetables. (A,B,C,E)</li><li>Write and execute a regional American bistro-style menu and prepare items from that menu. (A,D,E)</li><li>Execute a final exam project consisting of a green salad with emulsified dressing, a seafood course, entrée with appropriate side items and a plated and sauced dessert. (A,D, E,F)</li><li>Prepare soups and sauces from international recipes. (A,D,F)</li><li>Purchase meats, poultry, game, and fish appropriate to international culinary specifications. (B,F)</li><li>Prepare salads, terrines, forcemeats, and pates using international recipes. (A,B,C,D)</li><li>Compare and contrast international service to American service. (A,C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "CULA   ",
    "Code": 1310,
    "Title": "Fundamentals of Baking",
    "Learning_Outcomes": "<ol><li>Describe and apply appropriate sanitation, health and safety practices as they apply to baking and the pastry arts. (D,E)</li><li>Describe properties and functions of the basic ingredients used in baked goods. Define and describe the effects of heat on food and the methods of heat transfer. (B,A,E)</li><li>Weigh and measure ingredients used in baking. Convert formulas to meet production needs and equipment capacities (C,D,E)</li><li>Identify and demonstrate the appropriate preparation (mise en place), mixing, and make-up of baking ingredients and products such as cakes, quick breads, yeast breads, cookies and variety of custards; select the appropriate equipment to perform each of the tasks. Evaluate the final product using bakery quality standards (B, C, F)</li><li>Identify, evaluate, and use flours, herbs, spices, fruits, fats, sugars, and other bakeshop staples. .(B,A,E)</li><li>Control the development of leavening agents. (A,C)</li><li>Cook biscuits, scones, and muffins correctly. (B,C,F)</li><li>Prepare a variety of pie crusts and fillings, meringues, cheesecakes, cookies and pastries. (B,A,E)</li><li>Prepare a variety of dessert and pastry items, incorporating components from other methods. (B,A,E)</li><li>Use custards, creams, and dessert sauces in preparing and serving other pastry and dessert items and appropriately coordinate baked items to various overall menus. (B,C,F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ECON ",
    "Code": 2100,
    "Title": "Principles of Macroeconomics ♦ ★",
    "Learning_Outcomes": "<ol><li>Construct a production possibilities curve, analyze points on and around the curve, and interpret shifts of the curve. A</li><li>Identify and explain the fundamental characteristics of the market system. A</li><li>Identify and list the factors that affect demand and supply. A</li><li>Define GDP and compute both nominal and real GDP using the components of the expenditure approach, given the appropriate information. A, C</li><li>Explain how unemployment and inflation vary over the course of the business cycle. A,C</li><li>Define MPC and MPS, and calculate the spending multiplier. A, B, C</li><li>Define both recessionary and inflationary gaps. A, B, C</li><li>Define aggregate demand (AD) and aggregate supply (AS) and identify the factors that shift the AD and AS curves. A, B, C</li><li>Explain how and when expansionary and contractionary fiscal policies are used. A, B, C</li><li>Identify and define the three functions of money, and explain what backs the money supply in the U.S. economy. A, B, C, E</li><li>Calculate required and excess reserves for (1) a single bank, and (2) the consolidated banking system. A, B, C, E</li><li>Identify the tools of monetary policy and explain how they are employed by the Federal Reserve to expand or contract the money supply. A, B, C, E</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "ECON  ",
    "Code": 2200,
    "Title": "Principles of Microeconomics ♦ ★",
    "Learning_Outcomes": "<ol><li>Define and graph demand and supply; state the laws of demand and supply. A,B</li><li>Identify and list the factors that shift demand and supply; determine equilibrium price and quantity. A,B</li><li>Define, measure, and graphically identify consumer and producer surplus. A, B, F</li><li>Define and calculate the price elasticity of demand; explain the determinants of demand elasticity. A, B</li><li>Explain the differences between behavioral economics and neoclassical economics. A, E, F</li><li>Identify the characteristics of public goods and explain how they differ from private goods. A, B, F</li><li>Define economic profit, accounting profit, fixed costs and variable costs. A,B</li><li>Use the MR/MC approach to determine the profit maximizing output of a firm in the purely competitive, monopoly and monopolistic competitive market structures. A,B</li><li>Determine the equilibrium in the purely competitive labor market and the monopsony model. A,B,E,F</li><li>Determine comparative advantage and the gains from trade in a 2-country, 2-good trade model. A,B,C,D</li><li>Critically evaluate the case for trade protection. A,B,C,D,E,F</li><li>Define and describe the components of the Balance of Payments. A,B,C</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "HSP ",
    "Code": 1200,
    "Title": "Introduction to Hospitality",
    "Learning_Outcomes": "<ol><li>Explain the history of the lodging industry. (A,G)</li><li>Differentiate between various hospitality career opportunities. (B,C,F)</li><li>Explain the organizational structure of the various types of hotels. (B,A,G)</li><li>Identify the industry leaders with their respective innovations and accomplishments. (E, D)</li><li>Differentiate between private ownership and franchise ownership. (A,B,G)</li><li>Discuss the impact of service to various segments of the lodging industry.(C,F)</li><li>Explain the impact of governmental regulation on the property owner/operator. (A,B,D,E)</li><li>Identify logical customer expectations based on the type of hospitality facility. (B,C)</li><li>Discuss non-managerial professional career opportunities. (A, G)</li><li>Explain the significance of cultural diversity on the hospitality industry. (D,E)</li><li>Identify approaches for dealing with cultural diversity in the workforce. (DE)</li><li>Explain the basic types of cost control systems in hospitality. (B)</li><li>Name the primary associations for each segment of the hospitality industry as well as their publications. (A,D,G)</li><li>Discuss the historical perspective of hospitality laws in context with the industry segments the laws were created for. (A,B,D)</li><li>Explain the value of ethical behavior in hospitality management. (C,D,E,G)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "HSP ",
    "Code": 1400,
    "Title": "Sanitation &amp; Food Safety",
    "Learning_Outcomes": "<ol><li>Explain the role of the kitchen manager concerning food safety. (A,B,E)</li><li>Differentiate between various biological and chemical contaminants. (A,B,C)</li><li>Explain the HACCP procedure and its role in preventing food borne illness.(A,B,D,E)</li><li>Demonstrate preventive measures for cross-contamination. (A,B)</li><li>Explain the time – temperature relationship in terms of food safety. (A,B,C)</li><li>Differentiate between various biological and chemical food contaminants. (A, F)</li><li>Identify the symptoms of varied food borne illnesses. (A, F)</li><li>Explain proper food storage requirements. (C,E)</li><li>Identify proper cooking temperatures for specific hazardous foods. (D,E)</li><li>Differentiate between cleaning and sanitizing. (D,E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "HSP ",
    "Code": 1420,
    "Title": "Nutrition for the Culinary Arts",
    "Learning_Outcomes": "<ol><li>Describe the current United States Department of Agriculture Food Guide Pyramid and the accompanying dietary guidelines. (A,D,G)</li><li>Explain the recommended dietary allowances, the functions of and best sources of major nutrients. (D,E)</li><li>Identify the major food allergies, symptoms and responsibilities of food service professionals. (D,E,F,G)</li><li>Discuss the basic menu planning principles, layout and design.(C,D,F,H)</li><li>Create a menu using the principles of sound nutritional practices.(C,D,E)</li><li>Explain the health benefits of utilizing nouveau cuisine. (B,C)</li><li>Discuss nutrition-related professional career opportunities. (A,G)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "HSP ",
    "Code": 2075,
    "Title": "Purchasing &amp; Cost Control",
    "Learning_Outcomes": "<ol><li>Identify procurement and selection procedures for the hospitality industry. (A, B, C, D, I)</li><li>Identify hospitality cost variations, and design effective and efficient solutions. (A, B, C, E, I)</li><li>Utilize the various personnel scheduling techniques inherent to the hospitality industry. (A, B, C, E, I)</li><li>Know the proper portion control and portion quantity evaluation techniques and apply them to realistic situations. (A, C, D, E, F, G, H, I)</li><li>Utilize the Butcher’s yield test for meats and recipes. (C, E, I)</li><li>Evaluate the cost of labor versus its effect on service. (A, B, C, E, I)</li><li>Utilize menu engineering to accomplish an efficient and effective menu. (A, C, E, I)</li><li>Perform a daily food cost analysis for a restaurant. (A, D, E)</li><li>Perform analysis on food cost by use of the cooking loss procedure for costing (C, D, E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "HSP ",
    "Code": 2100,
    "Title": "Professional Beverage Management",
    "Learning_Outcomes": "<ol><li>Explain the history of the beverage industry. (A,G)</li><li>Differentiate between various beverage target markets. (B,C,F)</li><li>Explain the role of the beverage manager and the bar tender. (B,A,E)</li><li>Identify the beverage industry leaders with their respective innovations and product accomplishments. (A,F)</li><li>Differentiate between various types of wines and the appropriate service standards and times for each. (A,B,G)</li><li>Discuss the impact of service to the various segments of the beverage industry. (C,F)</li><li>Explain the impact of governmental regulation on the property owner/operator concerning dram shop laws. (A,B,D,E)</li><li>Identify logical customer expectations based on the type of hospitality facility that serves the beverages. (B,C)</li><li>Discuss beverage-related professional career opportunities. (A,G)</li><li>Explain the significance of cultural diversity on the beverage segment of the hospitality industry. (C,E)</li><li>Identify approaches for dealing with beverage over-consumption. (D,E)</li><li>Explain the basic types of cost control systems in beverage management. (B,D)</li><li>Explain the value of ethical behavior in hospitality management. (D,E,G)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "HSP ",
    "Code": 2230,
    "Title": "Tourism &amp; Travel ★",
    "Learning_Outcomes": "<ol><li>Evaluate indicators of tourism’s social and cultural impact, both positive and negative. (A, B, D, E, F, K)</li><li>Identify favorable destinations throughout the world. (B, E, F, G, I, J)</li><li>Evaluate potential travelers on the basis of demographics and psychographics. (A, B, C, E, I)</li><li>Evaluate tourist destinations in terms of cultural, social, and economic potential for both the location and the traveler. (A, B, D, E, F, G)</li><li>Estimate tourism demand as the basis for planning. (A, E, F, G)</li><li>Utilize proper steps in planning for tourism. (A, B, C, E, F, J, K)</li><li>Match supply components with present and future demand estimates. (A, F, G)</li><li>Market travel and accommodations with emphasis on consumer orientation and an effective distribution system. (A, F, G, I, K)</li><li>Measure tourism’s economic contribution to a state or area by formulating and implementing tourism research. (A, C, F, H)</li><li>Formulate tourism policy in a local, regional, national or international organization. (A, B, C, E, H, I. J)</li><li>Predict future travel trends by means of statistical analysis. (E, F)</li><li>Understand the import-export relationship of international tourism with respect to the host country. (A, B, D, G)</li><li>Identify the multiple customers involved with tourism (B, E, G, I)</li><li>Identify the various related career fields involved with tourism. (A, C, G)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "HSP ",
    "Code": 2250,
    "Title": "Professional Catering",
    "Learning_Outcomes": "<ol><li>Discuss the catering industry and segment potential clients. (A)</li><li>Explain various types of catering events held on and off-premise. (A, B, D)</li><li>Differentiate between corporate and social catering. (A, B)</li><li>Gain an appreciation for the planning function of the catering business. (A, B, D, E)</li><li>Describe, plan, and expense a standardized menu. (A, B, C, D, E)</li><li>Discuss why catering plans must be flexible. (A, B, C, E)</li><li>Show the planning sequence all caterers must follow regardless of the event. (A, E)</li><li>Describe catering equipment, its uses and designs for specific specialty pieces. (A, B, D)</li><li>Explain the legal terms of a standard caterer’s contract. (A, B, C)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "HSP ",
    "Code": 2260,
    "Title": "Hotel Operations ★",
    "Learning_Outcomes": "<ol><li>Outline an organizational chart depicting the functional relationships among hotel divisions and departments. (A, B, E, G)</li><li>Explain the function and operation of the various systems, forms, equipment, and computers found in the front office area. (A, B, C, H)</li><li>Relate how an efficient reservation system records crucial information while avoiding problems in processing various types of reservations. (B, F, H)</li><li>Explain how a registration system helps ensure the property’s profitability while meeting the needs of the guests by utilizing effective guest room sales techniques and efficient credit establishment procedures. (A, B, C, F)</li><li>Discuss the role of communication within the front office department as well as with the remaining hotel departments. (F, G)</li><li>Develop procedures regarding hotel safety and guest security. (A, B, F)</li><li>Outline procedures for handling guest complaints. (B, F, G)</li><li>Explain and perform the duties involved with the night audit process. (A, B, F, H)</li><li>Perform check-in and check-out procedures. (A, B, C, F, H)</li><li>Follow basic hotel accounting procedures from posting accounts to cash and check transactions at the front desk. (F, H)</li><li>Apply basic concepts and principles of yield management in a front office setting. (B, C, F, H)</li><li>Analyze statistics relevant to establishing room rates, forecasting room availability and budgeting for operations. (C, F)</li><li>Identify the personnel/hiring needs for a front office operation. (D, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "HSP ",
    "Code": 2300,
    "Title": "Food &amp; Beverage Management ★",
    "Learning_Outcomes": "<ol><li>Identify the skills necessary to manage a restaurant. (A, B, C, D, F)</li><li>Describe the eating habits of various segments of the restaurant market. (B, C, D)</li><li>Identify the major ongoing trends in customer behavior that will affect the restaurant industry. (B, C)</li><li>Describe how to conduct a customer, property, and competitor analysis. (A, B, C, D, E)</li><li>Identify the functions of the menu. (B, D, E)</li><li>Identify the various procedural and convivial dimensions of service. (A, B, C)</li><li>Develop procedures for effective purchasing, receiving, storing, and issuing of items used in the operation. (A, G)</li><li>Discuss the major laws and regulations affecting employee hiring. (A, C)</li><li>Develop guidelines on how to conduct a hiring interview. (A, C, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "HSP ",
    "Code": 2320,
    "Title": "Quantity Food Production",
    "Learning_Outcomes": "<ol><li>Describe the relationship between the menu and all other facets of the food service operation. (A, B, C, D, E, F)</li><li>Outline the standards for food safety and sanitation. (A, B, E)</li><li>Translate a recipe into standardized institutional form. (F, G, H)</li><li>Relate how product, preparation, service and customer flow effect the operation of a food service facility. (A, C, G, H)</li><li>Explain which pieces of institutional food service equipment would be found in different types of food service operations. (A, B, C, F, G)</li><li>Demonstrate how specific pieces of equipment operate, are cleaned and sanitized. (C, E, H)</li><li>Define food grades and specifications for specific menu items. (D, F)</li><li>Differentiate the types of service methods found in various types of food service operations. (A, G)</li><li>Differentiate among different types of cooking methods. (A, C, D)</li><li>Identify the type of food service operation with its respective market segment. (A, G)</li><li>Discuss the managerial and physical factors involving the receiving of products. (A, B, F)</li><li>Discuss the pricing and profit models associated with food service menus. (A, F)</li><li>Explain the nutritional factors that are important in menu engineering. (A, E)</li><li>Identify various bakery products with their respective production needs. (A, C, F)</li><li>Explain the different methods of purchasing. (A, F)</li><li>Discuss the need for and methods of purveyor reviews. (A, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "HSP ",
    "Code": 2950,
    "Title": "Culinary Arts/Hospitality Internship",
    "Learning_Outcomes": "<ol><li>Describe the various duties of the different entry-level jobs at the host establishment. (A, B, C)</li><li>Describe the relationship of the line-level positions to each other and how they relate to other areas of the business and to the satisfaction of the customer. (A, B, C, D)</li><li>Organize work properly for the purpose of attaining efficient and effective skills for entry-level positions. (A, B, D)</li><li>Professionally perform in the hospitality business environment. (A,B,C,D)</li><li>Exhibit the ability to work as part of a team in a professional environment. (A,B,C,D)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "INFS          ",
    "Code": 1010,
    "Title": "Computer Applications ★",
    "Learning_Outcomes": "<ol><li>Identify basic PC fundamentals including hardware, software, and storage components. (A)</li><li>Demonstrate file management procedures. (B)</li><li>Demonstrate an understanding of the Windows user interface. (B)</li><li>Use Microsoft Word 2016 to create and edit a flyer, an MLA research paper, and a business letter. (C)<p>Specific concepts will include</p><ol><li>changing the format of documents, making changes and corrections quickly and efficiently, working with images</li><li>creating and using footnotes, citations, Works Cited page, headers, styles to prepare an MLA documentation style research paper</li><li>using tabs, tables, building blocks, graphics, etc. to format business letters complete with letterheads and envelopes</li></ol></li><li>Use Excel 2016 to create worksheets with charts. (D)<p>Specific concepts will include</p><ol><li>entering data and formulas, formatting a worksheet to change its appearance</li><li>creating column, bar, Sparkline, and pie charts</li><li>identifying arithmetic operators and understanding order of operations</li><li>using functions, conditional formatting, absolute and relative cell referencing, IF statements, and goal-seeking, etc.</li></ol></li><li>Create an Access 2016 database including tables, queries, forms and reports. (E)<p>Specific concepts will include</p><ol><li>designing the structure of the database and adding the records to tables by entering records through the datasheet or forms and/or by importing data from other programs</li><li>creating an assortment of queries to retrieve information from the tables</li><li>preparing reports to display records professionally and maintaining the database by using action queries</li><li>searching for and filtering records, specifying validation rules and referential integrity, using subdatasheets, and sorting records.</li></ol></li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 1300,
    "Title": "Introduction to Paralegal Studies &amp; Ethics",
    "Learning_Outcomes": "<ol><li>Understand the legal process and the nature of law practice, emphasizing the role of the paralegal in the delivery of legal services. (A,B,D,E,F)</li><li>Identify the professional associations that serve and promote the paralegal profession. (B,F)</li><li>Understand the legal and ethical principles that guide paralegal conduct. (A,B,E)</li><li>Understand the organization of the state and federal trial and appellate court systems and the different functions of those courts. (D,F)</li><li>Determine which area of law is relevant to a particular situation. (D,E,F)</li><li>Analyze the various types of employment for paralegals. (B, C, F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 1315,
    "Title": "Technology in the Law Office",
    "Learning_Outcomes": "<ol><li>Understand the function of technological support in the law office. (B,C,D)</li><li>Understand computer hardware and software compatibility and function. (C,D,F,G)</li><li>Demonstrate knowledge of federal court electronic filing. (E)</li><li>Demonstrate knowledge of various software used in law offices. (B,D,F,G,H)</li><li>Demonstrate a complete and thorough understanding of legal ethics. (A)</li><li>Prepare spreadsheets. (A,D, E,F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 1320,
    "Title": "Legal Research",
    "Learning_Outcomes": "<ol><li>Use both print and electronic sources to locate applicable primary and secondary sources of law. (B,C,D)</li><li>Read, evaluate, and analyze source materials. (A,B,C,D)</li><li>Identify and locate resources to update and verify the reliability of legal authority. (A,B,C,D)</li><li>Demonstrate a complete and thorough understanding of legal ethics. (B)</li><li>Describe the role of legislative materials within the context of the civil law system. (C,D)</li><li>Distinguish between state and federal law, criminal and civil law, and substantive and procedural law. (B,C,D)</li><li>Read, interpret, and use uniformly accepted legal abbreviations and citations. (B,C,D)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 1330,
    "Title": "Legal Writing",
    "Learning_Outcomes": "<ol><li>Understand and apply principles of writing and rules of grammar. (B,C,D)</li><li>Prepare documents in appropriate formats. (D,E)</li><li>Cite and check legal sources. (B,E)</li><li>Recognize and demonstrate acts that constitute professional behavior. (A)</li><li>Understand the use of analogies in legal writing. (A,B,C,D)</li><li>Prepare an office memorandum of law effectively communicating analysis of legal issues. (A,B,C,D,E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 1340,
    "Title": "Family Law",
    "Learning_Outcomes": "<ol><li>Understand the substantive and procedural laws applicable to various topics in family law. (B,C,D,E)</li><li>Demonstrate the ability to analyze factual situations and successfully apply the legal concepts learned in this area of the law. (B,C,D,E)</li><li>Draft legal documents in the area of family law. (B,C,D,E)</li><li>Demonstrate a complete and thorough understanding of legal ethics. (A)</li><li>Identify and classify the various kinds of property the domestic client and spouse have acquired. (C,E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 1350,
    "Title": "Torts",
    "Learning_Outcomes": "<ol><li>Identify and understand the elements of intentional torts, negligence and strict liability. (B,E)</li><li>Understand defenses to intentional torts, negligence, and product liability. (B,D,E)</li><li>Understand, identify, and compute general and special damages which may be recovered. (B,C,D,E)</li><li>Demonstrate a complete and thorough understanding of legal ethics. (A)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 1360,
    "Title": "Criminal Law",
    "Learning_Outcomes": "<ol><li>Understand the basic legal principles involved in the criminal litigation process and the tasks that may be required of paralegals during each step. (B,C,D,E,F)</li><li>Identify and understand the elements of various criminal offenses and defenses. (C,D,F)</li><li>Understand the procedures by which criminal litigation is conducted in the state and federal systems. (B,D,E)</li><li>Prepare basic forms and documents used in the criminal practice. (B,C,D,E,F)</li><li>Demonstrate a complete and thorough understanding of legal ethics. (A)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 1370,
    "Title": "Trusts &amp; Estates",
    "Learning_Outcomes": "<ol><li>Identify types of property and property ownership. (B,F)</li><li>Demonstrate knowledge of the statutes governing wills and probate in Tennessee. (C,E,F)</li><li>Recognize the paralegal’s role in assisting the personal representative and attorney in performing the required duties of estate administration, including drafting various probate forms, pleadings and documents. (C,D,E,F,G)</li><li>Demonstrate a complete and thorough understanding of legal ethics. (A)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 2300,
    "Title": "Special Topics in Paralegal Studies",
    "Learning_Outcomes": "<ol><li>Understand the substantive and procedural laws applicable to topic. (A,B,C,D)</li><li>Demonstrate the ability to analyze factual situations and successfully apply the legal concepts learned in this area of the law. (A,B,C,D)</li><li>Draft legal documents in this area of the law. (A,B,C,D,E)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 2330,
    "Title": "Contract Law",
    "Learning_Outcomes": "<ol><li>Demonstrate understanding of the elements of an enforceable contract. (B,D)</li><li>Demonstrate understanding of the effect of Statutes of Frauds on contract enforcement. (F)</li><li>Demonstrate understanding of the Parol Evidence Rule. (B,C,D)</li><li>Demonstrate understanding of the defenses to a claim of breach of contract. (B,E)</li><li>Demonstrate understanding of the remedies for breach of contract. (B,C,D,E)</li><li>Demonstrate a complete and thorough understanding of legal ethics. (A)</li><li>Demonstrate understanding of contracts clauses by drafting various clauses. (B)</li><li>Identify UCC forms. (D)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 2340,
    "Title": "Property Law",
    "Learning_Outcomes": "<ol><li>Understand the laws of real property. (A,B)</li><li>Conduct an effective title search. (A,D)</li><li>Draft the necessary documents for a routine real estate transaction from contract to closing, including the real estate contract, promissory note, deed of trust, deed, and closing statement. (A,B,C,D)</li><li>Prepare for, arrange, and conduct a real estate closing. (A,B,C,D)</li><li>Demonstrate a complete and thorough understanding of legal ethics. (B)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 2350,
    "Title": "Bankruptcy &amp; Creditor Rights",
    "Learning_Outcomes": "<ol><li>Demonstrate understanding of a Chapter 7 bankruptcy. (A,B,C,D,E)</li><li>Demonstrate understanding of a Chapter 11 bankruptcy. (A,B,C,D,E)</li><li>Demonstrate understanding of a Chapter 13 bankruptcy. (A,B,C,D,E)</li><li>Demonstrate understanding of an involuntary bankruptcy. (A,B,C,D,E)</li><li>Demonstrate understanding of the rights of creditors in a bankruptcy proceeding. (A,B,C,D,E)</li><li>Demonstrate a complete and thorough understanding of legal ethics. (A)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 2380,
    "Title": "Civil Litigation Skills I",
    "Learning_Outcomes": "<ol><li>Understand the basic steps involved in the civil litigation process and the tasks that may be required of paralegals during each step of the pretrial phase. (C,D,E,G)</li><li>Demonstrate how to prepare for an interview, develop a list of questions to ask, conduct an effective interview and record the interview. (B,C,G)</li><li>Identify and locate witnesses, potential parties to a suit and experts. (B,D,E,F)</li><li>Explore the sources that can be used to locate information or witnesses during preliminary investigation. (B,C,D,E,F,G)</li><li>Demonstrate a working knowledge of the rules of evidence. (F,G)</li><li>Demonstrate a complete and thorough understanding of legal ethics. (A)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 2385,
    "Title": "Civil Litigation Skills II",
    "Learning_Outcomes": "<ol><li>Draft discovery documents. (B,C,D,E,F,G)</li><li>Draft pleadings and documents in conformity with the rules of civil procedure. (B,C,F)</li><li>Understand how to assist attorneys prepare for trial. (B,C,D,E,F,G)</li><li>Demonstrate a complete and thorough understanding of legal ethics. (A)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL ",
    "Code": 2390,
    "Title": "Legal Internship",
    "Learning_Outcomes": "<ol><li>Demonstrate a complete and thorough understanding of legal ethics. (A)</li><li>Employ skills during employment interview process. (A,B,C,D)</li><li>Demonstrate research skills by finding law applicable to assignment. (B,C,D)</li><li>Demonstrate effective computer use in legal environments. (D)</li><li>Explain the various types of employment for paralegals. (A,B,D)</li><li>Demonstrate the characteristics of an effective paralegal. (A,B,C,D)</li><li>Appreciate the critical importance of honesty and integrity in the legal environment. (A,B,D)</li><li>Arrive for work on time. (B,F)</li><li>Complete assignments on schedule. (B,F)</li><li>Take and follow directions well. (B,E,F)</li><li>Display initiative. (B,E,F)</li><li>Display a positive, cooperative attitude. (B,E,F)</li><li>Exhibit a professional appearance and demeanor. (B,F)</li><li>Exercise mature judgment. (A,B,C)</li><li>Understand legal processes and procedures. (B,C,F)</li><li>Use a good working legal vocabulary. (B,F)</li><li>Pay attention to detail. (A,B,C,D,F)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL  ",
    "Code": 1310,
    "Title": "Law in Society",
    "Learning_Outcomes": "<ol><li>Understand the importance of analyzing credible authorities to reach conclusions based on facts rather than opinions. (B,D,F)</li><li>Explain how political, cultural and economic factors affect the way legal institutions function. (B,C,D)</li><li>Understand basic Constitutional principles which shape and limit legal processes. (G,H)</li><li>Participate in teams to analyze various legal, social and ethical concerns that face today's society. (A,B,C,D,E,F,G,H)</li><li>Critique popularly-held notions about the structure and function of the American legal system. (A, B, C, D, E, F, G, H)</li></ol>"
  },
  {
    "Department": "Business and Computer Technology",
    "Rubric": "LEGL  ",
    "Code": 2305,
    "Title": "Law &amp; Medicine",
    "Learning_Outcomes": "<ol><li>Understand and articulate the legal concept of medical malpractice. (A,D)</li><li>Identify, obtain, organize, analyze, and summarize medical records including records protected by HIPAA. (C,D,E,F)</li><li>Identify and understand the role of health insurance companies and management groups in the provision of health care. (C,D,F)</li><li>Identify and differentiate among the governmental bodies that regulate health care in Tennessee. (A,C,D)</li><li>Demonstrate a complete and thorough understanding of legal ethics. (B)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE ",
    "Code": 1016,
    "Title": "Live Sound Production",
    "Learning_Outcomes": "<ol><li>Demonstrate an awareness of the application of the specific field of study within the local production and corporate markets and/or the global media markets. A</li><li>Exhibit knowledge of the basic preproduction and production concepts involved in the planning and production of sound reinforcement. A</li><li>Employ the concepts presented in the specialized production field covered. A, C</li><li>Complete at least one major sound production project and be able to constructively criticize the work of oneself and one’s peers. A, B</li><li>Articulate the value and application of sound reinforcement in the broader form of the media industry. A, B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE ",
    "Code": 1023,
    "Title": "Live Sound Recording",
    "Learning_Outcomes": "<ol><li>TODO</li><li></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE ",
    "Code": 1900,
    "Title": "Recording Techniques II",
    "Learning_Outcomes": "<ol><li>Duplicate best practices when recording a live event, using proper microphone selection, advanced microphone techniques, microphone placement, and all aspects of a proper recording. (A)</li><li>Employ encoding techniques in development of deliverables for multiple format distribution. (B, C)</li><li>Evaluate unknown equipment; quickly move to usability of such equipment; research complex implementation issues in pro audio for rapid response for clients. (D)</li><li>Practice and master industry standards in deliverables; learn to critique their own work. (A,B)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE ",
    "Code": 2015,
    "Title": "Pro Tools",
    "Learning_Outcomes": "<ol><li>Demonstrate an awareness of the application of audio composition for audio only and audio with image. A</li><li>Apply concepts learned to production work in other classes and in the professional field.&nbsp; A, C</li><li>Exhibit knowledge of the basic audio composition and editing concepts. A</li><li>Appreciate the use and application of the audio concepts. A, C</li><li>Complete at least one major production project and constructively criticize the work of oneself and one’s peers. A, B</li><li>Write insightful, appropriately developed answers to essay questions concerning the works studied. B, C</li><li>Articulate the value and application of audio composition to video and media production. A, B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE ",
    "Code": 2016,
    "Title": "Advanced Pro Tools",
    "Learning_Outcomes": "<ol><li>Demonstrate an awareness of the application of audio composition for audio only and audio with image. A</li><li>Apply concepts learned to production work in other classes and in the professional field. A, C</li><li>Exhibit knowledge of the advance audio composition and editing concepts. A</li><li>Appreciate the use and application of the audio concepts. A, C</li><li>Complete at least two major production project and constructively criticize the work of oneself and one’s peers. A, B</li><li>Write insightful, appropriately developed answers to essay questions concerning the works studied. B, C</li><li>Articulate the value and application of audio composition to video and media production. A, B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE ",
    "Code": 2020,
    "Title": "Production Logistics Management",
    "Learning_Outcomes": "<ol>TODO</ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE ",
    "Code": 2450,
    "Title": "Sound Design for Picture",
    "Learning_Outcomes": "<ol><li>Demonstrate an awareness of the application of the specific field of study of sound design within the picture and television markets and/or the global media markets. A</li><li>Exhibit knowledge of the basic preproduction and production concepts involved in the planning and production of sound design for film, video and television. A</li><li>Employ the concepts presented in the specialized production field covered. A, C</li><li>Complete at least one major production project and be able to constructively criticize the work of oneself and one’s peers. A, B</li><li>Articulate the value and application of sound design in the broader form of the media industry. A, B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE ",
    "Code": 2550,
    "Title": "Applied Audio Acoustics",
    "Learning_Outcomes": "<ol><li>Demonstrate an awareness of the application of the specific field of study of sound design within the picture and television markets and/or the global media markets. A</li><li>Exhibit knowledge of the basic preproduction and production concepts involved in the planning and production of sound design for film, video and television. A</li><li>Employ the concepts presented in specialized production fields. A, C</li><li>Complete at least one major production project and be able to constructively criticize the work of oneself and one’s peers. A, B</li><li>Articulate the value and application of sound design in the broader form of the media industry. A, B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE  ",
    "Code": 1015,
    "Title": "Sound Production",
    "Learning_Outcomes": "<ol><li>Demonstrate understanding of and employ established procedures for responsible care, handling, and use of all equipment. A, B, C, D, E</li><li>Observe and employ correct procedures for checking out equipment. This includes both VPT equipment and that which is NOT normally part of the VPT program. A, B, C, D, E</li><li>Understand the basics of sound transmission, hearing, and acoustics and apply that in work. A, B, C, D, E</li><li>Perform basic audio recording on both analog and digital devices (video decks as well as audio only recorders). Skills will include tone calibration, level setting, and tape handling. Technical topics covered will include the recording mechanism transport components, and tape formations. A, B, C, D, E</li><li>Identify and properly handle the many signal formats and interconnections being used in the industry. A, B, C, D, E</li><li>Identify, understand, and properly use the many types of industry standard microphones and mic accessories available. This includes stereo and multiple miking techniques. A, B, C, D, E</li><li>Employ proper microphone boom technique in recording audio for video. A, B, C, D, E</li><li>Understand audio mixing basics (the concepts of gain structure and signal flow), and apply that knowledge with both small location mixers as well as large multi-channel studio consoles. A, B, C, D, E</li><li>Identify, understand and properly use the many standard signal processing devices. This includes but is not limited to compressors, equalizers, reverberators, delay lines, limiters, and noise gates. A, B, C, D, E</li><li>Perform basic editing functions with both analog and digital devices. A, B, C, D, E Understand the techniques use in multi-track audio production. This includes the standard music production process of tracking, overdubbing, and mixing. A, B, C, D, E</li><li>Understand the techniques used in live audio presentations. Concepts include stage monitoring, feedback control, and live music production. A, B, C, D, E</li><li>Perform basic maintenance tasks such as cable construction, tape head cleaning and demagnetizing, and simple equipment troubleshooting. A, B, C, D, E</li><li>Understand the basics of digital audio. This includes the subjects of sample rate conversion and PC based (or proprietary) digital audio workstations, DAW. A, B, C, D, E</li><li>Perform the basic tasks involved in audio sweetening for video. Concepts include machine synchronization, automated mixing, and multi-channel encoding. A, B, C, D, E</li><li>Use standard and individually developed techniques to construct creative, compelling, and technically consistent audio programs. A, B, C, D, E</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE  ",
    "Code": 1080,
    "Title": "Audio Processing &amp; Ear Training",
    "Learning_Outcomes": "<ol><li>Demonstrate effective use of audio processors, both analog and digital, in widely varying applications. (A, B, C)</li><li>Repeatedly identify frequency ranges and dynamic contrasts in order to select the appropriate processor for a given application. (A, B, C)</li><li>Differentiate between tools for proper selection based on several criteria, including latency, bandwidth, flexibility, and repeatability. (A, B, C)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE  ",
    "Code": 1090,
    "Title": "Dialogue Editing &amp; Post Production",
    "Learning_Outcomes": "<ol><li>Demonstrate proficiency of editing and repair of dialogue. (A, D) *</li><li>Demonstrate proficiency in organizing elements of a production in preparation for final mix. (A, B)</li><li>Produce sweetened audio productions, including projects and possible outside projects. (C).</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE  ",
    "Code": 1400,
    "Title": "Recording Techniques I",
    "Learning_Outcomes": "<ol><li>Duplicate best practices when recording, using proper microphone selection and placement, and all aspects of a proper recording.</li><li>Employ techniques with surety in selecting all aspects of a recording session, including equipment, signal path, file format, and archiving.</li><li>Practice industry standards in numerous aspects of recording and mixing, adapt to existing resources, and self-critique their work.</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE  ",
    "Code": 2000,
    "Title": "Emerging Trends in Audio Production Engineering",
    "Learning_Outcomes": "<ol><li>Demonstrate an awareness of the application of the specific field of study within the local audio markets and/or the global media markets. A</li><li>Apply concepts learned to production work in other classes and in the professional field. A, C</li><li>Exhibit knowledge of the basic production concepts, which are enhanced by the subspecialty of the course curriculum. A</li><li>Appreciate the use and application of the concepts presented in the specialized production field covered. A, C</li><li>Complete at least one major production project and be able to constructively criticize the work of oneself and one’s peers. A, B</li><li>Write insightful, appropriately developed answers to essay questions concerning the works studied. B, C</li><li>Articulate the value and application of the sub-specialty to the broader form of media production. A, B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE  ",
    "Code": 2910,
    "Title": "Audio Production Technology Capstone",
    "Learning_Outcomes": "<ol><li>Prepare a comprehensive written report based on individual and/or collaborative effort. (A)</li><li>Prepare an oral presentation using PowerPoint or other multi-media through individual and/or collaborative effort.&nbsp; (A, D)</li><li>Utilize industry standard documents and industry contacts to plan, develop, and execute the capstone project. (D)</li><li>Create, propose, develop, and produce the final project. (B, C)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE   ",
    "Code": 1042,
    "Title": "History of Sound Production",
    "Learning_Outcomes": "<ol><li>Demonstrate an awareness of the influences of sound throughout recorded history. A, B, C</li><li>Exhibit knowledge of the basic concepts of sound perception, reproduction and production. A, C</li><li>Employ the studied concepts, topics and discussions presented. A, B, C.</li><li>Complete one major case study, group project and critique work of oneself and one’s peers. A, B, C</li><li>Articulate the value and application of the study of sound in the broader form in the context of culture and mass media. A, B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "APE    ",
    "Code": 2091,
    "Title": "Music Editing &amp; Sound Design",
    "Learning_Outcomes": "<ol><li>Edit music to fit an existing application, such as a timeline in video, for effective support of the video content, in partial fulfillment of sweetening the audio track. (A)</li><li>Define and list procedures of how to use music and sound effects libraries, royalty-free and licensed music and sound effects, protect original work. (D)</li><li>Classify a project by identifying difficulty levels in specific sections in order to develop a complete plan, including evaluating trouble spots in audio, determining a way forward toward completion of the audio sweetening process. (B)</li><li>Create or modify existing and original works using interdisciplinary opportunities in order to yield excellent media pieces for use in their portfolio as an ongoing practice throughout their career. (C) <br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET ",
    "Code": 1022,
    "Title": "Construction Materials W/Lab",
    "Learning_Outcomes": "<ol><li><div>Explain the basic properties of materials: thermal expansion and conductivity, stress and strain, elastic and plastic properties, modulus of elasticity, and specific gravity. A, B</div></li><li><div>Explain the basic production processes for selected construction materials. B, C<br></div></li><li><div>Explain the use and properties of aggregates in construction. B, C, D<br></div></li><li><div>Explain the standard laboratory tests for aggregates. B, E, F<br></div></li><li><div>Understand the manufacture, chemical composition and physical properties of Portland cement. B<br></div></li><li><div>Understand the types and applications of Portland cement. C<br></div></li><li><div>Understand proportioning concrete ingredients to meet design specifications. D<br></div></li><li><div>Understand standard tests on concrete. B, E, F<br></div></li><li><div>Understand the manufacture, and physical properties of asphalt. B<br></div></li><li><div>Name the tests conducted on asphalt. B<br></div></li><li><div>Discuss the types of road surfaces and preparation for paving with asphalt. D<br></div></li><li><div>Discuss the basic characteristics of wood and its application in construction. B, C<br></div></li><li><div>Discuss the different types of structural wood products. B, C<br></div></li><li><div>Discuss the properties and use of Masonry in construction. B, C<br></div></li><li><div>Select the appropriate ASTM procedure or other acceptable procedures to conduct material tests. E<br></div></li><li><div>Prepare written technical reports describing the test procedure, results and conclusions of a laboratory test. F<br></div></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET ",
    "Code": 1310,
    "Title": "Architectural Drawing with AutoCAD W/Lab",
    "Learning_Outcomes": "<ol><li>Produce basic drawings required for construction with AutoCAD. (A, B, C, F)</li><li>Demonstrate an understanding of the relationship of the different plan views. (A)</li><li>Demonstrate an understanding of the relationship of plans, sections, and details. (A, F)</li><li>Demonstrate an understanding of the relationship of drawings, schedules, and specifications. (A, F)</li><li>Demonstrate an understanding of the uses of building materials. (A, B, F)</li><li>Demonstrate a knowledge of standard material and equipment sizes. (A, B)</li><li>Use ANSI standards for text &amp; dimensions (A, C, D, F, G)</li><li>Use reference materials (product literature, tables, charts and example drawings). (A, D, F)</li><li>Use codes (state and local). (D, F)</li><li>Analyze and select appropriate framing members for simple buildings. (B, D,F)</li><li>Use computer to produce set of architectural drawings. (F, G)</li><li>Plot set of drawings for evaluation. (F)</li><li>Use visual hierarchy concepts and industry standards to reinforce the communication of design intent. (G)</li><li>Use computer to write reports and proposals. (E)</li><li>Complete assignments in a professional, timely manner. (F)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET ",
    "Code": 2012,
    "Title": "Cost Estimating W/Lab",
    "Learning_Outcomes": "<ol><li>Interpret various types of architectural drawings. A<br></li><li>Understand the purpose of construction specifications. A<br></li><li>Explain the specific characteristics indicated by \"plans\". A<br></li><li>Identify the specific characteristics indicated by \"elevations\". A<br></li><li>Recognize the specific characteristics indicated by \"sections\". A<br></li><li>Clarify the specific characteristics indicated by \"details\". A<br></li><li>Explain the specific characteristics indicated by \"schedules\". A<br></li><li>Perform the methods of material takeoff sequencing. B<br></li><li>Calculate material quantities. C<br></li><li>Identify basic categories of material prices. D<br></li><li>Explain the factors affecting labor wages. D<br></li><li>Identify the types of overhead expenses. E<br></li><li>Calculate equipment depreciation costs. E<br></li><li>Identify the means of calculating rental equipment costs. E<br></li><li>Present construction material and processes data in the proper \"CSI\" format. A, B<br></li><li>Takeoff material quantities in the proper sequence. C<br></li><li>Accurately calculate material quantities. C<br></li><li>Properly calculate labor hours and price. D<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET ",
    "Code": 2070,
    "Title": "Civil Engineering Special Topics",
    "Learning_Outcomes": "<ol><li><div>Discuss basic and advanced facts associated with the selected topic. A, B, C, D</div></li><li><div>Employ critical thinking skills to solve problems. A, B, C, D</div></li><li><div>Perform independent research using published references, laboratory testing and mathematical analysis. A, B, C, D<br></div></li><li><div>Identify, explain, and apply civil engineering technology design concepts. A, B, C, D<br></div></li><li><div>Demonstrate the ability to integrate the course information into related projects. A, B, C, D<br></div></li><li><div>Communicate their findings through oral and written reports. A, B, C, D<br></div></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET ",
    "Code": 2112,
    "Title": "Soil Mechanics W/Lab",
    "Learning_Outcomes": "<ol><li><div>Determine the different phases of a soil.&nbsp; A<br></div></li><li><div>Determine the void ratio and porosity of a dry two-phase soil.&nbsp; A<br></div></li><li><div>Determine the significance of unit weight, specific gravity and water content.&nbsp; A, B<br></div></li><li><div>Determine the significance of the degree of saturation of a soil mass.&nbsp; A, B<br></div></li><li><div>Describe the Interrelationship of soil mass properties.&nbsp; A<br></div></li><li><div>Determine the importance of Grain Size Distribution.&nbsp; A, B<br></div></li><li><div>Determine the importance of Liquid, Plastic and Shrinkage Limits.&nbsp; A, B<br></div></li><li><div>Determine the importance of soil compaction. A, B, E<br></div></li><li><div>Determine the importance of Permeability.&nbsp; A, B<br></div></li><li><div>Determine the importance of Direct Shear.&nbsp; A, C, D<br></div></li><li><div>Determine the engineering classification of soil by the major classification systems.&nbsp; A, B, C<br></div></li><li><div>Calculate the total stress, effective stress and hydraulic stress.&nbsp; A, C, D, E<br></div></li><li><div>Calculate the stresses on a soil mass using Mohr's Circle.&nbsp; A, C, D, F, G<br></div></li><li><div>Apply Coulomb's Law.&nbsp; A, C, D, F, G<br></div></li><li><div>Calculate the settlement due to loads on cohesive and cohesionless soils.&nbsp; A, C, D, E<br></div></li><li><div>Prepare reports to meet professional standards.&nbsp; F, G<br></div></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET ",
    "Code": 2310,
    "Title": "Mechanical &amp; Electrical Systems W/Lab",
    "Learning_Outcomes": "<ol><li><div>Explain the concept of fluid flow. A, B, C, g<br></div></li><li><div>Identify and apply the codes governing building plumbing and air distribution systems.&nbsp; A, B, C, D, E, G<br></div></li><li><div>Apply appropriate terminology. A - G<br></div></li><li><div>Explain the criteria involved in fluid flow.&nbsp; A, B, C, G<br></div></li><li><div>Explain the relationship between pipe size, fluid velocity, flow rate, and pressure.&nbsp; A, B, C, G<br></div></li><li><div>Explain the concept of fluid flow continuity. A, B, C, G<br></div></li><li><div>Identify and describe the basic materials used in plumbing, and the characteristics of each. B<br></div></li><li><div>Identify and describe the basic types of valves and the characteristics of each. B<br></div></li><li><div>Apply the concept of fixture units as units of flow rate. A, C, G<br></div></li><li><div>Design a water distribution system using appropriate charts and tables in the design calculations. A, B, C, G<br></div></li><li><div>Identify the unique problems involving high-rise distribution systems.&nbsp; A, B, G<br></div></li><li><div>Identify the plumbing requirements of a fire sprinkler system. A, B, F, G<br></div></li><li><div>Design a fire sprinkler system using appropriate charts and tables in the design calculations. A, B, F, G<br></div></li><li><div>Describe the types of closed air conditioning distribution systems and the characteristics of each. E<br></div></li><li><div>Describe the types of open air conditioning distribution systems and the characteristics of each. D<br></div></li><li><div>Describe the basic components of a passive solar heating and cooling system. D<br></div></li><li><div>Design a solar heating system. D, G<br></div></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET ",
    "Code": 2515,
    "Title": "Advanced Surveying W/Lab",
    "Learning_Outcomes": "<ol><li>Accurately calculate latitudes, departures and areas of traverses.&nbsp; A, C</li><li>Adjust Lat. and Dep. by the compass or transit rule. A, C</li><li>Compute traverse areas by one or more methods. A, C</li><li>Utilize computer software to complete Traverse Calculations.&nbsp; A, C, D</li><li>Collect and Convert appropriate field data into topographic maps.&nbsp; A, B, C, D</li><li>Utilize computer software to draw topographic maps.&nbsp;&nbsp; B, C, D</li><li>Accurately compute earthwork volumes. A, C</li><li>Compute and stake out a horizontal and vertical curve.&nbsp;&nbsp;&nbsp; A, B, C, D</li><li>Utilize computer software to upload stakeout data.&nbsp; A, B, C, D</li><li>Compute and stake out slope and grade stakes. A, B, C, D</li><li>Determine true North from Astronomical observations. A, C</li><li>Properly select the equipment, plan the survey and obtain the necessary field data for traverses, profiles, cross sections and mapping. A, C</li><li>Properly select the equipment, plan the survey and obtain the necessary field data for construction site layout. A, C</li><li>Survey a traverse with a closure &gt; 1/7500. &nbsp;&nbsp;&nbsp;&nbsp; A, B, C, E</li><li>Demonstrate proficiency and knowledge in the use of a total station.&nbsp; D</li><li>Demonstrate proficiency and knowledge in the use of a data collector.&nbsp; D</li><li>Demonstrate ability to upload/download survey data from computer software to data collector.&nbsp; C, D</li><li>Demonstrate ability to complete standard drawings on the computer.&nbsp; C, D</li><li>Demonstrate knowledge in the use of AUTOdesk software.&nbsp; C, D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET ",
    "Code": 2560,
    "Title": "Architectural 3D Modeling W/Lab",
    "Learning_Outcomes": "<ol><li>Demonstrate competence in applications of spherical trigonometry to calculate Spherical coordinates &nbsp;&nbsp; A, B, C<br></li><li>Perform accurate azimuth calculations.&nbsp;&nbsp; A, B, C, D, E<br></li><li>Convert plane coordinates to map projections.&nbsp;&nbsp; A, B, C<br></li><li>Calculate control coordinates using triangulation.&nbsp;&nbsp; A, B<br></li><li>Determine true north by observing the sun and Polaris.&nbsp; A, B, D<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET  ",
    "Code": 1250,
    "Title": "Fundamentals of Building Systems &amp; Materials",
    "Learning_Outcomes": "<ol><li>List building site design factors. A, B,C, G<br></li><li>List different types of architectural drawings. A, B, C, G<br></li><li>Describe the basic building elements and types of loading. A, B, C, G<br></li><li>Identify the stresses which occur in simple beams and columns. A, B, C, G<br></li><li>List the methods of subsurface exploration along with their limitations. A, B, C, G<br></li><li>Identify foundation design factors. A, B, C, F, G<br></li><li>List the components of basic foundation systems. A, B, C, F, G<br></li><li>List the characteristics of basic foundation systems. A, B, C, F, G<br></li><li>List the primary wood frame floor system design factors. D, F, G<br></li><li>Identify basic wood frame floor system components. D, F, G</li><li>List the characteristics of basic wood frame floor system types. D, F, G<br></li><li>Identify the primary wood frame wall system design factors. D, F, G<br></li><li>List the basic wood frame wall system components. D, F, G</li><li>List the characteristics of basic wood frame wall system types. D, F, G<br></li><li>Identify the primary wood frame roof system design factors. D, F, G<br></li><li>List the basic wood frame roof system components. D, F, G<br></li><li>List the characteristics of basic wood frame roof system types. D, F, G<br></li><li>Identify the primary commercial floor system design factors. E, G<br></li><li>List the basic commercial floor system components. E, G<br></li><li>List the characteristics of basic commercial floor system types. E, G<br></li><li>Identify the primary steel frame system design factors. E, G<br></li><li>List the basic steel frame system components. E, G<br></li><li>List the characteristics of basic steel frame system types. E, G<br></li><li>Identify the primary formwork system design factors. E, G<br></li><li>List the basic formwork system components. E, G<br></li><li>Identify the primary reinforced concrete frame system design factors. E, G<br></li><li>List the basic reinforced concrete frame system components. E, G<br></li><li>List the characteristics of basic reinforced concrete frame system types. E, G<br></li><li>Identify the primary commercial roof system design factors. E, G<br></li><li>List the basic commercial roof system components. E, G<br></li><li>List the characteristics of basic commercial roof system types. E, G<br></li><li>List the characteristics of basic types of commercial roofing systems. E, G<br></li><li>Prepare oral and written reports describing different building techniques and procedures used in the construction industry. G, H<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET  ",
    "Code": 2080,
    "Title": "Fundamentals of Building Information Modeling",
    "Learning_Outcomes": "<ol><li>Move around confidently within the BIM environment. A, B, C, D<br></li><li>Use existing families and create new ones.&nbsp; A, B, D<br></li><li>Design and modify building envelope and curtain wall systems. A, B, C, D<br></li><li>Use BIM design options tools to create shape volumes that respond to design assignments and Create multiple design option variations using design options tool. A, B, C, D<br></li><li>Create details, views and schedules. A, B, C, D<br></li><li>Effectively render a BIM model. A, B, C, D</li><li>Create design options to consider and evaluate alternative design strategies. A, B, C, D<br></li><li>Cover file management, Environment settings, file templates, etc. A, B, C, D<br></li><li>Introduce techniques for creating and adapting components to model fixtures, fittings, and furniture. A, B, C, D<br></li><li>Explore the tools available to create several types of common project views and specify the information that appears in them. A, B, C, D<br></li><li>Explore how to adjust the appearance of the building model elements that appear in their 2D and 3D views. A, B, C<br></li><li>Add details and annotations to model views to create detail views that can be used in construction documents. A, B, D<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET  ",
    "Code": 2081,
    "Title": "Advanced Building Information Modeling",
    "Learning_Outcomes": "<ol><li>Move around confidently within the BIM environment. (A, B, C, D)</li><li><div>Create building concepts that incorporate good passive solar design. (A, B, C, D, E)</div></li><li><div>Examine the impact of a building’s material properties on energy consumption. Choosing materials that minimize the energy consumed is an essential step in green building design. (A, B, C, D, E, F, G)<br></div></li><li><div>Estimate the amount of water a building’s users and fixtures will consume and the percentage of this water demand that can be met sustainably by collecting rainwater. (A, B, C, D, E, F,)<br></div></li><li><div>Evaluate the amount of energy used in a building and the amount of renewable power that can be generated on-site using photovoltaic (PV) panels on its roof (or in other locations onsite). (A, B, C, D, E, F, G)<br></div></li><li><div>Evaluate effective day lighting strategies. (1, 2, 3, 4, 5, 6, 7)</div></li><li><div>Structural and mechanical systems integration and interference checking. (A, B, C, D, E, F, G)</div></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET  ",
    "Code": 2501,
    "Title": "Introduction to Sustainability",
    "Learning_Outcomes": "<ol><li><div>Understand approaches required to lower dependency on depleting non-renewable resources. A, B, C, D<br></div></li><li><div>Exhibit basic knowledge of sustainable building systems.&nbsp; A, B, C<br></div></li><li><div>Understand the broad concepts of sustainability. A, B, C<br></div></li><li><div>Develop their ability to integrate B and C into future projects A, B, C<br></div></li><li><div>Extrapolate lessons learned from the class and apply to building, community and development planning.&nbsp; A, B, C, D, E<br></div></li><li><div>Practice integrating academic knowledge in a real-world client specified project.&nbsp; A, B, C, D, E<br></div></li><li><div>Develop their ability to carry out a project in a collaborative environment.&nbsp;&nbsp; A, B, C, D, E<br></div></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET  ",
    "Code": 2505,
    "Title": "Sustainability in Application",
    "Learning_Outcomes": "<ol><li><div>Implement approaches required to lower dependency on depleting non-renewable resources.&nbsp;&nbsp; A, B, C, D, E<br></div></li><li><div>Demonstrate working knowledge of sustainable building systems.&nbsp; A, B, C, D, E<br></div></li><li><div>Demonstrate the integration of sustainable concepts and there appropriate application.&nbsp; A, B, C, D, E<br></div></li><li><div>Practice acquired knowledge with team based sustainable design charrettes.&nbsp; A, B, C, D, E<br></div></li><li><div>Extrapolate lessons from the class to building, community, and planning development.&nbsp; A, B, C, D, E<br></div></li><li><div>Develop your ability to carry out a project in a collaborative, academic setting.&nbsp; A, B, C, D, E<br></div></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET    ",
    "Code": 1100,
    "Title": "AutoCAD Fundamentals",
    "Learning_Outcomes": "<ol><li><div>Understand how to read and use an engineering scale. A</div></li><li><div>Demonstrate proper sketching techniques for basic drawing. A<br></div></li><li><div>Understand and demonstrate appropriate engineering lettering techniques ANSI standards. A<br></div></li><li><div>Demonstrate knowledge of lettering/text standards used by engineering disciplines. A<br></div></li><li><div>Be familiar with and use geometric construction. A, B<br></div></li><li><div>Be able to perform basic geometric constructions bisectors, perpendicular lines, tangents, etc. B<br></div></li><li><div>Know terminology of geometry angles, triangles, polygons, etc. B<br></div></li><li><div>Identify alphabet of lines used in engineering drawings. E<br></div></li><li><div>Understand proper methods of orthographic projection to develop 2 or 3 views of a part. A, C<br></div></li><li><div>Demonstrate proper spacing and placement of views. A, C<br></div></li><li><div>Know fundamental ANSI standards for dimensioning. C<br></div></li><li><div>Exhibit correct location of holes in circular views. A<br></div></li><li><div>Develop isometric drawings of parts that include regular, inclined, and curved surfaces. A<br></div></li><li><div>Understand and correctly present sectional views. A<br></div></li><li><div>Demonstrate proper use of a cutting plane line. A<br></div></li><li><div>Develop section drawings. A, B<br></div></li><li><div>Develop an auxiliary drawings. A, B<br></div></li><li><div>Understand the CAD system as a drafting tool. D<br></div></li><li><div>Dimension a drawing using CAD software. C, D<br></div></li><li><div>Place text using CAD software. C, D<br></div></li><li><div>Use layering concepts to organize graphic elements using CAD software. D<br></div></li><li><div>Produce plots from CAD software. D<br></div></li><li><div>Produce accurate drawings using CAD software. D<br></div></li><li><div>Produce a CAD drawing with professional quality graphic standards. D<br></div></li><li><div>Produce a 3D model of simple machine part. F</div></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET     ",
    "Code": 1550,
    "Title": "Surveying Principles W/Lab",
    "Learning_Outcomes": "<ol><li>Differentiate between accuracy and precision.&nbsp;&nbsp; A<br></li><li>Calculate the accuracy of field measurements.&nbsp; A, C<br></li><li>Calculate the precision of field measurements. A, C<br></li><li>Identify systematic errors for each type of equipment. A<br></li><li>Identify accidental errors for each type of equipment. A<br></li><li>Identify common human errors and how to avoid them. A<br></li><li>Properly record all field data.&nbsp; B, C<br></li><li>Measure horizontal distances, within acceptable limits of precision, by pacing, use of steel tape, and use of a total station.&nbsp;&nbsp; A, B, C, D, E<br></li><li>Calculate the appropriate corrections for measurements made with a steel tape. A, C<br></li><li>Measure vertical distances, within acceptable limits of precision, by differential leveling with a hand level, dumpy level and an automatic level.&nbsp; A, B, C, D, E<br></li><li>Measure vertical and horizontal angles, within acceptable limits of precision, using a transit, theodolite and a total station. A, B, C, D, E<br></li><li>Precisely measure a traverse. &nbsp; A, B, C, D, E<br></li><li>Accurately calculate latitudes, departures and areas of traverses.&nbsp; A, C, F<br></li><li>Adjust latitudes and departures by a compass or transit rule. A, C, F<br></li><li>Compute traverse areas by more than one method. A, C, F<br></li><li>Precisely measure and draw a profile. A, C, F<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CET       ",
    "Code": 2260,
    "Title": "Civil 3D Land Development Concepts",
    "Learning_Outcomes": "<ol><li>Employ efficient methods for street and parcel layouts.&nbsp;&nbsp;&nbsp; A, C, D<br></li><li>Employ good lot design.&nbsp; A, B<br></li><li>Create horizontal curves.&nbsp; C<br></li><li>Create vertical curves.&nbsp; C<br></li><li>Understand the function of each part of a storm water storage and control structures.&nbsp; B<br></li><li>Understand the layout and design of an urban storm drainage system. B, D<br></li><li>Create a storm sewer piping system, both plan and profile.&nbsp; B, D<br></li><li>Create a detention basin. B, G<br></li><li>Create road profiles and cross sections. D<br></li><li>Determine earth volumes. D, G<br></li><li>Work effectively in a team environment.&nbsp;&nbsp; E, F<br></li><li>Utilize effective oral, written and graphic communication skills.&nbsp; E, F<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CGT ",
    "Code": 1911,
    "Title": "Portfolio",
    "Learning_Outcomes": "<ol><li>Complete a written self-evaluation Portfolio Review form. B,D</li><li>Participate in group peer critiques, applying objective design evaluation criteria as a basis for identifying portfolio strengths and weaknesses. C,D</li><li>Review optional portfolio formats as a prelude to the development of their individual design portfolio. B,D</li><li>Present their design portfolios to a professional jury using standard visual / verbal formats. A,B,C,D</li><li>Organize and format a professional portfolio of personal design work. A,B,C</li><li>Understand the performance expectations for a successful portfolio review. A,B,C,D</li><li>Precisely, accurately articulate design evaluation in both oral and written formats. B,C,D</li><li>Demonstrate through portfolio:<ul><li>basic drawing skills, hand / eye coordination sufficient for advancement to second-year CGT course work. A,C,D</li><li>an understanding of the fundamentals of color theory and the elements and principles of foundation design. A,C,D</li><li>a level of craftsmanship sufficient for advancement to CGT course work. A,C,D</li><li>a level of computer skills sufficient for advancement to CGT course work. A,C,D</li><li>design skills; i.e., layout, integration of typography, photography, illustration, applied color, visual hierarchy, spatial organization sufficient for advancement to CGT course work. A,C,D</li><li>conceptual problem-solving skills sufficient for advancement to second-year CGT course work. A,C,D</li></ul></li><li>Demonstrate through presentation a commitment to excellence sufficient for success in the graphic design field. A,B,C,D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CGT ",
    "Code": 2005,
    "Title": "Digital Graphic Design II",
    "Learning_Outcomes": "<ol><li>Conduct basic research as the basis for creative problem solving. A,B,C,F</li><li>Create an advertising campaign as a member of a creative team, incorporating print, outdoor, direct mail and related media. A,B,C,D,E,F</li><li>Work with digital technology in creating portfolio pieces. A,B,C,D,E,F</li><li>Become familiar with the organizational structure, the ethical responsibilities, and the social context of the advertising agency as a distinct entity within the visual communications industry. A,B,C</li><li>Write advertising copy, both headlines and text, directed to a specific target audience. A,B,C,D,F</li><li>Present a professional advertising portfolio in a job interview. D,E,F</li><li>Successfully formulate creative strategies for advertising concepts. A,B,C,D,E,F</li><li>Make effective oral and written presentations of advertising concepts. A,C,D,E</li><li>Work in a team concept and adapt to changing project parameters. B,D,F</li><li>Work in teams to develop their interpersonal and conflict resolution skills. B,D,F</li><li>Apply formal copy formats to advertising concepts. B,C,D,E</li><li>Art direct advertising campaigns using both traditional and experimental layout formats as a foundation for design. A,B,D,E</li><li>Develop enhanced skills in art direction to assure an entry-level standard for visibility, interest, promise and simplicity in their projects. A,B,D,E</li><li>Critically analyze advertising using objective evaluation criteria. B,D,E,F</li><li>Complete a personal portfolio evaluation in anticipation of final refinement for graduation. A,B,D,E</li><li>Demonstrate enhanced problem-solving skills and techniques for conceptualizing and designing for advertising. A,B,C,D,E</li><li>Prepare a job resume and cover letter. A,B,D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "CGT ",
    "Code": 2105,
    "Title": "Digital Graphic Design III",
    "Learning_Outcomes": "<ol><li>Present an entry-level professional portfolio of personal works at the annual CGT Student Showcase. A,B,C,D,E,F,G</li><li>Work individually and in a team concept to complete projects in an efficient time frame. A,B,C,D,E,F,G</li><li>Make effective oral and written presentations of individual and group design projects. C,D,E,F,G</li><li>Adapt to changing project parameters. B,C,E,F,G</li><li>Demonstrate efficient design management skills by maintaining a project time log. B,E,F,G</li><li>Demonstrate mastery of digital media in the development of finished art. A,B,D,E,G</li><li>Critically analyze graphic design using objective evaluation criteria in peer group critiques. A,B,C,D,E,F,G</li><li>Successfully complete the CGT Exit Exam demonstrating mastery of CGT concepts and techniques essential for obtaining an entry-level position in industry. A,B,D,E,F,G</li><li>Conduct basic research as the basis for creative problem solving. B,F,G</li><li>Design a Self-Promotion direct mailer, to include a current resume and cover letter. A,D,F,G</li><li>Review the ethical responsibilities and the social context of the graphic designer as an integral member of the visual communications industry. A,C,D,E,F,G</li><li>Review formats and complete the process of organizing their professional “exit” portfolio using digital technology. A,D,F,G</li><li>Keep a time sheet/log and provide weekly updates to the class on their project development. B,E,F,G</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "DWP ",
    "Code": 1010,
    "Title": "Design Basics for Web &amp; Print",
    "Learning_Outcomes": "<ol><li>Write explanations of the principles of design as they apply to print and web. A</li><li>Use appropriate terminology to identify and discuss design elements and principles. A,B,C,E</li><li>Identify appropriately prepared media for use in print and on web sites. A,B,C,E</li><li>Select software appropriate for preparing media for use in print and on web sites. G</li><li>Locate and/or install software used to prepare media for print and web. G</li><li>Perform all technical aspects of designing, planning, selecting and editing files for use in print and on web sites. G</li><li>Effectively use time management principles for their projects and assignments.</li><li>Contribute to class discussion and project critiques and use the appropriate terminology to describe and evaluate designs, procedures, software and delivery formats. B,F</li><li>Use tools of the Internet to communicate, manage, produce and work with others. B,D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "DWP ",
    "Code": 1020,
    "Title": "Web &amp; Print Typography",
    "Learning_Outcomes": "<ol><li>Demonstrate an understanding of the basic terminology of typography and the historical origins of typographical terms and concepts. (A, B, G)</li><li>Identify classic and contemporary typefaces and their use by modern designers. (A, F, G)</li><li>Analyze a letterform, identifying its distinctive features and anatomical elements. (A, G)</li><li>Demonstrate a basic proficiency in identifying and classifying type by looking for the main features in a typeface. (A, G)</li><li>Identify key differences between print and Web typography. (C, D, E, G)</li><li>Apply best practices for CSS font stacks and Web font options, including use of @font-face and Typekit.(D, E, F)</li><li>Analyze how font size, measure, and line height affect readability on the screen. (C, D, G)</li><li>Design simple and complex visual rhythms for text layout.( A ,B,C, D, G)</li><li>Enhance Web text and retain viewer attention with proper HTML5 semantics and CSS3 effects. (C, D, E)</li><li>Use type categories and characteristics to select typefaces and structure text on a page. (A, B, E, F, G)</li><li>Select and manipulate type to depict a concept or mood. (B)</li><li>Demonstrate an understanding of the applications of display typography and expressive applications of typography in print and on screen. (C, D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "DWP ",
    "Code": 1030,
    "Title": "Photoshop for Web &amp; Print",
    "Learning_Outcomes": "<ol><li>Demonstrate use of the principle concepts of image editing and compositing for use in both print and web environments. A</li><li>Use appropriate terminology to identify and discuss media types and delivery systems and processes. A,B, E</li><li>Identify appropriately prepared media for use in web sites. A,B,C,E</li><li>Utilize the software appropriately in preparing image resolutions, formats and color spaces for web and print applications. B,C</li><li>Perform all technical aspects of designing, planning, selecting, editing and converting files for web and print applications. A,B,C,D,F</li><li>Contribute to class discussion and project critiques and use the appropriate terminology to describe and evaluate media, procedures, equipment and software. A,B,D</li><li>Display proper knowledge of ownership of intellectual property as well as the recognition and usages of trademark and copyright symbols. G</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "DWP ",
    "Code": 2050,
    "Title": "Special Projects",
    "Learning_Outcomes": "<ol><li>Discuss basic and advanced facts associated with the selected topic. A, B, C, D</li><li>Discuss implications for society based on information regarding the selected topic. A, B, C, D</li><li>Discuss implications for the future based on information regarding the selected topic. A, B, C, D</li><li>Understand the manner in which the special topic fits into the overall picture of the program of study. A, B, C, D</li><li>Discuss (depending on the course) appropriate technologies. A, B, C, D Use (depending on the course) appropriate technologies. A, B, C, D </li><li>Demonstrate the ability to integrate the course information into related projects. A, B, C, D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "DWP ",
    "Code": 2400,
    "Title": "InDesign for Web &amp; Print",
    "Learning_Outcomes": "<ol><li>Demonstrate how to set up documents for print and online view. (A, B, C, D)</li><li>Apply Master pages, paragraph, and character style to work efficiently in InDesign. (A, B, D)</li><li>Create appropriate color settings for print as well as online. (A, B, C, D)</li><li>Create tables and apply styles to customize tables for long documents. Use a table of contents to index the document for online preview. (A, B, C, D)</li><li>Employ interactive tools with new set of workspaces to apply new features to existing documents. (A, B, C, D)</li><li>Perform all technical aspects of designing, planning, selecting, editing, and preparing work for preflight. (A, B, C, D)</li><li>Contribute to class discussion and project critiques and use the appropriate terminology. (B)</li><li>Prepare an online portfolio using skills learned in the course. (A, B, C, D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "DWP ",
    "Code": 2500,
    "Title": "Content Management Systems using WordPress",
    "Learning_Outcomes": "<ol><li>Demonstrate proficiency in the use of WordPress. (A, B)</li><li>Demonstrate proficiency in writing external and internal links in WordPress. (B, C)</li><li>Apply contents, modules, and templates. (B, C, D)</li><li>Configure templates in WordPress to design a site. (B, C)</li><li>Create page breaks and make contents visible. (B, C)</li><li>Add images to content. (B, C)</li><li>Apply CSS in the layout and theme section of the site (B, C)</li><li>Implement time and project management skills. (B, D)</li><li>Actively participate in group discussions and critically assess web page design. (A, D)</li><li>Develop a functional and aesthetic web site using all the functions of WordPress. (B, C, D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "DWP ",
    "Code": 2600,
    "Title": "Illustrator for Web &amp; Print",
    "Learning_Outcomes": "<ol><li>Demonstrate use of the principle concepts of vector image creation for use in both print and web environments. A</li><li>Use appropriate terminology to identify and discuss vector file types and their uses in web and print. A, B, D</li><li>Identify appropriately prepared vector media for use in print and on web sites. A,B,C,E</li><li>Perform all technical aspects of designing, planning, selecting, editing and converting files for web and print applications. A,B,C,E</li><li>Contribute to class discussion and project critiques and use the appropriate terminology to describe and evaluate media, procedures, equipment and software. A,B,D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "DWP ",
    "Code": 2900,
    "Title": "Advanced Web Design, HTML &amp; CSS",
    "Learning_Outcomes": "<ol><li>Identify and describe the elements that make up a well-designed web page. (A,B,D,G,J,K)</li><li>Locate attractive, well-designed web pages. (A,B,H,I,J,K)</li><li>Define and apply web design principles.(A,B,F,K)</li><li>Apply color, text, and graphics to communicate and guide the reader through a site. (A,B,K)</li><li>Access, download, and/or upload files using File Transfer Protocol (FTP). (A,B,C)</li><li>Explain and apply advanced layout elements for a Web site. (A,B,F,G,H,I,K)</li><li>Define color depth and resolution. (A,B,D)</li><li>Identify and describe web accessibility issues and solutions. (A,B,E,G,H,I,K)</li><li>Demonstrate the use of CSS for page structure. (A,F,G,K)</li><li>Create and link to an external style sheet. (A,F,G,K)</li><li>Demonstrate a variety of ways to influence search engine results.(A,I,K)</li><li>Describe how screen resolution and connection speed affect the user's browsing experience. (A,B,D,G,H)</li><li>Design forms to collect data. (A,B,J)</li><li>Build a relative file structure that is portable to different web servers. (A,B,C,D,G,K)</li><li>Describe and apply navigation principles. (A,B,H)</li><li>Demonstrate how to take a Web page design concept to HTML code. (A,D,G)</li><li>Develop and articulate a plan for usability testing and user feedback. (A,B,D,F,G,H,I,K)</li><li>Design and develop a Website which is aesthetically pleasing, usable, and which meets accessibility standards. (K)</li><li>Publish a web site. (C,I,K)</li><li>Develop a plan for ongoing site maintenance and updates. (A,B,C,E,H,I,J,K)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "DWP ",
    "Code": 2950,
    "Title": "e-Portfolio",
    "Learning_Outcomes": "<ol><li>Include research, personal style, career aspirations, and professional skill sets into a portfolio site plan. (A, B, C, D)</li><li>Apply best practice guidelines for layout, navigation, content selection, HTML and CSS coding, and file structure as they apply to portfolio Web sites. (A, D)</li><li>Select portfolio work samples that reflect the goals of the designer and the portfolio site.(A, B, C)</li><li>Categorize work samples effectively and apply navigation that allows for easy viewing of work samples. (A, D)</li><li>Write effective supporting text to accompany portfolio work samples.(A, C)</li><li>Create visual comps and polished drafts that guide development of the portfolio site pages. (A, B, C)</li><li>Apply basic techniques for polishing site content and planning for future site expansion. (A, D)</li><li>Apply basic search engine optimization and tracking techniques to build and improve site traffic. (D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ECE ",
    "Code": 2010,
    "Title": "Circuits I ★",
    "Learning_Outcomes": "<ol><li>Itemize the basic units and derived units of the International System of Units which are of interest to circuit analysts. A</li><li>Define the unit of charge and understand the basic concepts of voltage, current, and power. A</li><li>Contrast the types of circuits and circuit elements such as resistors, capacitors, and inductors. A</li><li>Apply Ohm's law and use it in circuit analysis. B,C,D</li><li>Apply Kirchhoff's voltage and current laws in circuit analysis. B,C,D</li><li>Demonstrate the technique of analyzing a single-loop circuit and the single-node circuit. B</li><li>Calculate equivalent sources and resistances using the technique of resistance and source combination. B,C,D</li><li>Demonstrate voltage and current division. B,C,D</li><li>Identify symbols for circuit elements and write equations which describe circuit behavior. A,B,C,D</li><li>Understand and apply nodal analysis and mesh analysis to analyze circuits. B,C,D</li><li>Demonstrate source transformations in circuit analysis. B,C,D</li><li>Comprehend and use the concepts of linearity and superposition in circuit analysis. B,C,D</li><li>Understand and apply Thevenin's and Norton's theorems in circuit analysis. B,C,D</li><li>Describe trees and general nodal analysis, and links and loop analysis, and be able to use these in circuit analysis. B,C,D</li><li>Define the characteristics of the inductor and capacitor and the relationships of inductor and capacitor combinations. A,B</li><li>Describe the concepts of duality and linearity, and the consequences of linearity, and apply these concepts in problem solving. B,C,D</li><li>Recognize simple and general source-free RL and RC circuits and be able to apply analytical techniques to describe their behavior. B</li><li>Indicate the properties of the exponential response in RL and RC circuits. B,D</li><li>Describe the natural and forced responses and be able to quantify the behavior of RL and RC circuits driven by the unit-step forcing function. B,D</li><li>Apply analytical techniques to quantifying the behavior of source-free series and parallel RLC circuits. B,D</li><li>Distinguish between the concepts of over damped, critically damped, and under damped RLC circuits, and be able to analyze these circuits. B,C,D</li><li>Find the complete response of an RLC circuit. B,C,D</li><li>List the characteristics of sinusoids, and be able to calculate the forced response of circuits to sinusoidal forcing functions. B,C,D</li><li>Describe and apply the concepts of the complex forcing function, the phasor, and phasor relationships for R, L, and C. B,C,D</li><li>Define impedance and admittance and their role in circuit analysis. A,B,C,D</li><li>Describe and use the following in the determination of the sinusoidal steady-state response of circuits: nodal, mesh, and loop analysis; superposition, source transformations, and Thevenin's and Norton's theorems; and phasor diagrams. C</li><li>Describe and calculate the sinusoidal steady-state response of circuits as a function of radian frequency. C</li><li>Describe and calculate the sinusoidal steady-state response of circuits as a function of radian frequency. C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ECE ",
    "Code": 2020,
    "Title": "Circuits II W/Lab ★",
    "Learning_Outcomes": "<ol><li>Compute correct circuit equations for a broad spectrum of circuits, solve circuit problems with reasonable proficiency, and understand the solutions. (A,B,C,D,E)</li><li>Defend and use the concepts of instantaneous power, average power, RMS values of voltage and current, apparent power, power factor, and complex power in circuit analysis. (A,B,C)</li><li>Analyze polyphase circuits involving three-phase wye connections and delta connections. (B,C)</li><li>Analyze single-phase three-wire circuits. (B,C)</li><li>Demonstrate use of the wattmeter for power measurement in three-phase systems. (B,C)</li><li>Describe the concept of complex frequency and apply it to circuit problem solving. (B,C,D)</li><li>Compare sinusoidal forcing functions and compute natural responses of circuits. (B,D)</li><li>Define impedance and admittance parameters and describe their relationships to the application of Kirchhoff's laws to the complex forcing functions and complex forced responses. (B,D)</li><li>Determine the frequency response of a circuit as a function of the neper frequency. (D)</li><li>Determine graphically the behavior of a circuit by use of the complex frequency plane. (B,D)</li><li>Demonstrate proficiency in the determination of the frequency response of circuits and the responses related to series resonance, parallel resonance, and other resonant forms. (B,D)</li><li>Describe magnitude and frequency scaling. (B,D)</li><li>Describe mutual inductance and energy considerations associated with magnetically coupled circuits. (A,B,C)</li><li>Describe the linear transformer and ideal transformer concepts and apply to model transformer behavior and analyze circuits involving transformers. (B,C,E)</li><li>Appraise the methods of analysis for one-port networks. (B,C,E)</li><li>Appraise methods of analysis for two-port networks. (B,C,E)</li><li>Define admittance, impedance, and hybrid parameters and use them in simplifying and systematizing linear two-port network analysis. (B,C,E)</li><li>Describe two-port networks and their use as equivalent circuits for electronic devices to facilitate circuit analysis. (B,C,E)</li><li>Define the trigonometric form of the Fourier series and defend the use of symmetry. (F)</li><li>Use the Fourier series as a tool for finding the complete response of circuits to periodic forcing functions. (B,C,F)</li><li>Determine the complex form of the Fourier series for a periodic function and appreciate its conciseness in circuit analysis. (A,F)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC ",
    "Code": 1322,
    "Title": "Electronics II",
    "Learning_Outcomes": "<p></p>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC ",
    "Code": 1331,
    "Title": "Digital Fundamentals",
    "Learning_Outcomes": "<ol><li>Identify digital devices and analog devices along with what their signal output A<br></li><li>Solve problems in conversion from one number system to another. B<br></li><li>Solve problems in addition and subtraction using any number system. B, C<br></li><li>Solve problems using 2's complement arithmetic. B<br></li><li>Solve problems converting between binary and BCD, 2's complement, ASCII, GRAY or excess 3 code. B, C<br></li><li>Sketch output waveforms for logic expressions involving all logic gates when given input waveforms. B, C, D<br></li><li>Draw the equivalent logic circuit and visa-versa when given Boolean expressions. D, E<br></li><li>Solve problems involving simplification using Boolean Algebra. D, E<br></li><li>Design and build a BCD to seven segment decoder using logic gates. D, E<br></li><li>Sketch output waveforms when given an IC adder and input waveforms.&nbsp; F<br></li><li>Sketch output waveforms when given an IC comparator and input waveforms. F<br></li><li>Sketch the output waveforms when given an IC decoder or encoder and input waveforms. G<br></li><li>Sketch the output waveforms when given an IC multiplexer or demultiplexer and input waveforms. G<br></li><li>Sketch output waveforms when given input waveforms for any type of flip-flop. H<br></li><li>Sketch output waveforms when given input waveforms for circuits involving several logic gates and IC's.&nbsp; D, E, F, G, H<br></li><li>Describe the operation and sketch appropriate waveforms when given an IC counter (Binary or BCD, synchronous or asynchronous). I<br></li><li>Design a counter. I, N<br></li><li>Describe the operation and sketch appropriate waveforms when given an IC shift register (serial or parallel). J<br></li><li>List the advantages and disadvantages of TTL vs CMOS. K<br></li><li>Program the device using appropriate software when given PLD with input and output conditions. L<br></li><li>Construct a 555 to meet specifications for a one shot. M, N<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC ",
    "Code": 2311,
    "Title": "Power Technology",
    "Learning_Outcomes": "<ol><li>Identify the components of a power system: Generation, Transmission, Distribution. A<br></li><li>Perform power system analysis using phasors. A, B<br></li><li>Identify standard industrial power system utilization voltages.&nbsp; A, B<br></li><li>Wire a transformer for wye or Delta.&nbsp; C<br></li><li>Perform industrial power calculations and interpret industrial power measurements, such as industrial power demand, power factor, reactive power, and energy.&nbsp; A, B, C<br></li><li>Calculate power, power factor, and energy. A, B<br></li><li>Explain basic motor characteristics such as torque, full load amps, locked rotor amps, and others.&nbsp; D, E<br></li><li>Perform computations using DC motor principles as applied to shunt, series, and compound motor connections.&nbsp; F, G<br></li><li>Connect an AC induction motor for operation.&nbsp;&nbsp; D, E, H<br></li><li>Verify the load characteristics of an AC induction motor.&nbsp; E<br></li><li>Apply capacitors for power factor improvement for an AC induction motor load.&nbsp; B, E, H<br></li><li>Connect a DC shunt motor for operation.&nbsp; F, G<br></li><li>Connect a DC series motor for operation.&nbsp;&nbsp; F, G<br></li><li>Connect a DC compound motor for operation.&nbsp; F, G<br></li><li>Measure the resistance of a series winding and a shunt winding.&nbsp; F, G, H<br></li><li>Construct a variety of motor control methods.&nbsp; J<br></li><li>Configure a variable speed drive for a variety of control actions. I<br></li><li>Identify some basic safety codes. L<br></li><li>Explain the basic operations of a generator. M<br></li><li>Identify alternative methods of generating power: solar, wind, etc.&nbsp; M<br></li><li>Communicate important power system principles in written or graphical form.&nbsp;&nbsp; N<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC ",
    "Code": 2316,
    "Title": "Alternative Energy",
    "Learning_Outcomes": "<ol>TODO</ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC ",
    "Code": 2331,
    "Title": "PLC I",
    "Learning_Outcomes": "<ol><li>Identify the basic components of a PLC. A<br></li><li>Develop a PLC block diagram. A<br></li><li>Explain the purpose and function of input/output assemblies, the central processor unit, Power supply, and programming device. A<br></li><li>Identify the functions of electromagnetic control relays. B<br></li><li>Identify the switches commonly found in PLC's. B<br></li><li>Describe the operation of an electromagnetic latching relay and the PLC-programmed LATCH/UNLATCH instruction. B<br></li><li>Compare sequential and combination control processes.&nbsp;&nbsp; A, B<br></li><li>Convert fundamental relay ladder diagrams to PLC logic ladder diagrams.&nbsp; B<br></li><li>Access the programming software ladder display on a PC. C<br></li><li>Enter and edit control programs using programming software on a PC. C<br></li><li>Insert rungs and element on the programming software on a PC. C<br></li><li>Copy, move, delete, and merge rungs of relay ladder logic on the programming software on PC. C<br></li><li>Test and debug programs with the programming software on a PC. C<br></li><li>Save PLC programs (generated on a PC) on disk and on disk. C<br></li><li>Document and print PLC programs using programming software on a PC.&nbsp;&nbsp; C, G<br></li><li>Integrate PLC program segments using programming software on a PC. C<br></li><li>Program motor control circuits for a PLC. C<br></li><li>Program simple counting and timing events for a PLC. C, D<br></li><li>Program a PLC to manipulate time-driven sequencer. C, D,E<br></li><li>Acquire technical information from online research. G<br></li><li>Function as an effective team member in the lab or in classroom team assignments. G<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC ",
    "Code": 2350,
    "Title": "Integrated Robotics",
    "Learning_Outcomes": "<ol><li>Power up and Jog the Robot in different modes. A, B<br></li><li>Recover from common program and robot faults.&nbsp; A, B, D, E<br></li><li>Execute production operations.&nbsp; A, B, C, D, E<br></li><li>Create, modify and execute a material handling program.&nbsp; A, B, D<br></li><li>Create and execute MACROs.&nbsp; E<br></li><li>Monitor, Force, and Simulate Input and Output Signals.&nbsp; F<br></li><li>Backup and restore individual programs and files.&nbsp; G, H<br></li><li>Recommend safety procedures to be integrated into all training exercises.&nbsp; H, I<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC ",
    "Code": 2351,
    "Title": "Data Acquisition &amp; Control",
    "Learning_Outcomes": "<ol><li>Understand the capabilities of various sensors and transducers.&nbsp;&nbsp; A<br></li><li>Understand actuators and their part in control systems.&nbsp;&nbsp; A<br></li><li>Understand the requirements of signal conditioning.&nbsp;&nbsp; B<br></li><li>Understand the necessity for shielding and grounding.&nbsp;&nbsp; B<br></li><li>Explain basic sampling theory.&nbsp;&nbsp; B<br></li><li>Explain what is meant by a virtual instrument (VI).&nbsp;&nbsp; C<br></li><li>Use LabVIEW editing techniques.&nbsp;&nbsp; C<br></li><li>Create, save and open a VI.&nbsp;&nbsp;&nbsp; C<br></li><li>Understand how to use a While Loop.&nbsp;&nbsp; D<br></li><li>Display data in waveform charts.&nbsp;&nbsp; D<br></li><li>Understand how to use a For Loop.&nbsp;&nbsp; D<br></li><li>Use shift register.&nbsp; D<br></li><li>Generate arrays.&nbsp;&nbsp; E<br></li><li>Create multiple plot graphs.&nbsp;&nbsp; E<br></li><li>Use the Bundle and Cluster functions.&nbsp;&nbsp; E<br></li><li>Create string controls and indicators.&nbsp;&nbsp; F<br></li><li>Understand file I/O operations.&nbsp;&nbsp; E<br></li><li>Use the Case Structure.&nbsp;&nbsp; G<br></li><li>Use the Sequence Structure.&nbsp;&nbsp; G<br></li><li>Write a data acquisition program to acquire data from a real system using VI instruments.&nbsp;&nbsp;&nbsp; H, J<br></li><li>Analyze and display data in a real system.&nbsp;&nbsp; H, J<br></li><li>Write a program to control instruments used to test a real system.&nbsp;&nbsp; H, I, J<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC ",
    "Code": 2361,
    "Title": "Instrumentation Technology",
    "Learning_Outcomes": "<ol><li>Define the terms: Open-loop, closed-loop, feedback, feed-forward, on-off control, proportional control, proportional-Integral control, Time-Proportioning control, batch processes, continuous process, Dynamic, Static, dead time, response time, and pure lag.&nbsp; A, C, H<br></li><li>Explain the purpose of the following circuits used in instrumentation; op-amp, Schmitt trigger, comparators, optoelectronic devices, photodiodes, phototransistors, SCRs, Triac, A/D, D/A, timing devices.&nbsp; A, B, C<br></li><li>Use a simplified block diagram of industrial control systems.&nbsp; A, F, G<br></li><li>Describe the different controller operations. (1, 4, 8)</li><li>Describe fundamentals of the following; Pressure Control, Temperature Control, Flow Control and Level Control.&nbsp; D, E, F<br></li><li>Able to recognize and draw Instrumentation Symbols.&nbsp; G<br></li><li>Explain the different industrial process techniques.&nbsp; A, D, E, F, H<br></li><li>Explain the different process control Methods.&nbsp; C<br></li><li>Perform Instrument calibrations.&nbsp; B, C, I J<br></li><li>Identify the different instrument signal types, such as 4-20mA. &nbsp; C, D, E, I<br></li><li>Identify different field contact voltages used with various instruments.&nbsp; C, D, E, I<br></li><li>Identify the difference between a transducer and transmitter. B, C, D, E, F<br></li><li>Identify the difference between digital and analog signals.&nbsp; B, C, D, E, F<br></li><li>Interpret the specifications of various instrumentation devices. B, C<br></li><li>Perform basic instrumentation calculations based on physical principles.&nbsp; B, C, D, E, J<br></li><li>Communicate instrumentation principles in written or graphical form.&nbsp; J<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC  ",
    "Code": 1321,
    "Title": "Electronics I",
    "Learning_Outcomes": "<ol><li>Identify the anode and cathode of a diode.&nbsp; A<br></li><li>Obtain the diode characteristics from a curve tracer. A, E<br></li><li>Determine the forward and reverse breakdown voltage for any diode. A, E<br></li><li>Construct a bridge rectifier circuit with filter capacitor and measure ripple.&nbsp; A, E<br></li><li>Identify a voltage multiplier and calculate frequency and voltage output.&nbsp; A<br></li><li>Identify clamper circuit and calculate voltages.&nbsp; A<br></li><li>Construct a zener regulator circuit.&nbsp; A, E<br></li><li>Explain the characteristics of a LED. G<br></li><li>Explain the operation of a photo diode. G<br></li><li>Explain the operation of an opto coupler.&nbsp; G<br></li><li>Properly take measurements using the Oscilloscope. E<br></li><li>Obtain transistor characteristics from a curve tracer.&nbsp; B, E<br></li><li>Explain the operation of the transistor as a switch.&nbsp; B<br></li><li>Connect circuits which will properly bias the transistor.&nbsp; B, E<br></li><li>Calculate and measure the DC and AC voltages present in bipolar and field-effect transistor circuits&nbsp;&nbsp; B, C, E, H<br></li><li>Perform midband analysis of single and multistage bipolar and field-effect transistor small-signal amplifiers.&nbsp; D, H<br></li><li>Explain Miller's Theorem and the use of decibels.&nbsp; B, C, E<br></li><li>Calculate the frequency response of an amplifier.&nbsp; F<br></li><li>Perform frequency response measurement techniques in the laboratory on amplifiers.&nbsp; F, H<br></li><li>Function as an effective team member in the lab or in classroom team assignments.&nbsp;&nbsp; H<br></li><li>Prepare a technical report. H<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC  ",
    "Code": 2390,
    "Title": "Capstone",
    "Learning_Outcomes": "<ol><li>Prepare a comprehensive technical report based on individual and collaborative effort. (A, C, E)</li><li>Prepare an oral presentation using Microsoft PowerPoint through individual and collaborative effort. (A, C, E)</li><li>Deliver oral presentation using proper speech techniques. (A, E)</li><li>Utilize library and internet research to plan, develop and analyze a team-based project (B-E)</li><li>Utilize and synthesize engineering technology theory, laws, procedures, techniques, and psychomotor skills learned in major discipline courses. (A, E)</li><li>Utilize and synthesize mathematical, scientific, cultural, ethical, computer, and communication skills learned in academic courses. (B, E)</li><li>Utilize computer based work-processing, spreadsheet, drawing, mathematical, and discipline related software. (C, E)</li><li>Develop, implement, analyze and complete a project in a teaming environment. (D, E)</li><li>Identify and resolve conflicts, which will decrease effectiveness in a teaming environment. (D, E)</li><li>Demonstrate the ability to function as an active and effective team member. (D, E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC  ",
    "Code": 2399,
    "Title": "Special Topics in Electrical Engineering Technology",
    "Learning_Outcomes": "<ol><li>Discuss basic and advanced facts associated with the selected topic.&nbsp; A, B, C, D<br></li><li>Discuss implications for society based on information regarding the selected topic. A, B, C, D<br></li><li>Discuss implications for the future based on information regarding the selected topic. A, B, C, D<br></li><li>Understand the manner in which the special topic fits into the overall picture of the program of study. A, B, C, D<br></li><li>Discuss (depending on the course) appropriate technologies. A, B, C, D<br></li><li>Use (depending on the course) appropriate technologies. A, B, C, D<br></li><li>Demonstrate the ability to integrate the course information into related projects. A, B, C, D<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC   ",
    "Code": 1313,
    "Title": "DC Circuits",
    "Learning_Outcomes": "<ol><li>Use scientific and engineering notation and make unit conversions. (A)</li><li>Explain the relationship between voltage, current, resistance and power. (A, B)</li><li>Calculate and measure voltage. (A, B, C)</li><li>Calculate and measure current. (A, B, C)</li><li>Calculate and measure resistance. (A, B, C)</li><li>Calculate power, energy and the cost of energy. (A, B, C)</li><li>Identify when resistors are in series, parallel or combination. (A, B, C)</li><li>Solve DC circuits using various methods of analysis. (A, B, C)</li><li>Calculate the capacitance of a parallel plate capacitor. (D)</li><li>Evaluate capacitors in parallel and series. (C, D)</li><li>Calculate capacitor voltage during charge and discharge. (C, D)</li><li>Calculate the inductance. (D)</li><li>Evaluate inductors in parallel and series. (C, D)</li><li>Calculate inductance of inductors during energizing and de-energizing transients. (C, D)</li><li>Use electrical circuit simulation software to solve DC circuit problems. (A, B, C, D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC   ",
    "Code": 1314,
    "Title": "AC Circuits",
    "Learning_Outcomes": "<ol><li>Calculate and measure frequency, period, amplitude, and RMS values. (A)</li><li>Express angular and graphic relationships for AC signals. (A)</li><li>Calculate and measure voltages and currents as functions of time for AC signals. (A)</li><li>Represent complex numbers in both rectangular and polar form. (A, B)</li><li>Calculate voltage, current and impedance using complex numbers. (A, B, C)</li><li>Calculate inductive and capacitive reactance. (A, B, C)</li><li>Analyze and calculate the power triangle of a AC circuit. (A, B, C)</li><li>Solve AC circuits using various methods of analysis. (A, B, C)</li><li>Calculate and measure series and parallel resonance. (B, C)</li><li>Analyze and measure filter circuits. (C, D)</li><li>Analyze and measure transformers. (C, E)</li><li>Analyze and measure Three-Phase systems. (C, F)</li><li>Use electrical circuit simulation software to solve AC circuit problems. (A, B, C, D, E, F)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC   ",
    "Code": 1350,
    "Title": "Electrical Technology for MET",
    "Learning_Outcomes": "<ol><li>Calculate voltage and current in AC/DC circuits through series or parallel component arrangements. (C,D)</li><li>Explain the integral operational characteristics of basic transformers, generators, and motors. (B,C,D,E,F,G)</li><li>Name three primary types of sensors and give an example for the use of each in an integrated system. (H)</li><li>Apply basic electrical safety requirements. (A,B)</li><li>Evaluate resistor color code to select correct resistor value. (B,D)</li><li>Evaluate resistance, voltage, and current using a multi-meter. (A,B)</li><li>Build DC circuits per drawing specifications. (B,C,D)</li><li>Build AC circuits per drawing specifications. (B,C,D)</li><li>Describe three primary types of sensors. (B,H)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "EETC     ",
    "Code": 1300,
    "Title": "Introduction to Electrical Engineering Technology",
    "Learning_Outcomes": "<ol><li>Apply basic electrical safety requirements using OSHA standards. (A)</li><li>Create, send and receive basic emails. (B)</li><li>Create reports and resumes using word processor. (B)</li><li>Create and analyze data using spreadsheets. (B)</li><li>Create and give presentations using presentation software. (B, C)</li><li>Evaluate resistance, voltage, and current using a multimeter. (D)</li><li>Evaluate waveforms using an oscilloscope. (D)</li><li>Analyze circuits using circuit simulation software. (D)</li><li>Analyze circuits using a power supply designed for circuit simulations. (D)</li><li>Analyze circuits using a function generator designed for circuit simulations. (D)</li><li>Analyze circuits using breadboards designed for circuit simulations. (D)</li><li>Apply proper soldering techniques to solder and de-solder components neatly. (D)</li><li>Evaluate numbers and express in Engineering Units. (D)</li><li>Evaluate resistor color code to select correct resistor value. (D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENGT ",
    "Code": 1010,
    "Title": "Engineering Technology Technical Communication",
    "Learning_Outcomes": "<ol><li>Send and receive internal and external E-Mail messages.&nbsp; A, C<br></li><li><div>Access and utilize the \"MYPELLISSIPPI\" web page.&nbsp; A, C<br></div></li><li><div>Access and utilize the PSTCC online library.&nbsp; A, C<br></div></li><li><div>Produce \"word-processed\" technical documents through individual or collaborative effort.&nbsp; B, D<br></div></li><li><div>Build problem-solving spreadsheets using Excel.&nbsp; B, E<br></div></li><li><div>Produce graphs and trend lines for data analysis.&nbsp; B, E<br></div></li><li><div>Design a presentation using PowerPoint.&nbsp; F, G, I<br></div></li><li><div>Deliver presentations using proper speech techniques as an individual or as a member of a team.&nbsp; F, G, I<br></div></li><li><div>Identify and use the proper Windows working environment to accomplish assigned tasks.&nbsp; A, C, E, G, I<br></div></li><li><div>Recognize and explain methods for lifelong learning. H<br></div></li><li><div>Demonstrate the ability to actively participate in a teaming environment. I<br></div></li><li><div>Resolve conflicts commonly associated with teaming process. I<br></div></li><li><div>Assess and develop individual skills in a teaming environment. I<br></div></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENGT  ",
    "Code": 2021,
    "Title": "Project Scheduling W/Lab",
    "Learning_Outcomes": "<ol><li><div>Demonstrate proficiency in one or more project scheduling software applications. (D, E)</div></li><li><div>Explain the principles of construction project management. (A, B)</div></li><li><div>Define project management scheduling terms. (A, B)</div></li><li><div>Demonstrate the ability to develop a construction schedule (C, D, E)</div></li><li><div>Establish activity relationships. (B)</div></li><li><div>Track and manage a construction schedule. (C, D)</div></li><li><div>Evaluate and update a construction schedule. (C, D, E)</div></li><li><div>Create activity diagrams and Gantt charts. (D, E)</div></li><li><div>Establish and manage budgets and subprojects. (C)</div></li><li><div>Create reports and charts of schedules. (F, G)</div></li><li><div>Convey a schedule through reports and charts of schedules.(F, G)</div></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENS ",
    "Code": 1050,
    "Title": "Computer Methods in Engineering Problem Solving ★",
    "Learning_Outcomes": "<ol><li>Demonstrate proficient use of Excel, Excel functions, and the Excel Solver. (A,B,C,D)</li><li>Demonstrate the ability to formulate solutions to common engineering problems from specifications, real-world data representation, and real-world problem examples. (A,B,C)</li><li>Demonstrate efficient use of the computer system and its operating environments. (A,B,C, D)</li><li>Use Matlab to convert raw data into meaningful output and accurate results. (A,B,D)</li><li>Create solutions to simple engineering problems using a programming language. (A,B,C,D)</li><li>Demonstrate proficient use of Excel and Matlab to manipulate, store, process, retrieve and display data and information. (A,B,C,D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENS ",
    "Code": 1300,
    "Title": "Problem Solving for Engineering Transfer ★",
    "Learning_Outcomes": "<ol><li>Demonstrate proficient use of the MatLab math modeling application, its editor, command environment and data modeling output environments. (A,B,C,D,E)</li><li>Demonstrate the ability to formulate program code from specifications, real-world data representation, engineering problems and real-world problem examples. (A,B,C)</li><li>Demonstrate efficient use of the computer system and its operating environments. (A,B,C,D,E)</li><li>Use a engineering product and produce data output and graphs. (A,B,D,E)</li><li>Demonstrate computer problem solving in the engineering environment. (A,B,C,D,E)</li><li>Demonstrate proficient use of engineering software in problem solving, graphing, plotting and data manipulation. (A,B,C,D,E)</li><li>Enter programs and data to produce product outcomes and plots using MATLAB. (A,B,C,D,E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENS ",
    "Code": 1510,
    "Title": "Engineering Fundamentals I ★",
    "Learning_Outcomes": "<ol><li>Take responsibility for their learning by reading the textbook material prior to the lecture, attending and participating in lecture and laboratory, completing all assignments and laboratories, collaborating with peers, using tutors in the PSCC Learning Center, meeting with the instructor during office hours, and using outside sources such as study guides and internet sites. (A)</li><li>Use mathematical techniques, including calculus, to determine displacement, velocity, and acceleration of particles, including rectilinear and curvilinear motion. (B)</li><li>Employ vectors and vector math to analyze dynamics problems. (B, C, D)</li><li>Apply dimensional analysis to insure correctness of solution concerning units. (B, C,D)</li><li>Use Newton’s First Law to solve problems dealing with forces on an object at rest or moving at a constant velocity. (B)</li><li>Use Newton’s Second and Third Laws to solve problems dealing with force and acceleration, including rectilinear and curvilinear motion. (B)</li><li>Apply Newton's Laws of gravitation and motion to determine friction and drag forces on objects in motion. (B)</li><li>Use a work-energy analysis to determine forces, velocities, or displacements for objects in motion. (B)</li><li>Use an impulse-momentum analysis to determine forces, velocities or time elapsed for objects in motion. (B)</li><li>Apply mathematical techniques, including calculus, to determine linear as well as angular displacement, velocity, and acceleration of rigid bodies in both pure rotation and constrained general plane motion. (C)</li><li>Calculate angular and linear momentum of rigid bodies in motion.(C)</li><li>Participate in a positive manner with a group to complete experiments and team projects. (D)</li><li>Analyze a set of laboratory instructions and complete the tasks in an accurate and timely manner. (D)</li><li>Complete written reports and oral presentations employing correct diction, syntax, usage, grammar, and mechanics (D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENS ",
    "Code": 1520,
    "Title": "Engineering Fundamentals II ★",
    "Learning_Outcomes": "<ol><li>Take responsibility for their learning by reading the textbook material prior to the lecture, attending and participating in lecture and laboratory, completing all assignments and laboratories, collaborating with peers, using tutors in the PSCC Learning Center, meeting with the instructor during office hours, and using outside sources such as study guides and internet sites. (A)</li><li>Apply equations of static equilibrium to determine forces acting on objects at rest. (B)</li><li>Analyze forces acting on objects in planetary motion to determine the gravitational force, trajectory, velocity, acceleration or radius of curvature. (B)</li><li>Relate springs, pendulum, and uniform circular motion with simple harmonic motion. (B)</li><li>Evaluate various parameters of wave motion for both standing and traveling waves. (B)</li><li>Comprehend the various properties of incompressible fluids and how pressure and velocity are affected by changes in the elevation and flow area. (B)</li><li>Grasp the basic concepts of thermal science and how they relate to the first and second laws of thermodynamics. (B)</li><li>Apply dimensional analysis to insure correctness of solution concerning units. (B, C)</li><li>Participate in a positive manner with a group to complete experiments and team projects. (C)</li><li>Analyze a set of laboratory instructions and complete the tasks in an accurate and timely manner. (C)</li><li>Complete written reports and oral presentations employing correct diction, syntax, usage, grammar, and mechanics (C)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENS ",
    "Code": 2110,
    "Title": "Statics ★",
    "Learning_Outcomes": "<ol><li>Apply the basics of trigonometry in breaking forces down into a system of components. (A)</li><li>Compute the moment about a designated point caused by various force systems. (A)</li><li>Apply dimensional analysis to insure correctness of the solution as far as units are concerned. (A )</li><li>Find the resultant of more than two forces in both a coplanar and non-coplanar situation. (A)</li><li>Apply the basics of force analysis to the equilibrium of a system. (B)</li><li>Draw a complete free body diagram of a system. (B)</li><li>Solve equilibrium problems involving distributed forces. (A)</li><li>Draw shear and bending moment diagrams to evaluate internal conditions of an object (C)</li><li>Solve for forces in the members of a truss by the method of sections and the methods of joints. (B)</li><li>Solve for forces in the members of frames or machines (C)</li><li>Solve for frictional forces due to sliding friction on level surfaces and on an inclined plane. (B)</li><li>Solve for belt friction (B)</li><li>Find the centroid or center of gravity of both a homogeneous and non-homogeneous body. (C)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENS ",
    "Code": 2310,
    "Title": "Dynamics ★",
    "Learning_Outcomes": "<ol><li>Take responsibility for their learning by reading the textbook material prior to the lecture, attending and participating in lecture and laboratory, completing all assignments and laboratories, collaborating with peers, using tutors in the PSCC Learning Center, meeting with the instructor during office hours, and using outside sources such as study guides and internet sites. (A)</li><li>Perform vector operations. (B)</li><li>Split forces and accelerations into Cartesian vector format. (B)</li><li>Add and subtract forces using vector analysis. (B)</li><li>Calculate the moment of a force about a point, an axis, and a line using both scalar and vector analysis. (B,C)</li><li>Draw Free Body and Mass/Acceleration Diagrams. (C)</li><li>Incorporate calculus when solving problems dealing with kinematics of rigid bodies. (C)</li><li>Understand Newton’s Laws and their applicability to the dynamics of rigid bodies. (B,C)</li><li>Solve problems dealing with motion of rigid bodies. (B, C)</li><li>Apply the theory of impulse and momentum to the solution of dynamics problems. (B,C)</li><li>Apply principles of work and energy to rigid bodies. (B, C)</li><li>Find moments of inertia of rigid bodies. (C)</li><li>Calculate the radius of gyration of a rigid body. (C)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 1313,
    "Title": "CAD for Electronics",
    "Learning_Outcomes": "<ol>TODO</ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 1340,
    "Title": "Machine Tool Technology",
    "Learning_Outcomes": "<ol><li>Identify a variety of gages and measuring instruments. (A)</li><li>Calibrate and operate a variety of standard and electronic measuring equipment. (A)</li><li>Calculate allowance for mating parts. (A)</li><li>Calculate and set-up angles using gage blocks and a sine bar. (A)</li><li>Identify properties for a surface roughness tolerance (Metric and English). (A)</li><li>Identify a variety of milling machines, attachments and cutters. (B)</li><li>Apply factors and calculate (Metric &amp; English) feeds and speeds for a standard milling machine. (B)</li><li>Set-up, machine to tolerance, and inspect a part manufactured on a standard milling machine. (A, B, D)</li><li>Identify a variety of lathes, attachments, and cutters. (C)</li><li>Apply factors and calculate (Metric &amp; English) feeds and speeds for a standard lathe. (C)</li><li>Identify and associate function of a variety of threads. (C)</li><li>Calculate thread depth and pitch. (C)</li><li>Set-up, machine to tolerance, and inspect a part manufactured on a standard lathe. (A, C, D)</li><li>Associate concepts and perform basic sawing, drilling, and reaming operations. (B, C, D)</li><li>Identify and associate the basic principles used in grinding. (D)</li><li>Document technical information in a neat and orderly format. (E)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li><li>Complete assignments based on oral and written instructions. (E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 1351,
    "Title": "GD &amp; T",
    "Learning_Outcomes": "<ol><li>Define, explain, and associate the terminology used in GD&amp;T. (A)</li><li>Identify and associate the various GD&amp;T symbols. (A)</li><li>Dimension and tolerance parts in accordance with ASME Y14.5M specifications. (A)</li><li>Setup and collect data using standard gauging techniques. (B)</li><li>Tabulate results and \"accept or reject\" part. (B, C, D)</li><li>Operate and set-up CMM. (C)</li><li>Align part, create geometric elements, and collect data using computer-assisted techniques. (C)</li><li>Edit CMM program. (C)</li><li>Locate and extract needed information from ASME standard and operational/programming manuals. (D)</li><li>Document technical information in a neat and orderly format. (D)</li><li>Complete assignments based on written and oral instructions. (D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 1352,
    "Title": "Industrial Science",
    "Learning_Outcomes": "<ol><li>Take responsibility for their learning by reading the textbook material prior to the lecture, attending and participating in lecture and laboratory, completing all assignments and laboratories, collaborating with peers, using tutors in the PSCC Learning Center, meeting with the instructor during office hours, and using outside sources such as study guides and internet sites. A<br></li><li>Apply equations of static equilibrium to determine forces acting on objects at rest and relate this to laboratory experiments. B, C<br></li><li>Complete calculations on moving objects to determine the forces or state of motion and apply to laboratory experiments. B, C<br></li><li>Comprehend the various properties of incompressible fluids, understand how pressure and velocity are affected by changes in the elevation and flow area, and use these concepts to complete laboratory experiments. B, C<br></li><li>Identify the basic components in a fluids system and incorporate this knowledge in laboratory experiments. B, C<br></li><li>Grasp the basic concepts of electricity and magnetism and apply these skills in laboratory applications. B, C<br></li><li>Participate in a positive manner with a group to complete experiments and team projects C, D<br></li><li>Analyze a set of laboratory instructions and complete the tasks in an accurate and timely manner. C<br></li><li>Complete written reports and oral presentations employing correct diction, syntax, usage, grammar, and mechanics. D <br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 1360,
    "Title": "Mechanical Power Transmission",
    "Learning_Outcomes": "<ol><li>Explain and apply the hydrodynamic theory of lubrication. (A)</li><li>Solve for life expectancy of a bearing. (A)</li><li>Select an appropriate bearing based on system analysis. (A)</li><li>Calculate critical speeds. (B)</li><li>Select shaft material, size, and shape from standard tables. (B)</li><li>Select appropriate fasteners. (B)</li><li>Analyze system and select appropriate belt and chain drives from standard catalogs. (C)</li><li>Identify basic gear geometry and types of gears. (C)</li><li>Calculate gear forces and stresses. (C)</li><li>Select appropriate gearing system which provides maximum operational efficiency. (C)</li><li>Identify and explain the function of various types of cams and followers. (D)</li><li>Design a simple cam. (D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 1362,
    "Title": "Industrial Printreading",
    "Learning_Outcomes": "<ol><li>Define, explain, and associate the terminology used in blueprint reading. (A, B)</li><li>Interpret and explain various views and types of drawings. (A)</li><li>Identify and interpret supplementary information contained on drawings. (A, B)</li><li>Identify and interpret the symbols used in blueprint reading. (B, C)</li><li>Trace an electrical diagram by identifying and explaining the purpose of identified components. (B, C)<br></li><li>Trace a piping diagram by identifying and explaining the purpose of identified components. (B, C)<br></li><li>Trace a pneumatic diagram by identifying and explaining the purpose of identified components. (B, C)<br></li><li>Trace a hydraulic diagram by identifying and explaining the purpose of identified components. (B, C)<br></li><li>Locate and extract needed technical information. (A - C)</li><li>Associate and apply the basic principles of blueprint reading to maintenance prints and documents. (A - C)</li><li>Use prints and schematics to locate maintenance problem areas. (A - D)</li><li>Document technical information in a neat and orderly format. (A - D)&nbsp;</li><li>Complete assignments based on oral and written instructions. (A - D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 1370,
    "Title": "Manufacturing Processes",
    "Learning_Outcomes": "<ol><li>Describe and analyze the crystalline structure of metals. (A)</li><li>Describe the ramifications of the iron carbon diagram and isothermal transformation diagrams as related to heat treated steel. (A)</li><li>Explain and perform basic heat treating operations on carbon steels. (A)</li><li>Describe basic mining and extraction techniques and list the ores from which the various metals are extracted. (B)</li><li>Identify and explain the basic steel making equipment and processes. (B)</li><li>Identify and describe alloying techniques for various metals. (B)</li><li>Identify and explain basic casting processes used in industry. (C)</li><li>Identify and explain the basic hot metal working processes used in industry. (C)</li><li>Identify and explain the basic cold metal working processes used in industry. (C)</li><li>Identify and explain common mass production techniques used in industry. (D)</li><li>Identify and explain the basic plastic forming processes used in industry. (D)</li><li>Explain the basic processes, operations and concepts used in making powder metallurgy parts. (D)</li><li>Identify and discuss concepts related to industrial and occupational safety. (E)</li><li>Discuss the rationale and operation of the Right to Know and OSHA Acts. (E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 1371,
    "Title": "Composite Materials &amp; Structures",
    "Learning_Outcomes": "<ol><li>Identify which matrix materials are best suited for particular applications. (A, B)</li><li>Analyze and evaluate glass transition temperature and cure cycle information for thermoset and thermoplastic matrix materials. (A, B)</li><li>Classify the fiber type, length and weave for specific composite material applications. (A, B)</li><li>Recall which composite properties are matrix dominated and which are fiber dominated. (A, B)</li><li>List and interpret the layup designation and associated ply orientations. (C)</li><li>Distinguish between the methods for different types of composite materials production including filament winding, injection molding and vacuum bagging for non-autoclave processing. (C)</li><li>Describe the steps required for different manufacturing methods for composite materials. (C)</li><li>Discuss advantages and disadvantages of different manufacturing methods for composite materials. (C)</li><li>Classify the appropriate core material for different applications. (B, C)</li><li>Describe composite material applications that would benefit from using sandwich structures. (B, C)</li><li>Identify appropriate fiber/matix selections, manufacturing methods and composite structural designs for applications with restrictions such as weight, cost, or service conditions. (A, B, C)</li><li>Explain the roles of coefficient of thermal expansion and thermal conductivity in tooling for composite materials. (D)</li><li>Explain why tests developed for metals and plastics typically cannot be used for composite materials. (E)</li><li>Explain and perform destructive tests on sample composite material coupons to find both tensile properties and fiber/matrix and void content. (E)</li><li>Identify appropriate non-destructive testing techniques which can be done to inspect composite materials. (E)</li><li>Discuss the advantages and disadvantages of mechanical fastening and adhesive bonding for attaching composite materials. (F)</li><li>Explain the importance of surface preparation, bondline thickness and adhesive selection for bonding different types of composite materials. (F)</li><li>Describe the considerations that must be taken into account for mechanical fastening of composite materials. (F)</li><li>Identify the types of damage that can occur in composite materials, how damage can be detected and describe the suitable methods for repair of the structure. (G)</li><li>Relate and understand ways to mitigate the health and safety issues that can potentially arise when working with composite materials. (H)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 1372,
    "Title": "3-D Additive Manufacturing",
    "Learning_Outcomes": "<ol><li>Describe the history of additive manufacturing from 1983 to the present (A)</li><li>Define the specific terms and acronyms used in the field of additive manufacturing (A)</li><li>Recall the universal eight step additive manufacturing process chain used to create a part in all the different process methods (B)</li><li>List a minimum of seven applications where additive manufacturing can be used in the manufacturing or medical fields (C)</li><li>Describe the photopolymerization process and applications where it is used (D)</li><li>Describe the powder bed fusion process and applications where it is used (D)</li><li>Describe the extrusion based process and applications where it is used (D)</li><li>Describe the sheet laminating process and applications where it is used (D)</li><li>Describe the beam deposition process and applications where it is used (D)</li><li>Describe the printing process and applications where it is used (D)</li><li>Access the design constraints and choose an appropriate process for creating a part using additive manufacturing (E,F)</li><li>Analyze a design, create a three dimensional CAD solid model, convert the CAD file to a STL (Stereo Lithography) file format, transfer the STL file to the additive manufacturing machine, set up the additive manufacturing machine, build the part, and complete post-processing procedures (C - H)</li><li>Prepare comprehensive reports on the parts created in the laboratory (I)</li><li>Prepare and deliver an oral presentation using proper speech techniques (I)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 2340,
    "Title": "CNC Programming I",
    "Learning_Outcomes": "<ol><li>Define, explain, and associate the terminology used in CNC milling. (A)</li><li>Apply and associate the principles of CNC milling. (A)</li><li>Differentiate absolute and incremental programming. (A)</li><li>Identify all safety hazards associated with CNC milling operations. (B)</li><li>Identify, mount, and load correct tooling. (B)</li><li>Set tool length offsets and part program zero. (B)</li><li>Evaluate machining process during cutting operation and adjust settings to achieve maximum results. (B)</li><li>Create parts, define tool paths, input part program information, and verify cutting operation. (C)</li><li>Create tool data base. (C)</li><li>Post-process and generate a machine readable program. (C)</li><li>Set-up and initiate a transfer of program. (C)</li><li>Edit an existing program. (C)</li><li>Measure part features using standard gauging or CMM techniques. (D)</li><li>Accept/reject/rework parts based on standard or geometric tolerancing. (D)</li><li>Relate inspection results to machining process. (C, D)</li><li>Locate and extract needed information from operational and programming manuals. (E)</li><li>Document technical information in a neat and orderly format. (E)</li><li>Construct part and information drawings. (E)</li><li>Complete assignments based on oral and written instructions. (E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 2341,
    "Title": "CNC Programming II",
    "Learning_Outcomes": "<ol><li>Define, explain, and associate the terminology used in CNC turning. (A)</li><li>Apply and associate the principles of CNC turning. (A)</li><li>Identify all safety hazards associated with CNC turning operations. (B)</li><li>Identify, mount, and load correct tooling. (B)</li><li>Create parts, define tool paths, input part program information, and verify cutting operation. (C)</li><li>Create tool data base. (C)</li><li>Post-process and generate a machine readable program. (C)</li><li>Set-up and initiate a transfer of program. (C)</li><li>Edit an existing program. (C)</li><li>Measure part features using standard gauging or CMM techniques. (D)</li><li>Create parts, define tool paths, input part program information, and verify cutting operation. (C)</li><li>Create tool data base. (C)</li><li>Post-process and generate a machine readable program. (C)</li><li>Set-up and initiate a transfer of program. (C)</li><li>Edit an existing program. (C)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 2342,
    "Title": "Advanced CNC Programming",
    "Learning_Outcomes": "<ol><li>Create, input milling properties, and simulate cutting operation of 3-D surface and solid modeling features by computer-assisted methods. (A)</li><li>Create, input milling properties, and simulate cutting operation of 4-axis features by computer-assisted methods. (A)</li><li>Transfer a program file utilizing the \"DNC Link\" process. (A)</li><li>Evaluate machining process during cutting operation and adjust initial variable settings to achieve maximum results. (A,&nbsp; B)</li><li>Calibrate and set-up bar feeder and CNC turning center for various stock sizes. (B)</li><li>Calculate and input bar feeder variables in controller. (B)</li><li>Align 4-axis chuck and tailstock. (B)</li><li>Develop a post-processor for specific outputs. (C)</li><li>Test post-processor for functional operation and controller compatibility. (C)</li><li>Measure part features using standard gauging or CMM techniques. (D)</li><li>Accept/reject/rework parts based on standard or geometric tolerancing. (D)</li><li>Relate inspection results to machining variables. (A, D)</li><li>Locate and extract needed information from operational and programming manuals. (E)</li><li>Document technical information in a neat, orderly format. (E)</li><li>Complete assignments based on oral and written instructions. (E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST ",
    "Code": 2343,
    "Title": "CNC Automation",
    "Learning_Outcomes": "<ol><li>Define, explain, and associate the terminology used in CNC milling. (A)</li><li>Apply and associate the principles of CNC milling. (A)</li><li>Differentiate absolute and incremental programming. (A)</li><li>Identify all safety hazards associated with CNC milling operations. (B)</li><li>Identify, mount, and load correct tooling. (B)</li><li>Set tool length offsets and part program zero. (B)</li><li>Evaluate machining process during cutting operation and adjust settings to achieve maximum results. (B)</li><li>Create parts, define tool paths, input part program information, and verify cutting operation. (C)</li><li>Create tool data base. (C)</li><li>Post-process and generate a machine readable program. (C)</li><li>Set-up and initiate a transfer of program. (C)</li><li>Edit an existing program. (C)</li><li>Measure part features using standard gauging or CMM techniques. (D)</li><li>Accept/reject/rework parts based on standard or geometric tolerancing. (D)</li><li>Relate inspection results to machining process. (C, D)</li><li>Locate and extract needed information from operational and programming manuals. (E)</li><li>Complete assignments based on oral and written instructions. (E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST  ",
    "Code": 1311,
    "Title": "Computer Aided Design I",
    "Learning_Outcomes": "<ol><li>Read and use an engineering scale. (A,F,G)</li><li>Read and use measuring calipers. (A)</li><li>Demonstrate proper sketching techniques for basic drawing. (B,C,F,G)</li><li>Demonstrate knowledge of lettering standards and techniques. (D,F)</li><li>Perform basic geometric constructions. (B,F,G)</li><li>Know alphabet of lines. (C,G)</li><li>Use orthographic projection. (A,B,F,G)</li><li>Demonstrate proper placement, orientation and spacing of views. (A,G)</li><li>Demonstrate knowledge of fundamental ANSI standards for dimensioning. (D)</li><li>Present sectional views correctly. (B,G)</li><li>Use CAD as a drafting tool to produce accurate 2D drawings. (A,B,F,G)</li><li>Use CAD concepts such as layers, symbols, snaps, reference files, settings, etc. to organize drawings. (A,F,G)</li><li>Use CAD annotation commands such as dimensions, text, title blocks, etc. to enumerate technical information. (A,C,D,F,G)</li><li>Produce plots according to industry standards. (A,C,D,F,G)</li><li>Use SolidWorks application to generate 3D parametric models. (A,B,E)</li><li>Use SolidWorks parametric commands to modify 3D models. (A,E,G)</li><li>Use SolidWorks Sheet file application to create annotated 2D drawing. (A,C,D,E,G)</li><li>Use email and other digital communication tools to send and receive technical information.(A)</li><li>Use keyboard shortcuts to navigate and initiate application commands. (A)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST  ",
    "Code": 1312,
    "Title": "Computer Aided Design II",
    "Learning_Outcomes": "<ol><li>Set software and environment system options. (A)</li><li>Set document properties. (A)</li><li>Use fundamental SolidWorks’ commands to place, modify, manipulate, and delete elements. (B)</li><li>Understand element selection, fence manipulation, and view attributes. (B)</li><li>Project and revolute 2D complex shapes to create 3D objects. (B)</li><li>Create composite solids by using union, intersection, and difference operations. (B)</li><li>Construct fillets and chamfers between surfaces. (B)</li><li>Create a 3 dimensional design file. (C)</li><li>Understand the design cube and 3D precision inputs. (C)</li><li>Set display and active depths in the process of 3D drafting. (C)</li><li>Insert, move and save sectional views. (D)</li><li>Attach a sectional view. (D)</li><li>Define area for sectional cut. (D)</li><li>Define, rotate, move, select and save auxiliary coordinate systems. (E)</li><li>Attach an auxiliary view. (E)</li><li>Place text, data fields, and tags. (F)</li><li>Utilize sheet views to create 2 dimensional front view from the models. (F)</li><li>Fold the front view to create all other necessary views. (F)</li><li>Place hidden lines for all views. (F)</li><li>Reference a border and dimension within the sheet view or sheet file. (F)</li><li>Utilize the model to reference individual parts to create an assembly drawing. (F)</li><li>Place dimensions. (G)</li><li>Understand the meaning of Geometric Dimensioning &amp; Tolerancing (GD&amp;T) symbols and terms. (G)</li><li>Understand planar and target datums as they relate to GD&amp;T. (G)</li><li>Utilize flatness, straightness, circularity, and cylindricity GD&amp;T controls to control form. (G)</li><li>Utilize perpendicularity, angularity, and parallelism GD&amp;T controls to control the orientation of parts. (G)</li><li>Understand concentricity, symmetry, runout, and profile controls and where to use them. (G).</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST  ",
    "Code": 1350,
    "Title": "Industrial Safety",
    "Learning_Outcomes": "<ol><li>Relate and understand the importance of the safety movement both historic and current times. (A)</li><li>Analyze certain laws and regulations regarding the OSH Act, OSHA, liability, and Worker’s Compensation both state and federal. (B)</li><li>Identify the human element in regards to stress and safety training. (C)</li><li>Determine and analyze hazard assessment, prevention, and control in regards to mechanical hazards and machine safeguarding. (D)</li><li>Determine and analyze hazard assessment, prevention, and control regarding falling, impact, acceleration, lifting, and vision hazards. (D)</li><li>Determine and analyze hazard assessment, prevention, and control regarding temperature extremes. (D)</li><li>Determine and analyze hazard assessment, prevention, and control regarding pressure and electrical hazards. (D)</li><li>Determine and analyze hazard assessment, prevention, and control regarding fire hazards and life safety. (D)</li><li>Determine and analyze hazard assessment, prevention, and control regarding industrial hygiene and confined spaces. (D)</li><li>Determine and analyze hazard assessment, prevention, and control regarding noise and vibration hazards. (D)</li><li>Determine and analyze hazard assessment, prevention, and control regarding computers, automation, and robots. (D)</li><li>Analyze, document, and present a safety assessment of either a lab or model. (A-D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST   ",
    "Code": 2361,
    "Title": "Fluid Power Systems",
    "Learning_Outcomes": "<ol><li>Identify and explain appropriate applications of fluid power systems. (B, C, D)</li><li>Solve problems using both the English and SI systems of units. (C, D)</li><li>Identify and properly relate the basic fluid properties of mass, specific weight, specific gravity, and density. (C, D)</li><li>Differentiate and understand the relationship between force, pressure, work and power in fluids. (B, C, D)</li><li>Demonstrate the relationship between absolute, gage and atmospheric pressure. (C, D)</li><li>Explain the effect of elevation changes on the pressure of fluids. (C, D)</li><li>Identify both the cause and effect of various frictional losses in hydraulic systems. (C, E)&nbsp;</li><li>Explain the advantages and disadvantages of both hydraulic and pneumatic power systems. (A , B, C, D, E, G)</li><li>Identify the symbols for and explain the functions of various hydraulic and pneumatic fluid power system components. (E, G)</li><li>Build, troubleshoot and maintain basic hydraulic and pneumatic power systems. (A-G)</li><li>Practice proper record-keeping for technical information such as preventative maintenance and repair schedules. (A, F)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST   ",
    "Code": 2390,
    "Title": "Capstone",
    "Learning_Outcomes": "<ol><li>Prepare a comprehensive technical report based on individual and collaborative effort. (A, C, E)</li><li>Prepare an oral presentation using Microsoft PowerPoint through individual and collaborative effort. (A, C, E)</li><li>Deliver oral presentation using proper speech techniques. (A, E)</li><li>Utilize library and internet research to plan, develop and analyze a team-based project (B-E)</li><li>Utilize and synthesize engineering technology theory, laws, procedures, techniques, and psychomotor skills learned in major discipline courses. (A, E)</li><li>Utilize and synthesize mathematical, scientific, cultural, ethical, computer, and communication skills learned in academic courses. (B, E)</li><li>Utilize computer based work-processing, spreadsheet, drawing, mathematical, and discipline related software. (C, E)</li><li>Develop, implement, analyze and complete a project in a teaming environment. (D, E)</li><li>Identify and resolve conflicts, which will decrease effectiveness in a teaming environment. (D, E)</li><li>Demonstrate the ability to function as an active and effective team member. (D, E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "ENST    ",
    "Code": 1310,
    "Title": "Computers in Engineering Technology",
    "Learning_Outcomes": "<ol><li>Send and receive internal and external E-Mail messages. (A, C)</li><li>Access, navigate and utilize the \"MYPELLISSIPPI\" web page. (A, C)</li><li>Produce technical documents through individual and/or collaborative effort. (B, D, E, F, G, H, I)</li><li>Build problem-solving spreadsheets using Excel. (B, D, E)</li><li>Produce graphs and trend lines for data analysis. (B, D, E)</li><li>Design a presentation using PowerPoint. (B, D, E, F, G, H, I, J)</li><li>Deliver a presentation using proper speech techniques as an individual or as a member of a team. (B, D, E, F, G, H, I, J)</li><li>Define project management scheduling terms. (G)</li><li>Demonstrate the ability to interpret a project schedule. (F, G)</li><li>Demonstrate proper sketching techniques for basic drawing. (B, F, H)</li><li>Demonstrate proper placement, orientation and spacing of views. (B, F, H)</li><li>Produce an accurate 3D part utilizing CAD software. (B, F, H, I)</li><li>Demonstrate the ability to actively participate in a team environment. (J)</li><li>Resolve conflicts commonly associated with team process. (J)</li><li>Assess and develop individual skills in a team environment. (J)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT ",
    "Code": 1030,
    "Title": "History of Interiors ★",
    "Learning_Outcomes": "<ol><li>Identify or categorize the stylistic period of interiors, architecture, furniture, and decorative arts. (A,B)</li><li>Recall, orally and written, the stylistic period of interiors, architecture, furniture and decorative arts. (A,B)</li><li>Provide reasons for the designation of specific styles of interiors, architecture, furniture and decorative arts. (A,B)</li><li>Define and use design terminology accurately in defining styles as reflected in text, lecture, or standard dictionary of interior design. (A,B,C)</li><li>Associate, match, and identify elements which are consistent with specific stylistic periods of structural or decorative elements for furniture and interiors and architecture. (A,B,C)</li><li>Recognize similarities between design forms which are the focus of courses on interior architecture and other arts such as costume, literature, fine arts, etc. (C)</li><li>Discriminate between space plans which reflect unique influences and to recognize characteristic features which are typical of specific periods of study. (A,B)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT ",
    "Code": 1105,
    "Title": "Interior Design Fundamentals ★",
    "Learning_Outcomes": "<ol><li>Apply design theory to interior projects. C,D</li><li>Demonstrate an understanding of interior design as a profession. A</li><li>Follow the design process. A</li><li>Identify appropriate materials and finishes for interior projects. A,B,E</li><li>Communicate a design concept through displays of materials, finishes and schematics. A,C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT ",
    "Code": 1110,
    "Title": "Materials &amp; Finishes ★",
    "Learning_Outcomes": "<ol><li>Explain the four criteria for material selection and give examples of each criterion. (B)</li><li>Recognize, describe and compare textiles, materials and finishes for interiors.(A, B)</li><li>Select appropriate materials and finishes for various applications, including paint, millwork, flooring, countertops, ceilings, doors and windows. (C)</li><li>Identify and analyze materials and finishes found in residential and commercial settings (A, B, D)</li><li>Locate and utilize websites that provide information on products and installation standards. (D, E)</li><li>Discuss general aspects of building codes, life safety codes, regulations, and standards and how they apply to the interior design process. Recall specific ways in which codes and standards affect material specification. (C)</li><li>Identify basic elements of residential wood-frame construction, such as foundation wall, footer, sill plate, stud, rafter, floor joist, and ridge board. Recognize how elements within a structure provide support such as beams, posts, lintels and braces. Know terminology such as “chase” and “plenum”. (A, B, C, D)</li><li>Evaluate quality of furniture and case goods based on their construction and finish characteristics. (A, B)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT ",
    "Code": 1200,
    "Title": "Textiles for Interiors ★",
    "Learning_Outcomes": "<ol><li>Demonstrate an understanding of the selection criteria of textiles (soft-goods), fibers, fabric construction and finishes as they relate to their use, serviceability and care. A, B, C, D</li><li>Apply knowledge of various fibers and yarns and their use in specific fabrics and other soft-goods. A ,C</li><li>Demonstrate a knowledge of various fabrics and other soft-goods and their appropriate applications. A, B, C, D</li><li>Evaluate fibers and yarns as required by their end use based on a general knowledge of dyeing and finishing methods of textiles (soft-goods). B</li><li>Determine the construction parameters of yarns, fabrics and other soft-goods necessary to appropriately meet the needs of the end-use of the textile product. C</li><li>Demonstrate an understanding in the appropriate choices of textiles, fabrics and other soft-goods used in the making of furniture coverings, window treatments, wallcoverings, floor coverings, bedding, linens, etc. A, B, C, D</li><li>Use industry standards and test methods provided by manufacturers to make appropriate selections of textile products in regards to the health, safety and welfare of the end-user. A, B, C, D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT ",
    "Code": 1310,
    "Title": "Architectural Drafting: Studio I ★",
    "Learning_Outcomes": "<ol><li>Recognize and demonstrate proper use of drafting equipment such as parallel bar, triangles, lead holder, compass, etc. <em>(A, B, E)</em></li><li>Demonstrate ability to read and use an architectural scale. <em>(A, C)</em></li><li>Execute appropriate architectural lettering techniques (i.e., ANSI standards).&nbsp; <em>(A, B, E)</em></li><li>Demonstrate correct use of guidelines to accomplish spacing and uniformity of lettering. <em>(A, B, E)</em></li><li>Execute basic geometric constructions (i.e., bisectors, perpendicular lines, and tangents).&nbsp; <em>(F)</em></li><li>Execute drafting techniques incorporating terminology of geometry (i.e., angles, triangles, polygons, etc.). <em>(F)</em></li><li>Produce accurate residential / architectural plans using AutoCad. <em>(A, B,C)</em></li><li>Understand the benefits of AutoCad software as a drafting tool. <em>(A, B, C, D)</em></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT ",
    "Code": 2030,
    "Title": "Modern Interiors &amp; Architecture ★",
    "Learning_Outcomes": "<ol><li>Classify the various styles and movements of modern interiors, architecture, and furniture; (A, B, C, D)</li><li>Identify or categorize the stylistic periods of interiors, architecture, furniture and decorative arts of the modern movements in America and Europe; (A, B, C, D)</li><li>Identify the contributions of leading 20th century designers; (D)</li><li>Understand the relationships and influences that the various movements of modern interiors, architecture, and furniture have on one another; (A, B)</li><li>Understand the development of technology and design philosophies and their influence on and importance to modern interiors, architecture, and furniture. (A,C)</li><li>Understand vocabulary and basic concepts of historic preservation. (E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT ",
    "Code": 2110,
    "Title": "Space Planning, Codes &amp; Human Factors ★",
    "Learning_Outcomes": "<ol><li>Designate appropriate codes and standards to various design scenarios (A)</li><li>Apply standards and codes related to the design of residential spaces including kitchen,&nbsp; bath, sleeping and living areas (A)</li><li>Investigate and apply human factors such as use patterns, space requirements, privacy needs, and territoriality to a design solution. (A)</li><li>Analyze facts gathered during the programming phase of the design process (B)</li><li>Support a design solution based on concepts of proxemics, ergonomics and anthropometrics of their own culture and society as well as others. (B,C)</li><li>Research design from a specific geographical region and produce bubble and block diagrams, rough floor plans, schematic sketches, then a final floor plans. (B,C)</li><li>Analyze space planning concepts of cultures and societies other than the student’s own. (C)</li><li>Develop residential space planning solutions that incorporate human factors, codes and industry-standards (D)</li><li>Utilize the design process and specific programming tools in developing residential design projects. (A, B, C, D, E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT ",
    "Code": 2306,
    "Title": "Computer Applications for Interior Design: Studio II",
    "Learning_Outcomes": "<ol><li>Understand and apply basic CAD commands in managing data files. <em>(A, B, C, D) </em></li><li>Understand the benefits of a CAD system and Sketchup/Layout as a drafting tool. <em>(A, B, C, D) </em></li><li>Execute basic commands required for generating architectural drawings. <em>(A, B, C, D) </em></li><li>Produce accurate residential / architectural plans using CAD and Sketchup software. <em>(A, B, C) </em></li><li>Produce accurate elevations, details, and sections using CAD and Sketchup software. <em>(A, B, C) </em></li><li>Produce architectural CAD and Sketchup drawings with professional quality graphic standards. <em>(A, B, C)</em></li><li>Dimension architectural drawings using CAD and Sketchup software. <em>(B) </em></li><li>Place text within architectural drawings using CAD and Sketchup software. <em>(B) </em></li><li>Produce prints and plots from CAD and Sketchup software. <em>(A) </em></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT ",
    "Code": 2310,
    "Title": "Lighting for Interiors ★",
    "Learning_Outcomes": "<ol><li>Apply lighting design theory to interior projects. C,D</li><li>Demonstrate an understanding of interior lighting. A</li><li>Follow the design process for lighting. A,C</li><li>Identify appropriate lighting selections for interior projects. A,B,C,D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT ",
    "Code": 2500,
    "Title": "Special Topics in Interior Design Technology",
    "Learning_Outcomes": "<ol><li>Discuss basic and advanced facts associated with the selected topic. A, B, C, D</li><li>Discuss implications for society based on information regarding the selected topic. A, B, C, D</li><li>Discuss implications for the future based on information regarding the selected topic. A, B, C, D</li><li>Understand the manner in which the special topic fits into the overall picture of the program of study. A, B, C, D</li><li>Discuss (depending on the course) appropriate technologies. A, B, C, D</li><li>Use (depending on the course) appropriate technologies. A, B, C, D</li><li>Demonstrate the ability to integrate the course information into related projects. A, B, C, D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT ",
    "Code": 2550,
    "Title": "Production Techniques for Interior Products: Studio V",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of appropriate drafting standards and conventions. (A, B, C, D)</li><li>Prepare drawings and other means of communication to include measurements and necessary information for assigned projects.. (A, B, C, D, E, F, G)</li><li>Appraise and describe products in the context of the required parameters. (A, B, C, D, E, F, G, H)</li><li>Estimate material requirements, create materials lists and cut lists. (A, B, C, D, E, F, G, H)</li><li>Develop a range of manipulative skills through processing wood and other materials used to produce interior products. (B, C, F, G, H, I)</li><li>Propose solutions to design problems in the context of perceived or imposed constraints. (A, B, C, D, E, F, G, H)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT ",
    "Code": 2950,
    "Title": "Residential Design: Studio VI",
    "Learning_Outcomes": "<ol><li>Illustrate and communicate design solutions graphically and verbally. (A, B)</li><li>Read and create millwork and construction documents. (B, C, D, E)</li><li>Utilize specific computer software. (B, E)</li><li>Support a design solution based on concepts of proxemics, ergonomics and anthropometrics of their own culture and society as well as others. (B,C)</li><li>Research design from a specific geographical region and produce bubble and block diagrams, rough floor plans, schematic sketches, then a final floor plans. (B,C)</li><li>Analyze space planning concepts of cultures and societies other than the student’s own. (C)</li><li>Develop residential space planning solutions that incorporate human factors, codes and industry-standards (D)</li><li>Utilize the design process and specific programming tools in developing residential design projects. (A, B, C, D, E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT  ",
    "Code": 2022,
    "Title": "Portfolio Development in Interior Design",
    "Learning_Outcomes": "<ol><li><div>Organize and format a professional portfolio of personal design work. A, B, C</div></li><li><div>Understand the performance expectations for a successful portfolio review. A, B, C, D</div></li><li><div>Precisely, accurately articulate design evaluation in both oral and visual formats. B, C, D</div></li><li><div>Demonstrate through portfolio:</div></li></ol><div><ul><li>basic drawing skills, hand / eye coordination sufficient for placement in an interior design-related position.&nbsp; A, C, D&nbsp;</li><li>an understanding of the fundamentals of color theory and the elements and principles of design. A, C, D&nbsp;</li><li>a level of craftsmanship sufficient for placement in an interior design-related position.&nbsp; A, C, D&nbsp;</li><li>a level of computer skills sufficient for placement in an interior design-related position.&nbsp;&nbsp; A, C, D&nbsp;</li><li>design skills; i.e., layout, visual communication, accurate symbology, illustration, applied color, visual hierarchy, spatial organization sufficient for placement in an interior design-related position.&nbsp;&nbsp; A, C, D&nbsp;</li><li>conceptual problem-solving skills for placement in an interior design-related position.&nbsp; A, C, D</li></ul><ol start=\"5\"><li>Demonstrate through presentation and interview:</li></ol></div><ul><li><div>professionalism and commitment to excellence sufficient for success in the interior design field. A, B, C, D</div></li></ul>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT  ",
    "Code": 2450,
    "Title": "Interior Design Presentation: Studio III ★",
    "Learning_Outcomes": "<ol><li>Illustrate and communicate design solutions graphically and verbally. (A, B)</li><li>Utilize the design process to develop a design concept and solution. (A, B, C, D, E)</li><li>Implement the Elements and Principles of Design in a design solution. (B, E)</li><li>Utilize specific computer software. (B, E)</li><li>Support a design solution based on concepts of proxemics, ergonomics and anthropometrics of their own culture and society as well as others. (B,C)</li><li>Research design from a specific geographical region and produce bubble and block diagrams, rough floor plans, schematic sketches, then a final floor plans. (B,C)</li><li>Analyze space planning concepts of cultures and societies other than the student’s own. (C)</li><li>Develop residential space planning solutions that incorporate human factors, codes and industry-standards (D)</li><li>Utilize the design process and specific programming tools in developing residential design projects. (A, B, C, D, E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "IDT  ",
    "Code": 2611,
    "Title": "Kitchen &amp; Bath Planning: Studio IV",
    "Learning_Outcomes": "<ol><li>Evaluate and specify appropriate products relative to lighting and general energy consumption in kitchens and baths. A</li><li>Exhibit skills in problem identification. C</li><li>Demonstrate competent schematic design skills, including: concept development, rapid visualization of concepts through sketching and preliminary specification of interior finishes. C</li><li>Demonstrate space-planning skills (adjacencies, circulation, and articulation and shaping of space). C</li><li>Develop space plans, elevations, sketches, and study models. A,B,C,D</li><li>Understand and apply universal design concepts and principles. C</li><li>Understand and apply barrier-free, ergonomic and human factor design concepts. A,B,C</li><li>Understand and apply codes, regulations, and standards as they apply to residential kitchen, bath, and dining spaces. D</li><li>Understand the impact of lighting on health &amp; welfare. B</li><li>Understand how design solutions are affected and impacted by power distributions systems, energy management, mechanical and lighting systems. A,D</li><li>Apply fundamental lighting concepts to kitchen, bath, and dining spaces. A,B,C,D</li><li>Exhibit knowledge of sources for materials and products. D</li><li>Make appropriate selections of furniture, fixtures, and equipment based on properties and performance criteria identified in the written program. C,D</li><li>Understand maintenance of finishes, furniture, fixtures, and equipment. D</li><li>Develop detailed layout of furniture, fixtures, and equipment. D</li><li>Exhibit competent skills in preparation of contract documents as a complete system of drawings, schedules, and specifications that apply fire and life safety principles (detection, and suppression) and address building systems (plumbing, HVAC, etc.). A,B,C,D</li><li>Understand project management practices. A,B,C,D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "MDT ",
    "Code": 2250,
    "Title": "Special Topics in Media Technologies",
    "Learning_Outcomes": "<ol><li>Develop a set of goals and parameters for project. B</li><li>Research and develop an advanced skill or knowledge. A, B</li><li>Complete exercises/projects as assigned by instructor. A, B</li><li>Create a portfolio or project where technique, artistry and subject content communicate to the viewer using industry standard practices or new advances in technology. A, B</li><li>Evaluate project with faculty. A, B</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "MDT ",
    "Code": 2998,
    "Title": "Media Technologies Internship",
    "Learning_Outcomes": "<ol><li>Use skills and applications learned in the classroom to produce a website for a client to the client’s specifications. A, B, C, D</li><li>Gain valuable work experience in producing an actual website that can become a part of the student’s employment portfolio. A, B, C, D</li><li>Obtain exposure to web professionals in our area. A, B, C, D</li><li>Secure an edge on the job market by giving the intern actual work experience. A, B, C, D</li><li>Increase intern’s knowledge, experience, and self-confidence. A, B, C,&nbsp;</li><li>Communicate regularly and effectively with team/co-workers, instructor, and client to ensure timely and accurate completion of work and establish good human relationships. B, C, D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "METC ",
    "Code": 1310,
    "Title": "Statics with Applications",
    "Learning_Outcomes": "<ol><li>Construct free body diagrams. (A, B)</li><li>Solve for resultant forces. (A, B)<br></li><li>Calculate moments. (A, B)<br></li><li>Associate and apply force analysis to system equilibrium. (A, B)<br></li><li>Solve for forces in truss members using method of joints and method of sections. (A, B)<br></li><li>Solve for the frictional forces due to sliding friction, belt friction, disk friction, and rolling resistance. (A, B)<br></li><li>Locate the centroid or center of gravity of both a homogeneous and non-homogeneous body using calculus. (A, B)<br></li><li>Prepare and give an oral presentation on statics that meets professional standards (D, E)</li><li>Use the software available to solve specific types of statics problems. (C)<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "METC ",
    "Code": 2320,
    "Title": "Mechanical Systems Design",
    "Learning_Outcomes": "<ol><li>Identify the basic types of motion. (A)</li><li>Differentiate the concepts of displacement vs. distance, speed vs. velocity, and uniform vs. average acceleration. (A)</li><li>Apply the concepts of absolute &amp; relative velocity, and translational &amp; pure rotational motion. (A)</li><li>Convert linear and angular motion. (A)</li><li>Solve for normal and tangential components of acceleration. (A)</li><li>Analyze systems and apply the second and third laws of motion. (A)</li><li>Differentiate positive and negative work. (A)</li><li>Calculate work done by variable sources, elastic springs, and couples. (A)</li><li>Differentiate potential and kinetic energy. (A)</li><li>Convert electrical, mechanical, and thermal power. (B)</li><li>Solve for mechanical efficiency. (B)</li><li>Explain and apply the hydrodynamic theory of lubrication. (C)</li><li>Solve for life expectancy of a bearing. (C)</li><li>Select an appropriate bearing based on system analysis. (C)</li><li>Calculate critical speeds. (C, D)</li><li>Select shaft material, size, and shape from standard tables. (C, D)</li><li>Select appropriate fasteners. (A-D)</li><li>Analyze system and select appropriate belt and chain drives from standard catalogs. (A-D)</li><li>Identify basic gear geometry and types of gears. (D)</li><li>Calculate gear forces and stresses. (D)</li><li>Select appropriate gearing system which provides maximum operational efficiency. (C-E)</li><li>Document technical information in a neat and orderly format. (A-E)</li><li>Complete assignments based on oral and written instructions. (A-E)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "METC ",
    "Code": 2399,
    "Title": "Special Topics",
    "Learning_Outcomes": "<ol><li>Identify, explain, and apply mechanical design concepts to include the following areas of study: statics; strengths of materials; fluid power application; mechanical elements and systems; part print production, and work scheduling. (A, F, G)</li><li>Identify, explain, and apply manufacturing concepts, such as: process and tooling selection; material acquisition; part programming and production, work handling and scheduling. (B, F, G)</li><li>Identify, explain, develop, and apply quality control practices as they relate to the following: test plan development; destructive and nondestructive testing procedures; statistical process control (SPC); coordinate measuring techniques and programming; and data collection and analysis. (C, F, G)</li><li>Identify, explain, and apply electrical and electronic concepts to include the following areas of study: AC and DC circuits, microprocessors, and rotating machinery (e.g. motors, servo drives, and generators). (D, F, G)</li><li>Identify, explain, and apply computer drafting and design concepts to include the following: three-view orthographic drawings, auxiliary and section views, assembly drawings, fluid power schematics, and electrical diagrams. (E, F, G)</li><li>Develop information and write technical reports and related documents, such as feasibility studies, progress reports, test plans, control charts, forms, and final inspection analysis documents. (A, B, C, D, E, F, G)</li><li>Present findings formally as a team to an evaluation committee or peer group. (A, B, C, D, E, F, G)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "METC  ",
    "Code": 1320,
    "Title": "Fluid Mechanics",
    "Learning_Outcomes": "<ol><li>Solve problems using both the English and SI system. (A)</li><li>Identify and apply the basic properties of mass, specific weight, specific gravity, and density. (A, B)</li><li>Differentiate force and pressure. (A, B)</li><li>Differentiate absolute, gage, and atmospheric pressure. (A, B)</li><li>Associate the concepts of pressure and elevation. (A, B)</li><li>Associate and apply the concepts of energy and losses to various types of fluid flow. (A, B, C)</li><li>Classify and analyze various types of fluid systems. (A, B, C)<br></li><li>Identify the symbols and explain the function of various hydraulic and pneumatic system components. (A, B, C, D)<br></li><li>Classify and analyze various types of piping systems. (A, B, C, D)<br></li><li>Troubleshoot and maintain basic hydraulic and pneumatic systems. (A-E)</li><li>Calculate flow rates and pressures for compressible fluids. (A-E)<br></li><li>Identify the basic differences between a hydraulic and pneumatic system. (A-E)<br></li><li>Document technical information in a neat and orderly format. (A-E)<br></li><li>Complete assignments based on oral and written instructions. (A-E)<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "METC  ",
    "Code": 2310,
    "Title": "Strength of Materials",
    "Learning_Outcomes": "<ol><li>Calculate moment of inertia for a specific cross section using calculus concepts. (A)</li><li>Analyze various systems and solve for normal axial stress. (A)</li><li>Analyze various systems and solve for shear stress. (A)</li><li>Analyze various systems and solve for stresses due to abrupt changes in geometrical shape. (A)</li><li>Analyze various systems and solve for axial strain. (A)</li><li>Use stress-strain diagrams to evaluate material properties. (A, B)</li><li>Solve for thermal strain. (A)</li><li>Associate and apply the concepts of Hooke’s Law, and Poisson’s Ratio. (A, B)</li><li>Calculate torsion stress and angle of twist for structures subjected to twisting loads. (C)</li><li>Draw shear and bending moment diagrams for various types of beams. (D)</li><li>Calculate bending stresses or moments at various sections of a beam. (D)</li><li>Calculate the deflection of beams under varied loads. (D)</li><li>Complete experiments on strength of materials and prepare college level written reports. (E)</li><li>Work with team members to construct a truss, experimentally determine the maximum load the truss can hold, complete a laboratory report and give a presentation to the class on the results. (E, F).</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 1500,
    "Title": "Black &amp; White Darkroom Techniques",
    "Learning_Outcomes": "<ol>TODO</ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 1700,
    "Title": "Introduction to Studio Photography",
    "Learning_Outcomes": "<ol><li>Properly use studio strobe lighting equipment. (A, B, D, E)</li><li>Select appropriate lighting for a variety of subject types. (A, C, D, E)</li><li>Specify equipment and materials for a variety of subjects. (A, B, C, D)</li><li>Create well-executed studio photographs of a variety of subject types. (A, B, C, D, E)</li><li>Select the appropriate camera &amp; lens technique to accomplish the desired effect. (A, D, E)</li><li>Present a portfolio of studio photographs of a variety of subject material. (A, C, D, F)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 2010,
    "Title": "Digital Imaging &amp; Workflow",
    "Learning_Outcomes": "<ol><li>Demonstrate technical skills including editing, selecting, working with layers and ­channels, creating and using masks, retouching, color correction, and optimizing. (A. B. C. D. E)</li><li>Demonstrate aesthetic skills including cropping, image enhancement, retouch­ing, and special effects. (A. B. C. D. E.)</li><li>Demonstrate the ability to optimize an image for use a variety of media including printing, web, and video. (A. B. C. D. E.)</li><li>Present a portfolio of learned techniques. (A. B. C. D. E. F.)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 2060,
    "Title": "Advanced Digital Imaging Techniques",
    "Learning_Outcomes": "<ol><li>Calibrate a monitor for a consistent &amp; accurate working environment. A, C, D</li><li>Manage digital images efficiently from capture to delivery and archiving. A, B, C, D</li><li>Develop an understanding of file formats, their underlying data structure and their effective use. A, D</li><li>Digitally correct common optical aberrations and geometric distortions. B, C</li><li>Produce an 8-bit image from a tone mapped HDR. A, B, D</li><li>Produce a properly stitched image for increased field of view. B, C, D</li><li>Demonstrate proficiency as an advanced user of Adobe Photoshop®. D, C, D</li><li>Produce suitable source images for digital manipulation techniques using a DSLR. A, B, D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 2100,
    "Title": "Nature &amp; Travel Photography ★",
    "Learning_Outcomes": "<ol><li>Use a digital SLR camera on location. A, D</li><li>Select appropriate lighting for a variety of location situations. C, D</li><li>Select scene, subject material &amp; image combinations that tell a story. B</li><li>Present a portfolio of a variety of nature &amp; travel subjects. A. B. C. D. E. F</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 2200,
    "Title": "Studio Still Life Photography",
    "Learning_Outcomes": "<ol><li>Use a digital SLR camera in the studio.&nbsp; A</li><li>Photograph using tethered-capture techniques wherein images are automatically loaded onto the computer as they are taken. H</li><li>Select appropriate lighting for a variety of subject types.&nbsp; D</li><li>Specify equipment and materials for a variety of subjects. A. B. C.</li><li>Create studio still-life images of a variety of subject types. A. B. C. D. E. F.</li><li>Select materials and oversee printing and matting services as they relate to still life. E</li><li>Present a portfolio of studio still lifes of a variety of subject types. A, B, C, D, E, G</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 2300,
    "Title": "Portrait Photography",
    "Learning_Outcomes": "<ol><li>Demonstrate proficiency with the DSLR camera and studio lighting as used in portraiture.&nbsp;A, B</li><li>Describe the features of an effective portrait. B, E, F</li><li>Explain the techniques used for portraiture and why they are effective. A, B, C, E, F</li><li>Understand lighting techniques and suit them to the subject.&nbsp;B, C, E, F</li><li>Understand the business and artistic issues of professional portraiture. B, D, E, F,&nbsp;</li><li>Create a portfolio of professional quality portraits. A, B, C, E, G</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 2500,
    "Title": "Wedding &amp; Event Photography",
    "Learning_Outcomes": "<ol><li>Use a digital SLR camera on location. A, D</li><li>Select appropriate lighting for a variety of location situations. C, D</li><li>Select poses for a variety of subjects. B.</li><li>Demonstrate knowledge of marketing, post-production and presentation techniques. E, F, G</li><li>Select materials &amp; oversee proofing or distribution services as they relate to photography. D, E</li><li>Create a pricing schedule and releases for portrait photography. E, F</li><li>Present a portfolio of a variety of subjects. A. B. C. D. E. G.</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 2700,
    "Title": "Special Topics in Photography",
    "Learning_Outcomes": "<ol><li>Research and develop an advanced skill or knowledge. (A, B)</li><li>Present a portfolio or project exhibit of advanced technique. (A, B)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 2701,
    "Title": "Emerging Trends in Photography",
    "Learning_Outcomes": "<ol><li>Develop a set of goals and parameters for project. B.</li><li>Research and develop an advanced skill or knowledge.&nbsp; A. B</li><li>Complete exercises/projects as assigned by instructor. A. B.</li><li>Create a portfolio or project where technique, artistry and subject content communicate to the viewer using industry standard practices or new advances in technology. A. B.</li><li>Evaluate project with faculty. A. B.</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 2810,
    "Title": "Photography Business Practices",
    "Learning_Outcomes": "<ol><li>Identify and distinguish key role players in media. A, B</li><li>Demonstrate familiarity with model release and other appropriate business forms. C, D, E</li><li>Complete a sample business plan. F</li><li>Create and present promotional materials. A, B, G</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 2890,
    "Title": "Photography Portfolio",
    "Learning_Outcomes": "<ol><li>Demonstrate basic skills required by an entry-level photographer. A, B</li><li>Create a resume with references and cover letter. B</li><li>Create a photographic portfolio consisting of around 20 images. B, D, E</li><li>Know the skills and techniques required of a professional photographer in his or her area of interest. B, C, E</li><li>Critically evaluate his or her work to identify strongest images and recognize strengths and weaknesses in the body of work in order address deficiencies. E</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO ",
    "Code": 2950,
    "Title": "Independent Photographic Projects",
    "Learning_Outcomes": "<ol><li>Identify and apply techniques leading to the establishment of high values in the finished photographic project. A, E, F</li><li>Demonstrate effective use of time and resources within deadline parameters, and an ability to meet project deadlines and milestones. B, F</li><li>Produce professional-quality work in the related field that will communicate the intended ideas in a compelling manner. B, C, D, F</li><li>Demonstrate ability critically assess one’s own work and progress. C, D, G</li><li>Exhibit technical proficiency in the related medium or industry. B, C, F</li><li>Create a project of significant breadth and quality, demonstrating mastery in the chosen area based upon content and technique. B, C, F</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO  ",
    "Code": 1000,
    "Title": "Photography I ★",
    "Learning_Outcomes": "<ol><li>Create aesthetically pleasing, effective images that are properly focused and exposed. (D, E, F)</li><li>Identify the function of the parts of the camera and their effect upon the photograph. (A, B, C, D, E, L)</li><li>Understand the basic principles of shutter speed, f-stop and ISO. (C, D)</li><li>Select appropriate shooting mode for a variety of subject material. (B, D, E)</li><li>Select the camera setting that gives the desired effects.&nbsp; (D, L)</li><li>Understand the importance of non-destructive image editing, backing up work regularly and effective image management. (H, I, J)</li><li>Use Adobe Photoshop and Bridge to do common basic tasks. (H, I, J)</li><li>Select the most effective images for submission and critique. (G, H,K)</li><li>Create a portfolio consisting of the most effective images, covering a variety of genres, styles, content and technique. (G, H)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO  ",
    "Code": 2400,
    "Title": "Photojournalism",
    "Learning_Outcomes": "<ol><li>Select appropriate equipment, materials, and techniques for a variety of subjects, situations, and publications. A, B, C</li><li>Write captions for assignments in proper AP format. E</li><li>Present a portfolio of images from a variety of typical photojournalistic assignments. A, F</li><li>Produce an effective, compelling, multi-media photo story that covers a subject over a period of time. C, D, E</li><li>Illustrate multiple facets of the story to provide more complete coverage. C, D, E</li><li>Be able to produce effective, technically competent photographs in a variety of challenging real-world situations. A, B, C</li><li>Be able understand the legal, ethical and professional issues affecting photojournalists. D, E</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO   ",
    "Code": 1100,
    "Title": "Photography II ★",
    "Learning_Outcomes": "<ol><li>Demonstrate proficiency with the DSLR camera and studio lighting as used in portraiture. A, B</li><li>Identify the characteristics of a picture needed to fulfill a typical professional assignment. C. F</li><li>Determine proper exposure when shooting in manual mode. A. B. C. F.</li><li>Select appropriate cameras setting for a variety of lighting situations.&nbsp; E</li><li>Execute a variety of professional assignments. A. B. C. D. E. F.</li><li>Use the appropriate flash technique. E. F.</li><li>Use in-camera color correction. G.</li><li>Select aperture and shutter speed combinations that gives the desired focus or motion control effects. A. B. D.</li><li>Communicate ideas, messages, moods and themes through photographs. H.</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "PHO    ",
    "Code": 1200,
    "Title": "History of Photography ♦",
    "Learning_Outcomes": "<ol><li>Define basic terminology related to the photography and explain specific works in those terms. A, D</li><li>Relate major works and movements to their creators, to their culture, and to the historical context in which they lived. A, B, C, D</li><li>Analyze works from the major movements covered by comparing and contrasting forms, styles, and ideas. A, B, D</li><li>Identify universal concerns represented/presented in photography and respond to multi-cultural diversity and accomplishments in discussion. A, C, D, E</li><li>Infer correlations between historical context in which photography is created and the subsequent type of work produced; its reflection of society, culture and time. A, B, C, D</li><li>Recognize the place and power of the visual image as regards cultural trends, propaganda, marketing, and advertising. D, E</li><li>Apply criteria of judgment to selected photographic works from each historical period in course content. A, D, E</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT ",
    "Code": 1060,
    "Title": "Introduction to the Art of Animation",
    "Learning_Outcomes": "<ol><li>Create effective animations that communicate the desired message to the intended audience. C</li><li>Use a wide variety of industry-standard equipment, techniques, software, hardware and materials to produce the appropriate content. C, D</li><li>Demonstrate proficiency in the fundamental principles of animation. C</li><li>Understand industry standard terms and workflows. A, B, C, D, E</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT ",
    "Code": 1061,
    "Title": "Digital Animation I",
    "Learning_Outcomes": "<ol><li>Create animations that communicate the desired message to the intended audience. A, D</li><li>Use a wide variety of industry-standard equipment, techniques, software, hardware and materials to produce the appropriate content. C</li><li>Demonstrate advanced proficiency in the fundamental principles of animation. B, D</li><li>Demonstrate advanced proficiency in the understanding of industry standard terms and workflows. A, B, C, D, E</li><li>Successfully communicate ideas to an audience in a pitching scenario. E</li><li>Effectively work in a group setting to complete an animated short film, displaying advanced proficiency in all phases of production using the industry standard animation software. A, B, C, D, E</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT ",
    "Code": 1220,
    "Title": "Alternative Editing Applications",
    "Learning_Outcomes": "<ol><li>Expand the student’s understanding of constructing communication avenues, targeting client needs. B</li><li>Foster the ability to locate, organize and manage media assets mastering efficient workflow. C<br></li><li>Build the skills to prioritize, meeting deadlines. D, E</li><li>Increase capacity to finish a product perfectly. B, D</li><li>Enhance the student’s knowledge of different storytelling techniques such as drama, action or comedy. A</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT ",
    "Code": 1400,
    "Title": "Scriptwriting for Mass Media ★",
    "Learning_Outcomes": "<ol><li>Prepare arguments, which demonstrate his/her grasp of ethical and moral considerations faced by writers for mass audiences. A, B</li><li>Analyze audience profiles, which can be used to determine suitable concept approaches, and writing styles. A, E, F</li><li>Explain and apply the production techniques and technologies of film, radio, and television into production ready scripts. E, F</li><li>Prepare at least one written example each of a script suitable for production as a radio commercial or PSA, a television commercial or PSA, a short tele-play, a newscast or news feature and a short documentary or informational program. C, D</li><li>Prepare, in written form, the ability to create 3 or more approaches for the solution of a particular communications problem. B, C, E</li><li>Identify and employ basic elements of creative writing. A, C</li><li>Recognize the difference between delivering information and involving the viewer or listener on an emotional level. D, F</li><li>Write in a format suitable for production in radio, TV or film. E</li><li>Write a treatment and script and develop a storyboard. B, E</li><li>Estimate, in general terms, the overall production costs of a simple corporate or “industrial” production. F</li><li>Prepare for future VPT production work through development of strong scripts writing conceptual skills. A, C, D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT ",
    "Code": 1500,
    "Title": "Campus Broadcast II: Producing &amp; Directing for TV",
    "Learning_Outcomes": "<ol><li>Research, organize and write short news and feature stories for television reporting. A, B, C</li><li>Use typical electronic newsgathering technology, shoot, mic and record and edit video news and/or feature stories. A, B, C</li><li>Function as an integral part of EFP video production unit alternately, as a videographer, sound person, editor and producer. A, B, C</li><li>Function as an integral part of a live studio production unit as videographer, sound person, editor, technical director, lighting technician, graphic designer and producer. A, B, C</li><li>Direct a magazine format feature program. A, B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT ",
    "Code": 2160,
    "Title": "Producing II",
    "Learning_Outcomes": "<ol><li>Demonstrate through a real world scenario an appropriate mastery of the knowledge, techniques, skills, and tools of the discipline to maintain organization and quality of the production. (A)</li><li>Apply current knowledge and adapt to emerging applications of formats, software and equipment within the industry. (B, C)</li><li>Obtain and revise a script that will meet qualifications of client and/or perspective audience. (B, D)</li><li>Demonstrate in a scenario the ability to and the understanding of the criteria required to hire Above-the-Line and Below-the-Line personnel. (A, B)</li><li>Provide evidence of required equipment, software, and personnel, including this information during the development of a comprehensive budget and utilizing this budget and leadership skills to discover investing avenues. (A)</li><li>Demonstrate their knowledge of personnel qualifications and how quality leadership of the cast and crew can determine the outcome of the production. (A, B, C, D, E)</li><li>Recognize the need for and engage in lifelong learning in the industry. (A, B, C, D, E)</li><li>Continue to reiterate the commitment to quality, timeliness, and continuous improvement. (B, C, D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT ",
    "Code": 2165,
    "Title": "3D Modeling &amp; Animation",
    "Learning_Outcomes": "<ol><li>Create animations that communicate the desired message to the intended audiences across multiple mediums. A, D</li><li>Use a wide variety of industry-standard equipment, techniques, software, hardware and materials to produce the appropriate content. C</li><li>Demonstrate proficiency in the fundamental principles of 3D modeling. B, D</li><li>Demonstrate proficiency in the fundamentals of texturing, lighting and rendering 3D scenes. A, B, C, D, E</li><li>Produce a motion graphics sequence using assets created within the 3D software. E</li><li>Effectively work through the entire 3D pipeline to complete an animated sequence. A, B, C, D, E</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 1022,
    "Title": "Guerrilla Filmmaking",
    "Learning_Outcomes": "<ol><li>Employ knowledge of the basic pre-production, production. A</li><li>Complete at least one major production project and be able to constructively criticize the work of oneself and one’s peers. A, B</li><li>Design, produce and distribute a completed short film/video. A, B</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 1030,
    "Title": "Introduction to Desktop Video/Audio",
    "Learning_Outcomes": "<ol><li>Create media that communicate the desired message to the intended audience. C</li><li>Use a wide variety of industry-standard equipment, techniques, software, hardware and materials to produce the appropriate content. A, B,</li><li>Demonstrate various styles in communication media that display a grasp of both design and communications media principles and techniques. C</li><li>Demonstrate proficiency in the techniques and equipment that facilitate adaptation to constantly changing media. A, B, C, D</li><li>Understand and respect the rights and responsibilities of the artist, subject, client, user and employer, including intellectual property rights. E</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 1045,
    "Title": "Technical Video Production ★",
    "Learning_Outcomes": "<ol><li>Identify various technologies used in the video production process. A</li><li>Describe the function of each production technology and how it contributes to the final product. A,C</li><li>Differentiate the fundamental production approaches involved in ENG/EFP and studio production. A</li><li>Select five distinct career choices within the field of video production and the most important skills required for each. B</li><li>Differentiate between skills necessary to operate equipment and skills necessary to creatively solve communications problems. C</li><li>Define basic aspects of good visual composition. A</li><li>Employ correct departmental equipment checkout procedures. A</li><li>Employ appropriate care when using equipment. B,C</li><li>Operate a PC to perform basic functions. A,C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 1090,
    "Title": "Campus Broadcast I: Studio Operations",
    "Learning_Outcomes": "<ol><li>Establish hands-on skills with basic studio video equipment. C</li><li>Incorporate the production techniques and technologies of film, radio, and television into production ready scripts. B</li><li>Contribute to production units in a positive manner. A, B</li><li>Participate in all aspects of program generation. A</li><li>Be better prepared for more advanced VPT classes. B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 1211,
    "Title": "Video Editing",
    "Learning_Outcomes": "<ol><li>Identify, describe and employ editing conventions considered as universally recognizable and understandable by most viewers, including the use of fades, dissolves, wipes and other special effects and storytelling techniques like flashback, foreshadowing, parallel action, continuity, etc. A, B</li><li>Understand and operate all nuances of the Avid Editing Software. A</li><li>Digitally compose and manipulate a still image utilizing Adobe Photoshop and include this image in a videotape project. A</li><li>Create electronic titles to be used in a video project using computer software found in the VPT lab including, but not limited to, Photoshop, etc. A, D</li><li>Evaluate and discern editing styles from viewing and critiquing mass media. C</li><li>Describe the fundamental hardware requirements that must be met to build a digital video editing system around a desktop computer. A</li><li>Use raw footage supplied by the department; create an interpretive piece utilizing accepted conventions. A, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 2150,
    "Title": "Producing I",
    "Learning_Outcomes": "<ol><li>Demonstrate an appropriate mastery of the knowledge, techniques, skills, and tools of the discipline to maintain organization and quality of the production. (A)</li><li>Apply current knowledge and adapt to emerging applications of formats, software and equipment within the industry. (B, C)</li><li>Obtain and revise a script that will meet qualifications of client and/or perspective audience. (B, D)</li><li>Demonstrate an understanding of criteria used to hire Above-the-Line and Below-the-Line personnel (A, B)</li><li>Show ability to develop a comprehensive budget and utilize skills to discover avenues (A)</li><li>Demonstrate an understanding of the needed qualifications for each position and how the proficiency of the persons of the cast and crew can determine the outcome of the production. (A, B, C, D, E)</li><li>Recognize the need for and engage in lifelong learning in the industry. (A, B, C, D, E)</li><li>Develop a commitment to quality, timeliness, and continuous improvement. (B, C, D)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 2175,
    "Title": "Visual Effects Fundamentals for Broadcast &amp; Film",
    "Learning_Outcomes": "<ol><li>Create seamless compositions combining live action plates with computer generated elements and effects. C</li><li>Use a wide variety of industry-standard equipment, techniques, software, hardware and materials to produce advanced visual effects for film and broadcast. A, B, C</li><li>Utilize industry standard digital creature and character conceptualization sculpting software for broadcast and film. D</li><li>Demonstrate further proficiency in the understanding of industry standard terms and workflows. A, B, C, D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 2215,
    "Title": "Advanced Editing",
    "Learning_Outcomes": "<ol><li>Identify, describe and employ editing conventions considered as universally recognizable and understandable by most viewers, including the use of fades, dissolves, wipes and other special effects and storytelling techniques like flashback, foreshadowing, parallel action, continuity, etc. A, B</li><li>Operate a \"desk top\" computer based non-linear/linear editing system utilizing Tape and Digital source footage. A</li><li>Digitally compose and manipulate a still image utilizing Adobe Photoshop and include this image in a video project. A</li><li>Create electronic titles to be used in a video project using computer software found in the VPT lab including, but not limited to, Photoshop, After Effects, Title Tool Marquee and etc. A, D</li><li>Evaluate and discern editing styles from viewing and critiquing mass media. C</li><li>Describe the fundamental hardware requirements that must be met to build a digital video editing system around a desktop computer. A</li><li>Use raw footage supplied by the department; create an interpretive piece utilizing accepted conventions. A, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 2220,
    "Title": "Advanced Alternative Editing Applications",
    "Learning_Outcomes": "<ol><li>Identify, describe and employ editing conventions considered as universally recognizable and understandable by most viewers, such as the use of fades, dissolves, wipes and other special effects and storytelling techniques like flashback, foreshadowing, parallel action, continuity. A, B</li><li>Operate a \"desk top\" computer based non-linear/linear editing system utilizing DVCam source footage (DVCam is a registered trademark of Sony). A</li><li>Digitally compose and manipulate a still image utilizing Adobe Photoshop and include this image in a videotape project. A</li><li>Create electronic titles to be used in a video project using computer software found in the VPT lab including, but not limited to, Photoshop, etc. A, D</li><li>Evaluate and discern editing styles from viewing and critiquing mass media. C</li><li>Describe the fundamental hardware requirements that must be met to build a digital video editing system around a desktop computer. A</li><li>Use raw footage supplied by the department; create an interpretive piece utilizing accepted conventions. A, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 2265,
    "Title": "Intermediate 3D Modeling &amp; Animation",
    "Learning_Outcomes": "<ol><li>Demonstrate an understanding of the functioning of 3D software menus, windows, palettes, and tools and be able to apply these to the creation of 3D scenes in both the Broadcast and Film industry standard 3D software. A,B,C,D,E,F,G, H</li><li>&nbsp;Select, research, conceptualize, model, texture, light, stage, render and composite an animation using elements from both CINEMA 4D and Maya. A,B,C,D,F</li><li>&nbsp;Manage 3D scene files and assets across multiple applications. A, B, I</li><li>&nbsp;Apply the principles of animation to objects in a 3D scene. A,E</li><li>&nbsp;Use the 3D modeling and sculpting software tools to create a character or creature design. C,G</li><li>&nbsp;Demonstrate an understanding of the role of a Technical Director and rig a 3D character for animation. A, G, H</li><li>&nbsp;Select the appropriate render engine to deliver desired look to a final production. C,F</li><li>&nbsp;Create an animation sequence involving the animation of a digitally modeled scene. A,E,D,G</li><li>&nbsp;Combine assets from multiple industry standard software to create a 3D composition. B, I</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 2330,
    "Title": "Budgeted Production",
    "Learning_Outcomes": "<ol><li>Identify audience profiles, which can be used to determine suitable concept approaches and writing styles. A, B, C</li><li>Apply production techniques and technologies of motion picture media into production ready scripts. B, C</li><li>Demonstrate, in written form, the ability to create 3 or more approaches for the solution of particular communications problems. B, D</li><li>Identify and employ basic elements of creative writing. A, D</li><li>Develop and implement detailed production plan. C, E</li><li>Demonstrate effective use of time and resources within deadline parameters. E</li><li>Develop and direct a production team. E, F</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 2400,
    "Title": "Advanced Scriptwriting",
    "Learning_Outcomes": "<ol><li>Identify audience profiles, which can be used to determine suitable concept approaches and writing styles (referred to course objectives). A, B</li><li>Apply the production techniques and technologies of film, radio, and television into production ready scripts. A, C</li><li>Demonstrate, in written form, the ability to create 3 or more approaches for the solution of particular communications problems. A, C, D</li><li>Identify and employ basic elements of creative writing. A, C</li><li>Tell the difference between delivering information and involving the viewer or listener on an emotional level. A, E, F</li><li>Develop a greater insight into what it takes for a longer scripted project. A, C</li><li>Recall the stages of dramatic script development - concept, treatment and final script. B, C</li><li>Compare between documentaries and other presentational forms. B, E</li><li>Write concepts, treatments and other script materials for documentaries, emphasizing the distinctive presentational techniques of that genre. E</li><li>Prepare and research interview and discussion programs for broadcast, including --- determining purpose, analyzing target audiences, choosing topics and guests, preparing interview questions and structuring of a program. B, C, E</li><li>Recognize, prepare and use shot sheets. B, E</li><li>Explain and apply how non-broadcast delivery affects the structure and content of corporate/instructional writing. F</li><li>Demonstrate how to write in a format suitable for production in radio, TV or film. C, D</li><li>Demonstrate how to write a treatment and script and develop a storyboard. B, E</li><li>Estimate, in general terms, the overall production costs of a simple corporate or \"industrial\" production. A, E, F</li><li>Prepare for future VPT production work through development of strong script writing conceptual skills. The development of speculative work for the student. A, C</li><li>Prepare for more advanced VPT classes. A, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 2660,
    "Title": "Independent Video Projects",
    "Learning_Outcomes": "<ol><li>Develop and implement detailed production plan. A, C, D, E</li><li>Demonstrate effective use of time and resources within deadline parameters. B</li><li>Assemble and direct a production team. A, E, F</li><li>Define audience in terms of demographics and needs to be addressed in terms of specific communication objectives. A, F</li><li>Design and implement evaluation tool. A, D, E, F</li><li>Identify and apply techniques, which lead to the establishment of high values in the finished video project. A, E, F</li><li>Demonstrate awareness and willingness to meet project deadlines and milestones. B, F</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT  ",
    "Code": 2770,
    "Title": "Capstone Project",
    "Learning_Outcomes": "<ol><li>Develop and implement detailed production plan. A, D</li><li>Demonstrate effective use of time and resources within deadline parameters. E</li><li>Organize and direct a production team. B, D</li><li>Define audience in terms of demographics and needs to be addressed in terms of specific communication objectives. B</li><li>Design and implement evaluation tool. B, D</li><li>Identify and employ techniques that lead to the establishment of high production values in the finished video project. B, D</li><li>Demonstrate awareness and willingness to meet project deadlines and milestones. E</li><li>Operate a non-linear editing system. D</li><li>Identify and employ techniques which lead to the establishment of high production values in the completed video project, i.e., well manages and motivated audio, lighting, visual composition, edit pacing, etc. B,C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT   ",
    "Code": 1020,
    "Title": "Special Topics in Video",
    "Learning_Outcomes": "<ol><li>Demonstrate an awareness of the application of the specific field of study within the local video markets and/or the global media markets. A</li><li>Apply concepts learned to production work in other classes and in the professional field. A, C</li><li>Exhibit knowledge of the basic production concepts, which are enhanced by the sub- specialty of the course curriculum. A</li><li>Appreciate the use and application of the concepts presented in the specialized production field covered. A, C</li><li>Complete at least one major production project and be able to constructively criticize the work of oneself and one’s peers. A, B</li><li>Write insightful, appropriately developed answers to essay questions concerning the works studied. B, C</li><li>Articulate the value and application of the sub-specialty to the broader form of media production. A, B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT   ",
    "Code": 1021,
    "Title": "Adobe After Effects",
    "Learning_Outcomes": "<ol><li>Create animation in After Effects and demonstrate basic animation skills. D, E</li><li>Create and build 3D and 2D animated rendered compositions. A.</li><li>Animate text-using animation preset. E</li><li>Composite video/film with special effects, C.</li><li>Animate text using animation presets &amp; plug-ins. E</li><li>Understanding of cameras &amp; lights within application. E.</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT   ",
    "Code": 1050,
    "Title": "Motion Lighting",
    "Learning_Outcomes": "<ol><li>Create media that communicate the desired message to the intended audience. C</li><li>Use a wide variety of industry-standard equipment, techniques, software, hardware and materials to produce the appropriate content. A, B, C, D, E, F</li><li>Demonstrate various styles in communication media that display a grasp of both design and communications media principles and techniques. A, B, C, D, E, F</li><li>Demonstrate proficiency in the techniques and equipment that facilitate adaptation to constantly changing media. A, B, C, D, E, F</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT   ",
    "Code": 2500,
    "Title": "Campus Broadcast III: Electronic Field Production",
    "Learning_Outcomes": "<ol><li>Organize, research and write short news and feature stories for television reporting. A, B, C</li><li>Operate typical electronic newsgathering technology, shoot, mic and record and edit video news and/or feature stories. A, B, C</li><li>Practice functioning as an integral part of EFP video production unit alternately, as a videographer, sound person, editor and producer. A, B, C</li><li>Apply the production techniques of television into production ready scripts. B,C</li><li>Produce a magazine format feature news program. A, B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT   ",
    "Code": 2820,
    "Title": "Writing for TV",
    "Learning_Outcomes": "<ol><li>Establish audience profiles, which can be used to determine suitable concept approaches, and writing styles. A</li><li>Incorporate the production techniques and technologies of film, radio, and television into production ready scripts. A, B, D</li><li>Demonstrate, in written form, the ability to create 3 or more approaches for the solution for a particular communication's problem. A, B, C</li><li>Identify and employ basic elements of creative writing. A, D</li><li>Discern the difference between delivering information and involving the viewer or listener on an emotional level. B, C, D</li><li>Develop a draft for a long scripted project. D</li><li>Know the stages of dramatic script development - concept, treatment and final script. A, B</li><li>Distinguish between documentaries and other presentational forms. A, B, C</li><li>Write concepts, treatments and other script materials for documentaries, emphasizing the distinctive presentational techniques of that genre. A, B, C, D</li><li>Research and prepare interview and discussion programs for broadcast, including --- determining purpose, analyzing target audiences, choosing topics and guests, preparing interview questions and structuring of a program. B, C</li><li>Recognize, prepare and use shot sheets. C</li><li>Understand how non-broadcast delivery affects the structure and content of corporate/instructional writing. B, C</li><li>Demonstrate how to write in a format suitable for production in radio, TV or film. B, C</li><li>Demonstrate how to write a treatment, script, and develop a storyboard. A, B, C</li><li>Estimate, in general terms, the overall production costs of a simple corporate or \"industrial\" production. C</li><li>Prepare for future VPT production work through development of strong script writing and conceptual skills. A, B, C, D</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "VPT   ",
    "Code": 2960,
    "Title": "Remote Field Production",
    "Learning_Outcomes": "<ol><li>Establish hands-on skills with basic video equipment. C</li><li>Incorporate the production techniques and technologies of film, radio, and television into on-location taping. B</li><li>Contribute to production units in a positive manner. A, B</li><li>Participate in all aspects of an on-location production crew. C</li><li>Be better prepared for entry into video industry. A, B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB ",
    "Code": 1600,
    "Title": "Web Design I: Introduction to Web Technology",
    "Learning_Outcomes": "<ol><li>Use HTML5 to create Web pages. (A, B, C, D, E, F, G)</li><li>Correctly code text elements, including headings, paragraphs and lists in a Web page. (B, C, D, E, F)</li><li>Insert character entities, hypertext and graphic links. (B, C, D, E)</li><li>Validate an html document. (B, C, D, E, F)</li><li>Use Cascading Style Sheets for design and layout. (B, C, G)</li><li>Develop graphics and other content for HTML documents. (B, C, F)</li><li>Use color, typography and navigation tools to enhance HTML documents. (B, C, E)</li><li>Create responsive designs for mobile devices. (A, B, C, D, E, F, G)</li><li>Create fixed-width and liquid layouts. (B, C, F, G)</li><li>Create tables and data forms. (B, C, F)</li><li>Create a website combing text and graphics in an organized layout. (A, B, C, D, E, F, G, H, I, J)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB ",
    "Code": 2000,
    "Title": "Dreamweaver",
    "Learning_Outcomes": "<ol><li>Use Dreamweaver skillfully and efficiently. (A)</li><li>Understand the concepts and mechanics of web layout design and integration of images, text, links and navigation elements. (B)</li><li>Plan, design, create, modify, test and publish websites using Dreamweaver. (A, B, C, F, G, H)</li><li>Create pages, folders, subfolders, and local site folders to house website content and transfer them to a remote server. (A, D)</li><li>Use CSS for formatting, layout and design. (A, B, C, F)</li><li>Understand copyright laws and evaluate web content for legal use. (E, G)</li><li>Gather and assemble content to create professional web pages. (B, C, E, F)</li><li>Use Bootstrap to create web pages with responsive design. (A, B, C, F, I)</li><li>Create a multi-page website for a real world client according to client and class specifications. (A, B, C, D, E, F, G, H, I, J)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB ",
    "Code": 2150,
    "Title": "HTML5 Multimedia",
    "Learning_Outcomes": "<ol><li>Write explanations of the principle concepts of the dominant technologies that facilitate the use of audio, video and photographic images on the Internet. A</li><li>Use appropriate terminology to identify and discuss media types and delivery systems and processes. A,B,C,E</li><li>Identify appropriately prepared media for use in Web sites. A,B,C,E</li><li>Select software appropriate for preparing specific audio and video types to use in Web sites. C</li><li>Locate and install software used to prepare audio and video for use on the Internet. F,G</li><li>Perform all technical aspects of designing, planning, selecting, editing, converting, encoding, linking, uploading files to web and streaming servers and testing audio and video in Web sites. K</li><li>Use effective time management principles for their projects and assignments. B</li><li>Contribute to class discussion and project critiques and use the appropriate terminology to describe and evaluate media, procedures, equipment, software and delivery systems. B</li><li>Use tools of the Internet to communicate, manage, produce and work with others. B</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB ",
    "Code": 2220,
    "Title": "E-Commerce",
    "Learning_Outcomes": "<ol><li>Define electronic commerce (e-commerce) and discuss electronic commerce trends and statistics. (A)</li><li>Explain the difference between business-to-consumer and business-to-business e-commerce. (A)</li><li>Weigh the advantages and disadvantages of using e-commerce over traditional sales methods. (A)</li><li>Assess the initial considerations of launching an electronic commerce web site, including hardware, software, bandwidth, in-house hosting, and outsourcing. (A)</li><li>Discuss different archetypes for generating revenue on the Internet. (E)</li><li>Explain three models for collecting payments on the Internet. (C)</li><li>Discuss security issues. (B)</li><li>Explain legal aspects of e-commerce. (B)</li><li>Identify Internet issues that may present legal challenges. (B)</li><li>Identify what constitutes intellectual property and how to protect it. (A, B)</li><li>Identify the current taxation issues facing Internet commerce. (A)</li><li>Identify and define e-commerce marketing goals. (E)</li><li>Describe online marketing strategies. (E)</li><li>Understand Social Media strategies and implementation. (E)</li><li>Discuss the drivers and barriers to growth. (E)</li><li>Discuss the advantages and disadvantages of hard goods and soft goods. (E)</li><li>Explain product distribution factors and methods dealing with cost and distance. (E)</li><li>Compare global product appeal to niche product appeal. (E)</li><li>Describe localization. (E)</li><li>Identify Internet demographics and their relevance. (E)</li><li>Explain product/service awareness methods used by online marketers. (E)</li><li>Discuss exchange networks and referrer programs. (E, G)</li><li>Select among search engine placement options. (E, G)</li><li>Choose appropriate email marketing options. (E, G)</li><li>Explain the importance of usability. (D)</li><li>Discuss factors affecting usability and accessibility. (D)</li><li>Explain click patterns. (D)</li><li>Clarify the concept of screen flow. (D)</li><li>Define e-services. (E, F, G, H)</li><li>Define Customer Relationship Management (CRM). (E, F, G, H)</li><li>Define synchronous and asynchronous e-services. (E, F, G, H)</li><li>Explain Electronic Data Interchange (EDI), Open Buying on the Internet (OBI), and Open Trading protocol. (B, C)</li><li>Define business-to-business networks. (A, B, C)</li><li>Explain vertical and horizontal markets. (A, B, C)</li><li>Distinguish among the online instant storefront options for creating an electronic commerce site. (G, H, I)</li><li>Explain the advantages and disadvantages of online instant storefronts, including packages for creating and managing electronic commerce storefronts. (G, H, I)</li><li>Evaluate the administrative merits of online electronic commerce packages. (G, H, I)</li><li>Evaluate the issues involved in choosing web server software. (H)</li><li>Discuss the issues in choosing web site development software. (H)</li><li>Explain the concepts of catalog design. (E, F, G)</li><li>Explain the components of an online catalog. (E, F, G)</li><li>Define shipping and taxation requirements. (E, F, G)</li><li>Explain the issues involved in choosing a payment method. (G, I)</li><li>Identify encryption schemes such as symmetric, asymmetric, and one way. (C)</li><li>Identify the benefits provided by security implementation such as hashing, message digests, and digital signatures. (C)</li><li>Outline the consideration of a secure transaction. (C)</li><li>Explain the tools and methods used to test your site for traffic. (G, H, I)</li><li>Identify the need for server monitoring and optimization. (G, H, I)</li><li>Identify site strengths and weaknesses; SWOT analysis. (G, H, I)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB ",
    "Code": 2300,
    "Title": "JavaScript &amp; jQuery",
    "Learning_Outcomes": "<ol><li>Describe the origins of JavaScript (A)</li><li>Describe the differences between Java and JavaScript (A)</li><li>Differentiate among server-side and client-side JavaScript applications (A)</li><li>Embed JavaScript into HTML (A)\\ Use the JavaScript comment tags (A)</li><li>Communicate with users through the alert(), prompt () and confirm () methods (B)</li><li>Define variables (B)</li><li>Define data types (B)</li><li>Use expressions (B)</li><li>Use operators (B)</li><li>Define keywords and reserved words (B)</li><li>Call functions (C)</li><li>Pass arguments to functions (C)</li><li>Return values from functions (C)</li><li>Define operator precedence (C)</li><li>Discern between global and local variables (C)</li><li>Employ the conditional operator (C)</li><li>Identify user events and event handlers (C)</li><li>Use methods as functions (C)</li><li>Use conversion methods (C)</li><li>Describe the JavaScript document object model (E)</li><li>Manipulate properties and methods of the document object (E)</li><li>Identify basic regular expressions and the RegExp object (F)</li><li>Deploy the Array object to create more efficient code (F)</li><li>Identify uses for the Date and Math objects (F)</li><li>Identify and use form controls (G)</li><li>Conduct form validation (G)</li><li>Link to a jQuery file on various servers (H)</li><li>Add jQuery to a Web page (H)</li><li>Use jQuery’s on() function to manage events (H)</li><li>Explain cookies (I)</li><li>Discuss security issues relevant to JavaScript (I)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB ",
    "Code": 2350,
    "Title": "XML",
    "Learning_Outcomes": "<ol><li>Identify the basic concepts of markup languages. (A)</li><li>List the goals of XML. (A)</li><li>Define XHTML.(A)</li><li>Construct XML documents.(D)</li><li>Identify the differences between tags and elements in XML. (E)</li><li>Create a well-formed XML document. (E)</li><li>Define the Document Type Definitions (DTD). (A)</li><li>Create a DTD. (D)</li><li>Validate an XML document. (D)</li><li>Identify the requirements for a parser. (A)</li><li>Use online parsers. (C)</li><li>Use command-line parsers. (C)</li><li>Define XML namespaces and usage.(A)</li><li>Describe the relationship between XSL and XSLT. (A)</li><li>Define XML formatting requirements. (A)</li><li>Apply CSS to XML. (B)</li><li>Identify the reasons for XHTML's development. (A)</li><li>Use XML tools to clean existing documents. (C)</li><li>Identify the basic concepts of markup languages. (A)</li><li>List the goals of XML. (A)</li><li>Define XHTML.(A)</li><li>Construct XML documents.(D)</li><li>Identify the differences between tags and elements in XML. (E)</li><li>Create a well-formed XML document. (E)</li><li>Define the Document Type Definitions (DTD). (A)</li><li>Create a DTD. (D)</li><li>Validate an XML document. (D)</li><li>Identify the requirements for a parser. (A)</li><li>Use online parsers. (C)</li><li>Use command-line parsers. (C)</li><li>Define XML namespaces and usage.(A)</li><li>Describe the relationship between XSL and XSLT. (A)</li><li>Define XML formatting requirements. (A)</li><li>Apply CSS to XML. (B)</li><li>Identify the reasons for XHTML's development. (A)</li><li>Use XML tools to clean existing documents. (C)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB ",
    "Code": 2400,
    "Title": "Web Project Management",
    "Learning_Outcomes": "<ol><li>Research proposals and contracts for web projects. D</li><li>Organize and write proposals and contracts for web projects. D</li><li>Use typical software and communications technology to manage a working group. A,B</li><li>Use typical software and communications technology to produce various components of web site. A,B,C</li><li>Function as an integral part of a web site production unit alternately as a project manager and in various other production roles. A,B</li><li>Manage a web development project team and deliver a satisfactory web site. F,G,H</li><li>Perform different production roles on several teams and evaluate outcomes and organization in each experience. F,G,H</li><li>Effectively use time management principles for their projects. A,B</li><li>Give and use constructive criticism in a working relationship with other members of a web project team. A,B,H</li><li>Use appropriate terminology to function within the discipline. H</li><li>Describe and evaluate media, procedures, equipment, software and delivery systems. G</li><li>Use tools of the Internet to communicate, manage, produce and work with others in web work groups. F,G,H</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB ",
    "Code": 2501,
    "Title": "Web Special Topics",
    "Learning_Outcomes": "<ol><li>Demonstrate an awareness of the application of the specific field of study within the local web design market and or the global media market. (A, C, D)</li><li>Apply concepts learned to web design in other courses and in the professional field. (A, C)</li><li>Exhibit knowledge of the basic concepts which are enhanced by participation in the specialty of this course. (A, B, C, D)</li><li>Complete assigned projects and accept constructive criticism of one’s work. (A, B, C, D)</li><li>Articulate the value and application of the specialty to the wider use of web design. &nbsp;(A, B, C, D)</li><li>Contribute to course discussion and use appropriate terminology. (B)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB ",
    "Code": 2603,
    "Title": "Server-side Web Development (PHP/ASP)",
    "Learning_Outcomes": "<ol><li>Discuss basic facts associated with PHP and ASP. (A)</li><li>Demonstrate the ability to use PHP and ASP to produce Web applications. (A, B)</li><li>Demonstrate the ability to use controls to create, process, and validate Web forms. (A, B, E, F)</li><li>Demonstrate the ability to manipulate and retrieve data using PHP and ASP controls. (A, B, E, F)</li><li>Demonstrate the ability to understand the importance of the database and its integration with PHP and/or ASP. (A, B, G)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB ",
    "Code": 2703,
    "Title": "Adobe Acrobat",
    "Learning_Outcomes": "<ol><li>Start and quit Acrobat. B</li><li>Understand the Acrobat screen. B Insert text here…</li><li>Use the Acrobat toolbars and menus. B,L,K Insert text here…</li><li>Open and close PDF files. C Insert text here…</li><li>View a PDF file. B Insert text here…</li><li>Zoom. A</li><li>Navigate a document page. A,H,E</li><li>Move between document pages. A,H,I</li><li>Use Document Properties. A,B</li><li>Set Preferences and magnification settings. B</li><li>Select text and images. B</li><li>Download, purchase, organize, and read eBooks. B</li><li>Work with Organizer. B</li><li>Work with Collections. B</li><li>Save PDF files in other formats. B</li><li>Reduce PDF file sizes. B</li><li>Print PDFs. A,B</li><li>Convert files to PDF from multiple files, Web pages, Office applications, and Clipboard images. L</li><li>Change page order and numbers. B,H,I</li><li>Replace, insert, remove, crop, and rotate PDF pages. B,E</li><li>Add headers and footers. B,E</li><li>Work with watermarks and backgrounds. B,E,L</li><li>Work with bookmarks. B,E,L</li><li>Add comments. B,E,L</li><li>Use audio attachments. B,E,L</li><li>Edit with Drawing Markup Tools. B,E,L</li><li>Edit PDF text. G</li><li>Create form documents and fields. F</li><li>Add actions to fields. F</li><li>Create various forms fields (combo box, digital signature, list box, radio button, calculated). F</li><li>Create buttons. F</li><li>Add actions. F</li><li>Create a slideshow. A,D,F</li><li>Add sounds or movies to PDFs. F</li><li>Use Page Actions with movies. F</li><li>Use Indexes. C</li><li>Scan a document into Acrobat. G</li><li>Capture and edit images and text. G</li><li>Create a digital ID. J</li><li>Use batch processing in Acrobat. N</li><li>Create and edit sequences. N</li><li>Read PDF pages online. L</li><li>Edit PDFs online. L</li><li>Link a Web page to a PDF. L</li><li>Optimize files for online viewing.</li><li>Add document security to a PDF. K</li><li>Check the accessibility of a PDF. J</li><li>Create an accessibility report. O</li><li>Create a PDF file that will read the text out loud. O</li><li>Create a PDF file that opens at large magnification so visually challenged persons can read the text. O</li><li>Explore the accessibility options. O</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB ",
    "Code": 2811,
    "Title": "Advanced Computer Graphics",
    "Learning_Outcomes": "<ol><li>Use the Photoshop workspace and tools to effectively prepare images for the Web and print. (A, B)</li><li>Understand basic principles of photography and copyright rules. (C)</li><li>Use Bridge to manage digital assets. (D)</li><li>Effectively work with layers, make selections and incorporate color techniques to edit images. (A, B, D)</li><li>Understand typographic design and placement. (A, B, F)</li><li>Effectively use painting tools and work with special layer functions, masks, paths and shapes. (A, B, E)</li><li>Create special effects with filters, layers and enhance specific selections. (A, B, G)</li><li>Use Photoshop to accomplish basic photograph corrections as well as advanced techniques in altering and enhancing digital assets for Web and print delivery. (A, B, D, E, F, G, H)</li><li>Use Camera Raw to edit and enhance unprocessed picture data from digital images. (I)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB ",
    "Code": 2902,
    "Title": "Web Practicum",
    "Learning_Outcomes": "<ol><li>Discuss basic and advanced facts associated with the selected topic. A, B, C, D</li><li>Understand the manner in which the special topic fits into the overall picture of the program of study. A, B, C, D</li><li>Discuss appropriate technologies. A, B, C, D</li><li>Use appropriate technologies. A, B, C, D</li><li>Demonstrate the ability to integrate the course information into related projects. A, B, C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB  ",
    "Code": 2120,
    "Title": "Audio/Video for the Web",
    "Learning_Outcomes": "<ol><li>Write explanations of the principle concepts of the dominant technologies that facilitate the use of audio, video and photographic images on the Internet. A</li><li>Use appropriate terminology to identify and discuss media types and delivery systems and processes. A,B,C,E</li><li>Identify appropriately prepared media for use in Web sites. A,B,C,E</li><li>Select equipment and software appropriate for preparing specific audio and image media types to use in Web sites. C</li><li>Locate and install software used to prepare audio and video for use on the Internet. F,G</li><li>Perform all technical aspects of designing, planning, creating, selecting, capturing, editing, converting, encoding, linking, uploading files to web and streaming servers and testing audio and video in Web sites. K</li><li>Effectively use time management principles for their projects and assignments. B</li><li>Contribute to class discussion and project critiques and use the appropriate terminology to describe and evaluate media, procedures, equipment, software and delivery systems. B</li><li>Use tools of the Internet to communicate, manage, produce and work with others. B</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB  ",
    "Code": 2401,
    "Title": "Accessible Web Design &amp; Compliance",
    "Learning_Outcomes": "<ol><li>Create valid, well-formed, standards-compliant web pages. (D, F)</li><li>Understand the barriers to access of various disability groups including blind, deaf, vision and mobility-impaired, and learning disabled users. (A, B, C, D)</li><li>Understand assistive/accessible/adaptive technologies (AT) utilized by users with disabilities. (A, B, C, D)</li><li>Implement consistent, predictable, and accessible site navigation. (B, D, F)</li><li>Design accessible XHTML forms. (D, F, H)</li><li>Set accessibility features in Adobe Reader. (H)</li><li>Distinguish accessible and inaccessible web pages via markup. (B, G)</li><li>Design ADA and Section 508 compliant web sites. (A, B, D, K)</li><li>Understand User Agent and Authoring Tool Accessibility Guidelines. (A, B, D, K)</li><li>Distinguish between WCAG 1.0 and WCAG 2.0 (Working Draft) Recommendations. (D)</li><li>Design for various screen sizes, display devices and alternate-input devices. (A, D)</li><li>Understand basic captioning for several popular multimedia formats. (C, J, K)</li><li>Recognize SMIL and SAMI files. (I)</li><li>Interpret W3C Recommendations for Web technologies and apply them to Web content. (D)</li><li>Use and understand assistive technology terminology and acronyms. (C)</li><li>Be familiar with worldwide accessibility initiatives. (D, K)</li><li>Use appropriate alternative text to describe non-text content. (D, G)</li><li>Use CSS to separate content from presentation. (F)</li><li>Explain the technical and financial benefits of designing accessible websites. (H)</li><li>Learn how disabled users access web content using assistive technologies. (C, J, K)</li><li>Describe color considerations in Web Design. (B)</li><li>Ensure sufficient color contrast for users with color deficits. (B, J)</li><li>Use metadata and markup to facilitate searches and optimize page rank. (E, G, H)</li><li>Use semantic markup to achieve meaningful and identifiable web content. (K)</li><li>Understand usability testing methods. (B)</li><li>Adjust accessibility options in various User Agents and Authoring Tools. (B, G)</li><li>Understand accessible JavaScript techniques. (A, F)</li><li>Learn techniques to create and publish accessible PDF and Microsoft Office documents to the Web. (A, I)</li><li>Create a simple XML document, RSS feed, and podcasts using free applications. (I)</li><li>Extend the functionality of several browsers using extensions and add-ins to assist in analyzing web pages for accessibility. (J, K)</li><li>Use effective link text and headings to assist navigation. (A, B)</li><li>Evaluate web pages/sites for accessibility and prioritize repairs. (J)</li><li>Learn to retrofit inaccessible web pages. (A, B, D)</li><li>Implement accessible markup for XHTML content (tables, forms, objects, etc.). (D, F)</li><li>Use XHTML form elements and attributes to create accessible forms. (D, F)</li><li>Use XHTML table elements and attributes to create accessible data tables. (D, F)</li><li>Create web pages using relative font sizes and utilize appropriate fonts and font properties to attain maximum usability. (A, B, F, G)</li><li>Review case law as it applies to the Web. (G, K)</li><li>Learn the financial and consumer benefits to e-Commerce in constructing accessible web sites. (G, K)</li><li>Understand the benefits of Cascading Style Sheet (CSS) positioning over layout tables. (E)</li><li>Create and apply CSS rules and media-specific stylesheets. (E)</li><li>Understand how screen readers \"read the Web.\" (C)</li><li>Understand AJAX accessibility issues. (A, D)</li><li>Create a style guide to effect usability. (E, F)</li><li>Understand the fundamentals of Web graphics. (A, B)</li><li>Use headings, lists, breadcrumbs, and \"skip links\" to improve usability and navigation. (A, B, F)</li><li>Ensure web pages linearize logically with coherent reading order. (A, B)</li><li>Learn how to use automated evaluation tools to check for validity and well-formedness. (J, K)</li><li>Plan the Information Architecture of a site to enhance usability. (A, B)</li><li>Understand the benefits and drawbacks of frames. (A, B, D)</li><li>Create accessible framed web pages. (A, B)</li><li>Understand techniques for producing accessible rich media. (J)</li><li>Explain the difference between captions, subtitles, and dubbing. (A, B, J)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB   ",
    "Code": 2812,
    "Title": "Web Design III: Advanced Site Design",
    "Learning_Outcomes": "<ol><li>Describe the current state and design limitations of HTML. A</li><li>Learn how XML and XHTML could transform the future of the web. A</li><li>Describe how web browsers affect the way users view web sites. A</li><li>Decide if you should use an HTML editor to create markup code. A</li><li>Identify the elements that make up a well-designed web page. B</li><li>Research the Web to locate attractive, well-designed web pages. B</li><li>Describe how screen resolution and connection speed affect the user's browsing experience. B</li><li>Clear the cache when testing your site. B</li><li>Describe how web pages are delivered via the Internet and stored on a user's computer. B</li><li>Use image maps in HTML documents. B</li><li>Create a site specification document. B</li><li>Identify a content goal. B</li><li>Create a user-focused site by analyzing the audience. B</li><li>Consider the different roles and talents necessary to build a web site. B</li><li>Create naming conventions for site files. B</li><li>Build a relative file structure that is portable to different web servers. B</li><li>Understand navigation principles. A,B</li><li>Build navigation schemes that meet users' needs. B,C</li><li>Use hypertext linking creatively. A,B</li><li>Use the Internet to do research. F</li><li>Use graphical for navigation and linking. A,B</li><li>Understand how tables can enhance the display of content. A,C</li><li>Use HTML table elements and attributes to customize page templates. A,C</li><li>Learn how to take a page design concept to HTML code. A,C</li><li>Recognize basic page templates. A,C</li><li>Understand principles for type design on a web site. A,E</li><li>Understand why you should use Cascading Style Sheet (CSS) instead of the &lt;FONT&gt; element. A,E</li><li>Create style rules using the CSS language. A,E</li><li>Selectively apply CSS style rules. A,E</li><li>Specify CSS font properties and block-level space values. A,E</li><li>Build and apply style classes. A,E</li><li>Understand the differences between the web-based image file formats: GIF, JPG, and PNG. A,F</li><li>Know which type of file format to use for which type of image. A,F</li><li>Understand the basics of computer color. A,F</li><li>Use hexadecimal color values to add color to pages. A,F</li><li>Use the &lt;IMG&gt; element and attributes to display images effectively. A,F</li><li>Understand the benefits and drawbacks of frames. A,G</li><li>Understand and use frames syntax. A,G</li><li>Understand and use frame targeting and special targeting names. A,G</li><li>Design framesets that accommodate different screen resolutions. A,G</li><li>Design forms to collect information. A,F</li><li>Understand the features of Internet Service Providers and what to look for when choosing one. A,I</li><li>Use the File Transfer Protocol (FTP) to transfer files to and from the website. A,I</li><li>Plan for usability testing and user feedback. A,I</li><li>Plan for ongoing site maintenance and updates. A,I</li><li>Use a variety of ways to enhance search engine listings of web site. A,I</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WEB     ",
    "Code": 2010,
    "Title": "Web Design II: Design Fundamentals",
    "Learning_Outcomes": "<ol><li>Describe how the client/server model functions on the Internet. (A)</li><li>View Web page source code. (B, E).</li><li>Access and download files using File Transfer Protocol (FTP). (A, B).</li><li>Describe the purpose of plug-ins and identify plug-ins and viewers, (A, C, E).</li><li>Identify various file formats, such as MPEG, MP3, MOV, AIFF, AU, WAV, AVI, EPS, TIFF, and RTF. (A, D, E, H, I).</li><li>Incorporate image files as stand-alone graphics into web pages, use the Web-safe color palette, and create backgrounds with color and tiled images. (D, F, J, L).</li><li>Create hyperlinks for text and images and link to local files, remote sites, and internal anchors within the same file. (F, H, J).</li><li>Use color and fonts to convey a company's culture and industry and identify colors in numeric formats. (A, J)</li><li>Define color depth and resolution. (B, J)</li><li>Define the HTML standard and identify the differences in HTML versions. (E,G, K)</li><li>Identify web accessibility issues and solutions. (E, G, L).</li><li>Use CSS for page structure. (E, G, L)</li><li>Use the META tag and its attributes to influence search engine results.(E,G, K)</li><li>Create and link to an external style sheet. (E,G)</li><li>Define and apply web design principles. (B,G, L)</li><li>Define programming concepts such as objects, properties, and methods. (B,G)</li><li>Identify ways in which JavaScript differs from HTML, Java applets, and Java. (B,G, M)</li><li>Define cookies and describe the ways in which they can be used to enhance a web site. (A,B,C,G, M, N)</li><li>Publish a web site. (A,B,C,G, L, M, N)</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD ",
    "Code": 1010,
    "Title": "Quality &amp; Inspection",
    "Learning_Outcomes": "<ol><li>Utilize various precision instruments and gauges found in inspection departments to insure quality control procedures.&nbsp; A - E<br></li><li>Utilize hands-on experience in inspection procedures using surface plate tools and equipment. A<br></li><li>Interpret tolerances, allowances for various fits and layout procedures. D<br></li><li>Use layout equipment, inspection gauges and precision measuring instruments. E<br></li><li>Use small precision measurement tools such as micrometers, calipers, hole gauges, etc. A, E<br></li><li>Use surface plate equipment, height gauges, gauge blocks and the sine bar. C<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD ",
    "Code": 1383,
    "Title": "Welding Symbology &amp; Blueprint Reading",
    "Learning_Outcomes": "<ol><li>Interpret the content of drawings. A, B<br></li><li>Explain the meaning of welding symbols. C<br></li><li>Interpret welding notes. A<br></li><li>Evaluate the content of bills of materials. A<br></li><li>Convert from standard US to Metric. D<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD ",
    "Code": 2120,
    "Title": "Pipe Welding",
    "Learning_Outcomes": "<ol><li>Prepare and operate SMAW arc welding equipment on pipe.&nbsp;&nbsp; A, C<br></li><li>Identify and explain pipe weld techniques with SMAW equipment. A<br></li><li>Perform pipe welds in the 2G, 5G and 6G positions using SMAW equipment. A, C<br></li><li>Prepare and operate GTAW arc welding equipment on pipe. A, B, C<br></li><li>Identify and explain pipe weld techniques with GTAW equipment. A<br></li><li>Perform pipe welds in the 2G, 5G, and 6G positions using GTAW equipment. A, C<br></li><li>Identify pipe welding distortion, defects and the cause. B<br></li><li>Explain the essentials of welding metallurgy. B<br></li><li>Pass visual and guided bend test. C<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD ",
    "Code": 2320,
    "Title": "Welding Practicum II",
    "Learning_Outcomes": "<ol><li>Demonstrate skills to be used in the work place.&nbsp; A - F<br></li><li>Employ welding process learned in previous classes into project design and fabrication. A - F<br></li><li>Apply appropriate time management in completing tasks.&nbsp;&nbsp; C, E, F<br></li><li>Work independently or together as a team.&nbsp; E<br></li><li>Utilize library and internet research to plan, develop, and analyze a team based project.&nbsp; D<br></li><li>Present final project formally to an evaluation committee or peer group.&nbsp; C, D, E, F<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD ",
    "Code": 2330,
    "Title": "Welding Practicum III",
    "Learning_Outcomes": "<ol><li>Demonstrate skills to be used in the work place.&nbsp; A - F<br></li><li>Employ welding process learned in previous classes into project design and fabrication.&nbsp;&nbsp; A - F<br></li><li>Apply appropriate time management in completing tasks.&nbsp;&nbsp; C, E, F<br></li><li>Work independently or together as a team. E<br></li><li>Utilize library and internet research to plan, develop, and analyze a team based project. D<br></li><li>Present final project formally to an evaluation committee or peer group.&nbsp;&nbsp; C, D, E, F<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD ",
    "Code": 2371,
    "Title": "Gas Metal Arc Welding (GMAW &amp; FCAW)",
    "Learning_Outcomes": "<ol><li>Weld heavy (1\" thickness and greater) plate in all positions. A - C<br></li><li>Successfully pass the AWS D1.1 plate certification for GMAW unlimited thickness (side bend). A - C<br></li><li>Calculate the cubic foot per hour of inert for welding. A<br></li><li>Calculate thermal saturation time for metals 1” or thicker. A<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD ",
    "Code": 2372,
    "Title": "Gas Tungsten Arc Welding (GTAW)",
    "Learning_Outcomes": "<ol><li>Weld heavy (1\" thickness and greater) plate in all positions. A - C<br></li><li>Successfully pass the AWS D1.1 plate certification for GTAW unlimited thickness (side bend). A - C<br></li><li>Calculate the cubic foot per hour of inert for welding. A<br></li><li>Calculate thermal saturation time for metals 1” or thicker. A<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD ",
    "Code": 2460,
    "Title": "Metallurgy &amp; Materials Testing",
    "Learning_Outcomes": "<ol><li>Identify the effects of alloying elements on steels and other alloy systems.&nbsp; A, B<br></li><li>Identify the methods of heat treatment on various materials and explain the effects of heat treatment processes.&nbsp; B, D<br></li><li>Calculate the reduction area of tensile pull test specimens. E<br></li><li>Calculate the tensile strength of different test materials. C, E<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD  ",
    "Code": 1300,
    "Title": "Welding Practicum I",
    "Learning_Outcomes": "<ol><li>Demonstrate Shielded Metal Arc welding skills to be used in the work place.&nbsp; A-F<br></li><li>Employ welding process learned in previous classes into project design and fabrication.&nbsp; A-F<br></li><li>Apply appropriate time management in completing tasks.&nbsp;&nbsp; C, E, F<br></li><li>Work independently or together as a team.&nbsp; E<br></li><li>Utilize library and internet research to plan, develop, and analyze a team based project.&nbsp; D<br></li><li>Present final project formally to an evaluation committee or peer group.&nbsp;&nbsp; C, D, E, F<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD  ",
    "Code": 1382,
    "Title": "Pattern Development",
    "Learning_Outcomes": "<ol><li>Read and interpret fabrication sketches and drawings.&nbsp;&nbsp;&nbsp; A, B, D</li><li>Sketch and construct forms using the parallel line method.&nbsp;&nbsp; F</li><li>Measure completed form - determine fitness for use.&nbsp;&nbsp; B</li><li>Sketch and construct complex forms using radial lines and triangulation.&nbsp;&nbsp; F</li><li>Transfer pattern development concepts into practical problem solving application.&nbsp;&nbsp; F</li><li>Describe the principles of triangulation in pattern development.&nbsp;&nbsp; F</li><li>Describe the principles of radial lines in pattern development.&nbsp;&nbsp; F</li><li>Compare and contrast parallel line, radial line, and triangulation.&nbsp;&nbsp; F</li><li>Identify and employ various industrial resources to aid in practical problem solving.&nbsp; A-F</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD  ",
    "Code": 2360,
    "Title": "Non-Destructive Testing, Codes &amp; Inspection",
    "Learning_Outcomes": "<ol><li>define, explain, and associate the terminology used in destructive and non-destructive testing.&nbsp; A</li><li>select appropriate testing methods and identify equipment required for the testing process.&nbsp; A</li><li>select appropriate test samples.&nbsp; B</li><li>calibrate equipment as required.&nbsp; B</li><li>determine material hardness using both Rockwell and Brinell testing methods.&nbsp; B</li><li>perform tensile and compression tests on various types and shapes of materials.&nbsp; B</li><li>determine applicable welding code, recognize essential vaiables, procedure qualifications, and welder qualification recordings.&nbsp; D</li><li>perform a dye penetrant and magnetic particle test to detect surface defects.&nbsp; B</li><li>perform a basic ultrasonic test to detect internal material defects.&nbsp; B</li><li>select appropriate data collection method.&nbsp; C</li><li>determine acceptability of data and \"accept or reject\" results.&nbsp; C</li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD  ",
    "Code": 2370,
    "Title": "Shielded Metal Arc Welding (SMAW)",
    "Learning_Outcomes": "<ol><li>Weld in 1F, 2F, 3F, and 4F positions with E-6010 1/8\" and E-7018 1/8\" electrodes. A</li><li>Burn and fit-up weld joints, laps and tees; butt joints, open and closed; and V-groove, open and backed. A<br></li><li>Weld in the 1G, 2G, 3G, and 4G positions, with E-6010 and E-7018 electrodes. A<br></li><li>Successfully pass the AWS D1.1 structural welding code certification tests (sections 5.15 - 5.29).&nbsp; B, C<br></li><li>Calculate tolerances and strengths of welds by the AWS D1.1 Welding Codes. A, C<br></li></ol>"
  },
  {
    "Department": "Engineering and Media Technologies",
    "Rubric": "WELD   ",
    "Code": 1381,
    "Title": "Principles of Welding",
    "Learning_Outcomes": "<ol><li>Classify and explain welding processes and methods of application. (A)</li><li>Explain and demonstrate welding procedures. (A)</li><li>List and explain personnel protection and safety rules. (B)</li><li>Identify and define electrical shock, arc radiation, air contamination, and compressed gas hazards. (B)</li><li>Distinguish between transformer, rectifier, and inverter welding machines. (C)</li><li>Identify and describe the three types of welding electrodes. (D)</li><li>Identify and describe the three types of welding gases. (D)</li><li>Categorize and compare metals regarding welding heat and welding metallurgy. (E)</li><li>Compare and contrast welding of carbon, alloy, stainless, and high-strength steels. (E)</li><li>Identify and describe the welding of aluminum, copper, nickel-base and magnesium-based alloys, reactive and refractory metals. (E)</li><li>Identify and describe shielded metal, flux-cored, and submerged arc welding. (F)</li><li>Compare and contrast resistance, electron beam, and laser beam welding. (F)</li><li>Identify and describe automated welding methods in current use. (F)</li><li>Compare and contrast brazing and soldering materials and joining techniques. (G)</li><li>Create and implement a weldment design and calculate its estimated cost. (H)</li><li>Analyze a weldment design and formulate a quality control plan for evaluation. (I, J)</li><li>Prepare a comprehensive report based on individual and collaborative effort. (J)</li><li>Prepare an oral presentation using Microsoft PowerPoint through individual and collaborative effort. (J)</li><li>Deliver an oral presentation using proper speech techniques. (J)</li><li>Utilize computer based word-processing and discipline-related software. (J)</li><li>Develop, analyze, edit, and complete a project in a teaming environment. (J)</li><li>Demonstrate ability to function as an active and effective team member. (J)</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "COLL ",
    "Code": 1000,
    "Title": "First Year Seminar",
    "Learning_Outcomes": "<ol><li>Practice and strengthen behaviors that contribute to academic success in higher education:<ol><li>Understand and adhere to expectations for behavior in the college environment as stated in the Student Code of Conduct in the College Catalog, the course syllabus, as well as in verbal or written classroom instructions; A</li><li>Utilize a time management strategy to schedule time commitments both in and out of school; A, C</li><li>Demonstrate effective and consistent organization of course materials, both hard copy and digital; A, C</li><li>Employ effective strategies for reading college-level texts; A, C</li><li>Utilize a range of note-taking methods; A, C</li><li>Practice various study methods used to prepare for different types of exams and quizzes; A, C</li><li>Recognize and implement strategies useful for completing various types of assignments; A</li><li>Initiate conversations with instructors, especially to discuss progress in class; B</li><li>Work in collaborative relationships with peers; B</li></ol></li><li>Develop the habits of mind that contribute to academic success in higher education:<ol><li>Explain the difference between growth and fixed mindsets; C</li><li>Recognize that college, like life, may present unfamiliar or uncomfortable situations and formulate strategies to help overcome and adapt to this kind of experience; A, B, C</li><li>Complete difficult and/or challenging tasks; A, C</li><li>Use both positive and negative feedback from instructors and peers; A, B, C</li><li>Demonstrate critical thinking; A, C</li><li>Use self-evaluation strategies to improve academic progress; A, C</li><li>Demonstrate an understanding of the role that personal responsibility plays in college and beyond. A, B, C</li></ol></li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "COLL ",
    "Code": 1500,
    "Title": "College Success",
    "Learning_Outcomes": "<ol><li>Identify and/or utilize PSCC campus resources that could prove helpful for their academic and personal success. B, D</li><li>Practice and strengthen behaviors that contribute to academic success in higher education:<br>a) Understand and adhere to expectations for behavior in the college environment as stated in the Student Code of Conduct in the College Catalog, the course syllabus, as well as in verbal or written classroom instructions; A, E<br>b) Utilize a time management strategy to schedule time commitments both in and out of school; D, E<br>c) Demonstrate effective and consistent organization of course materials, both hard copy and digital; E<br>d) Employ effective strategies for reading college-level texts; A, E<br>e) Utilize a range of note-taking methods; A, E<br>f) Practice various study methods used to prepare for different types of exams and quizzes; A, E<br>g) Recognize and implement strategies useful for completing various types of assignments; A, E<br>h) Initiate conversations with instructors, especially to discuss progress in class; A, C,<br>i) Work in collaborative relationships with peers; C, E<br>j) Identify career skills and interests and investigate career options; B, C, D<br>k) Map out a personal academic plan leading to completion of PSCC degree or certificate requirements. B, C, D</li><li>Develop the habits of mind that contribute to academic success in higher education:<br>a) Explain the difference between growth and fixed mindsets; D, E<br>b) Recognize that college, like life, may present unfamiliar or uncomfortable situations and formulate strategies to help overcome and adapt to this kind of experience; A, B, C, D, E<br>c) Complete difficult and/or challenging tasks; A, D, E<br>d) Use both positive and negative feedback from instructors and peers; A, C, E<br>e) Demonstrate critical thinking; A, E<br>f) Use self-evaluation strategies to improve academic progress; A, D, E<br>g) Recognize the role that personal responsibility plays in college and beyond. A, D, E<br>h) Use self-evaluation strategies to improve academic progress; A, D, E<br>i) Recognize the role that personal responsibility plays in college and beyond. A, D, E</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "COMM ",
    "Code": 1020,
    "Title": "Media Writing ★",
    "Learning_Outcomes": "<ol><li>Explain the nature and structure of the news industry. A</li><li>Describe the historical background of the news media. B</li><li>Identify special interest newspapers. A</li><li>Explain the role of the reader/viewer in shaping the news industry. C</li><li>Explain the importance of news values in shaping story selection, focus, and organization. C</li><li>Demonstrate news gathering skills. D</li><li>Interview story sources with confidence. D</li><li>Write stories that are clear, concise, and concrete. E</li><li>Write news copy according to accepted journalistic conventions as exemplified in the AP Stylebook. E</li><li>Demonstrate basic editing skills. A, E</li><li>Adapt newswriting skills and formats to produce news releases. F</li><li>Write a standard news release. F</li><li>Research, write, and present a news broadcast. A, E</li><li>Explain the Freedom of Information Act. G</li><li>Describe defenses against libel actions. A, G</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "COMM ",
    "Code": 2045,
    "Title": "Public Speaking ♦ ★",
    "Learning_Outcomes": "<ol><li>Explain what communication apprehension is, develop and apply coping strategies. A</li><li>Actively listen to and critically evaluate oral presentations. C</li><li>Select, research, and develop informative, persuasive, and special occasion topics appropriate for the speaker, listener and occasion. B, E, G</li><li>Cite relevant, reliable and sufficient sources in oral presentation. B, E</li><li>Present evidence using logical reasoning to support claims in persuasive speaking. B, E</li><li>Organize material in a purposeful, cohesive outline. B,E,G</li><li>Use presentation aids effectively and appropriately to support and enhance a presentation. B,D</li><li>Adapt an oral style using accurate, clear, and expressive language appropriate to the speaker, the audience and the occasion. A,E,F</li><li>Adapt a nonverbal style using eye contact, gestures, movement, and vocal variety appropriate to the speaker, the audience and the occasion. A,E,F</li><li>Construct a preparation outline and a speaker’s outline for extemporaneous delivery. A,</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "COMM ",
    "Code": 2055,
    "Title": "Argumentation &amp; Debate",
    "Learning_Outcomes": "<ol><li>Channel speech fright into useful competitive team debate strategies. A, I, J</li><li>Reframe speech fright by planning and rehearsing adequately. A, B, J</li><li>Understand/practice listening to improve competition and debate. C, H</li><li>Encourage teamwork by being an active listener. C, I, H</li><li>Plan and deliver effective arguments and debates based on research. D, H, J</li><li>Intelligently utilize written materials and notes in debates/arguments. B, E, H</li><li>Listen actively to debates to craft written and oral evaluations. C, E, I</li><li>Maintain oral presentation skills/poise during argument and debate. A, B, E, H, I</li><li>Take ownership of team success by effectively planning/implementing strategy. E, I, J</li><li>Take ownership of team success as listener to assist effective cross/Question and answer. C, H, I</li><li>Distinguish between observation and judgment, fact and inference for ethical, competitive advantage. B, E, F, H, I, J</li><li>Plan, research, and present an effective persuasive team debate. B, J</li><li>Plan and present an effective persuasive policy argument. B, J</li><li>Plan and present an effective team debate on a point of value or ethics. B, J</li><li>Create clear prima facie propositions of fact/value. E</li><li>Help establish group cohesion by being willing to learn &amp; solve problems. G, H, I, J</li><li>Demonstrate reflective listening in group discussions and cross. G, H, I</li><li>Understand, identify and analyze nonverbal behavior and its ambiguity. C E, F, H, I</li><li>Speak concisely to reduce misunderstanding and facilitate debate form. E, G, H, I&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li><li>Use Standard English in a competitive setting with poise and quality. A, E, G, H, I</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "COMM ",
    "Code": 2085,
    "Title": "Business &amp; Professional Communication",
    "Learning_Outcomes": "<ol><li>Understand the importance of speaker readiness in organizations and industry. B</li><li>Participate in role-playing to understand human creativity and stress reduction. C</li><li>Give a value speech using visuals and understand the proper/correct usage of these visuals. A, D</li><li>Demonstrate an understanding of non-verbal symbols through the use of effective costuming. D</li><li>Cope with speech fright. C</li><li>Improve communication skills by understanding and practicing reflective listening. E</li><li>Encourage a speaker by being an active listener. A, E</li><li>Plan and deliver a persuasive speech using visuals and incorporate a question/answer session in the parliamentary situation. D</li><li>Deliver a speech from note cards. B, E</li><li>Listen actively to a speech and perform written and oral evaluation of this event. C,G</li><li>Maintain eye contact with the audience during a speech. F</li><li>As an orator, accept primary responsibility for the communication process. A,F</li><li>As a listener, accept secondary responsibility for the communication process. E</li><li>Distinguish between observation and judgment and utilize both effectively to support a position. B</li><li>Plan, research, and present an informative speech. E</li><li>Plan, research, and present an effective 8-9 minute persuasive speech using visual aids. E</li><li>Plan, research, and present an effective \"How to...\" demonstration speech. E</li><li>Emphasize the major point of a speech by restatement of the subject sentence or major theme. A, F</li><li>Understand the communicative process in an interview for information. C</li><li>As a group member, meet the interpersonal needs of other members. A</li><li>Help establish group cohesion by being willing to learn and problem solve. A</li><li>Demonstrate reflective listening in group discussions. H</li><li>Comprehend, master, and direct parliamentary procedure, B,H</li><li>Understand, identify, and analyze nonverbal communication behavior and the potential ramifications. G</li><li>Speak concisely to reduce misunderstanding. F</li><li>Convey oral messages in standard English. F</li><li>Research, prepare, and deliver as a contributing member a group presentation on a current issue. C,F</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "COMM ",
    "Code": 2090,
    "Title": "Interpersonal Communication",
    "Learning_Outcomes": "<ol><li>Explain the process of interpersonal communication. D</li><li>Explain the nature of human perception. D</li><li>Identify the components of the self-concept. A,D.</li><li>Define connotation and denotation in verbal communication. B,D</li><li>Use appropriate language skills in an interpersonal setting. B,C.E</li><li>Apply appropriate language skills in an interpersonal setting. B,C,E</li><li>Apply/analyze the various types of nonverbal communication. B,D,E</li><li>Analyze the nonverbal habits of another speaker. D,E</li><li>Observe and explain the use of space in his or her own communication. B,D,E</li><li>Begin and engage in a conversation.</li><li>Describe the process of choosing an appropriate level of self-disclosure. B,D,E</li><li>Analyze interpersonal relationships using Johari’s window. A,B,D</li><li>Describe the components of the active listening model. D,F</li><li>Separate facts from inference. B,F</li><li>Evaluate the validity of inferences. B,C,D,F</li><li>Contrast and compare several methods of improving memory. B,C,F</li><li>Formulate open-ended questions in the interpersonal setting. B,C,E</li><li>Formulate clear paraphrases to the satisfaction of a partner. B,C,E</li><li>Recognize and describe various problem responses in interpersonal communication. B,E</li><li>Analyze his/her own arguments in a persuasive appeal. B,E</li><li>Describe various means of increasing credibility with other people. B,C,D</li><li>Evaluate and describe various theories of communication and apply them appropriately to his/her own communication behavior. B,C,D</li><li>Demonstrate/infer the differences among assertiveness, passiveness, and aggressiveness. B,C,D,G</li><li>Analyze and compare methods of increasing assertiveness. B,D,E,G</li><li>Analyze the pattern of a real-life or role-played conflict. B,D,G</li><li>Describe the characteristics of an effective work group. B,D</li><li>List and define various task, maintenance, and negative roles in group settings. B,D</li><li>Apply a model for problem solving in groups to an exercise. B,D,E,F,G</li><li>Analyze his/her abilities and qualifications for communicating and disclosing self in a job interview. D,E,H</li><li>Participate in a mock interview. B,C,E,H</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "COMM  ",
    "Code": 1010,
    "Title": "Introduction to Mass Communication ★",
    "Learning_Outcomes": "<ol><li>Describe the nature and kinds of communications. A</li><li>Define mass communication and contrast to other communication systems. A</li><li>Recount and explain the development of mass communications in general and specific forms of mass media in particular. A,B</li><li>Contrast and discuss economic controls on the media and their implications for society. C,E</li><li>Compare and contrast the communication industries. C,D</li><li>Explain the roles and ramifications of support industries, such as advertising and public relations. D,E</li><li>Perform an analysis of a specific example of a mass media outlet (newspaper, radio station, television station, etc.) A,D</li><li>Explain the effect of technological development on specific forms of mass media. A,B</li><li>Explain the relationship of media economics and content. E</li><li>Describe current issues in each field of mass communication. D</li><li>Discuss mass communication law, ethical practice, and social responsibility. D</li><li>Perform an attitudinal survey. A,B</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL ",
    "Code": 2310,
    "Title": "Early World Literature ♦ ★",
    "Learning_Outcomes": "<ol><li>Explain and trace literary themes in found in the Ancient/Classical period—such as creation, sin, reward and punishment, suffering, and salvation—through the Middle Ages and the Renaissance. A, B</li><li>Identify and explain the major themes and conventions of at least one epic and one play from the Ancient/Classical period. A, B, C</li><li>Show the influence of at least one major work from each literary period covered in the course—Ancient/Classical, Medieval, and Renaissance—on subsequent thought and writing in the western world. A, B</li><li>Define and illustrate typical genres of the Medieval Period, such as fabliau, miracle play, mystery play, frame story, epic, and romance. A, C</li><li>Define and illustrate typical genres of the Renaissance, such as novel, sonnet, epic, comedy and tragedy. A, C</li><li>Trace the development of drama from the Ancient/Classical period through the Renaissance. A, C</li><li>Write insightful, appropriately developed, grammatically correct responses on essay test questions and in analytical papers concerning the works studied. D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL ",
    "Code": 2620,
    "Title": "Introduction to Poetry Writing ★",
    "Learning_Outcomes": "<ol><li>Examine drafts to analyze audience and message and to evaluate for effectiveness and clarity. B, D</li><li>Recognize the style and contributions of guest speakers who are published poets. C, D, E</li><li>Evaluate assigned manuscripts and participate in class discussion. A, B, C</li><li>Analyze/critique poetry from the vantage of a working poet. A, B, C, D</li><li>Identify and write traditional fixed poetic forms. A, B, D</li><li>Identify and incorporate in writing more than a dozen types of figurative language. A, B, D</li><li>Identify and incorporate in writing various stanza structures and metrical patterns. A, B, D</li><li>Identify and incorporate in writing various sound devices. A, B, D</li><li>Demonstrate an understanding of the history and traditions of poetic forms that influence modern verse. A, B, D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL ",
    "Code": 2670,
    "Title": "Introduction to Screenwriting",
    "Learning_Outcomes": "<ol><li>Identify the paradigmatic structure and features of a screenplay. A, B</li><li>Develop a screenplay from story concept and premise. A, B, C, D</li><li>Develop and build characters in a screenplay. A, B</li><li>Identify and adapt the screenplay format. A, B, D</li><li>Write individual scenes according to five basic principles. A, B, D</li><li>Write and revise an entire screenplay individually or in collaboration. A, B, C, D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL ",
    "Code": 2950,
    "Title": "Business &amp; Technical Writing ★",
    "Learning_Outcomes": "<ol><li>Distinguish between different style guidelines for individual organizations and use them appropriately. A, C</li><li>Choose formats expected in formal and informal workplace communications. A, B, C</li><li>Edit model documents for conciseness and readability. C</li><li>Appraise sample workplace writing samples to determine efficacy. C</li><li>Analyze and adapt writing to intended audiences/readers. B, C</li><li>Write workplace e-mails aimed at particular audiences. B</li><li>Write workplace memos aimed at particular audiences. B</li><li>Write business letters aimed at particular audiences. B</li><li>Access relevant research to paraphrase and cite using MLA documentation. D</li><li>Determine validity and soundness of varying cyberspace sources. D</li><li>Differentiate among report levels of formality, intended audience, and formats. E, F</li><li>Write short and long/informal and formal reports aimed at specific audiences. E, F</li><li>Solve business and technical problems through report writing. E, F</li><li>Participate in groups to respond in report form (bid) to requests for proposals. E, F</li><li>Participate in groups to develop <em>PowerPoint </em>presentations for oral bids. E, F</li><li>Write personal resume and cover letter. G</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL  ",
    "Code": 2035,
    "Title": "Introduction to Fiction ♦ ★",
    "Learning_Outcomes": "<ol><li>Recognize fiction as a unique genre; identify and explain its major themes and traditions. A, B, C</li><li>Employ various critical approaches to understanding fiction. C, D</li><li>Identify the terms and techniques of fiction. C, D</li><li>Analyze a piece of fiction according to point of view, character, dialogue, plot, symbol, and setting. A, C, D</li><li>Identify and discuss sociological and psychological factors in fiction. A, B, C, D</li><li>Demonstrate an understanding of the relationship between life and literature by relating biographical information about the authors to their works. A, B</li><li>Trace the development of the novel from its origins to the present. A, B</li><li>Evaluate the historical and political context of short fiction and the novel. A, B, D</li><li>Write responses and analytical papers in response to fiction. D</li><li>Write insightful, appropriately developed, mechanically correct answers to essay test questions concerning the works studied. D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL  ",
    "Code": 2060,
    "Title": "Introduction to Shakespeare ★",
    "Learning_Outcomes": "<ol><li>Analyze audience and message in the poems and plays of Shakespeare. A, C, D, E</li><li>Compare drama throughout history and across cultures by seeing live performances of theater. A, C, G</li><li>Identify and understand Shakespeare’s major themes and stylistic achievements. A, B</li><li>Employ various critical approaches to understanding Shakespeare’s sonnets and plays. B, C, D</li><li>Identify dramatic terms and techniques. C, D, E</li><li>Evaluate a play according to structure, visual impact, and dialogue. C, D, E</li><li>Identify sociological and psychological factors in Shakespeare’s plays. A, B, D</li><li>Recognize mythology in the works of Shakespeare. A, B, D</li><li>Relate biographical information about Shakespeare to his works. A, B, C</li><li>Evaluate the historical and political context of Shakespeare’s plays. A, B, C</li><li>Write analytical and researched essays in response to Shakespeare’s sonnets, dramas, and comedies. A, B, C, D, E, F, G</li><li>Write insightful, appropriately developed, mechanically correct answers to essay test questions concerning the works studied. A, B, C, D, E, F, G</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL  ",
    "Code": 2150,
    "Title": "Appalachian Literature ♦",
    "Learning_Outcomes": "<ol><li>Recognize and discuss major themes and concerns of traditions and literature in Appalachian Literature (e.g. literature of folk traditions, literature of contemporary Appalachia). A, B, C</li><li>Identify and explain major themes and concerns of literature in from Appalachia, including the relationship to cultural identity with industrial and historical developments (e.g. myths, tales, legends, literature of regional consciousness, narratives, and poetry). A, B, C</li><li>Identify and explain themes and concerns of groups existing before the Civil War who have been neglected in the traditional American literary canon (e.g. Native Americans, African-Americans, Hispanics, Latinix, women). A, B, C</li><li>Discuss the role of political events and institutions relating to works of Appalachian literature throughout the 20th century. A, B</li><li>Identify religious and ideological factors pertaining to the works of this period. A, B</li><li>Evaluate sociological and psychological factors found within the works of this period. A, B</li><li>Explain mythology and religion as they relate to the works of this period. A, B</li><li>Employ biographical information about Appalachian authors while analyzing the works by these authors. A, B</li><li>Demonstrate an understanding of the relations of the works to each other and to contextual factors. A, B, C</li><li>Write responses and analytical papers on appropriate topics related to the works studied. D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL  ",
    "Code": 2520,
    "Title": "Introduction to Drama ♦ ★",
    "Learning_Outcomes": "<ol><li>Recognize drama as a unique genre; identify and explain its major themes and&nbsp; traditions. A, B, C</li><li>Employ various critical approaches to understanding drama. C</li><li>Identify dramatic terms and techniques. C</li><li>Analyze a play according to structure, visual impact, and dialogue. C</li><li>Identify and discuss sociological and psychological factors in plays. A, B, C</li><li>Identify and discuss mythology in dramatic works of the period. A, B, C</li><li>Demonstrate an understanding of the relationship between life and literature by relating biographical information about the authors to their works. A, B</li><li>Trace the development of drama from the ancient Greeks to the present. A, B, C</li><li>Evaluate the historical and political context of a play. A, B</li><li>Write responses and analytical papers in response to dramatic works. D</li><li>Write insightful, appropriately developed, mechanically correct answers to essay test questions concerning the works studied. D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL  ",
    "Code": 2640,
    "Title": "Introduction to Fiction Writing ★",
    "Learning_Outcomes": "<ol><li>Examine drafts to analyze audience and message and to evaluate for effectiveness and clarity. B, D</li><li>Recognize the style and contributions of guest speakers who are published authors. C, E</li><li>Evaluate assigned manuscripts and participate in class discussion. A, B, C</li><li>Write and revise a short fiction portfolio. B, C, D</li><li>Develop stories from premises and create plot complications. A, B, D</li><li>Develop characters through description, explanation, and dialogue. A, B, D</li><li>Use flashbacks, transition, and viewpoint in fictional works. A, B, D</li><li>Examine short fiction with an eye for constructing stories (i.e., architectonics). A, B, C, D, E</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL  ",
    "Code": 2660,
    "Title": "Introduction to Playwriting",
    "Learning_Outcomes": "<ol><li>Identify the tripartite structure and other features of a play. A, B</li><li>Develop a play from a premise and with attention to the six elements of Aristotle. A, B</li><li>Develop and build characters in a play. A, B</li><li>Write convincing dialogue that incorporates both exposition and action. A, B, D</li><li>Analyze and solve problems concerning location and props. A, B, E</li><li>Manipulate three-character conflicts. A, B, C, E</li><li>Create effective beginnings, middles, and endings in plays. A, B, C, D</li><li>Write a one-act script for the purpose of reading and production. A, B, C, D, E</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL  ",
    "Code": 2860,
    "Title": "Introduction to Film ♦ ★",
    "Learning_Outcomes": "<ol><li>Trace the general development of cinema as an art and as an industry. A</li><li>Identify characteristics of Hollywood classical films. A</li><li>Describe the uniqueness of <em>Citizen Kane</em>. A</li><li>Explain common technical terms used in filmmaking. B</li><li>Identify common traits of a film genre. B</li><li>Articulate and support personal opinion with specific reference to a film. B, C</li><li>Identify techniques used by filmmakers to influence an audience. C</li><li>Analyze the ideology expressed in one American film. C, D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL   ",
    "Code": 920,
    "Title": "Composition Processes",
    "Learning_Outcomes": "<ol><li>Demonstrate an understanding of writing as a process that begins with idea generation and moves through several steps, including multiple drafts, before becoming a finished product. A</li><li>Write a clearly stated thesis supported by the entire A, C</li><li>Plan and organize essays in a coherent and clear progression of developed paragraphs. A, C</li><li>Demonstrate awareness of audience and rhetorical situation. A, C</li><li>Construct essays that contain sufficient evidence and quality examples. A, B, C, F</li><li>Develop critical thinking skills by analyzing and evaluating texts representing diverse points of view for effective use in B, F</li><li>Demonstrate correct diction, syntax, grammar and mechanics in writing D</li><li>Choose standard academic English to improve diction. D, E</li><li>Identify and correct errors in D, E</li><li>Identify and correct errors in D, E</li><li>Make use of sentence structure and variety. D, E</li><li>Make appropriate and effective use of multiple sources by writing lead-ins and by smoothly incorporating source material into the student’s own prose. F</li><li>Use MLA style to document sources correctly in the text of a paper and through the creation of a Works Cited page. E, F</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL   ",
    "Code": 1010,
    "Title": "English Composition I ♦ ★",
    "Learning_Outcomes": "<ol><li>Describe and demonstrate a process–oriented approach to writing, employing multiple drafts for the creation of essays. A</li><li>Write a clearly stated or implied thesis statement supported by the entire essay. A, C</li><li>Plan and organize essays in a coherent and clear progression of paragraphs. A, C</li><li>Follow recognized patterns to write essays for specific rhetorical purposes. A, C</li><li>Design essays that demonstrate awareness of audience and rhetorical situation. A, C</li><li>Construct essays that contain sufficient evidence and quality examples suitable for a specific rhetorical purpose. A, B, C, E</li><li>Analyze and evaluate oral and written communication representing diverse points of view and use the information as supporting evidence in B, E</li><li>Demonstrate correct diction, syntax, grammar, and mechanics in writing D</li><li>Make appropriate and effective use of multiple sources in support of a thesis. E</li><li>Use MLA style to document those sources correctly in the text of a paper and to create a Works Cited page. E</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL   ",
    "Code": 2110,
    "Title": "Early American Literature ♦ ★",
    "Learning_Outcomes": "<ol><li>Recognize and discuss major themes and concerns of traditions and literature in the American Colonial period (e.g. literature of discovery and exploration, literature of European settlement, enlightenment and revolutionary literature, poetry, and drama). A, B, C</li><li>Memorize and understand major themes and concerns of literature in America from the founding of the nation through the Civil War (e.g. myths, tales, legends, literature of national consciousness, abolitionist literature, narratives, and poetry). A, B, C</li><li>Identify and Explain themes and concerns of groups existing before the Civil War who have been neglected in the traditional American literary canon (e.g. Native Americans, African Americans, Hispanics, women). A, B, C</li><li>Discuss the role of political events and institutions relating to works of American literature through the Civil War. A, B</li><li>Recognize religious and ideological factors pertaining to the works of this period. A, B</li><li>Evaluate sociological and psychological factors found within the works of this period. A, B</li><li>Relate mythology and mysticism to the works of this period. A, B</li><li>Employ biographical information about American authors while analyzing the works by these authors. A, B</li><li>Demonstrate an understanding of the relations of the works to each other and to influencing factors by tracing American thought and concern chronologically through this period. A, B, C</li><li>Write responses and analytical papers on appropriate topics related to the works D</li><li>Write insightful, appropriately developed, mechanically correct answers to essay test questions concerning the works studied. D</li><li>Answer objective and short answer questions correctly. B, D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL   ",
    "Code": 2120,
    "Title": "Modern American Literature ♦ ★",
    "Learning_Outcomes": "<ol><li>Define and analyze elements of realism in the works of such authors as Clemens, James, and Howells. A, B, C</li><li>Define and discuss characteristics of naturalism in the works of such authors as Crane, London, and Bierce. A, B, C</li><li>Examine elements of local color in the works of authors such as Freeman, Jewett, Cable, Clemens. B, C</li><li>Analyze the development of African-American Literature from the Reconstruction to the Harlem Renaissance through works by authors such as Washington, DuBois, and Hughes. A, B</li><li>Analyze and discuss the works of Early 20th Century American poets such as Robinson, Masters, and Frost. B, C</li><li>Recall and analyze the techniques of imagism and symbolism in the works of such poets as Lowell, Pound, Eliot and Stevens. B, C</li><li>Examine the development of 20th Century American drama through study of works by major dramatists such as Williams, O'Neill, Odets and Glaspell. B, C</li><li>Interpret early 20th Century prose through analysis of fiction by such authors as Hemingway, Faulkner, Steinbeck, Cather, and Glasgow. B, C</li><li>Examine 20th Century prose through analysis of short fiction by such authors as Updike, Walker, Oates, and Welty. B, C</li><li>Analyze the development of contemporary American poetry through works by such poets as Dickey, Brooks, Rich and Plath. B, C</li><li>Recognize the role of political events and institutions in the works studied. A, B</li><li>Evaluate religious and ideological factors pertaining to the works studied. A, B</li><li>Employ biographical information in the study of major American authors and the works studied. A, B</li><li>Demonstrate an understanding of the relations of the works to each other and to influencing factors by tracing American thought and concerns chronologically through this period. A, B, C</li><li>Evaluate the contributions of diverse cultural groups to American Literature. A, B</li><li>Write responses and analytical papers on appropriate topics related to the works D</li><li>Write insightful, appropriately developed, mechanically correct answers to essay test questions concerning the works studied. D</li><li>Answer objective and short answer questions correctly. B, D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL   ",
    "Code": 2210,
    "Title": "Early British Literature ♦ ★",
    "Learning_Outcomes": "<ol><li>Describe the development of the English language (beginnings in the Anglo-Saxon period, growth in the medieval period, and the beginnings of modern prose in the seventeenth and eighteenth centuries.) A, B, C</li><li>Identify and explain major themes and concerns of literature in the Anglo-Saxon period (influence of Christianity, influence of the Anglo-Saxon worldview, the Anglo-Saxon epic). A, B, C</li><li>Identify and explain major themes and concerns of literature in England's medieval period (use of English in literature, Chaucer and his influence on the development of poetry, iambic pentameter, chivalric romance, folk traditions, origins of English drama). A, B, C</li><li>Identify and explain major themes and concerns of literature in the Renaissance and Civil War periods (lyric poetry, development of the sonnet in English, non-dramatic poetry, Shakespeare and his influence on subsequent drama, tragedy, pastoral themes, use of blank verse, King James’ translation of the Bible, Cavalier and metaphysical poetry, Milton). A, B, C</li><li>Identify and explain major themes and concerns of literature of the Restoration and Eighteenth Century (comedy of manners, satire, heroic couplets, reason vs. passion, themes of improvement/progress, use of prose, Age of Reason). A, B, C</li><li>Explain how political events and institutions relate to works of English literature through the eighteenth century. A, B</li><li>Demonstrate an understanding of the relationship between life and literature by relating biographical information about English authors to works by these authors. A, B, C</li><li>Describe the relation of the works to each other and their influence on subsequent literature by tracing English thought and concerns chronologically through the eighteenth century. A, B, C</li><li>Interpret literature through class discussion and creative projects. C, D</li><li>Organize and write responses and analytical papers on appropriate topics related to the works studied. C, D</li><li>Write insightful, appropriately developed, mechanically correct answers to essay test questions concerning the works studied. D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL   ",
    "Code": 2220,
    "Title": "Modern British Literature ♦ ★",
    "Learning_Outcomes": "<ol><li>Identify and explain major themes and concerns of traditions and literature in the Romantic Period (major writers, ideas about poetry and the poet, the lyric, themes of individualism and freedom). A, B, C</li><li>Identify and explain major themes and concerns of literature in England's Victorian Period (influence of Romanticism; contradictions of faith and doubt, certitude and questioning, restrictions and freedom; achievements of poetry; development of the novel; social problems reflected in literature). A, B, C</li><li>Identify and explain major themes and concerns of British literature in the twentieth century (Irish revival, Modernism, experimentation in form, rebirth of drama, English as a global language, role of English literature in the postcolonial world). A, B, C</li><li>Explain how political events and institutions relate to works of English literature through the twentieth century (changes in the monarchy, rise of Parliament, colonialism, post- colonialism). A, B</li><li>Demonstrate an understanding of the relationship between life and literature by relating biographical information about English authors to works by these authors. A, B, C</li><li>Describe the relation of the works to each other and their influence on subsequent literature by tracing English thought and concerns chronologically through this period. A, B, C</li><li>Recognize and write about poetic forms, such as lyrics, sonnets, and dramatic monologues. A, B, C</li><li>Organize and write responses and analytical papers on appropriate topics related to the works studied. C, D</li><li>Write insightful, appropriately developed, mechanically correct answers to essay test questions concerning the works studied. Draw parallels between his or her life and conflicts and the lives and conflicts of characters in short stories and plays and/or the situation presented by the speaker in a poem. A, B, C, D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL   ",
    "Code": 2510,
    "Title": "Introduction to Poetry ♦ ★",
    "Learning_Outcomes": "<ol><li>Recognize poetry as a unique genre; identify and explain its major themes and traditions. A, B</li><li>Differentiate between and apply various critical approaches to analyzing and appraising poems. C, D, E</li><li>Identify poetic terms and techniques. C</li><li>Analyze a poem according to structure, form, diction, sound, and theme. C</li><li>Analyze, and discuss poems in the context of literary tradition. A, C</li><li>Evaluate and discuss the political, cultural, and humanistic significance of a poem or series of poems. B, D</li><li>Write responses and analytical papers in response to dramatic works. D</li><li>Write insightful, appropriately developed, mechanically correct answers to essay test questions concerning the works studied. D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL    ",
    "Code": 2055,
    "Title": "African-American Literature ♦ ★",
    "Learning_Outcomes": "<ol><li>Identify universal themes, and trace the vernacular elements found in African American writings of each period studied. A, B</li><li>Illustrate these themes and vernacular elements by references to works read. B</li><li>Define and discuss primary genres of the slavery and freedom writers, such as spirituals, poetry, and essays. C</li><li>Identify and explain major tenets of reconstruction writers, such as Grimke, Johnson, and Dunbar. A, B, C</li><li>Discuss and illustrate differences in techniques and styles found in all periods from the Slavery/Freedom through the contemporary writer. A, B, C</li><li>Discuss major characteristics of the renaissance writings, such as the blues, jazz, poetry, and essays. A, B, C</li><li>Discuss the diverse psychological techniques by writers of each period studied. C</li><li>Demonstrate an understanding of the relationship between life and literature by relating biographical information about major writers of each period studied. A, B</li><li>Write responses and analytical papers on appropriate topics relating to the works studied. D</li><li>Write insightful, appropriately developed, and mechanically correct answers to essay questions concerning the works studied. D</li><li>Demonstrate an understanding of the literature and its background by presenting a writing or conducting an oral discussion of a particular author's style or of a particular genre to the class. A, C, D</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL     ",
    "Code": 1020,
    "Title": "English Composition II ♦ ★",
    "Learning_Outcomes": "<ol><li>Identify, define, and be able to demonstrate an understanding of basic literary genres, terms, devices, forms, and conventions. A, C</li><li>Demonstrate an understanding of the elements of short fiction, such as plot structure, character, theme, setting, point of view, and tone. A, B, C</li><li>Demonstrate an understanding of the elements of poetry, such as form, figurative language, meter, persona, and tone. A, B, C</li><li>Demonstrate an understanding of the conventions, forms, and elements of drama. A, B, C</li><li>Write clear, well-organized, and sufficiently developed essays analyzing an aspect(s) of a work(s) of literature. These essays will demonstrate the knowledge gained about the elements of fiction, poetry, and drama. A, B, C, D</li><li>Compare and contrast two or more literary works by different authors and/or two or more works of differing genres. A, B, C, D</li><li>Make appropriate and effective use of primary and secondary sources as a way of developing his or her own ideas about the literature. A, C, D</li><li>Quote/paraphrase effectively from assigned readings when writing essays. C, D</li><li>Punctuate titles of short stories, poems, and plays correctly in written work. D</li><li>Demonstrate an ability to adhere to the rules of grammar, punctuation, and mechanics in formal written work. C</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ENGL     ",
    "Code": 2320,
    "Title": "Modern World Literature ♦ ★",
    "Learning_Outcomes": "<ol><li>Illustrate these themes by reference to works read. B</li><li>Define and discuss primary genres of the neoclassic writers, such as comedy, tragedy, satire, and mock epic. C</li><li>Identify and explain major tenets of romantic writers, such as Rousseau, Goethe, Wordsworth, Coleridge, and Keats. A, B, C</li><li>Define and discuss major genres of romanticism, particularly the lyric poem. C</li><li>Discuss and illustrate differences in beliefs, techniques, and style between major neoclassic and romantic writers. B, C</li><li>Trace influences of romanticism on subsequent Western thought and writings. A, B</li><li>Discuss major characteristics of the literature of realism as illustrated in the writings of Flaubert, Ibsen, and Chekhov. A, B</li><li>Explain particular appropriateness of the genres of fiction and drama for the tenets of realism.</li><li>Discuss the realistic movement in literature as a reaction against the romantic movement. B</li><li>Trace the influence of realism through Western/world literature of the twentieth century, particularly in such writer as Lawrence, Faulkner, and Solzhenitsyn. B, C</li><li>Identify and discuss some of the characteristics of modern poetry, especially as illustrated in Yeats and Eliot. B, C</li><li>Discuss use of poetic and psychological techniques by prose writers such as Woolf and Lawrence. C</li><li>Demonstrate an understanding of the relationship between life and literature by relating biographical information about major Western/world authors of the neoclassic, romantic, realistic, and modern eras to the works by those authors. A, B</li><li>Write responses and analytical papers on appropriate topics relating to the works studied. D</li><li>Write insightful, appropriately developed, and mechanically correct answers to essay test questions concerning the works studied. D<br></li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ESOL ",
    "Code": 921,
    "Title": "Reading I",
    "Learning_Outcomes": "<ol><li>Recognize and define the 1000 most common words in English. (A)</li><li>Explain their established vocabulary building plan. (A)</li><li>Use an English dictionary rather than translating words from their native language. (A, F)</li><li>Comprehend main ideas from simple texts of several paragraphs. (B, C, D, F)</li><li>Understand the reading process and begin to develop a personal reading (B, C, D, F)</li><li>Determine main idea and some facts from a simple reading selection. (B, C, F)</li><li>Understand the meaning of some new words from the context. (A, D, E, F)</li><li>Identify general ideas from simple authentic readings. (C, D, F)</li><li>Demonstrate an understanding of the short, straightforward description of a person, place or thing. (B, E, F)</li><li>Demonstrate an understanding of surface meanings and begin to see inferences and implied meaning. (C, D, E)</li><li>Find main ideas and information from readings featuring description and (C, D, F)</li><li>Comprehend simple authentic material after several readings. (C, F)</li><li>Read and comprehend most of a local newspaper with a dictionary. (A, D, F)</li><li>Answer factual questions on uncomplicated authentic materials. (B, C)</li><li>Draw basic conclusions from reading. (D, E, F)</li><li>Organize the chronology of a reading selection. (D, F)</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ESOL ",
    "Code": 922,
    "Title": "Reading II",
    "Learning_Outcomes": "<ol><li>Skim written material and identify main ideas. (A, B,C)</li><li>Scan written material in texts or on the internet for specific information and to make prereading predictions. (A,B,C)</li><li>Make inferences from general reading material. (D, G)</li><li>Competently use an English-only dictionary. (A, C)</li><li>Distinguish factual from inferred statements. (A,B,D,F)</li><li>Comprehend general interest reading five to seven pages in (A, B,C,F)</li><li>Comprehend authentic non-technical text and summarize the main idea in (A, C,</li><li>D) Comprehend and identify literary and non-literary styles. (C,B,F)</li><li>Synthesize information from two sources. (B,E,F,G)</li><li>Read longer prose passages of 10-15 pages. (A, B,C,F)</li><li>Comprehend parts of texts about unfamiliar topics and situations. (A, B,F)</li><li>Comprehend descriptions and narrations, e.g., from short stories, news items, or business letters. (B,C,D,F)</li><li>Read, skim and select information from two or three sources to incorporate into a (B,C,G)</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ESOL ",
    "Code": 931,
    "Title": "Writing I",
    "Learning_Outcomes": "<ol><li>Identify and produce declarative and interrogative sentences.&nbsp; A, B<br></li><li>Identify and produce well-formed English sentences using various verb tenses and&nbsp;and forms. &nbsp; A, B<br></li><li>Punctuate sentences according to standard rules. &nbsp; A, B<br></li><li>Write basic sentences free of mechanical errors.&nbsp;&nbsp; A, B</li><li>Combine sentences into short paragraphs.&nbsp; &nbsp; A, B, C<br></li><li>Apply the concepts of unity and coherence as they refer to paragraphs.&nbsp; &nbsp; A, B, C, D<br></li><li>Develop narrative paragraphs. A, B, C, D<br></li><li>Develop descriptive paragraphs. A, B, C, D<br></li><li>Develop comparison/contrast paragraphs. A, B, C, D<br></li><li>Develop cause and effect paragraphs.&nbsp;&nbsp; A, B, C, D</li><li>Summarize an authentic reading selection.&nbsp; A, B, E<br></li><li>Write a report which summarizes brief authentic reading selection. A, B, C, D, E<br></li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ESOL ",
    "Code": 941,
    "Title": "Grammar I",
    "Learning_Outcomes": "<ol><li>Identify compound and complex sentences. (B)</li><li>Create compound and complex sentences. (B)</li><li>Demonstrate an understanding of relative pronouns. (B)</li><li>Use parallel sentence structures appropriately. (B)</li><li>Include phrases and clauses in complex sentences. (A, B, C)</li><li>Recognize all verb tenses and their appropriate use in English prose. (A, B, C, D)</li><li>List root words and affixes of vocabulary words. (C, D)</li><li>Select correct word forms as they are used in sentence. (C, D, E)</li><li>Identify transitional words and phrases in English prose. (E)</li><li>Rewrite sentences to demonstrate a knowledge of correct word order. (B, C)</li><li>Use transitional devices to create coherent paragraphs. (B, C, E)</li><li>Apply a knowledge of verb tenses to restate sentences to reflect various (A, C)</li><li>Communicate facts and talk casually about topics of current public and personal interest. (A, B, C)</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ESOL ",
    "Code": 942,
    "Title": "Grammar II",
    "Learning_Outcomes": "<ol><li>Capitalize properly. The student will capitalize appropriate words in a sentence and in parts of friendly and business letters. A, B, C</li><li>Use commas in dates, addresses, and series. The student will demonstrate an ability to use comas correctly in addresses, in dates, and in words and phrases in a series. A, B, C</li><li>Use ending punctuation of sentences. The student will demonstrate an ability to use appropriate punctuation to end sentences. A, B, C</li><li>Use contractions. The student will demonstrate an ability to form contractions A, B, C, D</li><li>Form plurals of nouns. The student will choose the correct plural forms of regular and irregular nouns. A, B, C</li><li>Use possessive forms of nouns and pronouns. The student will demonstrate an ability to use correct possessive forms of nouns and pronouns. A, B, C</li><li>Recognize case usage of pronouns. The student will correctly choose the nominative and objective cases of personal pronouns in simple and compound structures. A, B, C, D</li><li>Recognize principal parts of verbs. The student will correctly choose the principal parts of verbs. A, B, C</li><li>Recognize parts of speech. The student will identify the part of speech of a designated word in a sentence. A, B, C</li><li>Identify simple subjects and predicates. The student will identify the simple subject and predicate of a given sentence. A, B, C</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ESOL ",
    "Code": 1060,
    "Title": "English Conversation, Pronunciation &amp; Listening I",
    "Learning_Outcomes": "<ol><li>Correctly use stress in spoken American English. A, B, D, E</li><li>Use intonation patterns in spoken American A, B, D, E</li><li>Produce the sound and style of American English. A, B, C, D, E, F</li><li>Correctly pronounce words according to established patterns. B, C, D</li><li>Verbally participate in discussion. D, E, F</li><li>Overcome reluctance to speak and make oneself understood. C, D, E</li><li>Identify certain common idiomatic F</li><li>Use certain common idiomatic F</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "ESOL  ",
    "Code": 932,
    "Title": "Writing II",
    "Learning_Outcomes": "<ol><li>Set an appropriate purpose for writing. A, D</li><li>Write organized analytical and expository essays using word processing software. A, B, C, D, E</li><li>Collaborate in teams for peer review of drafts to analyze audience and message, to organize ideas, and to evaluate drafts as to effectiveness and clarity. A, B,</li><li>Recognize the rules of English grammar and punctuation and apply them in both oral and written work. B</li><li>Research using traditional library sources, literary databases, the Internet to find information pertinent to writing A, D, E, F</li><li>Quote, paraphrase, and document source material responsibly and effectively in analytical and expository writing. F</li><li>Identify the importance of effective written and oral communication in the professional world through viewing films, conducting interviews, and/or listening to guest speakers. A</li></ol>"
  },
  {
    "Department": "English",
    "Rubric": "READ ",
    "Code": 900,
    "Title": "Academic &amp; Personal Reading",
    "Learning_Outcomes": "<ol><li>Apply cognitive reading strategies independently. B</li><li>Set an appropriate purpose for reading. A, C</li><li>Preview using textual features and other appropriate resources. B</li><li>Recognize inadequate background knowledge and know how to build it up. B</li><li>Make text connections: text-to-self, text-to-world, text-to-text. B</li><li>Create visual and other sensory images to enhance comprehension. B</li><li>Identify important ideas and themes in a text. B, D</li><li>Annotate to aid comprehension and recall. A, D</li><li>Express opinions about what they read. C, D</li><li>Demonstrate fluency in reading excerpts from texts. C, F</li><li>Use context to understand literal and figurative language. B</li><li>Identify unfamiliar words and use effective and efficient strategies for learning new words. B</li><li>Employ a study method that includes steps such as previewing, marking or annotation, questioning, and reviewing text. A, B, D</li><li>Use a textbook’s features such as table of content, preface, introduction, titles, subtitles, index, glossary, appendix, and bibliography to acquire information efficiently. A, B, D</li><li>Use information from visual aids such as maps, charts, graphs, time lines, tables, and diagrams in understanding text. A, B, D</li><li>Create effective study guides (maps, outlines, summaries, time lines, graphic organizers, etc.) that incorporate understanding of texts’ main ideas, supporting details, and organizational patterns. A, B, D, E</li><li>Identify, analyze, and discuss literary elements in longer fiction: setting, plot, character development, and theme. D, F</li><li>Identify and infer main ideas or purpose in text. B, D</li><li>Summarize important ideas and details in text. B</li><li>Identify organizational relationships: sequence, cause-effect, comparison and contrast in text. A, B</li><li>Draw generalizations and conclusions, distinguish fact from opinion, and evaluate assertion and evidence in text. B, E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "AAST ",
    "Code": 2200,
    "Title": "African-American Studies ♦ ★",
    "Learning_Outcomes": "<ol><li>Identify the major social, cultural economic, and political themes in African-American history.&nbsp; A&nbsp;</li><li>Write analytical essays about African-American history. B</li><li>Use knowledge of the past to gain a better understanding of contemporary issues. C</li><li>Recognize that past societies possess different cultural values than their own society. D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 1045,
    "Title": "Drawing I ★",
    "Learning_Outcomes": "<ol><li>Employ contour drawing in the mediums of pencil, pen/ink, and felt tip markers by completing finished images encompassing the following techniques: blind contour, cross contour, image inversion, felt contour, positive space, negative space; Demonstrate in concert an understanding of line quality A</li><li>Utilize the technique of gesture drawing in the mediums of pencil, pen and ink, charcoal and felt tip markers for the following situational exercises: body posture, stress and movement, action of multiple figures, working sketches A</li><li>Illustrate an understanding of value by utilizing the mediums of pencil, pen and ink, charcoal, ink wash and conte crayon in cross hatch, stipple, hatching, multiple light sources, dramatic lighting, and reverse values A, B</li><li>Demonstrate the technique for building areas of mass and volume utilizing the medias of graphite, charcoal, conte crayon. A, B</li><li>Illustrate the use of texture and pattern in both organic and man-made objects in the medias of pencil, charcoal, pen and ink. A, B</li><li>Create compositionally balanced images in pencil, pen and ink, charcoal, ink wash, and conte crayon. A, B, E</li><li>Utilize the elements of line, shape, value, and texture in a balanced format. A, B</li><li>Complete an architectural image in graphite using one and two point perspective. C</li><li>Employ foreshortening in a free-hand drawing of natural/organic objects. C</li><li>Use correct terminology during class critiques. D, E</li><li>Elaborate verbally on the aesthetic strengths and weaknesses of their own and other student's work; Reference with credibility work by established artists currently working in the field. D</li><li>Draw correlations between course content and its application to other fine arts courses. D, E</li><li>Demonstrate the ability to defend and or describe the strengths/weaknesses of their own work and other's using appropriate written format. D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 1340,
    "Title": "Foundations Studio I ★",
    "Learning_Outcomes": "<ol><li>Demonstrate understanding of design concepts and vocabulary. A</li><li>Create value and intensity scales with a minimum of 10 variations. A</li><li>Illustrate the use of various color combinations and visually describe and/or demonstrate the differences between: Analogous, Complementary, Triadic, Dyads, Hexad, Monochromatic, and Split Complement. A, C</li><li>Create multiple simple designs that visually describe the variance in positive/negative shapes, and basic spatial configurations. A</li><li>Demonstrate the variations between traditional and modern space. A</li><li>Construct a shallow three-dimensional design project utilizing color to enhance relief. A</li><li>Participate in class critiques utilizing correct terminology. B</li><li>Analyze a master work and reproduce using an alternate color combination. A,C,D</li><li>Create an experimental mixed media design. A</li><li>Mat and present a minimum of 5 projects using correct presentation techniques. A</li><li>Draw inferences/applications of course techniques to more advanced courses and contexts. D</li><li>Decipher basic symbology related to design shapes and color. A, C, D</li><li>Utilize the grid principle to produce a working design. A</li><li>Incorporate pattern and texture effectively within a static image. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 1350,
    "Title": "Foundations Studio II ★",
    "Learning_Outcomes": "<ol><li>Demonstrate applied knowledge of the terminology utilized in three-dimensional media and relationship to the visual elements. D</li><li>Identify the functions of art and its relation to individual work, and relationships to historic and contemporary applications. C , D</li><li>Illustrate an applied working knowledge of stress and its relationship to structural consideration and various media. C</li><li>Display a working and applied knowledge of biomorphic and geometric form. C</li><li>Exhibit ability to apply 3-D concepts and applications to integrated structures, relevant media considerations and form C</li><li>Exhibit basic working knowledge in the medias of paper, clay, wood, metal, and mixed media application in 3-D constructs. A,B,C</li><li>Provide appropriate presentations of three dimensional media. B, C, E</li><li>Apply a working knowledge of three-dimensional media, structures, imagery and relationships to architecture. A, B, C, D</li><li>Elaborate verbally on the aesthetic strengths and weaknesses of their own and other student's work; Reference with credibility work by established artists currently working in the field. D</li><li>Draw correlations between course content and its application to other fine arts courses. D, E</li><li>Demonstrate the ability to defend and or describe the strengths/weaknesses of their own work and other's using appropriate written format. D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 1610,
    "Title": "Basic Printmaking",
    "Learning_Outcomes": "<ol><li>Understand the concept of multiple image production via relief plate matrix. A, B</li><li>Know the history of relief print production; its initial function as illustration and contemporary position relative to other fine art mediums. A</li><li>Operate a press safely and effectively. B</li><li>Create a portfolio of exhibition quality prints; Artist's Proofs and Limited Edition. B</li><li>Experience color printing with single and multiple registration systems, thereby enhancing appreciation of multi-media color images encountered in daily life. B</li><li>Verbalize aesthetic criticism of personal work and the works of others consequent to in-class critiques. A, C</li><li>Profit from the shared effort of the class as a group by the production of an exchange portfolio, book, exhibition, or similar project selected by the class as a group. A, B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 2010,
    "Title": "Art History Survey I ♦ ★",
    "Learning_Outcomes": "<ol><li>Define basic terminology related to the visual arts and explain specific works in those terms. C</li><li>Relate major works and movements to their creators, to their culture, and to the historical context in which they lived A, B</li><li>Apply knowledge of terms and concepts to an artistic experience. C, D</li><li>Analyze works from the major movements covered by comparing and contrasting forms, styles, and ideas. A, B, C, D</li><li>Identify universal concerns represented/presented in visual art(s) and respond to multi-cultural diversity and accomplishments in discussion&nbsp; B, D&nbsp;</li><li>Infer correlations between historical context in which art is created and the subsequent type of art produced; its reflection of society, culture and time. A, B, D</li><li>Utilize art as a reference for decoding non-western cultures and as a reflection of one's culture and time.&nbsp; D&nbsp;</li><li>Recognize the place and power of the visual image as regards cultural trends, propaganda, marketing, and advertising. B, D&nbsp;</li><li>Apply criteria of judgment to selected visual works from each historical period in course content. C, D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 2020,
    "Title": "Art History Survey II ♦ ★",
    "Learning_Outcomes": "<ol><li>Define basic terminology related to the visual arts and explain specific works in those terms. C</li><li>Relate major works and movements to their creators, to their culture, and to the historical context in which they lived A, B. E</li><li>Apply knowledge of terms and concepts to an artistic experience. C, D</li><li>Analyze works from the major movements covered by comparing and contrasting forms, styles, and ideas. A, B, C, D</li><li>Identify universal concerns represented/presented in visual art(s) and respond to multi-cultural diversity and accomplishments in discussion B, D, E</li><li>Infer correlations between historical context in which art is created and the subsequent type of art produced; its reflection of society, culture and time. A, B, D, E</li><li>Utilize art as a reference for decoding non-western cultures and as a reflection of one's culture and time. D</li><li>Recognize the place and power of the visual image as regards cultural trends, propaganda, marketing, and advertising. B, D, E</li><li>Apply criteria of judgment to selected visual works from each historical period in course content. C, D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 2120,
    "Title": "Life Drawing",
    "Learning_Outcomes": "<ol><li>Utilize correct technique and basic mastery of graphite, conte’, chalk, charcoal, pen and ink/wash, colored pencils. A</li><li>Develop skill in the use of media/techniques through traditional and experimental application; alone and in mixed combination. A</li><li>Verbalize and participate in class critiques. B</li><li>Develop a spatial/compositional rational for the organization of their work. C</li><li>Show a knowledge of the inherent construction of the figure. D, E</li><li>Create a series of personal and thematic images. B, C, D, E</li><li>Develop a personal interpretation of the human form through formal manipulation. B, C, D, E</li><li>Speak critically on personal content and to justify same. B, D</li><li>Draw a connection between personal work and that of others to contemporary and past imagery. B, D</li><li>Create a visual narration by using the figure as an expressive vehicle. D, E</li><li>Articulate form in spatial context. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 2130,
    "Title": "Painting I ★",
    "Learning_Outcomes": "<ol><li>Participate in class critiques, both oral and written throughout the semester to develop critical analysis and observational skills related to their own and other students' work. (A. E. D.)</li><li>Develop analytical and applied means for developing and transferring images for professional and applied use in the community. (B.E.)</li><li>Journal their personal feelings/reactions to the learning process in order to build a visual understanding and progress to professional and subsequent course work. (D. E.)</li><li>Do one or more of the following during the semester:<ol><li>attend exhibitions of work in the area</li><li>attend lecture(s) by visiting professionals</li><li>participate in informal lectures/workshops in class with visiting artists.</li></ol></li><li>Students will then participate in discussion regarding the specific activity and its relation to career direction, personal growth as regards aesthetic ability, and/or philosophical aesthetics. (C. D. E.)</li><li>Demonstrate a basic command of painting techniques through both traditional and experimental application, alone and in mixed application. B</li><li>Select appropriate ground, brushes, medium and solvents for oil or acrylic paints. B</li><li>Build a stretcher, stretch canvas and prepare with gesso properly A, B</li><li>Understand the relationship of all art elements to the development of space through: overlap, raised baseline, scale, value, foreshortening, geometric and atmospheric perspective and color A, C, E</li><li>Develop a spatial/compositional rational for the organization of their work C</li><li>Rebuild the surface of a painting by means of altering and editing the paint and/or image. C,D</li><li>Development of a work that in turn becomes the raw material for yet another. C, E</li><li>Understand the process of gridding and scaling up a drawing to a large scale (mural size). B,E</li><li>Verbalize and participate in class critiques using correct terminology. A, B, C, D, E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 2140,
    "Title": "Painting II",
    "Learning_Outcomes": "<ol><li>Participate in class critiques, both oral and written throughout the semester to develop critical analysis and observational skills related to their own and other students' work. D. E.</li><li>Develop analytical and applied means for developing and transferring images for professional and applied use in the community. B. C.</li><li>Journal their personal feelings/reactions to the learning process in order to build a visual understanding and progress to professional and subsequent course work. E.</li><li>Do one or more of the following during the semester:<ol><li>attend exhibitions of work in the area</li><li>attend lecture(s) by visiting professionals</li><li>participate in informal lectures/workshops in class with visiting artists.</li></ol></li><li>Students will then participate in discussion regarding the specific activity and its relation to career direction, personal growth as regards aesthetic ability, and/or philosophical aesthetics.</li><li>Demonstrate a basic command of painting techniques through both traditional and experimental application; alone and in mixed application. B</li><li>Select appropriate ground, brushes, medium and solvents for oil or acrylic paints. B</li><li>Build a stretcher, stretch canvas and prepare with gesso properly A, B</li><li>Develop a spatial/compositional rational for the organization of their work C</li><li>Rebuilding the surface of a painting by means of altering and editing the paint and/or image. C,D</li><li>Apply the design principles for structuring the unity of 2-dimensional space and for analyzing the compositional structure itself. B, C</li><li>Development of work that is serial in nature. C, E</li><li>Verbalize and participate in class critiques using correct terminology. A, B, C, D, E</li><li>Formulate a basis for personal content and justify verbally in class critiques and written assignments. A, B, C, D, E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 2210,
    "Title": "Ceramics I",
    "Learning_Outcomes": "<ol><li>Verbalize and use an introductory proficiency of the terminology and physical properties of clay as a three dimensional art media. A</li><li>Demonstrate the use of three dimensional elements and limitations and their relationship to clay in a hand building format. C, E</li><li>Utilize an understanding of basic hand building techniques: Joining, building, thinning, stabilizing, and decorating. B</li><li>Evidence practical; comprehension as applies to simple glazing techniques:&nbsp; Slip glazing, application techniques. D</li><li>Show educated reasoning as regards firing of clay bodies: drying factors, stacking and loading kiln, bisque firing, final or glaze firing. D</li><li>Have the ability to apply knowledge from course work to more advanced applications of clay media in a sculptural and wheel thrown format. B</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 2220,
    "Title": "Ceramics II",
    "Learning_Outcomes": "<ol id=\"studentswill\" class=\"mce-content-body mce-edit-focus\" style=\"position: relative;\" data-mce-style=\"position: relative;\" contenteditable=\"true\"><li>Understand and use basic art terms, vocabulary, and demonstrate a knowledge of physical properties of clay in a wheel thrown format as a three dimensional art medium. A,D</li><li>Illustrate the use of three dimensional elements and their relationship to clay in a wheel thrown format. C,E</li><li>Establish knowledge of basic wheel throwing technique: centering, opening clay in a controlled way, pulling centered clay into specific vessels with predetermined form and function, trimming excess clay from thrown ware. B</li><li>Utilize basic knowledge as applies to intermediate glazing techniques: using slips, applying glazes, scriffito techniques F</li><li>Employ intermediate knowledge as regards firing of clay bodies: controlled drying techniques and factors, stacking and loading unfired and glazed ware, the elements of firing kiln to effect various glazing techniques. F</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 2410,
    "Title": "Sculpture ★",
    "Learning_Outcomes": "<ol><li>Demonstrate a knowledge of material uses in relation to physical qualities and structural limitations presented by projects. A</li><li>Show a fundamental understanding of how technical problems may be approached in terms of the creative process and improvisation. D, E</li><li>Exhibit basic concepts of aesthetic relationships between various materials and their use in a sculptural format, both figurative, additive, reductive, and conceptual. D, E</li><li>Use appropriate construction methods for both wire armatures, assemblage, and applied plaster. C</li><li>Use basic carving methods in plaster, Styrofoam, and other materials used in course content. C</li><li>Show a basic knowledge of mold materials, mold making, and through completion of a waste mold of a cast bust. A, C</li><li>Use appropriate presentation methods for sculptural media. B, D, F</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 2420,
    "Title": "Life Sculpture ★",
    "Learning_Outcomes": "<ol><li>Use art terms and vocabulary. A, D</li><li>Demonstrate a knowledge of physical properties of clay in a figure modeling format. A, D</li><li>Understand the use of three dimensional elements in a figure modeling format. C, E</li><li>Understand the relationship between three dimensional elements and clay in a figure modeling format. C, E</li><li>Show knowledge of basic figure modeling techniques. E, B</li><li>Utilize basic knowledge as applies to necessary firing techniques. F</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 2620,
    "Title": "Intaglio Printmaking ★",
    "Learning_Outcomes": "<ol><li>Participate in class critiques, both oral and written throughout the semester to develop critical analysis and observational skills related to their own and other student's work. A D</li><li>Create multiple plate images employing a variety of line, graphic and compositional design and content. B C</li><li>Journal their personal feelings/reactions to the learning process to understand and build visual thinking in order to progress to professional and subsequent course work. D</li><li>Do one or more of the following during the semester, (1) attend exhibitions of art in the area (2) attend lecture (s) by visiting artists. Students will then participate in a group&nbsp;&nbsp; discussion regarding the specific activity and its relation to career direction, personal&nbsp;&nbsp; growth as regards aesthetic ability, and/or philosophical aesthetics. A D</li><li>Understand the concept of multiple image production via relief plate matrix. A, B</li><li>Know the history of Intaglio print production; its initial function as illustration and contemporary position relative to other fine art mediums. A</li><li>Operate an Intaglio press safely and effectively. B</li><li>Create a portfolio of exhibition quality prints; Artist's Proofs and Limited Edition. B</li><li>Experience color printing with single and multiple plate registration systems, thereby enhancing appreciation of multi-media color images encountered in daily life. B</li><li>Verbalize aesthetic criticism of personal work and the works of others consequent to in-class critiques. A, C</li><li>Profit from the shared effort of the class as a group by the production of an exchange portfolio, book, exhibition, or similar project selected by the class as a group. A, B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART ",
    "Code": 2950,
    "Title": "Intermediate Design &amp; Color",
    "Learning_Outcomes": "<ol><li>Participate in class critiques, both oral and written throughout the semester to develop critical analysis and observational skills related to their own and other student's work. B</li><li>Participate in presentation exercises both singularly and in groups that explore the psychology and symbolism of color and its attendant connection to time, cultural mores, and location. Correlation to and effective communication within the global community will also be addressed. A</li><li>Do one or more of the following during the semester, (1) attend exhibitions of work in the area (2) attend lecture(s) by visiting professionals (3) participate in informal lectures/workshops in class with visiting artists. Students will then participate in group discussion regarding the specific activity and its relation to career direction, personal growth as regards aesthetic ability, and/or philosophical aesthet A B D</li><li>Produce a basic color wheel utilizing primary, secondary and tertiary colors. A</li><li>Create value and intensity scales with a minimum of 10 variations. A</li><li>Illustrate the use of various color combinations and visually describe and/or demonstrate the differences between: Analogous, Complementary, Triadic, Dyads, Hexad, Monochromatic, and Split Complemen A, C</li><li>Create multiple simple designs that visually describe the variance in positive/negative shapes, value, tint, shade, and intensity. A</li><li>Utilize the psychological aspects of color to elicit two different viewer respons A, C, D</li><li>Construct a shallow three-dimensional design project utilizing color to enhance relief. A</li><li>Participate in class critiques utilizing correct terminology. B</li><li>Analyze a master work and reproduce using an alternate color combination. A, C, D</li><li>Create an experimental mixed media design using primary colors only. A</li><li>Originate a self-portrait that utilizes color psychology to identify yourself. A, C, D</li><li>Mat and present a minimum of 5 projects using correct presentation techniques. A</li><li>Draw inferences/applications of course techniques to more advanced courses and contexts. D</li><li>Decipher basic symbology related to color. A, C, D</li><li>Utilize the grid principle to produce a working design. A</li><li>Incorporate pattern and texture effectively within a static imag A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART  ",
    "Code": 1510,
    "Title": "History of Design Practice ★",
    "Learning_Outcomes": "<ol><li>Critically analyze and evaluate the visual elements and principles of effective design. C, D</li><li>Analyze existing problems, synthesize findings, and develop strategic solutions as it relates to effective design. B, C</li><li>Understand the evolution of technology, materials, and processes integral to the development of the graphic design discipline. A, B, D, E</li><li>Articulate objective criteria for successful visual communication. B, C</li><li>Recognize the impact of teamwork essential to design production. A, C</li><li>Conduct lateral and creative thinking in problem-solving as it relates to effective design. C</li><li>Evaluate design and recognize its stylistic tendencies through formal, conceptual, and contextual analysis. A, B, D, E</li><li>Conduct research utilizing various learning resources to include the internet, college and university libraries, as well as online databases (ARTStor). B, E</li><li>Recognize the global influence of various cultures in the evolution of visual communications. F</li><li>Distinguish characteristics of the 20th century design movements and significant designers. A, B, D, E</li><li>Curate and organize images based on the elements and principles of effective design through the qualities of form, content, or context. C, D, E</li><li>Critically compare works of design from a cultural, social, and historical perspective. A, B, D, F</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART   ",
    "Code": 1050,
    "Title": "Drawing II",
    "Learning_Outcomes": "<ol><li>Utilize correct technique and basic mastery of graphite, conte, chalk, charcoal, pen colored pencils. A</li><li>Develop skill in the use of media/techniques through traditional and experimental alone and in mixed combination. A</li><li>Verbalize and participate in class critiques. B</li><li>Develop a spatial/compositional rational for the organization of their work. C</li><li>Work up images from both set and implied subjects. A, C, D</li><li>Create a series of personal and thematic images. B, C, D</li><li>Develop visual thinking. D</li><li>Speak critically on personal content and to justify same. B, D</li><li>Draw a connection between personal work and that of others to contemporary and past imagery. B, D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ART    ",
    "Code": 2000,
    "Title": "Special Topics in Studio Art",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of material uses in relation to physical qualities and structural limitations presented by projects. A</li><li>Show a fundamental understanding of how technical problems may be approached in terms of the creative process and improvisation. D, E</li><li>Exhibit basic concepts of aesthetic relationships between various materials and their use in topic format and medium. D, E</li><li>Use appropriate construction methods for topic medium. C</li><li>Use appropriate presentation methods for media. B, D, F</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ASL ",
    "Code": 1010,
    "Title": "Beginning American Sign Language I ★",
    "Learning_Outcomes": "<ol><li>Produce signs and be able to prepare and sign a cohesive signed story. (A)</li><li>Translate ASL sentences and stories signed by the instructor. (A)</li><li>Construct a collaborative ABC story using a historical and traditional form of ASL storytelling technique. (A, B,)</li><li>Discuss key historical events and the impact and implication of these events on Deaf Culture. (B, C, D, E, F)</li><li>Create a presentation on the history of ASL in America. (B, C, D)</li><li>Understand and effectively use approximately 3000 basic grammatically correct signs. (A, E, F)</li><li>Exhibit the practical skills and knowledge necessary for basic cross-cultural interactions. (D, E, F)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ASL ",
    "Code": 1020,
    "Title": "Beginning American Sign Language II ★",
    "Learning_Outcomes": "<ol><li>Communicate expressive, receptive, and affective interpersonal communication skills. (A, D, E, F, G)</li><li>Demonstrate ASL communication skills by using ASL vocabulary, spatiality, nonmanual markers, and classifiers. (B, C, D, E, F)</li><li>Display the practical skills and knowledge necessary for basic crosscultural interactions within the deaf community. (B, C, D, E, F)</li><li>Apply the skills learned in the classroom to conversations within a crosscultural environment. (E, F, G)</li><li>Accurately use a larger and more complex signing vocabulary. (A, B, C, D, E)</li><li>Understand better the difficulties of living as a deaf person in a hearing culture. (E,F,G)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ASL ",
    "Code": 2020,
    "Title": "Intermediate American Sign Language II",
    "Learning_Outcomes": "<ol><li>Engage in more advanced ASL conversations at an appropriate level of formality. A, B</li><li>Engage in culturally and politically relevant topics. A, B, C, D</li><li>Use and understand ASL in conversations about the body and health, food and dining, clothing and shopping, holidays and celebrations, and travel. B</li><li>Critically analyze and translate written text into ASL Gloss. B, C, D</li><li>Show knowledge and respect to deaf culture. B, C, D</li><li>Identify and discuss the history of oppression within deaf history, both foreign and its influence on America. B, D, E</li><li>Discuss contributions of the deaf community in history, art, politics, music, and literature. E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "ASL  ",
    "Code": 2010,
    "Title": "Intermediate American Sign Language I",
    "Learning_Outcomes": "<ol><li>Interpret an additional 100 widely used American sign language idioms. (A, B, C)</li><li>Apply the principles of glossing, text analysis, and ASL grammar to classroom and interpersonal conversations. (A, B, C)</li><li>Analyze and then interpret deaf cultural humor appropriately. (C)</li><li>Analyze and appropriately interpret humor for bi-cultural and bi-lingual acceptance. (C)</li><li>Create and accurately interpret a family history presentation. (A)</li><li>Analyze and correctly interpret cultural idioms. (A, B, C)</li><li>Use appropriate non-manual adverbial markers with appropriate classifiers. (B)</li><li>Generate fluent, intelligible general ASL conversation within the deaf community and be able to converse using culturally and politically relevant topics (A, B, C)</li><li>Critically analyze and translate written text into ASL. (B, C)</li><li>Show knowledge and respect to deaf culture. (C)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CHIN ",
    "Code": 1010,
    "Title": "Beginning Chinese I ★",
    "Learning_Outcomes": "<ol><li>Recognize and write approximately 120 essential vocabularies; know how to pronounce a character or word with Pinyin; to learn word-formation and basic Chinese radicals.</li><li>Be able to talk about simple topics with accuracy and fluency, such as greeting each other, introduce family members, ask somebody’s professions, express dates and time, the numbers, inviting someone to have dinner, talking about hobbies and asking for F&amp;B, etc.</li><li>Be able to read short paragraph dialogs with/without Pinyin.</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CHIN ",
    "Code": 1020,
    "Title": "Beginning Chinese II ★",
    "Learning_Outcomes": "<ol><li>With the first semester’s study, recognize and write approximately 300 essential vocabularies; be familiar with how to pronounce a character /word with Pinyin; know how to write Chinese Characters in right order and basic Chinese sentence formation.</li><li>Expand more simple topics with accuracy and fluency, such as making appointment, studying Chinese, describe school routine, go shopping, exchange items and transportation methods.</li><li>Be able to read short paragraph dialogs with/without Pinyin; be able to write simple diaries and letters.</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CHIN ",
    "Code": 2010,
    "Title": "Intermediate Chinese I ★",
    "Learning_Outcomes": "<ol><li>Will be able to talk about topics about daily life and campus life in Chinese with accuracy and fluency.</li><li>Will be able to read the paragraph dialogue without Pinyin and retell stories of the dialog after reading them.</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CHIN ",
    "Code": 2020,
    "Title": "Intermediate Chinese II ★",
    "Learning_Outcomes": "<ol><li>Will be able to talk about topics about daily life and campus life in Chinese with accuracy and fluency.</li><li>Will be able to read the paragraph dialogue without Pinyin and retell stories of the dialog after reading them.</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ ",
    "Code": 1010,
    "Title": "Introduction to Criminal Justice",
    "Learning_Outcomes": "<ol><li>Demonstrate an understanding of the nature, function, and scope of criminal justice. (A)</li><li>Understand the issues and component parts of a police organization. (B)</li><li>Understand criminal laws and procedures and comprehend the nature and scope of the American court system. (C &amp; D)</li><li>Understand the dynamics of punishment and the administration of correctional facilities. (E)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ ",
    "Code": 1020,
    "Title": "Introduction to the Legal Process",
    "Learning_Outcomes": "<ol><li>Distinguish the differences between local, state, and federal court systems and describe the roles of those involved in the American legal system. (A, B, D)</li><li>Examine the laws pertaining to the American legal system, emphasizing the importance of the adversary system in the legal process, including trial and sentencing. (A, C, E)</li><li>Analyze how the various laws protect the individual and individual’s rights as an American citizen. (C, D, E)</li><li>Cite and describe the steps in a court trial.(C, D, E)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 1340,
    "Title": "Criminal Investigation",
    "Learning_Outcomes": "<ol><li>Be acquainted with the proven methods, procedures, terminology resources, and laws regarding the art and science of Criminal Investigation. (A, B, D)</li><li>Have a working knowledge of case investigation, case development and reporting. (A, C, D)</li><li>Will have an awareness of the importance of evidence evaluation and the legal requirements of admissibility of evidence. (B, D, E)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 1360,
    "Title": "Introduction to Crime Scene Investigation",
    "Learning_Outcomes": "<ol><li>The student will be able to survey and prepare a crime scene for processing and properly document the scene by photography and sketching. (B, E)</li><li>The student will be able to recognize, identify, tag, and properly collect all types of physical evidence. (A, B, E)</li><li>The student will demonstrate the techniques of fingerprinting individuals. (A, B, C)</li><li>The student will demonstrate the techniques of developing latent prints and lifting the print with powder and chemicals. (A, B, C, D)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 1373,
    "Title": "Introduction to Homeland Security",
    "Learning_Outcomes": "<ol><li>Demonstrate an understanding of the basic ideas and concepts fundamental to an understanding of Homeland Security. (A, B)</li><li>Demonstrate an understanding of the historical development of Homeland Security and how it affects our country. (A, B, C)</li><li>Demonstrate how specific aspects of Homeland Security can be applied to their career. (B, C)</li><li>Demonstrate an understanding and appreciation of the role of Homeland Security. (A, B)</li><li>Demonstrate an understanding of the major components of homeland security and the basic of intelligence. (A, B, C)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 2010,
    "Title": "Introduction to Law Enforcement",
    "Learning_Outcomes": "<ol><li>Identify and discuss the basic history of policing in America. (A, B)</li><li>Identify related policies and procedures that govern modern law enforcement agencies. (B, E)</li><li>Identify the role of policing in the criminal court system and basic criminal procedures. (B, C, D)</li><li>Identify the basic elements of policing components and operations. (A, B, E)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 2020,
    "Title": "Introduction to Corrections",
    "Learning_Outcomes": "<ol><li>Identify and discuss the advent and history of prisons in America. (A, B, C)</li><li>Recognize the differences between the state, federal and private prison systems. (A, B, C)</li><li>Identify and discuss the issues surrounding the management of correctional facilities. (C, D, E)</li><li>Identify and discuss the issues surrounding the future of corrections. (A, D, E)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 2305,
    "Title": "Introduction to Cyber Security for Criminal Justice",
    "Learning_Outcomes": "<ol><li>Identify the most commonly reported computer-related crimes. (A, B, C, D)</li><li>Identify and correlate computer-related crimes by demographic. (A, B, C, D)</li><li>Explain the process of following computer-related crimes by demographic. (A, B, C, D)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 2311,
    "Title": "Juvenile Justice",
    "Learning_Outcomes": "<ol><li>Demonstrate an understanding of the Juvenile Court system; a student should be able to contrast the laws, procedures, and policies with those of an “Adult” court. (A, B, C, D)</li><li>Demonstrate an understanding of the social dynamics that contribute to juvenile crime. (A, B, C, D)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 2312,
    "Title": "Criminology",
    "Learning_Outcomes": "<ol><li>Demonstrate and understanding of the various concepts of crime, law, and criminology. (A)</li><li>Demonstrate and understanding of the various causes of crime and the various theories of crime causation. (A, B)</li><li>Demonstrate and understanding of the various crime typologies and the theories associated with those typologies. (A, B, C, D)</li><li>Develop an understanding of how criminologists cooperate with other disciplines to solve crimes and create policy. (B, C, D)</li><li>Develop an understanding of the various perspectives in criminalizing behaviors. (A, B, C, D)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 2340,
    "Title": "Investigative Report Writing",
    "Learning_Outcomes": "<ol><li>Assist in the process of preparing reports that convey information and provide direction for criminal justice activities. (A, B)</li><li>Learn proper techniques to use in effective writing when compiling reports. (A, B, C)</li><li>Introduce the student to ways of obtaining and recording essential information in a narrative report. (A, B, C)</li><li>Achieve clarity through grammatical correctness. (B, C, D)</li><li>Obtain and record witness statements. (B, C, D)</li><li>Organize the report and how to maintain objective viewpoints. (E)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 2345,
    "Title": "Domestic Violence",
    "Learning_Outcomes": "<ol><li>Develop and demonstrate an understanding of the components of the criminal justice system as they pertain to domestic violence. (A, B, C)</li><li>Develop and demonstrate an understanding of the role law enforcement plays investigating and assisting the courts in prosecution of domestic violence cases. (A, B, C)</li><li>Develop and demonstrate an understanding of the various solutions being addressed in regard to the education and prevention of domestic violence. (A, B, C)</li><li>Demonstrate the ability to define domestic violence as it pertains to different factions of the family and community. (A, B, C)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 2366,
    "Title": "Criminal Intelligence",
    "Learning_Outcomes": "<ol><li>Describe the legal direction and authority of intelligence gathering. (A)</li><li>Provide analysis of past and current crime trends to target future crime. (A, B)</li><li>Apply data into information. (A, B, D)</li><li>Distinguish differences between Tactical, Strategic, and Operational Intelligence. (A)</li><li>Contrast links between people, organizations, and events. (B, D)</li><li>Present intelligence effectively in oral and written reports. (B, C, D)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 2371,
    "Title": "Intelligence Analysis &amp; Security Management",
    "Learning_Outcomes": "<ol><li>Demonstrate operational knowledge of intelligence gathering and analysis pertinent to homeland security and other threats facing government and private sectors and outline basic intelligence policies and functions of the United States Government, including articulating the meaning and purpose for the Intelligence Reform and Terrorism Prevention Act of 2004. (A, B, C)</li><li>Evaluate the dependability and reliability of source information and enumerate specific methods and/or techniques for obtaining intelligence, synthesizing it, and analyzing it. (A, B, C)</li><li>Test and challenge intelligence in light of critical judgment and evidentiary analysis and implement basic intelligence gathering techniques and analysis. (A, B, C)</li><li>Using various forms of intelligence, apply sound reasoning, formulate predictions, and forecast terrorist activities. (A, B, C)</li><li>Describe the foundation and goals for security; identify, describe, and analyze threats to national and international safety and security; and apply ethical and professional behaviors to intelligence gathering and operations. (A, B, C)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 2381,
    "Title": "Special Topics in Criminal Justice",
    "Learning_Outcomes": "<ol><li>Demonstrate an awareness of the contribution of the liberal arts to the development of civilization. (A)</li><li>Articulate and support personal opinion with specific reference to the primary works. (B)</li><li>Demonstrate knowledge of the basic values which support the tradition of the culture(s) presented. (A)</li><li>Study in depth one aspect of a criminal justice problem and write an analytical paper. (A, B)</li><li>Analyze the effects of the historical context on specific aspects of human culture. (A, C)</li><li>Write insightful, appropriately developed answers to essay test questions concerning the works studied. (B, C)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 2390,
    "Title": "Probation &amp; Parole",
    "Learning_Outcomes": "<ol><li>Analyze the nature, origins, purposes, structure, and operation of community corrections in America. (A)</li><li>Analyze the elements of community release, foundations of probation and parole, sanctions for noncompliance, and cost to society. (B, C)</li><li>Identify and analyze the various types of community release programs, offender behaviors, and effective tools to manage offenders in the community. (B, C)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "CRMJ  ",
    "Code": 2394,
    "Title": "White Collar Crime",
    "Learning_Outcomes": "<ol><li>Demonstrate an understanding of the basic characteristics and classifications of the various types of white-collar crime and their causes, and what the consequences are for individuals and society at large. (A, B, C)</li><li>Demonstrate an understanding of the various methods used to demonstrate a white-collar crime has been committed. (A, B)</li><li>Demonstrate an understanding of the laws, legislation, corporate policies, and future issues in white-collar crime. (B, C)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "FREN ",
    "Code": 1010,
    "Title": "Beginning French I ★",
    "Learning_Outcomes": "<ol><li>React and respond to basic oral conversations in French A,B</li><li>Pronounce French text correctly B, C</li><li>Use basic oral French in a conversation with native speakers to acquire goods and services B</li><li>Use correct declarative or interrogative intonation in French B</li><li>Use French vocabulary to describe your family and likes and dislikes B, E</li><li>Read and understand simple articles in French</li><li>Write elementary compositions in French D</li><li>Have a basic sensitivity and understanding of family life, pastimes and university life in other cultures</li><li>Describe French holidays, food, family life, and patterns of daily living. B, D, E.</li><li>Discuss contributions of French in art, literature and patterns of daily living. E</li><li>Exhibit respect for the cultural and linguistic differences of various people. E</li><li>Be fully informed regarding the Study Abroad opportunities available through the Tennessee Consortium for International Studies.</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "FREN ",
    "Code": 1020,
    "Title": "Beginning French II ★",
    "Learning_Outcomes": "<ol><li>Use the French language in pair and group exercises to exchange information and talk about their feelings.</li><li>Complete workbook exercises in reading, writing, speaking, and understanding French.</li><li>Develop listening and speaking skills in real contexts through the use of an extensive audio program.</li><li>Collaborate in teams to practice verbal exercises and complete written exercises.</li><li>Participate in language learning experiences which call for sequencing and memorizing.</li><li>Read about differences between American culture and French culture, with some analysis of how culture is expressed through language.</li><li>Discuss video viewings of the geography of French speaking countries and their people.</li><li>Practice elements of the work ethic by regularly attending class, being punctual, participating in class activities, and demonstrating good manners.</li><li>Be fully informed regarding the Study Abroad opportunities available through the Consortium for International Studies.</li><li>Participate-if their schedule allows-in the French table, an extracurricular opportunity to hone their French skills in a relaxed setting in the company of a PSCC instructor.</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "FREN ",
    "Code": 2010,
    "Title": "Intermediate French I ★",
    "Learning_Outcomes": "<ol><li>Students will listen to questions and form logical and correct responses for those questions. Students will listen to responses by other students and comment on the appropriateness of those responses for the situation. A</li><li>Students will develop time management skills by completing assigned tasks within a designated amount of time. A</li><li>Students will develop and implement personalized methods for learning new vocabulary, grammatical constructions and communication strategies that will enable them to learn and retain material presented in class. B</li><li>Students will work together in paired activities as well as in small group activities to determine the most appropriate ways to complete communicative exercises. B</li><li>Students will, when appropriate, complete written homework using a word processor, taking care to use all punctuation and special characters unique to the language. C</li><li>Students will use computer tutorials that accompany the text when necessary. C</li><li>Students will use Web based supplements that accompany the text when appropriate. C</li><li>Be fully informed regarding the Study Abroad opportunities available through the Tennessee Consortium for international Studies. D</li><li>If feasible, the student will participate in the French table an-extracurricular opportunity to hone their French skills in a relaxed setting in the company of a PSCC instructor. D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "FREN ",
    "Code": 2020,
    "Title": "Intermediate French II ★",
    "Learning_Outcomes": "<ol><li>Understand French spoken at moderate conversational speed within familiar contexts. A</li><li>Expand vocabulary A</li><li>Combine the elements of learned material to ask questions or make statements in French. B</li><li>Read a variety of short conversations and exercises with comprehension. C</li><li>Increase grammatical accuracy in writing. D</li><li>Identify specific aspects of French culture with reference to literature and film E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "GERM ",
    "Code": 1010,
    "Title": "Beginning German I ★",
    "Learning_Outcomes": "<ol><li>Engage in basic oral conversations in German at an appropriate level of formality. A, B</li><li>Pronounce German text correctly. B, C</li><li>Use and understand basic oral German in conversations about school, families, leisure activities, and daily life. B</li><li>Recognize and use correct declarative or interrogative intonation in German. B</li><li>Use German vocabulary and standard grammar to engage in common communicative tasks, such as identifying quantities and location of objects, asking and answering questions, discussing family relationships, describing people and things, talking about the weather, and expressing opinions and intentions. B, E</li><li>Read and understand simple informative and literary passages in German. C, E</li><li>Write sentences and elementary compositions in German. D</li><li>Identify and describe German traditions, family life, and patterns of daily living. B, D, E</li><li>Identify and discuss specific contributions of German individuals and communities as they relate to global diversity, particularly in the areas of history, art, politics, music, and literature. E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "GERM ",
    "Code": 1020,
    "Title": "Beginning German II ★",
    "Learning_Outcomes": "<ol><li>Engage in more advanced oral conversations in German at an appropriate level of formality. A, B</li><li>Pronounce German text Correctly. B, C</li><li>Use and understand basic oral German in conversations about the body and health, food and dining, clothing and shopping, holidays and celebrations, and travel. B</li><li>Differentiate between haben and sein B, D</li><li>Use German vocabulary and standard grammar to engage in common communicative tasks, such as making comparisons, relating events in the past, describing using the imperfect aspect, asking and answering a greater variety of questions, avoiding repetition by using pronouns, and expressing indefinite and negative ideas. B, E</li><li>Read and understand simple informative and literary passages in German. C, E</li><li>Write elementary compositions in German on a variety of familiar topics. D</li><li>Identify and describe German landmarks, foods, and holidays. B, D, E</li><li>Discuss contributions of German in history, art, politics, music, and literature. E</li><li>Identify and discuss specific contributions of German individuals and communities as they relate to global diversity, particularly in the areas of history, art, politics, music, and literature. E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "GERM ",
    "Code": 2010,
    "Title": "Intermediate German I ★",
    "Learning_Outcomes": "<ol><li>Engage in more advanced oral conversations in German at an appropriate level of formality. A, B</li><li>Pronounce correctly German text. B, C</li><li>Participate in more extensive oral German conversations about personal relationships, entertainment and sports, and daily life. B</li><li>Differentiate between sein and haben. B, D</li><li>Use German vocabulary and standard grammar to engage in common communicative tasks, such as expressing ideas in the present and present progressive tense, narrating events in the past, using the preterit and imperfect aspects, describing likes and dislikes, and avoiding repetition by using pronouns. B, E</li><li>Read and understand more complex informative and literary passages in German. C, E</li><li>Write elementary compositions in German on a variety of familiar topics. D</li><li>Understand and respond appropriately to authentic short films from the German-speaking world. A, B, D, E</li><li>Identify and discuss specific contributions of German individuals and communities as they relate to global diversity, particularly in the areas of cinema, art, politics, music, and literature. E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "GERM ",
    "Code": 2020,
    "Title": "Intermediate German II ★",
    "Learning_Outcomes": "<ol><li>Engage in more advanced oral conversations in German at an appropriate level of formality. A, B</li><li>Pronounce correctly German text. B, C</li><li>Participate in more extensive oral German conversations about health, travel, and nature. B</li><li>Differentiate between the subjunctive and indicative moods in German. B, D, E</li><li>Distinguish the proper uses of prepositions in German. B, D</li><li>Use German vocabulary and standard grammar to engage in common communicative tasks, such as giving commands, talking about natural phenomena, making comparisons, expressing ideas using the present and past subjunctive in a variety of contexts, expressing indefinite and negative ideas, and expressing what has or had been done. B, E</li><li>Read and understand more complex informative and literary passages in German. C, E</li><li>Write elementary compositions in German on a variety of familiar topics. D</li><li>Understand and respond appropriately to authentic short films from the German-speaking world. A, B, D, E</li><li>Identify and discuss specific contributions of German individuals and communities as they relate to global diversity, particularly in the areas of international trade, the environment, history, art, politics, music, and literature. E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "HIST ",
    "Code": 1110,
    "Title": "Early World History ♦ ★",
    "Learning_Outcomes": "<ol><li>Identify the major political themes in World Civilization from 1715 to the present.&nbsp; A&nbsp;</li><li>Identify the major social-economic themes in World Civilization from 1715 to the present. A</li><li>Identify the major cultural themes in World Civilization from the 1715 to the present. A</li><li>Write analytical essays that explore the main themes of World Civilization. B</li><li>Recognize that past societies possess different cultural values than their own society. C</li><li>Use their knowledge of the past to gain a deeper understanding of contemporary issues. D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "HIST ",
    "Code": 1120,
    "Title": "Modern World History ♦ ★",
    "Learning_Outcomes": "<ol><li>Identify the major political themes in World Civilization from 1500 to the present.&nbsp; A&nbsp;</li><li>Identify the major social-economic themes in Western Civilization from 1500 to the present. A</li><li>Identify the major cultural themes in Western Civilization from the 1500 to the present. A</li><li>Write analytical essays that explore the main themes of Western Civilization. B</li><li>Recognize that past societies possess different cultural values than their own society. C</li><li>Use their knowledge of the past to gain a deeper understanding of contemporary issues. D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "HIST ",
    "Code": 2010,
    "Title": "Early United States History ♦ ★",
    "Learning_Outcomes": "<ol><li>Identify the major political themes in United States history from the colonial period to 1877.&nbsp; A&nbsp;</li><li>Identify the major social-economic themes in United States history from the colonial period to 1877. A</li><li>Write analytical essays that explore the main themes of United States history. B</li><li>Recognize that past societies possess different cultural values than their own society. C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "HIST ",
    "Code": 2020,
    "Title": "Modern United States History ♦ ★",
    "Learning_Outcomes": "<ol><li>Identify the major political themes in United States history since 1877.&nbsp; A&nbsp;</li><li>Identify the major social-economic themes in United States history since 1877. A</li><li>Write analytical essays that explore the main themes of United States history. B</li><li>Recognize that past societies possess different cultural values than their own society. C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "HIST ",
    "Code": 2210,
    "Title": "Early Western Civilization ♦ ★",
    "Learning_Outcomes": "<ol><li>Identify the major political themes in Western Civilization from the Ancient through the Early Modern Period. A&nbsp;</li><li>Identify the major social-economic themes in Western Civilization from the Ancient through the Early Modern Period. A</li><li>Identify the major cultural themes in Western Civilization from the Ancient through the Early Modern Period. A</li><li>Write analytical essays that explore the main themes of Western Civilization. B</li><li>Recognize that past societies possess different cultural values than their own society. C</li><li>Use their knowledge of the past to gain a deeper understanding of contemporary issues. D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "HIST ",
    "Code": 2220,
    "Title": "Modern Western Civilization ♦ ★",
    "Learning_Outcomes": "<ol><li>Identify the major political themes in Western Civilization from 1715 to the present.&nbsp; A&nbsp;</li><li>Identify the major social-economic themes in Western Civilization from 1715 to the present. A</li><li>Identify the major cultural themes in Western Civilization from the 1715 to the present. A</li><li>Write analytical essays that explore the main themes of Western Civilization. B</li><li>Recognize that past societies possess different cultural values than their own society. C</li><li>Use their knowledge of the past to gain a deeper understanding of contemporary issues. D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "HIST   ",
    "Code": 2030,
    "Title": "Tennessee History ♦",
    "Learning_Outcomes": "<ol><li>Describe historical points of fact in Tennessee history. A, B</li><li>Write analytical essays that apply knowledge to larger historical ideas. A, B, C</li><li>Apply historical knowledge to larger political, social, and religious themes in Tennessee history. A, C</li><li>Identify how historical themes changed through the course of Tennessee history. A, C</li><li>Compare and contrast Tennessee history with events in the United States and the larger world. C, D</li><li>Examine history from the period of prehistory to the modern era. A, B, C, D</li><li>Identify what in the past has helped shape the modern world and what modern ideas are different from the past. A, D</li><li>Assess the idea of presentism, or that the modern world is inherently better than the past. A, D</li><li>Illustrate the strengths and weaknesses of both the past and the present. A. C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "HUM ",
    "Code": 2100,
    "Title": "Leadership Development",
    "Learning_Outcomes": "<ol><li>Discuss the essential team leadership or supervisory skills. A,B,C,D</li><li>Compare and contrast leadership and supervision. A,B,C,D</li><li>List the characteristics of effective groups and teams. A,B,C,D</li><li>Apply essential oral and written communication skills. A,B,C,D</li><li>Evaluate the qualities of an interpersonally effective leader. A,B,C,D</li><li>Explain the causes of conflict. A,B,C,D</li><li>Describe strategies for managing conflict. A,B,C,D</li><li>Describe strategies for managing conflict. A,B,C,D</li><li>Summarize the skills needed to be a successful leader. A,B,C,D</li><li>Utilize various leadership styles and approaches. A,B,C,D</li><li>Discuss in detail time management techniques. A,B,C,D</li><li>Understand how to analyze a problem. A,B,C,D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "LAS ",
    "Code": 2020,
    "Title": "Special Topics in Liberal Arts",
    "Learning_Outcomes": "<ol><li>Demonstrate an awareness of the contribution of the liberal arts to the development of civilization. A</li><li>Articulate and support personal opinion with specific reference to the primary works. B</li><li>Demonstrate knowledge of the basic values which support the tradition of the culture(s) presented. A</li><li>Analyze the effects of the historical context on specific aspects of human culture. A, B</li><li>Study in depth one aspect of a liberal arts problem and write an analytical paper. A, B</li><li>Write insightful, appropriately developed answers to essay test questions concerning the works studied. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MLC ",
    "Code": 1010,
    "Title": "Elementary Modern Language I",
    "Learning_Outcomes": "<ol><li>React and respond appropriately to basic oral conversation in the target language. A,B</li><li>Pronounce correctly the target language text. B,C</li><li>Use the basic oral target language with native speakers by answering correctly basic questions A, B</li><li>Use correct declarative and interrogative intonation in the target language. B</li><li>Use the target language vocabulary to obtain essential goods and services. B</li><li>Read and translate simple articles from the target language to English. C</li><li>Write elementary compositions using simple sentences in the target language. D</li><li>Fill out basic business and travel forms in the target language. D</li><li>Describe holidays, foods, family life, and patterns of daily living that make any group of people unique. B, D,E</li><li>Discuss some of the contributions of in art, literature and music made by speakers of the target language. E</li><li>Exhibit respect for the cultural and linguistic differences of various people. E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MLC ",
    "Code": 1020,
    "Title": "Elementary Modern Language II",
    "Learning_Outcomes": "<ol><li>Respond and react to simple statements, directions, questions, and responses in the present and past tenses in the language of study. A</li><li>Pronounce a basic set of vocabulary words and structures necessary for conversation on several topics. B</li><li>Use a vocabulary of nearly 1000 words, including irregular verbs. B</li><li>Translate short passages in the moderately difficult target language&nbsp; in present and past tenses. C</li><li>Recognize sentence patterns in the written target language. C</li><li>Compose short descriptive paragraphs which are grammatically correct. D</li><li>Use appropriate word order, prepositions, and possessive, direct object, and indirect object pronouns in the target language. D</li><li>Demonstrate correct agreement between subjects and verbs, nouns and adjectives in the target language. C, D</li><li>Discuss differences and similarities between the people who speak the target language and the United States today on several topics. E</li><li>Describe the target language heritage in the United States. E</li><li>Name other target language speaking countries of the world today. E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MLC ",
    "Code": 2010,
    "Title": "Intermediate Modern Language I",
    "Learning_Outcomes": "<ol><li>Comprehend increasingly difficult dialogues. A</li><li>Pronounce correctly all vocabulary. B</li><li>Carry on conversations on a variety of topics. B</li><li>Use a variety of verb tenses. B</li><li>Understand the main ideas in magazines and newspapers. C</li><li>Be understood by a native speaker not used to dealing with foreigners. B</li><li>Have good control of basic composition forms. D</li><li>Write a simple letter in the target language. D</li><li>Fill out forms; write messages and notes well enough to meet practical, social demands. D</li><li>Understand the culture as it differs from the student's culture. E</li><li>Recognize and discuss major works of art, music, and architecture. E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MLC ",
    "Code": 2020,
    "Title": "Intermediate Modern Language II",
    "Learning_Outcomes": "<ol><li>React and respond appropriately to intermediate level oral conversation in Spanish. Students will role play predetermined situations and respond to questions and comments of other role players.</li><li>Students will listen to responses by other students and comment on the appropriateness of those responses for the situation. A, B</li><li>Pronounce correctly Spanish text. B, C</li><li>Use intermediate level oral Spanish in a conversation with native speakers answering correctly questions of moderate difficulty. A, B</li><li>Use correct declarative and interrogative intonation in Spanish. B</li><li>Use Spanish vocabulary to obtain goods and services. B</li><li>Read and translate articles of moderate difficulty from Spanish to English. C</li><li>Write compositions of moderate difficulty using sentences and questions in the present tense and the present subjunctive. D</li><li>Fill out basic business and travel forms in Spanish. D</li><li>Demonstrate understanding of the difference in structure between English and Spanish. D</li><li>Describe Hispanic holidays, foods, family life and the patterns of daily living that make any</li><li>Discuss some of the contributions of Hispanics in art, literature and music. E</li><li>Exhibit respect for the cultural and linguistic differences of various people. E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MLC ",
    "Code": 2510,
    "Title": "Modern Language Conversation",
    "Learning_Outcomes": "<ol><li>Comprehend increasingly difficult dialogues. A, B</li><li>Pronounce correctly all vocabulary. B</li><li>Carry on conversations on a variety of topics. B</li><li>Use a variety of verb tenses. B</li><li>Understand the main ideas in magazines and newspapers. C</li><li>Be understood by a native speaker not used to dealing with foreigners. B</li><li>Have good control of basic composition forms. D</li><li>Write a simple letter in the language being studied. D</li><li>Fill out forms; write messages and notes well enough to meet practical, social demands. D</li><li>Understand the culture as it differs from the student's culture. E</li><li>Recognize and discuss major works of art, music, and architecture. E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1000,
    "Title": "Fundamentals of Music ★",
    "Learning_Outcomes": "<ol><li>Read and write notes of specific pitch in two clefs. A</li><li>Read and write notes of specific duration. A</li><li>Demonstrate an understanding of rhythmic organization by counting the beats of a music excerpt correctly. C</li><li>Construct a major scale from any note given. B, E</li><li>Construct a major key signature from the name of the key. B</li><li>Construct minor scales (three forms). B</li><li>Construct minor key signatures. B</li><li>Relate the basic structure of music (the interval) to scale structures. E</li><li>Construct the four types of triads on any given note. E</li><li>Demonstrate an understanding of the basic terminology used in music. A, F</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1027,
    "Title": "Class Piano I ★",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at recitals and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in class to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in piano performance. B, C</li><li>Enjoy the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from piano literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1030,
    "Title": "Introduction to Music ♦ ★",
    "Learning_Outcomes": "<ol><li>Define basic terminology related to music and explain specific works in those terms. B</li><li>Apply knowledge of terms and concepts to an artistic experience. B, E</li><li>Analyze works from the major style periods of music by comparing and contrasting forms, styles, and genres. A, B, E</li><li>Recognize the timbres of instruments singly and in combination. C, D</li><li>Relate major works and movements to their composers, culture, and to the historical context in which they lived. A, C, E</li><li>Infer correlations between historical context in which music is created and the subsequent type of music produced. A, E</li><li>Apply criteria of judgment to selected musical works of various composers from each of the historical periods. B, C, E</li><li>Compare the styles of various composers working within the same time frame. A, B, C, D</li><li>Discuss the impact which instrument selection has upon the musical effect achieved. C, D</li><li>Determine how each composer manipulates the raw materials to make his style unique. A, B, C, D</li><li>Recognize the ways in which music is a reflection of society, culture, and time. A, E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1057,
    "Title": "Music Theory I",
    "Learning_Outcomes": "<ol><li>Recognize at sight and be able to notate chords in a key. A, C</li><li>Read and understand pitch and rhythmic notation. A, C</li><li>Identify chords by Roman Numeral and inversion numbers. A, B, C</li><li>Identify and write a variety of non-chord tones. A, B, C</li><li>Interpret the phrase structure and cadence patterns of a piece of music of the common practice period. A, B</li><li>Demonstrate an understanding of the functions of chords in a piece of music. A, B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1058,
    "Title": "Ear Training I",
    "Learning_Outcomes": "<ol><li>Read notes of specific pitch in bass and treble clefs. A</li><li>Write notes of specific pitch in bass and treble clefs. A</li><li>Sing major scale patterns using scale degree numbers.</li><li>Count rhythmic patterns out loud. B</li><li>Write simple rhythmic patterns from dictation. B</li><li>Write simple melodic patterns from dictation. A,C</li><li>Identify intervals by size and type aurally. C</li><li>Sing intervals of specified size and type. C,E</li><li>Sing minor scale patterns using scale degree numbers. E</li><li>Write a melodic line from dictation. A,C</li><li>Write a melodic line with rhythm from dictation. A,B,C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1127,
    "Title": "Class Piano II ★",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at recitals and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in class to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in piano performance. B, C</li><li>Enjoy the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from piano literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1155,
    "Title": "Music Theory II",
    "Learning_Outcomes": "<ol><li>Recognize at sight and be able to analyze diatonic seventh chords. A</li><li>Construct four-part harmony using proper part writing techniques. B, C</li><li>Make observations regarding voice leading in pieces of chordal style. A, B</li><li>Analyze complete pieces from the common practice period. A, B, C</li><li>Describe the function of chords in a given piece of music. A, B</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1156,
    "Title": "Ear Training II",
    "Learning_Outcomes": "<ol><li>Read notes of specific pitch in bass, treble, and alto clefs. A</li><li>Write notes of specific pitch in bass, treble, and alto clefs. A</li><li>Sing major scale patterns using scale degree numbers.</li><li>Count rhythmic patterns out loud. B</li><li>Write simple rhythmic patterns from dictation. B</li><li>Write simple melodic patterns from dictation. A,C</li><li>Identify intervals by size and type aurally. C</li><li>Sing intervals of specified size and type. C,E</li><li>Sing minor scale patterns using scale degree numbers. E</li><li>Write a melodic line from dictation. A,C</li><li>Write a melodic line with rhythm from dictation. A,B,C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1511,
    "Title": "Concert Chorale",
    "Learning_Outcomes": "<ol><li>Perform appropriate vocal exercise to warm up the voice prior to performance. A</li><li>Recognize and follow basic directions in musical scores, i.e. dynamic markings, repeat signs, tempo indications, etc. E</li><li>Apply proper performance practices for the literature being performed. C</li><li>Work as a member of a team toward presentation of a successful choral performance. A, B, C, D, E</li><li>Relate repertoire pieces to the appropriate culture and historical context. C, E</li><li>Perform in public with a choral group demonstrating poise and self-confidence. A, B, D, E</li><li>Apply techniques of vocal production, posture, and vowel placement to achieve a healthy pleasant singing quality. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1521,
    "Title": "Variations",
    "Learning_Outcomes": "<ol><li>Perform appropriate vocal exercise to warm up the voice prior to performance. A</li><li>Recognize and follow basic directions in musical scores, i.e. dynamic markings, repeat signs, tempo indications, etc. E</li><li>Apply proper performance practices for the literature being performed. C</li><li>Work as a member of a team toward presentation of a successful choral performance. A, B, C, D, E</li><li>Relate repertoire pieces to the appropriate culture and historical context. C, E</li><li>Perform in public with a choral group demonstrating poise and self-confidence. A, B, D, E</li><li>Apply techniques of vocal production, posture, and vowel placement to achieve a healthy pleasant singing quality. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1540,
    "Title": "Jazz Band",
    "Learning_Outcomes": "<ol><li>Perform appropriate instrumental exercises to warm up the instrument prior to performance. A</li><li>Recognize and follow basic directions in jazz scores i.e. dynamic markings, repeat signs, tempo indications, chord symbols, etc. E</li><li>Apply proper performance practices for the literature being performed. C</li><li>Work as a member of a team toward presentation of a successful performance. A, B, C, D, E</li><li>Relate repertoire pieces to the appropriate culture and historical context. C, E</li><li>Perform in public with the group demonstrating poise and self-confidence. A, B, D, E</li><li>Apply techniques of tone posture, and instrumental expertise to achieve an appropriate sound for jazz music. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1545,
    "Title": "Bluegrass Ensemble",
    "Learning_Outcomes": "<ol><li>Perform appropriate instrumental exercises to warm up the instrument prior to performance. A</li><li>Recognize and follow basic directions in instrumental parts, i.e. dynamic markings, repeat signs, tempo indications, etc. E</li><li>Apply proper performance practices for the literature being performed. C</li><li>Work as a member of a team toward presentation of a successful performance. A, B, C, D, E</li><li>Relate repertoire pieces to the appropriate culture and historical context. C, E</li><li>Perform in public with the group demonstrating poise and self-confidence. A, B, D, E</li><li>Apply techniques of tone posture, and instrumental expertise to achieve an appropriate sound for music. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1555,
    "Title": "Guitar Ensemble",
    "Learning_Outcomes": "<ol><li>Perform appropriate instrumental exercises to warm up the instrument prior to performance. A</li><li>Recognize and follow basic directions in instrumental parts, i.e. dynamic markings, repeat signs, tempo indications, etc. E</li><li>Apply proper performance practices for the literature being performed. C</li><li>Work as a member of a team toward presentation of a successful performance. A, B, C, D, E</li><li>Relate repertoire pieces to the appropriate culture and historical context. C, E</li><li>Perform in public with the group demonstrating poise and self-confidence. A, B, D, E</li><li>Apply techniques of tone posture, and instrumental expertise to achieve an appropriate sound for music. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1565,
    "Title": "Brass Ensemble",
    "Learning_Outcomes": "<ol><li>Perform appropriate instrumental exercises to warm up the instrument prior to performance. A</li><li>Recognize and follow basic directions in instrumental parts, i.e. dynamic markings, repeat signs, tempo indications, etc. E</li><li>Apply proper performance practices for the literature being performed. C</li><li>Work as a member of a team toward presentation of a successful performance. A, B, C, D, E</li><li>Relate repertoire pieces to the appropriate culture and historical context. C, E</li><li>Perform in public with the group demonstrating poise and self-confidence. A, B, D, E</li><li>Apply techniques of tone posture, and instrumental expertise to achieve an appropriate sound for music. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1575,
    "Title": "Studio Orchestra",
    "Learning_Outcomes": "<ol><li>Perform appropriate instrumental exercises to warm up the instrument prior to performance. A</li><li>Recognize and follow basic directions in instrumental parts, i.e. dynamic markings, repeat signs, tempo indications, etc. E</li><li>Apply proper performance practices for the literature being performed. C</li><li>Work as a member of a team toward presentation of a successful performance. A, B, C, D, E</li><li>Relate repertoire pieces to the appropriate culture and historical context. C, E</li><li>Perform in public with the group demonstrating poise and self-confidence. A, B, D, E</li><li>Apply techniques of tone posture, and instrumental expertise to achieve an appropriate sound for music. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1595,
    "Title": "Percussion Ensemble",
    "Learning_Outcomes": "<ol><li>Perform appropriate instrumental exercises to warm up the instrument prior to performance. A</li><li>Recognize and follow basic directions in instrumental parts, i.e. dynamic markings, repeat signs, tempo indications, etc. E</li><li>Apply proper performance practices for the literature being performed. C</li><li>Work as a member of a team toward presentation of a successful performance. A, B, C, D, E</li><li>Relate repertoire pieces to the appropriate culture and historical context. C, E</li><li>Perform in public with the group demonstrating poise and self-confidence. A, B, D, E</li><li>Apply techniques of tone posture, and instrumental expertise to achieve an appropriate sound for music. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1710,
    "Title": "Piano/Non-major (half-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in piano performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from piano literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1711,
    "Title": "Piano/Non-major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in piano performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from guitar literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1712,
    "Title": "Piano/Music Major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in piano performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from guitar literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1720,
    "Title": "Voice/Non-major (half-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in vocal performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from vocal literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1721,
    "Title": "Voice/Non-major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in vocal performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from vocal literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1722,
    "Title": "Voice/Music Major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in vocal performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from vocal literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1730,
    "Title": "Guitar/Non-major (half-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in guitar performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from guitar literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1731,
    "Title": "Guitar/Non-major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in guitar performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from guitar literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1732,
    "Title": "Guitar/Music Major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in guitar performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from guitar literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1740,
    "Title": "Woodwind/Non-major (half-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in woodwind instrument(s) performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from woodwind instrument(s) literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1741,
    "Title": "Woodwind/Non-major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in woodwind instrument(s) performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from woodwind instrument(s) literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1742,
    "Title": "Woodwind/Music Major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in woodwind instrument(s) performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from woodwind literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1750,
    "Title": "Brass/Non-major (half-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in brass instrument(s) performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from brass instrument(s) literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1751,
    "Title": "Brass/Non-major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in brass performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from brass literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1752,
    "Title": "Brass/Music Major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in brass performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from brass literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1760,
    "Title": "String/Non-major (half-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in string performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from string literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1761,
    "Title": "String/Non-major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in string performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from string literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1762,
    "Title": "String/Music Major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in string performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from string literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1770,
    "Title": "Percussion/Non-major (half-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in percussion instrument(s) performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from percussion instrument(s) literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1771,
    "Title": "Percussion/Non-major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in percussion instrument(s) performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from percussion instrument(s) literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1772,
    "Title": "Percussion/Music Major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in percussion instrument(s) performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from percussion instrument(s) literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1780,
    "Title": "Contemporary Piano Styles/Non-major (half-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in piano performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from appropriate literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1781,
    "Title": "Contemporary Piano Styles/Non-major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in piano performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from appropriate literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 1782,
    "Title": "Contemporary Piano Styles/Music Major (one-hour lesson)",
    "Learning_Outcomes": "<ol><li>Demonstrate technical fluency in the performance of selected repertoire. A, B, C, D, E</li><li>Recognize artistic excellence in music heard at performances and in portions of his/her own assigned music. C, D</li><li>Apply knowledge, terminology, and technical skills learned in lessons to actual performance. A, B</li><li>Plan and monitor the effectiveness of personal practice schedules. D, E</li><li>Recognize the emotional effect(s) of musical experiences. C, D</li><li>Evaluate strengths and weaknesses in piano performance. B, C</li><li>Appreciate the personal accomplishment of achieving a quality performance of selected repertoire pieces. C, D, E</li><li>Analyze works from appropriate literature by comparing and contrasting forms, styles, and ideas. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 2055,
    "Title": "Music Theory III",
    "Learning_Outcomes": "<ol><li>Recognize and notate examples of secondary function. A, B, C</li><li>Identify and notate examples of common chord modulations. B</li><li>Possess a working knowledge of chromatic harmony. A, B, C</li><li>Locate examples of mode mixture in musical excerpts. A, C</li><li>Describe the function of chords in a piece of tonal music. A, C</li><li>Recognize and notate Neapolitan chords. A, C</li><li>Understand modulation methods other than pivot chord. B</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 2056,
    "Title": "Ear Training III",
    "Learning_Outcomes": "<ol><li>Read notes of specific pitch in bass, treble, and alto clefs. A</li><li>Write notes of specific pitch in bass, treble, and alto clefs. A</li><li>Sing major scale patterns using scale degree numbers. D</li><li>Count compound rhythmic patterns out loud. B</li><li>Write compound rhythmic patterns from dictation. B</li><li>Write melodic patterns containing accidentals from dictation. A,C</li><li>Write melodica patterns containing accidentals including the compound rhythms. C,D,F</li><li>Sing a melody that contains accidentals in simple and compound rhythms. C,E</li><li>Write a melodic/rhythmic line from dictation. A,B,C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 2155,
    "Title": "Music Theory IV",
    "Learning_Outcomes": "<ol><li>Analyze and write 9th, 11th and 13th chords. A, B, C</li><li>Analyze and write altered dominant chords. A, B, C</li><li>Analyze and write enharmonic modulations. A, B, C</li><li>Recognize rhythmic/metric techniques used in twentieth-century music. A, B, C</li><li>Analyze a late romantic composition with regard to expanded tonality. A, B, C</li><li>Recognize the use of modes and synthetic scales in twentieth-century music. A, B, C</li><li>Prepare a matrix for a twelve-tone composition. A, B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 2156,
    "Title": "Ear Training IV",
    "Learning_Outcomes": "<ol><li>Read notes of specific pitch in bass, treble, and alto clefs. A</li><li>Write notes of specific pitch in bass, treble, and alto clefs. A</li><li>Sing minor and modal scale patterns using scale degree numbers. D</li><li>Count compound rhythmic patterns out loud. B</li><li>Write compound rhythmic patterns from dictation. B</li><li>Write melodic patterns containing skips from dictation. A,C</li><li>Write melodic patterns that modulate including the rhythm. C,D,F</li><li>Sing intervals of specified size and type. C,E</li><li>Sing major, minor, and modal scale patterns using scale degree numbers. E</li><li>Sing a melody that modulates. C,E</li><li>Write a melodic/rhythmic line from dictation. A,B,C</li><li>Write from dictation in four-voice chorale style a harmonic model that modulates. A,B,C,D,F</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 2500,
    "Title": "Conducting",
    "Learning_Outcomes": "<ol><li>Demonstrate and awareness of the contribution of music to the development of civilization. A</li><li>Articulate and support personal opinion with specific reference to the primary works. B</li><li>Demonstrate knowledge of the basic values which support the tradition of the culture(s) presented. A</li><li>Analyze the effects of the historical context on specific aspects of human culture. A,C</li><li>Study in depth one aspect of a music problem and write an analytical paper. A,B</li><li>Write insightful, appropriately developed answers to essay test questions concerning the works studied. B,C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 2600,
    "Title": "Special Topics in Music",
    "Learning_Outcomes": "<ol><li>Demonstrate a fundamental understanding of how technical problems maybe approached in terms of the creative process and improvisation. A,B, C, D</li><li>Write an analytical paper and/or complete applicable projects based on in-depth study of one aspect of a music problem. A, B, C, D</li><li>Apply knowledge of terms and concepts to an artistic experience. A, B, D</li><li>Define basic terminology related to music and explain specific concepts in those terms A,B</li><li>Demonstrate of basic understanding of material through projects and/or written exams. A, B, C, D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "MUS ",
    "Code": 2800,
    "Title": "Introduction to Music Technology",
    "Learning_Outcomes": "<ol><li>Demonstrate a fundamental understanding of how technical problems maybe approached in terms of the creative process and improvisation. A,B, C, D</li><li>Produce the required knowledge to produce professional quality musical scores. A, B, C, E, F.</li><li>Create music through the use of desk-top computers. C, E, F.</li><li>Define basic terminology related to music and explain specific concepts in those terms A,B</li><li>Demonstrate of basic understanding of material through weekly assignments and a final project. A, B, C, D, E, F</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "PHIL  ",
    "Code": 1030,
    "Title": "Introduction to Philosophy ♦ ★",
    "Learning_Outcomes": "<ol><li>Sketch the development of epistemology from Plato through Kant. A, B, E</li><li>Discuss the major challenges in relating experience and reality. B, E</li><li>Evaluate practical, metaphysical, and ontological arguments for and against existence of God. B, C, E</li><li>Evaluate perspectives on the nature of man and free will. B, C, E</li><li>Compare and contrast the foundations of government and justifications for political action as seen by the Greeks, Hobbes, Locke, and J. S. Mill. B, C, E</li><li>Write papers that apply critical thinking skills</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "PHIL  ",
    "Code": 1040,
    "Title": "Introduction to Ethics ♦ ★",
    "Learning_Outcomes": "<ol><li>Sketch the central features of the most widely studied moral theories. A</li><li>Compare/contrast commonly used normative predicates. B, C</li><li>Define basic logical terms. C</li><li>Explain the role of argumentation in philosophy/moral philosophy. A, B, C, D, E</li><li>Evaluate the most widely studied moral theories. A, C, E</li><li>Describe the facts related to contemporary moral issues such as violence, terrorism, war, euthanasia, abortion, commercial surrogacy, affirmative action, economic justice, legal punishment, climate change, and world famine. B, C, E</li><li>Analyze the moral issues relevant to contemporary problems such as violence, terrorism, war, euthanasia, abortion, commercial surrogacy, affirmative action, economic justice, legal punishment, climate change, and world famine. A, B, C, D, E</li><li>Evaluate the morality of contemporary problems such as violence, terrorism, war, euthanasia, abortion, commercial surrogacy, affirmative action, economic justice, legal punishment, climate change, and world famine, from utilitarian, deontological, and other relevant perspectives. A, B, C, D, E</li><li>Write papers applying the principles of moral analysis both to problems directly discussed in class and to those not directly discussed in class. A, B, C, D, E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "PHIL  ",
    "Code": 1500,
    "Title": "Philosophy &amp; Film ♦",
    "Learning_Outcomes": "<ol><li>Give the etymology of the word “philosophy” and list the four major “branches” of the discipline along with their focus. A</li><li>Explain the distinction between knowledge and truth and the relationship between them. A</li><li>Sketch and evaluate the reasoning that leads to skepticism. A, B, C, D, E</li><li>Sketch and evaluate the main arguments for and against relativism. A, B, C, D, E</li><li>Discuss the challenges faced by the notion of personal identity owing to changes in the self. A, B, C, D, E</li><li>Discuss the notion of intelligence and the relationship of intelligence to the nature of the entity that possesses it. A, B, C, D, E</li><li>Compare and contrast the descriptive and the normative. A, B, C, D, E</li><li>Evaluate grounds for normative claims. A, B, C, D, E</li><li>Explain how determinism challenges the existence of free will and of moral responsibility. A, B, C, D, E</li><li>Sketch the challenge that evil raises to the idea of a good God. A, B, C, D, E</li><li>Evaluate the theodicy responding to the problem of evil. A, B, C, D, E</li><li>Outline the basic claims of existentialism and the challenges existentialism raises against the received notions about human nature and the meaning of life. A, B, C, D, E</li><li>Discuss what meaning life may have and what the source of that meaning may be. A, B, C, D, E</li><li>Sketch the historical dialogue that has addressed the core problems of philosophy as exhibited in Outcomes 1-13, above. A, B, E</li><li>Demonstrate ability to think critically about philosophical arguments by writing insightful, appropriately developed essays. C, D, E</li><li>Point to and evaluate both explicit and implicit arguments. A, B, C, D, E</li><li>Articulate and support personal views with reference to primary works. B, C, D, E</li><li>Relate arguments implicit in contemporary film to primary philosophical works. A, B, D, E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "PHIL  ",
    "Code": 2420,
    "Title": "Ethical Theory &amp; Its Business Applications ★",
    "Learning_Outcomes": "<ol><li>Sketch the central features of the most widely studied moral theories. A, E, F</li><li>Explain the role of argumentation in philosophy/moral philosophy. A, B, D, E, F</li><li>Evaluate the most widely studied moral theories. A, D, E, F</li><li>Discuss the nature and meaning of work in terms of human nature and human needs. A, B, C, D, E, F</li><li>Explain the two major theories of corporate responsibility. A, B, C, D, E, F</li><li>Discuss specific employee rights, including the right to work, and the moral foundation underlying them. A, B, C, D, E, F</li><li>Discuss employee obligations and the moral foundation underlying them. A, B, C, D, E, F</li><li>Discuss the possible approaches to handling responsibility for unsafe or defective products. A, B, C, D, E, F</li><li>Discuss moral arguments for and against the strict products liability doctrine. A, B, C, D, E, F.</li><li>Discuss moral issues/problems related to advertising and target marketing. A, B, C, D, E, F</li><li>Give/evaluate arguments for and against preferential treatment. A, B, C, D, E, F</li><li>Discuss the moral standing of environmental entities. A, B, C, D, E, F</li><li>Discuss the moral issues raised by international business and globalization. A, B, C, D, E, F</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "PHIL  ",
    "Code": 2450,
    "Title": "Medical Ethics ★",
    "Learning_Outcomes": "<ol><li>Sketch the central features of the most widely studied moral theories. A, B, C</li><li>Compare/contrast commonly used normative predicates. A, B</li><li>Define basic logical terms. A</li><li>Explain the role of argumentation in philosophy/moral philosophy. A, B, C, D, E</li><li>Evaluate the most widely studied moral theories. A, B</li><li>Understand/apply the moral principles of autonomy, nonmaleficence, beneficence, and justice. B,E,F,G</li><li>Understand/discuss euthanasia as a moral issue. A,F,G</li><li>Understand/discuss the Karen Quinlan and Nancy Cruzan cases. B,C,D,G</li><li>Understand/discuss advance directives (like durable powers of attorney, living wills, etc). B,D,E,G</li><li>Understand/discuss suicide as a moral issue. F,G</li><li>Understand/discuss the Elizabeth Bouvia and Larry McAfee cases. B,C,D,G</li><li>Understand/discuss Dr. Jack Kevorkian. B,C,F,G</li><li>Discuss legalized euthanasia in the Netherlands. B,D,G</li><li>Understand/discuss the Edelin case. B,C,D,E,G</li><li>Define/discuss abortion as a moral issue. F,G</li><li>Understand/discuss Roe v. Wade. B,C,D,G</li><li>Understand/discuss Casey v. Planned Parenthood. B,C,D,G</li><li>Understand/discuss fetal development. B,D,F,G</li><li>Understand/discuss in vitro fertilization. B,F,G</li><li>Understand/discuss the ethical dimensions of fertility treatments. B,F,G</li><li>Understand/discuss the moral issues raised by embryonic stem cell research. B,C,E,G</li><li>Understand/discuss differences between reproductive and therapeutic cloning. B,F,G</li><li>Understand/discuss the moral issues raised by reproductive cloning. B,C,D,E,F,G</li><li>Understand/discuss the Baby Doe rules. B,C,D,G</li><li>Understand/discuss the moral issues related to treatment of impaired newborns. B,C,E,G</li><li>Understand/discuss the differences between therapeutic and experimental treatment. B,C,E,G</li><li>Understand/discuss the Philadelphia head injury study on primates.</li><li>Understand/discuss the question of moral standing for animals. A,B,C,E,F,G</li><li>Understand/discuss the Tuskegee Syphilis Study. B,C,D,E,G</li><li>Understand/discuss institutional review boards. B,F,G</li><li>Understand/discuss the Nuremberg Code. C,D,F,G</li><li>Understand/discuss organ transplantation. B,F,G</li><li>Understand/discuss donation and allocation of artificial and transplantable organs. B,F,G</li><li>Discuss the God committee and its criteria. A,B,C,D,E,F,G</li><li>Understand/discuss involuntary commitment and the moral issues raised by the Joyce Brown case. B,C.D.E</li><li>Understand/discuss moral issues raised by genetic disease and the ability to test for it. B,C,D,E,G</li><li>Understand/discuss the influences of economic factors in medical decision making and the moral issues raised by them. A,B,C,D,E,F</li><li>Understand/discuss the Oregon Plan. A-G</li><li>Define/discuss the economic and moral issued raised by the global spread of HIV-AIDS. B,C,D,F,G</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "PHIL   ",
    "Code": 2200,
    "Title": "Introduction to World Religions ♦ ★",
    "Learning_Outcomes": "<ol><li>Identify the basic beliefs of the religions studied. A</li><li>Identify the contrasts between the religions studied. B</li><li>Identify the historical context of the religions studied. A, B</li><li>Name the basic texts of the religions studied. A, B, C</li><li>Identify the basic rituals and stories of religion. A, B, C</li><li>Compare various ideas about what religion is. A, B, D, F</li><li>Identify basic divisions within and genealogies of religions studied. A, C, D</li><li>Identify some possible relations between religion and morality. E, F</li><li>Identify possible relations between religion and science. E, F</li><li>Identify some views on the relation between faith and reason. D, E</li><li>Identify some different views on what ‘salvation’ is. D, E, F</li><li>Identify some views on the place of faith in religion. D, E, F</li><li>Identify different views on why ‘salvation’ is needed. D, E, F</li><li>Identify different views on the origin and purpose of religion. A, E, F<br></li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "PHIL    ",
    "Code": 1300,
    "Title": "Critical Thinking ♦ ★",
    "Learning_Outcomes": "<ol><li>Explain the unique relationship between logic/critical thinking and various other disciplines and articulate the importance of thinking critically. A, B, C</li><li>Recognize deductive arguments and their parts and evaluate them for omissions, validity and soundness. B, C</li><li>Recognize and evaluate inductive arguments as to type (analogy, generalization, abduction, abstraction) and cogency. B, C</li><li>Recognize common informal fallacies and rhetorical devices that appear in arguments. A, B</li><li>Evaluate definitions for clarity and precision. B, D, E, F</li><li>Explain the relationships and distinctions among truth, knowledge, and opinion. A, B, C</li><li>Evaluate specific historically important movements in terms of justifications and critical-thinking errors. A, B, C, D</li><li>Construct/write better arguments. B, D, E, F</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "POLS ",
    "Code": 1010,
    "Title": "Introduction to Political Science ♦ ★",
    "Learning_Outcomes": "<ol><li>Understand basic societal rules and political theories. A&nbsp;</li><li>Understand the purpose and function of political structures and processes.</li><li>Recognize differences between the U.S. political system and other systems A, B</li><li>Identify the mechanisms individuals use to influence government in various political systems A, B</li><li>Understand how the electoral system and balance of power operate in various political systems. A, B C</li><li>Identify causes of political conflicts and methods for resolving them B. C.</li><li>Complete written/oral projects demonstrating the ability to apply course content, using appropriate resources to access information. B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "POLS ",
    "Code": 1030,
    "Title": "American Government ♦ ★",
    "Learning_Outcomes": "<ol><li>Identify important themes and eras in U.S. politics from the colonial era to the present. A, B</li><li>Identify important topics in U.S. Constitutional study. A, B</li><li>Understand the federal structure and the balance of power between the President, Congress and the courts. A, B</li><li>Identify the mechanisms individuals use to influence government. A, B.</li><li>Complete written/oral projects demonstrating the ability to apply course content, using appropriate resources to access information. C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "SOCI ",
    "Code": 1010,
    "Title": "Introduction to Sociology ♦ ★",
    "Learning_Outcomes": "<ol><li>Explain the concept of the sociological imagination . A</li><li>Explain the basic sociological perspectives. B</li><li>Understand the basic terms and concepts used in analyzing cultures. D.</li><li>Explain socialization. D</li><li>Understand the central concepts of social stratification and social institutions. E</li><li>Research and complete a project on a specific sociological issue. C.</li><li>Present research project to the class in a report. C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "SOCI ",
    "Code": 1040,
    "Title": "Social Problems ♦ ★",
    "Learning_Outcomes": "<ol><li>Discuss the sociological approach to all social institutions, structures, processes, and analyze the relationship among these institutions. A</li><li>Examine the meaning and implications of different economic, political, and cultural systems and explain how they impact individuals and society at large. D</li><li>Appraise how culture, personality, and cynicism can affect social change. D</li><li>Be able to describe different aspects of socialization (family, school, mass media, etc) in terms of their effects on an individual’s socialization experiences. A</li><li>Report on contemporary sociological research and their impact on society. C</li><li>Describe theoretical perspectives and be capable of applying each perspective to current social issues. B</li><li>Analyze contemporary sociological research and their impact on society. C</li><li>Explain the steps in the scientific method used by social scientists. C, E</li><li>Discuss how sociologists view the world and its people, and determine why the scientific method plays an important role in obtaining valid information about the social world. C, E.</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "SOCI ",
    "Code": 2010,
    "Title": "Marriage &amp; Family ★",
    "Learning_Outcomes": "<ol><li>Research a specific aspect of the family, and then write a paper and present information to the class. D</li><li>Analyze personal thoughts and feelings about specific topics of the family in journal form. A,B</li><li>Working within a group, develop a research tool for researching a specific aspect of marriage, perform research, document findings, and present the information to class. A,B,D</li><li>Participate in role playing activities. D,E</li><li>Internalize work ethic by demonstrating regular attendance, punctuality, dependability, cooperation with teacher and peers, and professionalism. E</li><li>Develop an awareness of how powerful culture is in shaping, attitudes, beliefs, and ideas about marriage and family. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "SPAN ",
    "Code": 1010,
    "Title": "Beginning Spanish I ★",
    "Learning_Outcomes": "<ol><li>React and respond to basic oral conversations in Spanish A,B</li><li>Pronounce Spanish text correctly B, C</li><li>Use basic oral Spanish in a conversation with native speakers to acquire goods and services B</li><li>Use correct declarative or interrogative intonation in Spanish B</li><li>Use Spanish vocabulary to describe your family and likes and dislikes B, E</li><li>Read and understand simple articles in Spanish</li><li>Write elementary compositions in Spanish D</li><li>Have a basic sensitivity and understanding of family life, pastimes and university life in other cultures</li><li>Describe Hispanic holidays, food, family life, and patterns of daily living. B, D, E.</li><li>Discuss contributions of Hispanics in art, literature and patterns of daily living. E</li><li>Exhibit respect for the cultural and linguistic differences of various people. E</li><li>Be fully informed regarding the Study Abroad opportunities available through the Tennessee Consortium for International Studies.</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "SPAN ",
    "Code": 1020,
    "Title": "Beginning Spanish II ★",
    "Learning_Outcomes": "<ol><li>Engage in more advanced oral conversations in Spanish at an appropriate level of formality. (A, B)</li><li>Pronounce correctly Spanish text. (B, C)</li><li>Use and understand basic oral Spanish in conversations about the body and health, food and dining, clothing and shopping, holidays and celebrations, and travel. (B)</li><li>Differentiate between ser and estar. (B, D)</li><li>Use Spanish vocabulary and standard grammar to engage in common communicative tasks, such as relating events in the past using preterite, describing using the imperfect aspect, asking and answering a greater variety of questions, and avoiding repetition by using pronouns. (B, E)</li><li>Read and understand simple informative and literary passages in Spanish. (C, E)</li><li>Write elementary compositions in Spanish on a variety of familiar topics. (D)</li><li>Identify and describe Hispanic landmarks, foods, and holidays. (B, D, E)</li><li>Discuss contributions of Hispanics in history, art, politics, music, and literature. (E)</li><li>Identify and discuss specific contributions of Hispanic individuals and communities as they relate to global diversity, particularly in the areas of history, art, politics, music, and literature. (E)</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "SPAN ",
    "Code": 2010,
    "Title": "Intermediate Spanish I ★",
    "Learning_Outcomes": "<ol><li>React and respond appropriately to basic oral conversation in Spanish. A, B</li><li>Pronounce correctly Spanish text. B, C</li><li>Use basic oral Spanish in a conversation with native speakers to acquire goods and services B</li><li>Use correct declarative or interrogative intonation in Spanish B</li><li>Use Spanish vocabulary to describe your family and likes and dislikes B, E</li><li>Read and understand simple articles in Spanish</li><li>Write elementary compositions in Spanish D</li><li>Have a basic sensitivity and understanding of family life, pastimes and university life in other cultures</li><li>Describe Hispanic holidays, food, family life, and patterns of daily living. B, D, E.</li><li>Discuss contributions of Hispanics in art, literature and patterns of daily living. E</li><li>Exhibit respect for the cultural and linguistic differences of various people. E</li><li>Be fully informed regarding the Study Abroad opportunities available through the Tennessee Consortium for International Studies.</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "SPAN ",
    "Code": 2020,
    "Title": "Intermediate Spanish II ★",
    "Learning_Outcomes": "<ol><li>Students will listen to questions and form logical and correct responses for those questions. Students will listen to responses by other students and comment on the appropriateness of those responses for the situation.</li><li>Students will develop time management skills by completing assigned tasks within a designated amount of time.</li><li>Students will develop and implement personalized methods for learning new vocabulary, grammatical constructions and communication strategies that will enable them to learn and retain material presented in class.</li><li>Students will work together in paired activities as well as in small group activities to determine the most appropriate ways to complete communicative exercises.</li><li>Students will complete written homework using a computer, taking care to use all punctuation and special characters unique to the language.</li><li>Students will use computer tutorials that accompany the text.</li><li>Students will use Web based supplements that accompany the text.</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "SPAN ",
    "Code": 2510,
    "Title": "Spanish Conversation",
    "Learning_Outcomes": "<ol><li>React and respond appropriately to increasingly difficult dialogues. A ,B</li><li>Pronounce correctly Spanish text. B, C</li><li>Use Spanish in conversations on a variety of topics. A, B</li><li>Use a variety of verb tenses. B</li><li>Read and translate articles in Spanish magazines and newspapers. C</li><li>Demonstrate understanding of the difference in structure between English and Spanish. D</li><li>Write basic compositions. D</li><li>Write a simple letter in Spanish. D</li><li>Fill out forms; write messages and notes well enough to meet practical, social demands. D</li><li>Discuss some of the contributions of Hispanics in art, literature, and music. E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "SPAN  ",
    "Code": 1000,
    "Title": "Technical Spanish",
    "Learning_Outcomes": "<ol><li>React and respond appropriately to basic oral conversation in Spanish. A, B</li><li>Pronounce correctly Spanish text. B, C</li><li>Use basic oral Spanish in a conversation with native speakers by answering correctly basic questions. A, B</li><li>Use correct declarative and interrogative intonation in Spanish. B</li><li>Use Spanish vocabulary to obtain essential goods and services. B</li><li>Read and translate simple pertinent articles from Spanish to English. C</li><li>Write elementary compositions using simple sentences and basic questions in the present tense in Spanish. D</li><li>Fill out basic forms in Spanish, depending on course focus. D</li><li>Demonstrate understanding of the difference in structure between English and Spanish. D</li><li>Exhibit respect for the cultural and linguistic differences of various people. E</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "SWRK ",
    "Code": 2010,
    "Title": "Introduction to Social Work ★",
    "Learning_Outcomes": "<ol><li>Use teamwork to accomplish in class group activities utilizing knowledge of course concepts. A,F</li><li>Complete a project (oral presentation, media report, application paper, or vision volunteer), demonstrating their ability to apply course content. F</li><li>Use the World Wide Web and Pellissippi State library resources to access information for media reports, application papers, and oral presentations. F</li><li>Practice elements of the work ethic such as professionalism, preparedness, punctuality, honesty, cooperation, dependability, contribution, effectiveness, and good manners. D</li><li>Identify various fields of practice within the social work profession. F</li><li>Identify some of the major problems addressed in rural and urban areas and the special populations assisted by baccalaureate social workers. B, D. E</li><li>Articulate the reasons for further pursuance of a B.S.S.W or for switching into another area of interest. A</li><li>Discuss the rewards and challenges of the social work profession. C, F</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "SWRK ",
    "Code": 2030,
    "Title": "Introduction to Social Welfare &amp; Policy ★",
    "Learning_Outcomes": "<ol><li>Use teamwork to accomplish in class group activities utilizing knowledge of course concepts. D</li><li>Complete a project (oral presentation, media report, or application paper), demonstrating their ability to apply course content. F</li><li>Use the World Wide Web and Pellissippi State library resources to access information for media reports, application papers, and oral presentations D</li><li>Practice elements of the work ethic such as professionalism, preparedness, punctuality, honesty, cooperation, dependability, contribution, effectiveness, and good manners. E</li><li>Discuss current policies, attitudes, and programs in terms of past and current economic, political, religious, and social developments in social welfare. B, C</li><li>Discuss the emergence, growth and importance of the social welfare institution and the relationship with the social work profession. A</li><li>Identify and utilize a framework to critically analyze social welfare programs. F</li><li>Articulate what one needs to know and be able to do for effective professional practice within the social welfare institution. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "THEA ",
    "Code": 1015,
    "Title": "Acting I ★",
    "Learning_Outcomes": "<ol><li><div>Attain the state of relaxation and readiness necessary for performance. A</div></li><li><div>Replicate specific human behaviors in performance. B,C,D</div></li><li><div>Perform, from memory, a scene in front of a live audience. C,D,E</div></li><li><div>Interpret a script. C,D,E</div></li><li><div>Evaluate a performance. B,C</div></li><li><div>Give critical feedback on a performance. B,C</div></li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "THEA ",
    "Code": 2015,
    "Title": "Acting II ★",
    "Learning_Outcomes": "<ol><li><div>Choose and perform two contrasting monologues. A</div></li><li><div>Watch live or recorded plays and films and write reports specifically critiquing the acting performances. B,E</div></li><li><div>Read works (chosen from a selection) on the craft of acting and write a position papers on same. B,E</div></li><li><div>Keep a written daily journal on work done in class. C,B,E</div></li><li><div>Perform comic scene work in class and be critiqued on same. D,E</div></li><li><div>Critique fellow class members’ scene work. B</div></li><li><div>Perform in a one act play. E</div></li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "THEA ",
    "Code": 2025,
    "Title": "Stage Craft II",
    "Learning_Outcomes": "<ol><li><div>Replicate a chosen image on a larger scale painting (4’ X 8’).</div></li><li><div>Produce and understand working drawings for a puppet design. Build Puppet scene and have it filmed.</div></li><li><div>Participate in critique sessions with the professor and fellow students to have an understanding of taking criticism and giving it effectively.</div></li><li><div>Work alongside other students and discuss with the professor who may have a different point of view and having the ability to see a problem and come at it from different point of views.</div></li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "THEA ",
    "Code": 2275,
    "Title": "Stage Combat",
    "Learning_Outcomes": "<ol><li>Apply exercises learned in class to prepare for performances. A, B, C</li><li> Utilize techniques of basic stage combat to enhance physical performance. A, B, C</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "THEA  ",
    "Code": 1025,
    "Title": "Stage Craft I ★",
    "Learning_Outcomes": "<ol><li>Replicate a chosen image on a larger scale painting.</li><li>Produce and understand working drawings from a design perspective as well as a carpenter’s perspective.</li><li>Evaluate technical theatre problems and solve problems they encounter.</li><li>Effectively work with power tools, describe their understanding space pertaining to the stage, and demonstrate their analysis of a text for the means of technical theatre.</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "THEA  ",
    "Code": 1030,
    "Title": "Introduction to Theatre ♦ ★",
    "Learning_Outcomes": "<ol><li>Understand the basic tenants of each major period in theatre such as the innovations, styles of design, major contributors, acting styles, etc. A,B,D</li><li>Describe in-depth the qualities of the different genres of theatre including the classical tragedy, comedy, melodrama, musical comedy, etc. B,D,E</li><li>Understand and appreciate how a play is produced from the first design staff meeting to opening curtain.) D,E</li><li>Identify and discuss the aesthetic merits of the different types of stage configurations (proscenium, black box, thrust, etc.) D,E</li><li>Effectively and knowledgeably critique a production using Aristotle=s six components of tragedy. C,D,E,F</li><li>Understand the lifestyle of a professional performer and whether that lifestyle is compatible with their own. G</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "THEA  ",
    "Code": 2222,
    "Title": "Special Topics in Theatre",
    "Learning_Outcomes": "<ol><li>Demonstrate a facility in the skill sets studied. (A,B,C)*</li><li>Be able to incorporate skill sets in performance. (A,B,C)*</li><li>Demonstrate knowledge of the basic terminology and common language of the skill sets. (A,B)*</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "THEA  ",
    "Code": 2260,
    "Title": "Movement for the Stage",
    "Learning_Outcomes": "<ol><li>Prepare themselves for performance using exercises learned in class. B, D,E</li><li>Utilize techniques that will enhance physical performance. B, D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "THEA  ",
    "Code": 2280,
    "Title": "Voice &amp; Speech for the Stage",
    "Learning_Outcomes": "<ol><li>Read and Write (at a beginning level) in International Phonetic Alphabet. C</li><li>Understand and be on the path to correcting minor speech problems. A,B,C</li><li>Hear their own vocal regionalisms and alter them for performance. B,C, D</li><li>Prepare themselves for vocal performance using exercises learned in class. B, D,E</li><li>Utilize speech techniques which will enhance vocal performance. B, D</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "THEA  ",
    "Code": 2720,
    "Title": "Introduction to Design",
    "Learning_Outcomes": "<ol><li>Build a scale model of a theatre. B, C, D, E</li><li>Create a design concept from four perspectives: Set design, Lighting Design, Sound Design, and Costume Design. B, C, D, E, G</li><li>Produce working drawings from a design perspective as well as a carpenter’s perspective. B, C, D, E</li><li>Evaluate technical theatre problems and solve problems they encounter. B, C, D, E, F, G</li><li>Work with Vectorworks and shop tools needed for projects. B, C, D, E</li><li>Use their understanding of space pertaining to the stage, B,C,D,E, G</li><li>Analyze a text for the requirements of technical theatre. A</li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "THEA   ",
    "Code": 2011,
    "Title": "Theatre Practicum",
    "Learning_Outcomes": "<ol><li>Collaborate and effectively communicate when scheduling rehearsals, technical work and performances. A, D  </li><li>Identify the theme of a production and make a significant contribution to either the acting/directing, technical or business areas of a production. A, B, C, D  </li><li>Identify and meet deadlines of a live performance. A, D  </li><li>Demonstrate knowledge and experience in their theatrical discipline in a confident and professional way. A, B, C,  </li><li>Identify the duties, responsibilities, and rewards of the various positions necessary to produce a play including, producer, director, stage manager, business manager, publicist, technical director, crew member, designer and actor. A, C  </li><li>Participate in a technical area of theatre. A, B, C, D  </li><li>Discuss the art of creating a role. B, C  </li><li>Apply a basic knowledge of theatrical terms both behind the scenes and on stage. B  </li><li>Practice the rules, regulations and courtesies of the theatrical world. A, B, D  </li><li>Read and interpret the various work orders and call sheets for theatre. B  </li><li>Meet the requirements of a theatrical production. A, B, C, D  </li></ol>"
  },
  {
    "Department": "Liberal Arts",
    "Rubric": "WGST ",
    "Code": 2050,
    "Title": "Introduction to Women/Gender Studies ♦ ★",
    "Learning_Outcomes": "<ol><li>Define the barriers women face. A</li><li>Support women's goals and strategies for social change. B</li><li>Appraise the rewards and challenges of social action. C</li><li>Discuss how women are challenging gender stereotypes. A, B, C</li><li>Analyze how women are organizing to reduce harassment, poverty, violence, and homelessness. A,B,C</li><li>Argue how women are working to enhance health care and family life. A, B, C</li><li>Argue how women are confronting barriers in education. A, B C</li><li>Argue how women are confronting barriers in religion. A B, C</li><li>Argue how women are confronting barriers in the criminal justice system. A, B, C</li><li>Argue how women are confronting barriers in politics. A,B, C</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 10,
    "Title": "Survey of Mathematics Principles W/Lab",
    "Learning_Outcomes": "<ol><li>Perform operations with rational numbers and apply the order of operations to evaluate expressions. A, E, F</li><li>Identify irrational numbers and perform calculations with irrational numbers. A, D, E, F</li><li>Write and compare numbers in standard and scientific notation. C, D, E</li><li>Solve problems involving percents. A, B, D, G</li><li>Solve basic geometrical problems. A, B, E, F</li><li>Evaluate algebraic expressions and create tables of values from expressions. A, B, D, E, F</li><li>Evaluate expressions using powers and roots. A, D</li><li>Identify and interpret rate of change and analyze graphs of linear functions. A, B, D, E, F</li><li>Analyze, interpret, and graph linear functions in two variables. A, B, C, D, E, F, G</li><li>Solve linear equations in one variable. A, E</li><li>Solve formulas, literal equations, and proportions. A, B, C, E, G</li><li>Develop plans to solve problems and use mathematical knowledge and logical reasoning to find and justify solutions. B, C, E, F, G</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 30,
    "Title": "College Mathematics Principles W/Lab",
    "Learning_Outcomes": "<ol><li>Add, subtract, multiply and divide fractions, decimals and integers and state the answer in simplest form. A,B,C,D,E</li><li>Use algebraic properties to combine like terms and simplify algebraic expressions. B</li><li>Evaluate exponential and algebraic expressions by using the order of operations. A, B</li><li>Understand number relationships on a number line using inequality symbols and the meaning of absolute value. A, B</li><li>Solve linear equations using the addition and/or the multiplication properties. A, B</li><li>Solve linear equations containing fractions, decimals and identifying equations with no solution or infinitely many solutions. A, B</li><li>Solve literal equations, equations with percents, and equations in geometry. A, B, D</li><li>Solve linear inequalities and graph the solutions on a number line and representing solutions using interval and set-builder notation. A, B, C</li><li>Determine whether a value or ordered pair is a solution to a given equation. A, B, C</li><li>Plot ordered pairs in the rectangular coordinate system and graph linear equations using a table of values, using x and y-intercepts, and slope-intercept form. A, B, C, D</li><li>Determine slope using formula, graph and equation. A, B, C, D</li><li>Understand graphs of horizontal and vertical lines and the basic relationships between parallel and perpendicular lines. A, B, C, D</li><li>Find equation of a line using slope-intercept or point-slope form. A, B, C, D, E</li><li>Graph linear inequalities in two variables. A, B, C, D</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 1010,
    "Title": "Math for General Studies ♦ ★",
    "Learning_Outcomes": "<ol><li>Use set notation and Venn diagrams in application problems. B</li><li>Utilize inductive and deductive reasoning. A, C</li><li>Draw conclusions as a result of using the laws of logic. A, B</li><li>Translate verbal and written situations into problem-solving models. A, C, H</li><li>Solve problems using geometry. A, D</li><li>Solve measurement problems involving metric system units. A, G</li><li>Calculate simple and compound interest, annuities, and loans E</li><li>Solve basic probability problems. F</li><li>Graph a frequency distribution as a bar graph and a line graph. F, G</li><li>Use normal curves and z-score tables to solve applied problems. A, C, G, H</li><li>Solve application problems using linear modeling. A, C, G</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 1030,
    "Title": "Introduction to College Mathematics",
    "Learning_Outcomes": "<ol><li>Identify polynomials and classify them by degree. A, D</li><li>Add, subtract, multiply, and divide polynomials. A, B, D</li><li>Use various laws of exponents to simplify exponential expressions. A, B, D</li><li>Convert numbers between scientific and standard notation and compute with scientific notation. A, B, D</li><li>Factor trinomials in quadratic form using various methods. A, B</li><li>Factor polynomials completely using greatest common factor and factor by grouping. A, B</li><li>Solve quadratic equations and applications by a variety of factoring methods. A, B, C, D, E</li><li>Add, subtract, multiply, and divide rational expressions and state their answers in simplest form. A, B, D</li><li>Determine the domain of a rational function. A, B, D</li><li>Solve rational equations and applications. B, D, E</li><li>Determine whether a relation represents a function. A, B</li><li>Evaluate a function at a given value. A, B</li><li>Analyze a given function and describe its domain and range using appropriate notation. A, B</li><li>Simplify, add, subtract, multiply and divide radical expressions. A, B</li><li>Rewrite radical expressions with rational exponents and simplify. A, B</li><li>Rationalize the denominator of a radical expression. A, B</li><li>Solve equations and applications involving radicals. B, C, D, E</li><li>Solve quadratic equations using the square root property, completing the square and the quadratic formula. A, B, C, D, E</li><li>Graph quadratic functions using appropriate techniques by determining the vertex and x and y-intercepts of the function. C, D, E</li><li>Solve and interpret applications involving quadratic functions. C, D, E</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 1130,
    "Title": "College Algebra ♦ ★",
    "Learning_Outcomes": "<ol><li>Determine the slope of a line and explain its meaning numerically, graphically and analytically. A, C, F</li><li>Determine the equations of all lines, including parallel and perpendicular, numerically, graphically and analytically using the point-slope or slope-intercept forms. C, F</li><li>Determine if a relation is a function and work with functional notation. C, E</li><li>Evaluate the difference quotient for a polynomial function of degree one or higher. E</li><li>Sketch careful graphs of functions by hand and find suitable windows to create comprehensive graphs of functions on a graphing utility linear, absolute value, piecewise, quadratic, polynomial, radical, rational, exponential, and logarithmic. A, B, C</li><li>Find the real zeros of functions analytically and graphically. B, C, E</li><li>Analytically and graphically, analyze graphs and determine domain, range, intercepts, extrema, increasing/decreasing intervals, continuity, end behavior, and asymptotes. B, C</li><li>Interpret linear, piecewise, quadratic, polynomial, rational, exponential, and logarithmic models to solve applications. D</li><li>Use transformations to build new functions from basic functions; determine domain and range of new functions. B, C, E</li><li>Use statistical regression on a graphing utility to find linear, quadratic, cubic, exponential, and logarithmic models and use them to make meaningful predictions. A, B, D</li><li>Use the quadratic formula to find exact solutions to quadratic equations. F</li><li>Optimize quadratic functions. B, F</li><li>Make a reasonable sketch of a polynomial function based on an analysis of its degree, leading coefficient, zeros and end behavior. C</li><li>Write a polynomial function given its real zeros and their multiplicities and determine the real zeros and their multiplicities for a polynomial function. E, F</li><li>Find the equations of the horizontal and vertical asymptotes of rational functions. C</li><li>Solve linear, quadratic, polynomial, and rational inequalities analytically or graphically. B, C</li><li>Use the zeros of a function and its graph to solve related inequalities. B, C</li><li>Determine if a function is one-to-one and find formulas for inverses of one-to-one functions. E</li><li>Use the graph of a one-to-one function to draw the graph of its inverse function. B, C</li><li>Convert between exponential and logarithmic notation. E</li><li>Use the change of base formula to evaluate logarithms. B</li><li>Use the properties of logarithms to rewrite and simplify expressions. E, F</li><li>Solve equations analytically: linear, absolute value, quadratic, rational, radical, special polynomials, exponential, and logarithmic. G</li><li>Solve equations on a graphing utility using the intersection of graphs method. B</li><li>Solve exponential growth and decay applications analytically using statistical regression or algebraic methods. A, B, D</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 1410,
    "Title": "Number Concepts for Teachers",
    "Learning_Outcomes": "<ol><li>Utilize both inductive and deductive reasoning. A, D</li><li>Utilize and manipulate the real number system. B, C, D</li><li>Master and explain various problem-solving strategies. A, B, D</li><li>Explain and model algorithms with different base numerals. C</li><li>Demonstrate knowledge of commutative, associative and distributive laws. A, B, D</li><li>Define natural numbers, whole numbers, rational numbers, irrational numbers, and real numbers. A, B, C, D</li><li>Demonstrate knowledge of division algorithm and divisibility tests. B, C, D</li><li>Define prime numbers, composite numbers, greatest common divisor and least common multiple. B, C</li><li>Compute prime factorization of a number and use in applications. C</li><li>Apply modeling tools to demonstrate mathematical ideas and processes. A, B</li><li>Demonstrate a greater understanding and appreciation of mathematics and its applications to other disciplines. A</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 1420,
    "Title": "Geometry Concepts for Teachers ★",
    "Learning_Outcomes": "<ol><li>Describe points, curves, and planes. F</li><li>Measure line segments and angles. D, F</li><li>Understand definitions of all polygons and their classifications. E, F</li><li>Understand and use the Pythagorean Theorem. D, E, F</li><li>Understand what congruence and similarity mean. A, B, C, F, H</li><li>Discover and apply the definition and properties of parallel lines and transversals. A, B, C, F</li><li>Calculate the perimeter and area of parallelograms, triangles, trapezoids, regular polygons, and composite figures. A, B, C, D, E, H</li><li>Apply numerical relationships in similar figures, ratios and proportions, and triangles. A, B, C, D, E</li><li>Understand definitions of circles. A, B, C, E, F, H</li><li>Understand definitions of three-dimensional geometric figures. A, B, C, E, F, H</li><li>Calculate the surface area and volume of prisms, pyramids, cylinders, cones and composite figures. C, D, E, F</li><li>Understand the different types of transformations and symmetries. G, H</li><li>Communicate about different methods of solving problems. A, B, C, F, H</li><li>Consider data from other areas and subjects. A, C, D</li><li>Recognize connections between various geometrical ideas and areas such as science, art, and landscaping. A, C, D</li><li>Utilize manipulatives to model math algorithms and problem solving. H</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 1630,
    "Title": "Finite Mathematics ♦ ★",
    "Learning_Outcomes": "<ol><li>Graph systems of linear inequalities.&nbsp; A</li><li>Algebraically solve systems of equations.&nbsp; A</li><li>Solve linear programming problems graphically.&nbsp; A, B, C</li><li>Apply basic matrix operations and discover their relationships to systems of&nbsp;equations.&nbsp; E</li><li>Apply the Gauss-Jordan method to solve systems of linear equations.&nbsp; D</li><li>Solve and apply the Simplex Method to linear programming problems.&nbsp; A, B, D, E</li><li>Calculate simple and compound interest.&nbsp; A, E</li><li>Determine future amount and the present value of an annuity.&nbsp; A, E</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 1710,
    "Title": "Precalculus Algebra ♦ ★",
    "Learning_Outcomes": "<ol><li>Compute areas and volumes of simple geometric figures and solids. A</li><li>Solve elementary algebraic equations and literal formulas. A</li><li>Translate verbal situations into algebraic equations by using appropriate problem-solving techniques. E</li><li>Interpret, graph, and manipulate polynomial and rational functions. B, C, D</li><li>Solve equations algebraically, numerically and graphically. A, B, C, D</li><li>Model data mathematically. D</li><li>Solve fractional and quadratic equations and applications. A, E</li><li>Simplify rational exponential expressions and convert to radical equivalent. A</li><li>Convert from exponential to logarithmic form and vice versa. A</li><li>Solve exponential and logarithmic equations and work problems. A, E</li><li>Solve equations involving complex numbers. A</li><li>Solve radical equations. A</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 1730,
    "Title": "Precalculus ♦ ★",
    "Learning_Outcomes": "<ol><li>Compute areas and volumes of simple geometric figures and solids. A</li><li>Solve elementary algebraic equations and literal formulas. A</li><li>Translate verbal situations into algebraic or trigonometric equations by using appropriate problem-solving techniques. E</li><li>Interpret, graph, and manipulate polynomial and rational functions. B, C, D</li><li>Solve equations algebraically, numerically and graphically. A, B, C, D</li><li>Define and use the six trigonometric rations. A</li><li>Apply the trigonometric ratios to the right triangle problems from geometry and technology. A, D, E</li><li>Model data mathematically. D</li><li>Solve fractional and quadratic equations and applications. A, E</li><li>Determine trigonometric and inverse trigonometric functional values for any angle measured in degrees and radians. A, B, C, D</li><li>Apply radian measure to geometry and technology. A, C, D</li><li>Add vectors geometrically and algebraically. A, D, E</li><li>Use law of sines and cosines to solve oblique triangles. A, D, E</li><li>Sketch sine and cosine graphs, noting the amplitude, period, and horizontal displacement. A, C</li><li>Simplify rational exponential expressions and convert to radical equivalent. A</li><li>Convert from exponential to logarithmic form and vice versa. A</li><li>Solve exponential and logarithmic equations and work problems. A, E</li><li>Convert between polar and rectangular forms of complex numbers. A</li><li>Solve equations involving complex numbers. A</li><li>Solve radical equations. A</li><li>Prove trigonometric identities by using the fundamental and double-angle identities. A</li><li>Solve conditional trigonometric equations using identities. A</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 1830,
    "Title": "Applied Calculus ♦ ★",
    "Learning_Outcomes": "<ol><li>Calculate the limit of an algebraic function.&nbsp; A</li><li>Recognize a continuous function.&nbsp; B</li><li>Calculate the derivative of an algebraic function by the delta process.&nbsp; A</li><li>Calculate the derivative of polynomials, products, quotients, powers, and implicit functions using delta-derived rules.&nbsp; A</li><li>Apply derivatives to solve application problems such as problems involving distance,&nbsp;velocity, and acceleration; and maximum-minimum problems.&nbsp; A, D, E</li><li>Sketch curves using information obtained from the derivatives of a function.&nbsp; A</li><li>Calculate the derivatives of exponential and logarithmic functions.&nbsp; A</li><li>Integrate polynomial, power, logarithmic, and exponential functions and use this&nbsp;knowledge to evaluate definite and indefinite integrals.&nbsp; C, D</li><li>Apply derivatives to solve business/economic and life/physical sciences application&nbsp;problems.&nbsp; A, D,E</li><li>Apply the integration process to solve application problems that occur in business/economic and&nbsp;life/physical sciences.&nbsp; C,D, E</li><li>Utilize appropriate technology and applicable case studies/projects that involve real-world&nbsp;data to enhance the conceptual understanding and usefulness of calculus and to provide training in an area that both business and industry are now demanding.&nbsp; D, E</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 1910,
    "Title": "Calculus I ♦ ★",
    "Learning_Outcomes": "<ol><li>Determine what a function is and work comfortably with functional notation. A</li><li>Evaluate limits and derivatives of algebraic and transcendental functions using analytic, numerical and graphing techniques. Evaluate the derivative of a function using the (limit) definition. B, C</li><li>Graph a function using the concepts of symmetry, domain, shifting and stretching, along with information gathered from limits, the function's derivative and the aid of a graphing calculator and/or computer software. A, E</li><li>Recognize a continuous function. Classify the different types of discontinuities using analytical and graphical means. B</li><li>Apply derivatives to solve problems such as distance - velocity - acceleration, related rate and optimization problems. E</li><li>Read and interpret graphs, limits and derivatives which are used in applied settings and communicate that analysis in writing. F</li><li>Work with technology and special projects involving real world data which enhances the conceptual understanding and usefulness of mathematics. D, F</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 1920,
    "Title": "Calculus II ★",
    "Learning_Outcomes": "<ol><li>Integrate exponential, trigonometric, inverse trigonometric, natural and general&nbsp;logarithmic functions.&nbsp; A</li><li>Integrate by parts and by substitution.&nbsp; B</li><li>Integrate trigonometric integrals using identities.&nbsp;&nbsp; A, B</li><li>Integrate rational functions by partial fraction decomposition.&nbsp; B</li><li>Use a table of integrals to evaluate an integral.&nbsp; B</li><li>Integrate indeterminate forms and improper integral.&nbsp; B, C</li><li>Test for convergence and divergence of infinite series.&nbsp;&nbsp; D</li><li>Give power series representation of a function.&nbsp;&nbsp; D</li><li>Model with differential equations.&nbsp;&nbsp; F</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 2000,
    "Title": "Matrix Computations ★",
    "Learning_Outcomes": "<ol><li>Explain what a matrix is and work comfortably with matrices and n-tuples. A</li><li>Use technology to perform matrix operations. A, F</li><li>Understand and work with geometric vectors and apply the concept of orthogonality. B</li><li>Use row operations on an augmented matrix to find sets of n-tuples that satisfy a linear system. C</li><li>Establish conditions under which solutions to linear systems exist. C</li><li>Work with square matrices, matrix inverses and determinants. A, D, F</li><li>Use a square matrix to find eigenvalues and eigenvectors. E</li><li>Use matrices to solve problems in various fields of engineering and the sciences. F</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 2010,
    "Title": "Introduction to Linear Algebra ★",
    "Learning_Outcomes": "<ol><li>Use Gaussian and Gauss-Jordan elimination to solve a linear system. A, B</li><li>Use LU factorization to solve linear systems A, B</li><li>Perform Matrix Operations. B</li><li>Determine if a matrix is invertible and if so, find its inverse. B</li><li>Solve applications using linear systems. A, B, H</li><li>Use row reduction and cofactor expansion to find the value of a determinant. B</li><li>Find angles between vectors and vector lengths in 2- and 3-space. C</li><li>Determine the orthogonal projection of a vector onto another vector or plane in 2- and 3-space. C</li><li>Find norms and distances between vectors in Euclidean <em>n</em>-space. B, D.</li><li>Determine if two vectors are orthogonal in <em>n</em>-space. B, D</li><li>Determine if a subset of a vector space is a subspace. D</li><li>Determine whether a set of vectors is linearly independent or dependent. C, D</li><li>Determine if a set of vectors in a vector space span the space. C, D</li><li>Find bases and determine the dimension of finite-dimensional vector spaces. C, D</li><li>Find bases for the row, column, and null space of a matrix. D</li><li>Determine rank and nullity for a matrix. D</li><li>For a matrix linear transformation, find its standard matrix, domain, and codomain. D, E</li><li>Find compositions and inverse linear transformations. D, E</li><li>Understand the geometry of matrix operations on <em>R</em>3 and <em>R</em>2. D, E</li><li>Compute eigenvalues and eigenvectors. B, D, G</li><li>Use similar matrices to diagonalize a matrix. B, D, G</li><li>Compute norms and distances in inner product spaces. C, D, F</li><li>Determine if two vectors are orthogonal in an inner product space. C, D, F</li><li>Use the best approximation method to find a least-squares fit to paired data. A, B, F, H</li><li>Find the kernel and range of a general linear transformation. E</li><li>Determine if a general linear transformation is one-to-one or onto. E</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 2050,
    "Title": "Calculus-based Probability &amp; Statistics ★",
    "Learning_Outcomes": "<ol><li>Construct frequency distributions and frequency histograms. A, D</li><li>Calculate measures of central tendency.&nbsp; A</li><li>Calculate measures of dispersion.&nbsp; A</li><li>Construct scatter diagrams.&nbsp; B</li><li>Calculate correlation coefficients and establish the relative strength of the linear relationships between two variables.&nbsp; B, D, F</li><li>Construct time series charts and interpret the results.&nbsp; G</li><li>Calculate probabilities using both the classical and the empirical approaches.&nbsp; C</li><li>Calculate probabilities based on both the standardized and non-standard normal distributions.&nbsp; D, H</li><li>Perform hypothesis tests, including, but not restricted to, means testing (both large and small samples), and tests of independence and goodness of fit.&nbsp; D, E, H</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 2110,
    "Title": "Calculus III ★",
    "Learning_Outcomes": "<ol><li>Solve real life problems such as: using tangential and normal components of acceleration to justify banking curved roads, analyze the forces placed on beams, poles, etc. used in engineering constructions, calculate flux through semi-permeable membranes. A,B.E</li><li>Investigate and justify the engineering concepts contained in statics and dynamics courses. A,B,C,D,E</li><li>Draw vectors, use vector operations, find the magnitude of a vector, and find a unit vector in two-space and three space. A,B,E</li><li>Determine whether two vectors are orthogonal; determine the angle between two vectors. A,B,E</li><li>Find the equations of lines and planes in three-space. A</li><li>Sketch and/or analyze the graph of (rectangular, cylindrical, or spherical) equations in three-space. A,B</li><li>Sketch and/or analyze the graph of vector-valued functions and find the length of curves. B</li><li>Differentiate and integrate vector-valued functions.</li><li>Calculate velocity, acceleration, and speed from a position vector. B,E</li><li>Calculate unit tangential and unit normal vectors and calculate curvature. B,E</li><li>Calculate tangential and normal components of acceleration. B,E</li><li>Find the limit of functions of several variables. C,D</li><li>Calculate the first and higher order partial derivatives. C,D</li><li>Apply the chain rule to find partial derivatives and use partials to differentiate implicit functions.C,D</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH ",
    "Code": 2120,
    "Title": "Differential Equations ★",
    "Learning_Outcomes": "<ol><li>Solve \"separable\", \"exact\", \"integrating factor\" and \"Bernoulli\" first order differential equations symbolically. A</li><li>Apply first order differential equations solution techniques to mathematical models (including: population, heating/cooling, compartmental analysis, Newtonian mechanics, terminal velocity, and logistic models). B</li><li>Define the numerical solutions (Euler's Method) to first order differential equations. C</li><li>Illustrate familiarity with graphical solutions to first order differential equations using direction fields. C</li><li>Determine the best method (graphically, numerically, or symbolically) of solving first order differential equations. C</li><li>Calculate general and particular solutions to second order linear homogeneous and nonhomogeneous equations with constant coefficients (using \"auxiliary equations\", \"undetermined coefficients\" and \"variation of parameters\" techniques). A</li><li>Apply second order differential equation solution techniques to mathematical models (including compartmental, mechanical vibration, spring and pendulum models) B</li><li>Analyze the behavior of the second order solutions for ordinary differential equations. A</li><li>Use Laplace transforms and translation theorems to find differential equation solutions. A</li><li>Find solutions to systems of differential equations using Laplace transforms. A</li><li>Determine series solutions (Taylor and power series) to differential equations. A</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH  ",
    "Code": 1050,
    "Title": "Trigonometric Applications ♦",
    "Learning_Outcomes": "<ol><li>Define and use the six trigonometric ratios. A</li><li>Apply the trigonometric ratios to right triangle problems. A, B, D, E</li><li>Determine the trigonometric and inverse trigonometric functional values for any angle measured in degrees and radians. A, B, C, D</li><li>Use angle properties and trigonometric functions to solve application problems. A, B, D, E</li><li>Add vectors geometrically and algebraically and solve vector application problems. A, D, E, F</li><li>Use the law of sines and the law of cosines to solve oblique triangles. A, D, E, F</li><li>Sketch and analyze sine and cosine graphs. A, C, D</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH  ",
    "Code": 1530,
    "Title": "Introductory Statistics ♦ ★",
    "Learning_Outcomes": "<ol><li>Construct a frequency distribution. A</li><li>Graph a frequency distribution as a histogram. A</li><li>Find the mean, median, and mode of raw data scores.&nbsp; B</li><li>Find the variance, standard deviation, and range of raw data scores.&nbsp; B</li><li>Find the mean and standard deviation of a frequency distribution. B</li><li>Determine the mean, variance, and standard deviation of a probability distribution.&nbsp; D</li><li>Find the probability, mean, variance, and standard deviation of the random variable in a binomial experiment. C</li><li>Solve basic probability problems.&nbsp; C</li><li>Apply the addition and multiplication rules.&nbsp; C</li><li>Define and use the rules of complementary events.&nbsp; C</li><li>Find and interpret the z-score for a value within a set of data.&nbsp; B</li><li>Utilize the z-score when finding probabilities of nonstandard normal distributions.&nbsp; D</li><li>Find the value of the random variable when given the corresponding area under the density curve.&nbsp; D</li><li>Utilize the central limit theorem to find the probabilities of sample means.&nbsp; D, E</li><li>Test hypotheses about population proportions, means, and standard deviations.&nbsp; D, E</li><li>Construct and utilize confidence intervals.&nbsp; D, E</li><li>Calculate appropriate sample sizes for tests of proportions and means.&nbsp; D, E</li><li>Determine linear correlation and the linear regression equation.&nbsp; E</li><li>Determine when it is reasonable to use a regression equation for prediction. E</li><li>Test hypotheses involving multinomial experiments and contingency tables.&nbsp; E</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH  ",
    "Code": 1720,
    "Title": "Precalculus Trigonometry ♦ ★",
    "Learning_Outcomes": "<ol><li>Define and use the six trigonometric ratios. A</li><li>Apply the trigonometric ratios to right triangle problems from geometry and technology. A, D, E</li><li>Determine the trigonometric and inverse trigonometric functional values for any angle measured in degrees and radians. A, B, C, D</li><li>Apply radian measure to geometry and technology. A, C, D</li><li>Add vectors geometrically and algebraically. A, D, E</li><li>Use the law of sines to solve oblique triangles. A, D, E</li><li>Sketch sine and cosine graphs, noting amplitude, period and horizontal displacement. A, C</li><li>Convert between polar and rectangular forms of complex numbers. A</li><li>Prove trigonometric identities by using the fundamental, double, angle, sum, and difference identities. A</li><li>Solve conditional trigonometric equations by using identities. A</li><li>Graph polar equations using symmetry and point plotting in the polar coordinate system. C</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH   ",
    "Code": 50,
    "Title": "Principles of Trigonometric Applications",
    "Learning_Outcomes": "<ol><li>Add, subtract, multiply, and divide fractions, decimals and integers and state the answer in simplest form. A</li><li>Solve application problems involving fractions. A, B, C, D</li><li>Solve algebraic problems and solve applications using algebraic expressions. A, B, C, D, E</li><li>Solve algebraic equations and create algebraic equations to help solve application problems. A, B, C, D, E</li><li>Solve basic problems and application problems involving circles and polygons. A, B, C, D</li><li>Solve basic problems and applications involving lines and angles. D, E</li><li>Solve application problems involving algebraic functions. A, B, C, D</li><li>Solve problems and application problems from graphs of algebraic functions. A, B, C, D, E</li><li>Create graphs based on information from algebraic expressions and functions. A, B, C, D, E</li></ol>"
  },
  {
    "Department": "Mathematics",
    "Rubric": "MATH   ",
    "Code": 530,
    "Title": "Statistics Principles W/Lab",
    "Learning_Outcomes": "<ol><li>Write equations to represent real world problems involving addition, subtraction, or multiplication. B,C,G</li><li>Enter and find input and output values for real world problems in a table of values. A,B,C,D,E,F,G</li><li>Write decimals as fractions or mixed numbers. D,E</li><li>Write fractions and mixed numbers as decimals using equivalent fractions or division. D,E</li><li>Write decimals as percentages, including percentages greater than 100 or less than 1. D,E</li><li>Locate and order real numbers on a number line using various scales. D,E,F</li><li>Add, subtract, multiply, and divide rational numbers. D,E</li><li>Use the order of operations to simplify numeric expressions. D,E</li><li>Find area and perimeter (or circumference) of rectangles, triangles, and circles. A,B,D,E</li><li>Represent real world scenarios with algebraic expressions using two operations. B,C,G</li><li>Write and simplify ratios. B,C,D,E</li><li>Write and solve proportions using equivalent fractions or means-extremes property. A,B,C,D,E,F,G</li><li>Use percent proportions to find the percent of a number, a percent given two numbers, or a total quantity in real world problems. A,B,C,D,E,F,G</li><li>Find powers and approximate square roots. D,E</li><li>Identify quantities and units in real world problems. B,C,G</li><li>Identify and find independent and dependent values numerically in real world problems. A,B,C,D,E,F,G</li><li>Write algebraic expressions to represent linear models in real world problems with positive or negative rates of change and starting points, or using ratios. B,C,F,G</li><li>Interpret coordinates of a point on linear models for real world problems. B,C,F,G</li><li>Solve one-step and two-step equations with similar terms, variables on both sides, and variables in the denominator. D,E,F</li><li>Solve formulas and literal equations for a specified variable. A,F</li><li>Represent simple and compound inequalities on a number line. B,E,F</li><li>Solve simple and compound inequalities in one variable. D,E,F</li><li>Apply various strategies – pictorial, numeric, algebraic, and graphical – to solve real world problems A,B,C,D,E,F,G</li><li>Write linear equations and inequalities to model real world problems. B,C,F,G</li><li>Create a table of values and use to graph a linear equation in two variables. D,E,F</li><li>Plot points on a graph using coordinates. F</li><li>Identify and find independent and dependent values numerically, algebraically, or graphically in real world problems. A,B,C,D,E,F,G</li><li>Graph linear equations in two variables using the slope and y-intercept, two points, or two intercepts. D,E,F</li><li>Identify x-intercepts, y-intercepts, coordinates of other points, and slopes of linear functions from graphs. C,F</li><li>Calculate the slope of a line given two points. E,F</li><li>Identify the starting point, rate of change, and coordinates of a point in real world problems. B,C,F,G</li><li>Interpret slope as a rate of change in real world problems. A,B,C,E,F,G</li><li>Write linear equations in two variables given two points, slope and one point, or one point and the equation of a parallel or perpendicular line. D,E,F</li><li>Transform linear equations to slope-intercept form. D,E,F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "AGRI ",
    "Code": 1020,
    "Title": "Introduction to Animal Science",
    "Learning_Outcomes": "<ol><li>Classify animals into commodity categories. A, B, C</li><li>Design breeding programs for various animal classifications. A, B</li><li>Synthesize a management plan for various farm programs, including nutrition, breeding, and sales. A, B, D, E</li><li>Differentiate between the various commodities derived from commercial livestock. A, B, E</li><li>Compare and contrast the different nutritional requirements of each of the primary groups of commercial livestock. A, B, C</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "AGRI ",
    "Code": 2200,
    "Title": "Animal Anatomy &amp; Physiology",
    "Learning_Outcomes": "<ol><li>Apply descriptive anatomic terms to the live or dead body of an animal through dissection, while describing the overall plan of the animal body and its cavities. A, C, F</li><li>Identify in a live animal the location of the regions of the spine, all bones and joints of the appendicular skeleton, and loose bones of the limbs. C, D, F</li><li>Describe the vertebral formulas for cattle, horses, swine, and poultry. A, B, C</li><li>Dissect and/or study and understand the suspensory ligament, the digital flexor, extensor tendons, and the foot and hoof of cattle and/or horses. D</li><li>Identify the locations of and describe major functions of the endocrine glands. D</li><li>Identify each gross feature of the mammalian heart, and describe the physiology of each cardiac feature, as well as the physiology of the heart itself and its controlling aspects. A, B, D</li><li>Identify the anatomic and physiologic characteristics of lymphatic vessels and the classes of blood vessels, and be able to trace blood circulation through the appropriate blood vessels in various parts of the body. G</li><li>Recognize the appearance, origin and importance of each component of blood and demonstrate knowledge of the cause(s) and effect(s) of failure of presented components as a unit and how each function may integrate with other body systems. G, E</li><li>Recognize, identify, and describe the anatomy and physiology of the paranasal sinuses, air passageways, diaphragm, and other structures associated with the respiratory system. D, E, F</li><li>Practice \"incisor aging\" and mature dental formulas of horses and cattle. F</li><li>Identify the anatomical and physiological characteristics of the kidney. G</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "AGRI   ",
    "Code": 1050,
    "Title": "Introduction to Soil Science ★",
    "Learning_Outcomes": "<ol><li>Classify soils into one of the profiles and Orders of Soil Classification. A, B, C</li><li>Determine soil density and porosity. A, B</li><li>Describe and identify soils by organic matter, sand, silt and clay composition. A, B, C</li><li>Differentiate the variables required for correct fertilizer applications. A, B, D</li><li>Categorize the basic values of commercial fertilizers listed in standard N, P, and K contents. C, D</li><li>Explain the factors leading to excessive soil erosion and how to control them. C, D, E</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ANTH ",
    "Code": 1130,
    "Title": "Introduction to Physical Anthropology ★",
    "Learning_Outcomes": "<ol><li>Understand and define the different subdisciplines of anthropology. A</li><li>Obtain a basic understanding of the development of evolutionary theory. A,E,F,G&nbsp;</li><li>Understand basics of human biology at the cellular level. B,H</li><li>Learn the importance of Mendel’s experiments and the eventual founding of the science of genetics. B,K,H</li><li>Learn the variety and characteristics of living primates. C,D</li><li>Understand primate behavior through the concept of socioecology. C,D</li><li>Obtain a basic knowledge of mammalian and primate ancestry based upon the fossil record. B,C,D,E,F</li><li>Describe the introduction to the field of paleoanthropology and the various stem hominids of the Plio-Pleistocene. G,I,J,K</li><li>Understand and describe the circumstances concerning the emergence of the genus <em>Homo</em>. E</li><li>Continue to investigate the path that led to modern humans and Neanderthals. F</li><li>Discuss modern human origins emphasizing critical thinking. J,K</li><li>Describe and discuss human variation throughout the world. H,I,J,K</li><li>Describe and discuss how humans adapt to various environments. G,H,I</li><li>Learn the basics of growth and development and relate this to forensics. J,K</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ANTH ",
    "Code": 1230,
    "Title": "Introduction to Cultural Anthropology ♦ ★",
    "Learning_Outcomes": "<ol><li>Understand the different subdisciplines of anthropology and how culture is defined. A</li><li>Define the different subdisciplines of anthropology and how culture is defined. A</li><li>Learn how cultures are studied and compared. B</li><li>Within a cultural context, understand the importance of language and communication. C</li><li>Understand the process of enculturation. D</li><li>Understand the development of adult personality. D</li><li>Understand the wide variety of methods people adapt to a variety of environments. E</li><li>Discuss the basic forms of economic and exchange systems of nonindustrial societies. F</li><li>From a cross cultural perspective, discuss the concept of marriage. G</li><li>Understand the difference between family and household and the various methods of how they are organized.&nbsp; G</li><li>Define a descent group. H</li><li>Define a descent group's functions in a society and how it relates to family organization. H</li><li>Learn how humans form groups in areas unrelated to kinship ties. I</li><li>Understand how order is maintained in societies. J</li><li>Understand/ describe political organization. J</li><li>Discuss the differences between religion and magic and how they are integrated in societies. K</li><li>Define art anthropologically and its function in a society. L</li><li>Describe art's function in a society. L</li><li>Discuss why cultures change. M</li><li>Cite some present day trends of cultural evolution. M</li><li>Understand the anthropological perspective on race, poverty, and gender. N</li><li>Understand the different medical systems and how they are integrated in societies. N</li><li>Understand the basic tenets of the discipline. O</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ANTH ",
    "Code": 1430,
    "Title": "Prehistoric Archaeology ★",
    "Learning_Outcomes": "<ol><li>Understand the goals and scope of archaeology. A, B, C</li><li>Obtain an understanding and appreciation of the history of archaeology. A, B</li><li>Learn how a human event or habitation becomes an archaeological site. C</li><li>Learn how archaeologists find and recognize places of past human behavior. C</li><li>Differentiate types of excavation techniques. C</li><li>Have an appreciation of the chronology of human prehistory. B, F, G, H, L, M, N, O</li><li>Explain the difference between relative and absolute dating. C</li><li>Understand how societies are organized and how this affects settlement patterns. B, H, L, M, N, O</li><li>Understand the variety of environments that were exploited in prehistory. K, L</li><li>Learn that subsistence is the basic of what can be found in the archaeological record. L</li><li>Have an appreciation of the evolution of human technology. C, F, J</li><li>Learn how both goods and ideas were exchanged. F, J, L, M, O</li><li>Understand the use of art to better understand what past people were thinking. D</li><li>Learn the application of physical anthropology to archaeological burials. P</li><li>Understand change in the archaeological record and why cultures disappear.&nbsp; B, H, L</li><li>Learn the steps in the interpretation of past material culture.&nbsp; A, B, C, L</li><li>Understand cultural resource management.&nbsp;Q</li><li>Describe the introduction to the field of paleoanthropology and the various hominids represented in the fossil record. F, G</li><li>Discuss modern human origins emphasizing critical thinking. F, G</li><li>Have a basic understanding of prehistoric African, Asian, North American, Mesoamerican, and Andean civilizations. N, O, P</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ANTH ",
    "Code": 2590,
    "Title": "Special Topics in Anthropology",
    "Learning_Outcomes": "<ol><li>Appraise basic and advanced facts associated with the selected topic. A, B</li><li>Discuss the implications for society and for the future based on information regarding the selected topic. B, E</li><li>Explain the manner in which the special topic fits into the overall picture of anthropology. A, B, E</li><li>Recognize appropriate principles, analyses, and technologies as pertaining to the special topic. C</li><li>Reliably collect, process, and present information on an anthropological topic. C, D</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL ",
    "Code": 2000,
    "Title": "Independent Scientific Investigation",
    "Learning_Outcomes": "<ol><li>Discuss basic and advanced facts associated with the selected topic. A</li><li>Discuss implications for society and for the future based on information regarding the selected topic. A, B, E</li><li>Understand the manner in which the special topic fits into the overall picture of biology. A,D</li><li>Read a scientific paper. C, D</li><li>Write a scientific paper. C, D</li><li>Discuss and use (depending on the course) appropriate technologies. A, B</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL ",
    "Code": 2020,
    "Title": "Human Anatomy &amp; Physiology II ♦ ★",
    "Learning_Outcomes": "<ol><li>Explain the anatomy and physiology of the following systems: (C,A,B)<ol><li><em>Endocrine</em></li><li><em>Cardiovascular</em></li><li><em>Immune</em></li><li><em>Lymphatic</em></li><li><em>Respiratory</em></li><li><em>Digestion</em></li><li><em>Urinary</em></li><li><em>Reproductive</em></li></ol></li><li>Explain the homeostatic mechanisms involved in controlling the systems above. (D)</li><li>Describe how many of the body systems work holistically to control the functioning of the body. (E)</li><li>Interpret and analyze simple medical data. (F,G)</li><li>Consult leading medical references to aid in the understanding the diagnosis and treatment of health problems. (F,G)</li><li>Use the compound microscope to examine tissues and recognize various structures of tissues. (H,C,A)</li><li>Identify various anatomical parts on pictures, models and the cadaver. (C,H,A)</li><li>Perform various laboratory techniques, such as white blood cell count and urinalysis, successfully. (H)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL ",
    "Code": 2040,
    "Title": "General Ecology ★",
    "Learning_Outcomes": "<ol><li>Describe populations and forms of species interactions.&nbsp; C</li><li>Identify plant and animal communities and the impact humans have on them.&nbsp; B, C, E</li><li>Identify plant and animal cycles and the impact humans have on them.&nbsp; B, C, D, E</li><li>Identify the major terrestrial and aquatic biomes and their inhabitants.&nbsp; B</li><li>Understand the connections among population genetics, evolution, and ecology. A</li><li>Use the scientific method and critical thinking skills to evaluate the relationships between organisms and their environment. A, D, E</li><li>Interact with professional environmental scientist and peers to take active roles in environmental protection. C, D, E</li><li>Understand human roles as top-level consumers and stewards of the biosphere.&nbsp; A, B,&nbsp; C, D, E</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL ",
    "Code": 2180,
    "Title": "General Evolution",
    "Learning_Outcomes": "<ol><li>Demonstrate a broad understanding of evolutionary biology. A,B,C,D,E,F,G,H,I</li><li>Explain the process of speciation; define the main groups of living organisms and the principle of hierarchical classification. A,B,C,D,E,I&nbsp;</li><li>Recall key concepts related to the evolution of life-histories and apply these key concepts to the evolution of life-history phenomena. A,B,C,D,E,F,I</li><li>Discuss factors influencing the development of Darwin’s and Wallace’s theory of evolution by natural selection. A,B,C,D,E,F</li><li>Explain the mechanisms by which evolution occurs, and critically evaluate the main bodies of evidence. A,B,C,D,E,F,G,H,I</li><li>Summarize the major events in the history of life on Earth and how these account for the distribution of organisms. C,D,E</li><li>Demonstrate a clear understanding of how evolutionary theory is integrated within modern genetics. A,B,D,F,H</li><li>State what fossils are and discuss the evidence for evolution displayed in the fossil record; give examples of how they may explain patterns of evolution. A,C,D,E,F,G,H</li><li>Understand the mechanism of how biologists reconstruct the evolutionary history of life on earth. A,C,F,G,H</li><li>Utilize skills and procedures developed in the class to solve problems regarding evolutionary studies. C,D,E,F,G,H</li><li>Locate biologically related material in the ERC and on the WWW.&nbsp; Evaluate biological information they read about or see on TV.&nbsp;A,B,C,D,E,F,G,H,I</li><li>Evaluate, interpret and draw conclusions from graphically presented data. E,F,G,H,I</li><li>Develop an understanding of the scientific definition of the term evolution. A,B,C,D,E,F,G,H,I</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL  ",
    "Code": 1000,
    "Title": "Special Topics in Biology",
    "Learning_Outcomes": "<ol><li>Discuss basic and advanced facts associated with the selected topic. A</li><li>Discuss implications for society and for the future based on information regarding the selected topic. A, B, E</li><li>Understand the manner in which the special topic fits into the overall picture of biology. A,D</li><li>Read a scientific paper. C, D</li><li>Write a scientific paper. C, D</li><li>Discuss and use (depending on the course) appropriate technologies. A, B</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL  ",
    "Code": 1120,
    "Title": "General Biology II ♦ ★",
    "Learning_Outcomes": "<ol><li>Describe basic anatomy (tissues, organs, and organ systems), physiology, reproduction, and development of plants and animals. B, C, F</li><li>Identify causes and treatments of various basic medical concerns such as ulcers, diabetes, depression, osteoporosis and infertility. B, C, F</li><li> Compare and contrast organisms representing the three domains and four kingdoms of living organisms A, B, D, F</li><li>Identify the importance of organisms from the three domains and four kingdoms of living organisms to the health of the biosphere. A, D, F</li><li>Explain basic concepts of population growth and community interactions. D, E, F</li><li>Describe the major concepts of ecology and environmental concerns. A, D, F</li><li>Use dichotomous keys to identify unknown organisms and report data using graphs and tables. E, F</li><li>Locate biology related material in the library and online. Evaluate biological information they read about online or see on TV. E, F</li><li>Interpret and draw conclusions from data presented in graphic form. E, F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL  ",
    "Code": 2120,
    "Title": "General Genetics ★",
    "Learning_Outcomes": "<ol><li>Predict the outcome of crosses involving autosomal traits, sex-linked traits, multiple alleles, and incomplete dominance. A, B</li><li>Explain the connection between the chromosomal theory of inheritance and predictions of outcomes of crosses based on Mendelian genetics. A, B</li><li>Explain deviations in Mendelian ratios based on multiple alleles, lethal alleles, multiple genes, penetrance, expressivity and linkage. A, B</li><li>Compare results of genetic crosses with predicted ratios and evaluate significance of deviations using chi square analysis. B</li><li>Distinguish between mutations in somatic versus germ line cells and their impact on the individual and species. A</li><li>Predict the impact of silent, frameshift, deletion and insertion mutations within a gene. A, B</li><li>Compare and contrast mutations affecting chromosomal structure and number. A</li><li>Distinguish among various methods of genetic recombination in microorganisms: conjugation, transformation, transduction. A</li><li>Discuss the use of recombination in microorganisms as a tool in mapping both prokaryotic and eukaryotic genomes. A, B</li><li>Explain the interactions among DNA, RNA and proteins in the Central Dogma of Molecular Biology. A, C</li><li>Discuss the steps involved in recombinant DNA techniques: restriction enzyme digestion, gel electrophoresis, restriction mapping, cDNA libraries, DNA libraries, Southern, Northern and Western blotting, cloning, DNA sequencing, RFLP mapping, DNA fingerprinting and PCR. A, B, D</li><li>Compare and contrast the structure of prokaryotic and eukaryotic DNA. A</li><li>Identify factors involved in changing allelic frequencies in populations: natural selection, mutation, inbreeding, genetic drift, immigration. A, B</li><li>Calculate allelic frequencies using Hardy-Weinberg equilibrium. B</li><li>Discuss the role of transposable genetics elements in retroviruses, bacteria and eukaryotes. A</li><li>Identify sources of extrachromosomal inheritance and discuss classic examples of mitochondrial and chloroplast genes. A, C</li><li>Gather, organize and interpret genetic data, presenting the results in a formal laboratory report. B, C</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL   ",
    "Code": 2320,
    "Title": "General Botany II ♦ ★",
    "Learning_Outcomes": "<ol><li>Name, label and define the morphological structure of plants. Name, describe and summarize the physiological processes of plants. (A)</li><li>Explain and analyze how various plants and plant products have impacted human social and political development. (B)</li><li>Analyze, categorize and name species of the local flora. (C)</li><li>Use experimental results to demonstrate, compare and explain aspects of plant reproduction and physiology. (D)</li><li>Use, demonstrate and apply principles and techniques to horticultural or ethnobotanical problems. (E)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL    ",
    "Code": 2400,
    "Title": "Principles of Nutrition ★",
    "Learning_Outcomes": "<ol><li>Use critical thinking to evaluate the literature. (B)</li><li>Use software designed for personal dietary assessment to evaluate their own diets in comparison to known standards. (A,C,F)</li><li>Communicate more effectively with the public and with a variety of health care providers, using an appropriate vocabulary. (A,C,D,E,F)</li><li>Demonstrate the solid foundation in Nutrition which is necessary for moving on to upper level nutrition, nursing, and other health professional courses, and eventually to the job. This will be done by a variety of means, including listening to lectures, guest speakers, viewing videotapes, and participating in group discussions. (A,B,C,D,E,F)</li><li>Examine issues related to nutrition, including fad diets, media claims, advertisements, and other similar topics. (A,B,F)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL     ",
    "Code": 2130,
    "Title": "Microbiology ★",
    "Learning_Outcomes": "<ol><li>Locate and evaluate related scientific information in the ERC and on the World Wide Web I</li><li>Use related equipment and tools for making biological measurements and observations. A</li><li>Use internet course list serve to share information pertaining to the course with classmates. H</li><li>Collect data, generate graphs and tables of the collected data, summarize the data, draw conclusions from the data, and apply these conclusions to related situations. J</li><li>Read and critique scientific writings. I</li><li>Develop a vocabulary that allows them to communicate more effectively with their health care providers as well as in preparing for health care professions. K</li><li>Participate in laboratory exercises which develop teamwork, problem solving skills and data analysis. F, J</li><li>Utilize skills and procedures developed in the laboratory to design and implement a plan to identify unknown microorganisms. D</li><li>Identify microbes through the use of cultures and staining techniques. A</li><li>Describe prokaryotic cell characteristics as they relate to organism identification. B</li><li>Understand microbe metabolism and growth and their controlling factors. C</li><li>Describe genetic operations within microbes and application of these operations as they apply to technology. H</li><li>Understand the mechanisms of classifying microbes and viruses, bacteria, protists, and fungi. D</li><li>Recognize the ramifications of drug action and treatment for specified microbes. E</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL     ",
    "Code": 2310,
    "Title": "General Botany I ♦ ★",
    "Learning_Outcomes": "<ol><li>Name, label and define the morphological structure of plants. Name, describe and summarize the physiological processes of plants. (A)</li><li>Explain and analyze how various plants and plant products have impacted human social and political development. (B)</li><li>Analyze, categorize and name species of the local flora. (C)</li><li>Use experimental results to demonstrate, compare and explain aspects of plant reproduction and physiology. (D)</li><li>Use, demonstrate and apply principles and techniques to horticultural or ethnobotanical problems. (E)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL      ",
    "Code": 2010,
    "Title": "Human Anatomy &amp; Physiology I ♦ ★",
    "Learning_Outcomes": "<ol><li>Use correct terminology and correct spelling to describe the human body in terms of regions, planes, sections, directional relationships, tissues, organs and systems (A)</li><li>Explain the chemical composition of cells and the human body including their elemental, inorganic and organic components (C, D)</li><li>Describe the anatomy and physiology of human cells (C, D, E, F)</li><li>Describe the tissue level of anatomical organization and be able to identify and classify tissues (C, G)</li><li>Explain homeostasis and its significance to normal body functions and be able to identify the components of a homeostatic control system (B,C)</li><li>Identify the anatomical components studied and explain the physiological mechanisms described in the following systems. Use correct terminology and spelling in the identification of all structures and functions: (B, G, H, I , J)<ul><li>Integumentary System</li><li>Skeletal System</li><li>Muscular System</li><li>Nervous System</li><li>Special Senses</li></ul></li><li>Demonstrate safe and ethical laboratory procedures including the human cadaver (H)</li><li>Analyze case study situations, consult appropriate medical references and demonstrate critical thinking in the discussion of diagnosis and treatment recommendation for conditions related to the systems studied (G, J, K)</li><li>Function as an effective team member by participating in small group discussions and contributing to the completion of group assignments and projects (L)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "BIOL        ",
    "Code": 1110,
    "Title": "General Biology I ♦ ★",
    "Learning_Outcomes": "<ol><li>Classify organisms into one of the Domains and Kingdoms of living things based on characteristics such as cell type, cell number, and means of nutrition. A, F, G</li><li>Identify the structure and reactivity of the atom related to bonding and the formation of biological compounds. A, F</li><li>Describe the four classes of organic compounds. A, F, G</li><li>Describe the structure and function of parts of the eukaryotic cell. A</li><li>Compare and contrast photosynthesis and cellular respiration. E</li><li>Describe the structure of DNA. C, F</li><li>Describe the role of DNA in protein synthesis and cellular control. C, F, H</li><li>Recall the key events in the discovery of DNA as the basis of heredity. C, F</li><li>Work standard Mendelian genetics problems. B, F</li><li>Work problems with multiple alleles and sex-linked traits. B, F</li><li>Explain the main bodies of evidence which support evolution. D, F, H</li><li>Explain the mechanisms by which evolution occurs. D, F, H</li><li>Use dichotomous keys to identify unknown organisms and report data using graphs. G, F, H</li><li>Locate biologically related material in the ERC and on the WWW. Evaluate biological information. H, F</li><li>Interpret and draw conclusions from graphically presented data. G, F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "CFS ",
    "Code": 2110,
    "Title": "Development in Infancy ★",
    "Learning_Outcomes": "<ol><li>Know about current trends in brain research and implications for child development. (1a, 1b)</li><li>Understand prenatal influences and newborn development. (1a, 1b)</li><li>Know and understand young children’s characteristics and needs during the first nine years of life. (1a, 1b, 3b)</li><li>Know and understand of multiple influences on development and learning. (1b)</li><li>Identify the major theories of human development and learning. (1b)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "CFS  ",
    "Code": 1100,
    "Title": "Introduction to Early Childhood Education ★",
    "Learning_Outcomes": "<ol><li>Recognize the foundation of the early childhood profession, its historical, philosophical, and social foundations and how these foundations influence current thought and practice. (6a, 6b)</li><li>Recognize the diversity of settings, teacher qualifications, types of employment, locations, etc. in the early childhood field. (6b, 6d)</li><li>Recognize professional journals, websites, organizations, and community agencies that support the early childhood professional. (6a, SS5)</li><li>Identify basic components of quality in an early childhood program setting. (1a, 2a, 3b, 4b)</li><li>Identify the goals and basic components of several prominent, theoretical curriculum models (Montessori, High Scope, Reggio Emilia, Project Approach, etc.). (4b)</li><li>Recognize the NAEYC Code of Ethical Conduct to resolve basic ethical dilemmas in early education. (6b)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "CHEM ",
    "Code": 1001,
    "Title": "Special Topics in Chemistry",
    "Learning_Outcomes": "<ol><li>Appraise basic and advanced facts associated with the selected topic. A</li><li>Identify practical applications and future implications of the selected topic. A, B</li><li>Explain the manner in which the special topic fits into the overall picture of chemistry. A</li><li>Recognize (depending on the course) appropriate principles, analyses, and technologies. B, C</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "CHEM ",
    "Code": 1010,
    "Title": "Introductory Chemistry I ♦ ★",
    "Learning_Outcomes": "<ol><li>Perform mathematical calculations pertaining to unit conversions, significant figures, quantitative chemical relationships, density, solution concentrations, dilutions, pH and pOH, hydronium and hydroxide ion concentrations, titrations, half-life of radioactive isotopes, gas laws, and colligative properties. C</li><li>Describe fundamental chemical concepts including atoms, subatomic particles, formation of ions, moles, and molecules. A</li><li>Write the electronic structure of an atom and predict properties of the elements using the periodic table. A, B</li><li>Draw Lewis structures for the elements and compounds, predict shape and polarity of covalent compounds. A, B, C</li><li>Write and balance chemical equations. A, C</li><li>Determine oxidation numbers, name compounds and write their formulas. A, C</li><li>Label bond type(s) for an element or compound and describe molecular type. A, D</li><li>Classify chemical reactions. A, C</li><li>Explain kinetic molecular theory and how it relates to gases, liquids, and solids. D</li><li>Examine the dissolution process and colligative properties. A, D, E</li><li>Recognize the different acid-base theories, distinguish between strong vs. weak acids and bases and understand their reactions, and understand buffer solutions. A, B, C</li><li>Apply the concepts of chemical equilibria and chemical kinetics, and determine the equilibrium and rate constants. A, B, D</li><li>Recognize electrolytes and understand their behavior. A, B, E</li><li>Identify nuclear particles and balance nuclear reactions. C, F</li><li>Write radioactive decay of a nuclide and determine its rate of decay and half-life. A, F</li><li>Compare and contrast nuclear fusion and fission. F</li><li>Apply the scientific method and describe its applications in chemistry and in everyday life. A</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "CHEM ",
    "Code": 1020,
    "Title": "Introductory Chemistry II ♦ ★",
    "Learning_Outcomes": "<ol><li>Name organic structures using IUPAC rules including stereochemistry as well as draw structures for given names including appropriate stereochemistry. B, D</li><li>Identify functional groups. E</li><li>Determine the products for a variety of reactions involving alkanes, alkenes, alkynes, aromatic hydrocarbons, alcohols, ethers, aldehydes, ketones, carboxylic acids, esters, amines, and amides based on examples and reaction mechanisms discussed in class. E</li><li>Determine the reagents necessary to accomplish chemical transformations of the functional groups studied. E</li><li>Draw and identify structures for important biological molecules including proteins, carbohydrates, lipids and nucleic acids. F</li><li>Determine the effects of pH change on the ionization of amino acids and proteins. F</li><li>Discuss the factors affecting enzyme activity. G</li><li>Know the steps in DNA replication, transcription and translation. H</li><li>Know the structural characteristics of classes of neurotransmitters and hormones involved in chemical communication and the mode of action. I</li><li>Collect, tabulate, graph and analyze data from laboratory experiments J, K</li><li>In learning the nomenclature and properties of different classes of organic compounds, students will have a better understanding of the chemistry involved in producing the products, both natural and man-made, that they use on a daily basis. These products include soaps and detergents, cosmetics, plastics, pesticides, fabrics, pharmaceuticals and many others. J</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "CHEM ",
    "Code": 1050,
    "Title": "Concepts of Chemistry ♦",
    "Learning_Outcomes": "<ol><li>Demonstrate problem-solving ability with emphasis on chemical word problems and performance of mathematical calculations pertaining to unit conversions, significant figures, quantitative chemical relationships, density, solution concentrations. (C, E)</li><li>Use appropriate methods and equipment for making chemical observation and measurements in a laboratory setting. (A, B, C)</li><li>Employ the correct usage of chemical terms, name chemical compounds, understand and prediction of chemical behaviors. (A, B, D, E)</li><li>Apply the fundamental chemical concepts including atoms, subatomic particles, formation of ions, moles, molecules by identifying and writing formulas and equations, and other chemical notation. (A, E)</li><li>Draw and analyze 3-D models of Lewis structures for the elements and compounds, predict shapes and polarity of covalent compounds. (A, B, D)</li><li>Determine oxidation numbers and write formulas of compounds. (A, B, C)</li><li>Label bond type(s) for an element or compound and describe molecular type. (A, B, D)</li><li>Compare and contrast properties of the three phases of matter utilizing the Particulate Nature of matter and basic kinetic molecular theory. (A, D)</li><li>Understand the dissolution process. (A, D)</li><li>Understand and recognize the different acid-base theories, distinguish between strong vs. weak acids and bases and understand their reactions. (A, B, C)</li><li>Identify nuclear particles and balance nuclear reactions. (E)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "CHEM ",
    "Code": 1120,
    "Title": "General Chemistry II ♦ ★",
    "Learning_Outcomes": "<ol><li>Work solution problems that involve dilutions and expressing various concentrations.&nbsp; A</li><li>Understand the dissolution process and colligative properties.&nbsp; A</li><li>Solve colligative property problems.&nbsp; A</li><li>Understand and recognize the different acid‑base theories.&nbsp; B</li><li>Distinguish between strong vs. weak acids and bases and understand their reactions.&nbsp; B</li><li>Understand the procedure and calculations involved in a titration.&nbsp; A, B, D</li><li>Understand the concepts involving the chemical equilibrium constant, K.&nbsp; &nbsp;&nbsp;A</li><li>Recognize electrolytes and understand their behavior.&nbsp; B</li><li>Determine pH and solve calculations involving the concentration of the hydrogen ion.&nbsp; A, B, D</li><li>Understand the concept of buffer solutions.&nbsp; A, B, D</li><li>Understand and perform calculations involving salt hydrolysis.&nbsp; A, B, D</li><li>Determine the solubility product constant, Ksp.&nbsp; A, B, D</li><li>Understand the concepts of chemical kinetics and determine rate constant, k.&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A, D</li><li>Identify nuclear particles and balance nuclear reactions.&nbsp; E</li><li>Understand radioactive decay of a nuclide and determine its rate of decay and half‑life.&nbsp; E</li><li>Distinguish between nuclear fusion and fission.&nbsp; E</li><li>Balance oxidation reduction reactions by the change in oxidation number method and the half reaction method.&nbsp; C</li><li>Solve redox problems.&nbsp; C</li><li>Diagram electrolytic and voltaic cells and understand the redox reactions &nbsp; involved.&nbsp; C</li><li>Determine standard electrode potentials and use the Nernst equation if standard conditions do not exist.&nbsp; C</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "CHEM ",
    "Code": 2010,
    "Title": "Organic Chemistry I ★",
    "Learning_Outcomes": "<ol><li>Draw Lewis structures; determine formal charges, molecular geometry and net dipole moment for simple organic molecules. A</li><li>Draw resonance structures and determine the relative importance of each resonance structure to the overall structure of the molecule. A</li><li>Do conformational analysis on linear as well as cyclic alkanes, relating the equilibrium concentration of each conformer to the relative energy difference. A</li><li>Name organic structures using IUPAC rules including stereochemistry as well as draw structures for given names including appropriate stereochemistry. C, E</li><li>Identify functional groups. F</li><li>Determine the products for a variety of reactions involving alkanes, alkenes, alkynes, and alcohols based on examples and reaction mechanisms discussed in class. F, D, E</li><li>Determine the reagents necessary to accomplish chemical transformations of the functional groups studied. F</li><li>Accomplish multistep synthesis of desired products use retro synthetic methods. G</li><li>Collect, tabulate, graph and analyze from laboratory experiments and prepare written lab reports using scientific journal format. This will require the use of word-processing and data base software and a variety of information resources. H, I</li><li>Use critical thinking to solve various problems in organic structure determination, mechanism of organic reactions and multistep syntheses of organic compounds. F, G, H</li><li>To encourage the development of teamwork, students will work in small groups both in performing laboratory experiments and problem solving in the classroom. H, I</li><li>Students will be given examples of summaries of reaction pathways which will encourage and aid in the development of their own organizational skills. H</li><li>In learning the nomenclature and properties of different classes of organic compounds, students will have a better understanding of the chemistry involved in producing the products, both natural and man-made, that they use on a daily basis. These products include soaps and detergents, cosmetics, plastics, pesticides, fabrics, pharmaceuticals and many others. I</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "CHEM ",
    "Code": 2020,
    "Title": "Organic Chemistry II ★",
    "Learning_Outcomes": "<ol><li>Determine structures for organic compounds based on molecular formula, and Infrared&nbsp; and Nuclear Magnetic Resonance spectral data. B</li><li>Draw resonance structures for the reaction intermediates involved in the addition reactions of conjugated dienes and thus determine the thermodynamic and kinetic products from these reactions. B</li><li>Predict aromaticity for cyclic organic compounds based on the Huckel 4n + 2 Rule. B</li><li>Name organic structures using IUPAC rules including stereochemistry as well as draw structures for given names including appropriate stereochemistry. D</li><li>Predict the products of electrophilic aromatic substitution reactions of benzene and devise syntheses for substituted benzenes. C</li><li>Determine the product of reactions of addition functional groups including aldehydes, ketones, carboxylic acids and carboxylic acid derivatives and amines. C</li><li>Using examples discussed in class, predict reaction mechanisms for similar reactions. E</li><li>Accomplish multistep synthesis of desired products use retro synthetic methods. F</li><li>Draw and name the structures of carbohydrates and carbohydrate derivatives. G</li><li>Elucidate the chemical and physical properties of carbohydrates and the importance these play in the essential biochemical role of carbohydrates. G</li><li>Draw the structures of amino acids and peptides as a function of pH and the importance of the acid-base chemistry of proteins in biological systems. G</li><li>Use spectral data and reaction sequences to predict products from reactions. A, C</li><li>Collect, tabulate, graph and analyze from laboratory experiments and prepare written lab reports using scientific journal format. This will require the use of word processing and data base software and a variety of information resources. H, I</li><li>Use critical thinking to solve various problems in organic structure determination, mechanism of organic reactions and multistep syntheses of organic compounds. F, G, H</li><li>To encourage the development of teamwork, students will work in small groups both in performing laboratory experiments and problem solving in the classroom. H, I</li><li>Students will be given examples of summaries of reaction pathways which will encourage and aid in the development of their own organizational skills. H</li><li>In learning the nomenclature and properties of different classes of organic compounds, students will have a better understanding of the chemistry involved in producing the products, both natural and man-made, that they use on a daily basis. These products include soaps and detergents, cosmetics, plastics, pesticides, fabrics, pharmaceuticals and many others.I</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "CHEM ",
    "Code": 2310,
    "Title": "Analytical Chemistry ★",
    "Learning_Outcomes": "<ol><li>Demonstrate the use and calibration of lab equipment. B</li><li>Prepare a lab notebook for data collection and reference. A</li><li>Demonstrate how solutions are prepared and solve solution problems involving dilutions. A</li><li>Practice the safe handling of chemicals and disposal methods of chemical wastes. A</li><li>Solve solution problems using the various concentration expressions. D, E</li><li>Complete calculations to convert given measurements to necessary units needed in solving a particular problem. D, E</li><li>Apply the concept of significant figures while performing mathematical operations. C, D, E, F, G, H</li><li>Distinguish between the different types of experimental error. C</li><li>Estimate the uncertainty in measurements. C</li><li>Prepare and apply the statistical analysis of experimental data. C</li><li>Apply the concepts involving the chemical equilibrium constant. E</li><li>Apply acid-base concepts like strength, pH and use of ionization constants. D, E</li><li>Solve for and use the solubility product constant, Ksp, and explain the effects of complex ion formation. D, E</li><li>Compare spectrophotometric concepts like absorbance, transmittance, and Beer's Law, and gain experience with these concepts using instrumentation. F</li><li>Evaluate the technique of titration and apply it to a variety of other methods to determine information about the analyte. D, E, F, G</li><li>Apply the concepts of electrochemistry and interpret chemical information using potentiometry. G</li><li>Describe two means of analytical separations - extraction and chromatography. H</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "CHEM  ",
    "Code": 1110,
    "Title": "General Chemistry I ♦ ★",
    "Learning_Outcomes": "<ol><li>Solve problems with metric system using dimensional analysis if necessary. C</li><li>Complete calculations with measurements using concept of significant figures. C</li><li>Solve density, specific gravity, and calorimetry problems. C, E</li><li>Differentiate between atom, molecule and mole. A</li><li>Calculate molar mass to determine percent composition. C</li><li>Derive chemical formulas from elemental composition (composition stoichiometry). A, C, E</li><li>Complete and balance chemical reactions. A</li><li>Solve percent purity, percent yield, and limiting reactant problems from a chemical reaction (reaction stoichiometry). B, C, E</li><li>List and describe the fundamental particles for an atom. A</li><li>Write the electronic structure for an atom or ion. A, B</li><li>Write and interpret the quantum numbers for a specific electron. A</li><li>Recall properties of an element using the periodic table. B</li><li>Name and/or write chemical substances and determine specific oxidation states. A, B</li><li>Draw Lewis structures for all chemical substances indicating bond types, molecular polarity, and possibility of resonance. A, B</li><li>Determine hybridization and describe with bond angle and shape. A</li><li>Classify chemical reactions. A</li><li>Classify a substance as an electrolyte. A</li><li>Calculate molarity and dilution problems. C</li><li>Describe physical states of substances using kinetic molecular theory and solve word problems. C, D, E.</li><li>Integrate calorimetry problems involved in phase changes. C, D, E</li><li>Read and study effectively the laboratory experiment prior to the meeting time. E, G</li><li>Perform laboratory experiments using proper techniques. F, G</li><li>Differentiate between endothermic and exothermic reactions. D</li><li>Calculate enthalpies of formation. C, D</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 1310,
    "Title": "Introduction to Early Childhood Education",
    "Learning_Outcomes": "<ol><li>Recognize the foundation of the early childhood profession, its historical, philosophical, and social foundations and how these foundations influence current thought and practice. (6a, 6b)</li><li>Recognize the diversity of settings, teacher qualifications, types of employment, locations, etc. in the early childhood field. (6b, 6d)</li><li>Recognize professional journals, websites, organizations, and community agencies that support the early childhood professional. (6a, SS5)</li><li>Identify basic components of quality in an early childhood program setting. (1a, 2a, 3b, 4b)</li><li>Identify the goals and basic components of several prominent, theoretical curriculum models (Montessori, High Scope, Reggio Emilia, Project Approach, etc.). (4b)</li><li>Recognize the NAEYC Code of Ethical Conduct to resolve basic ethical dilemmas in early education. (6b)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2310,
    "Title": "Safe, Healthy Learning Environments",
    "Learning_Outcomes": "<ol><li>Identify the practices for providing a safe indoor and outdoor environment to prevent and reduce injuries. <strong>(1c)</strong></li><li>Identify the principles for good health and nutrition practices in the early childhood setting. <strong>(1c)</strong></li><li>Identify benefits and values of learning centers for young children and basic principles for set-up and design. <strong>(1c, 4c)</strong></li><li>Identify appropriate linkages in the community related to health, safety, and nutrition. <strong>(2c, 6a)</strong></li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2315,
    "Title": "Early Childhood Curriculum",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of how children develop and learn to provide opportunities that support the physical, social, emotional, language, cognitive, and aesthetic development of all young (1a, 1b, 1c)</li><li>Demonstrate knowledge of and ability to implement meaningful, integrated learning experiences for young children in content areas of language and literacy, mathematical thinking, nature and science, and artistic expression for early education. (4b, 4c, 5a, 5b, 5c)</li><li>Identify specific positive guidance strategies for use in the early childhood setting. (4a, 4b, 4c)</li><li>Demonstrate knowledge of child observation and documentation techniques. (3b)</li><li>Demonstrate understanding of teaching strategies to identify outcomes in content areas of language and literacy, mathematical thinking, nature and science, and artistic expression for early education. (4b, 4d, 5a, 5b, 5c)</li><li>Discuss the importance of family involvement and communication. (2c)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2320,
    "Title": "Infant, Toddler &amp; Child Development",
    "Learning_Outcomes": "<ol><li>Know about current trends in brain research and implications for child development. (1a, 1b)</li><li>Understand prenatal influences and newborn development. (1a, 1b)</li><li>Know and understand young children’s characteristics and needs during the first nine years of life. (1a, 1b, 3b)</li><li>Know and understand of multiple influences on development and learning. (1b)</li><li>Identify the major theories of human development and learning. (1b)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2330,
    "Title": "Infant &amp; Toddler Care",
    "Learning_Outcomes": "<ol><li>Recognize current issues and trends in infant and toddler care. (1b)</li><li>Identify components of quality care for infants and toddlers in group settings. (1c)</li><li>Recognize developmentally appropriate materials, equipment, and environments for infants and toddlers. (1c)</li><li>Identify responsive, culturally sensitive, caregiving techniques. (4c)</li><li>Develop parent communication strategies based upon an understanding of the unique needs of parents of infants and toddlers. (2b)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2335,
    "Title": "Initial Practicum",
    "Learning_Outcomes": "<ol><li>Create a safe, healthy, respectful, supportive, and challenging learning environment for young children. (1c, 4a, SS5).</li><li>Evaluate and reflect on the effectiveness of learning environments. (1a, 3b, SS4)</li><li>Demonstrate understanding of a positive relationships and appropriate guidance through a supportive environment. (1c, 4a, SS1)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2340,
    "Title": "Family Dynamics &amp; Community Involvement",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of diverse family and community characteristics. (2a)</li><li>Demonstrate knowledge of the benefits of reciprocal, positive relationships with families. (2b, 4a)</li><li>Develop and evaluate a variety of appropriate strategies that promote communication, family involvement, and participation. (2b, 2c)</li><li>Identify and access community resources to support families and children. (2c, 5c)</li><li>Analyze ethical dilemmas in relation to working with families based on the NAEYC Code of Ethical Conduct. (5b)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2360,
    "Title": "Development of Exceptional Children",
    "Learning_Outcomes": "<ol><li>Identify recommended practices and elements for inclusive early childhood programs. (4a, 4b)</li><li>Identify initial knowledge of legislation, regulations, and litigation related to the field of special education. (6d)</li><li>Recognize the causes and classifications of developmental disabilities. (1a, 1b)</li><li>Recognize the screening and assessment process for identification and program planning for young children with disabilities. (3b, 3c)</li><li>Recognize how to work effectively with a team in an effort to coordinate an appropriate educational program integrating parents, school, and community resources. (2c, 3d)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2365,
    "Title": "Final Practicum",
    "Learning_Outcomes": "<ol><li>Analyze and apply information gained from observations of children to design appropriate experiences that meet the diverse needs of children within the group and program standards. (1a,1b, 1c, 3a, 3b, 4d)</li><li>Demonstrate the ability to support play and learning through positive interactions and relationships. (4a, 4b, 4d)</li><li>Understand and use appropriate and supportive guidance strategies which promote social and emotional development. (4a, 4b)</li><li>Demonstrate professionalism related to advocacy, ethical behavior, professional standards and reflective practice. (6a, 6b, 6c, 6d, 6e)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2370,
    "Title": "Developmental Assessment",
    "Learning_Outcomes": "<ol><li>Recognize the legal and ethical responsibilities of assessment. (3c)</li><li>Recognize methods of collecting, recording, compiling, interpreting, and summarizing assessment information. (3b)</li><li>Identify and interpret specific terms and characteristics of different screening and assessment tools. (3b)</li><li>Select and recognize different ways of reporting screening and assessment results to parents/guardians. (2c)</li><li>Recognize community support programs and proper referral procedures. (2c)</li><li>Recognize and use observation, documentation, and other appropriate assessment tools and approaches to evaluate young children. (3b)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2375,
    "Title": "Social &amp; Emotional Foundations",
    "Learning_Outcomes": "<ol><li>Describe the major milestones related to social-emotional development. (1a)</li><li>Design environments that support children's social-emotional development and prevent challenging behavior. (1c, 4a)</li><li>Define emotional literacy and identify activities that build \"feeling vocabularies.\" (4b, 4c)</li><li>Describe the relationship between challenging behavior, engagement and social-emotional development. (1b)</li><li>Identify the function of children's challenging behaviors. (1b)</li><li>Understand the steps in developing Positive Behavior Support Plans for students with persistent challenging behavior. (4b)</li><li>Identify strategies for: (2b, 4a, 4b, 4c) building relationships with children, families and colleagues; teaching social skills and problem solving skills and promoting emotional development; the development of friendship skills; designing environments, schedules and routines and structuring transitions; helping children learn rules and routines through activities that promote engagement; identifying methods that may be used to determine the function of challenging behavior; preventing challenging behavior and teaching replacement skills for challenging behavior</li><li>Participate in personal reflection that: (4d) focuses on the teacher's understanding the importance of providing opportunities for children to begin to understand their owns as well as other's emotions and teaching problem solving skills; evaluate their work with children related to building relations and the structure and design of their environment and generate strategies for addressing areas where they need to make changes and improvements</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2380,
    "Title": "Language &amp; Literacy in Early Childhood",
    "Learning_Outcomes": "<ol><li>Describe the concept of a developmental continuum for early reading and writing. (4c)</li><li>Demonstrate effective strategies for involving families in supporting language and literacy in young children. (2c)</li><li>Use informal tools for assessing children’s language development and literacy learning. (3b)</li><li>Plan and implement learning experiences to support development in the following areas: listening and understanding, speaking and communicating, phonological awareness, book knowledge and appreciation, print awareness and concepts, early writing, and alphabet knowledge. (5a, 5c)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2385,
    "Title": "Math &amp; Science in Early Childhood",
    "Learning_Outcomes": "<ol><li>Identify learning outcomes for young children in math and science. (5a)</li><li>Identify standards for math and science instruction and programming in early education settings. (5a)</li><li>Plan math and science experiences for children throughout an integrated, play-based curriculum. (4b, 4c)</li><li>Plan and implement appropriate experiences for children that support the development of child outcomes in five areas 1) Number and Operations, 2) Geometry and Spatial Sense, 3) Patterns and Measurement, 4) Scientific Skills and Methods, and 5) Scientific Knowledge (5a, 5b, 5c)</li><li>Demonstrate appropriate individual child assessment methods in math and science learning. (3b)</li><li>Discuss and demonstrate how technology can be philosophically and physically integrated to support development of math and science in the curriculum. (4b)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "ECED  ",
    "Code": 2390,
    "Title": "Creative Development",
    "Learning_Outcomes": "<ol><li>Upon successful completion of the course the student will be able to:</li><li>Discuss the theoretical contexts of creativity as it relates to the areas of child development. (1a, 1c)</li><li>Identify developmental levels and stages of art for young children. (1a)</li><li>Develop strategies for stimulating of creativity, including questioning, problem solving, group activities, and socio-dramatic play for use throughout an integrated curriculum. (4b, 4c)</li><li>Plan, organize, supervise, and implement developmentally appropriate activities dealing with creative and expressive arts for children birth to age eight utilizing a variety of materials, resources, and art media using a multicultural perspective. (5a, 5b, 5c)</li><li>Develop a personal philosophy of creative and expressive art. (4d, 6d)</li><li>Discuss the importance of family involvement in the creative development process. (2c, 4a)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "EDU  ",
    "Code": 2000,
    "Title": "Special Topics in K-5 Education",
    "Learning_Outcomes": "<ol><li>Discuss basic terminology, facts and theories associated with the selected topic. (A, B)</li><li>Discuss the special topic as it fits into the overall picture of education and the classroom teacher. (A, B, E)</li><li>Identify and use emerging technology as it relates to education and the classroom teacher. (C)</li><li>Research, process, discuss, and present information on the education topic. (A,C, D)</li><li>Discuss the implications for society and for the future of education based on information regarding the selected topic. (B, E)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "EDU    ",
    "Code": 2015,
    "Title": "Education of Exceptional Children Grades K-5",
    "Learning_Outcomes": "<ol><li>Exhibit knowledge of the history of students with disabilities and special education. (A,D)</li><li>Exhibit knowledge of the legislation dealing with students with disabilities, early intervention and special education programs. (A, D)</li><li>Identify the six principles of IDEA and professional ethics. (A, B, G)</li><li>Identify the categories of exceptional children included in IDEA. (A, B)</li><li>Identify characteristics of developmental disabilities and at-risk conditions. (A,B)</li><li>Exhibit knowledge of the causes and classification of developmental disabilities. (D</li><li>Demonstrate an understanding of the importance of early intervention for children with exceptionalities. (A,C)</li><li>Exhibit a general understanding of the assessment process leading to a student’s eligibility for special education services. (E)</li><li>Identify the roles, responsibilities, and best practices for K-6 teachers in working with students with exceptionalities in the K-6 regular education classroom. (A, B, F, G)</li><li>Discuss and demonstrate basic knowledge and skills in constructing and modifying classroom learning environments to best meet the needs of each student. (F)</li><li>Identify and discuss social limitations and issues in school environments related to students with exceptionalities. (G)</li><li>Communicate information related to special education using professional terminology. (B, H)</li><li>Discuss how to work effectively with a multidisciplinary team of various educators, other educational or medical professionals and family members to coordinate an appropriate educational program for children with exceptionalities. (B, H)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "EDU      ",
    "Code": 2010,
    "Title": "Introduction to Teaching",
    "Learning_Outcomes": "<ol><li>Identify the characteristics of an effective teacher and use this information to make an appropriate career choice. (A)</li><li>Make educational decisions related to teacher licensure and take appropriate steps to complete requirements according to selected teacher education program. (B)</li><li>Join and participate in the teachers’ professional organization. (STEA) (B)</li><li>Define and use educational terms and information in class discussions, assignments, and field experience. (A, C, D, E)</li><li>Research and present information in class related to educational terminology, issues, and “best practices.” (C)</li><li>Identify the varied learning styles and other factors that affect student learning and the learning environment and use these in the development of assignments and in classroom discussion. (E)</li><li>Begin a portfolio that will continue to be developed throughout the licensure program and then be used in the process of finding a job. (J)</li><li>Develop and discuss classroom policies and procedures that will meet the needs of a diverse classroom population and are in compliance with copyright law, fair-use guidelines, security, and child protection. (C,H)</li><li>Reflect, analyze, and assimilate the knowledge gained through observing experienced teachers in the classroom by keeping a reflective journal and participating in classroom discussions. (I)</li><li>Demonstrate efficiency in using technology to complete classroom assignments.(F,G)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "GEOG ",
    "Code": 1000,
    "Title": "Introduction to Geography ♦",
    "Learning_Outcomes": "<ol><li>Discuss how the discipline of geography affects and influences daily lives. A, B</li><li>Understand the many differences that exist in the broad fields of human and environment relationships that comprise geography. A, B</li><li>Use geography to explain the relationship of historical events and the geographic patterns of human development. A, B</li><li>Understand how information in the form of maps and numbers connect to the physical and cultural world. A, B</li><li>Explain how the physical environment influences human settlement, culture formation, economy, and politics. A, B</li><li>Identify and map the twelve major geographic realms and their interrelated parts that constitute the earth’s physical environment. A, B</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "GEOL ",
    "Code": 1005,
    "Title": "Special Topics in Geology",
    "Learning_Outcomes": "<ol><li>Appraise basic and advanced facts associated with the selected topic. A</li><li>Identify practical applications and future implications of the selected topic. A, B</li><li>Explain the manner in which the special topic fits into the overall picture of geology. A</li><li>Recognize (depending on the course) appropriate principles, analyses, and technologies. B, C</li><li>Use discussions to evaluate the societal implications involved with the special topic. D.</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "GEOL ",
    "Code": 1050,
    "Title": "Historical Geology ♦ ★",
    "Learning_Outcomes": "<ol><li>Discuss the roles of observation and reasoning in applications of the scientific method. A</li><li>Discuss the concepts of relative and absolute geologic time, and the methods of determining the geologic of geologic events and materials. C</li><li>Identify common earth materials using simple tests, and provide an explanation of the major processes that operated to create the materials in a laboratory setting. G, B</li><li>Identify common fossil materials and provide an explanation for the method of preservation. B, E, F, G</li><li>Discuss earth science related issues and events presented in news media reports. E, F, D, C, B</li><li>Identify dynamic earth processes (e.g., erosion, flooding, sinkholes, earthquakes, volcanism). B, D, G</li><li>Discuss the manner in which dynamic earth processes effect personal safety, health, and financial security. B, D, G7</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "GEOL ",
    "Code": 1300,
    "Title": "Environmental Science W/Lab ♦ ★",
    "Learning_Outcomes": "<ol><li>Discuss the roles of observation and reasoning in applications of the scientific method. A</li><li>Identify common earth materials using simple tests, and provide an explanation of the major processes that operated to create the materials in a laboratory setting. B</li><li>Discuss earth science related issues and events presented in news media reports. B, C, D, E, D</li><li>Identify dynamic earth processes (e.g., erosion, flooding, sinkholes, earthquakes, volcanism). B, C, D</li><li>Discuss the manner in which dynamic earth processes effect personal safety, health, and financial security. B, D, E</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "GEOL  ",
    "Code": 1040,
    "Title": "Physical Geology ♦ ★",
    "Learning_Outcomes": "<ol><li>Discuss the roles of observation and reasoning in applications of the scientific method. A</li><li>Discuss the concepts of relative and absolute geologic time, and the methods of determining the geologic time of geologic events and materials. C</li><li>Identify common earth materials using simple tests, and provide an explanation of the major processes that operated to create the materials in a laboratory setting. F, B</li><li>Provide an explanation of the major processes that operate to create common earth materials. F, B</li><li>Discuss earth science related issues and events presented in news media reports. E, D, C, B</li><li>Identify dynamic earth processes (e.g., erosion, flooding, sinkholes, earthquakes, volcanism). B, D, G</li><li>Discuss the manner in which dynamic earth processes affect personal safety, health, and financial security. B, D, G</li><li>Discuss the possible careers in earth science. H</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 1005,
    "Title": "Introduction to Exercise Science ★",
    "Learning_Outcomes": "<ol><li>List and discuss various employment/career opportunities resulting from a degree in Exercise Science. B, D, E</li><li>Formulate their personal philosophy of Exercise Science. A, B, C, D, E</li><li>Participate in a fieldwork experience in Exercise Science. E</li><li>Write a report a fieldwork experience in Exercise Science. E</li><li>Write a report on interviews with Exercise Science specialists in three different career areas. B, C</li><li>Write a report on their career choice in Exercise Science. B, C</li><li>Give an oral report concerning their interviews with Exercise Science professionals. B, C, D</li><li>Lead a discussion on their interviews. B, C, D</li><li>Give an oral report of their fieldwork experience. B, E</li><li>Lead a discussion on their field experiences. B, C, D, E</li><li>Lead a discussion on their career choice. B, C, D, E</li><li>Discuss major requirements with advisors. B, C, D</li><li>Design a resume. B, C</li><li>Access the Internet and other educational resource venues for information on Exercise Science. A, B, D</li><li>Write a summary of research findings on one selected special topic. A, B, C, D</li><li>Discuss special topics in Exercise Science. A, B, C, D, E</li><li>Interact with Exercise Science peers and Exercise Science specialty speakers during class. C</li><li>Students will discuss history, philosophy and principles of Exercise Science. A, B, D</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 1020,
    "Title": "Beginning Bowling ★",
    "Learning_Outcomes": "<ol><li>Perform a correct bowling stance. A, B, F,</li><li>Perform a correct bowling arm swing. A, B, D, F</li><li>Perform a bowling four-step approach. A, B, D, F</li><li>Release the bowling ball in the correct position. A, B, D,</li><li>Perform the proper hook ball or straight ball delivery. A, B, D, F</li><li>Perform a correct follow through. A, B, D, F</li><li>Demonstrate knowledge of the adjustments and strategy needed to maximize spare conversion. A, D, F</li><li>Make proper adjustment to account for lane conditions. A, D, F,</li><li>Employ spot bowling technique. A, D, F,</li><li>Demonstrate knowledge of bowling etiquette. B</li><li>Demonstrate knowledge of bowling jargon. C</li><li>Demonstrate knowledge of bowling history. E</li><li>Score a game of bowling. D</li><li>Pick out a bowling ball, which would maximize performance. A, B</li><li>Demonstrate knowledge of and employ the 3, 6, 9 method of spare conversion. A, C, F</li><li>Demonstrate knowledge of and employ spot bowling technique. A, C, F</li><li>Identify and correct error in technique. A, F</li><li>Demonstrate knowledge of the “pin-ball” deflection. F</li><li>Calculate and use handicaps in a league style tournament. D</li><li>Calculate bowling averages. D</li><li>Employ sportsmanship and teamwork during tournament play. A, B, C, D, F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 1030,
    "Title": "Beginning Softball ★",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of Softball etiquette. B</li><li>Demonstrate knowledge of Softball terminology. C</li><li>Demonstrate knowledge of Softball history. E</li><li>Demonstrate knowledge of how to score a Softball game. C, D</li><li>Pick out the Softball equipment necessary to maximize performance. G</li><li>Perform using proper batting technique. A, B, F, G, H, I</li><li>Perform using proper throwing technique. A, B, F, G, H, I</li><li>Perform using proper catching technique. A, B, F, G, H, I</li><li>Perform using proper in-fielding technique. A, B, F G, H, I</li><li>Perform using proper out-fielding technique. A, B, F, G, H, I</li><li>Perform using proper pitching technique. A, B, F, G, H, I</li><li>Perform using proper base running technique. A, B, F, G, H, I</li><li>Demonstrate knowledge of basic Umpire skills. B, C, D</li><li>Demonstrate knowledge of defensive position play. F, H, I</li><li>Demonstrate knowledge of defensive strategy. F, H, I</li><li>Demonstrate knowledge of offensive strategy. F, H, I</li><li>Play a softball game employing a variety of offense and defensive skills, safety, rules, and scoring. A, B, C, D, F, G, H, I</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 1070,
    "Title": "Introduction to Skiing ★",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of and wear in the class proper apparel for snow skiing. B, C, E</li><li>Execute putting ski equipment, such as boots and skis. B, C, E, F</li><li>Read, discuss and follow the Slope Responsibility Code. B, E</li><li>Demonstrate proper body positioning while on skis. A, F</li><li>Execute sliding technique with balance. A, D, F</li><li>Perform side-step climbing. A, D, F</li><li>Perform a wedge stop. A, D, F</li><li>Demonstrate the proper way to stand up from a fall. A, D, F</li><li>Define and identify the fall line. A, C, D, E, F</li><li>Demonstrate wedge (stem) turns under control. A, D, F</li><li>Demonstrate proper technique for entering and exiting the rope tow. A, B, C, D, E, F</li><li>Demonstrate proper technique for entering and exiting the ski lift.A, B, C, D, E, F</li><li>Discuss and demonstrate knowledge of snow skiing safety practices, etiquette, and terminology.A, B, F</li><li>Evaluate and correct errors in skiing form and execution. A, F</li><li>Execute a side-hill slide. A, D, F</li><li>Recognize slope signs indicating degree of difficulty to safely ski the slope. A, B, C, D, E, F</li><li>Execute linked wedge turns under control. A, D, F</li><li>Demonstrate linked wedge turns with the addition of sliding the uphill ski into a parallel position (stem christie). AA, D, F</li><li>Execute the proper way to traverse the slope while skiing. A,D, F</li><li>Practice and demonstrate a parallel stop. A,D, F</li><li>Discuss, practice, and begin to initiate parallel turns while skiing down the slope. A, D, F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 1080,
    "Title": "Introduction to Snowboarding",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of proper apparel for snowboarding by wearing the clothing to class. B, E</li><li>Execute putting on snowboard equipment, such as boots, board and safety leash. B, C, E, F</li><li>Read, discuss and follow the Slope Responsibility Code. B, C, E</li><li>Demonstrate knowledge of stance choices and choose his/her preferred stance. A, B, D, F</li><li>Demonstrate proper body positioning on the board. A, F</li><li>Demonstrate sliding technique with balance. A, C, D, F</li><li>Perform toe-edge and heel-edge stops. A, C, D, E, F</li><li>Perform a basic slide slip. A, C, D, F</li><li>Demonstrate basic traverse skills. A, C, D, F</li><li>Perform a straight glide. A, C, D, F</li><li>Perform a j-turn. A, C, D, F</li><li>Execute back foot maneuvers. A, C, D, F</li><li>Demonstrate proper way to stand back up after a fall. A, C, D, F</li><li>Define and identify the fall line. A, C, D, E, F</li><li>Demonstrate skidded turns under control. A, C, D, F</li><li>Execute using feet to guide turning. A, C, D, F</li><li>Demonstrate proper technique for entering and exiting the rope tow. A, C, D, E, F</li><li>Discuss and demonstrate the proper technique for entering and exiting the lift. A, C, D, E, F</li><li>Discuss and demonstrate knowledge of snowboarding safety practices, etiquette, and terminology. B, C, E</li><li>Evaluate and correct errors in snowboarding form and execution. A, F</li><li>Execute using edges to create gentle arcs. A, C, D, E, F</li><li>Demonstrate flex to end the turn and extend to start the turn. A, C, D, F</li><li>Recognize slope signs indicating degree of difficulty to safely snowboard on the slope. B, C, E</li><li>Execute the falling leaves turn. A, C, D, F</li><li>Practice and demonstrate a controlled stop. A, C, D, F</li><li>Discuss, practice, and began to initiate linked skidded turns while riding down increasingly difficult slopes. A, C, D, E, F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 1110,
    "Title": "Elementary Ballet ★",
    "Learning_Outcomes": "<ol><li>Understand medical considerations before embarking on a dance program. H</li><li>Demonstrate knowledge of and engage in effective warm-up activities. A</li><li>Demonstrate knowledge of and engage in effective cool-down activities. A</li><li>Wear proper clothing and footwear for a safe dance class. H</li><li>Describe the cardiovascular benefits of a dance class.B</li><li>Describe the metabolic benefits of dance .B &amp; G</li><li>Describe the psychological benefits of dance. G</li><li>Define muscular strength, understand why it is a health related component of fitness, and engage in strength exercises as part of dance. B</li><li>Define flexibility, understand why it is a health related component of fitness, and engage in flexibility exercises as part of dance. B</li><li>Demonstrate knowledge of and engage in a variety of different stretching methods. B</li><li>Describe how to stretch safely.</li><li>Demonstrate knowledge of physical activity, fitness, and disease prevention and treatment. G &amp; H</li><li>Describe the RICE acronym to remember first aid treatment. H</li><li>Demonstrate knowledge of the function and importance of protein in a balanced, nutritional diet. C</li><li>Demonstrate knowledge of the function and importance of fat in a balanced, nutritional diet. G,M</li><li>Demonstrate knowledge of the function and importance of carbohydrates in a balanced, nutritional diet. C</li><li>Demonstrate knowledge of the function and importance of water in a balanced, nutritional diet. C &amp; D</li><li>Demonstrate knowledge of the function and importance of vitamins in a balanced, nutritional diet. C, D &amp; H</li><li>Employ the food guide pyramid in developing a healthy eating plan. C</li><li>Demonstrate knowledge of and engage in warm-up and cool-down dance activities. A</li><li>Demonstrate knowledge of dance etiquette, injury care, and safety while training for dance. A</li><li>Demonstrate knowledge of dance/fitness terminology. A</li><li>Formulate dance/fitness program. D</li><li>Evaluate and correct errors in dance movements. E</li><li>Demonstrate knowledge of dance equipment. C</li><li>Demonstrate and employ knowledge of healthy eating habits for nutrition. D</li><li>Maintain dance journal/notebook. I,III</li><li>Demonstrate knowledge of body composition, cardiovascular fitness, strength, and flexibility. B</li><li>Engage in flexibility activities. B</li><li>Engage in muscular strength activities. B &amp; D</li><li>Engage in cardiovascular activities. B &amp; D</li><li>Demonstrate knowledge of and engage in activities that factor into improving and maintaining a healthy body composition. B &amp; D</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 1120,
    "Title": "Elementary Modern Dance ★",
    "Learning_Outcomes": "<ol><li>Understand medical considerations before embarking on a dance program. H</li><li>Demonstrate knowledge of and engage in effective warm-up activities. A</li><li>Demonstrate knowledge of and engage in effective cool-down activities. A</li><li>Wear proper clothing and footwear for a safe dance class. H</li><li>Describe the cardiovascular benefits of a dance class. B</li><li>Describe the metabolic benefits of dance. C</li><li>Describe the psychological benefits of dance C</li><li>Define muscular strength, understand why it is a health related component of fitness, and engage in strength exercises as part of dances C</li><li>Define flexibility, understand why it is a health related component of fitness, and engage in flexibility exercises as part of dance B</li><li>Demonstrate knowledge of and engage in a variety of different stretching methods.</li><li>Describe how to stretch safely. H</li><li>Demonstrate knowledge of physical activity, fitness, and disease prevention and treatment. C &amp; H</li><li>Describe the RICE acronym to remember first aid treatment. H</li><li>Demonstrate knowledge of the function and importance of protein in a balanced, nutritional diet. E</li><li>Demonstrate knowledge of the function and importance of fat in a balanced, nutritional diet. C,D, &amp;g</li><li>Demonstrate knowledge of the function and importance of carbohydrates in a balanced, nutritional diet. C &amp;D</li><li>Demonstrate knowledge of the function and importance of water in a balanced, nutritional diet.</li><li>Demonstrate knowledge of the function and importance of vitamins in a balanced, nutritional diet. C &amp; D</li><li>Employ the food guide pyramid in developing a healthy eating plan. C &amp; D</li><li>Demonstrate knowledge of and engage in warm-up and cool-down dance activities. A</li><li>Demonstrate knowledge of dance etiquette, injury care, and safety while training for dance. H</li><li>Demonstrate knowledge of dance/fitness terminology A.</li><li>Formulate dance/fitness program. F &amp;G</li><li>Evaluate and correct errors in dance movements. F</li><li>Demonstrate knowledge of dance equipment.</li><li>Demonstrate and employ knowledge of healthy eating habits for nutrition.</li><li>Maintain dance journal/notebook. D &amp;E</li><li>Demonstrate knowledge of body composition, cardiovascular fitness, strength, and flexibility. B</li><li>Engage in flexibility activities. B&amp;C</li><li>Engage in muscular strength activities. B&amp;C</li><li>Engage in cardiovascular activities. B &amp;C</li><li>Demonstrate knowledge of and engage in activities that factor into improving and maintaining a healthy body composition. G</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 1130,
    "Title": "Elementary Jazz Dance ★",
    "Learning_Outcomes": "<ol><li>Understand medical considerations before embarking on a dance program. H</li><li>Demonstrate knowledge of and engage in effective warm-up activities. A</li><li>Demonstrate knowledge of and engage in effective cool-down activities. A</li><li>Wear proper clothing and footwear for a safe dance class. H</li><li>Describe the cardiovascular benefits of a dance class. A</li><li>Describe the metabolic benefits of dance. . C</li><li>Describe the psychological benefits of dance. D</li><li>Define muscular strength, understand why it is a health related component of fitness, and engage in strength exercises as part of dance. B</li><li>Define flexibility, understand why it is a health related component of fitness, and engage in flexibility exercises as part of dance. B</li><li>Demonstrate knowledge of and engage in a variety of different stretching methods. B &amp;C</li><li>Describe how to stretch safely.</li><li>Demonstrate knowledge of physical activity, fitness, and disease prevention and treatment. G</li><li>Describe the RICE acronym to remember first aid treatment. H</li><li>Demonstrate knowledge of the function and importance of protein in a balanced, nutritional diet. C</li><li>Demonstrate knowledge of the function and importance of fat in a balanced, nutritional diet. D &amp; E</li><li>Demonstrate knowledge of the function and importance of carbohydrates in a balanced, nutritional diet. D &amp; E</li><li>Demonstrate knowledge of the function and importance of water in a balanced, nutritional diet. D &amp; E</li><li>Demonstrate knowledge of the function and importance of vitamins in a balanced, nutritional diet. D &amp; E</li><li>Employ the food guide pyramid in developing a healthy eating plan. D</li><li>Demonstrate knowledge of and engage in warm-up and cool-down dance activities A.</li><li>Demonstrate knowledge of dance etiquette, injury care, and safety while training for dance. H</li><li>Demonstrate knowledge of dance/fitness terminology. C</li><li>Formulate dance/fitness program. C &amp; F</li><li>Evaluate and correct errors in dance movements. F</li><li>Demonstrate knowledge of dance equipment. B</li><li>Demonstrate and employ knowledge of healthy eating habits for nutrition. C</li><li>Maintain dance journal/notebook. C</li><li>Demonstrate knowledge of body composition, cardiovascular fitness, strength, and flexibility. B</li><li>Engage in flexibility activities. B</li><li>Engage in muscular strength activities .B</li><li>Engage in cardiovascular activities. B</li><li>Demonstrate knowledge of and engage in activities that factor into improving and maintaining a healthy body composition. B</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2000,
    "Title": "Special Topics in Physical Education",
    "Learning_Outcomes": "<ol><li>Name and describe various sports, fitness, and recreation activities. A, B, C</li><li>Discuss various sports, fitness, and recreation activities. A, B, C</li><li>Formulate their personal philosophy of lifetime sports, fitness, and recreational activities. A, B, C</li><li>Keep a journal of their experiences or workouts. A, B, C</li><li>Access the Internet and other educational resource venues for information on certain aspects of course content that might include fitness, recreational activities, and sports. A, C</li><li>Participate in an appropriate amount of sports, fitness, and/or recreational activities. B</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2010,
    "Title": "Archery",
    "Learning_Outcomes": "<ol><li>Discuss different styles of shooting. A,B</li><li>Fit and properly attach archery equipment. B,</li><li>Demonstrate a clear understanding of safety rules and procedures. A, B, D</li><li>Understand eye dominance. A, F</li><li>Demonstrate and describe the nine steps to shooting. C</li><li>Shoot accurately from 10 feet. A, B, D</li><li>Shoot accurately from 15 feet. A, B, D</li><li>Shoot accurately from 20 feet. A, B,F</li><li>Demonstrate knowledge of archery rules and scoring. D</li><li>Vary shooting stance to improve accuracy. A, F</li><li>Shoot with both eyes closed. A</li><li>Define and describe archery terminology. C</li><li>Demonstrate knowledge of the history of archery. E</li><li>Use sights properly. A, F</li><li>Properly nock an arrow. A, F</li><li>Set using proper technique. A, F</li><li>Use proper body alignment. A, F</li><li>Anchor properly. A, F</li><li>Use correct aiming technique. A, F</li><li>Follow through using proper technique. A, F</li><li>Demonstrate knowledge of proper warm-up techniques and flexibility exercises used in archery. B</li><li>Demonstrate knowledge of proper care, selection, and use of archery equipment. B</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2050,
    "Title": "Basketball ★",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of Basketball etiquette. B</li><li>Demonstrate knowledge of Basketball terminology. C</li><li>Demonstrate knowledge of the history of Basketball. E</li><li>Demonstrate knowledge of how to score a Basketball game. D</li><li>Pick out the Basketball equipment necessary to maximize performance. G</li><li>Dribble a Basketball with both hands. A, F</li><li>Shoot foul shots with accuracy. A, F</li><li>Shoot jump shots with accuracy, A, F</li><li>Shoot right handed and left handed lay-up shots with accuracy. A, F</li><li>Employ proper form during the execution of a jump shot. A, F</li><li>Employ proper form during the execution of a lay-up shot. A, F</li><li>Employ proper form during the execution Basketball passes (one handed push pass, baseball pass, chest pass, bounce pass, flip pass, two hand overhead pass).A, F</li><li>Demonstrate knowledge of and employ off ball skills (cuts, fakes, pivots, picks and rolls). A, F</li><li>Demonstrate knowledge of and employ rebounding skills. A, F</li><li>Demonstrate knowledge of individual defensive skills. A, F</li><li>Demonstrate knowledge of the 2-1-2-zone defense. A, F</li><li>Demonstrate knowledge of the 1-3-1-zone defense. A, F</li><li>Demonstrate knowledge of the zone press. A, F</li><li>Demonstrate knowledge of one to man defense. A, F</li><li>Demonstrate knowledge of team offenses. A, F</li><li>Execute strategy during 5-on-5 games. A, B, F</li><li>Play a Basketball game employing a variety of Basketball skills, safety, rules, and scoring. A, B, D, F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2110,
    "Title": "Beginning Golf ★",
    "Learning_Outcomes": "<ol><li>Demonstrate proper grip, stance, and posture in addressing the golf ball. A,F</li><li>Perform a pitch shot. A,F</li><li>Execute a chip and run shot. A,F</li><li>Demonstrate a quarter-swing. A,F</li><li>Demonstrate a half-swing. A,,F</li><li>Demonstrate a three-quarter swing. A,F</li><li>Demonstrate a full swing. A,F,</li><li>Demonstrate putting technique. A, F,</li><li>Discuss techniques and cues for reading a green prior to putting. A,C, F</li><li>Discuss the differences in technique, club selection, and in which situations to use the pitch shot or the chip and run shot. A,C,E,F</li><li>Discuss and demonstrate proper use of practice time. A,C,E, F</li><li>Evaluate and choose the correct club for the situation, distance, and loft when playing on a course. A,C,E, F</li><li>Identify the tee box, fairway, green, rough, hazards, markings and signage on a golf course. C,</li><li>Apply the knowledge of the rules of golf while playing on a golf course. B,C,D</li><li>Discuss and demonstrate knowledge of safety practices, golf etiquette, terminology, and golf history. B,C,E</li><li>Execute the repair of a ball mark and a divot. B,C,F</li><li>Name and describe at least fifteen aspects of performing a correct golf swing. A,C,F</li><li>Interpret a scorecard and keep score accurately. B,C,D</li><li>Play a round of golf on a course using correct etiquette and rule interpretation. B,C,D</li><li>Demonstrate knowledge of the proper care, selection, and use of golf equipment. C,E</li><li>Explain the value of keeping and analyzing statistics for fairways hit, greens in regulation, up and down, number of putts.</li><li>Apply his/her playing statistics to the distribution of practice time devoted to each aspect of the statistics gathered from playing a round of golf. (refer to outcome 21) A,C,E,F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2160,
    "Title": "Traditional Mixed Martial Arts ★",
    "Learning_Outcomes": "<ol><li>Demonstrate warm up and stretching techniques. A, B, F</li><li>Demonstrate proper stance and posture for combative flow skills. A, B, C, D, F</li><li>Perform figure four locks. A, B, C, D, F</li><li>Perform armbars. A, B, C, D,&nbsp; F</li><li>Demonstrate scarf-hold position. A, B, C, D, F</li><li>Demonstrate mounts and pin positions. A, B, C, D, F</li><li>Execute takedowns, throws, and counters. A, B, C, D, F</li><li>Show strikes, punches, and kicks. A, B, C, D, F</li><li>Demonstrate a finger lock to reverse, lying shoulder lock. A, B, C, D, F</li><li>Demonstrate a one-hand push to hammer smash. A, B, C, D, F</li><li>Perform a lapel grab to inside wrist compression. A, B, C, D, F</li><li>Demonstrate two-handed lapel grab to punch. A, B, C, D, F</li><li>Discuss techniques and cues for reading appropriate offensive maneuvers. A, B, C, D, F</li><li>Perform a low bear hug to stomp. A, B, C, D, F</li><li>Perform a high bear hug to stomp. A, B, C, D, F</li><li>Show both the two front choke series to submission and the two back choke series to submission. A, B, C, D, F</li><li>Complete a standing head lock to armbar. A, B, C, D, F</li><li>Discuss the differences in techniques and in which situations to use grabs, locks, and hold breaks. A, B, C, D, F</li><li>Discuss offensive guard maneuvers. A, B, C, D, F</li><li>Demonstrate single leg and double leg takedowns. A, B, C, D, F</li><li>Evaluate defensive situations and apply proper responses through combative flow. A, B, C, D, F</li><li>Evaluate offensive situations and apply proper blocks, takedowns, and offensive guard maneuvers. A, B, C, D, F</li><li>Discuss the basic history of combative flow. E</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2250,
    "Title": "Exercise to Music ★",
    "Learning_Outcomes": "<ol><li>Understand medical considerations before embarking on an aerobic program. B</li><li>Demonstrate knowledge of and engage in effective warm-up activities. A</li><li>Demonstrate knowledge of and engage in effective cool-down activities. A</li><li>Wear proper clothing and footwear for a safe, comfortable aerobic workout. A,H</li><li>Describe the cardiovascular benefits of an aerobic workout. B</li><li>Describe the metabolic benefits of aerobic workouts. C</li><li>Describe the psychological benefits of aerobic workouts. AB &amp; E</li><li>Describe the four primary risk factors associated with coronary heart disease. G</li><li>Calculate target heart rate. A &amp;B</li><li>Locate and monitor exercising and resting heart rates. E &amp; F</li><li>Define muscular strength, understand why it is a health related component of physical fitness, and engage in strength exercises as part of aerobic routines. B</li><li>Define flexibility, understand why it is a health related component of physical fitness and engage in flexibility exercise as part of Aerobic routines. B</li><li>Demonstrate knowledge of the acronym FITT which demonstrates the criteria for cardiovascular. B, E &amp;F</li><li>Describe the Overload principle. A</li><li>Describe the Progression principle. A</li><li>Describe the Specificity principle. A</li><li>Describe Somatotyping. C</li><li>Engage in Bioelectrical Impedance Analysis D, E, &amp; F</li><li>Describe Posture, Body Alignment and Placement.</li><li>Recognize the signs of over training. H</li><li>Describe the RICE acronym to remember first aid treatment. H</li><li>Describe BMR as a factor in maintaining a healthy body composition. G</li><li>Demonstrate knowledge of the function and importance of protein in a well balanced, nutritional diet. C</li><li>Demonstrate knowledge of the function and importance of fat in a well-balanced, nutritional diet. C</li><li>Demonstrate knowledge of the function and importance of carbohydrates in a well balanced, nutritional diet. C</li><li>Demonstrate knowledge of the function and importance of water in a well-balanced, nutritional diet. C</li><li>Demonstrate knowledge of the function and importance of vitamins in a well balanced, nutritional diet. C</li><li>Employ the food guide pyramid in developing a health-eating plan. C</li><li>Engage in aerobic floor movements. F &amp; G,</li><li>Engage in step aerobic movements. F &amp; G</li><li>Engage in body toning and conditioning exercises. F &amp; G</li><li>Engage in flexibility and stretching exercises. F</li><li>Create and lead an aerobic routine. F, G &amp;H</li><li>Maintain accurate fitness profiles. D ,E, &amp; F</li><li>Maintain an accurate nutritional log. D ,E, &amp; F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2310,
    "Title": "Fitness Walking ★",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of Walking for Fitness and Fitness terminology. A, C</li><li>Discuss wellness as a multi-dimensional concept. A, B</li><li>Understand the significance of maintaining healthy fitness levels. G</li><li>List and discuss the physiological and psychological benefits of exercise. A, B, C, G</li><li>Demonstrate knowledge of the health related components of physical fitness. B</li><li>Discuss the Health Related Physical Fitness Components Program. A, B, C, G</li><li>Discuss F I T T. A, B</li><li>Demonstrate knowledge of and engage in effective warm-up activities. A, B, C, D, E, F, G, H</li><li>Demonstrate knowledge of and engage in effective cool-down activities. A, H</li><li>Wear proper clothing and footwear for safe, comfortable cardiovascular, flexibility, and muscular strength workouts. H</li><li>Set appropriate goals for Walking and Fitness Activities based on self-knowledge and the FITT principles. A, C, F</li><li>Employ proper form during fitness walking. A</li><li>Calculate target heart rate. A</li><li>Locate and monitor exercising and resting heart rates. A</li><li>Define flexibility; understand why it is a health related component of physical fitness. B</li><li>Demonstrate knowledge of and engage in a variety of different stretching methods. A, B</li><li>Describe how to stretch safely. B, H</li><li>Demonstrate knowledge of safe practices while walking and participating in fitness activities. A, H</li><li>Formulate a personal program for lifetime fitness and wellness. A, B, C, D, G</li><li>Discuss basic cardiorespiratory fitness principles. A, B, G</li><li>Access government or educational websites for proper nutrition information. C</li><li>Evaluate a food label for nutritional and diet information.</li><li>Plan daily food intake based on My Plate and nutritional guidelines. C, D, F, G</li><li>Describe the acronym FITT for building cardiovascular fitness. A, B, C</li><li>Describe the Overload Principle. A</li><li>Describe the Principle of Progression .A</li><li>Describe the Principle of Specificity. A</li><li>Engage in bioelectrical impedance analysis. E</li><li>Describe the function and importance of protein in a well-balanced, nutritional diet. D, F</li><li>Describe the function and importance of fat in a well-balanced, nutritional diet. D, F, G</li><li>Describe the function and importance of carbohydrates in a well-balanced, nutritional diet. D, F, G</li><li>Describe the function and importance of water in a well-balanced, nutritional diet. D, F, G</li><li>Describe the function and importance of vitamins in al well balanced, nutritional diet. D, F, G</li><li>Employ the food guide pyramid in developing a health-eating plan. D, F, G</li><li>Engage in flexibility and stretching exercises. A &amp; B</li><li>Maintain an accurate nutritional log. E</li><li>Maintain an accurate fitness log. E</li><li>Engage in a cardiovascular fitness program. A, B, C, D, E, G</li><li>Participate in cardiovascular fitness assessments to establish baseline fitness levels and improvement. A, B, C, D, E, G</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2330,
    "Title": "Beginning Racquetball ★",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of racquetball etiquette. B</li><li>Demonstrate knowledge of racquetball terminology. C</li><li>Demonstrate knowledge of racquetball history. E</li><li>Demonstrate knowledge of how to score a racquetball game. I</li><li>Pick out the racquetball equipment necessary to maximize performance and safety. C</li><li>Perform using the proper forehand and backhand grips. A, F</li><li>Perform changing grips when necessary. A, F</li><li>Demonstrate knowledge of and employ proper form during the execution of forehand strokes. A, F</li><li>Employ proper form during the execution of backhand strokes. A, F</li><li>Employ proper form during the execution of a drive serve. A, F</li><li>Employ proper form during the execution of a Z serve. A, F</li><li>Employ proper form during the execution of a lob serve. A, F</li><li>Hit the ceiling ball return. A, F</li><li>Hit the pass shot return. A, F</li><li>Hit and demonstrate knowledge of the Kill Shot. A, F</li><li>Hit and demonstrate knowledge of the Pinch Shot. A, F</li><li>Hit and demonstrate knowledge of the Pass Shot. A, F</li><li>Hit and demonstrate knowledge of the Overhead shot. A.F</li><li>Hit and demonstrate knowledge of the Jam shot. A, F</li><li>Demonstrate knowledge of Back wall Play. A,F</li><li>Employ proper footwork during the execution of racquetball shots. A, F</li><li>Execute singles’ strategy during game play. A, F</li><li>Execute doubles strategies during game play. A, F</li><li>Play singles and doubles games employing a variety of racquetball shots, safety, rules, and scoring. A, F</li><li>Demonstrate knowledge of racquetball rules B,C</li><li>D Demonstrate knowledge of the racquetball court. A</li><li>Analyze, detect and correct errors in performance. F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2335,
    "Title": "Prevention &amp; Care of Athletic Injuries ★",
    "Learning_Outcomes": "<ol><li>Describe the concepts and uses of injury and illness surveillance relevant to athletic training. A, E</li><li>Identify and describe measures used to monitor injury prevention strategies. A, E</li><li>Identify modifiable/non-modifiable risk factors and mechanisms for injury and illness. A, E</li><li>Explain how the effectiveness of a prevention strategy can be assessed using clinical outcomes, surveillance, or evaluation data. A, E</li><li>Explain the precautions and risk factors associated with physical activity in persons with common congenital and acquired abnormalities, disabilities, and diseases. A, C, E</li><li>Summarize the epidemiology data related to the risk of injury and illness associated with participation in physical activity. A, E</li><li>Implement disinfectant procedures to prevent the spread of infectious diseases and to comply with Occupational Safety and Health Administration (OSHA) and other federal regulations. A, D, E</li><li>Identify the necessary components to include in a pre-participation physical examination as recommended by contemporary guidelines. A, D, E</li><li>Explain the role of the pre-participation physical exam in identifying conditions that might predispose the athlete to injury or illness. A, D, E</li><li>Explain the principles of environmental illness prevention programs to include acclimation and conditioning, fluid and electrolyte replacement requirements, proper practice and competition attire, hydration status, and environmental assessment. A, C, E</li><li>Summarize current practice guidelines related to physical activity during extreme weather conditions. A, E</li><li>Summarize current practice guidelines related to physical activity during extreme weather conditions. A, E</li><li>Summarize the basic principles associated with the design, construction, fit, maintenance, and reconditioning of protective equipment, including the rules and regulations established by the associations that govern its use. A, B, C, D, E</li><li>Summarize the principles and concepts related to the fabrication, modification, and appropriate application or use of orthotics and other dynamic and static splints. F, G, H, I J, K, L, M, N</li><li>Fit standard protective equipment following manufacturers’ guidelines. F, G, H, I J, K, L, M, N</li><li>Apply preventive taping and wrapping procedures, splints, braces, and other special protective devices. F, G, H, I J, K, L, M, N</li><li>Describe the role of nutrition in enhancing performance, preventing injury or illness, and maintaining a healthy lifestyle. A, C, E</li><li>Describe contemporary nutritional intake recommendations and explain how these recommendations can be used in performing a basic dietary analysis and providing appropriate general dietary recommendations. A, C, E</li><li>Describe current guidelines for proper hydration and explain the consequences of improper fluid/electrolyte replacement. A, C, E</li><li>Describe nutritional principles that apply to tissue growth and repair. A, C, E</li><li>Describe changes in dietary requirements that occur as a result of changes in an individual’s health, age, and activity level. A, C, E</li><li>Identify the foods and fluids that are most appropriate for pre-activity, activity, and recovery meals/snacks. A, C, E</li><li>Explain the known usage patterns, general effects, and short- and long-term adverse effects for the commonly used dietary supplements, performance enhancing drugs, and recreational drugs. A, C, E</li><li>Identify which therapeutic drugs, supplements, and performance-enhancing substances are banned by sport and/or workplace organizations in order to properly advise clients/patients about possible disqualification and other consequences. A, C, E</li><li>Describe the normal anatomical, systemic, and physiological changes associated with the lifespan. A, C, E</li><li>Identify the common congenital and acquired risk factors and causes of musculoskeletal injuries and common illnesses that may influence physical activity in pediatric, adolescent, adult, and aging populations. A, C, E</li><li>Recognize the signs and symptoms of catastrophic and emergent conditions and demonstrate appropriate referral decisions. A, B, C, E</li><li>Explain the legal, moral, and ethical parameters that define the athletic trainer’s scope of acute and emergency care. A, B, C, E</li><li>Select and apply appropriate splinting material to stabilize an injured body area.</li><li>Determine the proper transportation technique based on the patient’s condition and findings of the immediate examination. F, G, H, I J, K, L, M, N</li><li>Compare and contrast contemporary theories of pain perception and pain modulation.</li><li>Describe the laws of physics that (1) underlay the application of thermal, mechanical, electromagnetic, and acoustic energy to the body and (2) form the foundation for the development of therapeutic. F, G, H, I J, K, L, M, N</li><li>Analyze gait and select appropriate instruction and correction strategies to facilitate safe progression to functional gait pattern. F, G, H, I J, K, L, M, N</li><li>Inspect therapeutic equipment and the treatment environment for potential safety hazards.</li><li>Explain the federal, state, and local laws, regulations and procedures for the proper storage, disposal, transportation, dispensing (administering where appropriate), and documentation associated with commonly used prescription and nonprescription medications. D</li><li>Describe the common routes used to administer medications and their advantages and disadvantages. F, G, H, I J, K, L, M, N</li><li>Clinically evaluate and manage a patient with an emergency injury or condition to include the assessment of vital signs and level of consciousness, activation of emergency action plan, secondary assessment, diagnosis, and provision of the appropriate emergency care. F, G, H, I J, K, L, M, N</li><li>Select, apply, evaluate, and modify appropriate standard protective equipment, taping, wrapping, bracing, padding, and other custom devices for the client/patient in order to prevent and/or minimize the risk of injury to the head, torso, spine, and extremities for safe participation in sport or other physical activity. F, G, H, I J, K, L, M, N</li><li>Explain the role and function of state athletic training practice acts and registration, licensure, and certification agencies including (1) basic legislative processes for the implementation of practice acts, (2) rationale for state regulations that govern the practice of athletic training, and (3) consequences of violating federal and state regulatory acts. B, D</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2340,
    "Title": "Soccer ★",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of Soccer etiquette. B,D</li><li>Demonstrate knowledge of Soccer terminology. C</li><li>Demonstrate knowledge of the history of Soccer. C</li><li>Demonstrate knowledge of how to score a Soccer game. E</li><li>Pick out the proper soccer equipment necessary to maximize performance. G</li><li>Dribble soccer ball with either foot. A, F,</li><li>Control the soccer ball using all parts of the foot. A, F,</li><li>Pass/kick with inside, outside and instep of foot. A, F,</li><li>Control ball with specific areas/parts of body. A, F</li><li>Head the ball effectively. A, F</li><li>Effectively shoot on goal. A, F</li><li>Understand role and function of each position on field. A, F</li><li>Identify markings on field. (Center circle, penalty circle, penalty area, and goalkeeper area). C,</li><li>Understand general rules, how to start game, scoring, offside, fouls and misconduct, direct and indirect kick, penalty kicks, throw-ins, goal kicks and corner kicks. B, C,D</li><li>Tackle the ball effectively C,D</li><li>Effectively mark opponent C,D</li><li>Execute a legal throw in C,D</li><li>Implement the offside trap C,D</li><li>Understand the 2-3-5, 4-3-3, and 5-3-2 system of play A, D</li><li>Demonstrate a knowledge of Soccer attacking principles</li><li>Demonstrate a knowledge of Soccer defending principle</li><li>Demonstrate how to shield the ball effectively C,D</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2435,
    "Title": "First Aid, Safety &amp; CPR ★",
    "Learning_Outcomes": "<ol><li>Define key terms related to first aid and emergency care. (A,C)</li><li>Recognize when an emergency has occurred. (A,B,C)</li><li>Classify an emergency according to signs, symptoms, and conditions.(A)</li><li>Demonstrate the ability to make appropriate care decisions for the emergency victim. (A,C)</li><li>Correctly demonstrate the technique for adult, child, and infant airway obstruction (conscious and unconscious). (A,C)</li><li>Correctly demonstrate technique for adult, child, and infant CPR. (A,C)</li><li>Correctly demonstrate the technique for utilizing an AED for adult, child, and infant. (A,C)</li><li>Describe the Emergency Response System. (A,C)</li><li>Integrate concepts and skills necessary to provide emergency first aid care from assessment to implementation until professional medical help is available. (A,C)</li><li>Relate lifestyle to prevention of lifestyle-related illness and injury. (A,B,C)</li><li>Discuss the legal, moral, and ethical issues related to emergency care. (A)</li><li>L. Recognize possible safety issues (personal, group, community). (A, B, C)</li><li>M. Plan methods to increase their personal safety and the safety of others. (A,C)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2440,
    "Title": "Beginning Tennis ★",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of tennis etiquette. B</li><li>Demonstrate knowledge of tennis terminology. C</li><li>Demonstrate knowledge of tennis history. E</li><li>Demonstrate knowledge of how to score a tennis match. D</li><li>Pick out the Tennis equipment necessary to maximize performance. F</li><li>Perform using the proper forehand and backhand grips. A, F</li><li>Perform changing grips when necessary. A, F</li><li>Demonstrate knowledge of and employ proper form during the execution of forehand strokes. A, F</li><li>Employ proper form during the execution of backhand strokes. A, F</li><li>Employ proper form during the execution of an overhead serve. A, F</li><li>Hit forehand strokes off of the ball machine across the net and into the singles court. A, F</li><li>Hit backhand strokes off of the ball machine across the net and into the singles court. A, F</li><li>Hit serves into the proper service box. A, F</li><li>Demonstrate knowledge of the volley. A, F</li><li>Demonstrate knowledge of the lob. A, F, I</li><li>Demonstrate knowledge of the overhead smash. A, F</li><li>Employ proper footwork during the execution of tennis strokes. A, F</li><li>Execute singles’ strategy during set play. A, F</li><li>Execute doubles strategies during set play. A, F</li><li>Play singles and doubles sets employing a variety of tennis strokes, safety, rules, and scoring. A, F</li><li>Demonstrate knowledge of tennis rules. D</li><li>Demonstrate knowledge of the Tennis court. G</li><li>Analyze, detect and correct errors in performance. F</li><li>Serve into the proper service box. A, F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2450,
    "Title": "Intermediate Tennis ★",
    "Learning_Outcomes": "<ol><li>Improve existing basic skills and develop new skills on an intermediate skill level of tennis play. A</li><li>Increase understanding of singles and doubles play and their strategies. D</li><li>Demonstrate knowledge of the rules, terminology and etiquette of the game in order to manage a competitive game situation and tournament protocol. B, C, D</li><li>Develop the ability to demonstrate and analyze tennis skills, as well as detect and correct errors in performance. E, H</li><li>Apply rules, terminology, and etiquette of tennis in game situation. A, D</li><li>Apply strategy to singles and doubles play. A, D, G</li><li>Demonstrate proper grips and footwork. A, E</li><li>Discuss the effects and advantages of topspin, back spin, and flute strokes. A, E</li><li>Discuss and execute strokes using linear momentum and rotary momentum. A, E</li><li>Execute the various spins on the ball during play. A, E,</li><li>Demonstrate the continental grip for topspin serves. A, E</li><li>Describe the differences and perform effectively both the first and second serve. A, E</li><li>Perform a topspin serve and a slice serve. A, E</li><li>Demonstrate where to stand to receive a serve. A, E</li><li>Discuss and demonstrate serve receive technique. A, E</li><li>Discuss and demonstrate how and when to go to the net during play. A, E</li><li>Perform forehand and backhand ground strokes down the line and cross-court varying speed and spin. A, E</li><li>Perform and effective overhead shot. A, E</li><li>Perform and describe the differences in and offensive lob and a defensive lob. A, E</li><li>Discuss when to use each type of lob. E</li><li>Perform and discuss the drop shot and drop volley. A, E</li><li>Discuss singles strategy. D</li><li>Play singles utilizing effective and diverse strategies. A, D</li><li>Discuss doubles strategy. D</li><li>Play doubles utilizing effective and diverse strategies. A, D</li><li>Discuss how to handle stress before a match. F</li><li>Discuss different equipment and the advantages of different equipment. A</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2510,
    "Title": "Volleyball ★",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of volleyball etiquette. B</li><li>Demonstrate knowledge of volleyball terminology. C</li><li>Demonstrate knowledge of the history of volleyball. E</li><li>Demonstrate knowledge of how to score a volleyball match. D</li><li>Pick out the volleyball equipment necessary to maximize performance. G</li><li>Serve employing proper overhead technique. A, F, I</li><li>Employ proper form during the execution of a Spike. A, F, I</li><li>Employ proper form during the execution of a Block. A, F, I</li><li>Employ proper form during the execution of volleyball passes. A, F, I</li><li>Play Volleyball employing a variety of volleyball skills, safety, rules, and scoring. A, B, D, F, G, H, I</li><li>Use situational appropriate skills such as the forearm pass, overhead pass, spike, and block. A, F, H, I</li><li>Analyze a defensive/offensive situation and use the appropriate offensive/defensive response. A, F, H, I</li><li>Use appropriate defensive skills to play the ball correctly. A, F, H, I</li><li>Use appropriate offensive skills to play the ball correctly. A, F,H, I</li><li>Recognize and interpret volleyball official’s signals. C, D</li><li>Demonstrate knowledge of basic rules, and strategies. D, H</li><li>Become a team player. A, B, F, H, I</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2520,
    "Title": "Weight Training ★",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of Weight Training terminology. (C)</li><li>Employ body fat analysis data and girth measurements to set realistic attainable goals. (I, N, P)*</li><li>Demonstrate knowledge of the benefits of Weight Training. (N, O)</li><li>Demonstrate knowledge and execute proper goal setting in Weight Training. (I, P)</li><li>Formulate a personal program based on goals in Weight Training, which develop all major groups. (D, I, P)</li><li>Employ proper form during the execution of weight resistance exercises. (E, F)</li><li>Demonstrate knowledge of safety in Weight Training. (B)</li><li>Demonstrate knowledge of proper warm-up and cool-down. (A)</li><li>Demonstrate knowledge of flexibility and proper stretching. (I, K)</li><li>Demonstrate knowledge of advantages and disadvantages of free weights. (E, F)</li><li>Demonstrate knowledge of advantages and disadvantages of machines. (E, F)</li><li>Demonstrate knowledge of muscle structure and function. (C)</li><li>Analyze joint actions and muscle isolation. (C)</li><li>Demonstrate knowledge of proper nutrition. (G, H, N)</li><li>Demonstrate knowledge of basic cardiovascular fitness. (I, J, M, O)</li><li>Demonstrate knowledge of circuit weight training. (A, J, M, N)</li><li>Demonstrate knowledge of advanced weight training. (C, D)</li><li>Execute proper safety techniques in Weight Training. (B)</li><li>Employ proper warm-up and cool-down in Weight Training. (A)</li><li>Employ proper procedures in stretching and flexibility in Weight Training. (K)</li><li>Develop and execute a circuit weight training program. (A, F, J, M)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED ",
    "Code": 2610,
    "Title": "Intermediate Volleyball",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of volleyball etiquette. B</li><li>Demonstrate knowledge of volleyball terminology. C</li><li>Demonstrate knowledge of the history of volleyball. E</li><li>Demonstrate knowledge of how to score a volleyball match. D</li><li>Pick out the volleyball equipment necessary to maximize performance. G</li><li>Serve employing proper overhead technique. A, F, I</li><li>Employ proper form during the execution of a spike. A, F, I</li><li>Employ proper form during the execution of a block. A, F, I</li><li>Employ proper form during the execution volleyball passes. A, F, I</li><li>Play Volleyball employing a variety of volleyball skills, safety, rules, and scoring. A, B, D, F, G. H, I</li><li>Use situational appropriate skills such as the forearm pass, overhead pass, spike, and block. A, F H, I</li><li>Analyze a defensive/offensive situation and use the appropriate offensive/defensive response. A, F, H, I</li><li>Use appropriate defensive skills to play the ball correctly. A, F, H, I</li><li>Use appropriate offensive skills to play the ball correctly. A, F, H, I</li><li>Recognize and interpret volleyball official’s signals. C, D</li><li>Demonstrate knowledge of basic rules, and strategies. D, H</li><li>Function effectively as a team member. A, B, F, H, I</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED  ",
    "Code": 1010,
    "Title": "Lifetime Fitness ★",
    "Learning_Outcomes": "<ol><li>Understand medical considerations before embarking on a physical fitness program. B</li><li>Understand wellness as a multi-dimensional concept. A&amp;B</li><li>Understand the significance of maintaining healthy fitness levels. G</li><li>Define and demonstrate an understanding of hypokinetic conditions. C</li><li>Demonstrate knowledge of the health related components of physical fitness. B</li><li>Understand how to use self-management skills to adhere to healthy lifestyle behaviors. A</li><li>Demonstrate knowledge of heat-related problems. H</li><li>Demonstrate knowledge of and engage in effective warm-up activities. A</li><li>Demonstrate knowledge of and engage in effective cool-down activities. A</li><li>Wear proper clothing and footwear for safe, comfortable cardiovascular, flexibility, and muscular strength workouts. H</li><li>Describe the metabolic benefits of physical fitness. A&amp;G</li><li>Describe the psychological benefits of physical fitness. A&amp;G</li><li>Describe the four primary risk factors associated with coronary heart disease. A</li><li>Calculate target heart rate. A</li><li>Locate and monitor exercising and resting heart rates. A</li><li>Define flexibility; understand why it is a health related component of physical fitness. B</li><li>Demonstrate knowledge of and engage in a variety of different stretching methods. A &amp; B</li><li>Describe how to stretch safely. B &amp;H</li><li>Describe the benefits of muscle fitness. B</li><li>Demonstrate knowledge of and engage in a progressive resistance exercise program. A</li><li>Describe the adverse effects of anabolic steroid use. H</li><li>Describe how to prevent injury while engaging in a progressive resistance exercise program. H</li><li>Describe questionable exercises and safe alternatives. H</li><li>Describe the acronym FITT for building cardiovascular fitness. A B &amp; C</li><li>Describe the Overload Principle. A</li><li>Describe the Principle of Progression .A</li><li>Describe the Principle of Specificity. A</li><li>Describe the Principle of Reversibility. A</li><li>Describe the Principle of Diminishing Returns. A</li><li>Use the physical activity pyramid in developing a physical fitness plan. B &amp; G</li><li>Demonstrate knowledge of self-planning skills for lifetime physical activity. B&amp; G</li><li>Demonstrate knowledge of physical activity, fitness and disease prevention and treatment. G</li><li>Demonstrate knowledge of lifestyle physical activity. A</li><li>Describe somatotyping. C</li><li>Engage in bioelectrical impedance analysis. E</li><li>Engage in skinfold body-fat analysis .E</li><li>Describe the RICE acronym to remember first aid treatment. H</li><li>Describe BMR as a factor in maintaining a healthy body composition. B</li><li>Describe the function and importance of protein in a well-balanced, nutritional diet. D&amp;F</li><li>Describe the function and importance of fat in a well-balanced, nutritional diet. D, F&amp;G</li><li>Describe the function and importance of carbohydrates in a well-balanced, nutritional diet. D,F,&amp; G</li><li>Describe the function and importance of water in a well-balanced, nutritional diet. D,F,&amp; G</li><li>Describe the function and importance of vitamins in al well balanced, nutritional diet. D,F,&amp; G</li><li>Employ the food guide pyramid in developing a health-eating plan. D,F,&amp; G</li><li>Engage in flexibility and stretching exercises. A &amp; B</li><li>Maintain accurate fitness profiles. E</li><li>Maintain an accurate nutritional log.</li><li>Maintain an accurate fitness log. E</li><li>Demonstrate knowledge of and engage in stress management, relaxation, and time management techniques. A</li><li>Engage in a cardiovascular fitness program. A,B,C,D, E &amp;G</li><li>Participate in cardiovascular fitness assessments to establish baseline fitness levels and improvement. A,B,C,D, E &amp;G</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED  ",
    "Code": 1100,
    "Title": "Concepts of Wellness ♦",
    "Learning_Outcomes": "<ol><li>Understand medical considerations before participating in a physical fitness program. A</li><li>Develop an individual wellness profile. A</li><li>Describe the dimensions of wellness. A</li><li>Describe the behaviors that are part of lifetime fitness and wellness. A</li><li>Describe how much exercise is recommended for developing health and fitness. A E F G H</li><li>Identify the components of physical fitness and how each component affects wellness. A B E F G H</li><li>Describe the principles involved in designing a well-rounded exercise program. B C E F G H</li><li>Define Fat-Free mass, essential fat and nonessential fat and describe their functions in the body. B</li><li>Explain how body composition affects overall health and wellness. B I</li><li>Describe how body mass index, body composition, and body fat distribution are measured and assessed. B</li><li>Explain how to determine recommended body weight and body fat distribution. B</li><li>Describe the controllable and uncontrollable risk factors associated with cardiovascular disease. C D</li><li>Discuss the major forms of cardiovascular disease and how they develop. C</li><li>List the steps you can take to lower your personal risk of developing cardiovascular disease. C D</li><li>List the major effects and benefits of cardio respiratory endurance exercise. D</li><li>Explain how cardio respiratory endurance is measured and assessed. G</li><li>Describe how frequency, intensity, time, and type of exercise affect the development of cardio respiratory endurance. D G</li><li>Define muscular strength and endurance and describe how they relate to wellness. B E G</li><li>Explain how muscular strength and endurance can be assessed. E G</li><li>Apply the FITT principle to create a safe and successful strength-training program. E G</li><li>Explain how to safely perform common strength training exercises using free weights and weight machines. E</li><li>Describe the potential benefits of flexibility and stretching exercises. F</li><li>Explain the different types of stretching exercises and how they affect muscles. F</li><li>Describe the intensity, duration, and frequency of stretching exercises that will develop the most flexibility with the lowest risk of injury. F G</li><li>Explain the steps for putting together a successful personal fitness program. E F G</li><li>Describe strategies that help maintain a fitness program over the long term. G N O P</li><li>Explain how to use food labels. H I</li><li>Put together a personal nutrition plan. H I</li><li>Explain the health risks associated with being overweight and obesity[PD1]. I N O P</li><li>Describe lifestyle factors that contribute to weight gain and loss. I N P</li><li>Design a personal plan for successfully managing body weight. H I</li><li>List common sources of stress. J</li><li>Describe techniques for preventing and managing stress[PD2]. A J N O P</li><li>Put together a plan for successfully managing stress. A J N O P</li><li>Discuss some of the causes[PD3] of cancer and how they can be avoided or minimized. K</li><li>Describe the signs and symptoms of cancer in its early stages. K</li><li>List specific actions you can take to lower your risk of cancer. C D H I J K L M N O P</li><li>Define and discuss the concepts of addictive behavior, substance abuse, and substance dependence. L</li><li>Explain the significance of alcohol use on individuals, families and society as a whole. L N O P</li><li>Explain the impact of tobacco use on both the individual and society. L N O P</li><li>Discuss the symptoms, risks and treatments of STDs. M</li><li>List strategies for protecting yourself from STDs. M</li><li>Assess the relationship between global health issues and personal health. O</li><li>List the steps for creating and maintaining an effective behavior change program. A B D E F G H I J K L M N O</li><li>Define environmental health and identify the causes and effects of pollution and the impact on self, others and the environment. Identify individual behavior changes to improve environmental health. K N O P</li><li>Describe the impact of population growth on the environment. K N O P</li><li>Explain what individuals can do to promote healthy aging. A B C D H I L N O P</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED  ",
    "Code": 2660,
    "Title": "Wilderness Orienteering",
    "Learning_Outcomes": "<ol><li>Build the skills to competently read and interpret the basic information found on the 7.5’ series topographic map. A</li><li>Guide students toward the effective use of an orienteering compass with a high degree of accuracy. A</li><li>Build the skills to demonstrate the ability to use a map and a compass together. A&amp; B</li><li>Enhance the student’s knowledge of the use of improvising techniques to employ during adverse conditions. A, B&amp; E</li><li>Build the skills to demonstrate techniques to accurately arrive at a given destination. D &amp; E</li><li>Recognize map symbols. A,B,&amp; C</li><li>Calculate elevation by use of contour lines. A &amp; B</li><li>Apply correct terminology with respect to the sport of orienteering A &amp; B &amp; E</li><li>Calculate within 10 square meters the location of an object using the universal transverse mercator grid. A &amp;B</li><li>Calculate a bearing within 1 degree. A &amp; B</li><li>Apply skills to locate destinations in Cades Cove. A,B,C,D,E, &amp;F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHED    ",
    "Code": 1001,
    "Title": "Orientation to Sport Management ★",
    "Learning_Outcomes": "<ol><li>List and discuss various employment/career opportunities resulting from a degree in Sport Management. B, D, E</li><li>Formulate their personal philosophy of Sport Management. A, B, C, D, E</li><li>Participate in fieldwork experiences in Sport Management. E</li><li>Write a report on fieldwork experiences in Sport Management. D</li><li>Write a report on interviews with Sport Management specialists in four different career areas. B, C</li><li>Give an oral report concerning their interviews with Sport Management professionals. B, C, D</li><li>Lead a discussion concerning their interviews. B, C, D</li><li>Give an oral report on their fieldwork experience. B, E</li><li>Lead a discussion about their fieldwork experience. B, C, D, E</li><li>Access the Internet and other educational resource venues for information on Sport Management. A, B, D</li><li>Write a summary of research findings on one selected special topic. A, B, C, D</li><li>Discuss special topics in Sport Management. A, B, C, D, E</li><li>Interact with Sport Management peers and Sport Management specialty speakers during class. C</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHYS ",
    "Code": 1070,
    "Title": "Concepts of Physics ♦",
    "Learning_Outcomes": "<ol><li>Perform basic calculations pertaining to motion, force, acceleration, momentum, work and energy, gravity, projectiles, thermal energy, heat transfer, sound and light. A-E</li><li>Understand the fundamental physical&nbsp;concepts of the above topics. A-E</li><li>Explain Newton’s Laws of Motion. A</li><li>Differentiate between temperature change heat transfer and phase change heat transfer. B</li><li>Differentiate between direct current (DC) and alternating current (AC). C</li><li>Understand the cause of magnetism and the application of magnetic field. C</li><li>Be able to define different types and classification of waves. D</li><li>Explain the cause of light emitting in different colors. D</li><li>Define and explain the difference between reflection and refraction phenomena. D</li><li>Explain the properties of light. D</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHYS ",
    "Code": 2110,
    "Title": "Calculus Based Physics I ♦ ★",
    "Learning_Outcomes": "<ol><li>Apply learned physics concepts to theoretical and practical situations. (A, through F)</li><li>Apply learned physics concepts to estimate an unknown parameter in a given practical situation by using the physics principle(s) involved. (A, through F)</li><li>Have an understanding of energy calculation to estimate energy cost in a given situation. (A, C, D, E, and F)</li><li>Calculate and analyze the resultant force of a group of point charges on a single charge. (A, C, and E)</li><li>Calculate the potential and potential energy of point charges and parallel-plates capacitors. (A, C, and E)</li><li>Calculate the charge, voltage, capacity, and energy stored in capacitors (E).</li><li>Apply Ohm's Law to simple parallel and series circuit problems to calculate the current through, voltage across, and energy consumption associated with each element. (A, C, and E)</li><li>Apply Kirchhoff's rules to multi-loop circuits to solve for unknowns. (A, C, and E)</li><li>Solve RC circuit problems and explain the effect of the time-constant of such circuits on the speed of the charging processes. (A, C, and E)</li><li>Explain magnetism and its cause, and calculate the force exerted by a uniform magnetic field on a moving charge. (A, C, and E)</li><li>Apply Gauss’ Law to derive the electric field formulae for symmetric charge distributions.</li><li>Solve magnetic induction problems and apply Faraday's law to calculate the emf produced by an induced magnetic flux. (A, C, and E)</li><li>Solve problems involving capacitive reactance &amp; inductive reactance in AC circuits. (A, C, &amp; E)</li><li>Solve simple RCL series circuit problems. (A, C, and E)</li><li>Explain electromagnetic spectrum and the relation between wave speed, frequency, and wavelength. (A, C, and E)</li><li>Write down Maxwell’s equations and interpret the concept of each. (A, C, and E)</li><li>Have an understanding of the electromagnetic energy transport in space and the Poynting vector. (C and E)</li><li>Apply sophomore level mathematics in the derivation of the electricity and magnetism formulae. (C and E)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHYS  ",
    "Code": 2010,
    "Title": "Non-Calculus Physics I  ♦ ★",
    "Learning_Outcomes": "<ol><li>Apply learned physics concepts to theoretical and practical situations. (A, through F)</li><li>Apply learned physics concepts to estimate an unknown parameter in a given practical situation by using the physics principle(s) involved. (A, through F)</li><li>Recognize and identify the use of equipment and machines based on the units on their gauges<strong>.</strong> (A and F)</li><li>Have an understanding of energy calculation to estimate energy cost in a given situation. (A, C, D, E, and F)</li><li>Perform necessary conversions between Metric and non-Metric units and systems. (A and E)</li><li>Apply the kinematics equations to describe motion. (A, C, and E)</li><li>Apply the kinetics equation in force-motion situations<strong>.</strong> (A, C, and E)</li><li>Solve circular motion problems involving centripetal acceleration and force. (A, C, and E)</li><li>Calculate the work done, energy involved, and energy conversions in a given problem<strong>.</strong> (A, C, and E)</li><li>Solve problems involving rotational motion due to an applied torque<strong>.</strong> (A, C, and E)</li><li>Solve temperature and heat problems with or without phase changes<strong>.</strong> (A, C, and E)</li><li>Solve problems involving thermal expansion in solids, fluids, and gases<strong>.</strong> (A, C, and E)</li><li>Solve density, pressure, and liquid pressure, problems as well as apply Pascal’s and Archimedes’ principles in buoyancy and hydraulic equipment problems<strong>.</strong> (A, C, and E)</li><li>Have the knowledge to resolve vectors into components to simplify problems<strong>.</strong> (A, C, and E)</li><li>Have an understanding of the law and applications of the linear momentum conservation. (A, C, and E)</li><li>Apply the ideal gas law to problems including isometric, isothermal, and isobar processes. (A, C, and E)</li><li>Have an understanding of Oscillatory motion, Wave motion, frequency, angular frequency, period, amplitude, and wave speed and apply them to simple problems that involve such parameters. (A, through F)</li><li>Apply the resonance of sound waves in open or closed pipes to measure the speed of sound. (A, C, and E)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHYS  ",
    "Code": 2020,
    "Title": "Non-Calculus Physics II ♦ ★",
    "Learning_Outcomes": "<ol><li>Apply learned physics concepts to theoretical and practical situations. (A, through F)</li><li>Apply learned physics concepts to estimate an unknown parameter in a given practical situation by using the physics principle(s) involved. (A, through F)</li><li>Recognize and identify the use of equipment and machines based on the units on their gauges. (A and F)</li><li>Have an understanding of energy calculation to estimate energy cost in a given situation. (A, C, D, E, and F)</li><li>Perform necessary conversions between Metric and non-Metric units and systems. (A and E)</li><li>Calculate and analyze the resultant force of a group of point charges on a single charge. (A, C, and E)</li><li>Calculate the potential and potential energy of point charges and parallel-plates capacitors. (A, C, and E)</li><li>Calculate the charge, voltage, capacity, and energy stored in capacitors (E).</li><li>Apply Ohm's Law to simple parallel and series circuit problems to calculate the current through, voltage across, and energy consumption associated with each element. (A, C, and E)</li><li>Apply Kirchhoff's rules to multi-loop circuits to solve for unknowns. (A, C, and E)</li><li>Solve RC circuit problems and explain the effect of the time-constant of such circuits on the speed of the charging process. (A, C, and E)</li><li>Explain magnetism and its cause, and calculate the force exerted by a uniform magnetic field on a moving charge. (A, C, and E)</li><li>Solve magnetic induction problems and apply Faraday's law to calculate the emf produced by an induced magnetic flux. (A, C, and E)</li><li>Solve problems involving capacitive reactance and inductive reactance in AC circuits. (A, C, and E)</li><li>Solve geometric optics problems by making measurements in mirrors, lenses, and transparent media. (A, C, and E)</li><li>Have an understanding of apparent depth, total reflection, image in mirrors and lenses, refractor telescopes, the optics of human eye lens, and the dispersion phenomenon. (A, C, and E)</li><li>Have an understanding of the wave nature of light by experimenting the interference phenomenon and apply the interference concept in measuring the wavelength of an unknown source. (A, C, and E)</li><li>Have an understanding of diffraction, diffraction patterns, and the use of diffraction gratings in wavelength measurements. (A, C, and E)</li><li>Have an understanding of the particle-like behavior of light, basic quantum mechanics, and wave-particle duality. (A, C, and E)</li><li>Have an understanding of the nature of atoms and how empty they are compared to condensed matter, the way Bohr model is used to measure the radius of hydrogen atom, particles and waves, light generation, the photoelectric effect, Compton Effect, how particles have wavelike behavior, and vice versa. (A through F)</li><li>Have an understanding of radioactivity and its cause, isotopes, radiation types, radioactive decay, C-14 dating, nuclear energy, reactors, and the mathematics of radioactive decay. (A through F)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PHYS  ",
    "Code": 2120,
    "Title": "Calculus Based Physics II ♦ ★",
    "Learning_Outcomes": "<ol><li>Apply learned physics concepts to theoretical and practical situations. (A, through F)</li><li>Apply learned physics concepts to estimate an unknown parameter in a given practical situation by using the physics principle(s) involved. (A, through F)</li><li>Have an understanding of energy calculation to estimate energy cost in a given situation. (A, C, D, E, and F)</li><li>Apply calculus to obtain equations of oscillatory motion, velocity and acceleration. (A, C, and E)Calculate the potential and potential energy of point charges and parallel-plates capacitors. (A, C, and E)</li><li>Understand waves, wavelength, frequency, and wave speed. (A, C, D, E, and F)</li><li>Apply calculus to derive the energy transport by waves (E).</li><li>Have an understanding of standing and traveling waves, their superposition, resonance, and application. (A, C, and E)</li><li>Recognize the form of wave equation and understand its verification. (A, C, and E)</li><li>Apply the resonance concept in the measurement of waves speed. (A, C, and E)</li><li>Apply the concept of sound waves resonance in pipes to measure the speed of sound. (A, C, and E)</li><li>Learn how Doppler Effect is used in radars to measure the speed of a moving object. (A, C, and E)</li><li>Have an understanding of sound energy distribution in air as well as its intensity level. (A, C, and E)</li><li>Have an understanding of the straight line motion of light by learning how light reflects and refracts in mirrors and transparent media. (A, C, and E)</li><li>Solve geometric optics problems by making measurements in mirrors, lenses, and transparent media. (A, C, and E)</li><li>Have an understanding of apparent depth, total reflection, image in mirrors and lenses, refractor telescopes, the optics of human eye lens, and the dispersion phenomenon. (A, C, and E)</li><li>Have an understanding of the wave nature of light by experimenting the interference phenomenon and apply the interference concept in measuring the wavelength of an unknown source. (A, C, and E)</li><li>Have an understanding of diffraction, diffraction patterns, and the use of diffraction gratings in wavelength measurements. (A, C, and E)</li><li>Apply Huygen’s principle (wave-front behavior of waves) to derive the Snell’s refraction law. (C and E)</li><li>Have an understanding of how Bragg’s formula is used to measure interatomic distances. (A, C, and E)</li><li>Have an understanding of Einstein’s Theory of Relativity and how motion at high speeds affects our perception of time and length measurements. (A through F)</li><li>Have an understanding of how Michelson’s experiment proved that light in vacuum travels at the same speed in all directions regardless of how fast its source moves. (A through F)</li><li>Have an understanding of time dilation, length contraction, the Relativistic Doppler Effect, and the Twins Paradox. (A through F)</li><li>Have an understanding of the nature of atoms and how empty they are compared to condensed matter, the way Bohr model is used to measure the radius of hydrogen atom, particles and waves, light generation, the photoelectric effect, Compton Effect, how particles have wavelike behavior, and vice versa. (A through F)</li><li>Have an understanding of the recent development in quantum mechanics and the behavior of the subatomic particles by learning electron diffraction, Shroedinger’s Wave equation, and Heisenberg Uncertainty Principle. (A through F)</li><li>Have an understanding of radioactivity and its cause, isotopes, radiation types, radioactive decay, C-14 dating, nuclear energy, reactors, and the mathematics of radioactive decay. (A through F)</li><li>Have an understanding of the building blocks of the subatomic particle and how electron, protons, neutrons, and other particles are formed by quarks. (A through F)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PSCI  ",
    "Code": 1060,
    "Title": "Concepts of Physical Science",
    "Learning_Outcomes": "<ol><li>Use appropriate methods and equipment for making observation and measurements in a laboratory setting. (A, C, F)</li><li>Demonstrate problem-solving ability with emphasis on word problems and performance of mathematical calculations pertaining to unit conversions, significant figures, and quantitative relationships. (C, D, E)</li><li>Apply the fundamental chemical concepts including atoms, subatomic particles, formation of ions and molecules by identifying and writing formulas and other chemical notation. (A)</li><li>Identify nuclear particles and balance nuclear reactions. (A)</li><li>Differentiate between acid-base theories, distinguish between strong vs. weak acids and bases, and understand their reactions. (A, C)</li><li>Compare and contrast properties of the three phases of matter utilizing the particulate nature of matter and basic kinetic molecular theory. (A, C)</li><li>Label bond type(s) for an element or compound and describe molecular type. (A, B, C)</li><li>Perform basic mathematical calculations pertaining to motion, force, acceleration, momentum, work and energy, thermal energy, sound and light. (D, E)</li><li>Recall and apply the fundamental physical concept of physics topics described in the state standards. (E)</li><li>Differentiate among the electrical current and related laws. (E)</li><li>Describe magnetism and its law. (E)</li><li>Differentiate among wave types. (E)</li><li>Explain the basis of color. (E)</li><li>Describe the properties of light. (E)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PSYC ",
    "Code": 1030,
    "Title": "Introduction to Psychology ♦ ★",
    "Learning_Outcomes": "<ol><li>Reproduce examples of research method terminology. A, E</li><li>Recall founders and goals or perspectives of psychology. A, C</li><li>Evaluate components of an attitude and assess factors in attitude development. A,B, G</li><li>Discuss ethical considerations and guidelines for psychological research. E</li><li>Describe the structure of a neuron, the process of neuron transmission, parts of the brain, and techniques for measuring brain structure and function. B</li><li>Discuss factors in the process of perception. B, G</li><li>Distinguish between the elements of the sleep process and critique theories of dreams. A, B, C</li><li>Differentiate components of classical and operant conditioning. A, B, C, D, G</li><li>Describe the formation of a new memory using a specified memory model and noting factors conducive to the development of long-term memory. B</li><li>Compare and contrast motivational theories and apply those to his/her own academic and professional circumstances. A, B, G</li><li>Identify major contributors in the field of intelligence testing. A, C</li><li>Categorize causes and effects of stress and apply healthy coping strategies. B, D</li><li>Compare and contrast theories of personality development .A, B, C, D, G</li><li>Describe social and cultural factors that influence behavior and experience. F, G</li><li>Identify characteristics of psychological disorders. F, B</li><li>Evaluate different approaches in therapy. A, B, C, D</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PSYC ",
    "Code": 2100,
    "Title": "Psychology of Human Development ♦ ★",
    "Learning_Outcomes": "<ol><li>Define the function of a theory. Describe each of the stage and non-stage theories of human development, name the people primarily responsible for each approach, and explain the major concepts which are used to develop each approach. A, B, C, G, H, I, J, K</li><li>Define and give an example of each of the following terms: naturalistic observation, case study, survey method, experimental method, cross-sectional study, longitudinal study, cross-cultural research. C, D, F, H</li><li>Explain why ethical considerations are important in research. C, H</li><li>Explain the mechanics of heredity through defining the following terms: chromosome, gene, sex cell, body cell, phenotype, genotype, dominant gene, recessive gene. A, G</li><li>Explain how genes are involved in polygenic inheritance, x-linked characteristics, handedness, obesity, genetic disorders, chromosomal abnormalities, predispositions to disorders, and genetic influences on personality and development. A, E, G</li><li>Discuss specific scientific studies which clarify the interaction between heredity and environment. A, C, G</li><li>Demonstrate an understanding of the following terms related to conception and birth: pregnancy detection, stages of prenatal development, threats to the developing organism, parental influences which affect a pregnancy, stages of prenatal development, stages of childbirth, and complications of childbirth. A, E, F, G</li><li>Tell how genetic counseling and genetic testing are important in ensuring a healthy pregnancy. A, C, F, G</li><li>Define the following concepts and relate them to physical development in infancy and toddlerhood: the development of the senses, crying, the neonate's ability to learn, reflexes and the neonate, brain development, growth and motor development, threats to the survival and health of infants, choices in parenting and discipline styles. A, C, D, F, G, H, I, J, K</li><li>Describe the six sub-stages of Piaget's sensorimotor period, and relate them to the child's development of information processing skills during this period. A, B, C, F, G, H, I, J, K</li><li>Show specific ways through which parents can encourage infants and toddlers in their cognitive development. How can these parents be taught to parent more effectively? A, B, D, F, G, H, I, J, K</li><li>Define the following concepts and show how each one is related to social and personality development in infancy and toddlerhood: emotional development, fear of strangers, separation anxiety, temperament and goodness-of-fit between a child’s temperament and his environment, and synchrony between parents and child. A, B, C, F, G, H, I, J, K</li><li>Describe influences that employed mothers and day care have on infants and toddlers. A, B, C, D, F, G, H, J, K</li><li>Demonstrate how the following issues are related to language development: language versus communication, the development of language, how words are used, and three theories showing how we learn language. A, B, C, D, F, G, H, I, J, K</li><li>Compare/contrast physical and cognitive development in early childhood with that during infancy and toddlerhood. A, C, D, F, G, H, I, J, K</li><li>Outline physical and motor development during the preschool years. A, C, F, G, H, I, J, K</li><li>Describe Piaget's preoperational stage of cognitive development in terms of how preschoolers reason and characteristics of their thought. A, B, F, G, I, J, K</li><li>Tell how information processing skills, attention, and memory improve during the preschool years. A, B, C, F, G, I, J, K, L</li><li>Show how the following aspects of the preschooler's environment can influence his/her cognitive development: the home, TV, Project Head Start, kindergarten. A, B, C, G, H, I, J, K</li><li>Demonstrate how each of the following agents contributes positively or negatively to the social and personality development of the preschool child: childhood fears, the emerging self, play, interpersonal relationships, parenting styles, discipline, and punishment, child abuse, gender role acquisition. A, B, D, F, G, H, I, J, K</li><li>Explain the following aspects of physical development in middle childhood: growth, chronological vs. maturational age, weight, childhood obesity, physical fitness and health. A, C, F, G, H, I, J, K</li><li>Compare/contrast Piaget’s period of concrete operations in middle childhood with the previous preoperational stage. A, B, G, H, I, J, K</li><li>Define the following concepts of the period of concrete operations: decline of egocentrism, reversibility, the ability to decenter, transformations, conservation, seriation, and classification. A, B, G, H, I, J, K</li><li>Discuss how the following information processing skills developed during middle childhood: attention, recall, recognition, memory strategies, meta-memory, and children's humor. A, B, G, H, I, J, K</li><li>Note how the following concepts relate to cognitive development during middle childhood: basic skills, creativity, academic achievement, children with exceptional needs. A, D, E, G, H, I, J, K</li><li>Show how each of the following issues affect social and personality development in middle childhood: the latency period, the developing self-concept, the family, stress, peer relationships, the development of morality, (Kohlberg and Gilligan), antisocial behavior, and TV violence. A, C, D, G, H, I, J, K</li><li>Outline the basic physical changes which occur during adolescence for males and females. What are the contrasting implications of early or late maturation for the adolescent boy and the adolescent girl? A, F, G, H, I, J, K</li><li>Relate the following issues to physical development during adolescence: health of today's teenagers, obesity, anorexia nervosa, bulimia, drug use, suicide. A, B, F, G, H, I, J, K</li><li>Outline Piaget's formal operations stage of intellectual development. A, B, F, G, H, I, J, K</li><li>List and define the components of adolescent egocentrism. How do these affect adolescent behavior? A, D, H, I, J, K, L</li><li>Discuss the theory of moral development and the influence on behavior. A, B, G, H, I, J, K</li><li>Relate adolescent sexuality to the following issues: sexual behavior, contraception, teenage pregnancy and its consequences, sexually transmitted diseases. A, G, H, I, J, K</li><li>Show how each of the following concepts influence social and personality development during the adolescent years: Erikson's work on identity formation, relationships with parents and peers, career choice, the secondary school. A, B, D, G, H, I, J, K</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PSYC ",
    "Code": 2120,
    "Title": "Social Psychology ♦",
    "Learning_Outcomes": "<ol><li>Define social psychology and explain what it does. A</li><li>Identify and describe the central concepts behind social psychology. A</li><li>Identify the ways that values penetrate the work of social psychologists. A,D</li><li>Explore how social psychology’s theories provide insight into the human condition. A</li><li>Examine the methods that make social psychology a science. B,D</li><li>Describe the spotlight effect and its relation to the illusion of transparency. C</li><li>Explain how, and how accurately, we know ourselves and what determines our self-concept. C</li><li>Define self-esteem and its implications for behavior and cognition. C,E</li><li>Explain self-serving bias and its adaptive and maladaptive aspects. C,F</li><li>Identify self-presentation and explain how impression management can explain behavior. C,F</li><li>Discuss the extent to which our assumptions and prejudgments guide our perceptions interpretations and recall. C,E</li><li>Explain how we form social judgments. C,E</li><li>Recognize how we explain others’ behavior and discuss the accuracy of these explanations. C,F</li><li>Discuss the cognitive social psychology view of human nature. A,C</li><li>State the extent to which, and under what conditions, our inner attitudes drive our outward actions. C,E</li><li>Summarize empirical evidence that behavior determines attitudes and critique the theories that seek to explain the attitudes-follow-behavior phenomenon. C,D,E</li><li>Compare two perspectives on human similarities and differences: the evolutionary perspective, emphasizing human kinship, and the cultural perspective, emphasizing human diversity. A,D,F</li><li>Describe how males and females are alike and how they differ. C,E,F</li><li>Explain how culture’s influence is vividly illustrated by differing gender roles across place and time. C,E,F</li><li>Explain how biology and culture interact and how our individual personalities interact with our situations. A,F</li><li>Define conformity; compare compliance, obedience and acceptance. A,C</li><li>Describe how social psychologists have studied conformity in the laboratory. Explain what their findings reveal about the potency of social forces and the nature of evil. A,D</li><li>Identify situations that increase and decrease conforming behaviors. A,C</li><li>Describe the two forms of social influence that explain why people will conform to others. A,C</li><li>Discuss how conformity varies not only with situations but also with persons. Discuss social contexts in which personality traits shine through. A,C</li><li>Identify two paths leading to influence. Describe the type of cognitive processing each involves and its effects. A</li><li>Describe how the factors that comprise persuasion affect the likelihood that we will take either the central or the peripheral route to persuasion. A,C</li><li>Identify tactics for resisting influence and explain how individuals might prepare others to resist unwanted persuasion. C</li><li>Describe how we are affected by the mere presence of another person. A,C,F</li><li>Define “deindividuation” and identify circumstances that trigger it. A</li><li>Describe and explain how interaction with like-minded people tends to amplify preexisting attitudes. A,C</li><li>Describe when and why group influences often hinder good decisions. Describe also when groups promote good decisions and how we can lead groups to make optimal decisions. A,F</li><li>Explain when and how individuals influence their groups. Identify what makes some individuals more effective than others. A,F</li><li>Describe the nature of prejudice and the differences between prejudice, stereotypes and discrimination. A,C</li><li>Identify and examine the influences that give rise to and maintain prejudice. A,C,E</li><li>Identify and examine the motivational sources of prejudice. A,C</li><li>Describe the different cognitive sources of prejudice. A,C</li><li>Identify and explain the consequences of prejudice. A,C</li><li>Define aggression and describe its different forms; evaluate the important theories of aggression. A</li><li>Identify the influences on aggression and explain how they work. A,C</li><li>Examine how we might counteract the factors that provoke aggression. C</li><li>Explain how proximity, physical attractiveness, similarity and feeling liked nurture liking and loving. A,C</li><li>Describe the varieties and components of love. A</li><li>Explain how attachment styles, equity and self-disclosure influence the ups and downs of close relationships. A,C</li><li>Summarize the factors that predict marital dissolution and describe the detachment process. A</li><li>Explain psychology’s theories of what motivates helping and the type of helping each theory seeks to explain. A,C</li><li>Identify circumstances that prompt people to help, or not help. Explain how and why helping is influenced by the number and behavior of other bystanders, by mood states and by traits and values. A,C</li><li>Identify traits and values that predict helping. A</li><li>Suggest how helping might be increased by reversing the factors that inhibit helping, by teaching norms of helping and by socializing people to see themselves as helpers. C,W</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PSYC ",
    "Code": 2200,
    "Title": "Behavior &amp; Experience",
    "Learning_Outcomes": "<ol><li>Recall and differentiate between the personality theories of Freud, Adler, Jung, Rogers, and Maslow. A, B, E</li><li>Describe and interpret Maslow's concept of self-actualization. A, B, C</li><li>Assess one's own \"multiple intelligences\" using the Rogers Indicator of Multiple Intelligences. A, B, E</li><li>Identify the developmental task which relates to each of Erik Erikson's eight psychosocial stages of human development. A, B, C</li><li>Define and discuss Daniel Goleman's theory of \"emotional intelligence\" and its relationship to Gardner's multiple intelligences. A, B</li><li>Discuss the effects of expecting too little from and doing too much for a child. A, B, C, E</li><li>Assess one's key values and their etiology. B, C, E, F</li><li>Argue the advantages and costs of socialized gender roles in American society. A, B, C, E, F</li><li>Discuss the pros and cons of androgyny and gender role transcendence. A, B, C, E</li><li>Draw connections between one's current personality strengths and weaknesses and one's early childhood experiences. B, C, E, F</li><li>Identify several ego-defense mechanisms and delineate the ways they can protect one's self-concept. A, B, C</li><li>Describe how the Jungian concept of individuation changes throughout one's life. A, B, C, D</li><li>Speculate about how a psychological moratorium may affect one's sense of identity. A, B, C, D</li><li>Give examples of transactional analysis \"life scripts\" and \"injunctions.\" A, B, F</li><li>1Identify the survival roles assumed by children in alcoholic and dysfunctional families. A, B, C</li><li>Identify and dispute irrational beliefs using Albert Ellis' REBT approach. A, B, C, E</li><li>Discuss key concepts from Gail Sheehy's New Passages, including \"provisional adulthood\" and \"the three-act play.\" A, B, C, D, E</li><li>Compare and contrast the wellness model and traditional medical approaches. A, B, C</li><li>Identify one's own stressors and several means of coping with stress. A, B, C, D, E</li><li>Create a plan for improving one's personal relationships. B, C</li><li>Distinguish loneliness from solitude, citing examples. A, B, C</li><li>Assess one's own \"aliveness\" or \"deadness.\" A, B, C, E</li><li>Apply Kubler-Ross's stages of dying to other situations involving loss. A, B, C,</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PSYC ",
    "Code": 2210,
    "Title": "Biological Basis of Behavior ♦",
    "Learning_Outcomes": "<ol><li>Identify the structure of cells that make up the nervous system. A, G</li><li>Describe the function of cells that make up the nervous system. A, G</li><li>Describe the role of neurotransmitters in behavior, and how drugs affect behavior by affecting neurotransmitters. A</li><li>Identify the role that different regions in the brain and nervous system play in influencing behavior, mood, movement, cognition, memory, and perception. B.,C, G</li><li>Label structures of the brain. A</li><li>Label structures of the nervous system. A</li><li>Label structures of the sensory systems. A</li><li>Identify the causes of disorders of mood, perception, movement, memory, and cognition. A, C</li><li>Identify the treatments of disorders of mood, perception, movement, memory, and cognition. A, C</li><li>Identify important theorists and researchers in biological psychology and be able to describe their theories, discoveries, and methods of investigation. H</li><li>Locate and evaluate current research materials (papers, book chapters, etc.) in biological psychology. D, F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "PSYC    ",
    "Code": 2130,
    "Title": "Lifespan Psychology ♦ ★",
    "Learning_Outcomes": "<ol><li>Explain how different theoretical perspectives influence research methods and applications. B</li><li>Understand the interaction of heredity and environment as each affects physical, cognitive, and psychosocial milestones throughout the lifespan. D</li><li>Recognize various influences in the prenatal environment which can affect the developing fetus. A,C,D,E</li><li>Discuss the intellectual capabilities of the newborn and processes by which the developing infant begins to interact cognitively with the environment. A,B,E</li><li>Explain and discuss how early differences in emotional responses in infancy and toddlerhood are indicative of future personality development. A,B,E</li><li>Identify the physical and cognitive stages (Piaget and other theorists) that occur in early childhood years. A,B,E</li><li>Distinguish among the influencing factors of parenting styles, siblings, and friends on personality development in early childhood. A,B,D,E</li><li>Discuss motor, cognitive, moral, and self-concept theories of development in elementary school-aged children. B</li><li>Explain and discuss the physiological changes of adolescence, the psychological issues and pressures, parenting needs, and identity formation. A,B,E</li><li>Describe sensory and psychomotor functioning, intellectual and motor development in young adulthood. A,B,E</li><li>Discuss the impact of intimate relationships and lifestyles on human development including, love, marriage, divorce, blended families, alternative lifestyles, and parenthood. A,B,D,E,F</li><li>Distinguish among physical and intellectual development during middle adulthood including changes in reproductive and sexual capacity, appearance, intellectual changes, midlife crisis, and occupational patterns. A,B,C,E</li><li>Discuss common myths about aging, the positive aspects of aging, the aging process, retirement, future needs regarding aging, and how to enhance the quality of later years. A,B,D,F</li><li>Distinguish the differences in cultural attitudes toward the biological, social, and psychological aspects of death and dying. D,F</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "SERV ",
    "Code": 2410,
    "Title": "Service-Learning Experience I",
    "Learning_Outcomes": "<ol><li>Identify and analyze a socially significant need (as outlined in the course description) in the local community</li><li>Reflect upon their understanding of social justice, ethics, and civic engagement by demonstrating the process of reflective thinking and journaling. (A, B, E, F, G)</li><li>Acquire valuable skills in areas of leadership, communication, group interaction, cooperation, critical thinking skills, and problem solving. (C, E, F, H)</li><li>Observe and evaluate nonprofit, not-for-profit (city, county, state, and federal), NGO, and for-profit service agencies and their roles in serving communities. (A, D)</li><li>Document an enhanced collegiate experience as a result of the real-life interaction in their community. (D, G, H)</li></ol>"
  },
  {
    "Department": "Natural and Behavioral Sciences",
    "Rubric": "SERV ",
    "Code": 2500,
    "Title": "Special Topics in Service Learning",
    "Learning_Outcomes": "<ol><li>Analyze a particular socially significant need (as outlined in the course description) in the local community (A, B, D, G)</li><li>Develop an understanding of a particular community/societal topic of concern in terms of social justice, ethics, and civic engagement through reflective thinking and journaling (A, B, E, F, G)</li><li>Develop valuable skills in areas of leadership, communication, group interaction, cooperation, critical thinking skills, and problem solving. (C, E, F)</li><li>Evaluate nonprofit, not-for-profit (city, county, state, and federal), NGO, and for-profit service agencies and their roles in serving a particular need in communities. (A, D)</li><li>Construct a rationale for how the collegiate experience is enhanced through participating in projects addressing community needs. (D, G)</li><li>Design a plan for meeting a community partner need through an original or partner requested project that assesses existing data and produces tangible outcomes (D, E, G)</li></ol>"
  },
  {
    "Department": "No Department",
    "Rubric": "TODO_Prefix               ",
    "Code": 7777,
    "Title": "TODO Course Name",
    "Learning_Outcomes": "<ol><li>8</li><li></li></ol>"
  },
  {
    "Department": "Nursing",
    "Rubric": "NRSG ",
    "Code": 1320,
    "Title": "Women's Health &amp; the Childbearing Family",
    "Learning_Outcomes": "<ol><li>Apply ethical, legal and regulatory frameworks of nursing and standards of professional nursing practice. (Professional Behavior) A</li><li>Apply effective communication techniques including information and technology. (Communication) B</li><li>Assess subjective and objective data to identify actual or potential health alterations. (Assessment) C</li><li>Use clinical decision making to provide safe and effective evidence-based nursing care. (Clinical Decision Making) D</li><li>Implement caring interventions that incorporate principles of dignity, diversity, safety and knowledge. (Caring Interventions) E</li><li>Implement an individualized teaching plan to meet the educational needs of clients, families, and/or groups. (Teaching and Learning) F</li><li>Collaborate when planning and implementing care. (Collaboration) G</li><li>Examine various principles of managing care. (Managing Care) H</li></ol>"
  },
  {
    "Department": "Nursing",
    "Rubric": "NRSG ",
    "Code": 1340,
    "Title": "Mental Health Nursing",
    "Learning_Outcomes": "<ol><li>Demonstrate ethical, legal and regulatory frameworks of nursing &amp; the <strong>standards of professional nursing practice</strong>. <strong>(Professional Behavior</strong>) A</li><li>Demonstrate effective <strong>communication</strong> techniques including information and technology. (<strong>Communication</strong>) B</li><li>Demonstrate ability to collect <strong>subjective and objective data</strong> to identify actual or potential health alterations. <strong>(Assessment</strong>) C</li><li>Formulate <strong>clinical decisions </strong>to provide safe and effective evidence-based nursing care. <strong>(Clinical Decision Making)</strong> D</li><li>Demonstrate <strong>caring interventions</strong> that incorporate principles of dignity, diversity, safety &amp; knowledge. <strong>(Caring Interventions</strong>) E</li><li>Develop an individualized <strong>teaching plan</strong> to meet the learning needs of clients, families, and/or groups. <strong>(Teaching and Learning)</strong> F</li><li><strong>Collaborate</strong> when planning care. <strong>(Collaboration</strong>) G</li><li>Use basic principles of <strong>managing care</strong>. (<strong>Managing Care</strong>) H</li></ol>"
  },
  {
    "Department": "Nursing",
    "Rubric": "NRSG ",
    "Code": 1710,
    "Title": "Fundamentals of Nursing",
    "Learning_Outcomes": "<ol><li>Identify ethical, legal and regulatory frameworks of nursing and <strong>standards of professional nursing practice</strong>. (<strong>Professional Behavior)</strong> A</li><li>Define the components of effective <strong>communication</strong>. (<strong>Communication)</strong> B</li><li>Identify <strong>subjective and objective data</strong>, which relate to actual or potential health alternations. (<strong>Assessment)</strong> C</li><li>Recognize how <strong>clinical decision-making</strong> relates to providing safe and effective evidence-based nursing care. (<strong>Clinical Decision Making</strong>) D</li><li>Identify <strong>caring interventions</strong> that incorporate principles of dignity, diversity, safety and knowledge. (<strong>Caring Interventions</strong>) E</li><li>Define the components of an individualized <strong>teaching plan</strong> designed to meet the learning needs of clients, families, and/or groups. (<strong>Teaching and Learning</strong>) F</li><li>Identify the roles of <strong>various members</strong> of the health care team. (<strong>Collaboration</strong>) G</li><li>Recognize the various aspects of <strong>managing care</strong>. (<strong>Managing Care</strong>) H</li></ol>"
  },
  {
    "Department": "Nursing",
    "Rubric": "NRSG ",
    "Code": 1720,
    "Title": "Medical-Surgical Nursing I",
    "Learning_Outcomes": "<ol><li>Demonstrate ethical, legal and regulatory frameworks of nursing &amp; the <strong>standards of professional nursing practice</strong>. <strong>(Professional Behavior</strong>) A</li><li>Demonstrate effective <strong>communication</strong> techniques including information and technology. (<strong>Communication</strong>) B</li><li>Demonstrate ability to collect <strong>subjective and objective data</strong> to identify actual or potential health alterations. <strong>(Assessment</strong>) C</li><li>Formulate <strong>clinical decisions </strong>to provide safe and effective evidence-based nursing care. <strong>(Clinical Decision Making)</strong> D</li><li>Demonstrate <strong>caring interventions</strong> that incorporate principles of dignity, diversity, safety &amp; knowledge. <strong>(Caring Interventions</strong>) E</li><li>Develop an individualized <strong>teaching plan</strong> to meet the educational needs of clients, families, and/or groups. <strong>(Teaching and Learning)</strong> F</li><li><strong>Collaborate</strong> when planning care. <strong>(Collaboration</strong>) G</li><li>Use basic principles of <strong>managing care</strong>. (<strong>Managing Care</strong>) H</li></ol>"
  },
  {
    "Department": "Nursing",
    "Rubric": "NRSG ",
    "Code": 2240,
    "Title": "Professional Practice in Nursing",
    "Learning_Outcomes": "<ol><li>Practice within the ethical, legal and regulatory frameworks of nursing and <strong>standards of professional nursing practice</strong>.<strong> (Professional Behavior</strong>) D, G</li><li><strong>Communicate </strong>effectively using verbal, nonverbal, and written techniques including information and technology. (<strong>Communication</strong>) C, G</li><li><strong>Analyze subjective and objective data</strong> to identify actual or potential health alterations. (<strong>Assessment</strong>) A, F, G</li><li>Evaluate outcomes of <strong>clinical decisions </strong>implemented to provide safe and effective evidence-based nursing care. (<strong>Clinical Decision Making</strong>) A, B, F, I</li><li>Evaluate the effectiveness of <strong>caring interventions</strong> that incorporate principles of dignity, diversity, safety and knowledge. (<strong>Caring Interventions</strong>) B, F, G</li><li>Evaluate the effectiveness of the implemented <strong>teaching plan</strong> to meet the <strong>learning needs</strong> of clients, families and/or groups. (<strong>Teaching and Learning</strong>) D</li><li><strong>Collaborate </strong>when planning, implementing, and evaluating care. (<strong>Collaboration</strong>) B</li><li><strong>Manage care </strong>through effective use of prioritization, delegation, informatics and resources. (<strong>Managing Care</strong>) C</li></ol>"
  },
  {
    "Department": "Nursing",
    "Rubric": "NRSG ",
    "Code": 2730,
    "Title": "Medical-Surgical Nursing II",
    "Learning_Outcomes": "<ol><li>Apply ethical, legal and regulatory frameworks of nursing and <strong>standards of professional nursing practice</strong>. (<strong>Professional Behavior</strong>) A</li><li>Apply effective <strong>communication</strong> techniques including information and technology. (<strong>Communication</strong>) B</li><li>Assess <strong>subjective and objective data</strong> to identify actual or potential health alterations. (<strong>Assessment</strong>) C</li><li>Use <strong>clinical decision making </strong>to provide safe and effective evidence-based nursing care. (<strong>Clinical Decision Making) </strong>D</li><li>Implement <strong>caring interventions</strong> that incorporate principles of dignity, diversity, safety and knowledge. (<strong>Caring Interventions</strong>) E</li><li>Implement an individualized <strong>teaching plan</strong> to meet the learning needs of clients, families, and/or groups. (<strong>Teaching and Learning)</strong> F</li><li>Collaborate when planning and implementing care. (<strong>Collaboration</strong>) G</li><li>Examine various principles of <strong>managing care</strong>. (<strong>Managing Care</strong>) H</li></ol>"
  },
  {
    "Department": "Nursing",
    "Rubric": "NRSG ",
    "Code": 2740,
    "Title": "Medical-Surgical Nursing III",
    "Learning_Outcomes": "<ol><li>Practice within the ethical, legal and regulatory frameworks of nursing and <strong>standards of professional nursing practice</strong>.<strong> (Professional Behavior</strong>) A</li><li><strong>Communicate </strong>effectively using verbal, nonverbal, and written techniques including information and technology. (<strong>Communication</strong>) B</li><li><strong>Analyze subjective and objective data</strong> to identify actual or potential health alterations. (<strong>Assessment</strong>) C</li><li>Evaluate outcomes of <strong>clinical decisions </strong>implemented to provide safe and effective evidence-based nursing care. (<strong>Clinical Decision Making</strong>) D</li><li>Evaluate the effectiveness of <strong>caring interventions</strong> that incorporate principles of dignity, diversity, safety and knowledge. (<strong>Caring Interventions</strong>) E</li><li>Evaluate the effectiveness of the implemented <strong>teaching plan</strong> to meet the <strong>learning needs</strong> of clients, families and/or groups. (<strong>Teaching and Learning</strong>) F</li><li><strong>Collaborate </strong>when planning, implementing, and evaluating care. (<strong>Collaboration</strong>) G</li><li><strong>Manage care </strong>through effective use of prioritization, delegation, informatics and resources. (<strong>Managing Care</strong>) H</li></ol>"
  },
  {
    "Department": "Nursing",
    "Rubric": "NRSG  ",
    "Code": 1341,
    "Title": "Current Topics in Nursing I",
    "Learning_Outcomes": "<ol><li>Demonstrate knowledge of ethical, legal and regulatory frameworks of nursing &amp; the <strong>standards of professional nursing practice</strong>. <strong>(Professional Behavior</strong>) D, J, K</li><li>Demonstrate knowledge of effective <strong>communication</strong> techniques including information and technology. (<strong>Communication</strong>) D, E, G</li><li>Demonstrate ability to collect <strong>subjective and objective data</strong> to identify actual or potential health alterations. <strong>(Assessment</strong>) B, C, H</li><li>Formulate <strong>clinical decisions </strong>to provide safe and effective evidence-based nursing care. <strong>(Clinical Decision Making)</strong> D, F, I</li><li>Identify <strong>caring interventions</strong> that incorporate principles of dignity, diversity, safety &amp; knowledge. <strong>(Caring Interventions</strong>) A, J</li><li>Develop an individualized <strong>teaching plan</strong> to meet the learning needs of patients, families, and/or groups. <strong>(Teaching and Learning)</strong> E</li><li><strong>Collaborate</strong> when planning care. <strong>(Collaboration</strong>) D</li><li>Describe basic principles of <strong>managing care</strong>. (<strong>Managing Care</strong>) A</li></ol>"
  },
  {
    "Department": "Nursing",
    "Rubric": "NRSG  ",
    "Code": 1600,
    "Title": "Transition to Professional Nursing",
    "Learning_Outcomes": "<ol><li>Demonstrate ethical, legal and regulatory frameworks of nursing &amp; the <strong>standards of professional nursing practice</strong>. <strong>(Professional Behavior</strong>) A</li><li>Demonstrate effective <strong>communication</strong> techniques including information and technology. (<strong>Communication</strong>) B</li><li>Demonstrate ability to collect <strong>subjective and objective data</strong> to identify actual or potential health alterations. <strong>(Assessment</strong>) C</li><li>Formulate <strong>clinical decisions </strong>to provide safe and effective evidence-based nursing care. <strong>(Clinical Decision Making)</strong> D</li><li>Demonstrate <strong>caring interventions</strong> that incorporate principles of dignity, diversity, safety &amp; knowledge. <strong>(Caring Interventions</strong>) E</li><li>Develop an individualized <strong>teaching plan</strong> to meet the learning needs of clients, families, and/or groups. <strong>(Teaching and Learning)</strong> F</li><li><strong>Collaborate</strong> when planning care. <strong>(Collaboration</strong>) G</li><li>Use basic principles of <strong>managing care</strong>. (<strong>Managing Care</strong>) H</li></ol>"
  },
  {
    "Department": "Nursing",
    "Rubric": "NRSG   ",
    "Code": 1330,
    "Title": "Pediatric Nursing",
    "Learning_Outcomes": "<ol><li>Demonstrate ethical, legal and regulatory frameworks of nursing &amp; the standards of professional nursing practice. (Professional Behavior) A</li><li>Demonstrate effective communication techniques including information and technology. (Communication) B</li><li>Demonstrate ability to collect subjective and objective data to identify actual or potential health alterations. (Assessment) C</li><li>Formulate clinical decisions to provide safe and effective evidence-based nursing care. (Clinical Decision Making) D</li><li>Demonstrate caring interventions that incorporate principles of dignity, diversity, safety &amp; knowledge. (Caring Interventions) E</li><li>Develop an individualized teaching plan to meet the learning needs of clients, families, and/or groups. (Teaching and Learning) F</li><li>Collaborate when planning care. (Collaboration) G</li><li>Use basic principles of managing care. (Managing Care) H</li></ol>"
  }
 ];
 
 
 
 
 var proptitles = [];
 
 Object.keys(darray[0]).forEach(function(key,index) {
 proptitles.push(key);
 
 });
 
 var app = new Vue({
   el: "#outcomes",
   data: {
     courses: darray,
     test: "test123",
     theaders: proptitles
   }
 });
 