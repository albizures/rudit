import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объедать: PerfectVerb = {
  name: Word('объедать', 5),
  singular1stPerson: Word('объедаю', 5),
  singular2ndPerson: Word('объедаешь', 5),
  singular3rdPerson: Word('объедает', 5),
  plural1stPerson: Word('объедаем', 5),
  plural2ndPerson: Word('объедаете', 5),
  plural3rdPerson: Word('объедают', 5),
  masculinePast: Word('объедал', 5),
  femininePast: Word('объедала', 5),
  neuterPast: Word('объедало', 5),
  pluralPast: Word('объедали', 5),
  imperativeInformal: Word('объедай', 5),
  imperativeFormal: Word('объедайте', 5),
  imperfect: [],
};

perfectVerbs.set(объедать.name.text, объедать);

export { объедать };