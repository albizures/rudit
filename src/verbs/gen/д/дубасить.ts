import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дубасить: PerfectVerb = {
  name: Word('дубасить', 3),
  singular1stPerson: Word('дубашу', 3),
  singular2ndPerson: Word('дубасишь', 3),
  singular3rdPerson: Word('дубасит', 3),
  plural1stPerson: Word('дубасим', 3),
  plural2ndPerson: Word('дубасите', 3),
  plural3rdPerson: Word('дубасят', 3),
  masculinePast: Word('дубасил', 3),
  femininePast: Word('дубасила', 3),
  neuterPast: Word('дубасило', 3),
  pluralPast: Word('дубасили', 3),
  imperativeInformal: Word('дубась', 3),
  imperativeFormal: Word('дубасьте', 3),
  imperfect: [],
};

perfectVerbs.set(дубасить.name.text, дубасить);

export { дубасить };