import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реализовать: PerfectVerb = {
  name: Word('реализовать', 8),
  singular1stPerson: Word('реализую', 6),
  singular2ndPerson: Word('реализуешь', 6),
  singular3rdPerson: Word('реализует', 6),
  plural1stPerson: Word('реализуем', 6),
  plural2ndPerson: Word('реализуете', 6),
  plural3rdPerson: Word('реализуют', 6),
  masculinePast: Word('реализовал', 8),
  femininePast: Word('реализовала', 8),
  neuterPast: Word('реализовало', 8),
  pluralPast: Word('реализовали', 8),
  imperativeInformal: Word('реализуй', 6),
  imperativeFormal: Word('реализуйте', 6),
  imperfect: [],
};

perfectVerbs.set(реализовать.name.text, реализовать);

export { реализовать };