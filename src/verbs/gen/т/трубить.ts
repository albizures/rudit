import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трубить: PerfectVerb = {
  name: Word('трубить', 4),
  singular1stPerson: Word('трублю', 5),
  singular2ndPerson: Word('трубишь', 4),
  singular3rdPerson: Word('трубит', 4),
  plural1stPerson: Word('трубим', 4),
  plural2ndPerson: Word('трубите', 4),
  plural3rdPerson: Word('трубят', 4),
  masculinePast: Word('трубил', 4),
  femininePast: Word('трубила', 4),
  neuterPast: Word('трубило', 4),
  pluralPast: Word('трубили', 4),
  imperativeInformal: Word('труби', 4),
  imperativeFormal: Word('трубите', 4),
  imperfect: [],
};

perfectVerbs.set(трубить.name.text, трубить);

export { трубить };