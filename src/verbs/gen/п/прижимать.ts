import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прижимать: PerfectVerb = {
  name: Word('прижимать', 6),
  singular1stPerson: Word('прижимаю', 6),
  singular2ndPerson: Word('прижимаешь', 6),
  singular3rdPerson: Word('прижимает', 6),
  plural1stPerson: Word('прижимаем', 6),
  plural2ndPerson: Word('прижимаете', 6),
  plural3rdPerson: Word('прижимают', 6),
  masculinePast: Word('прижимал', 6),
  femininePast: Word('прижимала', 6),
  neuterPast: Word('прижимало', 6),
  pluralPast: Word('прижимали', 6),
  imperativeInformal: Word('прижимай', 6),
  imperativeFormal: Word('прижимайте', 6),
  imperfect: [],
};

perfectVerbs.set(прижимать.name.text, прижимать);

export { прижимать };