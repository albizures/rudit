import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвесить: PerfectVerb = {
  name: Word('отвесить', 3),
  singular1stPerson: Word('отвешу', 3),
  singular2ndPerson: Word('отвесишь', 3),
  singular3rdPerson: Word('отвесит', 3),
  plural1stPerson: Word('отвесим', 3),
  plural2ndPerson: Word('отвесите', 3),
  plural3rdPerson: Word('отвесят', 3),
  masculinePast: Word('отвесил', 3),
  femininePast: Word('отвесила', 3),
  neuterPast: Word('отвесило', 3),
  pluralPast: Word('отвесили', 3),
  imperativeInformal: Word('отвесь', 3),
  imperativeFormal: Word('отвесьте', 3),
  imperfect: [],
};

perfectVerbs.set(отвесить.name.text, отвесить);

export { отвесить };