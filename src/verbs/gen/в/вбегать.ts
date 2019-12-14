import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вбегать: PerfectVerb = {
  name: Word('вбегать', 4),
  singular1stPerson: Word('вбегаю', 4),
  singular2ndPerson: Word('вбегаешь', 4),
  singular3rdPerson: Word('вбегает', 4),
  plural1stPerson: Word('вбегаем', 4),
  plural2ndPerson: Word('вбегаете', 4),
  plural3rdPerson: Word('вбегают', 4),
  masculinePast: Word('вбегал', 4),
  femininePast: Word('вбегала', 4),
  neuterPast: Word('вбегало', 4),
  pluralPast: Word('вбегали', 4),
  imperativeInformal: Word('вбегай', 4),
  imperativeFormal: Word('вбегайте', 4),
  imperfect: [],
};

perfectVerbs.set(вбегать.name.text, вбегать);

export { вбегать };