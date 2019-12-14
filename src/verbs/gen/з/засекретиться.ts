import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засекретиться: PerfectVerb = {
  name: Word('засекретиться', 6),
  singular1stPerson: Word('засекречусь', 6),
  singular2ndPerson: Word('засекретишься', 6),
  singular3rdPerson: Word('засекретится', 6),
  plural1stPerson: Word('засекретимся', 6),
  plural2ndPerson: Word('засекретитесь', 6),
  plural3rdPerson: Word('засекретятся', 6),
  masculinePast: Word('засекретился', 6),
  femininePast: Word('засекретилась', 6),
  neuterPast: Word('засекретилось', 6),
  pluralPast: Word('засекретились', 6),
  imperativeInformal: Word('засекреться', 6),
  imperativeFormal: Word('засекретьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(засекретиться.name.text, засекретиться);

export { засекретиться };