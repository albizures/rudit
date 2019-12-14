import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пировать: PerfectVerb = {
  name: Word('пировать', 5),
  singular1stPerson: Word('пирую', 3),
  singular2ndPerson: Word('пируешь', 3),
  singular3rdPerson: Word('пирует', 3),
  plural1stPerson: Word('пируем', 3),
  plural2ndPerson: Word('пируете', 3),
  plural3rdPerson: Word('пируют', 3),
  masculinePast: Word('пировал', 5),
  femininePast: Word('пировала', 5),
  neuterPast: Word('пировало', 5),
  pluralPast: Word('пировали', 5),
  imperativeInformal: Word('пируй', 3),
  imperativeFormal: Word('пируйте', 3),
  imperfect: [],
};

perfectVerbs.set(пировать.name.text, пировать);

export { пировать };