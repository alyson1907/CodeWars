-- You have access to two tables named top_half and bottom_half, as follows:

-- TOP_HALF SCHEMA

-- id
-- heads
-- arms

-- BOTTOM_HALF SCHEMA

-- id
-- legs
-- tails
-- You must return a table with the format as follows:

-- OUTPUT SCHEMA

-- id
-- heads
-- legs
-- arms
-- tails
-- species
-- The IDs on the tables match to make a full monster. For heads, arms, legs and tails you need to draw in the data from each table.

-- For the species, if the monster has more heads than arms, more tails than legs, or both, it is a 'BEAST' else it is a 'WEIRDO'. This needs to be captured in the species column.

-- All rows should be returned (10).

-- Tests require the use of CASE. Order by species.

select *, (case when (heads > arms OR tails > legs) then 'BEAST' else 'WEIRDO' end) as species
from top_half t
join bottom_half b on t.id = b.id
order by species
