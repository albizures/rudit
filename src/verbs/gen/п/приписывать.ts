import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приписывать: PerfectVerb = {
  name: Word('приписывать', 4),
  singular1stPerson: Word('приписываю', 4),
  singular2ndPerson: Word('приписываешь', 4),
  singular3rdPerson: Word('приписывает', 4),
  plural1stPerson: Word('приписываем', 4),
  plural2ndPerson: Word('приписываете', 4),
  plural3rdPerson: Word('приписывают', 4),
  masculinePast: Word('приписывал', 4),
  femininePast: Word('приписывала', 4),
  neuterPast: Word('приписывало', 4),
  pluralPast: Word('приписывали', 4),
  imperativeInformal: Word('приписывай', 4),
  imperativeFormal: Word('приписывайте', 4),
  imperfect: ['приписать'],
};

perfectVerbs.set(приписывать.name.text, приписывать);

export { приписывать };