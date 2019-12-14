import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отозваться: PerfectVerb = {
  name: Word('отозваться', 5),
  singular1stPerson: Word('отзовусь', 5),
  singular2ndPerson: Word('отзовёшься', 5),
  singular3rdPerson: Word('отзовётся', 5),
  plural1stPerson: Word('отзовёмся', 5),
  plural2ndPerson: Word('отзовётесь', 5),
  plural3rdPerson: Word('отзовутся', 5),
  masculinePast: Word('отозвался', 5),
  femininePast: Word('отозвалась', 7),
  neuterPast: Word('отозвалось//отозвало'сь', 5),
  pluralPast: Word('отозвались//отозвали'сь', 5),
  imperativeInformal: Word('отзовись', 5),
  imperativeFormal: Word('отзовитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отозваться.name.text, отозваться);

export { отозваться };