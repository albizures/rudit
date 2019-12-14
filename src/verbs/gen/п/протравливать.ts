import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протравливать: PerfectVerb = {
  name: Word('протравливать', 5),
  singular1stPerson: Word('протравливаю', 5),
  singular2ndPerson: Word('протравливаешь', 5),
  singular3rdPerson: Word('протравливает', 5),
  plural1stPerson: Word('протравливаем', 5),
  plural2ndPerson: Word('протравливаете', 5),
  plural3rdPerson: Word('протравливают', 5),
  masculinePast: Word('протравливал', 5),
  femininePast: Word('протравливала', 5),
  neuterPast: Word('протравливало', 5),
  pluralPast: Word('протравливали', 5),
  imperativeInformal: Word('протравливай', 5),
  imperativeFormal: Word('протравливайте', 5),
  imperfect: [],
};

perfectVerbs.set(протравливать.name.text, протравливать);

export { протравливать };