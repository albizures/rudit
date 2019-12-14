import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выделиться: PerfectVerb = {
  name: Word('выделиться', 1),
  singular1stPerson: Word('выделюсь', 1),
  singular2ndPerson: Word('выделишься', 1),
  singular3rdPerson: Word('выделится', 1),
  plural1stPerson: Word('выделимся', 1),
  plural2ndPerson: Word('выделитесь', 1),
  plural3rdPerson: Word('выделятся', 1),
  masculinePast: Word('выделился', 1),
  femininePast: Word('выделилась', 1),
  neuterPast: Word('выделилось', 1),
  pluralPast: Word('выделились', 1),
  imperativeInformal: Word('выделись', 1),
  imperativeFormal: Word('выделитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выделиться.name.text, выделиться);

export { выделиться };