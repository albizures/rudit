import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загаживать: PerfectVerb = {
  name: Word('загаживать', 3),
  singular1stPerson: Word('загаживаю', 3),
  singular2ndPerson: Word('загаживаешь', 3),
  singular3rdPerson: Word('загаживает', 3),
  plural1stPerson: Word('загаживаем', 3),
  plural2ndPerson: Word('загаживаете', 3),
  plural3rdPerson: Word('загаживают', 3),
  masculinePast: Word('загаживал', 3),
  femininePast: Word('загаживала', 3),
  neuterPast: Word('загаживало', 3),
  pluralPast: Word('загаживали', 3),
  imperativeInformal: Word('загаживай', 3),
  imperativeFormal: Word('загаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(загаживать.name.text, загаживать);

export { загаживать };