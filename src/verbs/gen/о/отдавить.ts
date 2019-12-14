import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдавить: PerfectVerb = {
  name: Word('отдавить', 5),
  singular1stPerson: Word('отдавлю', 6),
  singular2ndPerson: Word('отдавишь', 3),
  singular3rdPerson: Word('отдавит', 3),
  plural1stPerson: Word('отдавим', 3),
  plural2ndPerson: Word('отдавите', 3),
  plural3rdPerson: Word('отдавят', 3),
  masculinePast: Word('отдавил', 5),
  femininePast: Word('отдавила', 5),
  neuterPast: Word('отдавило', 5),
  pluralPast: Word('отдавили', 5),
  imperativeInformal: Word('отдави', 5),
  imperativeFormal: Word('отдавите', 5),
  imperfect: [],
};

perfectVerbs.set(отдавить.name.text, отдавить);

export { отдавить };