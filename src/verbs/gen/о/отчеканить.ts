import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчеканить: PerfectVerb = {
  name: Word('отчеканить', 5),
  singular1stPerson: Word('отчеканю', 5),
  singular2ndPerson: Word('отчеканишь', 5),
  singular3rdPerson: Word('отчеканит', 5),
  plural1stPerson: Word('отчеканим', 5),
  plural2ndPerson: Word('отчеканите', 5),
  plural3rdPerson: Word('отчеканят', 5),
  masculinePast: Word('отчеканил', 5),
  femininePast: Word('отчеканила', 5),
  neuterPast: Word('отчеканило', 5),
  pluralPast: Word('отчеканили', 5),
  imperativeInformal: Word('отчекань', 5),
  imperativeFormal: Word('отчеканьте', 5),
  imperfect: [],
};

perfectVerbs.set(отчеканить.name.text, отчеканить);

export { отчеканить };