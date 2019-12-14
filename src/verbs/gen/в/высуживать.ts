import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высуживать: PerfectVerb = {
  name: Word('высуживать', 3),
  singular1stPerson: Word('высуживаю', 3),
  singular2ndPerson: Word('высуживаешь', 3),
  singular3rdPerson: Word('высуживает', 3),
  plural1stPerson: Word('высуживаем', 3),
  plural2ndPerson: Word('высуживаете', 3),
  plural3rdPerson: Word('высуживают', 3),
  masculinePast: Word('высуживал', 3),
  femininePast: Word('высуживала', 3),
  neuterPast: Word('высуживало', 3),
  pluralPast: Word('высуживали', 3),
  imperativeInformal: Word('высуживай', 3),
  imperativeFormal: Word('высуживайте', 3),
  imperfect: [],
};

perfectVerbs.set(высуживать.name.text, высуживать);

export { высуживать };