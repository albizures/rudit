import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напихать: PerfectVerb = {
  name: Word('напихать', 5),
  singular1stPerson: Word('напихаю', 5),
  singular2ndPerson: Word('напихаешь', 5),
  singular3rdPerson: Word('напихает', 5),
  plural1stPerson: Word('напихаем', 5),
  plural2ndPerson: Word('напихаете', 5),
  plural3rdPerson: Word('напихают', 5),
  masculinePast: Word('напихал', 5),
  femininePast: Word('напихала', 5),
  neuterPast: Word('напихало', 5),
  pluralPast: Word('напихали', 5),
  imperativeInformal: Word('напихай', 5),
  imperativeFormal: Word('напихайте', 5),
  imperfect: [],
};

perfectVerbs.set(напихать.name.text, напихать);

export { напихать };