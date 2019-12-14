import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмахнуться: PerfectVerb = {
  name: Word('отмахнуться', 6),
  singular1stPerson: Word('отмахнусь', 6),
  singular2ndPerson: Word('отмахнёшься', 6),
  singular3rdPerson: Word('отмахнётся', 6),
  plural1stPerson: Word('отмахнёмся', 6),
  plural2ndPerson: Word('отмахнётесь', 6),
  plural3rdPerson: Word('отмахнутся', 6),
  masculinePast: Word('отмахнулся', 6),
  femininePast: Word('отмахнулась', 6),
  neuterPast: Word('отмахнулось', 6),
  pluralPast: Word('отмахнулись', 6),
  imperativeInformal: Word('отмахнись', 6),
  imperativeFormal: Word('отмахнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(отмахнуться.name.text, отмахнуться);

export { отмахнуться };