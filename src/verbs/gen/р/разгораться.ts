import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгораться: PerfectVerb = {
  name: Word('разгораться', 6),
  singular1stPerson: Word('разгораюсь', 6),
  singular2ndPerson: Word('разгораешься', 6),
  singular3rdPerson: Word('разгорается', 6),
  plural1stPerson: Word('разгораемся', 6),
  plural2ndPerson: Word('разгораетесь', 6),
  plural3rdPerson: Word('разгораются', 6),
  masculinePast: Word('разгорался', 6),
  femininePast: Word('разгоралась', 6),
  neuterPast: Word('разгоралось', 6),
  pluralPast: Word('разгорались', 6),
  imperativeInformal: Word('разгорайся', 6),
  imperativeFormal: Word('разгорайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разгораться.name.text, разгораться);

export { разгораться };