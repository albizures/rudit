import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кульминировать: PerfectVerb = {
  name: Word('кульминировать', 7),
  singular1stPerson: Word('кульминирую', 7),
  singular2ndPerson: Word('кульминируешь', 7),
  singular3rdPerson: Word('кульминирует', 7),
  plural1stPerson: Word('кульминируем', 7),
  plural2ndPerson: Word('кульминируете', 7),
  plural3rdPerson: Word('кульминируют', 7),
  masculinePast: Word('кульминировал', 7),
  femininePast: Word('кульминировала', 7),
  neuterPast: Word('кульминировало', 7),
  pluralPast: Word('кульминировали', 7),
  imperativeInformal: Word('кульминируй', 7),
  imperativeFormal: Word('кульминируйте', 7),
  imperfect: [],
};

perfectVerbs.set(кульминировать.name.text, кульминировать);

export { кульминировать };