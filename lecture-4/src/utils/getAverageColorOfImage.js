import memoize from './memoize';

export const getAverageColorOfImage = memoize(function getAverageColorOfImage(
  imgElement
) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');
  const averageColor = {
    r: 0,
    g: 0,
    b: 0,
  };

  if (!context) {
    return averageColor;
  }

  const width = (canvas.width =
    imgElement.naturalWidth || imgElement.offsetWidth || imgElement.width);
  const height = (canvas.height =
    imgElement.naturalHeight || imgElement.offsetHeight || imgElement.height);

  // 캔버스의 사이즈를 줄임
  canvas.width = width / 3;
  canvas.height = height / 3;

  context.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

  const imageData = context.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  ).data;
  const length = imageData.length;

  for (let i = 0; i < length; i += 4 * 10) {
    averageColor.r += imageData[i];
    averageColor.g += imageData[i + 1];
    averageColor.b += imageData[i + 2];
  }

  const count = length / (4 * 10);
  averageColor.r = ~~(averageColor.r / count); // ~~ => convert to int
  averageColor.g = ~~(averageColor.g / count);
  averageColor.b = ~~(averageColor.b / count);

  return averageColor;
},
'src');
