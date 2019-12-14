import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гудронировать: PerfectVerb = {
  name: Word('гудронировать', 6),
  singular1stPerson: Word('гудронирую', 6),
  singular2ndPerson: Word('гудронируешь', 6),
  singular3rdPerson: Word('гудронирует', 6),
  plural1stPerson: Word('гудронируем', 6),
  plural2ndPerson: Word('гудронируете', 6),
  plural3rdPerson: Word('гудронируют', 6),
  masculinePast: Word('гудронировал', 6),
  femininePast: Word('гудронировала', 6),
  neuterPast: Word('гудронировало', 6),
  pluralPast: Word('гудронировали', 6),
  imperativeInformal: Word('гудронируй', 6),
  imperativeFormal: Word('гудронируйте', 6),
  imperfect: [],
};

perfectVerbs.set(гудронировать.name.text, гудронировать);

export { гудронировать };