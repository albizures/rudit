import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выцветать: PerfectVerb = {
  name: Word('выцветать', 6),
  singular1stPerson: Word('выцветаю', 6),
  singular2ndPerson: Word('выцветаешь', 6),
  singular3rdPerson: Word('выцветает', 6),
  plural1stPerson: Word('выцветаем', 6),
  plural2ndPerson: Word('выцветаете', 6),
  plural3rdPerson: Word('выцветают', 6),
  masculinePast: Word('выцветал', 6),
  femininePast: Word('выцветала', 6),
  neuterPast: Word('выцветало', 6),
  pluralPast: Word('выцветали', 6),
  imperativeInformal: Word('выцветай', 6),
  imperativeFormal: Word('выцветайте', 6),
  imperfect: [],
};

perfectVerbs.set(выцветать.name.text, выцветать);

export { выцветать };