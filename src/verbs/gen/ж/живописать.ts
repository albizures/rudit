import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const живописать: PerfectVerb = {
  name: Word('живописать', 7),
  singular1stPerson: Word('живописую', 7),
  singular2ndPerson: Word('живописуешь', 7),
  singular3rdPerson: Word('живописует', 7),
  plural1stPerson: Word('живописуем', 7),
  plural2ndPerson: Word('живописуете', 7),
  plural3rdPerson: Word('живописуют', 7),
  masculinePast: Word('живописал', 7),
  femininePast: Word('живописала', 7),
  neuterPast: Word('живописало', 7),
  pluralPast: Word('живописали', 7),
  imperativeInformal: Word('живописуй', 7),
  imperativeFormal: Word('живописуйте', 7),
  imperfect: [],
};

perfectVerbs.set(живописать.name.text, живописать);

export { живописать };