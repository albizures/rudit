import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обежать: PerfectVerb = {
  name: Word('обежать', 4),
  singular1stPerson: Word('обегу', 4),
  singular2ndPerson: Word('обежишь', 4),
  singular3rdPerson: Word('обежит', 4),
  plural1stPerson: Word('обежим', 4),
  plural2ndPerson: Word('обежите', 4),
  plural3rdPerson: Word('обегут', 4),
  masculinePast: Word('обежал', 4),
  femininePast: Word('обежала', 4),
  neuterPast: Word('обежало', 4),
  pluralPast: Word('обежали', 4),
  imperativeInformal: Word('обеги', 4),
  imperativeFormal: Word('обегите', 4),
  imperfect: [],
};

perfectVerbs.set(обежать.name.text, обежать);

export { обежать };