import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рожать: PerfectVerb = {
  name: Word('рожать', 3),
  singular1stPerson: Word('рожаю', 3),
  singular2ndPerson: Word('рожаешь', 3),
  singular3rdPerson: Word('рожает', 3),
  plural1stPerson: Word('рожаем', 3),
  plural2ndPerson: Word('рожаете', 3),
  plural3rdPerson: Word('рожают', 3),
  masculinePast: Word('рожал', 3),
  femininePast: Word('рожала', 3),
  neuterPast: Word('рожало', 3),
  pluralPast: Word('рожали', 3),
  imperativeInformal: Word('рожай', 3),
  imperativeFormal: Word('рожайте', 3),
  imperfect: ['родить'],
};

perfectVerbs.set(рожать.name.text, рожать);

export { рожать };