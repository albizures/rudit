import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разругаться: PerfectVerb = {
  name: Word('разругаться', 6),
  singular1stPerson: Word('разругаюсь', 6),
  singular2ndPerson: Word('разругаешься', 6),
  singular3rdPerson: Word('разругается', 6),
  plural1stPerson: Word('разругаемся', 6),
  plural2ndPerson: Word('разругаетесь', 6),
  plural3rdPerson: Word('разругаются', 6),
  masculinePast: Word('разругался', 6),
  femininePast: Word('разругалась', 6),
  neuterPast: Word('разругалось', 6),
  pluralPast: Word('разругались', 6),
  imperativeInformal: Word('разругайся', 6),
  imperativeFormal: Word('разругайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разругаться.name.text, разругаться);

export { разругаться };