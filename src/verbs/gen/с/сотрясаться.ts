import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сотрясаться: PerfectVerb = {
  name: Word('сотрясаться', 6),
  singular1stPerson: Word('сотрясаюсь', 6),
  singular2ndPerson: Word('сотрясаешься', 6),
  singular3rdPerson: Word('сотрясается', 6),
  plural1stPerson: Word('сотрясаемся', 6),
  plural2ndPerson: Word('сотрясаетесь', 6),
  plural3rdPerson: Word('сотрясаются', 6),
  masculinePast: Word('сотрясался', 6),
  femininePast: Word('сотрясалась', 6),
  neuterPast: Word('сотрясалось', 6),
  pluralPast: Word('сотрясались', 6),
  imperativeInformal: Word('сотрясайся', 6),
  imperativeFormal: Word('сотрясайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(сотрясаться.name.text, сотрясаться);

export { сотрясаться };