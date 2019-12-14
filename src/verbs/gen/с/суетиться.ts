import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const суетиться: PerfectVerb = {
  name: Word('суетиться', 4),
  singular1stPerson: Word('суечусь', 4),
  singular2ndPerson: Word('суетишься', 4),
  singular3rdPerson: Word('суетится', 4),
  plural1stPerson: Word('суетимся', 4),
  plural2ndPerson: Word('суетитесь', 4),
  plural3rdPerson: Word('суетятся', 4),
  masculinePast: Word('суетился', 4),
  femininePast: Word('суетилась', 4),
  neuterPast: Word('суетилось', 4),
  pluralPast: Word('суетились', 4),
  imperativeInformal: Word('суетись', 4),
  imperativeFormal: Word('суетитесь', 4),
  imperfect: [],
};

perfectVerbs.set(суетиться.name.text, суетиться);

export { суетиться };