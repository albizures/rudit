import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напруживаться: PerfectVerb = {
  name: Word('напруживаться', 4),
  singular1stPerson: Word('напруживаюсь', 4),
  singular2ndPerson: Word('напруживаешься', 4),
  singular3rdPerson: Word('напруживается', 4),
  plural1stPerson: Word('напруживаемся', 4),
  plural2ndPerson: Word('напруживаетесь', 4),
  plural3rdPerson: Word('напруживаются', 4),
  masculinePast: Word('напруживался', 4),
  femininePast: Word('напруживалась', 4),
  neuterPast: Word('напруживалось', 4),
  pluralPast: Word('напруживались', 4),
  imperativeInformal: Word('напруживайся', 4),
  imperativeFormal: Word('напруживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(напруживаться.name.text, напруживаться);

export { напруживаться };