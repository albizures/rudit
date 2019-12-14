import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прирезать: PerfectVerb = {
  name: Word('прирезать', 6),
  singular1stPerson: Word('прирезаю', 6),
  singular2ndPerson: Word('прирезаешь', 6),
  singular3rdPerson: Word('прирезает', 6),
  plural1stPerson: Word('прирезаем', 6),
  plural2ndPerson: Word('прирезаете', 6),
  plural3rdPerson: Word('прирезают', 6),
  masculinePast: Word('прирезал', 6),
  femininePast: Word('прирезала', 6),
  neuterPast: Word('прирезало', 6),
  pluralPast: Word('прирезали', 6),
  imperativeInformal: Word('прирезай', 6),
  imperativeFormal: Word('прирезайте', 6),
  imperfect: [],
};

perfectVerbs.set(прирезать.name.text, прирезать);

export { прирезать };