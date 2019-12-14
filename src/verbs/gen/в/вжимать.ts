import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вжимать: PerfectVerb = {
  name: Word('вжимать', 4),
  singular1stPerson: Word('вжимаю', 4),
  singular2ndPerson: Word('вжимаешь', 4),
  singular3rdPerson: Word('вжимает', 4),
  plural1stPerson: Word('вжимаем', 4),
  plural2ndPerson: Word('вжимаете', 4),
  plural3rdPerson: Word('вжимают', 4),
  masculinePast: Word('вжимал', 4),
  femininePast: Word('вжимала', 4),
  neuterPast: Word('вжимало', 4),
  pluralPast: Word('вжимали', 4),
  imperativeInformal: Word('вжимай', 4),
  imperativeFormal: Word('вжимайте', 4),
  imperfect: [],
};

perfectVerbs.set(вжимать.name.text, вжимать);

export { вжимать };