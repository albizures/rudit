import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вынимать: PerfectVerb = {
  name: Word('вынимать', 5),
  singular1stPerson: Word('вынимаю', 5),
  singular2ndPerson: Word('вынимаешь', 5),
  singular3rdPerson: Word('вынимает', 5),
  plural1stPerson: Word('вынимаем', 5),
  plural2ndPerson: Word('вынимаете', 5),
  plural3rdPerson: Word('вынимают', 5),
  masculinePast: Word('вынимал', 5),
  femininePast: Word('вынимала', 5),
  neuterPast: Word('вынимало', 5),
  pluralPast: Word('вынимали', 5),
  imperativeInformal: Word('вынимай', 5),
  imperativeFormal: Word('вынимайте', 5),
  imperfect: ['вынуть'],
};

perfectVerbs.set(вынимать.name.text, вынимать);

export { вынимать };