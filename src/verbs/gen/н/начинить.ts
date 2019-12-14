import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начинить: PerfectVerb = {
  name: Word('начинить', 5),
  singular1stPerson: Word('начиню', 5),
  singular2ndPerson: Word('начинишь', 5),
  singular3rdPerson: Word('начинит', 5),
  plural1stPerson: Word('начиним', 5),
  plural2ndPerson: Word('начините', 5),
  plural3rdPerson: Word('начинят', 5),
  masculinePast: Word('начинил', 5),
  femininePast: Word('начинила', 5),
  neuterPast: Word('начинило', 5),
  pluralPast: Word('начинили', 5),
  imperativeInformal: Word('начини', 5),
  imperativeFormal: Word('начините', 5),
  imperfect: [],
};

perfectVerbs.set(начинить.name.text, начинить);

export { начинить };