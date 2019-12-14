import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затмить: PerfectVerb = {
  name: Word('затмить', 4),
  singular1stPerson: Word('затмлю', 5),
  singular2ndPerson: Word('затмишь', 4),
  singular3rdPerson: Word('затмит', 4),
  plural1stPerson: Word('затмим', 4),
  plural2ndPerson: Word('затмите', 4),
  plural3rdPerson: Word('затмят', 4),
  masculinePast: Word('затмил', 4),
  femininePast: Word('затмила', 4),
  neuterPast: Word('затмило', 4),
  pluralPast: Word('затмили', 4),
  imperativeInformal: Word('затми', 4),
  imperativeFormal: Word('затмите', 4),
  imperfect: [],
};

perfectVerbs.set(затмить.name.text, затмить);

export { затмить };