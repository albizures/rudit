import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промешкать: PerfectVerb = {
  name: Word('промешкать', 4),
  singular1stPerson: Word('промешкаю', 4),
  singular2ndPerson: Word('промешкаешь', 4),
  singular3rdPerson: Word('промешкает', 4),
  plural1stPerson: Word('промешкаем', 4),
  plural2ndPerson: Word('промешкаете', 4),
  plural3rdPerson: Word('промешкают', 4),
  masculinePast: Word('промешкал', 4),
  femininePast: Word('промешкала', 4),
  neuterPast: Word('промешкало', 4),
  pluralPast: Word('промешкали', 4),
  imperativeInformal: Word('промешкай', 4),
  imperativeFormal: Word('промешкайте', 4),
  imperfect: [],
};

perfectVerbs.set(промешкать.name.text, промешкать);

export { промешкать };