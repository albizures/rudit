import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проголодать: PerfectVerb = {
  name: Word('проголодать', 8),
  singular1stPerson: Word('проголодаю', 8),
  singular2ndPerson: Word('проголодаешь', 8),
  singular3rdPerson: Word('проголодает', 8),
  plural1stPerson: Word('проголодаем', 8),
  plural2ndPerson: Word('проголодаете', 8),
  plural3rdPerson: Word('проголодают', 8),
  masculinePast: Word('проголодал', 8),
  femininePast: Word('проголодала', 8),
  neuterPast: Word('проголодало', 8),
  pluralPast: Word('проголодали', 8),
  imperativeInformal: Word('проголодай', 8),
  imperativeFormal: Word('проголодайте', 8),
  imperfect: [],
};

perfectVerbs.set(проголодать.name.text, проголодать);

export { проголодать };