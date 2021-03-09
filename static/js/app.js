function getPlots(id)

//Read samples.json file
d3.json("samples.json").then (sampledata => {
    console.log(sampledata)

    var ids = sampledata.samples[0].otu_ids;
    console.log(ids)

    var sampleValues = sampledata.samples[0].sample_values.slice(0,10).reverse();
    console.log(sampleValues)

    var labels = (sampledata.samples[0].otu_ids.slice(0,10)).reverse();
    console.log (labels)
})