import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приголубить: PerfectVerb = {
  name: Word('приголубить', 6),
  singular1stPerson: Word('приголублю', 6),
  singular2ndPerson: Word('приголубишь', 6),
  singular3rdPerson: Word('приголубит', 6),
  plural1stPerson: Word('приголубим', 6),
  plural2ndPerson: Word('приголубите', 6),
  plural3rdPerson: Word('приголубят', 6),
  masculinePast: Word('приголубил', 6),
  femininePast: Word('приголубила', 6),
  neuterPast: Word('приголубило', 6),
  pluralPast: Word('приголубили', 6),
  imperativeInformal: Word('приголубь', 6),
  imperativeFormal: Word('приголубьте', 6),
  imperfect: [],
};

perfectVerbs.set(приголубить.name.text, приголубить);

export { приголубить };