import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстучать: PerfectVerb = {
  name: Word('отстучать', 6),
  singular1stPerson: Word('отстучу', 6),
  singular2ndPerson: Word('отстучишь', 6),
  singular3rdPerson: Word('отстучит', 6),
  plural1stPerson: Word('отстучим', 6),
  plural2ndPerson: Word('отстучите', 6),
  plural3rdPerson: Word('отстучат', 6),
  masculinePast: Word('отстучал', 6),
  femininePast: Word('отстучала', 6),
  neuterPast: Word('отстучало', 6),
  pluralPast: Word('отстучали', 6),
  imperativeInformal: Word('отстучи', 6),
  imperativeFormal: Word('отстучите', 6),
  imperfect: [],
};

perfectVerbs.set(отстучать.name.text, отстучать);

export { отстучать };