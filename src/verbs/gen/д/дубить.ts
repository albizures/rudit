import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дубить: PerfectVerb = {
  name: Word('дубить', 3),
  singular1stPerson: Word('дублю', 4),
  singular2ndPerson: Word('дубишь', 3),
  singular3rdPerson: Word('дубит', 3),
  plural1stPerson: Word('дубим', 3),
  plural2ndPerson: Word('дубите', 3),
  plural3rdPerson: Word('дубят', 3),
  masculinePast: Word('дубил', 3),
  femininePast: Word('дубила', 3),
  neuterPast: Word('дубило', 3),
  pluralPast: Word('дубили', 3),
  imperativeInformal: Word('дуби', 3),
  imperativeFormal: Word('дубите', 3),
  imperfect: [],
};

perfectVerbs.set(дубить.name.text, дубить);

export { дубить };