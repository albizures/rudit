import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снисходить: PerfectVerb = {
  name: Word('снисходить', 7),
  singular1stPerson: Word('снисхожу', 7),
  singular2ndPerson: Word('снисходишь', 5),
  singular3rdPerson: Word('снисходит', 5),
  plural1stPerson: Word('снисходим', 5),
  plural2ndPerson: Word('снисходите', 5),
  plural3rdPerson: Word('снисходят', 5),
  masculinePast: Word('снисходил', 7),
  femininePast: Word('снисходила', 7),
  neuterPast: Word('снисходило', 7),
  pluralPast: Word('снисходили', 7),
  imperativeInformal: Word('снисходи', 7),
  imperativeFormal: Word('снисходите', 7),
  imperfect: [],
};

perfectVerbs.set(снисходить.name.text, снисходить);

export { снисходить };