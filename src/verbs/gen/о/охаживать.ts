import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охаживать: PerfectVerb = {
  name: Word('охаживать', 2),
  singular1stPerson: Word('охаживаю', 2),
  singular2ndPerson: Word('охаживаешь', 2),
  singular3rdPerson: Word('охаживает', 2),
  plural1stPerson: Word('охаживаем', 2),
  plural2ndPerson: Word('охаживаете', 2),
  plural3rdPerson: Word('охаживают', 2),
  masculinePast: Word('охаживал', 2),
  femininePast: Word('охаживала', 2),
  neuterPast: Word('охаживало', 2),
  pluralPast: Word('охаживали', 2),
  imperativeInformal: Word('охаживай', 2),
  imperativeFormal: Word('охаживайте', 2),
  imperfect: [],
};

perfectVerbs.set(охаживать.name.text, охаживать);

export { охаживать };