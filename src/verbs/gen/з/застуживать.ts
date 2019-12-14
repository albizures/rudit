import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застуживать: PerfectVerb = {
  name: Word('застуживать', 4),
  singular1stPerson: Word('застуживаю', 4),
  singular2ndPerson: Word('застуживаешь', 4),
  singular3rdPerson: Word('застуживает', 4),
  plural1stPerson: Word('застуживаем', 4),
  plural2ndPerson: Word('застуживаете', 4),
  plural3rdPerson: Word('застуживают', 4),
  masculinePast: Word('застуживал', 4),
  femininePast: Word('застуживала', 4),
  neuterPast: Word('застуживало', 4),
  pluralPast: Word('застуживали', 4),
  imperativeInformal: Word('застуживай', 4),
  imperativeFormal: Word('застуживайте', 4),
  imperfect: [],
};

perfectVerbs.set(застуживать.name.text, застуживать);

export { застуживать };