import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const звучать: PerfectVerb = {
  name: Word('звучать', 4),
  singular1stPerson: Word('звучу', 4),
  singular2ndPerson: Word('звучишь', 4),
  singular3rdPerson: Word('звучит', 4),
  plural1stPerson: Word('звучим', 4),
  plural2ndPerson: Word('звучите', 4),
  plural3rdPerson: Word('звучат', 4),
  masculinePast: Word('', -1),
  femininePast: Word('', -1),
  neuterPast: Word('', -1),
  pluralPast: Word('', -1),
  imperativeInformal: Word('', -1),
  imperativeFormal: Word('', -1),
  imperfect: ['прозвучать'],
};

perfectVerbs.set(звучать.name.text, звучать);

export { звучать };