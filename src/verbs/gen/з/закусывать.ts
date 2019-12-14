import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закусывать: PerfectVerb = {
  name: Word('закусывать', 3),
  singular1stPerson: Word('закусываю', 3),
  singular2ndPerson: Word('закусываешь', 3),
  singular3rdPerson: Word('закусывает', 3),
  plural1stPerson: Word('закусываем', 3),
  plural2ndPerson: Word('закусываете', 3),
  plural3rdPerson: Word('закусывают', 3),
  masculinePast: Word('закусывал', 3),
  femininePast: Word('закусывала', 3),
  neuterPast: Word('закусывало', 3),
  pluralPast: Word('закусывали', 3),
  imperativeInformal: Word('закусывай', 3),
  imperativeFormal: Word('закусывайте', 3),
  imperfect: [],
};

perfectVerbs.set(закусывать.name.text, закусывать);

export { закусывать };