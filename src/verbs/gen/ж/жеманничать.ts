import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жеманничать: PerfectVerb = {
  name: Word('жеманничать', 3),
  singular1stPerson: Word('жеманничаю', 3),
  singular2ndPerson: Word('жеманничаешь', 3),
  singular3rdPerson: Word('жеманничает', 3),
  plural1stPerson: Word('жеманничаем', 3),
  plural2ndPerson: Word('жеманничаете', 3),
  plural3rdPerson: Word('жеманничают', 3),
  masculinePast: Word('жеманничал', 3),
  femininePast: Word('жеманничала', 3),
  neuterPast: Word('жеманничало', 3),
  pluralPast: Word('жеманничали', 3),
  imperativeInformal: Word('жеманничай', 3),
  imperativeFormal: Word('жеманничайте', 3),
  imperfect: [],
};

perfectVerbs.set(жеманничать.name.text, жеманничать);

export { жеманничать };