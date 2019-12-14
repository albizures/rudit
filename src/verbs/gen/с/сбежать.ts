import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбежать: PerfectVerb = {
  name: Word('сбежать', 4),
  singular1stPerson: Word('сбегу', 4),
  singular2ndPerson: Word('сбежишь', 4),
  singular3rdPerson: Word('сбежит', 4),
  plural1stPerson: Word('сбежим', 4),
  plural2ndPerson: Word('сбежите', 4),
  plural3rdPerson: Word('сбегут', 4),
  masculinePast: Word('сбежал', 4),
  femininePast: Word('сбежала', 4),
  neuterPast: Word('сбежало', 4),
  pluralPast: Word('сбежали', 4),
  imperativeInformal: Word('сбеги', 4),
  imperativeFormal: Word('сбегите', 4),
  imperfect: [],
};

perfectVerbs.set(сбежать.name.text, сбежать);

export { сбежать };