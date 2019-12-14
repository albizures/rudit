import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригубить: PerfectVerb = {
  name: Word('пригубить', 4),
  singular1stPerson: Word('пригублю', 4),
  singular2ndPerson: Word('пригубишь', 4),
  singular3rdPerson: Word('пригубит', 4),
  plural1stPerson: Word('пригубим', 4),
  plural2ndPerson: Word('пригубите', 4),
  plural3rdPerson: Word('пригубят', 4),
  masculinePast: Word('пригубил', 4),
  femininePast: Word('пригубила', 4),
  neuterPast: Word('пригубило', 4),
  pluralPast: Word('пригубили', 4),
  imperativeInformal: Word('пригубь', 4),
  imperativeFormal: Word('пригубьте', 4),
  imperfect: [],
};

perfectVerbs.set(пригубить.name.text, пригубить);

export { пригубить };