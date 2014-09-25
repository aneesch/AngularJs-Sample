
<cfif isdefined("form.set") AND form.set eq 1>
	[
	{"name":"Set1:John","country":"China"},
	{"name":"Set1:Lenny","country":"India"},
	{"name":"Set1:Keny","country":"China"}
	]
<cfelse>
	[
	{"name":"John","country":"China"},
	{"name":"Lenny","country":"India"},
	{"name":"Keny","country":"China"}
	]	
</cfif>