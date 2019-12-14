import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлетать: PerfectVerb = {
  name: Word('отлетать', 5),
  singular1stPerson: Word('отлетаю', 5),
  singular2ndPerson: Word('отлетаешь', 5),
  singular3rdPerson: Word('отлетает', 5),
  plural1stPerson: Word('отлетаем', 5),
  plural2ndPerson: Word('отлетаете', 5),
  plural3rdPerson: Word('отлетают', 5),
  masculinePast: Word('отлетал', 5),
  femininePast: Word('отлетала', 5),
  neuterPast: Word('отлетало', 5),
  pluralPast: Word('отлетали', 5),
  imperativeInformal: Word('отлетай', 5),
  imperativeFormal: Word('отлетайте', 5),
  imperfect: [],
};

perfectVerbs.set(отлетать.name.text, отлетать);

export { отлетать };