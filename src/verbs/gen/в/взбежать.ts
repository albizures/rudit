import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбежать: PerfectVerb = {
  name: Word('взбежать', 5),
  singular1stPerson: Word('взбегу', 5),
  singular2ndPerson: Word('взбежишь', 5),
  singular3rdPerson: Word('взбежит', 5),
  plural1stPerson: Word('взбежим', 5),
  plural2ndPerson: Word('взбежите', 5),
  plural3rdPerson: Word('взбегут', 5),
  masculinePast: Word('взбежал', 5),
  femininePast: Word('взбежала', 5),
  neuterPast: Word('взбежало', 5),
  pluralPast: Word('взбежали', 5),
  imperativeInformal: Word('взбеги', 5),
  imperativeFormal: Word('взбегите', 5),
  imperfect: [],
};

perfectVerbs.set(взбежать.name.text, взбежать);

export { взбежать };