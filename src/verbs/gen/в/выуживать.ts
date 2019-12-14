import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выуживать: PerfectVerb = {
  name: Word('выуживать', 2),
  singular1stPerson: Word('выуживаю', 2),
  singular2ndPerson: Word('выуживаешь', 2),
  singular3rdPerson: Word('выуживает', 2),
  plural1stPerson: Word('выуживаем', 2),
  plural2ndPerson: Word('выуживаете', 2),
  plural3rdPerson: Word('выуживают', 2),
  masculinePast: Word('выуживал', 2),
  femininePast: Word('выуживала', 2),
  neuterPast: Word('выуживало', 2),
  pluralPast: Word('выуживали', 2),
  imperativeInformal: Word('выуживай', 2),
  imperativeFormal: Word('выуживайте', 2),
  imperfect: [],
};

perfectVerbs.set(выуживать.name.text, выуживать);

export { выуживать };