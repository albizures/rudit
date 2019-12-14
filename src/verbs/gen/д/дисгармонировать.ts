import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дисгармонировать: PerfectVerb = {
  name: Word('дисгармонировать', 9),
  singular1stPerson: Word('дисгармонирую', 9),
  singular2ndPerson: Word('дисгармонируешь', 9),
  singular3rdPerson: Word('дисгармонирует', 9),
  plural1stPerson: Word('дисгармонируем', 9),
  plural2ndPerson: Word('дисгармонируете', 9),
  plural3rdPerson: Word('дисгармонируют', 9),
  masculinePast: Word('дисгармонировал', 9),
  femininePast: Word('дисгармонировала', 9),
  neuterPast: Word('дисгармонировало', 9),
  pluralPast: Word('дисгармонировали', 9),
  imperativeInformal: Word('дисгармонируй', 9),
  imperativeFormal: Word('дисгармонируйте', 9),
  imperfect: [],
};

perfectVerbs.set(дисгармонировать.name.text, дисгармонировать);

export { дисгармонировать };