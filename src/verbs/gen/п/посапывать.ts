import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посапывать: PerfectVerb = {
  name: Word('посапывать', 3),
  singular1stPerson: Word('посапываю', 3),
  singular2ndPerson: Word('посапываешь', 3),
  singular3rdPerson: Word('посапывает', 3),
  plural1stPerson: Word('посапываем', 3),
  plural2ndPerson: Word('посапываете', 3),
  plural3rdPerson: Word('посапывают', 3),
  masculinePast: Word('посапывал', 3),
  femininePast: Word('посапывала', 3),
  neuterPast: Word('посапывало', 3),
  pluralPast: Word('посапывали', 3),
  imperativeInformal: Word('посапывай', 3),
  imperativeFormal: Word('посапывайте', 3),
  imperfect: [],
};

perfectVerbs.set(посапывать.name.text, посапывать);

export { посапывать };