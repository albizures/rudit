import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const саккомпанировать: PerfectVerb = {
  name: Word('саккомпанировать', 9),
  singular1stPerson: Word('саккомпанирую', 9),
  singular2ndPerson: Word('саккомпанируешь', 9),
  singular3rdPerson: Word('саккомпанирует', 9),
  plural1stPerson: Word('саккомпанируем', 9),
  plural2ndPerson: Word('саккомпанируете', 9),
  plural3rdPerson: Word('саккомпанируют', 9),
  masculinePast: Word('саккомпанировал', 9),
  femininePast: Word('саккомпанировала', 9),
  neuterPast: Word('саккомпанировало', 9),
  pluralPast: Word('саккомпанировали', 9),
  imperativeInformal: Word('саккомпанируй', 9),
  imperativeFormal: Word('саккомпанируйте', 9),
  imperfect: [],
};

perfectVerbs.set(саккомпанировать.name.text, саккомпанировать);

export { саккомпанировать };