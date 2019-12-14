import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уцепиться: PerfectVerb = {
  name: Word('уцепиться', 4),
  singular1stPerson: Word('уцеплюсь', 5),
  singular2ndPerson: Word('уцепишься', 2),
  singular3rdPerson: Word('уцепится', 2),
  plural1stPerson: Word('уцепимся', 2),
  plural2ndPerson: Word('уцепитесь', 2),
  plural3rdPerson: Word('уцепятся', 2),
  masculinePast: Word('уцепился', 4),
  femininePast: Word('уцепилась', 4),
  neuterPast: Word('уцепилось', 4),
  pluralPast: Word('уцепились', 4),
  imperativeInformal: Word('уцепись', 4),
  imperativeFormal: Word('уцепитесь', 4),
  imperfect: [],
};

perfectVerbs.set(уцепиться.name.text, уцепиться);

export { уцепиться };