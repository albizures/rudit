import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закатывать: PerfectVerb = {
  name: Word('закатывать', 3),
  singular1stPerson: Word('закатываю', 3),
  singular2ndPerson: Word('закатываешь', 3),
  singular3rdPerson: Word('закатывает', 3),
  plural1stPerson: Word('закатываем', 3),
  plural2ndPerson: Word('закатываете', 3),
  plural3rdPerson: Word('закатывают', 3),
  masculinePast: Word('закатывал', 3),
  femininePast: Word('закатывала', 3),
  neuterPast: Word('закатывало', 3),
  pluralPast: Word('закатывали', 3),
  imperativeInformal: Word('закатывай', 3),
  imperativeFormal: Word('закатывайте', 3),
  imperfect: [],
};

perfectVerbs.set(закатывать.name.text, закатывать);

export { закатывать };