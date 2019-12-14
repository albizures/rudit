import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсыхать: PerfectVerb = {
  name: Word('подсыхать', 6),
  singular1stPerson: Word('подсыхаю', 6),
  singular2ndPerson: Word('подсыхаешь', 6),
  singular3rdPerson: Word('подсыхает', 6),
  plural1stPerson: Word('подсыхаем', 6),
  plural2ndPerson: Word('подсыхаете', 6),
  plural3rdPerson: Word('подсыхают', 6),
  masculinePast: Word('подсыхал', 6),
  femininePast: Word('подсыхала', 6),
  neuterPast: Word('подсыхало', 6),
  pluralPast: Word('подсыхали', 6),
  imperativeInformal: Word('подсыхай', 6),
  imperativeFormal: Word('подсыхайте', 6),
  imperfect: [],
};

perfectVerbs.set(подсыхать.name.text, подсыхать);

export { подсыхать };