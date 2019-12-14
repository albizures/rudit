import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорубать: PerfectVerb = {
  name: Word('дорубать', 5),
  singular1stPerson: Word('дорубаю', 5),
  singular2ndPerson: Word('дорубаешь', 5),
  singular3rdPerson: Word('дорубает', 5),
  plural1stPerson: Word('дорубаем', 5),
  plural2ndPerson: Word('дорубаете', 5),
  plural3rdPerson: Word('дорубают', 5),
  masculinePast: Word('дорубал', 5),
  femininePast: Word('дорубала', 5),
  neuterPast: Word('дорубало', 5),
  pluralPast: Word('дорубали', 5),
  imperativeInformal: Word('дорубай', 5),
  imperativeFormal: Word('дорубайте', 5),
  imperfect: [],
};

perfectVerbs.set(дорубать.name.text, дорубать);

export { дорубать };