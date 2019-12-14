import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загораживать: PerfectVerb = {
  name: Word('загораживать', 5),
  singular1stPerson: Word('загораживаю', 5),
  singular2ndPerson: Word('загораживаешь', 5),
  singular3rdPerson: Word('загораживает', 5),
  plural1stPerson: Word('загораживаем', 5),
  plural2ndPerson: Word('загораживаете', 5),
  plural3rdPerson: Word('загораживают', 5),
  masculinePast: Word('загораживал', 5),
  femininePast: Word('загораживала', 5),
  neuterPast: Word('загораживало', 5),
  pluralPast: Word('загораживали', 5),
  imperativeInformal: Word('загораживай', 5),
  imperativeFormal: Word('загораживайте', 5),
  imperfect: [],
};

perfectVerbs.set(загораживать.name.text, загораживать);

export { загораживать };