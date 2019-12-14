import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повесить: PerfectVerb = {
  name: Word('повесить', 3),
  singular1stPerson: Word('повешу', 3),
  singular2ndPerson: Word('повесишь', 3),
  singular3rdPerson: Word('повесит', 3),
  plural1stPerson: Word('повесим', 3),
  plural2ndPerson: Word('повесите', 3),
  plural3rdPerson: Word('повесят', 3),
  masculinePast: Word('повесил', 3),
  femininePast: Word('повесила', 3),
  neuterPast: Word('повесило', 3),
  pluralPast: Word('повесили', 3),
  imperativeInformal: Word('повесь', 3),
  imperativeFormal: Word('повесьте', 3),
  imperfect: ['вешать'],
};

perfectVerbs.set(повесить.name.text, повесить);

export { повесить };