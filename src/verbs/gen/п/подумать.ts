import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подумать: PerfectVerb = {
  name: Word('подумать', 3),
  singular1stPerson: Word('подумаю', 3),
  singular2ndPerson: Word('подумаешь', 3),
  singular3rdPerson: Word('подумает', 3),
  plural1stPerson: Word('подумаем', 3),
  plural2ndPerson: Word('подумаете', 3),
  plural3rdPerson: Word('подумают', 3),
  masculinePast: Word('подумал', 3),
  femininePast: Word('подумала', 3),
  neuterPast: Word('подумало', 3),
  pluralPast: Word('подумали', 3),
  imperativeInformal: Word('подумай', 3),
  imperativeFormal: Word('подумайте', 3),
  imperfect: ['думать'],
};

perfectVerbs.set(подумать.name.text, подумать);

export { подумать };