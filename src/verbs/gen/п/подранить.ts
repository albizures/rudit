import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подранить: PerfectVerb = {
  name: Word('подранить', 4),
  singular1stPerson: Word('подраню', 4),
  singular2ndPerson: Word('подранишь', 4),
  singular3rdPerson: Word('подранит', 4),
  plural1stPerson: Word('подраним', 4),
  plural2ndPerson: Word('подраните', 4),
  plural3rdPerson: Word('подранят', 4),
  masculinePast: Word('подранил', 4),
  femininePast: Word('подранила', 4),
  neuterPast: Word('подранило', 4),
  pluralPast: Word('подранили', 4),
  imperativeInformal: Word('подрань', 4),
  imperativeFormal: Word('подраньте', 4),
  imperfect: [],
};

perfectVerbs.set(подранить.name.text, подранить);

export { подранить };