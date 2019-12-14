import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдавить: PerfectVerb = {
  name: Word('выдавить', 1),
  singular1stPerson: Word('выдавлю', 1),
  singular2ndPerson: Word('выдавишь', 1),
  singular3rdPerson: Word('выдавит', 1),
  plural1stPerson: Word('выдавим', 1),
  plural2ndPerson: Word('выдавите', 1),
  plural3rdPerson: Word('выдавят', 1),
  masculinePast: Word('выдавил', 1),
  femininePast: Word('выдавила', 1),
  neuterPast: Word('выдавило', 1),
  pluralPast: Word('выдавили', 1),
  imperativeInformal: Word('выдави', 1),
  imperativeFormal: Word('выдавите', 1),
  imperfect: [],
};

perfectVerbs.set(выдавить.name.text, выдавить);

export { выдавить };