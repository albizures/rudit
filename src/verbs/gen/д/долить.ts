import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const долить: PerfectVerb = {
  name: Word('долить', 3),
  singular1stPerson: Word('долью', 4),
  singular2ndPerson: Word('дольёшь', 1),
  singular3rdPerson: Word('дольёт', 1),
  plural1stPerson: Word('дольём', 1),
  plural2ndPerson: Word('дольёте', 6),
  plural3rdPerson: Word('дольют', 4),
  masculinePast: Word('долил//до'лил', 3),
  femininePast: Word('долила', 5),
  neuterPast: Word('долило//до'лило', 3),
  pluralPast: Word('долили//до'лили', 3),
  imperativeInformal: Word('долей', 3),
  imperativeFormal: Word('долейте', 3),
  imperfect: [],
};

perfectVerbs.set(долить.name.text, долить);

export { долить };