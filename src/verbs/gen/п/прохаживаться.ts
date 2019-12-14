import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прохаживаться: PerfectVerb = {
  name: Word('прохаживаться', 4),
  singular1stPerson: Word('прохаживаюсь', 4),
  singular2ndPerson: Word('прохаживаешься', 4),
  singular3rdPerson: Word('прохаживается', 4),
  plural1stPerson: Word('прохаживаемся', 4),
  plural2ndPerson: Word('прохаживаетесь', 4),
  plural3rdPerson: Word('прохаживаются', 4),
  masculinePast: Word('прохаживался', 4),
  femininePast: Word('прохаживалась', 4),
  neuterPast: Word('прохаживалось', 4),
  pluralPast: Word('прохаживались', 4),
  imperativeInformal: Word('прохаживайся', 4),
  imperativeFormal: Word('прохаживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прохаживаться.name.text, прохаживаться);

export { прохаживаться };