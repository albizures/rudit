import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const буксовать: PerfectVerb = {
  name: Word('буксовать', 6),
  singular1stPerson: Word('буксую', 4),
  singular2ndPerson: Word('буксуешь', 4),
  singular3rdPerson: Word('буксует', 4),
  plural1stPerson: Word('буксуем', 4),
  plural2ndPerson: Word('буксуете', 4),
  plural3rdPerson: Word('буксуют', 4),
  masculinePast: Word('буксовал', 6),
  femininePast: Word('буксовала', 6),
  neuterPast: Word('буксовало', 6),
  pluralPast: Word('буксовали', 6),
  imperativeInformal: Word('буксуй', 4),
  imperativeFormal: Word('буксуйте', 4),
  imperfect: [],
};

perfectVerbs.set(буксовать.name.text, буксовать);

export { буксовать };