import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надсаживаться: PerfectVerb = {
  name: Word('надсаживаться', 4),
  singular1stPerson: Word('надсаживаюсь', 4),
  singular2ndPerson: Word('надсаживаешься', 4),
  singular3rdPerson: Word('надсаживается', 4),
  plural1stPerson: Word('надсаживаемся', 4),
  plural2ndPerson: Word('надсаживаетесь', 4),
  plural3rdPerson: Word('надсаживаются', 4),
  masculinePast: Word('надсаживался', 4),
  femininePast: Word('надсаживалась', 4),
  neuterPast: Word('надсаживалось', 4),
  pluralPast: Word('надсаживались', 4),
  imperativeInformal: Word('надсаживайся', 4),
  imperativeFormal: Word('надсаживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(надсаживаться.name.text, надсаживаться);

export { надсаживаться };