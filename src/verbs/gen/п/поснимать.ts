import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поснимать: PerfectVerb = {
  name: Word('поснимать', 6),
  singular1stPerson: Word('поснимаю', 6),
  singular2ndPerson: Word('поснимаешь', 6),
  singular3rdPerson: Word('поснимает', 6),
  plural1stPerson: Word('поснимаем', 6),
  plural2ndPerson: Word('поснимаете', 6),
  plural3rdPerson: Word('поснимают', 6),
  masculinePast: Word('поснимал', 6),
  femininePast: Word('поснимала', 6),
  neuterPast: Word('поснимало', 6),
  pluralPast: Word('поснимали', 6),
  imperativeInformal: Word('поснимай', 6),
  imperativeFormal: Word('поснимайте', 6),
  imperfect: [],
};

perfectVerbs.set(поснимать.name.text, поснимать);

export { поснимать };