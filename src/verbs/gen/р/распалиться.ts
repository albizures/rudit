import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распалиться: PerfectVerb = {
  name: Word('распалиться', 6),
  singular1stPerson: Word('распалюсь', 6),
  singular2ndPerson: Word('распалишься', 6),
  singular3rdPerson: Word('распалится', 6),
  plural1stPerson: Word('распалимся', 6),
  plural2ndPerson: Word('распалитесь', 6),
  plural3rdPerson: Word('распалятся', 6),
  masculinePast: Word('распалился', 6),
  femininePast: Word('распалилась', 6),
  neuterPast: Word('распалилось', 6),
  pluralPast: Word('распалились', 6),
  imperativeInformal: Word('распались', 6),
  imperativeFormal: Word('распалитесь', 6),
  imperfect: [],
};

perfectVerbs.set(распалиться.name.text, распалиться);

export { распалиться };