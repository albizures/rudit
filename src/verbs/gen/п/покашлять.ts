import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покашлять: PerfectVerb = {
  name: Word('покашлять', 3),
  singular1stPerson: Word('покашляю', 3),
  singular2ndPerson: Word('покашляешь', 3),
  singular3rdPerson: Word('покашляет', 3),
  plural1stPerson: Word('покашляем', 3),
  plural2ndPerson: Word('покашляете', 3),
  plural3rdPerson: Word('покашляют', 3),
  masculinePast: Word('покашлял', 3),
  femininePast: Word('покашляла', 3),
  neuterPast: Word('покашляло', 3),
  pluralPast: Word('покашляли', 3),
  imperativeInformal: Word('покашляй', 3),
  imperativeFormal: Word('покашляйте', 3),
  imperfect: [],
};

perfectVerbs.set(покашлять.name.text, покашлять);

export { покашлять };