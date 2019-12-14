import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const платинировать: PerfectVerb = {
  name: Word('платинировать', 6),
  singular1stPerson: Word('платинирую', 6),
  singular2ndPerson: Word('платинируешь', 6),
  singular3rdPerson: Word('платинирует', 6),
  plural1stPerson: Word('платинируем', 6),
  plural2ndPerson: Word('платинируете', 6),
  plural3rdPerson: Word('платинируют', 6),
  masculinePast: Word('платинировал', 6),
  femininePast: Word('платинировала', 6),
  neuterPast: Word('платинировало', 6),
  pluralPast: Word('платинировали', 6),
  imperativeInformal: Word('платинируй', 6),
  imperativeFormal: Word('платинируйте', 6),
  imperfect: [],
};

perfectVerbs.set(платинировать.name.text, платинировать);

export { платинировать };