import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плодиться: PerfectVerb = {
  name: Word('плодиться', 4),
  singular1stPerson: Word('пложусь', 4),
  singular2ndPerson: Word('плодишься', 4),
  singular3rdPerson: Word('плодится', 4),
  plural1stPerson: Word('плодимся', 4),
  plural2ndPerson: Word('плодитесь', 4),
  plural3rdPerson: Word('плодятся', 4),
  masculinePast: Word('плодился', 4),
  femininePast: Word('плодилась', 4),
  neuterPast: Word('плодилось', 4),
  pluralPast: Word('плодились', 4),
  imperativeInformal: Word('плодись', 4),
  imperativeFormal: Word('плодитесь', 4),
  imperfect: [],
};

perfectVerbs.set(плодиться.name.text, плодиться);

export { плодиться };