import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чернить: PerfectVerb = {
  name: Word('чернить', 4),
  singular1stPerson: Word('черню', 4),
  singular2ndPerson: Word('чернишь', 4),
  singular3rdPerson: Word('чернит', 4),
  plural1stPerson: Word('черним', 4),
  plural2ndPerson: Word('черните', 4),
  plural3rdPerson: Word('чернят', 4),
  masculinePast: Word('чернил', 4),
  femininePast: Word('чернила', 4),
  neuterPast: Word('чернило', 4),
  pluralPast: Word('чернили', 4),
  imperativeInformal: Word('черни', 4),
  imperativeFormal: Word('черните', 4),
  imperfect: [],
};

perfectVerbs.set(чернить.name.text, чернить);

export { чернить };