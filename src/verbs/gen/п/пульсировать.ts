import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пульсировать: PerfectVerb = {
  name: Word('пульсировать', 5),
  singular1stPerson: Word('пульсирую', 5),
  singular2ndPerson: Word('пульсируешь', 5),
  singular3rdPerson: Word('пульсирует', 5),
  plural1stPerson: Word('пульсируем', 5),
  plural2ndPerson: Word('пульсируете', 5),
  plural3rdPerson: Word('пульсируют', 5),
  masculinePast: Word('пульсировал', 5),
  femininePast: Word('пульсировала', 5),
  neuterPast: Word('пульсировало', 5),
  pluralPast: Word('пульсировали', 5),
  imperativeInformal: Word('пульсируй', 5),
  imperativeFormal: Word('пульсируйте', 5),
  imperfect: [],
};

perfectVerbs.set(пульсировать.name.text, пульсировать);

export { пульсировать };