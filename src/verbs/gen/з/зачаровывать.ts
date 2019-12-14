import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачаровывать: PerfectVerb = {
  name: Word('зачаровывать', 5),
  singular1stPerson: Word('зачаровываю', 5),
  singular2ndPerson: Word('зачаровываешь', 5),
  singular3rdPerson: Word('зачаровывает', 5),
  plural1stPerson: Word('зачаровываем', 5),
  plural2ndPerson: Word('зачаровываете', 5),
  plural3rdPerson: Word('зачаровывают', 5),
  masculinePast: Word('зачаровывал', 5),
  femininePast: Word('зачаровывала', 5),
  neuterPast: Word('зачаровывало', 5),
  pluralPast: Word('зачаровывали', 5),
  imperativeInformal: Word('зачаровывай', 5),
  imperativeFormal: Word('зачаровывайте', 5),
  imperfect: [],
};

perfectVerbs.set(зачаровывать.name.text, зачаровывать);

export { зачаровывать };