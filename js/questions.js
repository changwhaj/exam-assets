// questions.js

// Define the associative array for question details
var questionDetails = {
    'CKA-Q': { qLength: 23, qDirectory: 'cncf/CKA' },

    'CISM-Q': { qLength: 1152, qDirectory: 'isaca/CISM' },
    'CISA-Q': { qLength: 1511, qDirectory: 'isaca/CISA' },

    // Foundational 자격증
    'AIF-Q': { qLength: 334, qDirectory: 'aws/AIF_C01' },
    'CLF2-Q': { qLength: 719, qDirectory: 'aws/CLF_C02' },

    // Associate 자격증
    // 'SAA2-Q': { qLength: 822, qDirectory: 'aws/SAA_C02' },
    'SAA3-Q': { qLength: 1019, qDirectory: 'aws/SAA_C03' },
    'MLA-Q': { qLength: 216, qDirectory: 'aws/MLA_C01' },
    // 'DVA-Q': { qLength: 443, qDirectory: 'aws/DVA' },
    'DVA2-Q': { qLength: 557, qDirectory: 'aws/DVA_C02' },
    'DEA-Q': { qLength: 261, qDirectory: 'aws/DEA_C01' },
    'SOA2-Q': { qLength: 478, qDirectory: 'aws/SOA_C02' },
    'SOA3-Q': { qLength: 65, qDirectory: 'aws/SOA_C03' },

    // Professional 자격증
    'DOP2-Q': { qLength: 390, qDirectory: 'aws/DOP_C02' },
    // 'SAP-Q': { qLength: 1019, qDirectory: 'aws/SAP' },
    'SAP2-Q': { qLength: 529, qDirectory: 'aws/SAP_C02' },

    // Specialty 자격증
    'MLS-Q': { qLength: 369, qDirectory: 'aws/MLS_C01' },
    'SCS2-Q': { qLength: 307, qDirectory: 'aws/SCS_C02' },
    'ANS-Q': { qLength: 272, qDirectory: 'aws/ANS_C01' },

    'AZ104-Q': { qLength: 606, qDirectory: 'microsoft/AZ104' },
    'AZ305-Q': { qLength: 286, qDirectory: 'microsoft/AZ305' },
    'AZ900-Q': { qLength: 474, qDirectory: 'microsoft/AZ900' },
};

function getQuestionLength(questionName) {
    return questionDetails[questionName].qLength;
}

// Function to extract the current page number from the URL
function getCurrentPageNumber(pageName) {
    var pageArr = pageName.match(/.+-Q(\d+)\.html/)
    var pageNumber = (pageArr && parseInt(pageArr[1])) || 1
    return pageNumber;
}

function getCurrentPagePrefix(pageName) {
    var pageArr = pageName.match(/(.+-Q)\d+\.html/)
    var pagePrefix = (pageArr && pageArr[1]) || '';
    return pagePrefix;
}

var pathSegments = window.location.pathname.split("/");
var curPageName = pathSegments.pop();
var curPageDir = pathSegments.join("/");

var curPageNo = getCurrentPageNumber(curPageName);
var pagePrefix = getCurrentPagePrefix(curPageName);
var totalPages = getQuestionLength(pagePrefix);

var prevPageNo = curPageNo - 1;
var nextPageNo = curPageNo + 1;

var prevLink = document.getElementById('prevLink');
var pageSelect = document.getElementById('pageSelect');
var nextLink = document.getElementById('nextLink');
var pageInfo = document.getElementById('page-indicator');

if (prevPageNo >= 1) {
    prevLink.href = curPageDir + "/" + pagePrefix + prevPageNo.toString().padStart(4, '0') + '.html';
} else {
    prevLink.style.display = 'none';
}

if (nextPageNo <= totalPages) {
    nextLink.href = curPageDir + "/" + pagePrefix + nextPageNo.toString().padStart(4, '0') + '.html';
} else {
    nextLink.style.display = 'none';
}

// Display current page number and total page count
pageInfo.textContent = 'Q# ' + curPageNo + ' of ' + totalPages;

// Dynamically populate the page selection dropdown
for (var i = 1; i <= totalPages; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    pageSelect.appendChild(option);
}

// Set the default selected option
pageSelect.value = curPageNo;

// Event listener for page selection
pageSelect.addEventListener('change', function() {
    var selectedPage = parseInt(this.value);
    window.location.href = curPageDir + "/" + pagePrefix + selectedPage.toString().padStart(4, '0') + '.html';
});
