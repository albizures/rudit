import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const награбить: PerfectVerb = {
  name: Word('награбить', 4),
  singular1stPerson: Word('награблю', 4),
  singular2ndPerson: Word('награбишь', 4),
  singular3rdPerson: Word('награбит', 4),
  plural1stPerson: Word('награбим', 4),
  plural2ndPerson: Word('награбите', 4),
  plural3rdPerson: Word('награбят', 4),
  masculinePast: Word('награбил', 4),
  femininePast: Word('награбила', 4),
  neuterPast: Word('награбило', 4),
  pluralPast: Word('награбили', 4),
  imperativeInformal: Word('награбь', 4),
  imperativeFormal: Word('награбьте', 4),
  imperfect: [],
};

perfectVerbs.set(награбить.name.text, награбить);

export { награбить };