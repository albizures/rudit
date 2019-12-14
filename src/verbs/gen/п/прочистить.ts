import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прочистить: PerfectVerb = {
  name: Word('прочистить', 4),
  singular1stPerson: Word('прочищу', 4),
  singular2ndPerson: Word('прочистишь', 4),
  singular3rdPerson: Word('прочистит', 4),
  plural1stPerson: Word('прочистим', 4),
  plural2ndPerson: Word('прочистите', 4),
  plural3rdPerson: Word('прочистят', 4),
  masculinePast: Word('прочистил', 4),
  femininePast: Word('прочистила', 4),
  neuterPast: Word('прочистило', 4),
  pluralPast: Word('прочистили', 4),
  imperativeInformal: Word('прочисти', 4),
  imperativeFormal: Word('прочистите', 4),
  imperfect: [],
};

perfectVerbs.set(прочистить.name.text, прочистить);

export { прочистить };