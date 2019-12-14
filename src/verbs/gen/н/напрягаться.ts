import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напрягаться: PerfectVerb = {
  name: Word('напрягаться', 6),
  singular1stPerson: Word('напрягаюсь', 6),
  singular2ndPerson: Word('напрягаешься', 6),
  singular3rdPerson: Word('напрягается', 6),
  plural1stPerson: Word('напрягаемся', 6),
  plural2ndPerson: Word('напрягаетесь', 6),
  plural3rdPerson: Word('напрягаются', 6),
  masculinePast: Word('напрягался', 6),
  femininePast: Word('напрягалась', 6),
  neuterPast: Word('напрягалось', 6),
  pluralPast: Word('напрягались', 6),
  imperativeInformal: Word('напрягайся', 6),
  imperativeFormal: Word('напрягайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(напрягаться.name.text, напрягаться);

export { напрягаться };