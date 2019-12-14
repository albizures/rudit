import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распустить: PerfectVerb = {
  name: Word('распустить', 7),
  singular1stPerson: Word('распущу', 6),
  singular2ndPerson: Word('распустишь', 4),
  singular3rdPerson: Word('распустит', 4),
  plural1stPerson: Word('распустим', 4),
  plural2ndPerson: Word('распустите', 4),
  plural3rdPerson: Word('распустят', 4),
  masculinePast: Word('распустил', 7),
  femininePast: Word('распустила', 7),
  neuterPast: Word('распустило', 7),
  pluralPast: Word('распустили', 7),
  imperativeInformal: Word('распусти', 7),
  imperativeFormal: Word('распустите', 7),
  imperfect: [],
};

perfectVerbs.set(распустить.name.text, распустить);

export { распустить };