# TTS Model comparisons with an inhouse single speaker dataset
Here are audio samples synthesized from different TTS architectures. The dataset is 10 hours , 42 minutes of a single female speaker. It was recorded in a studio environment for the best output.

## sentences
* **Sample #01**: Amaanyi poliisi g'etadde ku muyiggo
* **Sample #02**: Musono ki ogwo ogw’enviiri?
* **Sample #03**: Omuganda amanyi nti omuntu alina emmeeme bbiri.
* **Sample #04**: Tolya wadde okubaaga ekinyonyi ekifudde oba ekirwadde.
* **Sample #05**: Obulwadde buno businga kuba bwa mutawaana mu bifo ebinnyuukirivu ennyo, omutera okutonnya enkuba ennyingi ate ng’ebitooke bisimbiddwa kumuukumu.

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


# English Hifigan v2 vocder by coqui
> Details about the model: (todo: link)
> Tacotron2 + DDC: 302k steps trained + Hifigan_v2 coqui vocoder

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
    <td>Amaanyi poliisi g'etadde ku muyiggo</td>
    <td><audio controls="" preload="none"><source src="samples/sample01-griffin-lim.wav"></audio></td>
  </tr>
  <tr>
    <td>02</td>
    <td>Musono ki ogwo ogw’enviiri?</td>
    <td><audio controls="" preload="none"><source src="samples/sample02-griffin-lim.wav"></audio></td>
  </tr>
  <tr>
    <td>03</td>
    <td>Omuganda amanyi nti omuntu alina emmeeme bbiri.</td>
    <td><audio controls="" preload="none"><source src="samples/sample03-griffin-lim.wav"></audio></td>
  </tr>
  <tr>
    <td>04</td>
    <td>Tolya wadde okubaaga ekinyonyi ekifudde oba ekirwadde.</td>
    <td><audio controls="" preload="none"><source src="samples/sample04-griffin-lim.wav"></audio></td>
  </tr>
  <tr>
    <td>05</td>
    <td>Obulwadde buno businga kuba bwa mutawaana mu bifo ebinnyuukirivu ennyo, omutera okutonnya enkuba ennyingi ate ng’ebitooke bisimbiddwa kumuukumu.</td>
    <td><audio controls="" preload="none"><source src="samples/sample05-griffin-lim.wav"></audio></td>
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
    <td>Amaanyi poliisi g'etadde ku muyiggo</td>
    <td><audio controls="" preload="none"><source src="samples/sample01-vits.wav"></audio></td>
  </tr>
  <tr>
    <td>02</td>
    <td>Musono ki ogwo ogw’enviiri?</td>
    <td><audio controls="" preload="none"><source src="samples/sample02-vits.wav"></audio></td>
  </tr>
  <tr>
    <td>03</td>
    <td>Omuganda amanyi nti omuntu alina emmeeme bbiri.</td>
    <td><audio controls="" preload="none"><source src="samples/sample03-vits.wav"></audio></td>
  </tr>
  <tr>
    <td>04</td>
    <td>Tolya wadde okubaaga ekinyonyi ekifudde oba ekirwadde.</td>
    <td><audio controls="" preload="none"><source src="samples/sample04-vits.wav"></audio></td>
  </tr>
  <tr>
    <td>05</td>
    <td>Obulwadde buno businga kuba bwa mutawaana mu bifo ebinnyuukirivu ennyo, omutera okutonnya enkuba ennyingi ate ng’ebitooke bisimbiddwa kumuukumu.</td>
    <td><audio controls="" preload="none"><source src="samples/sample05-vits.wav"></audio></td>
  </tr>
</tbody>
</table>

</dl>


# GlowTTS / Waveglow
> todo