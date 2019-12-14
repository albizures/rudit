import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const езжать: PerfectVerb = {
  name: Word('езжать', 3),
  singular1stPerson: Word('езжаю', 3),
  singular2ndPerson: Word('езжаешь', 3),
  singular3rdPerson: Word('езжает', 3),
  plural1stPerson: Word('езжаем', 3),
  plural2ndPerson: Word('езжаете', 3),
  plural3rdPerson: Word('езжают', 3),
  masculinePast: Word('езжал', 3),
  femininePast: Word('езжала', 3),
  neuterPast: Word('езжало', 3),
  pluralPast: Word('езжали', 3),
  imperativeInformal: Word('езжай', 3),
  imperativeFormal: Word('езжайте', 3),
  imperfect: [],
};

perfectVerbs.set(езжать.name.text, езжать);

export { езжать };