import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протапливать: PerfectVerb = {
  name: Word('протапливать', 4),
  singular1stPerson: Word('протапливаю', 4),
  singular2ndPerson: Word('протапливаешь', 4),
  singular3rdPerson: Word('протапливает', 4),
  plural1stPerson: Word('протапливаем', 4),
  plural2ndPerson: Word('протапливаете', 4),
  plural3rdPerson: Word('протапливают', 4),
  masculinePast: Word('протапливал', 4),
  femininePast: Word('протапливала', 4),
  neuterPast: Word('протапливало', 4),
  pluralPast: Word('протапливали', 4),
  imperativeInformal: Word('протапливай', 4),
  imperativeFormal: Word('протапливайте', 4),
  imperfect: [],
};

perfectVerbs.set(протапливать.name.text, протапливать);

export { протапливать };