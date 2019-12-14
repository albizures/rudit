import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгораживать: PerfectVerb = {
  name: Word('выгораживать', 5),
  singular1stPerson: Word('выгораживаю', 5),
  singular2ndPerson: Word('выгораживаешь', 5),
  singular3rdPerson: Word('выгораживает', 5),
  plural1stPerson: Word('выгораживаем', 5),
  plural2ndPerson: Word('выгораживаете', 5),
  plural3rdPerson: Word('выгораживают', 5),
  masculinePast: Word('выгораживал', 5),
  femininePast: Word('выгораживала', 5),
  neuterPast: Word('выгораживало', 5),
  pluralPast: Word('выгораживали', 5),
  imperativeInformal: Word('выгораживай', 5),
  imperativeFormal: Word('выгораживайте', 5),
  imperfect: [],
};

perfectVerbs.set(выгораживать.name.text, выгораживать);

export { выгораживать };