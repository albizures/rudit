import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крохоборствовать: PerfectVerb = {
  name: Word('крохоборствовать', 6),
  singular1stPerson: Word('крохоборствую', 6),
  singular2ndPerson: Word('крохоборствуешь', 6),
  singular3rdPerson: Word('крохоборствует', 6),
  plural1stPerson: Word('крохоборствуем', 6),
  plural2ndPerson: Word('крохоборствуете', 6),
  plural3rdPerson: Word('крохоборствуют', 6),
  masculinePast: Word('крохоборствовал', 6),
  femininePast: Word('крохоборствовала', 6),
  neuterPast: Word('крохоборствовало', 6),
  pluralPast: Word('крохоборствовали', 6),
  imperativeInformal: Word('крохоборствуй', 6),
  imperativeFormal: Word('крохоборствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(крохоборствовать.name.text, крохоборствовать);

export { крохоборствовать };