import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лентяйничать: PerfectVerb = {
  name: Word('лентяйничать', 4),
  singular1stPerson: Word('лентяйничаю', 4),
  singular2ndPerson: Word('лентяйничаешь', 4),
  singular3rdPerson: Word('лентяйничает', 4),
  plural1stPerson: Word('лентяйничаем', 4),
  plural2ndPerson: Word('лентяйничаете', 4),
  plural3rdPerson: Word('лентяйничают', 4),
  masculinePast: Word('лентяйничал', 4),
  femininePast: Word('лентяйничала', 4),
  neuterPast: Word('лентяйничало', 4),
  pluralPast: Word('лентяйничали', 4),
  imperativeInformal: Word('лентяйничай', 4),
  imperativeFormal: Word('лентяйничайте', 4),
  imperfect: [],
};

perfectVerbs.set(лентяйничать.name.text, лентяйничать);

export { лентяйничать };