import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дисциплинировать: PerfectVerb = {
  name: Word('дисциплинировать', 9),
  singular1stPerson: Word('дисциплинирую', 9),
  singular2ndPerson: Word('дисциплинируешь', 9),
  singular3rdPerson: Word('дисциплинирует', 9),
  plural1stPerson: Word('дисциплинируем', 9),
  plural2ndPerson: Word('дисциплинируете', 9),
  plural3rdPerson: Word('дисциплинируют', 9),
  masculinePast: Word('дисциплинировал', 9),
  femininePast: Word('дисциплинировала', 9),
  neuterPast: Word('дисциплинировало', 9),
  pluralPast: Word('дисциплинировали', 9),
  imperativeInformal: Word('дисциплинируй', 9),
  imperativeFormal: Word('дисциплинируйте', 9),
  imperfect: [],
};

perfectVerbs.set(дисциплинировать.name.text, дисциплинировать);

export { дисциплинировать };