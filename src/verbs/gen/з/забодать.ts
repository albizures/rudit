import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забодать: PerfectVerb = {
  name: Word('забодать', 5),
  singular1stPerson: Word('забодаю', 5),
  singular2ndPerson: Word('забодаешь', 5),
  singular3rdPerson: Word('забодает', 5),
  plural1stPerson: Word('забодаем', 5),
  plural2ndPerson: Word('забодаете', 5),
  plural3rdPerson: Word('забодают', 5),
  masculinePast: Word('забодал', 5),
  femininePast: Word('забодала', 5),
  neuterPast: Word('забодало', 5),
  pluralPast: Word('забодали', 5),
  imperativeInformal: Word('забодай', 5),
  imperativeFormal: Word('забодайте', 5),
  imperfect: [],
};

perfectVerbs.set(забодать.name.text, забодать);

export { забодать };