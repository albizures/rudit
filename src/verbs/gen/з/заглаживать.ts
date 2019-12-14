import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заглаживать: PerfectVerb = {
  name: Word('заглаживать', 4),
  singular1stPerson: Word('заглаживаю', 4),
  singular2ndPerson: Word('заглаживаешь', 4),
  singular3rdPerson: Word('заглаживает', 4),
  plural1stPerson: Word('заглаживаем', 4),
  plural2ndPerson: Word('заглаживаете', 4),
  plural3rdPerson: Word('заглаживают', 4),
  masculinePast: Word('заглаживал', 4),
  femininePast: Word('заглаживала', 4),
  neuterPast: Word('заглаживало', 4),
  pluralPast: Word('заглаживали', 4),
  imperativeInformal: Word('заглаживай', 4),
  imperativeFormal: Word('заглаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(заглаживать.name.text, заглаживать);

export { заглаживать };