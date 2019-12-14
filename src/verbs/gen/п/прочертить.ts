import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прочертить: PerfectVerb = {
  name: Word('прочертить', 7),
  singular1stPerson: Word('прочерчу', 7),
  singular2ndPerson: Word('прочертишь', 4),
  singular3rdPerson: Word('прочертит', 4),
  plural1stPerson: Word('прочертим', 4),
  plural2ndPerson: Word('прочертите', 4),
  plural3rdPerson: Word('прочертят', 4),
  masculinePast: Word('прочертил', 7),
  femininePast: Word('прочертила', 7),
  neuterPast: Word('прочертило', 7),
  pluralPast: Word('прочертили', 7),
  imperativeInformal: Word('прочерти', 7),
  imperativeFormal: Word('прочертите', 7),
  imperfect: [],
};

perfectVerbs.set(прочертить.name.text, прочертить);

export { прочертить };