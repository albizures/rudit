import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согласовывать: PerfectVerb = {
  name: Word('согласовывать', 6),
  singular1stPerson: Word('согласовываю', 6),
  singular2ndPerson: Word('согласовываешь', 6),
  singular3rdPerson: Word('согласовывает', 6),
  plural1stPerson: Word('согласовываем', 6),
  plural2ndPerson: Word('согласовываете', 6),
  plural3rdPerson: Word('согласовывают', 6),
  masculinePast: Word('согласовывал', 6),
  femininePast: Word('согласовывала', 6),
  neuterPast: Word('согласовывало', 6),
  pluralPast: Word('согласовывали', 6),
  imperativeInformal: Word('согласовывай', 6),
  imperativeFormal: Word('согласовывайте', 6),
  imperfect: [],
};

perfectVerbs.set(согласовывать.name.text, согласовывать);

export { согласовывать };