import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазвучать: PerfectVerb = {
  name: Word('зазвучать', 6),
  singular1stPerson: Word('зазвучу', 6),
  singular2ndPerson: Word('зазвучишь', 6),
  singular3rdPerson: Word('зазвучит', 6),
  plural1stPerson: Word('зазвучим', 6),
  plural2ndPerson: Word('зазвучите', 6),
  plural3rdPerson: Word('зазвучат', 6),
  masculinePast: Word('зазвучал', 6),
  femininePast: Word('зазвучала', 6),
  neuterPast: Word('зазвучало', 6),
  pluralPast: Word('зазвучали', 6),
  imperativeInformal: Word('зазвучи', 6),
  imperativeFormal: Word('зазвучите', 6),
  imperfect: [],
};

perfectVerbs.set(зазвучать.name.text, зазвучать);

export { зазвучать };