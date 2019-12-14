import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посчастливиться: PerfectVerb = {
  name: Word('посчастливиться', 8),
  singular1stPerson: Word('посчастливлюсь', 8),
  singular2ndPerson: Word('посчастливишься', 8),
  singular3rdPerson: Word('посчастливится', 8),
  plural1stPerson: Word('посчастливимся', 8),
  plural2ndPerson: Word('посчастливитесь', 8),
  plural3rdPerson: Word('посчастливятся', 8),
  masculinePast: Word('посчастливился', 8),
  femininePast: Word('посчастливилась', 8),
  neuterPast: Word('посчастливилось', 8),
  pluralPast: Word('посчастливились', 8),
  imperativeInformal: Word('посчастливься', 8),
  imperativeFormal: Word('посчастливьтесь', 8),
  imperfect: [],
};

perfectVerbs.set(посчастливиться.name.text, посчастливиться);

export { посчастливиться };