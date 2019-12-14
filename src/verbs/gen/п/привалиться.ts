import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привалиться: PerfectVerb = {
  name: Word('привалиться', 6),
  singular1stPerson: Word('привалюсь', 6),
  singular2ndPerson: Word('привалишься', 4),
  singular3rdPerson: Word('привалится', 4),
  plural1stPerson: Word('привалимся', 4),
  plural2ndPerson: Word('привалитесь', 4),
  plural3rdPerson: Word('привалятся', 4),
  masculinePast: Word('привалился', 6),
  femininePast: Word('привалилась', 6),
  neuterPast: Word('привалилось', 6),
  pluralPast: Word('привалились', 6),
  imperativeInformal: Word('привались', 6),
  imperativeFormal: Word('привалитесь', 6),
  imperfect: [],
};

perfectVerbs.set(привалиться.name.text, привалиться);

export { привалиться };