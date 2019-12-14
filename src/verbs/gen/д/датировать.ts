import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const датировать: PerfectVerb = {
  name: Word('датировать', 3),
  singular1stPerson: Word('датирую', 3),
  singular2ndPerson: Word('датируешь', 3),
  singular3rdPerson: Word('датирует', 3),
  plural1stPerson: Word('датируем', 3),
  plural2ndPerson: Word('датируете', 3),
  plural3rdPerson: Word('датируют', 3),
  masculinePast: Word('датировал', 3),
  femininePast: Word('датировала', 3),
  neuterPast: Word('датировало', 3),
  pluralPast: Word('датировали', 3),
  imperativeInformal: Word('датируй', 3),
  imperativeFormal: Word('датируйте', 3),
  imperfect: [],
};

perfectVerbs.set(датировать.name.text, датировать);

export { датировать };