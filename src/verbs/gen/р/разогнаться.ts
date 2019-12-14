import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разогнаться: PerfectVerb = {
  name: Word('разогнаться', 6),
  singular1stPerson: Word('разгонюсь', 6),
  singular2ndPerson: Word('разгонишься', 4),
  singular3rdPerson: Word('разгонится', 4),
  plural1stPerson: Word('разгонимся', 4),
  plural2ndPerson: Word('разгонитесь', 4),
  plural3rdPerson: Word('разгонятся', 4),
  masculinePast: Word('разогнался', 6),
  femininePast: Word('разогналась', 8),
  neuterPast: Word('разогналось//разогнало'сь', 6),
  pluralPast: Word('разогнались//разогнали'сь', 6),
  imperativeInformal: Word('разгонись', 6),
  imperativeFormal: Word('разгонитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разогнаться.name.text, разогнаться);

export { разогнаться };