import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притомиться: PerfectVerb = {
  name: Word('притомиться', 6),
  singular1stPerson: Word('притомлюсь', 7),
  singular2ndPerson: Word('притомишься', 6),
  singular3rdPerson: Word('притомится', 6),
  plural1stPerson: Word('притомимся', 6),
  plural2ndPerson: Word('притомитесь', 6),
  plural3rdPerson: Word('притомятся', 6),
  masculinePast: Word('притомился', 6),
  femininePast: Word('притомилась', 6),
  neuterPast: Word('притомилось', 6),
  pluralPast: Word('притомились', 6),
  imperativeInformal: Word('притомись', 6),
  imperativeFormal: Word('притомитесь', 6),
  imperfect: [],
};

perfectVerbs.set(притомиться.name.text, притомиться);

export { притомиться };