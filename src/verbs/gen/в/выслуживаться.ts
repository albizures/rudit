import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выслуживаться: PerfectVerb = {
  name: Word('выслуживаться', 4),
  singular1stPerson: Word('выслуживаюсь', 4),
  singular2ndPerson: Word('выслуживаешься', 4),
  singular3rdPerson: Word('выслуживается', 4),
  plural1stPerson: Word('выслуживаемся', 4),
  plural2ndPerson: Word('выслуживаетесь', 4),
  plural3rdPerson: Word('выслуживаются', 4),
  masculinePast: Word('выслуживался', 4),
  femininePast: Word('выслуживалась', 4),
  neuterPast: Word('выслуживалось', 4),
  pluralPast: Word('выслуживались', 4),
  imperativeInformal: Word('выслуживайся', 4),
  imperativeFormal: Word('выслуживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(выслуживаться.name.text, выслуживаться);

export { выслуживаться };