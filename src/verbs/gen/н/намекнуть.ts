import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намекнуть: PerfectVerb = {
  name: Word('намекнуть', 6),
  singular1stPerson: Word('намекну', 6),
  singular2ndPerson: Word('намекнёшь', 1),
  singular3rdPerson: Word('намекнёт', 1),
  plural1stPerson: Word('намекнём', 1),
  plural2ndPerson: Word('намекнёте', 1),
  plural3rdPerson: Word('намекнут', 6),
  masculinePast: Word('намекнул', 6),
  femininePast: Word('намекнула', 6),
  neuterPast: Word('намекнуло', 6),
  pluralPast: Word('намекнули', 6),
  imperativeInformal: Word('намекни', 6),
  imperativeFormal: Word('намекните', 6),
  imperfect: ['намекать'],
};

perfectVerbs.set(намекнуть.name.text, намекнуть);

export { намекнуть };