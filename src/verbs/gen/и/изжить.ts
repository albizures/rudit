import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изжить: PerfectVerb = {
  name: Word('изжить', 3),
  singular1stPerson: Word('изживу', 5),
  singular2ndPerson: Word('изживёшь', 0),
  singular3rdPerson: Word('изживёт', 0),
  plural1stPerson: Word('изживём', 0),
  plural2ndPerson: Word('изживёте', 7),
  plural3rdPerson: Word('изживут', 5),
  masculinePast: Word('изжил', 3),
  femininePast: Word('изжила', 5),
  neuterPast: Word('изжило', 3),
  pluralPast: Word('изжили', 3),
  imperativeInformal: Word('изживи', 5),
  imperativeFormal: Word('изживите', 5),
  imperfect: [],
};

perfectVerbs.set(изжить.name.text, изжить);

export { изжить };