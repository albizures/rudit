import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обратиться: PerfectVerb = {
  name: Word('обратиться', 5),
  singular1stPerson: Word('обращусь', 5),
  singular2ndPerson: Word('обратишься', 5),
  singular3rdPerson: Word('обратится', 5),
  plural1stPerson: Word('обратимся', 5),
  plural2ndPerson: Word('обратитесь', 5),
  plural3rdPerson: Word('обратятся', 5),
  masculinePast: Word('обратился', 5),
  femininePast: Word('обратилась', 5),
  neuterPast: Word('обратилось', 5),
  pluralPast: Word('обратились', 5),
  imperativeInformal: Word('обратись', 5),
  imperativeFormal: Word('обратитесь', 5),
  imperfect: ['обращаться'],
};

perfectVerbs.set(обратиться.name.text, обратиться);

export { обратиться };