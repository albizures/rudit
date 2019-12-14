import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изнывать: PerfectVerb = {
  name: Word('изнывать', 5),
  singular1stPerson: Word('изнываю', 5),
  singular2ndPerson: Word('изнываешь', 5),
  singular3rdPerson: Word('изнывает', 5),
  plural1stPerson: Word('изнываем', 5),
  plural2ndPerson: Word('изнываете', 5),
  plural3rdPerson: Word('изнывают', 5),
  masculinePast: Word('изнывал', 5),
  femininePast: Word('изнывала', 5),
  neuterPast: Word('изнывало', 5),
  pluralPast: Word('изнывали', 5),
  imperativeInformal: Word('изнывай', 5),
  imperativeFormal: Word('изнывайте', 5),
  imperfect: ['изныть'],
};

perfectVerbs.set(изнывать.name.text, изнывать);

export { изнывать };