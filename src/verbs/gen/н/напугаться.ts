import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напугаться: PerfectVerb = {
  name: Word('напугаться', 5),
  singular1stPerson: Word('напугаюсь', 5),
  singular2ndPerson: Word('напугаешься', 5),
  singular3rdPerson: Word('напугается', 5),
  plural1stPerson: Word('напугаемся', 5),
  plural2ndPerson: Word('напугаетесь', 5),
  plural3rdPerson: Word('напугаются', 5),
  masculinePast: Word('напугался', 5),
  femininePast: Word('напугалась', 5),
  neuterPast: Word('напугалось', 5),
  pluralPast: Word('напугались', 5),
  imperativeInformal: Word('напугайся', 5),
  imperativeFormal: Word('напугайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(напугаться.name.text, напугаться);

export { напугаться };