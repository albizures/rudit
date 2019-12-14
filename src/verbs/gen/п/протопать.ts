import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протопать: PerfectVerb = {
  name: Word('протопать', 4),
  singular1stPerson: Word('протопаю', 4),
  singular2ndPerson: Word('протопаешь', 4),
  singular3rdPerson: Word('протопает', 4),
  plural1stPerson: Word('протопаем', 4),
  plural2ndPerson: Word('протопаете', 4),
  plural3rdPerson: Word('протопают', 4),
  masculinePast: Word('протопал', 4),
  femininePast: Word('протопала', 4),
  neuterPast: Word('протопало', 4),
  pluralPast: Word('протопали', 4),
  imperativeInformal: Word('протопай', 4),
  imperativeFormal: Word('протопайте', 4),
  imperfect: [],
};

perfectVerbs.set(протопать.name.text, протопать);

export { протопать };