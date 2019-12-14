import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стенать: PerfectVerb = {
  name: Word('стенать', 4),
  singular1stPerson: Word('стенаю', 4),
  singular2ndPerson: Word('стенаешь', 4),
  singular3rdPerson: Word('стенает', 4),
  plural1stPerson: Word('стенаем', 4),
  plural2ndPerson: Word('стенаете', 4),
  plural3rdPerson: Word('стенают', 4),
  masculinePast: Word('стенал', 4),
  femininePast: Word('стенала', 4),
  neuterPast: Word('стенало', 4),
  pluralPast: Word('стенали', 4),
  imperativeInformal: Word('стенай', 4),
  imperativeFormal: Word('стенайте', 4),
  imperfect: [],
};

perfectVerbs.set(стенать.name.text, стенать);

export { стенать };