import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заклубить: PerfectVerb = {
  name: Word('заклубить', 6),
  singular1stPerson: Word('заклублю', 7),
  singular2ndPerson: Word('заклубишь', 6),
  singular3rdPerson: Word('заклубит', 6),
  plural1stPerson: Word('заклубим', 6),
  plural2ndPerson: Word('заклубите', 6),
  plural3rdPerson: Word('заклубят', 6),
  masculinePast: Word('заклубил', 6),
  femininePast: Word('заклубила', 6),
  neuterPast: Word('заклубило', 6),
  pluralPast: Word('заклубили', 6),
  imperativeInformal: Word('заклуби', 6),
  imperativeFormal: Word('заклубите', 6),
  imperfect: [],
};

perfectVerbs.set(заклубить.name.text, заклубить);

export { заклубить };