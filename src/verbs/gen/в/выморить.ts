import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выморить: PerfectVerb = {
  name: Word('выморить', 1),
  singular1stPerson: Word('выморю', 1),
  singular2ndPerson: Word('выморишь', 1),
  singular3rdPerson: Word('выморит', 1),
  plural1stPerson: Word('выморим', 1),
  plural2ndPerson: Word('выморите', 1),
  plural3rdPerson: Word('выморят', 1),
  masculinePast: Word('выморил', 1),
  femininePast: Word('выморила', 1),
  neuterPast: Word('выморило', 1),
  pluralPast: Word('выморили', 1),
  imperativeInformal: Word('вымори', 1),
  imperativeFormal: Word('выморите', 1),
  imperfect: [],
};

perfectVerbs.set(выморить.name.text, выморить);

export { выморить };