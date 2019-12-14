import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напруживать: PerfectVerb = {
  name: Word('напруживать', 4),
  singular1stPerson: Word('напруживаю', 4),
  singular2ndPerson: Word('напруживаешь', 4),
  singular3rdPerson: Word('напруживает', 4),
  plural1stPerson: Word('напруживаем', 4),
  plural2ndPerson: Word('напруживаете', 4),
  plural3rdPerson: Word('напруживают', 4),
  masculinePast: Word('напруживал', 4),
  femininePast: Word('напруживала', 4),
  neuterPast: Word('напруживало', 4),
  pluralPast: Word('напруживали', 4),
  imperativeInformal: Word('напруживай', 4),
  imperativeFormal: Word('напруживайте', 4),
  imperfect: [],
};

perfectVerbs.set(напруживать.name.text, напруживать);

export { напруживать };