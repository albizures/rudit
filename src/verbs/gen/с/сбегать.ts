import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбегать: PerfectVerb = {
  name: Word('сбегать', 2),
  singular1stPerson: Word('сбегаю', 2),
  singular2ndPerson: Word('сбегаешь', 2),
  singular3rdPerson: Word('сбегает', 2),
  plural1stPerson: Word('сбегаем', 2),
  plural2ndPerson: Word('сбегаете', 2),
  plural3rdPerson: Word('сбегают', 2),
  masculinePast: Word('сбегал', 2),
  femininePast: Word('сбегала', 2),
  neuterPast: Word('сбегало', 2),
  pluralPast: Word('сбегали', 2),
  imperativeInformal: Word('сбегай', 2),
  imperativeFormal: Word('сбегайте', 2),
  imperfect: [],
};

perfectVerbs.set(сбегать.name.text, сбегать);

export { сбегать };