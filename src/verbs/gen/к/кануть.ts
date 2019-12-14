import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кануть: PerfectVerb = {
  name: Word('кануть', 1),
  singular1stPerson: Word('кану', 1),
  singular2ndPerson: Word('канешь', 1),
  singular3rdPerson: Word('канет', 1),
  plural1stPerson: Word('канем', 1),
  plural2ndPerson: Word('канете', 1),
  plural3rdPerson: Word('канут', 1),
  masculinePast: Word('канул', 1),
  femininePast: Word('канула', 1),
  neuterPast: Word('кануло', 1),
  pluralPast: Word('канули', 1),
  imperativeInformal: Word('кань', 1),
  imperativeFormal: Word('каньте', 1),
  imperfect: [],
};

perfectVerbs.set(кануть.name.text, кануть);

export { кануть };