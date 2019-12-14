import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уподоблять: PerfectVerb = {
  name: Word('уподоблять', 7),
  singular1stPerson: Word('уподобляю', 7),
  singular2ndPerson: Word('уподобляешь', 7),
  singular3rdPerson: Word('уподобляет', 7),
  plural1stPerson: Word('уподобляем', 7),
  plural2ndPerson: Word('уподобляете', 7),
  plural3rdPerson: Word('уподобляют', 7),
  masculinePast: Word('уподоблял', 7),
  femininePast: Word('уподобляла', 7),
  neuterPast: Word('уподобляло', 7),
  pluralPast: Word('уподобляли', 7),
  imperativeInformal: Word('уподобляй', 7),
  imperativeFormal: Word('уподобляйте', 7),
  imperfect: [],
};

perfectVerbs.set(уподоблять.name.text, уподоблять);

export { уподоблять };