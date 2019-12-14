import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сглаживаться: PerfectVerb = {
  name: Word('сглаживаться', 3),
  singular1stPerson: Word('сглаживаюсь', 3),
  singular2ndPerson: Word('сглаживаешься', 3),
  singular3rdPerson: Word('сглаживается', 3),
  plural1stPerson: Word('сглаживаемся', 3),
  plural2ndPerson: Word('сглаживаетесь', 3),
  plural3rdPerson: Word('сглаживаются', 3),
  masculinePast: Word('сглаживался', 3),
  femininePast: Word('сглаживалась', 3),
  neuterPast: Word('сглаживалось', 3),
  pluralPast: Word('сглаживались', 3),
  imperativeInformal: Word('сглаживайся', 3),
  imperativeFormal: Word('сглаживайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(сглаживаться.name.text, сглаживаться);

export { сглаживаться };