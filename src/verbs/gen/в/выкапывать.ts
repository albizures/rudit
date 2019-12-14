import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкапывать: PerfectVerb = {
  name: Word('выкапывать', 3),
  singular1stPerson: Word('выкапываю', 3),
  singular2ndPerson: Word('выкапываешь', 3),
  singular3rdPerson: Word('выкапывает', 3),
  plural1stPerson: Word('выкапываем', 3),
  plural2ndPerson: Word('выкапываете', 3),
  plural3rdPerson: Word('выкапывают', 3),
  masculinePast: Word('выкапывал', 3),
  femininePast: Word('выкапывала', 3),
  neuterPast: Word('выкапывало', 3),
  pluralPast: Word('выкапывали', 3),
  imperativeInformal: Word('выкапывай', 3),
  imperativeFormal: Word('выкапывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выкапывать.name.text, выкапывать);

export { выкапывать };