import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добросить: PerfectVerb = {
  name: Word('добросить', 4),
  singular1stPerson: Word('доброшу', 4),
  singular2ndPerson: Word('добросишь', 4),
  singular3rdPerson: Word('добросит', 4),
  plural1stPerson: Word('добросим', 4),
  plural2ndPerson: Word('добросите', 4),
  plural3rdPerson: Word('добросят', 4),
  masculinePast: Word('добросил', 4),
  femininePast: Word('добросила', 4),
  neuterPast: Word('добросило', 4),
  pluralPast: Word('добросили', 4),
  imperativeInformal: Word('добрось', 4),
  imperativeFormal: Word('добросьте', 4),
  imperfect: [],
};

perfectVerbs.set(добросить.name.text, добросить);

export { добросить };