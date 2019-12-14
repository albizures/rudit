import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикупать: PerfectVerb = {
  name: Word('прикупать', 6),
  singular1stPerson: Word('прикупаю', 6),
  singular2ndPerson: Word('прикупаешь', 6),
  singular3rdPerson: Word('прикупает', 6),
  plural1stPerson: Word('прикупаем', 6),
  plural2ndPerson: Word('прикупаете', 6),
  plural3rdPerson: Word('прикупают', 6),
  masculinePast: Word('прикупал', 6),
  femininePast: Word('прикупала', 6),
  neuterPast: Word('прикупало', 6),
  pluralPast: Word('прикупали', 6),
  imperativeInformal: Word('прикупай', 6),
  imperativeFormal: Word('прикупайте', 6),
  imperfect: [],
};

perfectVerbs.set(прикупать.name.text, прикупать);

export { прикупать };