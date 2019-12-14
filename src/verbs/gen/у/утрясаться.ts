import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утрясаться: PerfectVerb = {
  name: Word('утрясаться', 5),
  singular1stPerson: Word('утрясаюсь', 5),
  singular2ndPerson: Word('утрясаешься', 5),
  singular3rdPerson: Word('утрясается', 5),
  plural1stPerson: Word('утрясаемся', 5),
  plural2ndPerson: Word('утрясаетесь', 5),
  plural3rdPerson: Word('утрясаются', 5),
  masculinePast: Word('утрясался', 5),
  femininePast: Word('утрясалась', 5),
  neuterPast: Word('утрясалось', 5),
  pluralPast: Word('утрясались', 5),
  imperativeInformal: Word('утрясайся', 5),
  imperativeFormal: Word('утрясайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(утрясаться.name.text, утрясаться);

export { утрясаться };