import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгуляться: PerfectVerb = {
  name: Word('разгуляться', 6),
  singular1stPerson: Word('разгуляюсь', 6),
  singular2ndPerson: Word('разгуляешься', 6),
  singular3rdPerson: Word('разгуляется', 6),
  plural1stPerson: Word('разгуляемся', 6),
  plural2ndPerson: Word('разгуляетесь', 6),
  plural3rdPerson: Word('разгуляются', 6),
  masculinePast: Word('разгулялся', 6),
  femininePast: Word('разгулялась', 6),
  neuterPast: Word('разгулялось', 6),
  pluralPast: Word('разгулялись', 6),
  imperativeInformal: Word('разгуляйся', 6),
  imperativeFormal: Word('разгуляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разгуляться.name.text, разгуляться);

export { разгуляться };