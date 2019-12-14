import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const катать: PerfectVerb = {
  name: Word('катать', 3),
  singular1stPerson: Word('катаю', 3),
  singular2ndPerson: Word('катаешь', 3),
  singular3rdPerson: Word('катает', 3),
  plural1stPerson: Word('катаем', 3),
  plural2ndPerson: Word('катаете', 3),
  plural3rdPerson: Word('катают', 3),
  masculinePast: Word('катал', 3),
  femininePast: Word('катала', 3),
  neuterPast: Word('катало', 3),
  pluralPast: Word('катали', 3),
  imperativeInformal: Word('катай', 3),
  imperativeFormal: Word('катайте', 3),
  imperfect: ['покатать'],
};

perfectVerbs.set(катать.name.text, катать);

export { катать };