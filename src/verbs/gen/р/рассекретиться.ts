import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассекретиться: PerfectVerb = {
  name: Word('рассекретиться', 7),
  singular1stPerson: Word('рассекречусь', 7),
  singular2ndPerson: Word('рассекретишься', 7),
  singular3rdPerson: Word('рассекретится', 7),
  plural1stPerson: Word('рассекретимся', 7),
  plural2ndPerson: Word('рассекретитесь', 7),
  plural3rdPerson: Word('рассекретятся', 7),
  masculinePast: Word('рассекретился', 7),
  femininePast: Word('рассекретилась', 7),
  neuterPast: Word('рассекретилось', 7),
  pluralPast: Word('рассекретились', 7),
  imperativeInformal: Word('рассекреться', 7),
  imperativeFormal: Word('рассекретьтесь', 7),
  imperfect: [],
};

perfectVerbs.set(рассекретиться.name.text, рассекретиться);

export { рассекретиться };