import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трактовать: PerfectVerb = {
  name: Word('трактовать', 7),
  singular1stPerson: Word('трактую', 5),
  singular2ndPerson: Word('трактуешь', 5),
  singular3rdPerson: Word('трактует', 5),
  plural1stPerson: Word('трактуем', 5),
  plural2ndPerson: Word('трактуете', 5),
  plural3rdPerson: Word('трактуют', 5),
  masculinePast: Word('трактовал', 7),
  femininePast: Word('трактовала', 7),
  neuterPast: Word('трактовало', 7),
  pluralPast: Word('трактовали', 7),
  imperativeInformal: Word('трактуй', 5),
  imperativeFormal: Word('трактуйте', 5),
  imperfect: [],
};

perfectVerbs.set(трактовать.name.text, трактовать);

export { трактовать };