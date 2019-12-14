import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проводиться: PerfectVerb = {
  name: Word('проводиться', 6),
  singular1stPerson: Word('провожусь', 6),
  singular2ndPerson: Word('проводишься', 4),
  singular3rdPerson: Word('проводится', 4),
  plural1stPerson: Word('проводимся', 4),
  plural2ndPerson: Word('проводитесь', 4),
  plural3rdPerson: Word('проводятся', 4),
  masculinePast: Word('проводился', 6),
  femininePast: Word('проводилась', 6),
  neuterPast: Word('проводилось', 6),
  pluralPast: Word('проводились', 6),
  imperativeInformal: Word('проводись', 6),
  imperativeFormal: Word('проводитесь', 6),
  imperfect: ['провестись'],
};

perfectVerbs.set(проводиться.name.text, проводиться);

export { проводиться };