import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымотать: PerfectVerb = {
  name: Word('вымотать', 1),
  singular1stPerson: Word('вымотаю', 1),
  singular2ndPerson: Word('вымотаешь', 1),
  singular3rdPerson: Word('вымотает', 1),
  plural1stPerson: Word('вымотаем', 1),
  plural2ndPerson: Word('вымотаете', 1),
  plural3rdPerson: Word('вымотают', 1),
  masculinePast: Word('вымотал', 1),
  femininePast: Word('вымотала', 1),
  neuterPast: Word('вымотало', 1),
  pluralPast: Word('вымотали', 1),
  imperativeInformal: Word('вымотай', 1),
  imperativeFormal: Word('вымотайте', 1),
  imperfect: [],
};

perfectVerbs.set(вымотать.name.text, вымотать);

export { вымотать };