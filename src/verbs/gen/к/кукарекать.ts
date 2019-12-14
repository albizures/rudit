import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кукарекать: PerfectVerb = {
  name: Word('кукарекать', 5),
  singular1stPerson: Word('кукарекаю', 5),
  singular2ndPerson: Word('кукарекаешь', 5),
  singular3rdPerson: Word('кукарекает', 5),
  plural1stPerson: Word('кукарекаем', 5),
  plural2ndPerson: Word('кукарекаете', 5),
  plural3rdPerson: Word('кукарекают', 5),
  masculinePast: Word('кукарекал', 5),
  femininePast: Word('кукарекала', 5),
  neuterPast: Word('кукарекало', 5),
  pluralPast: Word('кукарекали', 5),
  imperativeInformal: Word('кукарекай', 5),
  imperativeFormal: Word('кукарекайте', 5),
  imperfect: [],
};

perfectVerbs.set(кукарекать.name.text, кукарекать);

export { кукарекать };