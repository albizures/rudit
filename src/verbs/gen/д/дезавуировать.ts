import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дезавуировать: PerfectVerb = {
  name: Word('дезавуировать', 6),
  singular1stPerson: Word('дезавуирую', 6),
  singular2ndPerson: Word('дезавуируешь', 6),
  singular3rdPerson: Word('дезавуирует', 6),
  plural1stPerson: Word('дезавуируем', 6),
  plural2ndPerson: Word('дезавуируете', 6),
  plural3rdPerson: Word('дезавуируют', 6),
  masculinePast: Word('дезавуировал', 6),
  femininePast: Word('дезавуировала', 6),
  neuterPast: Word('дезавуировало', 6),
  pluralPast: Word('дезавуировали', 6),
  imperativeInformal: Word('дезавуируй', 6),
  imperativeFormal: Word('дезавуируйте', 6),
  imperfect: [],
};

perfectVerbs.set(дезавуировать.name.text, дезавуировать);

export { дезавуировать };