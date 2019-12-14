import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прижаться: PerfectVerb = {
  name: Word('прижаться', 4),
  singular1stPerson: Word('прижмусь', 5),
  singular2ndPerson: Word('прижмёшься', 5),
  singular3rdPerson: Word('прижмётся', 5),
  plural1stPerson: Word('прижмёмся', 5),
  plural2ndPerson: Word('прижмётесь', 5),
  plural3rdPerson: Word('прижмутся', 5),
  masculinePast: Word('прижался', 4),
  femininePast: Word('прижалась', 4),
  neuterPast: Word('прижалось', 4),
  pluralPast: Word('прижались', 4),
  imperativeInformal: Word('прижмись', 5),
  imperativeFormal: Word('прижмитесь', 5),
  imperfect: [],
};

perfectVerbs.set(прижаться.name.text, прижаться);

export { прижаться };