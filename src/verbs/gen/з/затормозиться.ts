import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затормозиться: PerfectVerb = {
  name: Word('затормозиться', 8),
  singular1stPerson: Word('заторможусь', 8),
  singular2ndPerson: Word('затормозишься', 8),
  singular3rdPerson: Word('затормозится', 8),
  plural1stPerson: Word('затормозимся', 8),
  plural2ndPerson: Word('затормозитесь', 8),
  plural3rdPerson: Word('затормозятся', 8),
  masculinePast: Word('затормозился', 8),
  femininePast: Word('затормозилась', 8),
  neuterPast: Word('затормозилось', 8),
  pluralPast: Word('затормозились', 8),
  imperativeInformal: Word('затормозись', 8),
  imperativeFormal: Word('затормозитесь', 8),
  imperfect: [],
};

perfectVerbs.set(затормозиться.name.text, затормозиться);

export { затормозиться };