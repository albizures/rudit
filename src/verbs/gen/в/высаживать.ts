import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высаживать: PerfectVerb = {
  name: Word('высаживать', 3),
  singular1stPerson: Word('высаживаю', 3),
  singular2ndPerson: Word('высаживаешь', 3),
  singular3rdPerson: Word('высаживает', 3),
  plural1stPerson: Word('высаживаем', 3),
  plural2ndPerson: Word('высаживаете', 3),
  plural3rdPerson: Word('высаживают', 3),
  masculinePast: Word('высаживал', 3),
  femininePast: Word('высаживала', 3),
  neuterPast: Word('высаживало', 3),
  pluralPast: Word('высаживали', 3),
  imperativeInformal: Word('высаживай', 3),
  imperativeFormal: Word('высаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(высаживать.name.text, высаживать);

export { высаживать };