document.addEventListener("DOMContentLoaded", function() {
    let keywords = {
        "LLC formation": "/non-resident-llc-formation/",
        "start an LLC": "/non-resident-llc-formation/",
        "form an LLC": "/non-resident-llc-formation/",
        "LLC taxes": "/non-resident-llc-taxes/",
        "EIN application": "/non-resident-llc-taxes/",
        "tax compliance": "/non-resident-llc-taxes/",
        "business bank account": "/non-resident-business-banking/",
        "LLC banking": "/non-resident-business-banking/",
        "US bank for LLC": "/non-resident-business-banking/",
        "LLC formation services": "/best-llc-services/",
        "registered agent": "/best-llc-services/",
        "best LLC services": "/best-llc-services/",
        "LLC compliance": "/llc-legal-faqs/",
        "legal requirements": "/llc-legal-faqs/",
        "LLC legal FAQs": "/llc-legal-faqs/",
        "payment gateways": "/non-resident-payment-gateways/",
        "Stripe for LLC": "/non-resident-payment-gateways/",
        "online payments": "/non-resident-payment-gateways/"
    };
    
    let contentBlocks = document.querySelectorAll(".post-content, .page-content");
    
    contentBlocks.forEach(block => {
        let html = block.innerHTML;
        for (let key in keywords) {
            let regex = new RegExp("\\b(" + key + ")\\b", "i"); // Yalnızca ilk eşleşmeyi alır
            if (regex.test(html)) {
                html = html.replace(regex, `<a href="${keywords[key]}">$1</a>`);
            }
        }
        block.innerHTML = html;
    });
});
