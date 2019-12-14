import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбегать: PerfectVerb = {
  name: Word('отбегать', 5),
  singular1stPerson: Word('отбегаю', 5),
  singular2ndPerson: Word('отбегаешь', 5),
  singular3rdPerson: Word('отбегает', 5),
  plural1stPerson: Word('отбегаем', 5),
  plural2ndPerson: Word('отбегаете', 5),
  plural3rdPerson: Word('отбегают', 5),
  masculinePast: Word('отбегал', 5),
  femininePast: Word('отбегала', 5),
  neuterPast: Word('отбегало', 5),
  pluralPast: Word('отбегали', 5),
  imperativeInformal: Word('отбегай', 5),
  imperativeFormal: Word('отбегайте', 5),
  imperfect: [],
};

perfectVerbs.set(отбегать.name.text, отбегать);

export { отбегать };