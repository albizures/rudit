import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напрячь: PerfectVerb = {
  name: Word('напрячь', 4),
  singular1stPerson: Word('напрягу', 6),
  singular2ndPerson: Word('напряжёшь', 6),
  singular3rdPerson: Word('напряжёт', 6),
  plural1stPerson: Word('напряжём', 6),
  plural2ndPerson: Word('напряжёте', 6),
  plural3rdPerson: Word('напрягут', 6),
  masculinePast: Word('напряг', 4),
  femininePast: Word('напрягла', 7),
  neuterPast: Word('напрягло', 7),
  pluralPast: Word('напрягли', 7),
  imperativeInformal: Word('напряги', 6),
  imperativeFormal: Word('напрягите', 6),
  imperfect: [],
};

perfectVerbs.set(напрячь.name.text, напрячь);

export { напрячь };