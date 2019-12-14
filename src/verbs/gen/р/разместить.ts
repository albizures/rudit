import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разместить: PerfectVerb = {
  name: Word('разместить', 7),
  singular1stPerson: Word('размещу', 6),
  singular2ndPerson: Word('разместишь', 7),
  singular3rdPerson: Word('разместит', 7),
  plural1stPerson: Word('разместим', 7),
  plural2ndPerson: Word('разместите', 7),
  plural3rdPerson: Word('разместят', 7),
  masculinePast: Word('разместил', 7),
  femininePast: Word('разместила', 7),
  neuterPast: Word('разместило', 7),
  pluralPast: Word('разместили', 7),
  imperativeInformal: Word('размести', 7),
  imperativeFormal: Word('разместите', 7),
  imperfect: [],
};

perfectVerbs.set(разместить.name.text, разместить);

export { разместить };