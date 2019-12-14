import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const багрить: PerfectVerb = {
  name: Word('багрить', 4),
  singular1stPerson: Word('багрю', 4),
  singular2ndPerson: Word('багришь', 4),
  singular3rdPerson: Word('багрит', 4),
  plural1stPerson: Word('багрим', 4),
  plural2ndPerson: Word('багрите', 4),
  plural3rdPerson: Word('багрят', 4),
  masculinePast: Word('багрил', 4),
  femininePast: Word('багрила', 4),
  neuterPast: Word('багрило', 4),
  pluralPast: Word('багрили', 4),
  imperativeInformal: Word('багри', 4),
  imperativeFormal: Word('багрите', 4),
  imperfect: [],
};

perfectVerbs.set(багрить.name.text, багрить);

export { багрить };