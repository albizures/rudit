import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порубить: PerfectVerb = {
  name: Word('порубить', 5),
  singular1stPerson: Word('порублю', 6),
  singular2ndPerson: Word('порубишь', 3),
  singular3rdPerson: Word('порубит', 3),
  plural1stPerson: Word('порубим', 3),
  plural2ndPerson: Word('порубите', 3),
  plural3rdPerson: Word('порубят', 3),
  masculinePast: Word('порубил', 5),
  femininePast: Word('порубила', 5),
  neuterPast: Word('порубило', 5),
  pluralPast: Word('порубили', 5),
  imperativeInformal: Word('поруби', 5),
  imperativeFormal: Word('порубите', 5),
  imperfect: ['рубить'],
};

perfectVerbs.set(порубить.name.text, порубить);

export { порубить };