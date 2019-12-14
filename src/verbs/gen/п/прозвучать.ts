import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прозвучать: PerfectVerb = {
  name: Word('прозвучать', 7),
  singular1stPerson: Word('прозвучу', 7),
  singular2ndPerson: Word('прозвучишь', 7),
  singular3rdPerson: Word('прозвучит', 7),
  plural1stPerson: Word('прозвучим', 7),
  plural2ndPerson: Word('прозвучите', 7),
  plural3rdPerson: Word('прозвучат', 7),
  masculinePast: Word('прозвучал', 7),
  femininePast: Word('прозвучала', 7),
  neuterPast: Word('прозвучало', 7),
  pluralPast: Word('прозвучали', 7),
  imperativeInformal: Word('прозвучи', 7),
  imperativeFormal: Word('прозвучите', 7),
  imperfect: [],
};

perfectVerbs.set(прозвучать.name.text, прозвучать);

export { прозвучать };