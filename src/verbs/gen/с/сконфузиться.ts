import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сконфузиться: PerfectVerb = {
  name: Word('сконфузиться', 5),
  singular1stPerson: Word('сконфужусь', 5),
  singular2ndPerson: Word('сконфузишься', 5),
  singular3rdPerson: Word('сконфузится', 5),
  plural1stPerson: Word('сконфузимся', 5),
  plural2ndPerson: Word('сконфузитесь', 5),
  plural3rdPerson: Word('сконфузятся', 5),
  masculinePast: Word('сконфузился', 5),
  femininePast: Word('сконфузилась', 5),
  neuterPast: Word('сконфузилось', 5),
  pluralPast: Word('сконфузились', 5),
  imperativeInformal: Word('сконфузься', 5),
  imperativeFormal: Word('сконфузьтесь', 5),
  imperfect: ['конфузиться'],
};

perfectVerbs.set(сконфузиться.name.text, сконфузиться);

export { сконфузиться };