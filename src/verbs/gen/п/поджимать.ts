import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поджимать: PerfectVerb = {
  name: Word('поджимать', 6),
  singular1stPerson: Word('поджимаю', 6),
  singular2ndPerson: Word('поджимаешь', 6),
  singular3rdPerson: Word('поджимает', 6),
  plural1stPerson: Word('поджимаем', 6),
  plural2ndPerson: Word('поджимаете', 6),
  plural3rdPerson: Word('поджимают', 6),
  masculinePast: Word('поджимал', 6),
  femininePast: Word('поджимала', 6),
  neuterPast: Word('поджимало', 6),
  pluralPast: Word('поджимали', 6),
  imperativeInformal: Word('поджимай', 6),
  imperativeFormal: Word('поджимайте', 6),
  imperfect: [],
};

perfectVerbs.set(поджимать.name.text, поджимать);

export { поджимать };