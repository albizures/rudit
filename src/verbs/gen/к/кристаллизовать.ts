import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кристаллизовать: PerfectVerb = {
  name: Word('кристаллизовать', 12),
  singular1stPerson: Word('кристаллизую', 10),
  singular2ndPerson: Word('кристаллизуешь', 10),
  singular3rdPerson: Word('кристаллизует', 10),
  plural1stPerson: Word('кристаллизуем', 10),
  plural2ndPerson: Word('кристаллизуете', 10),
  plural3rdPerson: Word('кристаллизуют', 10),
  masculinePast: Word('кристаллизовал', 12),
  femininePast: Word('кристаллизовала', 12),
  neuterPast: Word('кристаллизовало', 12),
  pluralPast: Word('кристаллизовали', 12),
  imperativeInformal: Word('кристаллизуй', 10),
  imperativeFormal: Word('кристаллизуйте', 10),
  imperfect: [],
};

perfectVerbs.set(кристаллизовать.name.text, кристаллизовать);

export { кристаллизовать };