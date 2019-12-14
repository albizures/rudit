import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выигрывать: PerfectVerb = {
  name: Word('выигрывать', 2),
  singular1stPerson: Word('выигрываю', 2),
  singular2ndPerson: Word('выигрываешь', 2),
  singular3rdPerson: Word('выигрывает', 2),
  plural1stPerson: Word('выигрываем', 2),
  plural2ndPerson: Word('выигрываете', 2),
  plural3rdPerson: Word('выигрывают', 2),
  masculinePast: Word('выигрывал', 2),
  femininePast: Word('выигрывала', 2),
  neuterPast: Word('выигрывало', 2),
  pluralPast: Word('выигрывали', 2),
  imperativeInformal: Word('выигрывай', 2),
  imperativeFormal: Word('выигрывайте', 2),
  imperfect: ['выиграть'],
};

perfectVerbs.set(выигрывать.name.text, выигрывать);

export { выигрывать };