import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напеть: PerfectVerb = {
  name: Word('напеть', 3),
  singular1stPerson: Word('напою', 4),
  singular2ndPerson: Word('напоёшь', 1),
  singular3rdPerson: Word('напоёт', 1),
  plural1stPerson: Word('напоём', 1),
  plural2ndPerson: Word('напоёте', 1),
  plural3rdPerson: Word('напоют', 4),
  masculinePast: Word('напел', 3),
  femininePast: Word('напела', 3),
  neuterPast: Word('напело', 3),
  pluralPast: Word('напели', 3),
  imperativeInformal: Word('напой', 3),
  imperativeFormal: Word('напойте', 3),
  imperfect: [],
};

perfectVerbs.set(напеть.name.text, напеть);

export { напеть };