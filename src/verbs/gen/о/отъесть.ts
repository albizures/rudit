import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отъесть: PerfectVerb = {
  name: Word('отъесть', 3),
  singular1stPerson: Word('отъем', 3),
  singular2ndPerson: Word('отъешь', 3),
  singular3rdPerson: Word('отъест', 3),
  plural1stPerson: Word('отъедим', 5),
  plural2ndPerson: Word('отъедите', 5),
  plural3rdPerson: Word('отъедят', 5),
  masculinePast: Word('отъел', 3),
  femininePast: Word('отъела', 3),
  neuterPast: Word('отъело', 3),
  pluralPast: Word('отъели', 3),
  imperativeInformal: Word('отъешь', 3),
  imperativeFormal: Word('отъешьте', 3),
  imperfect: [],
};

perfectVerbs.set(отъесть.name.text, отъесть);

export { отъесть };