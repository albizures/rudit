import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разуверяться: PerfectVerb = {
  name: Word('разуверяться', 7),
  singular1stPerson: Word('разуверяюсь', 7),
  singular2ndPerson: Word('разуверяешься', 7),
  singular3rdPerson: Word('разуверяется', 7),
  plural1stPerson: Word('разуверяемся', 7),
  plural2ndPerson: Word('разуверяетесь', 7),
  plural3rdPerson: Word('разуверяются', 7),
  masculinePast: Word('разуверялся', 7),
  femininePast: Word('разуверялась', 7),
  neuterPast: Word('разуверялось', 7),
  pluralPast: Word('разуверялись', 7),
  imperativeInformal: Word('разуверяйся', 7),
  imperativeFormal: Word('разуверяйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разуверяться.name.text, разуверяться);

export { разуверяться };