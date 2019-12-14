import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полегчать: PerfectVerb = {
  name: Word('полегчать', 6),
  singular1stPerson: Word('полегчаю', 6),
  singular2ndPerson: Word('полегчаешь', 6),
  singular3rdPerson: Word('полегчает', 6),
  plural1stPerson: Word('полегчаем', 6),
  plural2ndPerson: Word('полегчаете', 6),
  plural3rdPerson: Word('полегчают', 6),
  masculinePast: Word('полегчал', 6),
  femininePast: Word('полегчала', 6),
  neuterPast: Word('полегчало', 6),
  pluralPast: Word('полегчали', 6),
  imperativeInformal: Word('полегчай', 6),
  imperativeFormal: Word('полегчайте', 6),
  imperfect: [],
};

perfectVerbs.set(полегчать.name.text, полегчать);

export { полегчать };