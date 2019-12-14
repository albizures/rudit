import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погнаться: PerfectVerb = {
  name: Word('погнаться', 4),
  singular1stPerson: Word('погонюсь', 5),
  singular2ndPerson: Word('погонишься', 3),
  singular3rdPerson: Word('погонится', 3),
  plural1stPerson: Word('погонимся', 3),
  plural2ndPerson: Word('погонитесь', 3),
  plural3rdPerson: Word('погонятся', 3),
  masculinePast: Word('погнался', 4),
  femininePast: Word('погналась', 6),
  neuterPast: Word('погналось//погнало'сь', 4),
  pluralPast: Word('погнались//погнали'сь', 4),
  imperativeInformal: Word('погонись', 5),
  imperativeFormal: Word('погонитесь', 5),
  imperfect: [],
};

perfectVerbs.set(погнаться.name.text, погнаться);

export { погнаться };