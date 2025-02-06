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

    // Table of Contents (TOC) Integration
    var sidebarTOC = document.getElementById("sidebar-toc");
    var sidebarTOCContainer = document.getElementById("sidebar-toc-container");

    function updateTOC() {
        if (!sidebarTOC) {
            console.log("Sidebar TOC bulunamadı, işlem iptal ediliyor.");
            return;
        }

        var contentArea = document.querySelector(".content__entry.u-inner");
        if (!contentArea) {
            console.log("İçerik alanı bulunamadı, tekrar deneniyor...");
            return;
        }

        var headers = contentArea.querySelectorAll("h1, h2");
        if (headers.length === 0) {
            console.log("Başlıklar bulunamadı, tekrar kontrol ediliyor...");
            return;
        }

        console.log("Başlıklar bulundu, TOC güncelleniyor...");
        var tocHTML = "<div class='toc-container'>";

        headers.forEach(function (header, index) {
            var id = "toc-" + index;
            header.setAttribute("id", id);
            tocHTML += `
                <label class="toc-item">
                    <input type="radio" name="toc" onclick="document.getElementById('${id}').scrollIntoView({ behavior: 'smooth' })">
                    <span>${header.innerText}</span>
                </label>
            `;
        });

        tocHTML += "</div>";
        sidebarTOC.innerHTML = tocHTML;
    }

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                updateTOC();
            }
        });
    });

    var contentArea = document.querySelector(".content__entry.u-inner");
    if (contentArea) {
        observer.observe(contentArea, { childList: true, subtree: true });
    }

    setTimeout(updateTOC, 1500);

    // Hide TOC on Homepage
    if (!document.querySelector(".content__entry.u-inner")) {
        if (sidebarTOCContainer) {
            sidebarTOCContainer.style.display = "none"; // Sadece TOC'yi gizle, sidebar kalacak
        }
    }
};