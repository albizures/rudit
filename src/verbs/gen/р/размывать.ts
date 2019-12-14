import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размывать: PerfectVerb = {
  name: Word('размывать', 6),
  singular1stPerson: Word('размываю', 6),
  singular2ndPerson: Word('размываешь', 6),
  singular3rdPerson: Word('размывает', 6),
  plural1stPerson: Word('размываем', 6),
  plural2ndPerson: Word('размываете', 6),
  plural3rdPerson: Word('размывают', 6),
  masculinePast: Word('размывал', 6),
  femininePast: Word('размывала', 6),
  neuterPast: Word('размывало', 6),
  pluralPast: Word('размывали', 6),
  imperativeInformal: Word('размывай', 6),
  imperativeFormal: Word('размывайте', 6),
  imperfect: [],
};

perfectVerbs.set(размывать.name.text, размывать);

export { размывать };