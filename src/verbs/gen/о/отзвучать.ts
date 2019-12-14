import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отзвучать: PerfectVerb = {
  name: Word('отзвучать', 6),
  singular1stPerson: Word('отзвучу', 6),
  singular2ndPerson: Word('отзвучишь', 6),
  singular3rdPerson: Word('отзвучит', 6),
  plural1stPerson: Word('отзвучим', 6),
  plural2ndPerson: Word('отзвучите', 6),
  plural3rdPerson: Word('отзвучат', 6),
  masculinePast: Word('отзвучал', 6),
  femininePast: Word('отзвучала', 6),
  neuterPast: Word('отзвучало', 6),
  pluralPast: Word('отзвучали', 6),
  imperativeInformal: Word('отзвучи', 6),
  imperativeFormal: Word('отзвучите', 6),
  imperfect: [],
};

perfectVerbs.set(отзвучать.name.text, отзвучать);

export { отзвучать };