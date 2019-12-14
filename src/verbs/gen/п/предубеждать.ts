import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предубеждать: PerfectVerb = {
  name: Word('предубеждать', 9),
  singular1stPerson: Word('предубеждаю', 9),
  singular2ndPerson: Word('предубеждаешь', 9),
  singular3rdPerson: Word('предубеждает', 9),
  plural1stPerson: Word('предубеждаем', 9),
  plural2ndPerson: Word('предубеждаете', 9),
  plural3rdPerson: Word('предубеждают', 9),
  masculinePast: Word('предубеждал', 9),
  femininePast: Word('предубеждала', 9),
  neuterPast: Word('предубеждало', 9),
  pluralPast: Word('предубеждали', 9),
  imperativeInformal: Word('предубеждай', 9),
  imperativeFormal: Word('предубеждайте', 9),
  imperfect: [],
};

perfectVerbs.set(предубеждать.name.text, предубеждать);

export { предубеждать };