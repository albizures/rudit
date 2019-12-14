import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дублировать: PerfectVerb = {
  name: Word('дублировать', 4),
  singular1stPerson: Word('дублирую', 4),
  singular2ndPerson: Word('дублируешь', 4),
  singular3rdPerson: Word('дублирует', 4),
  plural1stPerson: Word('дублируем', 4),
  plural2ndPerson: Word('дублируете', 4),
  plural3rdPerson: Word('дублируют', 4),
  masculinePast: Word('дублировал', 4),
  femininePast: Word('дублировала', 4),
  neuterPast: Word('дублировало', 4),
  pluralPast: Word('дублировали', 4),
  imperativeInformal: Word('дублируй', 4),
  imperativeFormal: Word('дублируйте', 4),
  imperfect: [],
};

perfectVerbs.set(дублировать.name.text, дублировать);

export { дублировать };