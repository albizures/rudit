import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охать: PerfectVerb = {
  name: Word('охать', 0),
  singular1stPerson: Word('охаю', 0),
  singular2ndPerson: Word('охаешь', 0),
  singular3rdPerson: Word('охает', 0),
  plural1stPerson: Word('охаем', 0),
  plural2ndPerson: Word('охаете', 0),
  plural3rdPerson: Word('охают', 0),
  masculinePast: Word('охал', 0),
  femininePast: Word('охала', 0),
  neuterPast: Word('охало', 0),
  pluralPast: Word('охали', 0),
  imperativeInformal: Word('охай', 0),
  imperativeFormal: Word('охайте', 0),
  imperfect: [],
};

perfectVerbs.set(охать.name.text, охать);

export { охать };