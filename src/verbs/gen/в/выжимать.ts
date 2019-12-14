import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выжимать: PerfectVerb = {
  name: Word('выжимать', 5),
  singular1stPerson: Word('выжимаю', 5),
  singular2ndPerson: Word('выжимаешь', 5),
  singular3rdPerson: Word('выжимает', 5),
  plural1stPerson: Word('выжимаем', 5),
  plural2ndPerson: Word('выжимаете', 5),
  plural3rdPerson: Word('выжимают', 5),
  masculinePast: Word('выжимал', 5),
  femininePast: Word('выжимала', 5),
  neuterPast: Word('выжимало', 5),
  pluralPast: Word('выжимали', 5),
  imperativeInformal: Word('выжимай', 5),
  imperativeFormal: Word('выжимайте', 5),
  imperfect: ['выжать'],
};

perfectVerbs.set(выжимать.name.text, выжимать);

export { выжимать };