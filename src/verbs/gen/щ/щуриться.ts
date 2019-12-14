import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щуриться: PerfectVerb = {
  name: Word('щуриться', 1),
  singular1stPerson: Word('щурюсь', 1),
  singular2ndPerson: Word('щуришься', 1),
  singular3rdPerson: Word('щурится', 1),
  plural1stPerson: Word('щуримся', 1),
  plural2ndPerson: Word('щуритесь', 1),
  plural3rdPerson: Word('щурятся', 1),
  masculinePast: Word('щурился', 1),
  femininePast: Word('щурилась', 1),
  neuterPast: Word('щурилось', 1),
  pluralPast: Word('щурились', 1),
  imperativeInformal: Word('щурься', 1),
  imperativeFormal: Word('щурьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(щуриться.name.text, щуриться);

export { щуриться };