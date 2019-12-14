import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напирать: PerfectVerb = {
  name: Word('напирать', 5),
  singular1stPerson: Word('напираю', 5),
  singular2ndPerson: Word('напираешь', 5),
  singular3rdPerson: Word('напирает', 5),
  plural1stPerson: Word('напираем', 5),
  plural2ndPerson: Word('напираете', 5),
  plural3rdPerson: Word('напирают', 5),
  masculinePast: Word('напирал', 5),
  femininePast: Word('напирала', 5),
  neuterPast: Word('напирало', 5),
  pluralPast: Word('напирали', 5),
  imperativeInformal: Word('напирай', 5),
  imperativeFormal: Word('напирайте', 5),
  imperfect: [],
};

perfectVerbs.set(напирать.name.text, напирать);

export { напирать };