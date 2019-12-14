import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const компилировать: PerfectVerb = {
  name: Word('компилировать', 6),
  singular1stPerson: Word('компилирую', 6),
  singular2ndPerson: Word('компилируешь', 6),
  singular3rdPerson: Word('компилирует', 6),
  plural1stPerson: Word('компилируем', 6),
  plural2ndPerson: Word('компилируете', 6),
  plural3rdPerson: Word('компилируют', 6),
  masculinePast: Word('компилировал', 6),
  femininePast: Word('компилировала', 6),
  neuterPast: Word('компилировало', 6),
  pluralPast: Word('компилировали', 6),
  imperativeInformal: Word('компилируй', 6),
  imperativeFormal: Word('компилируйте', 6),
  imperfect: [],
};

perfectVerbs.set(компилировать.name.text, компилировать);

export { компилировать };