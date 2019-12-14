import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влипать: PerfectVerb = {
  name: Word('влипать', 4),
  singular1stPerson: Word('влипаю', 4),
  singular2ndPerson: Word('влипаешь', 4),
  singular3rdPerson: Word('влипает', 4),
  plural1stPerson: Word('влипаем', 4),
  plural2ndPerson: Word('влипаете', 4),
  plural3rdPerson: Word('влипают', 4),
  masculinePast: Word('влипал', 4),
  femininePast: Word('влипала', 4),
  neuterPast: Word('влипало', 4),
  pluralPast: Word('влипали', 4),
  imperativeInformal: Word('влипай', 4),
  imperativeFormal: Word('влипайте', 4),
  imperfect: [],
};

perfectVerbs.set(влипать.name.text, влипать);

export { влипать };