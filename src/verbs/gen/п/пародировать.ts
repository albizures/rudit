import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пародировать: PerfectVerb = {
  name: Word('пародировать', 5),
  singular1stPerson: Word('пародирую', 5),
  singular2ndPerson: Word('пародируешь', 5),
  singular3rdPerson: Word('пародирует', 5),
  plural1stPerson: Word('пародируем', 5),
  plural2ndPerson: Word('пародируете', 5),
  plural3rdPerson: Word('пародируют', 5),
  masculinePast: Word('пародировал', 5),
  femininePast: Word('пародировала', 5),
  neuterPast: Word('пародировало', 5),
  pluralPast: Word('пародировали', 5),
  imperativeInformal: Word('пародируй', 5),
  imperativeFormal: Word('пародируйте', 5),
  imperfect: [],
};

perfectVerbs.set(пародировать.name.text, пародировать);

export { пародировать };