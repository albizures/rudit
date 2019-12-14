import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подражать: PerfectVerb = {
  name: Word('подражать', 6),
  singular1stPerson: Word('подражаю', 6),
  singular2ndPerson: Word('подражаешь', 6),
  singular3rdPerson: Word('подражает', 6),
  plural1stPerson: Word('подражаем', 6),
  plural2ndPerson: Word('подражаете', 6),
  plural3rdPerson: Word('подражают', 6),
  masculinePast: Word('подражал', 6),
  femininePast: Word('подражала', 6),
  neuterPast: Word('подражало', 6),
  pluralPast: Word('подражали', 6),
  imperativeInformal: Word('подражай', 6),
  imperativeFormal: Word('подражайте', 6),
  imperfect: [],
};

perfectVerbs.set(подражать.name.text, подражать);

export { подражать };