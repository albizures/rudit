import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const калить: PerfectVerb = {
  name: Word('калить', 3),
  singular1stPerson: Word('калю', 3),
  singular2ndPerson: Word('калишь', 3),
  singular3rdPerson: Word('калит', 3),
  plural1stPerson: Word('калим', 3),
  plural2ndPerson: Word('калите', 3),
  plural3rdPerson: Word('калят', 3),
  masculinePast: Word('калил', 3),
  femininePast: Word('калила', 3),
  neuterPast: Word('калило', 3),
  pluralPast: Word('калили', 3),
  imperativeInformal: Word('кали', 3),
  imperativeFormal: Word('калите', 3),
  imperfect: [],
};

perfectVerbs.set(калить.name.text, калить);

export { калить };