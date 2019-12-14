import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдавить: PerfectVerb = {
  name: Word('сдавить', 4),
  singular1stPerson: Word('сдавлю', 5),
  singular2ndPerson: Word('сдавишь', 2),
  singular3rdPerson: Word('сдавит', 2),
  plural1stPerson: Word('сдавим', 2),
  plural2ndPerson: Word('сдавите', 2),
  plural3rdPerson: Word('сдавят', 2),
  masculinePast: Word('сдавил', 4),
  femininePast: Word('сдавила', 4),
  neuterPast: Word('сдавило', 4),
  pluralPast: Word('сдавили', 4),
  imperativeInformal: Word('сдави', 4),
  imperativeFormal: Word('сдавите', 4),
  imperfect: [],
};

perfectVerbs.set(сдавить.name.text, сдавить);

export { сдавить };