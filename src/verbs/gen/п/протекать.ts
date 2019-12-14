import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протекать: PerfectVerb = {
  name: Word('протекать', 6),
  singular1stPerson: Word('протекаю', 6),
  singular2ndPerson: Word('протекаешь', 6),
  singular3rdPerson: Word('протекает', 6),
  plural1stPerson: Word('протекаем', 6),
  plural2ndPerson: Word('протекаете', 6),
  plural3rdPerson: Word('протекают', 6),
  masculinePast: Word('протекал', 6),
  femininePast: Word('протекала', 6),
  neuterPast: Word('протекало', 6),
  pluralPast: Word('протекали', 6),
  imperativeInformal: Word('протекай', 6),
  imperativeFormal: Word('протекайте', 6),
  imperfect: [],
};

perfectVerbs.set(протекать.name.text, протекать);

export { протекать };