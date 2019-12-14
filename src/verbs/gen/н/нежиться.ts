import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нежиться: PerfectVerb = {
  name: Word('нежиться', 1),
  singular1stPerson: Word('нежусь', 1),
  singular2ndPerson: Word('нежишься', 1),
  singular3rdPerson: Word('нежится', 1),
  plural1stPerson: Word('нежимся', 1),
  plural2ndPerson: Word('нежитесь', 1),
  plural3rdPerson: Word('нежатся', 1),
  masculinePast: Word('нежился', 1),
  femininePast: Word('нежилась', 1),
  neuterPast: Word('нежилось', 1),
  pluralPast: Word('нежились', 1),
  imperativeInformal: Word('нежься', 1),
  imperativeFormal: Word('нежьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(нежиться.name.text, нежиться);

export { нежиться };