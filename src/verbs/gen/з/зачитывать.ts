import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачитывать: PerfectVerb = {
  name: Word('зачитывать', 3),
  singular1stPerson: Word('зачитываю', 3),
  singular2ndPerson: Word('зачитываешь', 3),
  singular3rdPerson: Word('зачитывает', 3),
  plural1stPerson: Word('зачитываем', 3),
  plural2ndPerson: Word('зачитываете', 3),
  plural3rdPerson: Word('зачитывают', 3),
  masculinePast: Word('зачитывал', 3),
  femininePast: Word('зачитывала', 3),
  neuterPast: Word('зачитывало', 3),
  pluralPast: Word('зачитывали', 3),
  imperativeInformal: Word('зачитывай', 3),
  imperativeFormal: Word('зачитывайте', 3),
  imperfect: [],
};

perfectVerbs.set(зачитывать.name.text, зачитывать);

export { зачитывать };