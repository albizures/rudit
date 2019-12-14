import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсыпать: PerfectVerb = {
  name: Word('подсыпать', 6),
  singular1stPerson: Word('подсыпаю', 6),
  singular2ndPerson: Word('подсыпаешь', 6),
  singular3rdPerson: Word('подсыпает', 6),
  plural1stPerson: Word('подсыпаем', 6),
  plural2ndPerson: Word('подсыпаете', 6),
  plural3rdPerson: Word('подсыпают', 6),
  masculinePast: Word('подсыпал', 6),
  femininePast: Word('подсыпала', 6),
  neuterPast: Word('подсыпало', 6),
  pluralPast: Word('подсыпали', 6),
  imperativeInformal: Word('подсыпай', 6),
  imperativeFormal: Word('подсыпайте', 6),
  imperfect: [],
};

perfectVerbs.set(подсыпать.name.text, подсыпать);

export { подсыпать };