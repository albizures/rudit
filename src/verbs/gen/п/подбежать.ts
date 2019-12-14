import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбежать: PerfectVerb = {
  name: Word('подбежать', 6),
  singular1stPerson: Word('подбегу', 6),
  singular2ndPerson: Word('подбежишь', 6),
  singular3rdPerson: Word('подбежит', 6),
  plural1stPerson: Word('подбежим', 6),
  plural2ndPerson: Word('подбежите', 6),
  plural3rdPerson: Word('подбегут', 6),
  masculinePast: Word('подбежал', 6),
  femininePast: Word('подбежала', 6),
  neuterPast: Word('подбежало', 6),
  pluralPast: Word('подбежали', 6),
  imperativeInformal: Word('подбеги', 6),
  imperativeFormal: Word('подбегите', 6),
  imperfect: [],
};

perfectVerbs.set(подбежать.name.text, подбежать);

export { подбежать };