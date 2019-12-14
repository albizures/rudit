import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зубрить: PerfectVerb = {
  name: Word('зубрить', 4),
  singular1stPerson: Word('зубрю', 4),
  singular2ndPerson: Word('зубришь', 4),
  singular3rdPerson: Word('зубрит', 4),
  plural1stPerson: Word('зубрим', 4),
  plural2ndPerson: Word('зубрите', 4),
  plural3rdPerson: Word('зубрят', 4),
  masculinePast: Word('зубрил', 4),
  femininePast: Word('зубрила', 4),
  neuterPast: Word('зубрило', 4),
  pluralPast: Word('зубрили', 4),
  imperativeInformal: Word('зубри', 4),
  imperativeFormal: Word('зубрите', 4),
  imperfect: [],
};

perfectVerbs.set(зубрить.name.text, зубрить);

export { зубрить };