# Model comparison based on an inhouse Emergent AI Luganda single speaker dataset
Here are audio samples with different TTS architectures. The dataset is 10 hours , 42 minutes of a single female speaker recorded in a treated environment for the best quality output.

## sentences
* **Sample #01**: Eure Schoko-Bonbons sind sagenhaft lecker!
* **Sample #02**: Eure Tröte nervt.
* **Sample #03**: Europa und Asien zusammengenommen wird auch als Eurasien bezeichnet.
* **Sample #04**: Euer Plan hat ja toll geklappt.
* *Sample #05: "In den alten Zeiten, wo das Wünschen noch geholfen hat, lebte ein König, dessen Töchter waren alle schön ..." (Anfang vom "Froschkönig")*

# Ground truth
Some sample original recordings from the inhouse dataset.

<dl>

<table>
<thead>
  <tr>
    <th>Sample</th>
    <th>Text</th>
    <th>Audio</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>01</td>
    <td>Okwogera mu ngeri ey’amakulu mu mbeera yonna.</td>
    <td><audio controls="" preload="none"><source src="samples/sample01-gt.wav"></audio></td>
  </tr>
  <tr>
    <td>02</td>
    <td>Omu ku booluganda b’abavubuka bano, Francis Obbo bwe yagambye.</td>
    <td><audio controls="" preload="none"><source src="samples/sample02-gt.wav"></audio></td>
  </tr>
  <tr>
    <td>03</td>
    <td>Amawanga agerinaanye getaaga okukwatagana.</td>
    <td><audio controls="" preload="none"><source src="samples/sample03-gt.wav"></audio></td>
  </tr>
  <tr>
    <td>04</td>
    <td>Kirungi nnyo omulunzi okufuuyira embuzi ze okusobola okuzigobako enkwa.</td>
    <td><audio controls="" preload="none"><source src="samples/sample04-gt.wav"></audio></td>
  </tr>
</tbody>
</table>

</dl>


# Griffin Lim
> Details about the model: (todo: link)
> Tacotron2 + DDC: 302k steps trained

<dl>

<table>
<thead>
  <tr>
    <th>Sample</th>
    <th>Text</th>
    <th>Audio</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>01</td>
    <td>Eure Schoko-Bonbons sind sagenhaft lecker</td>
    <td><audio controls="" preload="none"><source src="samples/sample01-gt.wav"></audio></td>
  </tr>
  <tr>
    <td>02</td>
    <td>Eure Tröte nervt</td>
    <td><audio controls="" preload="none"><source src="samples/sample02-gt.wav"></audio></td>
  </tr>
  <tr>
    <td>03</td>
    <td>Europa und Asien zusammengenommen wird auch als Eurasien bezeichnet</td>
    <td><audio controls="" preload="none"><source src="samples/sample03-gt.wav"></audio></td>
  </tr>
  <tr>
    <td>04</td>
    <td>Euer Plan hat ja toll geklappt.</td>
    <td><audio controls="" preload="none"><source src="samples/sample04-gt.wav"></audio></td>
  </tr>
</tbody>
</table>

</dl>
# WaveRNN
> todo

# WaveGrad
> todo

# HifiGAN
> todo


# End to End TTS architecture - VITS 
> VITS: 63k steps trained

<dl>

<table>
<thead>
  <tr>
    <th>Sample</th>
    <th>Text</th>
    <th>Audio</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>01</td>
    <td>Eure Schoko-Bonbons sind sagenhaft lecker</td>
    <td><audio controls="" preload="none"><source src="samples/sample01-pwgan.wav"></audio></td>
  </tr>
  <tr>
    <td>02</td>
    <td>Eure Tröte nervt</td>
    <td><audio controls="" preload="none"><source src="samples/sample02-pwgan.wav"></audio></td>
  </tr>
  <tr>
    <td>03</td>
    <td>Europa und Asien zusammengenommen wird auch als Eurasien bezeichnet</td>
    <td><audio controls="" preload="none"><source src="samples/sample03-pwgan.wav"></audio></td>
  </tr>
  <tr>
    <td>04</td>
    <td>Euer Plan hat ja toll geklappt.</td>
    <td><audio controls="" preload="none"><source src="samples/sample04-pwgan.wav"></audio></td>
  </tr>
  <tr>
    <td>05</td>
    <td>Anfang vom Froschkönig</td>
    <td><audio controls="" preload="none"><source src="samples/sample05-pwgan.wav"></audio></td>
  </tr>
</tbody>
</table>

</dl>


# GlowTTS / Waveglow
> todo