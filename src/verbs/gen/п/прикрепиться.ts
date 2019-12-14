import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикрепиться: PerfectVerb = {
  name: Word('прикрепиться', 7),
  singular1stPerson: Word('прикреплюсь', 8),
  singular2ndPerson: Word('прикрепишься', 7),
  singular3rdPerson: Word('прикрепится', 7),
  plural1stPerson: Word('прикрепимся', 7),
  plural2ndPerson: Word('прикрепитесь', 7),
  plural3rdPerson: Word('прикрепятся', 7),
  masculinePast: Word('прикрепился', 7),
  femininePast: Word('прикрепилась', 7),
  neuterPast: Word('прикрепилось', 7),
  pluralPast: Word('прикрепились', 7),
  imperativeInformal: Word('прикрепись', 7),
  imperativeFormal: Word('прикрепитесь', 7),
  imperfect: [],
};

perfectVerbs.set(прикрепиться.name.text, прикрепиться);

export { прикрепиться };