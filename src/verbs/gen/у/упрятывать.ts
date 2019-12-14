import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упрятывать: PerfectVerb = {
  name: Word('упрятывать', 3),
  singular1stPerson: Word('упрятываю', 3),
  singular2ndPerson: Word('упрятываешь', 3),
  singular3rdPerson: Word('упрятывает', 3),
  plural1stPerson: Word('упрятываем', 3),
  plural2ndPerson: Word('упрятываете', 3),
  plural3rdPerson: Word('упрятывают', 3),
  masculinePast: Word('упрятывал', 3),
  femininePast: Word('упрятывала', 3),
  neuterPast: Word('упрятывало', 3),
  pluralPast: Word('упрятывали', 3),
  imperativeInformal: Word('упрятывай', 3),
  imperativeFormal: Word('упрятывайте', 3),
  imperfect: [],
};

perfectVerbs.set(упрятывать.name.text, упрятывать);

export { упрятывать };