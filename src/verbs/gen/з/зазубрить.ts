import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазубрить: PerfectVerb = {
  name: Word('зазубрить', 6),
  singular1stPerson: Word('зазубрю', 6),
  singular2ndPerson: Word('зазубришь', 6),
  singular3rdPerson: Word('зазубрит', 6),
  plural1stPerson: Word('зазубрим', 6),
  plural2ndPerson: Word('зазубрите', 6),
  plural3rdPerson: Word('зазубрят', 6),
  masculinePast: Word('зазубрил', 6),
  femininePast: Word('зазубрила', 6),
  neuterPast: Word('зазубрило', 6),
  pluralPast: Word('зазубрили', 6),
  imperativeInformal: Word('зазубри', 6),
  imperativeFormal: Word('зазубрите', 6),
  imperfect: [],
};

perfectVerbs.set(зазубрить.name.text, зазубрить);

export { зазубрить };