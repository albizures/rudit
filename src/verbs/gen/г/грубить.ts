import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грубить: PerfectVerb = {
  name: Word('грубить', 4),
  singular1stPerson: Word('грублю', 5),
  singular2ndPerson: Word('грубишь', 4),
  singular3rdPerson: Word('грубит', 4),
  plural1stPerson: Word('грубим', 4),
  plural2ndPerson: Word('грубите', 4),
  plural3rdPerson: Word('грубят', 4),
  masculinePast: Word('грубил', 4),
  femininePast: Word('грубила', 4),
  neuterPast: Word('грубило', 4),
  pluralPast: Word('грубили', 4),
  imperativeInformal: Word('груби', 4),
  imperativeFormal: Word('грубите', 4),
  imperfect: [],
};

perfectVerbs.set(грубить.name.text, грубить);

export { грубить };