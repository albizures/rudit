import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вбежать: PerfectVerb = {
  name: Word('вбежать', 4),
  singular1stPerson: Word('вбегу', 4),
  singular2ndPerson: Word('вбежишь', 4),
  singular3rdPerson: Word('вбежит', 4),
  plural1stPerson: Word('вбежим', 4),
  plural2ndPerson: Word('вбежите', 4),
  plural3rdPerson: Word('вбегут', 4),
  masculinePast: Word('вбежал', 4),
  femininePast: Word('вбежала', 4),
  neuterPast: Word('вбежало', 4),
  pluralPast: Word('вбежали', 4),
  imperativeInformal: Word('вбеги', 4),
  imperativeFormal: Word('вбегите', 4),
  imperfect: [],
};

perfectVerbs.set(вбежать.name.text, вбежать);

export { вбежать };