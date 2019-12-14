import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взъесться: PerfectVerb = {
  name: Word('взъесться', 3),
  singular1stPerson: Word('взъемся', 3),
  singular2ndPerson: Word('взъешься', 3),
  singular3rdPerson: Word('взъестся', 3),
  plural1stPerson: Word('взъедимся', 5),
  plural2ndPerson: Word('взъедитесь', 5),
  plural3rdPerson: Word('взъедятся', 5),
  masculinePast: Word('взъелся', 3),
  femininePast: Word('взъелась$II(взъедатлась', 3),
  neuterPast: Word('взъелась$II(взъедатлось', 3),
  pluralPast: Word('взъелась$II(взъедатлись', 3),
  imperativeInformal: Word('взъешься', 3),
  imperativeFormal: Word('взъешьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(взъесться.name.text, взъесться);

export { взъесться };