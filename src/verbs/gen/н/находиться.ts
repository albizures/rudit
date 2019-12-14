import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const находиться: PerfectVerb = {
  name: Word('находиться', 5),
  singular1stPerson: Word('нахожусь', 5),
  singular2ndPerson: Word('находишься', 3),
  singular3rdPerson: Word('находится', 3),
  plural1stPerson: Word('находимся', 3),
  plural2ndPerson: Word('находитесь', 3),
  plural3rdPerson: Word('находятся', 3),
  masculinePast: Word('находился', 5),
  femininePast: Word('находилась', 5),
  neuterPast: Word('находилось', 5),
  pluralPast: Word('находились', 5),
  imperativeInformal: Word('находись', 5),
  imperativeFormal: Word('находитесь', 5),
  imperfect: [],
};

perfectVerbs.set(находиться.name.text, находиться);

export { находиться };