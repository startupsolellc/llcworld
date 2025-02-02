window.onload = function() {
    console.log("Auto Internal Linking script is running!"); // Debug log

    let keywords = {
        "LLC formation": "/tag/non-resident-llc-formation/",
        "forming an LLC": "/tag/non-resident-llc-formation/",
        "start an LLC": "/tag/non-resident-llc-formation/",
        "form an LLC": "/tag/non-resident-llc-formation/",
        "LLC taxes": "/tag/non-resident-llc-taxes/",
        "EIN application": "/tag/non-resident-llc-taxes/",
        "tax compliance": "/tag/non-resident-llc-taxes/",
        "business bank account": "/tag/non-resident-business-banking/",
        "LLC banking": "/tag/non-resident-business-banking/",
        "US bank for LLC": "/tag/non-resident-business-banking/",
        "LLC formation services": "/tag/best-llc-services/",
        "registered agent": "/tag/best-llc-services/",
        "best LLC services": "/tag/best-llc-services/",
        "LLC compliance": "/tag/llc-legal-faqs/",
        "legal requirements": "/tag/llc-legal-faqs/",
        "LLC legal FAQs": "/tag/llc-legal-faqs/",
        "payment gateways": "/tag/non-resident-payment-gateways/",
        "Stripe for LLC": "/tag/non-resident-payment-gateways/",
        "online payments": "/tag/non-resident-payment-gateways/"
    };

    let contentBlocks = document.querySelectorAll(".content__entry, .post-content, .page-content");

    if (!contentBlocks.length) {
        console.log("No content blocks found! Exiting script.");
        return;
    }

    contentBlocks.forEach(block => {
        let html = block.innerHTML;
        console.log("Processing block:", block); // Debug log

        for (let key in keywords) {
            let regex = new RegExp("\\b" + key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + "\\b", "i"); // Sadece ilk eşleşmeyi alacak

            if (!html.includes(`<a href="${keywords[key]}">`)) {
                html = html.replace(regex, `<a href="${keywords[key]}">$&</a>`); // Sadece ilk eşleşmeyi değiştir
                console.log(`Linked "${key}" to ${keywords[key]}`); // Debug log
            }
        }
        block.innerHTML = html;
    });

    console.log("Internal linking script execution completed."); // Kod tamamlandı mesajı
};