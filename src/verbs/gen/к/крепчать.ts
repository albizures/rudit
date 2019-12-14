import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крепчать: PerfectVerb = {
  name: Word('крепчать', 5),
  singular1stPerson: Word('крепчаю', 5),
  singular2ndPerson: Word('крепчаешь', 5),
  singular3rdPerson: Word('крепчает', 5),
  plural1stPerson: Word('крепчаем', 5),
  plural2ndPerson: Word('крепчаете', 5),
  plural3rdPerson: Word('крепчают', 5),
  masculinePast: Word('крепчал', 5),
  femininePast: Word('крепчала', 5),
  neuterPast: Word('крепчало', 5),
  pluralPast: Word('крепчали', 5),
  imperativeInformal: Word('крепчай', 5),
  imperativeFormal: Word('крепчайте', 5),
  imperfect: [],
};

perfectVerbs.set(крепчать.name.text, крепчать);

export { крепчать };