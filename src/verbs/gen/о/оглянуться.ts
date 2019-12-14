import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглянуться: PerfectVerb = {
  name: Word('оглянуться', 5),
  singular1stPerson: Word('оглянусь', 5),
  singular2ndPerson: Word('оглянёшься', 0),
  singular3rdPerson: Word('оглянётся', 0),
  plural1stPerson: Word('оглянёмся', 0),
  plural2ndPerson: Word('оглянётесь', 7),
  plural3rdPerson: Word('оглянутся', 5),
  masculinePast: Word('оглянулся', 5),
  femininePast: Word('оглянулась', 5),
  neuterPast: Word('оглянулось', 5),
  pluralPast: Word('оглянулись', 5),
  imperativeInformal: Word('оглянись', 5),
  imperativeFormal: Word('оглянитесь', 5),
  imperfect: ['оглядываться'],
};

perfectVerbs.set(оглянуться.name.text, оглянуться);

export { оглянуться };