import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застучать: PerfectVerb = {
  name: Word('застучать', 6),
  singular1stPerson: Word('застучу', 6),
  singular2ndPerson: Word('застучишь', 6),
  singular3rdPerson: Word('застучит', 6),
  plural1stPerson: Word('застучим', 6),
  plural2ndPerson: Word('застучите', 6),
  plural3rdPerson: Word('застучат', 6),
  masculinePast: Word('застучал', 6),
  femininePast: Word('застучала', 6),
  neuterPast: Word('застучало', 6),
  pluralPast: Word('застучали', 6),
  imperativeInformal: Word('застучи', 6),
  imperativeFormal: Word('застучите', 6),
  imperfect: [],
};

perfectVerbs.set(застучать.name.text, застучать);

export { застучать };