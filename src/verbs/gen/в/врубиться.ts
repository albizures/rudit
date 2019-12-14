import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const врубиться: PerfectVerb = {
  name: Word('врубиться', 4),
  singular1stPerson: Word('врублюсь', 5),
  singular2ndPerson: Word('врубишься', 2),
  singular3rdPerson: Word('врубится', 2),
  plural1stPerson: Word('врубимся', 2),
  plural2ndPerson: Word('врубитесь', 2),
  plural3rdPerson: Word('врубятся', 2),
  masculinePast: Word('врубился', 4),
  femininePast: Word('врубилась', 4),
  neuterPast: Word('врубилось', 4),
  pluralPast: Word('врубились', 4),
  imperativeInformal: Word('врубись', 4),
  imperativeFormal: Word('врубитесь', 4),
  imperfect: [],
};

perfectVerbs.set(врубиться.name.text, врубиться);

export { врубиться };