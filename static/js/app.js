function getPlots(id) {
    //Read data from samples.json 
        d3.json("samples.json").then (sampledata =>{
            console.log(sampledata)

            var ids = sampledata.samples[0].otu_ids;
            console.log(ids)

            var sampleValues =  sampledata.samples[0].sample_values.slice(0,10).reverse();
            console.log(sampleValues)

            var labels =  sampledata.samples[0].otu_labels.slice(0,10);
            console.log (labels)

        // Gather top 10 otu ids for otu plot. 
            var OTU_top = ( sampledata.samples[0].otu_ids.slice(0, 10)).reverse();

        // Gather otu id's for plot.
            var OTU_id = OTU_top.map(d => "OTU " + d);
            console.log(`OTU IDS: ${OTU_id}`)

         // Gather top 10 labels for plot
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

            // Create data variable
            var data = [trace];
    
            // Create variable for layout to create the layout of the plot.
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
    
            // Create bar plot
        Plotly.newPlot("bar", data, layout);

            // Bubble chart
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
    
            // Create layout for bubble plot.
            var layout_2 = {
                xaxis:{title: "OTU ID"},
                height: 600,
                width: 1000
            };
    
            // Create data variable 
            var data1 = [trace1];
    
        // Create bubble plot
        Plotly.newPlot("bubble", data1, layout_2); 
        
        });
    }  
    // Created function to gather necessary data
    function getDemoInfo(id) {

    // Gather data by reading json file. 
        d3.json("samples.json").then((data)=> {

    // Get the metadata info for the demographic panel
            var metadata = data.metadata;
    
            console.log(metadata)
    
          // Filter metadata inforomation by id

           var result = metadata.filter(meta => meta.id.toString() === id)[0];

          // Select demographic panel to input data
           var demographicInfo = d3.select("#sample-metadata");
            
         // Clear the demographic info panel each time before getting new id info
           demographicInfo.html("");
    
         // Grab data for the id and append the info to the panel
            Object.entries(result).forEach((key) => {   
                demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
            });
        });
    }
    // Create the function for the change event
    function optionChanged(id) {
        getPlots(id);
        getDemoInfo(id);
    }
    
    // Function for data rendering
    function init() {

        // Select dropdown menu 
        var dropdown = d3.select("#selDataset");
    
        // Read the data 
        d3.json("samples.json").then((data)=> {
            console.log(data)
    
            // Get the id data to the dropdwown menu
            data.names.forEach(function(name) {
                dropdown.append("option").text(name).property("value");
            });
    
            // Calling functions to display plots and data.
            getPlots(data.names[0]);
            getDemoInfo(data.names[0]);
        });
    }
    
    init();





    
  

