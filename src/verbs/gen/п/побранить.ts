import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побранить: PerfectVerb = {
  name: Word('побранить', 6),
  singular1stPerson: Word('побраню', 6),
  singular2ndPerson: Word('побранишь', 6),
  singular3rdPerson: Word('побранит', 6),
  plural1stPerson: Word('побраним', 6),
  plural2ndPerson: Word('побраните', 6),
  plural3rdPerson: Word('побранят', 6),
  masculinePast: Word('побранил', 6),
  femininePast: Word('побранила', 6),
  neuterPast: Word('побранило', 6),
  pluralPast: Word('побранили', 6),
  imperativeInformal: Word('побрани', 6),
  imperativeFormal: Word('побраните', 6),
  imperfect: [],
};

perfectVerbs.set(побранить.name.text, побранить);

export { побранить };