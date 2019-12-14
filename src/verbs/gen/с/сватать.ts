import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сватать: PerfectVerb = {
  name: Word('сватать', 2),
  singular1stPerson: Word('сватаю', 2),
  singular2ndPerson: Word('сватаешь', 2),
  singular3rdPerson: Word('сватает', 2),
  plural1stPerson: Word('сватаем', 2),
  plural2ndPerson: Word('сватаете', 2),
  plural3rdPerson: Word('сватают', 2),
  masculinePast: Word('сватал', 2),
  femininePast: Word('сватала', 2),
  neuterPast: Word('сватало', 2),
  pluralPast: Word('сватали', 2),
  imperativeInformal: Word('сватай', 2),
  imperativeFormal: Word('сватайте', 2),
  imperfect: [],
};

perfectVerbs.set(сватать.name.text, сватать);

export { сватать };