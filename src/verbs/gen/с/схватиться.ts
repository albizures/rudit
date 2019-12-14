import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const схватиться: PerfectVerb = {
  name: Word('схватиться', 5),
  singular1stPerson: Word('схвачусь', 5),
  singular2ndPerson: Word('схватишься', 3),
  singular3rdPerson: Word('схватится', 3),
  plural1stPerson: Word('схватимся', 3),
  plural2ndPerson: Word('схватитесь', 3),
  plural3rdPerson: Word('схватятся', 3),
  masculinePast: Word('схватился', 5),
  femininePast: Word('схватилась', 5),
  neuterPast: Word('схватилось', 5),
  pluralPast: Word('схватились', 5),
  imperativeInformal: Word('схватись', 5),
  imperativeFormal: Word('схватитесь', 5),
  imperfect: [],
};

perfectVerbs.set(схватиться.name.text, схватиться);

export { схватиться };