import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const массировать: PerfectVerb = {
  name: Word('массировать', 4),
  singular1stPerson: Word('массирую', 4),
  singular2ndPerson: Word('массируешь', 4),
  singular3rdPerson: Word('массирует', 4),
  plural1stPerson: Word('массируем', 4),
  plural2ndPerson: Word('массируете', 4),
  plural3rdPerson: Word('массируют', 4),
  masculinePast: Word('массировал', 4),
  femininePast: Word('массировала', 4),
  neuterPast: Word('массировало', 4),
  pluralPast: Word('массировали', 4),
  imperativeInformal: Word('массируй', 4),
  imperativeFormal: Word('массируйте', 4),
  imperfect: [],
};

perfectVerbs.set(массировать.name.text, массировать);

export { массировать };