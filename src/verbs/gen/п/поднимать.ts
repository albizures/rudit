import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поднимать: PerfectVerb = {
  name: Word('поднимать', 6),
  singular1stPerson: Word('поднимаю', 6),
  singular2ndPerson: Word('поднимаешь', 6),
  singular3rdPerson: Word('поднимает', 6),
  plural1stPerson: Word('поднимаем', 6),
  plural2ndPerson: Word('поднимаете', 6),
  plural3rdPerson: Word('поднимают', 6),
  masculinePast: Word('поднимал', 6),
  femininePast: Word('поднимала', 6),
  neuterPast: Word('поднимало', 6),
  pluralPast: Word('поднимали', 6),
  imperativeInformal: Word('поднимай', 6),
  imperativeFormal: Word('поднимайте', 6),
  imperfect: ['поднять'],
};

perfectVerbs.set(поднимать.name.text, поднимать);

export { поднимать };