import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напитывать: PerfectVerb = {
  name: Word('напитывать', 3),
  singular1stPerson: Word('напитываю', 3),
  singular2ndPerson: Word('напитываешь', 3),
  singular3rdPerson: Word('напитывает', 3),
  plural1stPerson: Word('напитываем', 3),
  plural2ndPerson: Word('напитываете', 3),
  plural3rdPerson: Word('напитывают', 3),
  masculinePast: Word('напитывал', 3),
  femininePast: Word('напитывала', 3),
  neuterPast: Word('напитывало', 3),
  pluralPast: Word('напитывали', 3),
  imperativeInformal: Word('напитывай', 3),
  imperativeFormal: Word('напитывайте', 3),
  imperfect: [],
};

perfectVerbs.set(напитывать.name.text, напитывать);

export { напитывать };