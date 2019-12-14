import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обозначиться: PerfectVerb = {
  name: Word('обозначиться', 5),
  singular1stPerson: Word('обозначусь', 5),
  singular2ndPerson: Word('обозначишься', 5),
  singular3rdPerson: Word('обозначится', 5),
  plural1stPerson: Word('обозначимся', 5),
  plural2ndPerson: Word('обозначитесь', 5),
  plural3rdPerson: Word('обозначатся', 5),
  masculinePast: Word('обозначился', 5),
  femininePast: Word('обозначилась', 5),
  neuterPast: Word('обозначилось', 5),
  pluralPast: Word('обозначились', 5),
  imperativeInformal: Word('обозначься', 5),
  imperativeFormal: Word('обозначьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обозначиться.name.text, обозначиться);

export { обозначиться };