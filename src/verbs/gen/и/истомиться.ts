import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истомиться: PerfectVerb = {
  name: Word('истомиться', 5),
  singular1stPerson: Word('истомлюсь', 6),
  singular2ndPerson: Word('истомишься', 5),
  singular3rdPerson: Word('истомится', 5),
  plural1stPerson: Word('истомимся', 5),
  plural2ndPerson: Word('истомитесь', 5),
  plural3rdPerson: Word('истомятся', 5),
  masculinePast: Word('истомился', 5),
  femininePast: Word('истомилась', 5),
  neuterPast: Word('истомилось', 5),
  pluralPast: Word('истомились', 5),
  imperativeInformal: Word('истомись', 5),
  imperativeFormal: Word('истомитесь', 5),
  imperfect: [],
};

perfectVerbs.set(истомиться.name.text, истомиться);

export { истомиться };