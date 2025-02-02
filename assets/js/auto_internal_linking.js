window.onload = function() {
    console.log("Auto Internal Linking script is running!"); // Debug log

    let keywords = {
        "LLC formation": "/tags/non-resident-llc-formation/",
        "forming an LLC": "/tags/non-resident-llc-formation/",
        "start an LLC": "/tags/non-resident-llc-formation/",
        "form an LLC": "/tags/non-resident-llc-formation/",
        "LLC taxes": "/tags/non-resident-llc-taxes/",
        "EIN application": "/tags/non-resident-llc-taxes/",
        "tax compliance": "/tags/non-resident-llc-taxes/",
        "business bank account": "/tags/non-resident-business-banking/",
        "LLC banking": "/tags/non-resident-business-banking/",
        "US bank for LLC": "/tags/non-resident-business-banking/",
        "LLC formation services": "/tags/best-llc-services/",
        "registered agent": "/tags/best-llc-services/",
        "best LLC services": "/tags/best-llc-services/",
        "LLC compliance": "/tags/llc-legal-faqs/",
        "legal requirements": "/tags/llc-legal-faqs/",
        "LLC legal FAQs": "/tags/llc-legal-faqs/",
        "payment gateways": "/tags/non-resident-payment-gateways/",
        "Stripe for LLC": "/tags/non-resident-payment-gateways/",
        "online payments": "/tags/non-resident-payment-gateways/"
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