import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изнеживать: PerfectVerb = {
  name: Word('изнеживать', 3),
  singular1stPerson: Word('изнеживаю', 3),
  singular2ndPerson: Word('изнеживаешь', 3),
  singular3rdPerson: Word('изнеживает', 3),
  plural1stPerson: Word('изнеживаем', 3),
  plural2ndPerson: Word('изнеживаете', 3),
  plural3rdPerson: Word('изнеживают', 3),
  masculinePast: Word('изнеживал', 3),
  femininePast: Word('изнеживала', 3),
  neuterPast: Word('изнеживало', 3),
  pluralPast: Word('изнеживали', 3),
  imperativeInformal: Word('изнеживай', 3),
  imperativeFormal: Word('изнеживайте', 3),
  imperfect: [],
};

perfectVerbs.set(изнеживать.name.text, изнеживать);

export { изнеживать };