import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бюллетенить: PerfectVerb = {
  name: Word('бюллетенить', 6),
  singular1stPerson: Word('бюллетеню', 6),
  singular2ndPerson: Word('бюллетенишь', 6),
  singular3rdPerson: Word('бюллетенит', 6),
  plural1stPerson: Word('бюллетеним', 6),
  plural2ndPerson: Word('бюллетените', 6),
  plural3rdPerson: Word('бюллетенят', 6),
  masculinePast: Word('бюллетенил', 6),
  femininePast: Word('бюллетенила', 6),
  neuterPast: Word('бюллетенило', 6),
  pluralPast: Word('бюллетенили', 6),
  imperativeInformal: Word('бюллетень', 6),
  imperativeFormal: Word('бюллетеньте', 6),
  imperfect: [],
};

perfectVerbs.set(бюллетенить.name.text, бюллетенить);

export { бюллетенить };