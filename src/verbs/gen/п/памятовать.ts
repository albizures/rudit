import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const памятовать: PerfectVerb = {
  name: Word('памятовать', 1),
  singular1stPerson: Word('памятую', 1),
  singular2ndPerson: Word('памятуешь', 1),
  singular3rdPerson: Word('памятует', 1),
  plural1stPerson: Word('памятуем', 1),
  plural2ndPerson: Word('памятуете', 1),
  plural3rdPerson: Word('памятуют', 1),
  masculinePast: Word('памятовал', 1),
  femininePast: Word('памятовала', 1),
  neuterPast: Word('памятовало', 1),
  pluralPast: Word('памятовали', 1),
  imperativeInformal: Word('памятуй', 1),
  imperativeFormal: Word('памятуйте', 1),
  imperfect: [],
};

perfectVerbs.set(памятовать.name.text, памятовать);

export { памятовать };