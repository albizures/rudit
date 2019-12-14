import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изымать: PerfectVerb = {
  name: Word('изымать', 4),
  singular1stPerson: Word('изымаю', 4),
  singular2ndPerson: Word('изымаешь', 4),
  singular3rdPerson: Word('изымает', 4),
  plural1stPerson: Word('изымаем', 4),
  plural2ndPerson: Word('изымаете', 4),
  plural3rdPerson: Word('изымают', 4),
  masculinePast: Word('изымал', 4),
  femininePast: Word('изымала', 4),
  neuterPast: Word('изымало', 4),
  pluralPast: Word('изымали', 4),
  imperativeInformal: Word('изымай', 4),
  imperativeFormal: Word('изымайте', 4),
  imperfect: [],
};

perfectVerbs.set(изымать.name.text, изымать);

export { изымать };