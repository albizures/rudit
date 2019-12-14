import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гранулировать: PerfectVerb = {
  name: Word('гранулировать', 6),
  singular1stPerson: Word('гранулирую', 6),
  singular2ndPerson: Word('гранулируешь', 6),
  singular3rdPerson: Word('гранулирует', 6),
  plural1stPerson: Word('гранулируем', 6),
  plural2ndPerson: Word('гранулируете', 6),
  plural3rdPerson: Word('гранулируют', 6),
  masculinePast: Word('гранулировал', 6),
  femininePast: Word('гранулировала', 6),
  neuterPast: Word('гранулировало', 6),
  pluralPast: Word('гранулировали', 6),
  imperativeInformal: Word('гранулируй', 6),
  imperativeFormal: Word('гранулируйте', 6),
  imperfect: [],
};

perfectVerbs.set(гранулировать.name.text, гранулировать);

export { гранулировать };