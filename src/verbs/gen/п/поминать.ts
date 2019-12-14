import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поминать: PerfectVerb = {
  name: Word('поминать', 5),
  singular1stPerson: Word('поминаю', 5),
  singular2ndPerson: Word('поминаешь', 5),
  singular3rdPerson: Word('поминает', 5),
  plural1stPerson: Word('поминаем', 5),
  plural2ndPerson: Word('поминаете', 5),
  plural3rdPerson: Word('поминают', 5),
  masculinePast: Word('поминал', 5),
  femininePast: Word('поминала', 5),
  neuterPast: Word('поминало', 5),
  pluralPast: Word('поминали', 5),
  imperativeInformal: Word('поминай', 5),
  imperativeFormal: Word('поминайте', 5),
  imperfect: [],
};

perfectVerbs.set(поминать.name.text, поминать);

export { поминать };