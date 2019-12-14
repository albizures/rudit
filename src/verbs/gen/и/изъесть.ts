import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изъесть: PerfectVerb = {
  name: Word('изъесть', 3),
  singular1stPerson: Word('изъем', 3),
  singular2ndPerson: Word('изъешь', 3),
  singular3rdPerson: Word('изъест', 3),
  plural1stPerson: Word('изъедим', 5),
  plural2ndPerson: Word('изъедите', 5),
  plural3rdPerson: Word('изъедят', 5),
  masculinePast: Word('изъел', 3),
  femininePast: Word('изъела', 3),
  neuterPast: Word('изъело', 3),
  pluralPast: Word('изъели', 3),
  imperativeInformal: Word('изъешь', 3),
  imperativeFormal: Word('изъешьте', 3),
  imperfect: [],
};

perfectVerbs.set(изъесть.name.text, изъесть);

export { изъесть };