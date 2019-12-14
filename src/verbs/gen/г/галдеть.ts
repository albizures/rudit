import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const галдеть: PerfectVerb = {
  name: Word('галдеть', 4),
  singular1stPerson: Word('галжу', 4),
  singular2ndPerson: Word('галдишь', 4),
  singular3rdPerson: Word('галдит', 4),
  plural1stPerson: Word('галдим', 4),
  plural2ndPerson: Word('галдите', 4),
  plural3rdPerson: Word('галдят', 4),
  masculinePast: Word('галдел', 4),
  femininePast: Word('галдела', 4),
  neuterPast: Word('галдело', 4),
  pluralPast: Word('галдели', 4),
  imperativeInformal: Word('галди', 4),
  imperativeFormal: Word('галдите', 4),
  imperfect: [],
};

perfectVerbs.set(галдеть.name.text, галдеть);

export { галдеть };