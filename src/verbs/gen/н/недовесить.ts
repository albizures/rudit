import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недовесить: PerfectVerb = {
  name: Word('недовесить', 5),
  singular1stPerson: Word('недовешу', 5),
  singular2ndPerson: Word('недовесишь', 5),
  singular3rdPerson: Word('недовесит', 5),
  plural1stPerson: Word('недовесим', 5),
  plural2ndPerson: Word('недовесите', 5),
  plural3rdPerson: Word('недовесят', 5),
  masculinePast: Word('недовесил', 5),
  femininePast: Word('недовесила', 5),
  neuterPast: Word('недовесило', 5),
  pluralPast: Word('недовесили', 5),
  imperativeInformal: Word('недовесь', 5),
  imperativeFormal: Word('недовесьте', 5),
  imperfect: [],
};

perfectVerbs.set(недовесить.name.text, недовесить);

export { недовесить };