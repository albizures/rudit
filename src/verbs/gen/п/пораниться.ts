import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пораниться: PerfectVerb = {
  name: Word('пораниться', 3),
  singular1stPerson: Word('поранюсь', 3),
  singular2ndPerson: Word('поранишься', 3),
  singular3rdPerson: Word('поранится', 3),
  plural1stPerson: Word('поранимся', 3),
  plural2ndPerson: Word('поранитесь', 3),
  plural3rdPerson: Word('поранятся', 3),
  masculinePast: Word('поранился', 3),
  femininePast: Word('поранилась', 3),
  neuterPast: Word('поранилось', 3),
  pluralPast: Word('поранились', 3),
  imperativeInformal: Word('поранься', 3),
  imperativeFormal: Word('пораньтесь', 3),
  imperfect: [],
};

perfectVerbs.set(пораниться.name.text, пораниться);

export { пораниться };