<html>
<h1>Plot.ly Homework - Belly Button Biodiversity</h1>
<br>
<h2> Deployment Link</h2>
:earth_americas:URL:https://plqualls.github.io/Plot.ly-Challenge/

<h2>Background</h2>
<p>The Belly Button Biodiversity dataset reveals that microbial species also referred to as OTUs, were present in more than 70% of people. At the same time, the rest of the human population was relatively rare.</p>

<h2>Objective</h2>
<p>In this assignment, the objective is to build an interactive dashboard utilizing the Belly Button Biodiversity dataset.</p>

<h2>:bar_chart:Required Visualizations</h2>
<ul>
<li>Horizontal Bar Chart</li>
<li>Bubble Chart </li>
</ul>

<h2>The Process</h2>
<p> The following information below are steps taken to accomplish the visualizations required for this assignment.</p>
<ul>
<li>Use the D3 library to read file <a href="https://github.com/plqualls/Plot.ly-Challenge/blob/main/samples.json">Samples.json</a></li>
<li>Create a horizontal bar chart with a dropdown menu to display the top ten OTUs found in an individual.</li>
<li>Use 'sample_values' as the values for the bar chart.</li>
<li>Use 'otu_ids' as the labels for the bar chart.</li>
<li>Use 'otu_labels' as the hovertext for the chart.</li>
<br>
<li>Create a bubble chart that displays each sample.</li>
 <li>Use `otu_ids` for the x values.</li>
<li>Use `sample_values` for the y values.</li>
<li>Use `sample_values` for the marker size.</li>
<li>Use `otu_ids` for the marker colors.</li>
<li>Use `otu_labels` for the text values.</li>
<br>
<li>Display the sample metadata, i.e., an individual's demographic information.</li>
<li>Display each key-value pair from the metadata JSON object somewhere on the page.</li>
<li>Update all of the plots any time that a new sample is selected.</li>
</ul>