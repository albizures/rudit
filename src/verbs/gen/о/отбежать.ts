import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбежать: PerfectVerb = {
  name: Word('отбежать', 5),
  singular1stPerson: Word('отбегу', 5),
  singular2ndPerson: Word('отбежишь', 5),
  singular3rdPerson: Word('отбежит', 5),
  plural1stPerson: Word('отбежим', 5),
  plural2ndPerson: Word('отбежите', 5),
  plural3rdPerson: Word('отбегут', 5),
  masculinePast: Word('отбежал', 5),
  femininePast: Word('отбежала', 5),
  neuterPast: Word('отбежало', 5),
  pluralPast: Word('отбежали', 5),
  imperativeInformal: Word('отбеги', 5),
  imperativeFormal: Word('отбегите', 5),
  imperfect: [],
};

perfectVerbs.set(отбежать.name.text, отбежать);

export { отбежать };