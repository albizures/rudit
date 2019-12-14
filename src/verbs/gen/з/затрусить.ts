import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затрусить: PerfectVerb = {
  name: Word('затрусить', 6),
  singular1stPerson: Word('затрушу', 6),
  singular2ndPerson: Word('затрусишь', 6),
  singular3rdPerson: Word('затрусит', 6),
  plural1stPerson: Word('затрусим', 6),
  plural2ndPerson: Word('затрусите', 6),
  plural3rdPerson: Word('затрусят', 6),
  masculinePast: Word('затрусил', 6),
  femininePast: Word('затрусила', 6),
  neuterPast: Word('затрусило', 6),
  pluralPast: Word('затрусили', 6),
  imperativeInformal: Word('затруси', 6),
  imperativeFormal: Word('затрусите', 6),
  imperfect: [],
};

perfectVerbs.set(затрусить.name.text, затрусить);

export { затрусить };