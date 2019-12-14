import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бодать: PerfectVerb = {
  name: Word('бодать', 3),
  singular1stPerson: Word('бодаю', 3),
  singular2ndPerson: Word('бодаешь', 3),
  singular3rdPerson: Word('бодает', 3),
  plural1stPerson: Word('бодаем', 3),
  plural2ndPerson: Word('бодаете', 3),
  plural3rdPerson: Word('бодают', 3),
  masculinePast: Word('бодал', 3),
  femininePast: Word('бодала', 3),
  neuterPast: Word('бодало', 3),
  pluralPast: Word('бодали', 3),
  imperativeInformal: Word('бодай', 3),
  imperativeFormal: Word('бодайте', 3),
  imperfect: [],
};

perfectVerbs.set(бодать.name.text, бодать);

export { бодать };