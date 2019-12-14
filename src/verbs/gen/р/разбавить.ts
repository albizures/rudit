import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбавить: PerfectVerb = {
  name: Word('разбавить', 4),
  singular1stPerson: Word('разбавлю', 4),
  singular2ndPerson: Word('разбавишь', 4),
  singular3rdPerson: Word('разбавит', 4),
  plural1stPerson: Word('разбавим', 4),
  plural2ndPerson: Word('разбавите', 4),
  plural3rdPerson: Word('разбавят', 4),
  masculinePast: Word('разбавил', 4),
  femininePast: Word('разбавила', 4),
  neuterPast: Word('разбавило', 4),
  pluralPast: Word('разбавили', 4),
  imperativeInformal: Word('разбавь', 4),
  imperativeFormal: Word('разбавьте', 4),
  imperfect: [],
};

perfectVerbs.set(разбавить.name.text, разбавить);

export { разбавить };