import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влезать: PerfectVerb = {
  name: Word('влезать', 4),
  singular1stPerson: Word('влезаю', 4),
  singular2ndPerson: Word('влезаешь', 4),
  singular3rdPerson: Word('влезает', 4),
  plural1stPerson: Word('влезаем', 4),
  plural2ndPerson: Word('влезаете', 4),
  plural3rdPerson: Word('влезают', 4),
  masculinePast: Word('влезал', 4),
  femininePast: Word('влезала', 4),
  neuterPast: Word('влезало', 4),
  pluralPast: Word('влезали', 4),
  imperativeInformal: Word('влезай', 4),
  imperativeFormal: Word('влезайте', 4),
  imperfect: [],
};

perfectVerbs.set(влезать.name.text, влезать);

export { влезать };