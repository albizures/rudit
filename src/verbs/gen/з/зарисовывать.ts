import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарисовывать: PerfectVerb = {
  name: Word('зарисовывать', 5),
  singular1stPerson: Word('зарисовываю', 5),
  singular2ndPerson: Word('зарисовываешь', 5),
  singular3rdPerson: Word('зарисовывает', 5),
  plural1stPerson: Word('зарисовываем', 5),
  plural2ndPerson: Word('зарисовываете', 5),
  plural3rdPerson: Word('зарисовывают', 5),
  masculinePast: Word('зарисовывал', 5),
  femininePast: Word('зарисовывала', 5),
  neuterPast: Word('зарисовывало', 5),
  pluralPast: Word('зарисовывали', 5),
  imperativeInformal: Word('зарисовывай', 5),
  imperativeFormal: Word('зарисовывайте', 5),
  imperfect: [],
};

perfectVerbs.set(зарисовывать.name.text, зарисовывать);

export { зарисовывать };