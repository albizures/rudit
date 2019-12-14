import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжимать: PerfectVerb = {
  name: Word('обжимать', 5),
  singular1stPerson: Word('обжимаю', 5),
  singular2ndPerson: Word('обжимаешь', 5),
  singular3rdPerson: Word('обжимает', 5),
  plural1stPerson: Word('обжимаем', 5),
  plural2ndPerson: Word('обжимаете', 5),
  plural3rdPerson: Word('обжимают', 5),
  masculinePast: Word('обжимал', 5),
  femininePast: Word('обжимала', 5),
  neuterPast: Word('обжимало', 5),
  pluralPast: Word('обжимали', 5),
  imperativeInformal: Word('обжимай', 5),
  imperativeFormal: Word('обжимайте', 5),
  imperfect: [],
};

perfectVerbs.set(обжимать.name.text, обжимать);

export { обжимать };