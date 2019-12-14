import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затормозить: PerfectVerb = {
  name: Word('затормозить', 8),
  singular1stPerson: Word('заторможу', 8),
  singular2ndPerson: Word('затормозишь', 8),
  singular3rdPerson: Word('затормозит', 8),
  plural1stPerson: Word('затормозим', 8),
  plural2ndPerson: Word('затормозите', 8),
  plural3rdPerson: Word('затормозят', 8),
  masculinePast: Word('затормозил', 8),
  femininePast: Word('затормозила', 8),
  neuterPast: Word('затормозило', 8),
  pluralPast: Word('затормозили', 8),
  imperativeInformal: Word('затормози', 8),
  imperativeFormal: Word('затормозите', 8),
  imperfect: [],
};

perfectVerbs.set(затормозить.name.text, затормозить);

export { затормозить };