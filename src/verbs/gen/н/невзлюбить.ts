import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const невзлюбить: PerfectVerb = {
  name: Word('невзлюбить', 7),
  singular1stPerson: Word('невзлюблю', 8),
  singular2ndPerson: Word('невзлюбишь', 5),
  singular3rdPerson: Word('невзлюбит', 5),
  plural1stPerson: Word('невзлюбим', 5),
  plural2ndPerson: Word('невзлюбите', 5),
  plural3rdPerson: Word('невзлюбят', 5),
  masculinePast: Word('невзлюбил', 7),
  femininePast: Word('невзлюбила', 7),
  neuterPast: Word('невзлюбило', 7),
  pluralPast: Word('невзлюбили', 7),
  imperativeInformal: Word('невзлюби', 7),
  imperativeFormal: Word('невзлюбите', 7),
  imperfect: [],
};

perfectVerbs.set(невзлюбить.name.text, невзлюбить);

export { невзлюбить };