import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригодиться: PerfectVerb = {
  name: Word('пригодиться', 6),
  singular1stPerson: Word('пригожусь', 6),
  singular2ndPerson: Word('пригодишься', 6),
  singular3rdPerson: Word('пригодится', 6),
  plural1stPerson: Word('пригодимся', 6),
  plural2ndPerson: Word('пригодитесь', 6),
  plural3rdPerson: Word('пригодятся', 6),
  masculinePast: Word('пригодился', 6),
  femininePast: Word('пригодилась', 6),
  neuterPast: Word('пригодилось', 6),
  pluralPast: Word('пригодились', 6),
  imperativeInformal: Word('пригодись', 6),
  imperativeFormal: Word('пригодитесь', 6),
  imperfect: [],
};

perfectVerbs.set(пригодиться.name.text, пригодиться);

export { пригодиться };