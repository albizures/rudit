import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освежиться: PerfectVerb = {
  name: Word('освежиться', 5),
  singular1stPerson: Word('освежусь', 5),
  singular2ndPerson: Word('освежишься', 5),
  singular3rdPerson: Word('освежится', 5),
  plural1stPerson: Word('освежимся', 5),
  plural2ndPerson: Word('освежитесь', 5),
  plural3rdPerson: Word('освежатся', 5),
  masculinePast: Word('освежился', 5),
  femininePast: Word('освежилась', 5),
  neuterPast: Word('освежилось', 5),
  pluralPast: Word('освежились', 5),
  imperativeInformal: Word('освежись', 5),
  imperativeFormal: Word('освежитесь', 5),
  imperfect: [],
};

perfectVerbs.set(освежиться.name.text, освежиться);

export { освежиться };