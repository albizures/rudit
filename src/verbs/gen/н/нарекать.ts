import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарекать: PerfectVerb = {
  name: Word('нарекать', 5),
  singular1stPerson: Word('нарекаю', 5),
  singular2ndPerson: Word('нарекаешь', 5),
  singular3rdPerson: Word('нарекает', 5),
  plural1stPerson: Word('нарекаем', 5),
  plural2ndPerson: Word('нарекаете', 5),
  plural3rdPerson: Word('нарекают', 5),
  masculinePast: Word('нарекал', 5),
  femininePast: Word('нарекала', 5),
  neuterPast: Word('нарекало', 5),
  pluralPast: Word('нарекали', 5),
  imperativeInformal: Word('нарекай', 5),
  imperativeFormal: Word('нарекайте', 5),
  imperfect: [],
};

perfectVerbs.set(нарекать.name.text, нарекать);

export { нарекать };