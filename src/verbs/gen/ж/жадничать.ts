import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жадничать: PerfectVerb = {
  name: Word('жадничать', 1),
  singular1stPerson: Word('жадничаю', 1),
  singular2ndPerson: Word('жадничаешь', 1),
  singular3rdPerson: Word('жадничает', 1),
  plural1stPerson: Word('жадничаем', 1),
  plural2ndPerson: Word('жадничаете', 1),
  plural3rdPerson: Word('жадничают', 1),
  masculinePast: Word('жадничал', 1),
  femininePast: Word('жадничала', 1),
  neuterPast: Word('жадничало', 1),
  pluralPast: Word('жадничали', 1),
  imperativeInformal: Word('жадничай', 1),
  imperativeFormal: Word('жадничайте', 1),
  imperfect: [],
};

perfectVerbs.set(жадничать.name.text, жадничать);

export { жадничать };