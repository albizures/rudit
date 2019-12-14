import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбалтываться: PerfectVerb = {
  name: Word('разбалтываться', 4),
  singular1stPerson: Word('разбалтываюсь', 4),
  singular2ndPerson: Word('разбалтываешься', 4),
  singular3rdPerson: Word('разбалтывается', 4),
  plural1stPerson: Word('разбалтываемся', 4),
  plural2ndPerson: Word('разбалтываетесь', 4),
  plural3rdPerson: Word('разбалтываются', 4),
  masculinePast: Word('разбалтывался', 4),
  femininePast: Word('разбалтывалась', 4),
  neuterPast: Word('разбалтывалось', 4),
  pluralPast: Word('разбалтывались', 4),
  imperativeInformal: Word('разбалтывайся', 4),
  imperativeFormal: Word('разбалтывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разбалтываться.name.text, разбалтываться);

export { разбалтываться };