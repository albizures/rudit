import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поигрывать: PerfectVerb = {
  name: Word('поигрывать', 2),
  singular1stPerson: Word('поигрываю', 2),
  singular2ndPerson: Word('поигрываешь', 2),
  singular3rdPerson: Word('поигрывает', 2),
  plural1stPerson: Word('поигрываем', 2),
  plural2ndPerson: Word('поигрываете', 2),
  plural3rdPerson: Word('поигрывают', 2),
  masculinePast: Word('поигрывал', 2),
  femininePast: Word('поигрывала', 2),
  neuterPast: Word('поигрывало', 2),
  pluralPast: Word('поигрывали', 2),
  imperativeInformal: Word('поигрывай', 2),
  imperativeFormal: Word('поигрывайте', 2),
  imperfect: [],
};

perfectVerbs.set(поигрывать.name.text, поигрывать);

export { поигрывать };