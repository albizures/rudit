import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усомниться: PerfectVerb = {
  name: Word('усомниться', 5),
  singular1stPerson: Word('усомнюсь', 5),
  singular2ndPerson: Word('усомнишься', 5),
  singular3rdPerson: Word('усомнится', 5),
  plural1stPerson: Word('усомнимся', 5),
  plural2ndPerson: Word('усомнитесь', 5),
  plural3rdPerson: Word('усомнятся', 5),
  masculinePast: Word('усомнился', 5),
  femininePast: Word('усомнилась', 5),
  neuterPast: Word('усомнилось', 5),
  pluralPast: Word('усомнились', 5),
  imperativeInformal: Word('усомнись', 5),
  imperativeFormal: Word('усомнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(усомниться.name.text, усомниться);

export { усомниться };