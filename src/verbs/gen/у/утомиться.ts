import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утомиться: PerfectVerb = {
  name: Word('утомиться', 4),
  singular1stPerson: Word('утомлюсь', 5),
  singular2ndPerson: Word('утомишься', 4),
  singular3rdPerson: Word('утомится', 4),
  plural1stPerson: Word('утомимся', 4),
  plural2ndPerson: Word('утомитесь', 4),
  plural3rdPerson: Word('утомятся', 4),
  masculinePast: Word('утомился', 4),
  femininePast: Word('утомилась', 4),
  neuterPast: Word('утомилось', 4),
  pluralPast: Word('утомились', 4),
  imperativeInformal: Word('утомись', 4),
  imperativeFormal: Word('утомитесь', 4),
  imperfect: [],
};

perfectVerbs.set(утомиться.name.text, утомиться);

export { утомиться };