import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const голодать: PerfectVerb = {
  name: Word('голодать', 5),
  singular1stPerson: Word('голодаю', 5),
  singular2ndPerson: Word('голодаешь', 5),
  singular3rdPerson: Word('голодает', 5),
  plural1stPerson: Word('голодаем', 5),
  plural2ndPerson: Word('голодаете', 5),
  plural3rdPerson: Word('голодают', 5),
  masculinePast: Word('голодал', 5),
  femininePast: Word('голодала', 5),
  neuterPast: Word('голодало', 5),
  pluralPast: Word('голодали', 5),
  imperativeInformal: Word('голодай', 5),
  imperativeFormal: Word('голодайте', 5),
  imperfect: [],
};

perfectVerbs.set(голодать.name.text, голодать);

export { голодать };