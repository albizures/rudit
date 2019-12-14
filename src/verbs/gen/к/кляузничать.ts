import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кляузничать: PerfectVerb = {
  name: Word('кляузничать', 2),
  singular1stPerson: Word('кляузничаю', 2),
  singular2ndPerson: Word('кляузничаешь', 2),
  singular3rdPerson: Word('кляузничает', 2),
  plural1stPerson: Word('кляузничаем', 2),
  plural2ndPerson: Word('кляузничаете', 2),
  plural3rdPerson: Word('кляузничают', 2),
  masculinePast: Word('кляузничал', 2),
  femininePast: Word('кляузничала', 2),
  neuterPast: Word('кляузничало', 2),
  pluralPast: Word('кляузничали', 2),
  imperativeInformal: Word('кляузничай', 2),
  imperativeFormal: Word('кляузничайте', 2),
  imperfect: [],
};

perfectVerbs.set(кляузничать.name.text, кляузничать);

export { кляузничать };