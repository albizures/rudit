import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предугадать: PerfectVerb = {
  name: Word('предугадать', 8),
  singular1stPerson: Word('предугадаю', 8),
  singular2ndPerson: Word('предугадаешь', 8),
  singular3rdPerson: Word('предугадает', 8),
  plural1stPerson: Word('предугадаем', 8),
  plural2ndPerson: Word('предугадаете', 8),
  plural3rdPerson: Word('предугадают', 8),
  masculinePast: Word('предугадал', 8),
  femininePast: Word('предугадала', 8),
  neuterPast: Word('предугадало', 8),
  pluralPast: Word('предугадали', 8),
  imperativeInformal: Word('предугадай', 8),
  imperativeFormal: Word('предугадайте', 8),
  imperfect: [],
};

perfectVerbs.set(предугадать.name.text, предугадать);

export { предугадать };