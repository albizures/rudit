import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подавить: PerfectVerb = {
  name: Word('подавить', 5),
  singular1stPerson: Word('подавлю', 6),
  singular2ndPerson: Word('подавишь', 3),
  singular3rdPerson: Word('подавит', 3),
  plural1stPerson: Word('подавим', 3),
  plural2ndPerson: Word('подавите', 3),
  plural3rdPerson: Word('подавят', 3),
  masculinePast: Word('подавил', 5),
  femininePast: Word('подавила', 5),
  neuterPast: Word('подавило', 5),
  pluralPast: Word('подавили', 5),
  imperativeInformal: Word('подави', 5),
  imperativeFormal: Word('подавите', 5),
  imperfect: [],
};

perfectVerbs.set(подавить.name.text, подавить);

export { подавить };