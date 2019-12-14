import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порывать: PerfectVerb = {
  name: Word('порывать', 5),
  singular1stPerson: Word('порываю', 5),
  singular2ndPerson: Word('порываешь', 5),
  singular3rdPerson: Word('порывает', 5),
  plural1stPerson: Word('порываем', 5),
  plural2ndPerson: Word('порываете', 5),
  plural3rdPerson: Word('порывают', 5),
  masculinePast: Word('порывал', 5),
  femininePast: Word('порывала', 5),
  neuterPast: Word('порывало', 5),
  pluralPast: Word('порывали', 5),
  imperativeInformal: Word('порывай', 5),
  imperativeFormal: Word('порывайте', 5),
  imperfect: [],
};

perfectVerbs.set(порывать.name.text, порывать);

export { порывать };