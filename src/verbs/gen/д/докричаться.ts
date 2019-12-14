import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докричаться: PerfectVerb = {
  name: Word('докричаться', 6),
  singular1stPerson: Word('докричусь', 6),
  singular2ndPerson: Word('докричишься', 6),
  singular3rdPerson: Word('докричится', 6),
  plural1stPerson: Word('докричимся', 6),
  plural2ndPerson: Word('докричитесь', 6),
  plural3rdPerson: Word('докричатся', 6),
  masculinePast: Word('докричался', 6),
  femininePast: Word('докричалась', 6),
  neuterPast: Word('докричалось', 6),
  pluralPast: Word('докричались', 6),
  imperativeInformal: Word('докричись', 6),
  imperativeFormal: Word('докричитесь', 6),
  imperfect: [],
};

perfectVerbs.set(докричаться.name.text, докричаться);

export { докричаться };