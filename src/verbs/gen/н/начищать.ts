import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начищать: PerfectVerb = {
  name: Word('начищать', 5),
  singular1stPerson: Word('начищаю', 5),
  singular2ndPerson: Word('начищаешь', 5),
  singular3rdPerson: Word('начищает', 5),
  plural1stPerson: Word('начищаем', 5),
  plural2ndPerson: Word('начищаете', 5),
  plural3rdPerson: Word('начищают', 5),
  masculinePast: Word('начищал', 5),
  femininePast: Word('начищала', 5),
  neuterPast: Word('начищало', 5),
  pluralPast: Word('начищали', 5),
  imperativeInformal: Word('начищай', 5),
  imperativeFormal: Word('начищайте', 5),
  imperfect: [],
};

perfectVerbs.set(начищать.name.text, начищать);

export { начищать };