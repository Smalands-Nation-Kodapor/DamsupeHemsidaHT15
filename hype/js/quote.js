// ==============================================
// Copyright 2004 by CodeLifter.com
// Free for all; but please leave in this header.
// ==============================================

var Quotation=new Array() // do not change this!

// Set up the quotations to be shown, below.
// To add more quotations, continue with the
// pattern, adding to the array.  Remember
// to increment the Quotation[x] index!

Quotation[0] = "Time is of the essence! Comb your hair.";
Quotation[1] = "Sanity is a golden apple with no shoelaces.";
Quotation[2] = "Repent! The end is coming, $9.95 at Amazon.";
Quotation[3] = "Honesty blurts where deception sneezes.";
Quotation[4] = "Pastry satisfies where art is unavailable.";
Quotation[5] = "Delete not, lest you, too, be deleted.";
Quotation[6] = "O! Youth! What a pain in the backside.";
Quotation[7] = "Wishes are like goldfish with propellors.";
Quotation[8] = "Love the river's \"beauty\", but live on a hill.";
Quotation[9] = "Invention is the mother of too many useless toys.";

// ======================================
// Do not change anything below this line
// ======================================
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));
function showQuotation(){document.write(Quotation[whichQuotation]);}
showQuotation();