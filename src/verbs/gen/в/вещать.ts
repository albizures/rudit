import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вещать: PerfectVerb = {
  name: Word('вещать', 3),
  singular1stPerson: Word('вещаю', 3),
  singular2ndPerson: Word('вещаешь', 3),
  singular3rdPerson: Word('вещает', 3),
  plural1stPerson: Word('вещаем', 3),
  plural2ndPerson: Word('вещаете', 3),
  plural3rdPerson: Word('вещают', 3),
  masculinePast: Word('вещал', 3),
  femininePast: Word('вещала', 3),
  neuterPast: Word('вещало', 3),
  pluralPast: Word('вещали', 3),
  imperativeInformal: Word('вещай', 3),
  imperativeFormal: Word('вещайте', 3),
  imperfect: [],
};

perfectVerbs.set(вещать.name.text, вещать);

export { вещать };