import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заесть: PerfectVerb = {
  name: Word('заесть', 2),
  singular1stPerson: Word('заем', 2),
  singular2ndPerson: Word('заешь', 2),
  singular3rdPerson: Word('заест', 2),
  plural1stPerson: Word('заедим', 4),
  plural2ndPerson: Word('заедите', 4),
  plural3rdPerson: Word('заедят', 4),
  masculinePast: Word('заел', 2),
  femininePast: Word('заела', 2),
  neuterPast: Word('заело', 2),
  pluralPast: Word('заели', 2),
  imperativeInformal: Word('заешь', 2),
  imperativeFormal: Word('заешьте', 2),
  imperfect: [],
};

perfectVerbs.set(заесть.name.text, заесть);

export { заесть };