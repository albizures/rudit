import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забранить: PerfectVerb = {
  name: Word('забранить', 6),
  singular1stPerson: Word('забраню', 6),
  singular2ndPerson: Word('забранишь', 6),
  singular3rdPerson: Word('забранит', 6),
  plural1stPerson: Word('забраним', 6),
  plural2ndPerson: Word('забраните', 6),
  plural3rdPerson: Word('забранят', 6),
  masculinePast: Word('забранил', 6),
  femininePast: Word('забранила', 6),
  neuterPast: Word('забранило', 6),
  pluralPast: Word('забранили', 6),
  imperativeInformal: Word('забрани', 6),
  imperativeFormal: Word('забраните', 6),
  imperfect: [],
};

perfectVerbs.set(забранить.name.text, забранить);

export { забранить };