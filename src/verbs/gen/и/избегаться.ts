import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избегаться: PerfectVerb = {
  name: Word('избегаться', 3),
  singular1stPerson: Word('избегаюсь', 3),
  singular2ndPerson: Word('избегаешься', 3),
  singular3rdPerson: Word('избегается', 3),
  plural1stPerson: Word('избегаемся', 3),
  plural2ndPerson: Word('избегаетесь', 3),
  plural3rdPerson: Word('избегаются', 3),
  masculinePast: Word('избегался', 3),
  femininePast: Word('избегалась', 3),
  neuterPast: Word('избегалось', 3),
  pluralPast: Word('избегались', 3),
  imperativeInformal: Word('избегайся', 3),
  imperativeFormal: Word('избегайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(избегаться.name.text, избегаться);

export { избегаться };