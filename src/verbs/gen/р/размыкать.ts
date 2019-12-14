import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размыкать: PerfectVerb = {
  name: Word('размыкать', 4),
  singular1stPerson: Word('размыкаю', 4),
  singular2ndPerson: Word('размыкаешь', 4),
  singular3rdPerson: Word('размыкает', 4),
  plural1stPerson: Word('размыкаем', 4),
  plural2ndPerson: Word('размыкаете', 4),
  plural3rdPerson: Word('размыкают', 4),
  masculinePast: Word('размыкал', 4),
  femininePast: Word('размыкала', 4),
  neuterPast: Word('размыкало', 4),
  pluralPast: Word('размыкали', 4),
  imperativeInformal: Word('размыкай', 4),
  imperativeFormal: Word('размыкайте', 4),
  imperfect: [],
};

perfectVerbs.set(размыкать.name.text, размыкать);

export { размыкать };