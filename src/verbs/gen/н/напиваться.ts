import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напиваться: PerfectVerb = {
  name: Word('напиваться', 5),
  singular1stPerson: Word('напиваюсь', 5),
  singular2ndPerson: Word('напиваешься', 5),
  singular3rdPerson: Word('напивается', 5),
  plural1stPerson: Word('напиваемся', 5),
  plural2ndPerson: Word('напиваетесь', 5),
  plural3rdPerson: Word('напиваются', 5),
  masculinePast: Word('напивался', 5),
  femininePast: Word('напивалась', 5),
  neuterPast: Word('напивалось', 5),
  pluralPast: Word('напивались', 5),
  imperativeInformal: Word('напивайся', 5),
  imperativeFormal: Word('напивайтесь', 5),
  imperfect: ['напиться'],
};

perfectVerbs.set(напиваться.name.text, напиваться);

export { напиваться };