import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const патронировать: PerfectVerb = {
  name: Word('патронировать', 6),
  singular1stPerson: Word('патронирую', 6),
  singular2ndPerson: Word('патронируешь', 6),
  singular3rdPerson: Word('патронирует', 6),
  plural1stPerson: Word('патронируем', 6),
  plural2ndPerson: Word('патронируете', 6),
  plural3rdPerson: Word('патронируют', 6),
  masculinePast: Word('патронировал', 6),
  femininePast: Word('патронировала', 6),
  neuterPast: Word('патронировало', 6),
  pluralPast: Word('патронировали', 6),
  imperativeInformal: Word('патронируй', 6),
  imperativeFormal: Word('патронируйте', 6),
  imperfect: [],
};

perfectVerbs.set(патронировать.name.text, патронировать);

export { патронировать };