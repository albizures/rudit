import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накрапывать: PerfectVerb = {
  name: Word('накрапывать', 4),
  singular1stPerson: Word('накрапываю', 4),
  singular2ndPerson: Word('накрапываешь', 4),
  singular3rdPerson: Word('накрапывает', 4),
  plural1stPerson: Word('накрапываем', 4),
  plural2ndPerson: Word('накрапываете', 4),
  plural3rdPerson: Word('накрапывают', 4),
  masculinePast: Word('накрапывал', 4),
  femininePast: Word('накрапывала', 4),
  neuterPast: Word('накрапывало', 4),
  pluralPast: Word('накрапывали', 4),
  imperativeInformal: Word('накрапывай', 4),
  imperativeFormal: Word('накрапывайте', 4),
  imperfect: [],
};

perfectVerbs.set(накрапывать.name.text, накрапывать);

export { накрапывать };