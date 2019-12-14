import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рубить: PerfectVerb = {
  name: Word('рубить', 3),
  singular1stPerson: Word('рублю', 4),
  singular2ndPerson: Word('рубишь', 1),
  singular3rdPerson: Word('рубит', 1),
  plural1stPerson: Word('рубим', 1),
  plural2ndPerson: Word('рубите', 1),
  plural3rdPerson: Word('рубят', 1),
  masculinePast: Word('рубил', 3),
  femininePast: Word('рубила', 3),
  neuterPast: Word('рубило', 3),
  pluralPast: Word('рубили', 3),
  imperativeInformal: Word('руби', 3),
  imperativeFormal: Word('рубите', 3),
  imperfect: ['порубить'],
};

perfectVerbs.set(рубить.name.text, рубить);

export { рубить };