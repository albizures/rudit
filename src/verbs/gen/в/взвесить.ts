import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвесить: PerfectVerb = {
  name: Word('взвесить', 3),
  singular1stPerson: Word('взвешу', 3),
  singular2ndPerson: Word('взвесишь', 3),
  singular3rdPerson: Word('взвесит', 3),
  plural1stPerson: Word('взвесим', 3),
  plural2ndPerson: Word('взвесите', 3),
  plural3rdPerson: Word('взвесят', 3),
  masculinePast: Word('взвесил', 3),
  femininePast: Word('взвесила', 3),
  neuterPast: Word('взвесило', 3),
  pluralPast: Word('взвесили', 3),
  imperativeInformal: Word('взвесь', 3),
  imperativeFormal: Word('взвесьте', 3),
  imperfect: ['взвешивать'],
};

perfectVerbs.set(взвесить.name.text, взвесить);

export { взвесить };