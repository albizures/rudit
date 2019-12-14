import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пророкотать: PerfectVerb = {
  name: Word('пророкотать', 8),
  singular1stPerson: Word('пророкочу', 8),
  singular2ndPerson: Word('пророкочешь', 6),
  singular3rdPerson: Word('пророкочет', 6),
  plural1stPerson: Word('пророкочем', 6),
  plural2ndPerson: Word('пророкочете', 6),
  plural3rdPerson: Word('пророкочут', 6),
  masculinePast: Word('пророкотал', 8),
  femininePast: Word('пророкотала', 8),
  neuterPast: Word('пророкотало', 8),
  pluralPast: Word('пророкотали', 8),
  imperativeInformal: Word('пророкочи', 8),
  imperativeFormal: Word('пророкочите', 8),
  imperfect: [],
};

perfectVerbs.set(пророкотать.name.text, пророкотать);

export { пророкотать };