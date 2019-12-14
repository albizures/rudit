import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорезать: PerfectVerb = {
  name: Word('дорезать', 5),
  singular1stPerson: Word('дорезаю', 5),
  singular2ndPerson: Word('дорезаешь', 5),
  singular3rdPerson: Word('дорезает', 5),
  plural1stPerson: Word('дорезаем', 5),
  plural2ndPerson: Word('дорезаете', 5),
  plural3rdPerson: Word('дорезают', 5),
  masculinePast: Word('дорезал', 5),
  femininePast: Word('дорезала', 5),
  neuterPast: Word('дорезало', 5),
  pluralPast: Word('дорезали', 5),
  imperativeInformal: Word('дорезай', 5),
  imperativeFormal: Word('дорезайте', 5),
  imperfect: [],
};

perfectVerbs.set(дорезать.name.text, дорезать);

export { дорезать };