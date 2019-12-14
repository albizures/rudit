import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжалобить: PerfectVerb = {
  name: Word('разжалобить', 8),
  singular1stPerson: Word('разжалоблю', 6),
  singular2ndPerson: Word('разжалобишь', 6),
  singular3rdPerson: Word('разжалобит', 6),
  plural1stPerson: Word('разжалобим', 6),
  plural2ndPerson: Word('разжалобите', 6),
  plural3rdPerson: Word('разжалобят', 6),
  masculinePast: Word('разжалобил', 8),
  femininePast: Word('разжалобила', 8),
  neuterPast: Word('разжалобило', 8),
  pluralPast: Word('разжалобили', 8),
  imperativeInformal: Word('разжалоби//разжало'бь', 6),
  imperativeFormal: Word('разжалобьте', 6),
  imperfect: [],
};

perfectVerbs.set(разжалобить.name.text, разжалобить);

export { разжалобить };