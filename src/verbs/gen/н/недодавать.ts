import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недодавать: PerfectVerb = {
  name: Word('недодавать', 7),
  singular1stPerson: Word('недодаю', 6),
  singular2ndPerson: Word('недодаёшь', 6),
  singular3rdPerson: Word('недодаёт', 6),
  plural1stPerson: Word('недодаём', 6),
  plural2ndPerson: Word('недодаёте', 6),
  plural3rdPerson: Word('недодают', 6),
  masculinePast: Word('недодавал', 7),
  femininePast: Word('недодавала', 7),
  neuterPast: Word('недодавало', 7),
  pluralPast: Word('недодавали', 7),
  imperativeInformal: Word('недодавай', 7),
  imperativeFormal: Word('недодавайте', 7),
  imperfect: [],
};

perfectVerbs.set(недодавать.name.text, недодавать);

export { недодавать };