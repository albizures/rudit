import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промывать: PerfectVerb = {
  name: Word('промывать', 6),
  singular1stPerson: Word('промываю', 6),
  singular2ndPerson: Word('промываешь', 6),
  singular3rdPerson: Word('промывает', 6),
  plural1stPerson: Word('промываем', 6),
  plural2ndPerson: Word('промываете', 6),
  plural3rdPerson: Word('промывают', 6),
  masculinePast: Word('промывал', 6),
  femininePast: Word('промывала', 6),
  neuterPast: Word('промывало', 6),
  pluralPast: Word('промывали', 6),
  imperativeInformal: Word('промывай', 6),
  imperativeFormal: Word('промывайте', 6),
  imperfect: [],
};

perfectVerbs.set(промывать.name.text, промывать);

export { промывать };