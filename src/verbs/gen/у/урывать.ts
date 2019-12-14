import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const урывать: PerfectVerb = {
  name: Word('урывать', 4),
  singular1stPerson: Word('урываю', 4),
  singular2ndPerson: Word('урываешь', 4),
  singular3rdPerson: Word('урывает', 4),
  plural1stPerson: Word('урываем', 4),
  plural2ndPerson: Word('урываете', 4),
  plural3rdPerson: Word('урывают', 4),
  masculinePast: Word('урывал', 4),
  femininePast: Word('урывала', 4),
  neuterPast: Word('урывало', 4),
  pluralPast: Word('урывали', 4),
  imperativeInformal: Word('урывай', 4),
  imperativeFormal: Word('урывайте', 4),
  imperfect: [],
};

perfectVerbs.set(урывать.name.text, урывать);

export { урывать };