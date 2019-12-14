import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влетать: PerfectVerb = {
  name: Word('влетать', 4),
  singular1stPerson: Word('влетаю', 4),
  singular2ndPerson: Word('влетаешь', 4),
  singular3rdPerson: Word('влетает', 4),
  plural1stPerson: Word('влетаем', 4),
  plural2ndPerson: Word('влетаете', 4),
  plural3rdPerson: Word('влетают', 4),
  masculinePast: Word('влетал', 4),
  femininePast: Word('влетала', 4),
  neuterPast: Word('влетало', 4),
  pluralPast: Word('влетали', 4),
  imperativeInformal: Word('влетай', 4),
  imperativeFormal: Word('влетайте', 4),
  imperfect: [],
};

perfectVerbs.set(влетать.name.text, влетать);

export { влетать };