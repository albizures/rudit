import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбаловаться: PerfectVerb = {
  name: Word('разбаловаться', 8),
  singular1stPerson: Word('разбалуюсь', 6),
  singular2ndPerson: Word('разбалуешься', 6),
  singular3rdPerson: Word('разбалуется', 6),
  plural1stPerson: Word('разбалуемся', 6),
  plural2ndPerson: Word('разбалуетесь', 6),
  plural3rdPerson: Word('разбалуются', 6),
  masculinePast: Word('разбаловался', 8),
  femininePast: Word('разбаловалась', 8),
  neuterPast: Word('разбаловалось', 8),
  pluralPast: Word('разбаловались', 8),
  imperativeInformal: Word('разбалуйся', 6),
  imperativeFormal: Word('разбалуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разбаловаться.name.text, разбаловаться);

export { разбаловаться };