import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слагаться: PerfectVerb = {
  name: Word('слагаться', 4),
  singular1stPerson: Word('слагаюсь', 4),
  singular2ndPerson: Word('слагаешься', 4),
  singular3rdPerson: Word('слагается', 4),
  plural1stPerson: Word('слагаемся', 4),
  plural2ndPerson: Word('слагаетесь', 4),
  plural3rdPerson: Word('слагаются', 4),
  masculinePast: Word('слагался', 4),
  femininePast: Word('слагалась', 4),
  neuterPast: Word('слагалось', 4),
  pluralPast: Word('слагались', 4),
  imperativeInformal: Word('слагайся', 4),
  imperativeFormal: Word('слагайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(слагаться.name.text, слагаться);

export { слагаться };