import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отряхнуться: PerfectVerb = {
  name: Word('отряхнуться', 6),
  singular1stPerson: Word('отряхнусь', 6),
  singular2ndPerson: Word('отряхнёшься', 6),
  singular3rdPerson: Word('отряхнётся', 6),
  plural1stPerson: Word('отряхнёмся', 6),
  plural2ndPerson: Word('отряхнётесь', 6),
  plural3rdPerson: Word('отряхнутся', 6),
  masculinePast: Word('отряхнулся', 6),
  femininePast: Word('отряхнулась', 6),
  neuterPast: Word('отряхнулось', 6),
  pluralPast: Word('отряхнулись', 6),
  imperativeInformal: Word('отряхнись', 6),
  imperativeFormal: Word('отряхнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(отряхнуться.name.text, отряхнуться);

export { отряхнуться };