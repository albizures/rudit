import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нестись: PerfectVerb = {
  name: Word('нестись', 4),
  singular1stPerson: Word('несусь', 3),
  singular2ndPerson: Word('несёшься', 3),
  singular3rdPerson: Word('несётся', 3),
  plural1stPerson: Word('несёмся', 3),
  plural2ndPerson: Word('несётесь', 3),
  plural3rdPerson: Word('несутся', 3),
  masculinePast: Word('нёсся', 1),
  femininePast: Word('неслась', 4),
  neuterPast: Word('неслось', 4),
  pluralPast: Word('неслись', 4),
  imperativeInformal: Word('несись', 3),
  imperativeFormal: Word('неситесь', 3),
  imperfect: ['пронестись','донеситсь','снестись'],
};

perfectVerbs.set(нестись.name.text, нестись);

export { нестись };