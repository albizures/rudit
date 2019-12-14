import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кромсать: PerfectVerb = {
  name: Word('кромсать', 5),
  singular1stPerson: Word('кромсаю', 5),
  singular2ndPerson: Word('кромсаешь', 5),
  singular3rdPerson: Word('кромсает', 5),
  plural1stPerson: Word('кромсаем', 5),
  plural2ndPerson: Word('кромсаете', 5),
  plural3rdPerson: Word('кромсают', 5),
  masculinePast: Word('кромсал', 5),
  femininePast: Word('кромсала', 5),
  neuterPast: Word('кромсало', 5),
  pluralPast: Word('кромсали', 5),
  imperativeInformal: Word('кромсай', 5),
  imperativeFormal: Word('кромсайте', 5),
  imperfect: [],
};

perfectVerbs.set(кромсать.name.text, кромсать);

export { кромсать };