import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлаживаться: PerfectVerb = {
  name: Word('разлаживаться', 4),
  singular1stPerson: Word('разлаживаюсь', 4),
  singular2ndPerson: Word('разлаживаешься', 4),
  singular3rdPerson: Word('разлаживается', 4),
  plural1stPerson: Word('разлаживаемся', 4),
  plural2ndPerson: Word('разлаживаетесь', 4),
  plural3rdPerson: Word('разлаживаются', 4),
  masculinePast: Word('разлаживался', 4),
  femininePast: Word('разлаживалась', 4),
  neuterPast: Word('разлаживалось', 4),
  pluralPast: Word('разлаживались', 4),
  imperativeInformal: Word('разлаживайся', 4),
  imperativeFormal: Word('разлаживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разлаживаться.name.text, разлаживаться);

export { разлаживаться };