import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const питать: PerfectVerb = {
  name: Word('питать', 3),
  singular1stPerson: Word('питаю', 3),
  singular2ndPerson: Word('питаешь', 3),
  singular3rdPerson: Word('питает', 3),
  plural1stPerson: Word('питаем', 3),
  plural2ndPerson: Word('питаете', 3),
  plural3rdPerson: Word('питают', 3),
  masculinePast: Word('питал', 3),
  femininePast: Word('питала', 3),
  neuterPast: Word('питало', 3),
  pluralPast: Word('питали', 3),
  imperativeInformal: Word('питай', 3),
  imperativeFormal: Word('питайте', 3),
  imperfect: [],
};

perfectVerbs.set(питать.name.text, питать);

export { питать };