import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изломать: PerfectVerb = {
  name: Word('изломать', 5),
  singular1stPerson: Word('изломаю', 5),
  singular2ndPerson: Word('изломаешь', 5),
  singular3rdPerson: Word('изломает', 5),
  plural1stPerson: Word('изломаем', 5),
  plural2ndPerson: Word('изломаете', 5),
  plural3rdPerson: Word('изломают', 5),
  masculinePast: Word('изломал', 5),
  femininePast: Word('изломала', 5),
  neuterPast: Word('изломало', 5),
  pluralPast: Word('изломали', 5),
  imperativeInformal: Word('изломай', 5),
  imperativeFormal: Word('изломайте', 5),
  imperfect: [],
};

perfectVerbs.set(изломать.name.text, изломать);

export { изломать };