import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разоряться: PerfectVerb = {
  name: Word('разоряться', 5),
  singular1stPerson: Word('разоряюсь', 5),
  singular2ndPerson: Word('разоряешься', 5),
  singular3rdPerson: Word('разоряется', 5),
  plural1stPerson: Word('разоряемся', 5),
  plural2ndPerson: Word('разоряетесь', 5),
  plural3rdPerson: Word('разоряются', 5),
  masculinePast: Word('разорялся', 5),
  femininePast: Word('разорялась', 5),
  neuterPast: Word('разорялось', 5),
  pluralPast: Word('разорялись', 5),
  imperativeInformal: Word('разоряйся', 5),
  imperativeFormal: Word('разоряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(разоряться.name.text, разоряться);

export { разоряться };