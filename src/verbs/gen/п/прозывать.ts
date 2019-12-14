import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прозывать: PerfectVerb = {
  name: Word('прозывать', 6),
  singular1stPerson: Word('прозываю', 6),
  singular2ndPerson: Word('прозываешь', 6),
  singular3rdPerson: Word('прозывает', 6),
  plural1stPerson: Word('прозываем', 6),
  plural2ndPerson: Word('прозываете', 6),
  plural3rdPerson: Word('прозывают', 6),
  masculinePast: Word('прозывал', 6),
  femininePast: Word('прозывала', 6),
  neuterPast: Word('прозывало', 6),
  pluralPast: Word('прозывали', 6),
  imperativeInformal: Word('прозывай', 6),
  imperativeFormal: Word('прозывайте', 6),
  imperfect: [],
};

perfectVerbs.set(прозывать.name.text, прозывать);

export { прозывать };