import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проповедовать: PerfectVerb = {
  name: Word('проповедовать', 6),
  singular1stPerson: Word('проповедую', 6),
  singular2ndPerson: Word('проповедуешь', 6),
  singular3rdPerson: Word('проповедует', 6),
  plural1stPerson: Word('проповедуем', 6),
  plural2ndPerson: Word('проповедуете', 6),
  plural3rdPerson: Word('проповедуют', 6),
  masculinePast: Word('проповедовал', 6),
  femininePast: Word('проповедовала', 6),
  neuterPast: Word('проповедовало', 6),
  pluralPast: Word('проповедовали', 6),
  imperativeInformal: Word('проповедуй', 6),
  imperativeFormal: Word('проповедуйте', 6),
  imperfect: [],
};

perfectVerbs.set(проповедовать.name.text, проповедовать);

export { проповедовать };