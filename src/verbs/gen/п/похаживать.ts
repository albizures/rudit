import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похаживать: PerfectVerb = {
  name: Word('похаживать', 3),
  singular1stPerson: Word('похаживаю', 3),
  singular2ndPerson: Word('похаживаешь', 3),
  singular3rdPerson: Word('похаживает', 3),
  plural1stPerson: Word('похаживаем', 3),
  plural2ndPerson: Word('похаживаете', 3),
  plural3rdPerson: Word('похаживают', 3),
  masculinePast: Word('похаживал', 3),
  femininePast: Word('похаживала', 3),
  neuterPast: Word('похаживало', 3),
  pluralPast: Word('похаживали', 3),
  imperativeInformal: Word('похаживай', 3),
  imperativeFormal: Word('похаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(похаживать.name.text, похаживать);

export { похаживать };