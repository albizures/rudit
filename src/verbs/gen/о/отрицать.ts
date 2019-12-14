import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрицать: PerfectVerb = {
  name: Word('отрицать', 5),
  singular1stPerson: Word('отрицаю', 5),
  singular2ndPerson: Word('отрицаешь', 5),
  singular3rdPerson: Word('отрицает', 5),
  plural1stPerson: Word('отрицаем', 5),
  plural2ndPerson: Word('отрицаете', 5),
  plural3rdPerson: Word('отрицают', 5),
  masculinePast: Word('отрицал', 5),
  femininePast: Word('отрицала', 5),
  neuterPast: Word('отрицало', 5),
  pluralPast: Word('отрицали', 5),
  imperativeInformal: Word('отрицай', 5),
  imperativeFormal: Word('отрицайте', 5),
  imperfect: [],
};

perfectVerbs.set(отрицать.name.text, отрицать);

export { отрицать };