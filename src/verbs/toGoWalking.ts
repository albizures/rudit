import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const toGoWalking: Verb = {
  name: Word('идти', 3),
  singular1stPerson: Word('иду', 2),
  singular2ndPerson: Word('идёшь', 2),
  singular3rdPerson: Word('идёт', 2),
  plural1stPerson: Word('идём', 2),
  plural2ndPerson: Word('идёте', 2),
  plural3rdPerson: Word('идут', 2),
  masculinePast: Word('шёл', 1),
  femininePast: Word('шла', 2),
  neuterPast: Word('шло', 2),
  pluralPast: Word('шли', 2),
  imperativeInformal: Word('иди', 2),
  imperativeFormal: Word('идите', 2),
};

export { toGoWalking };
