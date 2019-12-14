import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дневалить: PerfectVerb = {
  name: Word('дневалить', 4),
  singular1stPerson: Word('дневалю', 4),
  singular2ndPerson: Word('дневалишь', 4),
  singular3rdPerson: Word('дневалит', 4),
  plural1stPerson: Word('дневалим', 4),
  plural2ndPerson: Word('дневалите', 4),
  plural3rdPerson: Word('дневалят', 4),
  masculinePast: Word('дневалил', 4),
  femininePast: Word('дневалила', 4),
  neuterPast: Word('дневалило', 4),
  pluralPast: Word('дневалили', 4),
  imperativeInformal: Word('дневаль', 4),
  imperativeFormal: Word('дневальте', 4),
  imperfect: [],
};

perfectVerbs.set(дневалить.name.text, дневалить);

export { дневалить };