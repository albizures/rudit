import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбрасывать: PerfectVerb = {
  name: Word('сбрасывать', 3),
  singular1stPerson: Word('сбрасываю', 3),
  singular2ndPerson: Word('сбрасываешь', 3),
  singular3rdPerson: Word('сбрасывает', 3),
  plural1stPerson: Word('сбрасываем', 3),
  plural2ndPerson: Word('сбрасываете', 3),
  plural3rdPerson: Word('сбрасывают', 3),
  masculinePast: Word('сбрасывал', 3),
  femininePast: Word('сбрасывала', 3),
  neuterPast: Word('сбрасывало', 3),
  pluralPast: Word('сбрасывали', 3),
  imperativeInformal: Word('сбрасывай', 3),
  imperativeFormal: Word('сбрасывайте', 3),
  imperfect: ['сбросить'],
};

perfectVerbs.set(сбрасывать.name.text, сбрасывать);

export { сбрасывать };