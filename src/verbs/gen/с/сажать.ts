import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сажать: PerfectVerb = {
  name: Word('сажать', 3),
  singular1stPerson: Word('сажаю', 3),
  singular2ndPerson: Word('сажаешь', 3),
  singular3rdPerson: Word('сажает', 3),
  plural1stPerson: Word('сажаем', 3),
  plural2ndPerson: Word('сажаете', 3),
  plural3rdPerson: Word('сажают', 3),
  masculinePast: Word('сажал', 3),
  femininePast: Word('сажала', 3),
  neuterPast: Word('сажало', 3),
  pluralPast: Word('сажали', 3),
  imperativeInformal: Word('сажай', 3),
  imperativeFormal: Word('сажайте', 3),
  imperfect: ['посадить'],
};

perfectVerbs.set(сажать.name.text, сажать);

export { сажать };