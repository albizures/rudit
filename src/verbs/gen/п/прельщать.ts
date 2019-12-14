import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прельщать: PerfectVerb = {
  name: Word('прельщать', 6),
  singular1stPerson: Word('прельщаю', 6),
  singular2ndPerson: Word('прельщаешь', 6),
  singular3rdPerson: Word('прельщает', 6),
  plural1stPerson: Word('прельщаем', 6),
  plural2ndPerson: Word('прельщаете', 6),
  plural3rdPerson: Word('прельщают', 6),
  masculinePast: Word('прельщал', 6),
  femininePast: Word('прельщала', 6),
  neuterPast: Word('прельщало', 6),
  pluralPast: Word('прельщали', 6),
  imperativeInformal: Word('прельщай', 6),
  imperativeFormal: Word('прельщайте', 6),
  imperfect: ['прельстить'],
};

perfectVerbs.set(прельщать.name.text, прельщать);

export { прельщать };