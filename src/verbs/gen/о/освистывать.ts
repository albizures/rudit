import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освистывать: PerfectVerb = {
  name: Word('освистывать', 3),
  singular1stPerson: Word('освистываю', 3),
  singular2ndPerson: Word('освистываешь', 3),
  singular3rdPerson: Word('освистывает', 3),
  plural1stPerson: Word('освистываем', 3),
  plural2ndPerson: Word('освистываете', 3),
  plural3rdPerson: Word('освистывают', 3),
  masculinePast: Word('освистывал', 3),
  femininePast: Word('освистывала', 3),
  neuterPast: Word('освистывало', 3),
  pluralPast: Word('освистывали', 3),
  imperativeInformal: Word('освистывай', 3),
  imperativeFormal: Word('освистывайте', 3),
  imperfect: [],
};

perfectVerbs.set(освистывать.name.text, освистывать);

export { освистывать };