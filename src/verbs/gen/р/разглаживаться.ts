import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разглаживаться: PerfectVerb = {
  name: Word('разглаживаться', 5),
  singular1stPerson: Word('разглаживаюсь', 5),
  singular2ndPerson: Word('разглаживаешься', 5),
  singular3rdPerson: Word('разглаживается', 5),
  plural1stPerson: Word('разглаживаемся', 5),
  plural2ndPerson: Word('разглаживаетесь', 5),
  plural3rdPerson: Word('разглаживаются', 5),
  masculinePast: Word('разглаживался', 5),
  femininePast: Word('разглаживалась', 5),
  neuterPast: Word('разглаживалось', 5),
  pluralPast: Word('разглаживались', 5),
  imperativeInformal: Word('разглаживайся', 5),
  imperativeFormal: Word('разглаживайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(разглаживаться.name.text, разглаживаться);

export { разглаживаться };