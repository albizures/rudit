import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побесить: PerfectVerb = {
  name: Word('побесить', 5),
  singular1stPerson: Word('побешу', 5),
  singular2ndPerson: Word('побесишь', 3),
  singular3rdPerson: Word('побесит', 3),
  plural1stPerson: Word('побесим', 3),
  plural2ndPerson: Word('побесите', 3),
  plural3rdPerson: Word('побесят', 3),
  masculinePast: Word('побесил', 5),
  femininePast: Word('побесила', 5),
  neuterPast: Word('побесило', 5),
  pluralPast: Word('побесили', 5),
  imperativeInformal: Word('побеси', 5),
  imperativeFormal: Word('побесите', 5),
  imperfect: [],
};

perfectVerbs.set(побесить.name.text, побесить);

export { побесить };