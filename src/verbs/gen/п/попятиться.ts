import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попятиться: PerfectVerb = {
  name: Word('попятиться', 3),
  singular1stPerson: Word('попячусь', 3),
  singular2ndPerson: Word('попятишься', 3),
  singular3rdPerson: Word('попятится', 3),
  plural1stPerson: Word('попятимся', 3),
  plural2ndPerson: Word('попятитесь', 3),
  plural3rdPerson: Word('попятятся', 3),
  masculinePast: Word('попятился', 3),
  femininePast: Word('попятилась', 3),
  neuterPast: Word('попятилось', 3),
  pluralPast: Word('попятились', 3),
  imperativeInformal: Word('попяться', 3),
  imperativeFormal: Word('попятьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(попятиться.name.text, попятиться);

export { попятиться };