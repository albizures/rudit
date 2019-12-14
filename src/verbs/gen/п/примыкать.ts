import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примыкать: PerfectVerb = {
  name: Word('примыкать', 6),
  singular1stPerson: Word('примыкаю', 6),
  singular2ndPerson: Word('примыкаешь', 6),
  singular3rdPerson: Word('примыкает', 6),
  plural1stPerson: Word('примыкаем', 6),
  plural2ndPerson: Word('примыкаете', 6),
  plural3rdPerson: Word('примыкают', 6),
  masculinePast: Word('примыкал', 6),
  femininePast: Word('примыкала', 6),
  neuterPast: Word('примыкало', 6),
  pluralPast: Word('примыкали', 6),
  imperativeInformal: Word('примыкай', 6),
  imperativeFormal: Word('примыкайте', 6),
  imperfect: ['примкнуть'],
};

perfectVerbs.set(примыкать.name.text, примыкать);

export { примыкать };