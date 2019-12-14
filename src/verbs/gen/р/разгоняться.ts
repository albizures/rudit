import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгоняться: PerfectVerb = {
  name: Word('разгоняться', 6),
  singular1stPerson: Word('разгоняюсь', 6),
  singular2ndPerson: Word('разгоняешься', 6),
  singular3rdPerson: Word('разгоняется', 6),
  plural1stPerson: Word('разгоняемся', 6),
  plural2ndPerson: Word('разгоняетесь', 6),
  plural3rdPerson: Word('разгоняются', 6),
  masculinePast: Word('разгонялся', 6),
  femininePast: Word('разгонялась', 6),
  neuterPast: Word('разгонялось', 6),
  pluralPast: Word('разгонялись', 6),
  imperativeInformal: Word('разгоняйся', 6),
  imperativeFormal: Word('разгоняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разгоняться.name.text, разгоняться);

export { разгоняться };