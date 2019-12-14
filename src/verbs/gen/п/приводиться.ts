import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приводиться: PerfectVerb = {
  name: Word('приводиться', 6),
  singular1stPerson: Word('привожусь', 6),
  singular2ndPerson: Word('приводишься', 4),
  singular3rdPerson: Word('приводится', 4),
  plural1stPerson: Word('приводимся', 4),
  plural2ndPerson: Word('приводитесь', 4),
  plural3rdPerson: Word('приводятся', 4),
  masculinePast: Word('приводился', 6),
  femininePast: Word('приводилась', 6),
  neuterPast: Word('приводилось', 6),
  pluralPast: Word('приводились', 6),
  imperativeInformal: Word('приводись', 6),
  imperativeFormal: Word('приводитесь', 6),
  imperfect: [],
};

perfectVerbs.set(приводиться.name.text, приводиться);

export { приводиться };