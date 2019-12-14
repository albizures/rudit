import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оголодать: PerfectVerb = {
  name: Word('оголодать', 6),
  singular1stPerson: Word('оголодаю', 6),
  singular2ndPerson: Word('оголодаешь', 6),
  singular3rdPerson: Word('оголодает', 6),
  plural1stPerson: Word('оголодаем', 6),
  plural2ndPerson: Word('оголодаете', 6),
  plural3rdPerson: Word('оголодают', 6),
  masculinePast: Word('оголодал', 6),
  femininePast: Word('оголодала', 6),
  neuterPast: Word('оголодало', 6),
  pluralPast: Word('оголодали', 6),
  imperativeInformal: Word('оголодай', 6),
  imperativeFormal: Word('оголодайте', 6),
  imperfect: [],
};

perfectVerbs.set(оголодать.name.text, оголодать);

export { оголодать };