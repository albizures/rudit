import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дружить: PerfectVerb = {
  name: Word('дружить', 4),
  singular1stPerson: Word('дружу', 4),
  singular2ndPerson: Word('дружишь', 2),
  singular3rdPerson: Word('дружит', 2),
  plural1stPerson: Word('дружим', 2),
  plural2ndPerson: Word('дружите', 2),
  plural3rdPerson: Word('дружат', 2),
  masculinePast: Word('дружил', 4),
  femininePast: Word('дружила', 4),
  neuterPast: Word('дружило', 4),
  pluralPast: Word('дружили', 4),
  imperativeInformal: Word('дружи', 4),
  imperativeFormal: Word('дружите', 4),
  imperfect: [],
};

perfectVerbs.set(дружить.name.text, дружить);

export { дружить };