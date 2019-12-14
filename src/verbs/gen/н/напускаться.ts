import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напускаться: PerfectVerb = {
  name: Word('напускаться', 6),
  singular1stPerson: Word('напускаюсь', 6),
  singular2ndPerson: Word('напускаешься', 6),
  singular3rdPerson: Word('напускается', 6),
  plural1stPerson: Word('напускаемся', 6),
  plural2ndPerson: Word('напускаетесь', 6),
  plural3rdPerson: Word('напускаются', 6),
  masculinePast: Word('напускался', 6),
  femininePast: Word('напускалась', 6),
  neuterPast: Word('напускалось', 6),
  pluralPast: Word('напускались', 6),
  imperativeInformal: Word('напускайся', 6),
  imperativeFormal: Word('напускайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(напускаться.name.text, напускаться);

export { напускаться };