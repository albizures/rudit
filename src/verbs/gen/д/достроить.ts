import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const достроить: PerfectVerb = {
  name: Word('достроить', 5),
  singular1stPerson: Word('дострою', 5),
  singular2ndPerson: Word('достроишь', 5),
  singular3rdPerson: Word('достроит', 5),
  plural1stPerson: Word('достроим', 5),
  plural2ndPerson: Word('достроите', 5),
  plural3rdPerson: Word('достроят', 5),
  masculinePast: Word('достроил', 5),
  femininePast: Word('достроила', 5),
  neuterPast: Word('достроило', 5),
  pluralPast: Word('достроили', 5),
  imperativeInformal: Word('дострой', 5),
  imperativeFormal: Word('достройте', 5),
  imperfect: [],
};

perfectVerbs.set(достроить.name.text, достроить);

export { достроить };