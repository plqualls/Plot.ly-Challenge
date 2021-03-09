function getPlots(id) {
    //Read samples.json file
        d3.json("samples.json").then (sampledata =>{
            console.log(sampledata)

            var ids = sampledata.samples[0].otu_ids;
            console.log(ids)

            var sampleValues =  sampledata.samples[0].sample_values.slice(0,10).reverse();
            console.log(sampleValues)

            var labels =  sampledata.samples[0].otu_labels.slice(0,10);
            console.log (labels)

        // Retrieve top 10 otu ids for OTU plot. 
            var OTU_top = ( sampledata.samples[0].otu_ids.slice(0, 10)).reverse();

        // Retrieve otu id's for the plot.
            var OTU_id = OTU_top.map(d => "OTU " + d);
            console.log(`OTU IDS: ${OTU_id}`)

         // Gather top 10 labels for the plot.
            var labels =  sampledata.samples[0].otu_labels.slice(0,10);
            console.log(`OTU_labels: ${labels}`)
            var trace = {
                x: sampleValues,
                y: OTU_id,
                text: labels,
                marker: {
                color: 'blue'},
                type:"bar",
                orientation: "h",
            };
            // create data variable
            var data = [trace];
    
            // Create plot layout variables
            var layout = {
                title: "Top 10 OTU",
                yaxis:{
                    tickmode:"linear",
                },
                margin: {
                    l: 100,
                    r: 100,
                    t: 100,
                    b: 30
                }
            };
    
            // Create bar plot.
        Plotly.newPlot("bar", data, layout);
            // The bubble chart
            var trace1 = {
                x: sampledata.samples[0].otu_ids,
                y: sampledata.samples[0].sample_values,
                mode: "markers",
                marker: {
                    size: sampledata.samples[0].sample_values,
                    color: sampledata.samples[0].otu_ids
                },
                text:  sampledata.samples[0].otu_labels
    
            };
    
            // Set layout for bubble plot.
            var layout_2 = {
                xaxis:{title: "OTU ID"},
                height: 600,
                width: 1000
            };
    
            // Creating data variable 
            var data1 = [trace1];
    
        // Create bubble plot
        Plotly.newPlot("bubble", data1, layout_2); 
        
        });
    }
    //Get necessary data





    
  

