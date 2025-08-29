---
layout: page
title: Analyzing my library
description: A project to analyze the books I have read with embbedings and clusters.
img: assets/img/Umap3D.png
importance: 3
category: fun
---

In this project I took the data from all the books I have read in my life (that I marked in goodreads). With that I did a couple of things:


1) I cleaned the data and removed unnecesary columns.

2) Made an obsidian-like node graph of my books in relation to the tags (categories) I gave them.

3) Installed Gemma 3 locally to generate descriptions of the books I have read.

4) Embedded my library, in particular the Title, Author, Tags (I gave them while I read), and the description from the LLM for each book.

5) Used UMAP to reduce the dimension to 3D.

6) Clustered and gave each cluster the name of the tag that was the most recurrent, had to handle an outlier case with Berserk books.

Here you can see the 2 graphs:

[Obsidian-Like Graph](/assets/html/books_graph.html){:target="_blank"}

[MAP 3D](/assets/html/libros_clusters_3d_con_outliers.html){:target="_blank"}

[Cluster temporal](/assets/html/libros_temporal_clusters_con_outliers.html){:target="_blank"}
