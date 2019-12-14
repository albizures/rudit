import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлежать: PerfectVerb = {
  name: Word('подлежать', 6),
  singular1stPerson: Word('подлежу', 6),
  singular2ndPerson: Word('подлежишь', 6),
  singular3rdPerson: Word('подлежит', 6),
  plural1stPerson: Word('подлежим', 6),
  plural2ndPerson: Word('подлежите', 6),
  plural3rdPerson: Word('подлежат', 6),
  masculinePast: Word('подлежал', 6),
  femininePast: Word('подлежала', 6),
  neuterPast: Word('подлежало', 6),
  pluralPast: Word('подлежали', 6),
  imperativeInformal: Word('подлежи', 6),
  imperativeFormal: Word('подлежите', 6),
  imperfect: [],
};

perfectVerbs.set(подлежать.name.text, подлежать);

export { подлежать };