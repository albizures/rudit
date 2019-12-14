import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылуживать: PerfectVerb = {
  name: Word('вылуживать', 3),
  singular1stPerson: Word('вылуживаю', 3),
  singular2ndPerson: Word('вылуживаешь', 3),
  singular3rdPerson: Word('вылуживает', 3),
  plural1stPerson: Word('вылуживаем', 3),
  plural2ndPerson: Word('вылуживаете', 3),
  plural3rdPerson: Word('вылуживают', 3),
  masculinePast: Word('вылуживал', 3),
  femininePast: Word('вылуживала', 3),
  neuterPast: Word('вылуживало', 3),
  pluralPast: Word('вылуживали', 3),
  imperativeInformal: Word('вылуживай', 3),
  imperativeFormal: Word('вылуживайте', 3),
  imperfect: [],
};

perfectVerbs.set(вылуживать.name.text, вылуживать);

export { вылуживать };