import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const внедрить: PerfectVerb = {
  name: Word('внедрить', 5),
  singular1stPerson: Word('внедрю', 5),
  singular2ndPerson: Word('внедришь', 5),
  singular3rdPerson: Word('внедрит', 5),
  plural1stPerson: Word('внедрим', 5),
  plural2ndPerson: Word('внедрите', 5),
  plural3rdPerson: Word('внедрят', 5),
  masculinePast: Word('внедрил', 5),
  femininePast: Word('внедрила', 5),
  neuterPast: Word('внедрило', 5),
  pluralPast: Word('внедрили', 5),
  imperativeInformal: Word('внедри', 5),
  imperativeFormal: Word('внедрите', 5),
  imperfect: [],
};

perfectVerbs.set(внедрить.name.text, внедрить);

export { внедрить };