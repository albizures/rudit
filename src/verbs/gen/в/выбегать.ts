import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбегать: PerfectVerb = {
  name: Word('выбегать', 1),
  singular1stPerson: Word('выбегаю', 1),
  singular2ndPerson: Word('выбегаешь', 1),
  singular3rdPerson: Word('выбегает', 1),
  plural1stPerson: Word('выбегаем', 1),
  plural2ndPerson: Word('выбегаете', 1),
  plural3rdPerson: Word('выбегают', 1),
  masculinePast: Word('выбегал', 1),
  femininePast: Word('выбегала', 1),
  neuterPast: Word('выбегало', 1),
  pluralPast: Word('выбегали', 1),
  imperativeInformal: Word('выбегай', 1),
  imperativeFormal: Word('выбегайте', 1),
  imperfect: [],
};

perfectVerbs.set(выбегать.name.text, выбегать);

export { выбегать };