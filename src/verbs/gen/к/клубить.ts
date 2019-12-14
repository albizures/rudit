import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клубить: PerfectVerb = {
  name: Word('клубить', 4),
  singular1stPerson: Word('клублю', 5),
  singular2ndPerson: Word('клубишь', 4),
  singular3rdPerson: Word('клубит', 4),
  plural1stPerson: Word('клубим', 4),
  plural2ndPerson: Word('клубите', 4),
  plural3rdPerson: Word('клубят', 4),
  masculinePast: Word('клубил', 4),
  femininePast: Word('клубила', 4),
  neuterPast: Word('клубило', 4),
  pluralPast: Word('клубили', 4),
  imperativeInformal: Word('клуби', 4),
  imperativeFormal: Word('клубите', 4),
  imperfect: [],
};

perfectVerbs.set(клубить.name.text, клубить);

export { клубить };