import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поделиться: PerfectVerb = {
  name: Word('поделиться', 5),
  singular1stPerson: Word('поделюсь', 5),
  singular2ndPerson: Word('поделишься', 3),
  singular3rdPerson: Word('поделится', 3),
  plural1stPerson: Word('поделимся', 3),
  plural2ndPerson: Word('поделитесь', 3),
  plural3rdPerson: Word('поделятся', 3),
  masculinePast: Word('поделился', 5),
  femininePast: Word('поделилась', 5),
  neuterPast: Word('поделилось', 5),
  pluralPast: Word('поделились', 5),
  imperativeInformal: Word('поделись', 5),
  imperativeFormal: Word('поделитесь', 5),
  imperfect: [],
};

perfectVerbs.set(поделиться.name.text, поделиться);

export { поделиться };