import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просовывать: PerfectVerb = {
  name: Word('просовывать', 4),
  singular1stPerson: Word('просовываю', 4),
  singular2ndPerson: Word('просовываешь', 4),
  singular3rdPerson: Word('просовывает', 4),
  plural1stPerson: Word('просовываем', 4),
  plural2ndPerson: Word('просовываете', 4),
  plural3rdPerson: Word('просовывают', 4),
  masculinePast: Word('просовывал', 4),
  femininePast: Word('просовывала', 4),
  neuterPast: Word('просовывало', 4),
  pluralPast: Word('просовывали', 4),
  imperativeInformal: Word('просовывай', 4),
  imperativeFormal: Word('просовывайте', 4),
  imperfect: [],
};

perfectVerbs.set(просовывать.name.text, просовывать);

export { просовывать };