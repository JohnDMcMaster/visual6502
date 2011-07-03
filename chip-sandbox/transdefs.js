/*
 * The format here is
 *   name
 *   gate,c1,c2
 *   bb (bounding box: xmin, xmax, ymin, ymax)
 *   geometry (unused) (width1, width2, length, #segments, area)
 *   weak (boolean) (marks weak transistors, whether pullups or pass gates)
 *
 * Note: the geometry is of the MOSFET channel: the two widths are
 * the lengths of the two edges where the poly is crossing the active
 * area. These will be equal if the channel is straight or makes an
 * equal number of right and left turns. The number of segments should
 * be 1 for a rectangular channel, or 2 for an L shape, 3 for a Z
 * or U, and will allow for taking into account corner effects.
 * 
 * At time of writing JSSim doesn't use transistor strength information
 * except to discard weak transistors and to treat pullups as
 * described in segdefs.js specially.
 *
 */
var transdefs = [
['t1',4,1,3,[10,10,20,200],[415,415,11,5,4566],false],
['t2',5,3,2,[10,10,4000,4000],[230,230,10,4,2311],false],
]

