import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шептаться: PerfectVerb = {
  name: Word('шептаться', 4),
  singular1stPerson: Word('шепчусь', 4),
  singular2ndPerson: Word('шепчешься', 1),
  singular3rdPerson: Word('шепчется', 1),
  plural1stPerson: Word('шепчемся', 1),
  plural2ndPerson: Word('шепчетесь', 1),
  plural3rdPerson: Word('шепчутся', 1),
  masculinePast: Word('шептался', 4),
  femininePast: Word('шепталась', 4),
  neuterPast: Word('шепталось', 4),
  pluralPast: Word('шептались', 4),
  imperativeInformal: Word('шепчись', 4),
  imperativeFormal: Word('шепчитесь', 4),
  imperfect: [],
};

perfectVerbs.set(шептаться.name.text, шептаться);

export { шептаться };