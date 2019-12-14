import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добегать: PerfectVerb = {
  name: Word('добегать', 3),
  singular1stPerson: Word('добегаю', 3),
  singular2ndPerson: Word('добегаешь', 3),
  singular3rdPerson: Word('добегает', 3),
  plural1stPerson: Word('добегаем', 3),
  plural2ndPerson: Word('добегаете', 3),
  plural3rdPerson: Word('добегают', 3),
  masculinePast: Word('добегал', 3),
  femininePast: Word('добегала', 3),
  neuterPast: Word('добегало', 3),
  pluralPast: Word('добегали', 3),
  imperativeInformal: Word('добегай', 3),
  imperativeFormal: Word('добегайте', 3),
  imperfect: [],
};

perfectVerbs.set(добегать.name.text, добегать);

export { добегать };