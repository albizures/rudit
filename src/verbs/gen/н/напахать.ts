import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напахать: PerfectVerb = {
  name: Word('напахать', 5),
  singular1stPerson: Word('напашу', 5),
  singular2ndPerson: Word('напашешь', 3),
  singular3rdPerson: Word('напашет', 3),
  plural1stPerson: Word('напашем', 3),
  plural2ndPerson: Word('напашете', 3),
  plural3rdPerson: Word('напашут', 3),
  masculinePast: Word('напахал', 5),
  femininePast: Word('напахала', 5),
  neuterPast: Word('напахало', 5),
  pluralPast: Word('напахали', 5),
  imperativeInformal: Word('напаши', 5),
  imperativeFormal: Word('напашите', 5),
  imperfect: [],
};

perfectVerbs.set(напахать.name.text, напахать);

export { напахать };