import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заспориться: PerfectVerb = {
  name: Word('заспориться', 6),
  singular1stPerson: Word('заспорюсь', 6),
  singular2ndPerson: Word('заспоришься', 6),
  singular3rdPerson: Word('заспорится', 6),
  plural1stPerson: Word('заспоримся', 6),
  plural2ndPerson: Word('заспоритесь', 6),
  plural3rdPerson: Word('заспорятся', 6),
  masculinePast: Word('заспорился', 6),
  femininePast: Word('заспорилась', 6),
  neuterPast: Word('заспорилось', 6),
  pluralPast: Word('заспорились', 6),
  imperativeInformal: Word('заспорись', 6),
  imperativeFormal: Word('заспоритесь', 6),
  imperfect: [],
};

perfectVerbs.set(заспориться.name.text, заспориться);

export { заспориться };