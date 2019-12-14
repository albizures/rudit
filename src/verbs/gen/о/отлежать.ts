import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлежать: PerfectVerb = {
  name: Word('отлежать', 5),
  singular1stPerson: Word('отлежу', 5),
  singular2ndPerson: Word('отлежишь', 5),
  singular3rdPerson: Word('отлежит', 5),
  plural1stPerson: Word('отлежим', 5),
  plural2ndPerson: Word('отлежите', 5),
  plural3rdPerson: Word('отлежат', 5),
  masculinePast: Word('отлежал', 5),
  femininePast: Word('отлежала', 5),
  neuterPast: Word('отлежало', 5),
  pluralPast: Word('отлежали', 5),
  imperativeInformal: Word('отлежи', 5),
  imperativeFormal: Word('отлежите', 5),
  imperfect: [],
};

perfectVerbs.set(отлежать.name.text, отлежать);

export { отлежать };