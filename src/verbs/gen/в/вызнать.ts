import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вызнать: PerfectVerb = {
  name: Word('вызнать', 1),
  singular1stPerson: Word('вызнаю', 1),
  singular2ndPerson: Word('вызнаешь', 1),
  singular3rdPerson: Word('вызнает', 1),
  plural1stPerson: Word('вызнаем', 1),
  plural2ndPerson: Word('вызнаете', 1),
  plural3rdPerson: Word('вызнают', 1),
  masculinePast: Word('вызнал', 1),
  femininePast: Word('вызнала', 1),
  neuterPast: Word('вызнало', 1),
  pluralPast: Word('вызнали', 1),
  imperativeInformal: Word('вызнай', 1),
  imperativeFormal: Word('вызнайте', 1),
  imperfect: [],
};

perfectVerbs.set(вызнать.name.text, вызнать);

export { вызнать };