import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлаживаться: PerfectVerb = {
  name: Word('подлаживаться', 4),
  singular1stPerson: Word('подлаживаюсь', 4),
  singular2ndPerson: Word('подлаживаешься', 4),
  singular3rdPerson: Word('подлаживается', 4),
  plural1stPerson: Word('подлаживаемся', 4),
  plural2ndPerson: Word('подлаживаетесь', 4),
  plural3rdPerson: Word('подлаживаются', 4),
  masculinePast: Word('подлаживался', 4),
  femininePast: Word('подлаживалась', 4),
  neuterPast: Word('подлаживалось', 4),
  pluralPast: Word('подлаживались', 4),
  imperativeInformal: Word('подлаживайся', 4),
  imperativeFormal: Word('подлаживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подлаживаться.name.text, подлаживаться);

export { подлаживаться };