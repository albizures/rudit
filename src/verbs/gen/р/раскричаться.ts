import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскричаться: PerfectVerb = {
  name: Word('раскричаться', 7),
  singular1stPerson: Word('раскричусь', 7),
  singular2ndPerson: Word('раскричишься', 7),
  singular3rdPerson: Word('раскричится', 7),
  plural1stPerson: Word('раскричимся', 7),
  plural2ndPerson: Word('раскричитесь', 7),
  plural3rdPerson: Word('раскричатся', 7),
  masculinePast: Word('раскричался', 7),
  femininePast: Word('раскричалась', 7),
  neuterPast: Word('раскричалось', 7),
  pluralPast: Word('раскричались', 7),
  imperativeInformal: Word('раскричись', 7),
  imperativeFormal: Word('раскричитесь', 7),
  imperfect: [],
};

perfectVerbs.set(раскричаться.name.text, раскричаться);

export { раскричаться };