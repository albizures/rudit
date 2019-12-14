import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поругаться: PerfectVerb = {
  name: Word('поругаться', 5),
  singular1stPerson: Word('поругаюсь', 5),
  singular2ndPerson: Word('поругаешься', 5),
  singular3rdPerson: Word('поругается', 5),
  plural1stPerson: Word('поругаемся', 5),
  plural2ndPerson: Word('поругаетесь', 5),
  plural3rdPerson: Word('поругаются', 5),
  masculinePast: Word('поругался', 5),
  femininePast: Word('поругалась', 5),
  neuterPast: Word('поругалось', 5),
  pluralPast: Word('поругались', 5),
  imperativeInformal: Word('поругайся', 5),
  imperativeFormal: Word('поругайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(поругаться.name.text, поругаться);

export { поругаться };