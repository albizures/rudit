import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напомнить: PerfectVerb = {
  name: Word('напомнить', 3),
  singular1stPerson: Word('напомню', 3),
  singular2ndPerson: Word('напомнишь', 3),
  singular3rdPerson: Word('напомнит', 3),
  plural1stPerson: Word('напомним', 3),
  plural2ndPerson: Word('напомните', 3),
  plural3rdPerson: Word('напомнят', 3),
  masculinePast: Word('напомнил', 3),
  femininePast: Word('напомнила', 3),
  neuterPast: Word('напомнило', 3),
  pluralPast: Word('напомнили', 3),
  imperativeInformal: Word('напомни', 3),
  imperativeFormal: Word('напомните', 3),
  imperfect: ['напоминать'],
};

perfectVerbs.set(напомнить.name.text, напомнить);

export { напомнить };