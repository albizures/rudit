import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начать: PerfectVerb = {
  name: Word('начать', 3),
  singular1stPerson: Word('начну', 4),
  singular2ndPerson: Word('начнёшь', 1),
  singular3rdPerson: Word('начнёт', 1),
  plural1stPerson: Word('начнём', 1),
  plural2ndPerson: Word('начнёте', 1),
  plural3rdPerson: Word('начнут', 4),
  masculinePast: Word('начал', 1),
  femininePast: Word('начала', 5),
  neuterPast: Word('начало', 1),
  pluralPast: Word('начали', 1),
  imperativeInformal: Word('начни', 4),
  imperativeFormal: Word('начните', 4),
  imperfect: ['начинать'],
};

perfectVerbs.set(начать.name.text, начать);

export { начать };