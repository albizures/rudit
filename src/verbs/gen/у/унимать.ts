import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унимать: PerfectVerb = {
  name: Word('унимать', 4),
  singular1stPerson: Word('унимаю', 4),
  singular2ndPerson: Word('унимаешь', 4),
  singular3rdPerson: Word('унимает', 4),
  plural1stPerson: Word('унимаем', 4),
  plural2ndPerson: Word('унимаете', 4),
  plural3rdPerson: Word('унимают', 4),
  masculinePast: Word('унимал', 4),
  femininePast: Word('унимала', 4),
  neuterPast: Word('унимало', 4),
  pluralPast: Word('унимали', 4),
  imperativeInformal: Word('унимай', 4),
  imperativeFormal: Word('унимайте', 4),
  imperfect: [],
};

perfectVerbs.set(унимать.name.text, унимать);

export { унимать };