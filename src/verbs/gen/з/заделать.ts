import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заделать: PerfectVerb = {
  name: Word('заделать', 3),
  singular1stPerson: Word('заделаю', 3),
  singular2ndPerson: Word('заделаешь', 3),
  singular3rdPerson: Word('заделает', 3),
  plural1stPerson: Word('заделаем', 3),
  plural2ndPerson: Word('заделаете', 3),
  plural3rdPerson: Word('заделают', 3),
  masculinePast: Word('заделал', 3),
  femininePast: Word('заделала', 3),
  neuterPast: Word('заделало', 3),
  pluralPast: Word('заделали', 3),
  imperativeInformal: Word('заделай', 3),
  imperativeFormal: Word('заделайте', 3),
  imperfect: [],
};

perfectVerbs.set(заделать.name.text, заделать);

export { заделать };