import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протрубить: PerfectVerb = {
  name: Word('протрубить', 7),
  singular1stPerson: Word('протрублю', 8),
  singular2ndPerson: Word('протрубишь', 7),
  singular3rdPerson: Word('протрубит', 7),
  plural1stPerson: Word('протрубим', 7),
  plural2ndPerson: Word('протрубите', 7),
  plural3rdPerson: Word('протрубят', 7),
  masculinePast: Word('протрубил', 7),
  femininePast: Word('протрубила', 7),
  neuterPast: Word('протрубило', 7),
  pluralPast: Word('протрубили', 7),
  imperativeInformal: Word('протруби', 7),
  imperativeFormal: Word('протрубите', 7),
  imperfect: [],
};

perfectVerbs.set(протрубить.name.text, протрубить);

export { протрубить };