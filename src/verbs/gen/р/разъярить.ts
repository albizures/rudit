import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъярить: PerfectVerb = {
  name: Word('разъярить', 6),
  singular1stPerson: Word('разъярю', 6),
  singular2ndPerson: Word('разъяришь', 6),
  singular3rdPerson: Word('разъярит', 6),
  plural1stPerson: Word('разъярим', 6),
  plural2ndPerson: Word('разъярите', 6),
  plural3rdPerson: Word('разъярят', 6),
  masculinePast: Word('разъярил', 6),
  femininePast: Word('разъярила', 6),
  neuterPast: Word('разъярило', 6),
  pluralPast: Word('разъярили', 6),
  imperativeInformal: Word('разъяри', 6),
  imperativeFormal: Word('разъярите', 6),
  imperfect: [],
};

perfectVerbs.set(разъярить.name.text, разъярить);

export { разъярить };