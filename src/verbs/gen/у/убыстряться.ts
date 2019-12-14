import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убыстряться: PerfectVerb = {
  name: Word('убыстряться', 6),
  singular1stPerson: Word('убыстряюсь', 6),
  singular2ndPerson: Word('убыстряешься', 6),
  singular3rdPerson: Word('убыстряется', 6),
  plural1stPerson: Word('убыстряемся', 6),
  plural2ndPerson: Word('убыстряетесь', 6),
  plural3rdPerson: Word('убыстряются', 6),
  masculinePast: Word('убыстрялся', 6),
  femininePast: Word('убыстрялась', 6),
  neuterPast: Word('убыстрялось', 6),
  pluralPast: Word('убыстрялись', 6),
  imperativeInformal: Word('убыстряйся', 6),
  imperativeFormal: Word('убыстряйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(убыстряться.name.text, убыстряться);

export { убыстряться };