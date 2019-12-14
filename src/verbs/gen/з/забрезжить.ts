import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забрезжить: PerfectVerb = {
  name: Word('забрезжить', 4),
  singular1stPerson: Word('забрезжу', 4),
  singular2ndPerson: Word('забрезжишь', 4),
  singular3rdPerson: Word('забрезжит', 4),
  plural1stPerson: Word('забрезжим', 4),
  plural2ndPerson: Word('забрезжите', 4),
  plural3rdPerson: Word('забрезжат', 4),
  masculinePast: Word('забрезжил', 4),
  femininePast: Word('забрезжила', 4),
  neuterPast: Word('забрезжило', 4),
  pluralPast: Word('забрезжили', 4),
  imperativeInformal: Word('забрезжи', 4),
  imperativeFormal: Word('забрезжите', 4),
  imperfect: [],
};

perfectVerbs.set(забрезжить.name.text, забрезжить);

export { забрезжить };