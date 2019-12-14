import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умиляться: PerfectVerb = {
  name: Word('умиляться', 4),
  singular1stPerson: Word('умиляюсь', 4),
  singular2ndPerson: Word('умиляешься', 4),
  singular3rdPerson: Word('умиляется', 4),
  plural1stPerson: Word('умиляемся', 4),
  plural2ndPerson: Word('умиляетесь', 4),
  plural3rdPerson: Word('умиляются', 4),
  masculinePast: Word('умилялся', 4),
  femininePast: Word('умилялась', 4),
  neuterPast: Word('умилялось', 4),
  pluralPast: Word('умилялись', 4),
  imperativeInformal: Word('умиляйся', 4),
  imperativeFormal: Word('умиляйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(умиляться.name.text, умиляться);

export { умиляться };