"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Gift, Heart, Check } from "lucide-react"

const giftAmounts = [25, 50, 75, 100, 150, 200]

export function GiftCardSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50)
  const [customAmount, setCustomAmount] = useState<string>("")

  const getFinalAmount = () => {
    if (customAmount && parseInt(customAmount) >= 25) {
      return parseInt(customAmount)
    }
    return selectedAmount || 50
  }

  const handleEmailClick = () => {
    const amount = getFinalAmount()
    const subject = encodeURIComponent(`Gift Card Request - $${amount}`)
    const body = encodeURIComponent(
`Hello Everclean Multi-services,

I would like to purchase a Gift Card.

GIFT CARD DETAILS:
- Amount: $${amount}

MY INFORMATION (Purchaser):
- Name: 
- Phone: 
- Email: 

RECIPIENT INFORMATION:
- Recipient Name: 
- Recipient Email: 
- Recipient Location (City/Region): 

SPECIAL MESSAGE FOR RECIPIENT (optional):


Please contact me with payment instructions.

Thank you!`
    )
    window.location.href = `mailto:contact@evercleanmultiservices.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="gift-card" className="py-16 sm:py-24 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary/50 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              <span>The Perfect Gift</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Give the Gift of a{" "}
              <span className="text-primary">Clean Home</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Surprise someone special with the gift of professional cleaning services. 
              Perfect for new homeowners, busy parents, or anyone who deserves a break.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Available in any amount ($25 minimum)",
                "Valid for all our cleaning services",
                "Never expires",
                "Delivered via email to the recipient",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Service available in Frederick, Hagerstown, Columbia regions (MD) and Northern Virginia</span>
            </div>
          </div>

          {/* Right side - Amount selector */}
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Select Gift Card Amount
            </h3>

            {/* Preset amounts */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {giftAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount)
                    setCustomAmount("")
                  }}
                  className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                    selectedAmount === amount && !customAmount
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary/50 text-foreground"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Or enter a custom amount (minimum $25)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                  $
                </span>
                <input
                  type="number"
                  min="25"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    if (e.target.value) {
                      setSelectedAmount(null)
                    }
                  }}
                  className="w-full pl-8 pr-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none text-foreground bg-background"
                />
              </div>
            </div>

            {/* Selected amount display */}
            <div className="bg-muted rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Gift Card Value</span>
                <span className="text-2xl font-bold text-primary">${getFinalAmount()}</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="w-full"
              onClick={handleEmailClick}
            >
              <Gift className="h-5 w-5 mr-2" />
              Request Gift Card via Email
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Click to open your email with a pre-filled request. We will contact you with payment details.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
