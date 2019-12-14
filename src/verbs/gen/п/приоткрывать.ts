import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приоткрывать: PerfectVerb = {
  name: Word('приоткрывать', 9),
  singular1stPerson: Word('приоткрываю', 9),
  singular2ndPerson: Word('приоткрываешь', 9),
  singular3rdPerson: Word('приоткрывает', 9),
  plural1stPerson: Word('приоткрываем', 9),
  plural2ndPerson: Word('приоткрываете', 9),
  plural3rdPerson: Word('приоткрывают', 9),
  masculinePast: Word('приоткрывал', 9),
  femininePast: Word('приоткрывала', 9),
  neuterPast: Word('приоткрывало', 9),
  pluralPast: Word('приоткрывали', 9),
  imperativeInformal: Word('приоткрывай', 9),
  imperativeFormal: Word('приоткрывайте', 9),
  imperfect: [],
};

perfectVerbs.set(приоткрывать.name.text, приоткрывать);

export { приоткрывать };