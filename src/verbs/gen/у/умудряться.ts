import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умудряться: PerfectVerb = {
  name: Word('умудряться', 5),
  singular1stPerson: Word('умудряюсь', 5),
  singular2ndPerson: Word('умудряешься', 5),
  singular3rdPerson: Word('умудряется', 5),
  plural1stPerson: Word('умудряемся', 5),
  plural2ndPerson: Word('умудряетесь', 5),
  plural3rdPerson: Word('умудряются', 5),
  masculinePast: Word('умудрялся', 5),
  femininePast: Word('умудрялась', 5),
  neuterPast: Word('умудрялось', 5),
  pluralPast: Word('умудрялись', 5),
  imperativeInformal: Word('умудряйся', 5),
  imperativeFormal: Word('умудряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(умудряться.name.text, умудряться);

export { умудряться };