import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понежиться: PerfectVerb = {
  name: Word('понежиться', 3),
  singular1stPerson: Word('понежусь', 3),
  singular2ndPerson: Word('понежишься', 3),
  singular3rdPerson: Word('понежится', 3),
  plural1stPerson: Word('понежимся', 3),
  plural2ndPerson: Word('понежитесь', 3),
  plural3rdPerson: Word('понежатся', 3),
  masculinePast: Word('понежился', 3),
  femininePast: Word('понежилась', 3),
  neuterPast: Word('понежилось', 3),
  pluralPast: Word('понежились', 3),
  imperativeInformal: Word('понежься', 3),
  imperativeFormal: Word('понежьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(понежиться.name.text, понежиться);

export { понежиться };