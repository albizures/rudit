import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспухать: PerfectVerb = {
  name: Word('вспухать', 5),
  singular1stPerson: Word('вспухаю', 5),
  singular2ndPerson: Word('вспухаешь', 5),
  singular3rdPerson: Word('вспухает', 5),
  plural1stPerson: Word('вспухаем', 5),
  plural2ndPerson: Word('вспухаете', 5),
  plural3rdPerson: Word('вспухают', 5),
  masculinePast: Word('вспухал', 5),
  femininePast: Word('вспухала', 5),
  neuterPast: Word('вспухало', 5),
  pluralPast: Word('вспухали', 5),
  imperativeInformal: Word('вспухай', 5),
  imperativeFormal: Word('вспухайте', 5),
  imperfect: [],
};

perfectVerbs.set(вспухать.name.text, вспухать);

export { вспухать };