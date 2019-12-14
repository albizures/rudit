import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проследовать: PerfectVerb = {
  name: Word('проследовать', 5),
  singular1stPerson: Word('проследую', 5),
  singular2ndPerson: Word('проследуешь', 5),
  singular3rdPerson: Word('проследует', 5),
  plural1stPerson: Word('проследуем', 5),
  plural2ndPerson: Word('проследуете', 5),
  plural3rdPerson: Word('проследуют', 5),
  masculinePast: Word('проследовал', 5),
  femininePast: Word('проследовала', 5),
  neuterPast: Word('проследовало', 5),
  pluralPast: Word('проследовали', 5),
  imperativeInformal: Word('проследуй', 5),
  imperativeFormal: Word('проследуйте', 5),
  imperfect: [],
};

perfectVerbs.set(проследовать.name.text, проследовать);

export { проследовать };