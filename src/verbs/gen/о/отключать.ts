import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отключать: PerfectVerb = {
  name: Word('отключать', 6),
  singular1stPerson: Word('отключаю', 6),
  singular2ndPerson: Word('отключаешь', 6),
  singular3rdPerson: Word('отключает', 6),
  plural1stPerson: Word('отключаем', 6),
  plural2ndPerson: Word('отключаете', 6),
  plural3rdPerson: Word('отключают', 6),
  masculinePast: Word('отключал', 6),
  femininePast: Word('отключала', 6),
  neuterPast: Word('отключало', 6),
  pluralPast: Word('отключали', 6),
  imperativeInformal: Word('отключай', 6),
  imperativeFormal: Word('отключайте', 6),
  imperfect: [],
};

perfectVerbs.set(отключать.name.text, отключать);

export { отключать };