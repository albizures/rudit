import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клепать: PerfectVerb = {
  name: Word('клепать', 4),
  singular1stPerson: Word('клепаю', 4),
  singular2ndPerson: Word('клепаешь', 4),
  singular3rdPerson: Word('клепает', 4),
  plural1stPerson: Word('клепаем', 4),
  plural2ndPerson: Word('клепаете', 4),
  plural3rdPerson: Word('клепают', 4),
  masculinePast: Word('клепал', 4),
  femininePast: Word('клепала', 4),
  neuterPast: Word('клепало', 4),
  pluralPast: Word('клепали', 4),
  imperativeInformal: Word('клепай', 4),
  imperativeFormal: Word('клепайте', 4),
  imperfect: [],
};

perfectVerbs.set(клепать.name.text, клепать);

export { клепать };