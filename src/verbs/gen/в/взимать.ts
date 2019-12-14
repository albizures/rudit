import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взимать: PerfectVerb = {
  name: Word('взимать', 4),
  singular1stPerson: Word('взимаю', 4),
  singular2ndPerson: Word('взимаешь', 4),
  singular3rdPerson: Word('взимает', 4),
  plural1stPerson: Word('взимаем', 4),
  plural2ndPerson: Word('взимаете', 4),
  plural3rdPerson: Word('взимают', 4),
  masculinePast: Word('взимал', 4),
  femininePast: Word('взимала', 4),
  neuterPast: Word('взимало', 4),
  pluralPast: Word('взимали', 4),
  imperativeInformal: Word('взимай', 4),
  imperativeFormal: Word('взимайте', 4),
  imperfect: [],
};

perfectVerbs.set(взимать.name.text, взимать);

export { взимать };