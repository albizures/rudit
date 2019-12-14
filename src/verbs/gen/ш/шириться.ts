import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шириться: PerfectVerb = {
  name: Word('шириться', 1),
  singular1stPerson: Word('ширюсь', 1),
  singular2ndPerson: Word('ширишься', 1),
  singular3rdPerson: Word('ширится', 1),
  plural1stPerson: Word('ширимся', 1),
  plural2ndPerson: Word('ширитесь', 1),
  plural3rdPerson: Word('ширятся', 1),
  masculinePast: Word('ширился', 1),
  femininePast: Word('ширилась', 1),
  neuterPast: Word('ширилось', 1),
  pluralPast: Word('ширились', 1),
  imperativeInformal: Word('ширься', 1),
  imperativeFormal: Word('ширьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(шириться.name.text, шириться);

export { шириться };