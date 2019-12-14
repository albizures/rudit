import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набезобразничать: PerfectVerb = {
  name: Word('набезобразничать', 8),
  singular1stPerson: Word('набезобразничаю', 8),
  singular2ndPerson: Word('набезобразничаешь', 8),
  singular3rdPerson: Word('набезобразничает', 8),
  plural1stPerson: Word('набезобразничаем', 8),
  plural2ndPerson: Word('набезобразничаете', 8),
  plural3rdPerson: Word('набезобразничают', 8),
  masculinePast: Word('набезобразничал', 8),
  femininePast: Word('набезобразничала', 8),
  neuterPast: Word('набезобразничало', 8),
  pluralPast: Word('набезобразничали', 8),
  imperativeInformal: Word('набезобразничай', 8),
  imperativeFormal: Word('набезобразничайте', 8),
  imperfect: [],
};

perfectVerbs.set(набезобразничать.name.text, набезобразничать);

export { набезобразничать };