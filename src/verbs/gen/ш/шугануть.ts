import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шугануть: PerfectVerb = {
  name: Word('шугануть', 5),
  singular1stPerson: Word('шугану', 5),
  singular2ndPerson: Word('шуганёшь', 3),
  singular3rdPerson: Word('шуганёт', 3),
  plural1stPerson: Word('шуганём', 3),
  plural2ndPerson: Word('шуганёте', 3),
  plural3rdPerson: Word('шуганут', 5),
  masculinePast: Word('шуганул', 5),
  femininePast: Word('шуганула', 5),
  neuterPast: Word('шугануло', 5),
  pluralPast: Word('шуганули', 5),
  imperativeInformal: Word('шугани', 5),
  imperativeFormal: Word('шуганите', 5),
  imperfect: [],
};

perfectVerbs.set(шугануть.name.text, шугануть);

export { шугануть };