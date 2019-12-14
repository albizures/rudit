import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгодиться: PerfectVerb = {
  name: Word('сгодиться', 4),
  singular1stPerson: Word('сгожусь', 4),
  singular2ndPerson: Word('сгодишься', 4),
  singular3rdPerson: Word('сгодится', 4),
  plural1stPerson: Word('сгодимся', 4),
  plural2ndPerson: Word('сгодитесь', 4),
  plural3rdPerson: Word('сгодятся', 4),
  masculinePast: Word('сгодился', 4),
  femininePast: Word('сгодилась', 4),
  neuterPast: Word('сгодилось', 4),
  pluralPast: Word('сгодились', 4),
  imperativeInformal: Word('сгодись', 4),
  imperativeFormal: Word('сгодитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сгодиться.name.text, сгодиться);

export { сгодиться };