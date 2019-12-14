import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const донестись: PerfectVerb = {
  name: Word('донестись', 6),
  singular1stPerson: Word('донесусь', 5),
  singular2ndPerson: Word('донесёшься', 5),
  singular3rdPerson: Word('донесётся', 5),
  plural1stPerson: Word('донесёмся', 5),
  plural2ndPerson: Word('донесётесь', 5),
  plural3rdPerson: Word('донесутся', 5),
  masculinePast: Word('донёсся', 3),
  femininePast: Word('донеслась', 6),
  neuterPast: Word('донеслось', 6),
  pluralPast: Word('донеслись', 6),
  imperativeInformal: Word('донесись', 5),
  imperativeFormal: Word('донеситесь', 5),
  imperfect: [],
};

perfectVerbs.set(донестись.name.text, донестись);

export { донестись };