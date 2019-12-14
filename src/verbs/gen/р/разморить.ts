import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разморить: PerfectVerb = {
  name: Word('разморить', 6),
  singular1stPerson: Word('разморю', 6),
  singular2ndPerson: Word('разморишь', 6),
  singular3rdPerson: Word('разморит', 6),
  plural1stPerson: Word('разморим', 6),
  plural2ndPerson: Word('разморите', 6),
  plural3rdPerson: Word('разморят', 6),
  masculinePast: Word('разморил', 6),
  femininePast: Word('разморила', 6),
  neuterPast: Word('разморило', 6),
  pluralPast: Word('разморили', 6),
  imperativeInformal: Word('размори', 6),
  imperativeFormal: Word('разморите', 6),
  imperfect: [],
};

perfectVerbs.set(разморить.name.text, разморить);

export { разморить };