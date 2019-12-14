import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлучать: PerfectVerb = {
  name: Word('отлучать', 5),
  singular1stPerson: Word('отлучаю', 5),
  singular2ndPerson: Word('отлучаешь', 5),
  singular3rdPerson: Word('отлучает', 5),
  plural1stPerson: Word('отлучаем', 5),
  plural2ndPerson: Word('отлучаете', 5),
  plural3rdPerson: Word('отлучают', 5),
  masculinePast: Word('отлучал', 5),
  femininePast: Word('отлучала', 5),
  neuterPast: Word('отлучало', 5),
  pluralPast: Word('отлучали', 5),
  imperativeInformal: Word('отлучай', 5),
  imperativeFormal: Word('отлучайте', 5),
  imperfect: [],
};

perfectVerbs.set(отлучать.name.text, отлучать);

export { отлучать };