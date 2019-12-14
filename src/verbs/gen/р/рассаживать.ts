import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассаживать: PerfectVerb = {
  name: Word('рассаживать', 4),
  singular1stPerson: Word('рассаживаю', 4),
  singular2ndPerson: Word('рассаживаешь', 4),
  singular3rdPerson: Word('рассаживает', 4),
  plural1stPerson: Word('рассаживаем', 4),
  plural2ndPerson: Word('рассаживаете', 4),
  plural3rdPerson: Word('рассаживают', 4),
  masculinePast: Word('рассаживал', 4),
  femininePast: Word('рассаживала', 4),
  neuterPast: Word('рассаживало', 4),
  pluralPast: Word('рассаживали', 4),
  imperativeInformal: Word('рассаживай', 4),
  imperativeFormal: Word('рассаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(рассаживать.name.text, рассаживать);

export { рассаживать };