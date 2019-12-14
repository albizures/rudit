import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбавить: PerfectVerb = {
  name: Word('сбавить', 2),
  singular1stPerson: Word('сбавлю', 2),
  singular2ndPerson: Word('сбавишь', 2),
  singular3rdPerson: Word('сбавит', 2),
  plural1stPerson: Word('сбавим', 2),
  plural2ndPerson: Word('сбавите', 2),
  plural3rdPerson: Word('сбавят', 2),
  masculinePast: Word('сбавил', 2),
  femininePast: Word('сбавила', 2),
  neuterPast: Word('сбавило', 2),
  pluralPast: Word('сбавили', 2),
  imperativeInformal: Word('сбавь', 2),
  imperativeFormal: Word('сбавьте', 2),
  imperfect: [],
};

perfectVerbs.set(сбавить.name.text, сбавить);

export { сбавить };