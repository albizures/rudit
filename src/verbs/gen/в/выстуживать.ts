import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстуживать: PerfectVerb = {
  name: Word('выстуживать', 4),
  singular1stPerson: Word('выстуживаю', 4),
  singular2ndPerson: Word('выстуживаешь', 4),
  singular3rdPerson: Word('выстуживает', 4),
  plural1stPerson: Word('выстуживаем', 4),
  plural2ndPerson: Word('выстуживаете', 4),
  plural3rdPerson: Word('выстуживают', 4),
  masculinePast: Word('выстуживал', 4),
  femininePast: Word('выстуживала', 4),
  neuterPast: Word('выстуживало', 4),
  pluralPast: Word('выстуживали', 4),
  imperativeInformal: Word('выстуживай', 4),
  imperativeFormal: Word('выстуживайте', 4),
  imperfect: [],
};

perfectVerbs.set(выстуживать.name.text, выстуживать);

export { выстуживать };