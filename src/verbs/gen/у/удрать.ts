import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удрать: PerfectVerb = {
  name: Word('удрать', 3),
  singular1stPerson: Word('удеру', 4),
  singular2ndPerson: Word('удерёшь', 2),
  singular3rdPerson: Word('удерёт', 2),
  plural1stPerson: Word('удерём', 2),
  plural2ndPerson: Word('удерёте', 2),
  plural3rdPerson: Word('удерут', 4),
  masculinePast: Word('удрал', 3),
  femininePast: Word('удрала', 3),
  neuterPast: Word('удрало', 3),
  pluralPast: Word('удрали', 3),
  imperativeInformal: Word('удери', 4),
  imperativeFormal: Word('удерите', 4),
  imperfect: ['удирать'],
};

perfectVerbs.set(удрать.name.text, удрать);

export { удрать };