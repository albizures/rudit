import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const основаться: PerfectVerb = {
  name: Word('основаться', 5),
  singular1stPerson: Word('оснуюсь', 4),
  singular2ndPerson: Word('оснуёшься', 4),
  singular3rdPerson: Word('оснуётся', 4),
  plural1stPerson: Word('оснуёмся', 4),
  plural2ndPerson: Word('оснуётесь', 4),
  plural3rdPerson: Word('оснуются', 4),
  masculinePast: Word('основался', 5),
  femininePast: Word('основалась', 5),
  neuterPast: Word('основалось', 5),
  pluralPast: Word('основались', 5),
  imperativeInformal: Word('оснуйся', 3),
  imperativeFormal: Word('оснуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(основаться.name.text, основаться);

export { основаться };