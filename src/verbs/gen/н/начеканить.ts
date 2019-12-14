import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начеканить: PerfectVerb = {
  name: Word('начеканить', 5),
  singular1stPerson: Word('начеканю', 5),
  singular2ndPerson: Word('начеканишь', 5),
  singular3rdPerson: Word('начеканит', 5),
  plural1stPerson: Word('начеканим', 5),
  plural2ndPerson: Word('начеканите', 5),
  plural3rdPerson: Word('начеканят', 5),
  masculinePast: Word('начеканил', 5),
  femininePast: Word('начеканила', 5),
  neuterPast: Word('начеканило', 5),
  pluralPast: Word('начеканили', 5),
  imperativeInformal: Word('начекань', 5),
  imperativeFormal: Word('начеканьте', 5),
  imperfect: [],
};

perfectVerbs.set(начеканить.name.text, начеканить);

export { начеканить };