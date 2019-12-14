import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const депонировать: PerfectVerb = {
  name: Word('депонировать', 5),
  singular1stPerson: Word('депонирую', 5),
  singular2ndPerson: Word('депонируешь', 5),
  singular3rdPerson: Word('депонирует', 5),
  plural1stPerson: Word('депонируем', 5),
  plural2ndPerson: Word('депонируете', 5),
  plural3rdPerson: Word('депонируют', 5),
  masculinePast: Word('депонировал', 5),
  femininePast: Word('депонировала', 5),
  neuterPast: Word('депонировало', 5),
  pluralPast: Word('депонировали', 5),
  imperativeInformal: Word('депонируй', 5),
  imperativeFormal: Word('депонируйте', 5),
  imperfect: [],
};

perfectVerbs.set(депонировать.name.text, депонировать);

export { депонировать };