import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отломать: PerfectVerb = {
  name: Word('отломать', 5),
  singular1stPerson: Word('отломаю', 5),
  singular2ndPerson: Word('отломаешь', 5),
  singular3rdPerson: Word('отломает', 5),
  plural1stPerson: Word('отломаем', 5),
  plural2ndPerson: Word('отломаете', 5),
  plural3rdPerson: Word('отломают', 5),
  masculinePast: Word('отломал', 5),
  femininePast: Word('отломала', 5),
  neuterPast: Word('отломало', 5),
  pluralPast: Word('отломали', 5),
  imperativeInformal: Word('отломай', 5),
  imperativeFormal: Word('отломайте', 5),
  imperfect: [],
};

perfectVerbs.set(отломать.name.text, отломать);

export { отломать };