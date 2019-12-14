import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разделяться: PerfectVerb = {
  name: Word('разделяться', 6),
  singular1stPerson: Word('разделяюсь', 6),
  singular2ndPerson: Word('разделяешься', 6),
  singular3rdPerson: Word('разделяется', 6),
  plural1stPerson: Word('разделяемся', 6),
  plural2ndPerson: Word('разделяетесь', 6),
  plural3rdPerson: Word('разделяются', 6),
  masculinePast: Word('разделялся', 6),
  femininePast: Word('разделялась', 6),
  neuterPast: Word('разделялось', 6),
  pluralPast: Word('разделялись', 6),
  imperativeInformal: Word('разделяйся', 6),
  imperativeFormal: Word('разделяйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разделяться.name.text, разделяться);

export { разделяться };