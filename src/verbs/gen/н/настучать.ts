import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настучать: PerfectVerb = {
  name: Word('настучать', 6),
  singular1stPerson: Word('настучу', 6),
  singular2ndPerson: Word('настучишь', 6),
  singular3rdPerson: Word('настучит', 6),
  plural1stPerson: Word('настучим', 6),
  plural2ndPerson: Word('настучите', 6),
  plural3rdPerson: Word('настучат', 6),
  masculinePast: Word('настучал', 6),
  femininePast: Word('настучала', 6),
  neuterPast: Word('настучало', 6),
  pluralPast: Word('настучали', 6),
  imperativeInformal: Word('настучи', 6),
  imperativeFormal: Word('настучите', 6),
  imperfect: [],
};

perfectVerbs.set(настучать.name.text, настучать);

export { настучать };