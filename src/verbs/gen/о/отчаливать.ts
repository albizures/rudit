import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчаливать: PerfectVerb = {
  name: Word('отчаливать', 3),
  singular1stPerson: Word('отчаливаю', 3),
  singular2ndPerson: Word('отчаливаешь', 3),
  singular3rdPerson: Word('отчаливает', 3),
  plural1stPerson: Word('отчаливаем', 3),
  plural2ndPerson: Word('отчаливаете', 3),
  plural3rdPerson: Word('отчаливают', 3),
  masculinePast: Word('отчаливал', 3),
  femininePast: Word('отчаливала', 3),
  neuterPast: Word('отчаливало', 3),
  pluralPast: Word('отчаливали', 3),
  imperativeInformal: Word('отчаливай', 3),
  imperativeFormal: Word('отчаливайте', 3),
  imperfect: [],
};

perfectVerbs.set(отчаливать.name.text, отчаливать);

export { отчаливать };