import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напутать: PerfectVerb = {
  name: Word('напутать', 3),
  singular1stPerson: Word('напутаю', 3),
  singular2ndPerson: Word('напутаешь', 3),
  singular3rdPerson: Word('напутает', 3),
  plural1stPerson: Word('напутаем', 3),
  plural2ndPerson: Word('напутаете', 3),
  plural3rdPerson: Word('напутают', 3),
  masculinePast: Word('напутал', 3),
  femininePast: Word('напутала', 3),
  neuterPast: Word('напутало', 3),
  pluralPast: Word('напутали', 3),
  imperativeInformal: Word('напутай', 3),
  imperativeFormal: Word('напутайте', 3),
  imperfect: [],
};

perfectVerbs.set(напутать.name.text, напутать);

export { напутать };