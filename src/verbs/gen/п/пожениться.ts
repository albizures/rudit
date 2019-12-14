import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожениться: PerfectVerb = {
  name: Word('пожениться', 5),
  singular1stPerson: Word('поженюсь', 5),
  singular2ndPerson: Word('поженишься', 3),
  singular3rdPerson: Word('поженится', 3),
  plural1stPerson: Word('поженимся', 3),
  plural2ndPerson: Word('поженитесь', 3),
  plural3rdPerson: Word('поженятся', 3),
  masculinePast: Word('поженился', 5),
  femininePast: Word('поженилась', 5),
  neuterPast: Word('поженилось', 5),
  pluralPast: Word('поженились', 5),
  imperativeInformal: Word('поженись', 5),
  imperativeFormal: Word('поженитесь', 5),
  imperfect: ['жениться'],
};

perfectVerbs.set(пожениться.name.text, пожениться);

export { пожениться };