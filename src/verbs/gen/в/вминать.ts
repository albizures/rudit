import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вминать: PerfectVerb = {
  name: Word('вминать', 4),
  singular1stPerson: Word('вминаю', 4),
  singular2ndPerson: Word('вминаешь', 4),
  singular3rdPerson: Word('вминает', 4),
  plural1stPerson: Word('вминаем', 4),
  plural2ndPerson: Word('вминаете', 4),
  plural3rdPerson: Word('вминают', 4),
  masculinePast: Word('вминал', 4),
  femininePast: Word('вминала', 4),
  neuterPast: Word('вминало', 4),
  pluralPast: Word('вминали', 4),
  imperativeInformal: Word('вминай', 4),
  imperativeFormal: Word('вминайте', 4),
  imperfect: [],
};

perfectVerbs.set(вминать.name.text, вминать);

export { вминать };