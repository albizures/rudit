import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рукополагать: PerfectVerb = {
  name: Word('рукополагать', 9),
  singular1stPerson: Word('рукополагаю', 9),
  singular2ndPerson: Word('рукополагаешь', 9),
  singular3rdPerson: Word('рукополагает', 9),
  plural1stPerson: Word('рукополагаем', 9),
  plural2ndPerson: Word('рукополагаете', 9),
  plural3rdPerson: Word('рукополагают', 9),
  masculinePast: Word('рукополагал', 9),
  femininePast: Word('рукополагала', 9),
  neuterPast: Word('рукополагало', 9),
  pluralPast: Word('рукополагали', 9),
  imperativeInformal: Word('рукополагай', 9),
  imperativeFormal: Word('рукополагайте', 9),
  imperfect: [],
};

perfectVerbs.set(рукополагать.name.text, рукополагать);

export { рукополагать };