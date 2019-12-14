import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упрекнуть: PerfectVerb = {
  name: Word('упрекнуть', 6),
  singular1stPerson: Word('упрекну', 6),
  singular2ndPerson: Word('упрекнёшь', 6),
  singular3rdPerson: Word('упрекнёт', 6),
  plural1stPerson: Word('упрекнём', 6),
  plural2ndPerson: Word('упрекнёте', 6),
  plural3rdPerson: Word('упрекнут', 6),
  masculinePast: Word('упрекнул', 6),
  femininePast: Word('упрекнула', 6),
  neuterPast: Word('упрекнуло', 6),
  pluralPast: Word('упрекнули', 6),
  imperativeInformal: Word('упрекни', 6),
  imperativeFormal: Word('упрекните', 6),
  imperfect: ['упрекать'],
};

perfectVerbs.set(упрекнуть.name.text, упрекнуть);

export { упрекнуть };