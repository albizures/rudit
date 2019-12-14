import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подыхать: PerfectVerb = {
  name: Word('подыхать', 5),
  singular1stPerson: Word('подыхаю', 5),
  singular2ndPerson: Word('подыхаешь', 5),
  singular3rdPerson: Word('подыхает', 5),
  plural1stPerson: Word('подыхаем', 5),
  plural2ndPerson: Word('подыхаете', 5),
  plural3rdPerson: Word('подыхают', 5),
  masculinePast: Word('подыхал', 5),
  femininePast: Word('подыхала', 5),
  neuterPast: Word('подыхало', 5),
  pluralPast: Word('подыхали', 5),
  imperativeInformal: Word('подыхай', 5),
  imperativeFormal: Word('подыхайте', 5),
  imperfect: ['[[подохнуть'],
};

perfectVerbs.set(подыхать.name.text, подыхать);

export { подыхать };