import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикипать: PerfectVerb = {
  name: Word('прикипать', 6),
  singular1stPerson: Word('прикипаю', 6),
  singular2ndPerson: Word('прикипаешь', 6),
  singular3rdPerson: Word('прикипает', 6),
  plural1stPerson: Word('прикипаем', 6),
  plural2ndPerson: Word('прикипаете', 6),
  plural3rdPerson: Word('прикипают', 6),
  masculinePast: Word('прикипал', 6),
  femininePast: Word('прикипала', 6),
  neuterPast: Word('прикипало', 6),
  pluralPast: Word('прикипали', 6),
  imperativeInformal: Word('прикипай', 6),
  imperativeFormal: Word('прикипайте', 6),
  imperfect: [],
};

perfectVerbs.set(прикипать.name.text, прикипать);

export { прикипать };