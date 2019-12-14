import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вращать: PerfectVerb = {
  name: Word('вращать', 4),
  singular1stPerson: Word('вращаю', 4),
  singular2ndPerson: Word('вращаешь', 4),
  singular3rdPerson: Word('вращает', 4),
  plural1stPerson: Word('вращаем', 4),
  plural2ndPerson: Word('вращаете', 4),
  plural3rdPerson: Word('вращают', 4),
  masculinePast: Word('вращал', 4),
  femininePast: Word('вращала', 4),
  neuterPast: Word('вращало', 4),
  pluralPast: Word('вращали', 4),
  imperativeInformal: Word('вращай', 4),
  imperativeFormal: Word('вращайте', 4),
  imperfect: [],
};

perfectVerbs.set(вращать.name.text, вращать);

export { вращать };