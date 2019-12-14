import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздыхать: PerfectVerb = {
  name: Word('вздыхать', 5),
  singular1stPerson: Word('вздыхаю', 5),
  singular2ndPerson: Word('вздыхаешь', 5),
  singular3rdPerson: Word('вздыхает', 5),
  plural1stPerson: Word('вздыхаем', 5),
  plural2ndPerson: Word('вздыхаете', 5),
  plural3rdPerson: Word('вздыхают', 5),
  masculinePast: Word('вздыхал', 5),
  femininePast: Word('вздыхала', 5),
  neuterPast: Word('вздыхало', 5),
  pluralPast: Word('вздыхали', 5),
  imperativeInformal: Word('вздыхай', 5),
  imperativeFormal: Word('вздыхайте', 5),
  imperfect: ['вздохнуть'],
};

perfectVerbs.set(вздыхать.name.text, вздыхать);

export { вздыхать };