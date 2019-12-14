import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибежать: PerfectVerb = {
  name: Word('прибежать', 6),
  singular1stPerson: Word('прибегу', 6),
  singular2ndPerson: Word('прибежишь', 6),
  singular3rdPerson: Word('прибежит', 6),
  plural1stPerson: Word('прибежим', 6),
  plural2ndPerson: Word('прибежите', 6),
  plural3rdPerson: Word('прибегут', 6),
  masculinePast: Word('прибежал', 6),
  femininePast: Word('прибежала', 6),
  neuterPast: Word('прибежало', 6),
  pluralPast: Word('прибежали', 6),
  imperativeInformal: Word('прибеги', 6),
  imperativeFormal: Word('прибегите', 6),
  imperfect: [],
};

perfectVerbs.set(прибежать.name.text, прибежать);

export { прибежать };